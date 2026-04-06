import type { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import CodeBlock from "@/components/blog/CodeBlock";
import FAQ from "@/components/blog/FAQ";

export const metadata: Metadata = {
  title: "Cách Tạo Chatbot Zalo OA Bằng n8n — Hướng Dẫn Từ Zero 2026",
  description:
    "Hướng dẫn chi tiết cách tạo chatbot Zalo OA bằng n8n: FAQ tự động, tra cứu đơn hàng, AI chatbot RAG. Zalo 79.6M MAU, 2.1 tỷ tin/ngày — đừng để khách chờ.",
  keywords: [
    "chatbot zalo oa",
    "n8n chatbot zalo",
    "tạo chatbot zalo",
    "zalo oa automation",
    "n8n zalo webhook",
    "chatbot zalo doanh nghiệp",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề khi không có chatbot", level: 2 },
  { id: "zalo-stats", text: "Tại sao chọn Zalo OA?", level: 2 },
  { id: "loai-chatbot", text: "Rule-based vs AI chatbot", level: 2 },
  { id: "webhook-setup", text: "Setup webhook n8n", level: 2 },
  { id: "workflow-1", text: "Workflow 1: FAQ tự động", level: 3 },
  { id: "workflow-2", text: "Workflow 2: Tra cứu đơn hàng", level: 3 },
  { id: "workflow-3", text: "Workflow 3: AI chatbot RAG", level: 3 },
  { id: "so-sanh", text: "So sánh 3 loại chatbot", level: 2 },
  { id: "ket-qua", text: "Kết quả thực tế", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "Chi phí để tạo chatbot Zalo OA bằng n8n là bao nhiêu?",
    a: "Zalo OA miễn phí đăng ký. n8n có bản self-host miễn phí (chỉ tốn chi phí server ~200k/tháng trên VPS). Nếu dùng AI chatbot (Workflow 3), tốn thêm phí OpenAI API — trung bình 500k–2 triệu/tháng tùy lượng tin nhắn. Tổng chi phí thường thấp hơn 10 lần so với thuê nhân viên chăm sóc khách hàng.",
  },
  {
    q: "Chatbot Zalo OA có hoạt động 24/7 không?",
    a: "Có. n8n chạy liên tục trên server, chatbot phản hồi trong vòng 1–3 giây bất kể ngày đêm. Đây là ưu điểm lớn nhất so với nhân viên — không nghỉ lễ, không trễ giờ, không bỏ sót tin nhắn.",
  },
  {
    q: "Tôi cần biết lập trình để cài đặt không?",
    a: "Không cần. n8n là công cụ no-code/low-code với giao diện kéo thả. Bạn chỉ cần copy webhook URL vào Zalo OA và thiết lập workflow theo hướng dẫn. Phần webhook JSON trong bài này có thể copy nguyên xi. Nếu cần AI chatbot phức tạp hơn, mới cần hỗ trợ kỹ thuật.",
  },
  {
    q: "Zalo OA có giới hạn số tin nhắn chatbot gửi không?",
    a: "Zalo OA phân loại tin nhắn thành: tin nhắn phản hồi (response message — miễn phí, gửi trong 48h sau khi khách nhắn trước) và tin nhắn chủ động (broadcast — tốn ZNS/ZNS template). Chatbot phản hồi tin nhắn của khách thuộc loại miễn phí. Chỉ khi bạn gửi tin chủ động (khuyến mãi, thông báo) mới tốn phí.",
  },
  {
    q: "n8n có template chatbot Zalo sẵn không?",
    a: "n8n hiện có 993 AI chatbot template trên thư viện chính thức. Tuy nhiên, template Zalo OA cụ thể còn ít — bạn cần tự build workflow dựa trên HTTP Request node và Webhook node. Bài này cung cấp cấu trúc 3 workflow cốt lõi có thể tùy chỉnh theo nhu cầu.",
  },
  {
    q: "RAG là gì và khi nào cần dùng cho chatbot Zalo?",
    a: "RAG (Retrieval-Augmented Generation) cho phép AI tìm kiếm trong cơ sở dữ liệu riêng của bạn (sản phẩm, chính sách, FAQ) trước khi trả lời. Cần dùng khi: chatbot phải trả lời câu hỏi phức tạp về sản phẩm/dịch vụ cụ thể, thông tin thay đổi thường xuyên, hoặc khi câu hỏi không thể đoán trước bằng rule-based.",
  },
];

export default function ChatbotZaloOAN8nBlog() {
  return (
    <BlogLayout
      slug="chatbot-zalo-oa-n8n"
      title={<>Cách Tạo Chatbot Zalo OA Bằng n8n —{" "}<span className="gradient-text">Hướng Dẫn Từ Zero 2026</span></>}
      description="Zalo có 79.6 triệu người dùng và 2.1 tỷ tin nhắn mỗi ngày. Nhưng 85% doanh nghiệp vẫn đang trả lời thủ công — chậm, sai, bỏ sót. Bài này hướng dẫn bạn xây 3 loại chatbot Zalo OA bằng n8n: từ FAQ đơn giản đến AI chatbot với RAG, không cần biết lập trình."
      breadcrumbLabel="Hướng dẫn"
      badges={[
        { text: "Zalo OA", color: "blue" },
        { text: "n8n", color: "violet" },
        { text: "AI Chatbot", color: "emerald" },
      ]}
      readTime="15 phút đọc"
      tocItems={tocItems}
      date="2026-04-01"
    >

                {/* Section 1 — PAS Intro */}
                <h2 id="van-de">Vấn Đề: Khách Nhắn Zalo Mà Không Ai Trả Lời</h2>

                <p>
                  Khách hỏi giá lúc 10 giờ tối. Nhân viên đã về nhà. Sáng hôm
                  sau mở Zalo thấy 12 tin nhắn chưa đọc — 3 người đã mua của
                  đối thủ, 5 người không hỏi lại nữa.
                </p>

                <CalloutBox type="warning" title="Con số đáng lo ngại">
                  Theo nghiên cứu về hành vi người dùng Zalo: khách hàng kỳ
                  vọng phản hồi trong vòng{" "}
                  <strong>dưới 5 phút</strong>. Nếu chờ quá 1 giờ, 68% sẽ
                  chuyển sang tìm nhà cung cấp khác. Với 2.1 tỷ tin nhắn mỗi
                  ngày trên Zalo, cơ hội và rủi ro đều đến rất nhanh.
                </CalloutBox>

                <p>
                  Giải pháp không phải là thuê thêm người — mà là{" "}
                  <strong>dạy chatbot trả lời thay bạn</strong>. n8n với
                  Conversational Agent node và 993 AI chatbot template cho phép
                  bạn xây chatbot Zalo OA trong vài giờ, chạy 24/7, không tốn
                  lương nhân viên.
                </p>

                {/* Section 2 — Stats */}
                <h2 id="zalo-stats">Tại Sao Chọn Zalo OA Để Triển Khai Chatbot?</h2>

                <p>
                  Trước khi vào kỹ thuật, hãy nhìn vào con số để hiểu tại sao
                  Zalo OA là kênh chatbot tốt nhất cho doanh nghiệp Việt Nam
                  hiện tại:
                </p>

                <StatCard
                  stats={[
                    {
                      value: "79.6M",
                      label: "người dùng Zalo",
                      sub: "Monthly Active Users tại Việt Nam",
                      color: "text-blue-500",
                    },
                    {
                      value: "85%",
                      label: "người Việt dùng Zalo",
                      sub: "tỷ lệ thâm nhập cao nhất mọi nền tảng",
                      color: "text-blue-600",
                    },
                    {
                      value: "2.1B",
                      label: "tin nhắn mỗi ngày",
                      sub: "lưu lượng trao đổi thực tế",
                      color: "text-violet-500",
                    },
                    {
                      value: "25,000+",
                      label: "OA trả phí",
                      sub: "doanh nghiệp đã dùng Zalo OA nghiêm túc",
                      color: "text-emerald-500",
                    },
                  ]}
                />

                <p>
                  Zalo OA (Official Account) là tài khoản doanh nghiệp chính
                  thức trên Zalo. Khác với tài khoản cá nhân, OA cho phép:{" "}
                  <strong>nhắn tin không giới hạn với follower</strong>, gửi
                  broadcast, tích hợp webhook, đặt menu chat, và quan trọng
                  nhất — kết nối với n8n để tự động hóa hoàn toàn.
                </p>

                <CalloutBox type="info" title="n8n và Zalo OA">
                  n8n hiện có{" "}
                  <strong>993 AI chatbot template</strong> trên thư viện chính
                  thức, bao gồm Conversational Agent node — node chuyên dụng
                  để xây AI chatbot có bộ nhớ ngữ cảnh (memory), kết nối
                  knowledge base, và tích hợp với bất kỳ API nào. Zalo OA
                  cung cấp webhook để n8n nhận tin nhắn real-time.
                </CalloutBox>

                {/* Section 3 — Chatbot types */}
                <h2 id="loai-chatbot">Rule-Based vs AI Chatbot — Chọn Loại Nào?</h2>

                <p>
                  Có hai hướng xây chatbot Zalo OA, mỗi loại phù hợp với
                  trường hợp khác nhau:
                </p>

                <ComparisonTable
                  headers={["Tiêu chí", "Rule-Based Chatbot", "AI Chatbot (LLM + RAG)"]}
                  highlightCol={2}
                  rows={[
                    [
                      "Cách hoạt động",
                      "Khớp từ khóa → trả lời định sẵn",
                      "Hiểu ngôn ngữ tự nhiên, tìm kiếm knowledge base",
                    ],
                    [
                      "Phù hợp",
                      "FAQ cố định, câu hỏi đoán trước được",
                      "Câu hỏi đa dạng, cần tư duy, thông tin phức tạp",
                    ],
                    [
                      "Độ chính xác",
                      "100% nếu câu hỏi đúng template",
                      "95%+ nếu knowledge base tốt",
                    ],
                    [
                      "Chi phí",
                      "Gần như 0 (chỉ server n8n)",
                      "Phí API LLM (~500k–2tr/tháng)",
                    ],
                    [
                      "Thời gian setup",
                      "2–4 giờ",
                      "1–3 ngày",
                    ],
                    [
                      "Xử lý câu hỏi ngoài script",
                      "Không — chuyển sang nhân viên",
                      "Có — AI tự xử lý hoặc leo thang thông minh",
                    ],
                    [
                      "Ví dụ dùng tốt",
                      "Giờ mở cửa, địa chỉ, bảng giá cố định",
                      "Tư vấn sản phẩm, hỗ trợ kỹ thuật, đặt lịch phức tạp",
                    ],
                  ]}
                />

                <p>
                  Chiến lược tối ưu: <strong>bắt đầu với rule-based</strong>{" "}
                  (Workflow 1 + 2 bên dưới) để giải quyết 70–80% câu hỏi phổ
                  biến với chi phí gần bằng 0, sau đó{" "}
                  <strong>thêm AI layer (Workflow 3)</strong> để xử lý phần còn
                  lại.
                </p>

                {/* Section 4 — Webhook setup */}
                <h2 id="webhook-setup">Bước Đầu: Kết Nối Zalo OA Với n8n Qua Webhook</h2>

                <p>
                  Trước khi xây bất kỳ workflow nào, bạn cần kết nối Zalo OA
                  với n8n. Toàn bộ chatbot đều hoạt động qua cơ chế này: Zalo
                  gửi sự kiện đến webhook của n8n, n8n xử lý và gọi lại Zalo
                  API để gửi phản hồi.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Tạo Webhook node trong n8n",
                      desc: 'Kéo Webhook node vào canvas. Chọn HTTP Method: POST. Copy "Webhook URL" — dạng https://your-n8n.com/webhook/zalo-chatbot',
                    },
                    {
                      title: "Đăng ký webhook trên Zalo OA",
                      desc: "Vào oa.zalo.me → Cài đặt → API & Webhook → dán URL vào ô Callback URL. Chọn events: message (nhận tin nhắn người dùng).",
                    },
                    {
                      title: "Xác minh webhook (OA yêu cầu)",
                      desc: "Zalo gửi GET request với ?verifytoken=xxx để xác minh. Thêm node Respond to Webhook trong n8n để trả về đúng token.",
                    },
                    {
                      title: "Lấy Access Token để gửi tin",
                      desc: "Vào oa.zalo.me → Công cụ → lấy OA Access Token. Lưu vào n8n Credentials (HTTP Header Auth) để dùng trong các workflow.",
                    },
                  ]}
                />

                <p>
                  Đây là cấu trúc JSON Zalo gửi về n8n mỗi khi có tin nhắn
                  mới từ người dùng:
                </p>

                <CodeBlock
                  lang="json"
                  title="Zalo OA Webhook Payload — tin nhắn người dùng"
                  code={`{
  "app_id": "your_app_id",
  "user_id_by_app": "uid_123456789",
  "timestamp": 1710000000000,
  "event_name": "user_send_text",
  "message": {
    "msg_id": "msg_abc123",
    "text": "Cho hỏi giá sản phẩm X là bao nhiêu?"
  },
  "sender": {
    "id": "uid_123456789"
  },
  "recipient": {
    "id": "oa_id_987654321"
  }
}`}
                />

                <p>
                  Và đây là cách n8n gọi Zalo API để gửi phản hồi về cho
                  người dùng:
                </p>

                <CodeBlock
                  lang="bash"
                  title="Gửi tin nhắn phản hồi qua Zalo OA API"
                  code={`curl -X POST "https://openapi.zalo.me/v3.0/oa/message/cs" \\
  -H "access_token: YOUR_OA_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "recipient": {
      "user_id": "uid_123456789"
    },
    "message": {
      "text": "Sản phẩm X hiện có giá 299.000đ. Bạn muốn đặt hàng không?"
    }
  }'`}
                />

                <p>
                  Trong n8n, bạn dùng{" "}
                  <strong>HTTP Request node</strong> để thực hiện lệnh trên —
                  điền URL, chọn method POST, thêm header access_token, và
                  dùng expression để lấy{" "}
                  <code>user_id</code> từ webhook payload.
                </p>

                <CalloutBox type="tip" title="Tip bảo mật">
                  Không hardcode Access Token trong workflow. Lưu vào n8n
                  Credentials với tên "Zalo OA Token" và dùng expression{" "}
                  <code>{"{{$credentials.ZaloOAToken.token}}"}</code>. Token
                  Zalo OA có thời hạn — setup auto-refresh hoặc dùng cron job
                  để gia hạn hàng tuần.
                </CalloutBox>

                {/* Section 5 — Workflow 1 */}
                <h2 id="workflow-1">Workflow 1: Chatbot FAQ Tự Động (Rule-Based)</h2>

                <p>
                  Workflow đơn giản nhất — xử lý các câu hỏi thường gặp bằng
                  cách khớp từ khóa. Xây trong 2 giờ, giải quyết ngay 60–70%
                  tin nhắn mà không cần AI.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Webhook nhận tin nhắn từ Zalo OA",
                      desc: "n8n nhận POST request với nội dung tin nhắn và user_id của người gửi.",
                    },
                    {
                      title: "Switch node phân loại ý định",
                      desc: 'Kiểm tra text chứa từ khóa: "giá", "bảng giá" → intent: pricing | "giờ", "mấy giờ" → intent: hours | "địa chỉ", "ở đâu" → intent: location | else → intent: fallback',
                    },
                    {
                      title: "Lấy nội dung phản hồi",
                      desc: "Mỗi intent map với câu trả lời định sẵn trong Set node. Thêm Google Sheet lookup nếu nội dung thường xuyên thay đổi (bảng giá).",
                    },
                    {
                      title: "HTTP Request gửi tin nhắn về Zalo",
                      desc: "Gọi Zalo OA API với user_id và nội dung phản hồi. Thêm typing indicator (delay 0.5s) để tự nhiên hơn.",
                    },
                    {
                      title: "Fallback: chuyển sang nhân viên",
                      desc: 'Nếu không khớp intent nào → gửi "Câu hỏi của bạn đang được chuyển đến nhân viên. Vui lòng chờ 2-3 phút." + thông báo team qua Telegram.',
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Khách nhắn Zalo",
                      sub: "Webhook nhận real-time",
                    },
                    {
                      icon: <span className="text-lg">🔀</span>,
                      label: "Switch Intent",
                      sub: "Khớp từ khóa",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Lấy câu trả lời",
                      sub: "Set node / Google Sheet",
                    },
                    {
                      icon: <span className="text-lg">📤</span>,
                      label: "Zalo API reply",
                      sub: "Phản hồi < 2 giây",
                    },
                    {
                      icon: <span className="text-lg">🧑‍💼</span>,
                      label: "Fallback → nhân viên",
                      sub: "Alert Telegram",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả kỳ vọng">
                  Với 20–30 câu trả lời FAQ được định nghĩa rõ, workflow này
                  xử lý khoảng 65% tin nhắn hoàn toàn tự động. Thời gian phản
                  hồi trung bình: dưới 2 giây, bất kể ngày hay đêm.
                </CalloutBox>

                {/* Section 6 — Workflow 2 */}
                <h2 id="workflow-2">Workflow 2: Tra Cứu Trạng Thái Đơn Hàng</h2>

                <p>
                  Câu hỏi phổ biến nhất trong eCommerce và F&B:{" "}
                  <em>"Đơn hàng của tôi đến đâu rồi?"</em> — workflow này trả
                  lời tức thì, không cần nhân viên tra cứu thủ công.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Nhận tin nhắn chứa mã đơn hàng",
                      desc: 'Webhook detect tin nhắn khớp pattern mã đơn: "DH", "ORDER", số thuần túy 6-10 ký tự. Hoặc khách nhắn "tra cứu đơn" → chatbot hỏi lại mã.',
                    },
                    {
                      title: "Extract mã đơn bằng Regex",
                      desc: "Code node dùng regex để trích xuất mã đơn từ tin nhắn. Validate định dạng trước khi tra cứu.",
                    },
                    {
                      title: "Lookup từ Google Sheet / database",
                      desc: "Google Sheets node hoặc HTTP Request đến API nội bộ — tìm row có order_id khớp. Lấy: trạng thái, ngày dự kiến, ghi chú.",
                    },
                    {
                      title: "Format và gửi kết quả qua Zalo",
                      desc: 'Gửi tin nhắn dạng: "Đơn #DH12345: Đang vận chuyển — dự kiến giao 15:00 hôm nay. Shipper: Nguyễn Văn A — 0912345678"',
                    },
                    {
                      title: "Không tìm thấy → hướng dẫn liên hệ",
                      desc: 'Nếu không có đơn → "Không tìm thấy đơn #DH99999. Vui lòng kiểm tra lại mã hoặc nhắn [HOTLINE] để được hỗ trợ."',
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    {
                      icon: <span className="text-lg">🔢</span>,
                      label: "Khách gửi mã đơn",
                      sub: "Detect + extract regex",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "Lookup database",
                      sub: "Google Sheet / API",
                    },
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Lấy trạng thái",
                      sub: "Status, ETA, shipper",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Zalo reply chi tiết",
                      sub: "Trong 1-2 giây",
                    },
                  ]}
                />

                <p>
                  Nếu hệ thống của bạn dùng WooCommerce, Haravan, hay Shopify,
                  thay Google Sheet bằng HTTP Request đến API của nền tảng đó.
                  n8n có sẵn node cho WooCommerce và có thể gọi REST API của
                  Haravan trực tiếp.
                </p>

                {/* Section 7 — Workflow 3 */}
                <h2 id="workflow-3">Workflow 3: AI Chatbot Với RAG — Tư Vấn Thông Minh</h2>

                <p>
                  Khi câu hỏi phức tạp hơn rule-based có thể xử lý, bạn cần
                  AI. n8n Conversational Agent node kết hợp với vector database
                  (RAG) cho phép chatbot{" "}
                  <strong>
                    đọc toàn bộ catalog sản phẩm, chính sách, FAQ nội bộ
                  </strong>{" "}
                  rồi trả lời chính xác theo ngữ cảnh — như nhân viên tư vấn
                  thực thụ.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Chuẩn bị Knowledge Base",
                      desc: "Tập hợp: mô tả sản phẩm, bảng giá, chính sách đổi trả, FAQ. Lưu vào Google Drive hoặc Notion. n8n dùng Document Loader node để đọc và chunk tài liệu.",
                    },
                    {
                      title: "Embed và lưu vào Vector Store",
                      desc: "n8n gửi các chunk văn bản qua OpenAI Embeddings → lưu vào Pinecone hoặc Supabase pgvector. Chỉ cần làm 1 lần khi setup, sau đó update khi nội dung thay đổi.",
                    },
                    {
                      title: "Conversational Agent nhận tin nhắn",
                      desc: "n8n Conversational Agent node nhận câu hỏi của khách. Node này có bộ nhớ ngữ cảnh (Window Buffer Memory) — nhớ được 5–10 tin nhắn gần nhất trong cùng cuộc chat.",
                    },
                    {
                      title: "RAG: tìm kiếm knowledge base",
                      desc: "Agent tự động embed câu hỏi → tìm 3–5 đoạn văn bản liên quan nhất trong vector store → đưa vào context cho LLM.",
                    },
                    {
                      title: "LLM tổng hợp và trả lời",
                      desc: "GPT-4o hoặc Claude tổng hợp thông tin tìm được + lịch sử chat → trả lời bằng tiếng Việt tự nhiên, đúng ngữ cảnh, không bịa thêm thông tin.",
                    },
                    {
                      title: "Gửi phản hồi qua Zalo OA API",
                      desc: "Kết quả từ AI → HTTP Request gửi tin nhắn về Zalo. Nếu AI không chắc chắn → tự động leo thang lên nhân viên kèm tóm tắt cuộc chat.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Câu hỏi phức tạp",
                      sub: "Zalo webhook",
                    },
                    {
                      icon: <span className="text-lg">🧠</span>,
                      label: "Conv. Agent",
                      sub: "n8n AI node",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "RAG Retrieval",
                      sub: "Vector DB search",
                    },
                    {
                      icon: <span className="text-lg">🤖</span>,
                      label: "GPT-4o trả lời",
                      sub: "Với context thực",
                    },
                    {
                      icon: <span className="text-lg">📤</span>,
                      label: "Zalo reply",
                      sub: "Hoặc leo thang nhân viên",
                    },
                  ]}
                />

                <CodeBlock
                  lang="yaml"
                  title="System Prompt cho AI Chatbot Zalo OA tiếng Việt"
                  code={`# System Prompt — dán vào Conversational Agent node trong n8n

system_prompt: |
  Bạn là trợ lý chăm sóc khách hàng của [TÊN DOANH NGHIỆP].

  QUY TẮC:
  - Trả lời bằng tiếng Việt, thân thiện, ngắn gọn (tối đa 3-4 câu)
  - CHỈ dùng thông tin từ context được cung cấp, KHÔNG bịa thêm
  - Nếu không chắc chắn: "Để chính xác hơn, mình sẽ nhờ nhân viên
    hỗ trợ bạn ngay. Xin chờ 2-3 phút nhé!"
  - Xưng hô: "mình" và "bạn"
  - Không đề cập đến việc bạn là AI trừ khi được hỏi trực tiếp

  THÔNG TIN DOANH NGHIỆP:
  {{knowledge_base_context}}

  LỊCH SỬ CHAT:
  {{chat_history}}`}
                />

                <CalloutBox type="tip" title="Tối ưu chi phí AI">
                  Không cần dùng GPT-4o cho mọi tin nhắn. Setup{" "}
                  <strong>routing thông minh</strong>: câu hỏi đơn giản
                  (dưới 20 từ, không phức tạp) → GPT-4o mini (rẻ hơn 10 lần).
                  Câu hỏi phức tạp → GPT-4o. Trung bình tiết kiệm 60–70% phí
                  API.
                </CalloutBox>

                {/* Section 8 — Before/After */}
                <h2 id="ket-qua">Kết Quả Trước và Sau Khi Triển Khai Chatbot</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Trả lời thủ công",
                    items: [
                      "Phản hồi chậm 1–8 giờ tùy giờ làm việc",
                      "Ngoài giờ hành chính = không ai trả lời",
                      "Nhân viên mất 2–3 giờ/ngày chỉ để trả lời Zalo",
                      "Câu hỏi lặp lại (giá, địa chỉ) trả lời nhiều lần",
                      "Bỏ sót tin nhắn khi cao điểm",
                      "Không có dữ liệu về câu hỏi phổ biến nhất",
                    ],
                  }}
                  after={{
                    title: "Sau — Chatbot n8n + Zalo OA",
                    items: [
                      "Phản hồi trong 1–3 giây, 24/7/365",
                      "70–80% câu hỏi giải quyết hoàn toàn tự động",
                      "Nhân viên chỉ xử lý 20–30% câu hỏi phức tạp",
                      "FAQ được trả lời nhất quán, không sai sót",
                      "0 tin nhắn bị bỏ sót — log đầy đủ trong n8n",
                      "Dashboard tự động: câu hỏi phổ biến, tỷ lệ tự phục vụ",
                    ],
                  }}
                />

                <StatCard
                  stats={[
                    {
                      value: "< 3s",
                      label: "thời gian phản hồi",
                      sub: "từ 1–8 giờ xuống dưới 3 giây",
                      color: "text-accent",
                    },
                    {
                      value: "75%",
                      label: "câu hỏi tự phục vụ",
                      sub: "không cần nhân viên can thiệp",
                    },
                    {
                      value: "-2.5h",
                      label: "tiết kiệm mỗi ngày",
                      sub: "thời gian nhân viên xử lý Zalo",
                    },
                    {
                      value: "24/7",
                      label: "hoạt động liên tục",
                      sub: "kể cả Tết và ngoài giờ hành chính",
                      color: "text-emerald-500",
                    },
                  ]}
                />

                {/* Section 9 — Comparison */}
                <h2 id="so-sanh">So Sánh 3 Loại Chatbot: Thủ Công, Rule-Based, AI</h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công",
                    "Rule-Based (WF 1+2)",
                    "AI Chatbot RAG (WF 3)",
                  ]}
                  highlightCol={3}
                  rows={[
                    [
                      "Thời gian phản hồi",
                      "1–8 giờ",
                      "< 2 giây",
                      "2–5 giây",
                    ],
                    [
                      "Hoạt động",
                      "Giờ hành chính",
                      "24/7",
                      "24/7",
                    ],
                    [
                      "Xử lý câu hỏi phức tạp",
                      "Tốt",
                      "Kém",
                      "Rất tốt",
                    ],
                    [
                      "Chi phí hàng tháng",
                      "10–25 triệu (lương nhân viên)",
                      "~200k (server n8n)",
                      "700k–2.5 triệu (server + API)",
                    ],
                    [
                      "Thời gian setup",
                      "0 (đã có người)",
                      "2–4 giờ",
                      "1–3 ngày",
                    ],
                    [
                      "Tỷ lệ tự phục vụ",
                      "0%",
                      "60–70%",
                      "75–85%",
                    ],
                    [
                      "Độ nhất quán câu trả lời",
                      "Thấp (phụ thuộc người)",
                      "100%",
                      "95%+",
                    ],
                    [
                      "Khả năng mở rộng",
                      "Thuê thêm người",
                      "Thêm rule",
                      "Cập nhật knowledge base",
                    ],
                  ]}
                />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                <CalloutBox type="info" title="Sẵn sàng triển khai?">
                  <p className="mb-2">
                    Đặt lịch{" "}
                    <strong>tư vấn miễn phí 30 phút</strong> — mình sẽ phân
                    tích nhu cầu cụ thể của doanh nghiệp bạn và đề xuất workflow
                    chatbot Zalo OA phù hợp nhất, từ rule-based đơn giản đến AI
                    chatbot đầy đủ.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch tư vấn miễn phí →
                  </a>
                </CalloutBox>

    </BlogLayout>
  );
}
