import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { createAdminClient } from "@/lib/supabase/admin";
import { notifyTelegram, formatBookingConfirmedNotify } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Must use raw text for signature verification
    const signature = req.headers.get("x-cal-signature-256") ?? "";
    const secret = process.env.CAL_WEBHOOK_SECRET;

    // Verify HMAC signature
    if (secret) {
      const expectedSig = crypto
        .createHmac("sha256", secret)
        .update(body)
        .digest("hex");
      if (signature !== expectedSig) {
        console.warn("[cal-webhook] Invalid signature");
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    const payload = JSON.parse(body);
    const triggerEvent = payload.triggerEvent; // "BOOKING_CREATED" | "BOOKING_CANCELLED" | etc.

    if (triggerEvent === "BOOKING_CREATED") {
      return await handleBookingCreated(payload);
    }
    if (triggerEvent === "BOOKING_CANCELLED" || triggerEvent === "BOOKING_REJECTED") {
      return await handleBookingCancelled(payload);
    }

    return NextResponse.json({ ok: true, ignored: triggerEvent });
  } catch (err) {
    console.error("[cal-webhook] Error:", err);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}

async function handleBookingCreated(payload: Record<string, unknown>): Promise<NextResponse> {
  const data = (payload.payload as Record<string, unknown>) ?? {};
  const attendees = (data.attendees as Array<Record<string, unknown>>) ?? [];
  const primary = attendees[0] ?? {};
  const email = String(primary.email ?? "");
  const name = String(primary.name ?? "");
  const startTime = String(data.startTime ?? "");
  const bookingUid = String(data.uid ?? "");
  const responses = (data.responses as Record<string, unknown>) ?? {};
  // Pain narrative from booking custom field (optional)
  const painFromBooking = String(responses.notes ?? responses.painDescription ?? "");

  const supabase = createAdminClient();

  // Try match existing audit_submission by email (exact)
  const { data: matches } = await supabase
    .from("audit_submissions")
    .select("id, name, phone")
    .eq("email", email)
    .order("created_at", { ascending: false })
    .limit(1);

  let auditId: string | null = matches?.[0]?.id ?? null;

  if (auditId) {
    await supabase
      .from("audit_submissions")
      .update({
        booking_confirmed_at: startTime,
        cal_com_event_id: bookingUid,
      })
      .eq("id", auditId);
  } else {
    // Create new audit_submission from booking (email-based lead)
    const { data: inserted } = await supabase
      .from("audit_submissions")
      .insert({
        name,
        phone: "",
        pain_narrative: painFromBooking || "Via Cal.com booking — no prior audit form",
        source: "cal.com booking",
        status: "new",
        booking_confirmed_at: startTime,
        cal_com_event_id: bookingUid,
      })
      .select("id")
      .single();
    auditId = inserted?.id ?? null;
  }

  // Telegram HOT alert
  try {
    await notifyTelegram(formatBookingConfirmedNotify({
      name,
      email,
      startTime,
      painFromBooking,
      isNewLead: !matches?.[0],
    }));
  } catch (err) {
    console.error("[cal-webhook] Telegram failed (non-fatal):", err);
  }

  return NextResponse.json({ ok: true, auditId, matched: !!matches?.[0] });
}

async function handleBookingCancelled(payload: Record<string, unknown>): Promise<NextResponse> {
  const data = (payload.payload as Record<string, unknown>) ?? {};
  const bookingUid = String(data.uid ?? "");

  const supabase = createAdminClient();
  await supabase
    .from("audit_submissions")
    .update({ booking_confirmed_at: null })
    .eq("cal_com_event_id", bookingUid);

  return NextResponse.json({ ok: true, cancelled: bookingUid });
}
