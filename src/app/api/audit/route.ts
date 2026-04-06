import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { enqueueEmailSequence } from "@/lib/email-queue";
import { getRateLimitKey, isRateLimited } from "@/lib/rate-limit";
import { notifyTelegram, formatAuditNotify } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true }); // Silent reject
    }

    // Rate limiting
    const clientKey = getRateLimitKey(req);
    if (isRateLimited(clientKey, "audit")) {
      return NextResponse.json(
        { error: "Quá nhiều yêu cầu. Vui lòng thử lại sau." },
        { status: 429 }
      );
    }

    // Validate required fields
    const { name, phone, industry, teamSize, painPoints, details, company,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Vui lòng điền tên và số điện thoại." },
        { status: 400 }
      );
    }

    const submission = {
      name,
      phone,
      company: company || null,
      industry: industry || null,
      team_size: teamSize || null,
      pain_points: painPoints || [],
      details: details || null,
      source: req.headers.get("referer") || "direct",
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_term: utm_term || null,
      utm_content: utm_content || null,
    };

    // Save to Supabase
    const supabase = await createClient();
    const { error } = await supabase
      .from("audit_submissions")
      .insert(submission);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Không thể lưu thông tin. Vui lòng thử lại." },
        { status: 500 }
      );
    }

    // Enqueue email sequence if email provided
    if (body.email && typeof body.email === "string" && body.email.includes("@")) {
      enqueueEmailSequence({
        email: body.email.trim(),
        name: name?.trim(),
        sequenceType: "audit",
      }).catch((err) => console.error("Email queue error (audit):", err));
    }

    // Telegram notification
    notifyTelegram(formatAuditNotify({
      name, phone, company, industry,
      source: submission.source,
    })).catch(() => {});

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
