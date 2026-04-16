import { NextResponse } from "next/server";

// Placeholder newsletter endpoint — actual email integration deferred.
// When integrated, replace this with your email provider (e.g. Resend, Mailchimp, ConvertKit).
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Email không hợp lệ" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email provider (Resend, Mailchimp, etc.)
    // For now, log and return success
    console.log(`[Newsletter] New subscriber: ${email}`);

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
