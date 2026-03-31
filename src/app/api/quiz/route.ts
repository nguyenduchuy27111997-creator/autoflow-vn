import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { enqueueEmailSequence } from "@/lib/email-queue";
import { sendCapiEvent } from "@/lib/capi";

const RATE_LIMIT_WINDOW = 60 * 60 * 1000;
const MAX_REQUESTS = 10;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot
    if (body.website) return NextResponse.json({ success: true });

    // Rate limit
    const clientKey = getRateLimitKey(req);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { error: "Quá nhiều yêu cầu." },
        { status: 429 }
      );
    }

    const {
      name, email, phone, score, result_tier, answers,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content,
      event_id,
    } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email không hợp lệ." }, { status: 400 });
    }

    // Save to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("quiz_leads").insert({
      name: name?.trim() || null,
      email: email.trim(),
      phone: phone?.trim() || null,
      score,
      result_tier,
      answers: answers || {},
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_term: utm_term || null,
      utm_content: utm_content || null,
    });

    if (dbError) {
      console.error("Quiz Supabase error:", dbError);
      return NextResponse.json({ error: "Lỗi lưu dữ liệu." }, { status: 500 });
    }

    // Enqueue email sequence (fire-and-forget)
    enqueueEmailSequence({
      email: email.trim(),
      name: name?.trim(),
      sequenceType: "quiz",
      metadata: { score, tier: result_tier },
    }).catch((err) => console.error("Email queue error (quiz):", err));

    // CAPI Lead event (fire-and-forget)
    if (event_id) {
      sendCapiEvent({
        eventName: "Lead",
        eventId: event_id,
        sourceUrl: `${req.headers.get("origin") || "https://autoflowvn.net"}/quiz`,
        userEmail: email.trim(),
        userPhone: phone?.trim(),
        userName: name?.trim(),
        clientIp: getRateLimitKey(req),
        clientUserAgent: req.headers.get("user-agent") || undefined,
        customData: {
          content_name: "quiz",
          content_category: "lead_gen",
          value: score,
        },
      }).catch((err) => console.error("CAPI error (quiz):", err));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Có lỗi xảy ra." }, { status: 500 });
  }
}
