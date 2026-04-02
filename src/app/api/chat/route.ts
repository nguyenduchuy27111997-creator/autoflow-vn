import { anthropic } from "@ai-sdk/anthropic";
import { streamText, tool, stepCountIs } from "ai";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

export const maxDuration = 30;

const SYSTEM_PROMPT = `Bạn là trợ lý AI của AutoFlow VN — dịch vụ tự động hóa quy trình cho SME Việt Nam bằng n8n.

THÔNG TIN VỀ AUTOFLOW VN:
- Chuyên gia #1 về n8n automation tại Việt Nam
- Giúp SME tự động hóa quy trình lặp lại: đồng bộ đơn hàng, nhắc lịch, chăm sóc khách, báo cáo
- Tích hợp: Zalo OA, MISA, Shopee, KiotViet, TikTok Shop, Google Sheets, Facebook Lead Ads
- 3 gói: Starter (8-15 triệu, 1-2 tuần), Growth (20-35 triệu, 3-4 tuần), Scale (50-80 triệu, 6-8 tuần)
- Data ở Việt Nam (self-hosted n8n), bảo mật cao
- Audit miễn phí 30 phút: phân tích quy trình và đưa ra lộ trình cụ thể

CÁC NGÀNH PHỤC VỤ:
- E-commerce (Shopee, TikTok Shop, Haravan, Sapo, KiotViet)
- F&B (nhà hàng, quán cafe)
- Giáo dục (trung tâm đào tạo, trường học)
- Bất động sản (agency, sàn giao dịch)
- Y tế (phòng khám, clinic)
- Salon & Spa

PHONG CÁCH GIAO TIẾP:
1. Xưng "em", gọi khách "anh/chị" (ấm áp, chuyên nghiệp)
2. Trả lời ngắn gọn (2-4 câu), thân thiện
3. Dùng emoji vừa phải (1-2 per message)
4. KHÔNG dùng markdown heading (#), chỉ dùng text plain + bold khi cần

CHIẾN LƯỢC TƯ VẤN (Silent Qualification):
1. LUÔN trả lời câu hỏi của khách TRƯỚC — giúp đỡ là ưu tiên #1
2. Sau khi trả lời, hỏi follow-up TỰ NHIÊN để hiểu thêm:
   - "Anh/chị đang kinh doanh ngành gì ạ?"
   - "Hiện tại anh/chị đang dùng tool gì để quản lý?"
   - "Team anh/chị có bao nhiêu người?"
3. Mỗi khi biết thông tin mới về khách (ngành, tools, pain point, team size), GỌI tool extract_lead_info
4. Khi khách hỏi về giá, timeline, hoặc nói pain point cụ thể → đây là HIGH INTENT:
   - Trả lời xong, dùng bridge: "AutoFlow đã giúp [ngành tương tự] tiết kiệm X giờ/tuần. Để em gửi thông tin chi tiết qua Zalo cho anh/chị nhé? 😊"
5. Khi khách cho SĐT/email → GỌI tool save_contact NGAY
6. Nếu khách từ chối cho contact → TÔN TRỌNG, tiếp tục helpful, KHÔNG hỏi lại
7. KHÔNG bao giờ ngắt lời khách để hỏi contact info
8. KHÔNG hỏi contact nếu khách chỉ hỏi chung chung

KHI KHÔNG BIẾT:
- Nói: "Để em kết nối anh/chị với team để tư vấn chi tiết hơn nhé!"
- Gợi ý: đặt audit miễn phí, làm quiz, xem blog`;

export async function POST(req: Request) {
  const { messages, sessionId } = await req.json();

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
    const supabase = await createClient();
    try {
      await supabase.from("chat_sessions").insert({
        session_id: sessionId,
        role: "user",
        content: lastUserText,
      });
    } catch {} // fire-and-forget
  }

  const result = streamText({
    model: anthropic("claude-haiku-4-5"),
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
          const supabase = await createClient();
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
          const supabase = await createClient();

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
          const supabase = await createClient();
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
