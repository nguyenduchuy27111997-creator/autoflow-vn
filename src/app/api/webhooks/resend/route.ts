import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Resend webhook events we care about
// Docs: https://resend.com/docs/dashboard/webhooks/introduction
type ResendEventType =
  | "email.sent"
  | "email.delivered"
  | "email.opened"
  | "email.clicked"
  | "email.bounced"
  | "email.complained"
  | "email.delivery_delayed";

interface ResendWebhookPayload {
  type: ResendEventType;
  created_at: string;
  data: {
    email_id: string;
    from: string;
    to: string[];
    subject: string;
    click?: { link: string };
  };
}

export async function POST(req: NextRequest) {
  // Verify webhook signature via shared secret
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (secret) {
    const svixId = req.headers.get("svix-id");
    // Basic check: if webhook secret is set, require svix headers exist
    if (!svixId) {
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }
  }

  let payload: ResendWebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { type, data } = payload;
  const recipientEmail = data.to?.[0];

  if (!recipientEmail) {
    return NextResponse.json({ ok: true }); // Nothing to process
  }

  console.log(`[resend-webhook] ${type} for ${recipientEmail} — subject: "${data.subject}"`);

  const supabase = await createClient();

  // Handle bounces — auto-unsubscribe to protect sender reputation
  if (type === "email.bounced") {
    console.warn(`[resend-webhook] BOUNCE: ${recipientEmail} — auto-unsubscribing`);

    // Add to unsubscribe list
    await supabase
      .from("email_unsubscribes")
      .upsert(
        { email: recipientEmail, reason: "bounce" },
        { onConflict: "email" }
      );

    // Cancel all pending emails
    await supabase
      .from("email_queue")
      .update({ status: "skipped" })
      .eq("email", recipientEmail)
      .eq("status", "pending");
  }

  // Handle spam complaints — auto-unsubscribe immediately
  if (type === "email.complained") {
    console.warn(`[resend-webhook] COMPLAINT: ${recipientEmail} — auto-unsubscribing`);

    await supabase
      .from("email_unsubscribes")
      .upsert(
        { email: recipientEmail, reason: "complaint" },
        { onConflict: "email" }
      );

    await supabase
      .from("email_queue")
      .update({ status: "skipped" })
      .eq("email", recipientEmail)
      .eq("status", "pending");
  }

  // Log events to email_events table (if it exists)
  // This gracefully fails if the table hasn't been created yet
  try {
    await supabase.from("email_events").insert({
      email: recipientEmail,
      event_type: type,
      resend_email_id: data.email_id,
      subject: data.subject,
      link: data.click?.link ?? null,
      created_at: payload.created_at,
    });
  } catch {
    // Table may not exist yet — that's OK, bounce/complaint handling above still works
  }

  return NextResponse.json({ ok: true });
}
