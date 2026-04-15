import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
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
    const {
      name,
      phone,
      industry,
      teamSize,
      painPoints,
      details,
      company,
      // New Tier 1 fields
      monthlyVolume,
      painPrimary,
      painFrequency,
      painHoursPerWeek,
      // UTM
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = body;

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
      // Legacy string format for backward compat
      team_size: teamSize ? `${teamSize} người` : null,
      // New numeric column
      team_size_numeric: teamSize ? Number(teamSize) : null,
      // New Tier 1 columns
      monthly_volume: monthlyVolume || null,
      pain_primary: painPrimary || null,
      pain_frequency: painFrequency || null,
      pain_hours_per_week: painHoursPerWeek != null ? Number(painHoursPerWeek) : null,
      // Backward compat: populate pain_points from painPrimary if no array provided
      pain_points: painPoints || (painPrimary ? [painPrimary] : []),
      details: details || null,
      source: req.headers.get("referer") || "direct",
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_term: utm_term || null,
      utm_content: utm_content || null,
    };

    // Save to Supabase — use .select() to retrieve inserted row ID
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("audit_submissions")
      .insert(submission)
      .select("id")
      .single();

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

    // Telegram notification — MUST await in serverless (Netlify kills fire-and-forget promises after response)
    try {
      await notifyTelegram(formatAuditNotify({
        name,
        phone,
        company,
        industry,
        source: submission.source,
        painPrimary: painPrimary || null,
        painHoursPerWeek: painHoursPerWeek != null ? Number(painHoursPerWeek) : null,
        monthlyVolume: monthlyVolume || null,
      }));
    } catch (err) {
      console.error("Telegram notify failed (non-fatal):", err);
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch {
    return NextResponse.json(
      { error: "Có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
