
import { anthropic } from "@ai-sdk/anthropic";
import { streamText, tool, stepCountIs } from "ai";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { notifyTelegram, formatChatLeadNotify } from "@/lib/telegram";
import { getRateLimitKey, isRateLimited } from "@/lib/rate-limit";

export const maxDuration = 30;

const SYSTEM_PROMPT = `Bạn là trợ lý AI của AutoFlow VN — dịch vụ tự động hóa quản lý trọn gói cho SME Việt Nam.

THÔNG TIN VỀ AUTOFLOW VN:
- Chuyên gia về tự động hóa quy trình cho SME tại Việt Nam
- Giúp SME tự động hóa quy trình lặp lại: đồng bộ đơn hàng, nhắc lịch, chăm sóc khách, báo cáo
- Tích hợp: Zalo OA, MISA, Shopee, KiotViet, TikTok Shop, Google Sheets, Facebook Lead Ads
- Mô hình: Automation-as-a-Service — trả hàng tháng, bao gồm tất cả (xây + vận hành + giám sát + tối ưu)
- Hệ thống AutoFlow vận hành trên VPS Việt Nam (Bizfly HCM), dữ liệu mã hóa AES-256, tuân thủ NĐ 13/2023
- Khách hàng KHÔNG cần đăng nhập trực tiếp vào hệ thống — nhận báo cáo + bảng theo dõi định kỳ
- Dùng thử miễn phí: 1 quy trình miễn phí + 30 ngày hỗ trợ, không ràng buộc

LƯU Ý QUAN TRỌNG:
- KHÔNG nói "n8n" với khách. AutoFlow là dịch vụ tự động hóa quản lý — kỹ thuật ở dưới là chi tiết triển khai
- Nếu khách hỏi "AutoFlow dùng tech gì?": trả lời "Hệ thống AutoFlow xây trên hạ tầng workflow automation industry-standard, AutoFlow quản lý toàn bộ infra để khách tập trung vào kinh doanh"

BẢNG GIÁ (Automation-as-a-Service — HÀNG THÁNG):
- Starter: 1.5 triệu/tháng — 1 quy trình, 2 hệ thống, hosting + monitoring tự động 24/7 + hỗ trợ Zalo giờ hành chính + backup
- Growth: 2.5 triệu/tháng — 2-3 quy trình, 3-4 hệ thống, tất cả Starter + báo cáo tối ưu hàng tháng + review hàng quý
- Scale: 4 triệu/tháng — 4+ quy trình, 5+ hệ thống, tất cả Growth + thêm workflow mới mỗi quý + audit hàng quý + hỗ trợ riêng
- Phí xây dựng ban đầu: Starter 2 triệu, Growth 3 triệu, Scale 5 triệu (trả 1 lần, 50% trước + 50% khi bàn giao)
- Tất cả gói bao gồm: server riêng tại VN + monitoring tự động 24/7 + cảnh báo Zalo khi sự cố + backup hàng ngày + hỗ trợ Zalo trong giờ hành chính (T2–T6, 8:00–18:00)
- Hủy bất cứ lúc nào, không ràng buộc dài hạn
- Cam kết hoàn tiền 100% nếu không đạt KPI sau 30 ngày

ĐIỂM KHÁC BIỆT SO VỚI ĐỐI THỦ:
- Không trả 1 lần rồi tự lo — AutoFlow vận hành, giám sát, tối ưu liên tục
- Mỗi tháng gửi báo cáo hiệu suất: bao nhiêu lần chạy, giờ tiết kiệm, ROI
- Monitoring tự động 24/7 + cảnh báo thời gian thực; AutoFlow xử lý sự cố trong giờ hành chính (T2–T6, 8:00–18:00)
- Không cần biết kỹ thuật — chúng tôi lo tất cả

CÁC NGÀNH PHỤC VỤ:
- E-commerce (Shopee, TikTok Shop, Haravan, Sapo, KiotViet)
- F&B (nhà hàng, quán cafe, chuỗi)
- Giáo dục (trung tâm đào tạo, trường học)
- Bất động sản (agency, sàn giao dịch)
- Y tế (phòng khám, clinic)
- Salon & Spa

VÍ DỤ THỰC TẾ:
- Shop Shopee 50 đơn/ngày → tự động ghi vào bảng tính + Zalo notify → tiết kiệm 3h/ngày
- Sàn BĐS → Lead Facebook tự phân công sales + Zalo follow-up → tăng conversion 40%
- Quán cafe → nhắc lịch Zalo + loyalty tracking → giảm no-show 60%

PHONG CÁCH GIAO TIẾP:
1. Xưng "em", gọi khách "anh/chị" (ấm áp, chuyên nghiệp)
2. Trả lời ngắn gọn (2-4 câu), thân thiện
3. Dùng emoji vừa phải (1-2 per message)
4. KHÔNG dùng markdown heading (#), chỉ dùng text plain + bold khi cần
5. Khi nói giá → luôn nhấn mạnh "bao gồm tất cả" và "hủy bất cứ lúc nào"

CHIẾN LƯỢC TƯ VẤN (Silent Qualification):
1. LUÔN trả lời câu hỏi của khách TRƯỚC — giúp đỡ là ưu tiên #1
2. Sau khi trả lời, hỏi follow-up TỰ NHIÊN để hiểu thêm:
   - "Anh/chị đang kinh doanh ngành gì ạ?"
   - "Hiện tại anh/chị đang dùng tool gì để quản lý?"
   - "Team anh/chị có bao nhiêu người?"
3. Mỗi khi biết thông tin mới về khách (ngành, tools, pain point, team size), GỌI tool extract_lead_info
4. Khi khách hỏi về giá, timeline, hoặc nói pain point cụ thể → đây là HIGH INTENT:
   - Trả lời xong, gợi ý: "AutoFlow có chương trình dùng thử miễn phí 1 quy trình. Anh/chị muốn em đặt lịch tư vấn 15 phút không ạ? 😊"
5. Khi khách cho SĐT/email → GỌI tool save_contact NGAY
6. Nếu khách từ chối cho contact → TÔN TRỌNG, tiếp tục helpful, KHÔNG hỏi lại
7. KHÔNG bao giờ ngắt lời khách để hỏi contact info
8. KHÔNG hỏi contact nếu khách chỉ hỏi chung chung

KHI KHÔNG BIẾT:
- Nói: "Để em kết nối anh/chị với team để tư vấn chi tiết hơn nhé!"
- Gợi ý: dùng thử miễn phí tại /audit, làm quiz tại /quiz, xem bảng giá tại /bang-gia`;

export async function POST(req: Request) {
  // Rate-limit: endpoint anon gọi Claude (COGS thật) — chặn DoS đốt tiền LLM không-giới-hạn.
  if (isRateLimited(getRateLimitKey(req as unknown as Parameters<typeof getRateLimitKey>[0]), "chat", { maxRequests: 20, windowMs: 60 * 60 * 1000 })) {
    return new Response(JSON.stringify({ error: "Quá nhiều yêu cầu, vui lòng thử lại sau." }), { status: 429, headers: { "content-type": "application/json" } });
  }
  const { messages, sessionId } = await req.json();
  // Bound input: chặn body khổng-lồ / số tin nhiều bất-thường đốt token.
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 40) {
    return new Response(JSON.stringify({ error: "Yêu cầu không hợp lệ." }), { status: 400, headers: { "content-type": "application/json" } });
  }

  // Convert UI messages (parts format) to simple model messages
  const modelMessages = messages.map((m: { role: string; parts?: { type: string; text?: string }[]; content?: string }) => ({
    role: m.role as "user" | "assistant",
    content: m.parts
      ?.filter((p) => p.type === "text")
      .map((p) => p.text || "")
      .join("") || m.content || "",
  }));

  // Save user message to Supabase
  const lastMessage = messages[messages.length - 1];
  const lastUserText = lastMessage?.parts
    ?.filter((p: { type: string }) => p.type === "text")
    .map((p: { text: string }) => p.text)
    .join("") || "";

  if (lastMessage?.role === "user" && sessionId && lastUserText) {
    const supabase = createAdminClient();
    try {
      await supabase.from("chat_sessions").insert({
        session_id: sessionId,
        role: "user",
        content: lastUserText,
      });
    } catch {} // fire-and-forget
  }

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: SYSTEM_PROMPT,
    messages: modelMessages,
    maxOutputTokens: 500,
    temperature: 0.7,
    tools: {
      extract_lead_info: tool({
        description: "Trích xuất thông tin lead từ hội thoại. Gọi mỗi khi biết thông tin mới về khách hàng (ngành, team size, tools, pain point). Tool này chạy silent — khách không thấy.",
        inputSchema: z.object({
          name: z.string().optional().describe("Tên khách hàng nếu biết"),
          industry: z.string().optional().describe("Ngành kinh doanh: e-commerce, f&b, giao-duc, bat-dong-san, y-te, salon-spa, logistics, khác"),
          team_size: z.string().optional().describe("Quy mô team: 1-5, 5-10, 10-20, 20-50, 50+"),
          current_tools: z.array(z.string()).optional().describe("Các tools đang dùng: Shopee, KiotViet, MISA, Google Sheets, Zalo, etc."),
          pain_points: z.array(z.string()).optional().describe("Vấn đề đang gặp: nhập đơn thủ công, quên follow up, báo cáo chậm, etc."),
          intent_level: z.enum(["low", "medium", "high"]).describe("Mức độ mua hàng: low=hỏi chung, medium=quan tâm, high=muốn triển khai"),
        }),
        execute: async (params) => {
          if (!sessionId) return { ok: true };
          const supabase = createAdminClient();
          const intentScore =
            params.intent_level === "high" ? 70 :
            params.intent_level === "medium" ? 40 : 15;

          try {
            // Upsert: update existing or create new
            const { data: existing } = await supabase
              .from("chat_leads")
              .select("id, intent_score, current_tools, pain_points")
              .eq("session_id", sessionId)
              .maybeSingle();

            if (existing) {
              await supabase.from("chat_leads").update({
                ...(params.name && { name: params.name }),
                ...(params.industry && { industry: params.industry }),
                ...(params.team_size && { team_size: params.team_size }),
                ...(params.current_tools?.length && {
                  current_tools: [...new Set([...(existing.current_tools || []), ...params.current_tools])],
                }),
                ...(params.pain_points?.length && {
                  pain_points: [...new Set([...(existing.pain_points || []), ...params.pain_points])],
                }),
                intent_score: Math.max(existing.intent_score || 0, intentScore),
              }).eq("id", existing.id);
            } else {
              await supabase.from("chat_leads").insert({
                session_id: sessionId,
                name: params.name,
                industry: params.industry,
                team_size: params.team_size,
                current_tools: params.current_tools || [],
                pain_points: params.pain_points || [],
                intent_score: intentScore,
              });
            }
          } catch {} // fire-and-forget
          return { ok: true };
        },
      }),
      save_contact: tool({
        description: "Lưu thông tin liên hệ khi khách cho SĐT hoặc email. GỌI NGAY khi khách cung cấp số điện thoại, Zalo, hoặc email.",
        inputSchema: z.object({
          phone: z.string().optional().describe("Số điện thoại/Zalo của khách"),
          email: z.string().optional().describe("Email của khách"),
          name: z.string().optional().describe("Tên khách hàng"),
        }),
        execute: async (params) => {
          if (!sessionId || (!params.phone && !params.email)) return { ok: false };
          const supabase = createAdminClient();

          try {
            // Update existing chat_lead with contact info
            const { data: existing } = await supabase
              .from("chat_leads")
              .select("id, intent_score")
              .eq("session_id", sessionId)
              .maybeSingle();

            if (existing) {
              await supabase.from("chat_leads").update({
                ...(params.phone && { phone: params.phone }),
                ...(params.email && { email: params.email }),
                ...(params.name && { name: params.name }),
                intent_score: Math.max(existing.intent_score || 0, 60), // contact = at least warm
              }).eq("id", existing.id);
            } else {
              await supabase.from("chat_leads").insert({
                session_id: sessionId,
                phone: params.phone,
                email: params.email,
                name: params.name,
                intent_score: 60,
              });
            }

            // Enqueue email nurture if email provided
            if (params.email) {
              const { enqueueEmailSequence } = await import("@/lib/email-queue");
              await enqueueEmailSequence({
                email: params.email,
                name: params.name || "",
                sequenceType: "audit",
              });
            }
          } catch {} // fire-and-forget

          // Telegram notification — await (Netlify serverless kills fire-and-forget)
          try {
            await notifyTelegram(formatChatLeadNotify({
              phone: params.phone,
              email: params.email,
              name: params.name,
            }));
          } catch (err) {
            console.error("Telegram notify failed:", err);
          }

          return {
            ok: true,
            message: "Đã lưu thông tin. Team AutoFlow sẽ liên hệ anh/chị trong thời gian sớm nhất! 🎉",
          };
        },
      }),
    },
    stopWhen: stepCountIs(3), // Allow tool calls + follow-up response
    onFinish: async ({ text }) => {
      // Save assistant response to Supabase
      if (sessionId && text) {
        try {
          const supabase = createAdminClient();
          await supabase.from("chat_sessions").insert({
            session_id: sessionId,
            role: "assistant",
            content: text,
          });
        } catch {} // fire-and-forget
      }
    },
  });

  return result.toUIMessageStreamResponse();
}
