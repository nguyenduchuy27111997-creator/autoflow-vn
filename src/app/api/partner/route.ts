import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot
    if (body.website_url) return NextResponse.json({ success: true });

    const { name, company, email, phone, partner_type, clients_per_year, website } = body;

    if (!name || !email || !phone || !partner_type) {
      return NextResponse.json({ error: "Vui lòng điền đầy đủ thông tin." }, { status: 400 });
    }

    // Generate referral code
    const code = `AF-${(company || name).replace(/\s+/g, "").toUpperCase().slice(0, 8)}`;

    const supabase = await createClient();
    const { error } = await supabase.from("partner_applications").insert({
      name: name.trim(),
      company: company?.trim() || null,
      email: email.trim(),
      phone: phone.trim(),
      partner_type,
      clients_per_year: clients_per_year || null,
      website: website?.trim() || null,
      referral_code: code,
    });

    if (error) {
      console.error("Partner application error:", error);
      return NextResponse.json({ error: "Có lỗi xảy ra." }, { status: 500 });
    }

    return NextResponse.json({ success: true, referral_code: code });
  } catch {
    return NextResponse.json({ error: "Có lỗi xảy ra." }, { status: 500 });
  }
}
