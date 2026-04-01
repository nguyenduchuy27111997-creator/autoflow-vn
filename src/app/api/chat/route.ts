import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
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

QUY TẮC TRẢ LỜI:
1. Trả lời bằng tiếng Việt, ngắn gọn (2-4 câu), thân thiện, chuyên nghiệp
2. Nếu hỏi về giá: nêu range giá + gợi ý đặt audit miễn phí để có quote chính xác
3. Nếu hỏi ngoài phạm vi: "Mình chuyên về tự động hóa quy trình. Bạn muốn tìm hiểu về dịch vụ nào?"
4. Luôn gợi ý hành động: đặt audit, làm quiz, xem blog
5. KHÔNG bịa thông tin. Nếu không chắc, nói "Để mình kết nối bạn với team để tư vấn chi tiết hơn."
6. Khi user muốn liên hệ hoặc chatbot không trả lời được: hỏi email/SĐT để team follow up
7. Dùng emoji vừa phải (1-2 per message)
8. KHÔNG dùng markdown heading (#), chỉ dùng text plain + bold khi cần`;

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
    maxOutputTokens: 300,
    temperature: 0.7,
    onFinish: async ({ text }) => {
      // Save assistant response to Supabase
      if (sessionId) {
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
