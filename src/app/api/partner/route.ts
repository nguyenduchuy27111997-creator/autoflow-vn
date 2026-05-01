import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { enqueueEmailSequence } from "@/lib/email-queue";
import { notifyTelegram, formatPartnerNotify } from "@/lib/telegram";
import { isValidEmail } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot
    if (body.website_url) return NextResponse.json({ success: true });

    const { name, company, email, phone, partner_type, clients_per_year, website } = body;

    if (!name || !phone || !partner_type) {
      return NextResponse.json({ error: "Vui lòng điền đầy đủ thông tin." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email không hợp lệ." }, { status: 400 });
    }

    // Generate referral code
    const code = `AF-${(company || name).replace(/\s+/g, "").toUpperCase().slice(0, 8)}`;

    const supabase = await createClient();
    const { error } = await supabase.from("partner_applications").insert({
      name: name.trim(),
      company: company?.trim() || null,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      partner_type,
      clients_per_year: clients_per_year || null,
      website: website?.trim() || null,
      referral_code: code,
    });

    if (error) {
      console.error("Partner application error:", error);
      // Fallback: notify operator via Telegram so lead is not lost completely
      try {
        await notifyTelegram(
          formatPartnerNotify({ name, company, phone, partner_type }) +
            `\n\nWARNING: DB INSERT FAILED — backup contact via this alert. Email: ${email}`
        );
      } catch (notifyErr) {
        console.error("Telegram fallback also failed:", notifyErr);
      }
      return NextResponse.json({ error: "Có lỗi xảy ra." }, { status: 500 });
    }

    // Enqueue partner welcome email
    enqueueEmailSequence({
      email: email.trim().toLowerCase(),
      name: name?.trim(),
      sequenceType: "audit",
      metadata: { partner_type, referral_code: code },
    }).catch((err) => console.error("Email queue error (partner):", err));

    // Telegram notification
    try { await notifyTelegram(formatPartnerNotify({ name, company, phone, partner_type })); } catch (err) { console.error("Telegram notify failed:", err); }

    return NextResponse.json({ success: true, referral_code: code });
  } catch (err) {
    console.error("Partner application unexpected error:", err);
    return NextResponse.json({ error: "Có lỗi xảy ra." }, { status: 500 });
  }
}
