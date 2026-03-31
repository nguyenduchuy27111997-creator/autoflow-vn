import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { SITE_NAME, SITE_URL } from "@/data/constants";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  if (!email) {
    return new NextResponse(htmlPage("Email không hợp lệ", false), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  try {
    const supabase = await createClient();

    // Insert into unsubscribes table (upsert to avoid duplicates)
    await supabase
      .from("email_unsubscribes")
      .upsert({ email: email.trim() }, { onConflict: "email" });

    // Cancel all pending emails for this address
    await supabase
      .from("email_queue")
      .update({ status: "skipped" })
      .eq("email", email.trim())
      .eq("status", "pending");

    return new NextResponse(
      htmlPage("Bạn đã hủy nhận email thành công.", true),
      {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  } catch {
    return new NextResponse(
      htmlPage("Đã có lỗi xảy ra. Vui lòng thử lại sau.", false),
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }
}

function htmlPage(message: string, success: boolean): string {
  const icon = success ? "✓" : "✕";
  const color = success ? "#059669" : "#DC2626";

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hủy nhận email — ${SITE_NAME}</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #F8FAFC; color: #334155; }
    .card { background: white; border-radius: 16px; padding: 48px 32px; text-align: center; max-width: 420px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .icon { width: 56px; height: 56px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: white; background: ${color}; margin-bottom: 20px; }
    h1 { font-size: 20px; font-weight: 700; color: #0F172A; margin: 0 0 12px 0; }
    p { font-size: 15px; line-height: 1.6; color: #64748B; margin: 0 0 24px 0; }
    a { color: #0066FF; text-decoration: none; font-weight: 500; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">${icon}</div>
    <h1>${message}</h1>
    <p>${success ? "Bạn sẽ không nhận thêm email marketing từ AutoFlow. Nếu thay đổi ý định, bạn có thể đăng ký lại bất cứ lúc nào." : "Vui lòng thử lại hoặc liên hệ support."}</p>
    <a href="${SITE_URL}">← Về trang chủ</a>
  </div>
</body>
</html>`;
}
