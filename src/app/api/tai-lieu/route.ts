import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";
import { readFile } from "fs/promises";
import { join } from "path";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const RATE_LIMIT_WINDOW = 60 * 60 * 1000;
const MAX_REQUESTS = 5;
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

const PDF_MAP: Record<string, { file: string; title: string }> = {
  "10-quy-trinh": {
    file: "AutoFlow-Lead-Magnet-10-Quy-Trinh.pdf",
    title: "10 Quy Trình SME Nên Tự Động Hóa Ngay",
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Rate limit
    const clientKey = getRateLimitKey(req);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { error: "Quá nhiều yêu cầu. Vui lòng thử lại sau." },
        { status: 429 },
      );
    }

    const { name, email, phone, resource } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email không hợp lệ." },
        { status: 400 },
      );
    }

    const resourceKey = resource || "10-quy-trinh";
    const pdfInfo = PDF_MAP[resourceKey];

    if (!pdfInfo) {
      return NextResponse.json(
        { error: "Tài liệu không tồn tại." },
        { status: 400 },
      );
    }

    // Save lead to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("pdf_leads").insert({
      name: name?.trim() || null,
      email: email.trim(),
      phone: phone?.trim() || null,
      resource: resourceKey,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
    }

    // Read PDF file and send email
    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ success: true });
    }

    try {
      const pdfPath = join(process.cwd(), "public", "pdfs", pdfInfo.file);
      const pdfBuffer = await readFile(pdfPath);

      await resend.emails.send({
        from: "AutoFlow VN <onboarding@resend.dev>",
        to: email.trim(),
        subject: `📄 Tài liệu: ${pdfInfo.title}`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="font-size: 24px; font-weight: 800; color: #0F172A;">AutoFlow VN</div>
              <div style="font-size: 13px; color: #94A3B8; margin-top: 4px;">Chuyên gia #1 về n8n automation tại Việt Nam</div>
            </div>

            <p style="font-size: 15px; color: #334155; line-height: 1.7;">
              Chào${name ? ` <strong>${name.trim()}</strong>` : ""},
            </p>
            <p style="font-size: 15px; color: #334155; line-height: 1.7;">
              Cảm ơn bạn đã tải tài liệu <strong>"${pdfInfo.title}"</strong>. File PDF được đính kèm trong email này.
            </p>

            <div style="background: #F0F7FF; border-radius: 12px; padding: 20px; margin: 24px 0; border-left: 4px solid #0066FF;">
              <p style="font-size: 14px; color: #0052CC; font-weight: 600; margin: 0 0 8px 0;">💡 Bước tiếp theo</p>
              <p style="font-size: 14px; color: #475569; margin: 0; line-height: 1.6;">
                Đặt lịch <strong>audit miễn phí 30 phút</strong> để mình phân tích quy trình của bạn và đưa ra lộ trình tự động hóa cụ thể.
              </p>
            </div>

            <div style="text-align: center; margin: 28px 0;">
              <a href="https://autoflowvn.net/audit" style="display: inline-block; background: #0066FF; color: white; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 10px; text-decoration: none;">
                Đặt Lịch Audit Miễn Phí →
              </a>
            </div>

            <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 28px 0;" />
            <p style="font-size: 12px; color: #94A3B8; text-align: center; line-height: 1.6;">
              AutoFlow VN — Tự động hóa quy trình cho SME Việt Nam<br />
              <a href="https://autoflowvn.net" style="color: #0066FF; text-decoration: none;">autoflowvn.net</a>
            </p>
          </div>
        `,
        attachments: [
          {
            filename: pdfInfo.file,
            content: pdfBuffer.toString("base64"),
          },
        ],
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
      return NextResponse.json(
        { error: "Không thể gửi email. Vui lòng thử lại." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 },
    );
  }
}
