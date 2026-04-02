import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { enqueueEmailSequence } from "@/lib/email-queue";
import { getRateLimitKey, isRateLimited } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot
    if (body.website) return NextResponse.json({ success: true });

    // Rate limit
    const clientKey = getRateLimitKey(req);
    if (isRateLimited(clientKey, "quiz", { maxRequests: 10 })) {
      return NextResponse.json(
        { error: "Quá nhiều yêu cầu." },
        { status: 429 }
      );
    }

    const {
      name, email, phone, score, result_tier, answers,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content,
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

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Có lỗi xảy ra." }, { status: 500 });
  }
}
