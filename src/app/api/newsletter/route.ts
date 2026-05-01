import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { enqueueEmailSequence } from "@/lib/email-queue";
import { getRateLimitKey, isRateLimited, isValidEmail } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 signups per hour per IP
    const rateKey = getRateLimitKey(request);
    if (isRateLimited(rateKey, "newsletter", { maxRequests: 5 })) {
      return NextResponse.json(
        { success: false, error: "Quá nhiều yêu cầu, thử lại sau 1 giờ" },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const email = formData.get("email");

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Email không hợp lệ" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Store in Supabase
    const supabase = createAdminClient();
    await supabase.from("newsletter_subscribers").upsert(
      { email: cleanEmail },
      { onConflict: "email" }
    );

    // Enqueue welcome email sequence
    enqueueEmailSequence({
      email: cleanEmail,
      name: "",
      sequenceType: "audit",
    }).catch((err) => console.error("Email queue error (newsletter):", err));

    return NextResponse.json(
      { success: true, message: "Đăng ký thành công!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Có lỗi xảy ra, vui lòng thử lại" },
      { status: 500 }
    );
  }
}
