import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import ComparisonTable from "@/components/blog/ComparisonTable";
import TableOfContents from "@/components/blog/TableOfContents";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";
import CodeBlock from "@/components/blog/CodeBlock";
import BlogFooter from "@/components/blog/BlogFooter";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Webhook Là Gì? Giải Thích Đơn Giản Cho Người Không Biết Code",
  description:
    "Webhook là gì? Giải thích đơn giản sự khác biệt giữa webhook và API bằng ví dụ thực tế. Tìm hiểu cách n8n dùng webhook để tự động hóa workflow, 5 use case phổ biến và hướng dẫn thiết lập.",
  keywords: [
    "webhook là gì",
    "webhook n8n",
    "webhook vs api",
    "webhook là gì đơn giản",
    "n8n webhook",
    "webhook trigger",
    "tự động hóa webhook",
    "cách dùng webhook",
  ],
};

const tocItems = [
  { id: "webhook-la-gi", text: "Webhook là gì?", level: 2 },
  { id: "api-vs-webhook", text: "API vs Webhook — Sự khác biệt", level: 2 },
  { id: "luong-hoat-dong", text: "Luồng hoạt động chi tiết", level: 2 },
  { id: "use-cases", text: "5 use case webhook phổ biến", level: 2 },
  { id: "webhook-n8n", text: "Webhook trong n8n", level: 2 },
  { id: "truoc-sau", text: "Polling vs Push — Trước và sau", level: 2 },
  { id: "bang-so-sanh", text: "Bảng so sánh API vs Webhook", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "Webhook có an toàn không?",
    a: "Webhook có thể bị tấn công nếu không bảo mật đúng cách. Các biện pháp bảo mật quan trọng: (1) Xác thực chữ ký (signature verification) — server gửi webhook ký payload bằng secret key, bạn phải xác minh trước khi xử lý; (2) Dùng HTTPS không bao giờ HTTP; (3) Chỉ whitelist IP của bên gửi nếu họ cung cấp; (4) Thiết lập timeout và retry limit. n8n tự động hỗ trợ HTTPS và có thể thêm header authentication.",
  },
  {
    q: "Webhook khác Event Listener như thế nào?",
    a: "Event Listener chạy bên trong một ứng dụng — ví dụ JavaScript addEventListener trong browser, lắng nghe click chuột. Webhook là HTTP callback giữa hai hệ thống khác nhau qua mạng internet. Về bản chất cùng mô hình event-driven, nhưng webhook hoạt động ở tầng network còn event listener ở tầng code.",
  },
  {
    q: "Nếu server của tôi bị down, webhook sẽ bị mất không?",
    a: "Phụ thuộc vào bên gửi. Hầu hết dịch vụ lớn (Shopify, Stripe, GitHub) sẽ retry webhook nhiều lần (thường 3–5 lần trong vài giờ) nếu không nhận được HTTP 200. Tuy nhiên không phải dịch vụ nào cũng retry. Giải pháp: dùng queue (như n8n với webhook queue mode) để đảm bảo không mất dữ liệu.",
  },
  {
    q: "Tôi cần biết code để dùng webhook không?",
    a: "Không nhất thiết. Với n8n, bạn chỉ cần copy URL webhook được tạo tự động và paste vào dịch vụ gửi. n8n xử lý toàn bộ việc nhận, phân tích và xử lý dữ liệu webhook qua giao diện kéo-thả. Tuy nhiên hiểu cơ bản về JSON và HTTP sẽ giúp bạn làm việc với webhook hiệu quả hơn.",
  },
  {
    q: "Webhook có giới hạn tốc độ không?",
    a: "Bên nhận webhook (server của bạn) không có giới hạn — phụ thuộc vào năng lực server. Bên gửi có thể có rate limit; ví dụ Shopify tối đa 60,000 webhook calls/phút. Với n8n self-host, bạn có thể xử lý hàng nghìn webhook/giây nếu server đủ mạnh.",
  },
  {
    q: "Webhook và API REST có thể dùng cùng nhau không?",
    a: "Hoàn toàn có thể và rất phổ biến. Ví dụ: dùng webhook để nhận thông báo khi có đơn hàng mới (event-driven), sau đó gọi API REST để lấy thêm chi tiết đơn hàng (on-demand). Đây là kiến trúc hybrid phổ biến nhất trong tích hợp hệ thống hiện đại.",
  },
];

export default function WebhookLaGiBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="webhook-la-gi" title="Webhook Là Gì? Giải Thích Cho Người Không Code" />
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-5">
              <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
              <span>/</span>
              <span className="text-slate-600 truncate max-w-[300px]">Kiến thức</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Kiến thức
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                Webhook
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                n8n
              </span>
              <span className="text-xs text-slate-400">8 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Webhook Là Gì?{" "}
              <span className="gradient-text">Giải Thích Đơn Giản Cho Người Không Biết Code</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Webhook là cách các ứng dụng "nói chuyện" với nhau theo thời gian thực — thay vì bạn
              phải hỏi liên tục, hệ thống tự động báo cho bạn khi có chuyện xảy ra. Bài viết này
              giải thích webhook bằng ngôn ngữ đời thường, so sánh với API, và hướng dẫn dùng
              webhook trong n8n.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* ==================== SECTION 1 ==================== */}
                <h2 id="webhook-la-gi">Webhook Là Gì?</h2>

                <p>
                  Hãy tưởng tượng bạn muốn biết khi nào người bạn rảnh để đi cà phê. Bạn có hai
                  lựa chọn:
                </p>

                <ul>
                  <li>
                    <strong>Cách 1 (API — polling):</strong> Cứ 10 phút bạn nhắn tin một lần:
                    "Bạn rảnh chưa?" — "Chưa." — 10 phút sau: "Bạn rảnh chưa?" — "Chưa." — Lặp
                    đi lặp lại cho đến khi bạn ấy rảnh.
                  </li>
                  <li>
                    <strong>Cách 2 (Webhook — push):</strong> Bạn nói: "Khi nào rảnh thì nhắn tôi
                    nhé." Bạn rảnh làm việc khác. Khi người bạn rảnh, họ tự nhắn tin cho bạn.
                  </li>
                </ul>

                <p>
                  <strong>Webhook là Cách 2.</strong> Trong thế giới phần mềm, webhook là một cơ
                  chế mà ứng dụng A <em>tự động gửi thông báo</em> đến ứng dụng B ngay khi có sự
                  kiện xảy ra — không cần B phải hỏi liên tục.
                </p>

                <CalloutBox type="info" title="Định nghĩa kỹ thuật (nếu bạn muốn biết thêm)">
                  Webhook là một <strong>HTTP POST request</strong> được gửi tự động từ server A
                  đến một URL của server B khi một sự kiện cụ thể xảy ra. URL này gọi là
                  "webhook endpoint" hoặc "webhook URL". Server B nhận request, xử lý dữ liệu,
                  và trả về HTTP 200 để xác nhận đã nhận thành công.
                </CalloutBox>

                <p>
                  Ví dụ thực tế: Khi khách hàng thanh toán thành công trên website của bạn (qua
                  Stripe, VNPay...), cổng thanh toán ngay lập tức gửi một webhook đến server của
                  bạn với đầy đủ thông tin đơn hàng. Server của bạn nhận được, tự động gửi email
                  xác nhận, cập nhật kho hàng, và tạo hóa đơn — tất cả trong vài giây.
                </p>

                {/* ==================== SECTION 2 ==================== */}
                <h2 id="api-vs-webhook">API vs Webhook — Sự Khác Biệt Cốt Lõi</h2>

                <p>
                  Nhiều người nhầm lẫn webhook và API vì cả hai đều liên quan đến giao tiếp giữa
                  các ứng dụng. Nhưng chúng hoạt động theo chiều ngược nhau:
                </p>

                <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
                  {/* API card */}
                  <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" stroke="#2563EB" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path d="M8 12h8M12 8l4 4-4 4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-display font-bold text-blue-800">API (Polling)</div>
                        <div className="text-xs text-blue-500">Bạn hỏi — server trả lời</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span>Client gửi request khi cần</li>
                      <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span>Server phản hồi ngay lập tức</li>
                      <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span>Phải hỏi lại nếu muốn dữ liệu mới</li>
                      <li className="flex gap-2"><span className="text-blue-400 shrink-0">→</span>Tốn tài nguyên khi polling liên tục</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-100/60 rounded-lg text-xs text-blue-700 italic">
                      "Nhà hàng có bàn chưa?" — "Chưa." — 5 phút sau hỏi lại...
                    </div>
                  </div>

                  {/* Webhook card */}
                  <div className="bg-violet-50/60 border border-violet-100 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                        <svg width="20" height="20" fill="none" stroke="#7C3AED" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-display font-bold text-violet-800">Webhook (Push)</div>
                        <div className="text-xs text-violet-500">Server thông báo — bạn nhận</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2"><span className="text-violet-400 shrink-0">→</span>Server gửi khi có sự kiện</li>
                      <li className="flex gap-2"><span className="text-violet-400 shrink-0">→</span>Client nhận thông báo real-time</li>
                      <li className="flex gap-2"><span className="text-violet-400 shrink-0">→</span>Không cần hỏi — tự động đẩy</li>
                      <li className="flex gap-2"><span className="text-violet-400 shrink-0">→</span>Tiết kiệm tài nguyên hơn nhiều</li>
                    </ul>
                    <div className="mt-4 p-3 bg-violet-100/60 rounded-lg text-xs text-violet-700 italic">
                      "Khi có bàn trống, nhắn tôi nhé." Nhà hàng tự gọi khi sẵn sàng.
                    </div>
                  </div>
                </div>

                <CalloutBox type="tip" title="Cách nhớ nhanh nhất">
                  <strong>API = bạn chủ động hỏi.</strong> Giống như gọi điện hỏi bạn có rảnh
                  không. <strong>Webhook = đối phương chủ động báo.</strong> Giống như bạn đăng
                  ký nhận thông báo — khi có chuyện, hệ thống tự gọi cho bạn.
                </CalloutBox>

                {/* ==================== SECTION 3 ==================== */}
                <h2 id="luong-hoat-dong">Luồng Hoạt Động Chi Tiết</h2>

                <h3>Luồng API (Polling)</h3>

                <WorkflowFlow
                  accentColor="#2563EB"
                  title="API Polling — Client chủ động hỏi"
                  subtitle="Phải lặp lại mỗi khi muốn dữ liệu mới"
                  steps={[
                    { icon: <span className="text-lg">💻</span>, label: "Client", sub: "Gửi GET request" },
                    { icon: <span className="text-lg">🌐</span>, label: "Server", sub: "Nhận & xử lý" },
                    { icon: <span className="text-lg">📦</span>, label: "Response", sub: "Trả dữ liệu về" },
                    { icon: <span className="text-lg">⏰</span>, label: "Chờ...", sub: "5 phút sau" },
                    { icon: <span className="text-lg">🔁</span>, label: "Lặp lại", sub: "Hỏi lại từ đầu" },
                  ]}
                />

                <h3>Luồng Webhook (Push)</h3>

                <WorkflowFlow
                  accentColor="#7C3AED"
                  title="Webhook — Server chủ động thông báo"
                  subtitle="Nhận ngay khi có sự kiện, không tốn tài nguyên chờ đợi"
                  steps={[
                    { icon: <span className="text-lg">⚡</span>, label: "Sự kiện", sub: "Đơn hàng mới" },
                    { icon: <span className="text-lg">🌐</span>, label: "Server gửi", sub: "POST đến webhook URL" },
                    { icon: <span className="text-lg">📡</span>, label: "Nhận webhook", sub: "n8n / server bạn" },
                    { icon: <span className="text-lg">⚙️</span>, label: "Xử lý", sub: "Tự động hóa" },
                    { icon: <span className="text-lg">✅</span>, label: "HTTP 200", sub: "Xác nhận thành công" },
                  ]}
                />

                <p>
                  Điểm mấu chốt: trong luồng webhook, bước 1 đến bước 5 xảy ra trong{" "}
                  <strong>vài trăm milliseconds</strong>. Không có thời gian chờ đợi, không có
                  request thừa. Hệ thống chỉ "thức dậy" khi thực sự có việc cần làm.
                </p>

                {/* ==================== SECTION 4 ==================== */}
                <h2 id="use-cases">5 Use Case Webhook Phổ Biến Nhất</h2>

                <p>
                  Webhook xuất hiện ở khắp nơi trong các hệ thống hiện đại. Đây là 5 trường hợp
                  bạn gặp nhiều nhất:
                </p>

                <StepList steps={[
                  {
                    title: "Thanh toán & Ecommerce",
                    desc: "Stripe, VNPay, MoMo, ZaloPay đều dùng webhook để thông báo kết quả thanh toán. Khi khách thanh toán thành công: webhook kích hoạt → gửi email xác nhận → cập nhật đơn hàng → xuất hóa đơn. Nếu không có webhook, bạn phải poll API thanh toán mỗi vài giây — vừa chậm vừa tốn tiền API.",
                  },
                  {
                    title: "Form & Lead generation",
                    desc: "Typeform, Tally, Google Forms (qua Apps Script), Webflow Forms đều hỗ trợ webhook. Khi ai đó submit form → webhook gửi ngay dữ liệu lead → n8n xử lý → tự động gửi email chào mừng, thêm vào CRM, tạo task cho sales. Không cần ai ngồi kiểm tra form.",
                  },
                  {
                    title: "GitHub & DevOps",
                    desc: "GitHub webhook là backbone của CI/CD hiện đại. Khi dev push code → GitHub gửi webhook → trigger pipeline build → chạy test → deploy nếu pass. Toàn bộ quy trình tự động trong vài phút. GitLab, Bitbucket đều hoạt động tương tự.",
                  },
                  {
                    title: "Chat & Messaging",
                    desc: "Slack, Telegram, Discord, Zalo OA đều dùng webhook hoặc có webhook-like mechanism. Khi có tin nhắn mới đến bot → webhook/long-polling thông báo → bot xử lý → trả lời. Đây là cách chatbot hoạt động real-time mà không cần poll liên tục.",
                  },
                  {
                    title: "CRM & Helpdesk",
                    desc: "HubSpot, Salesforce, Freshdesk, Zendesk gửi webhook khi có deal mới, ticket thay đổi trạng thái, hoặc khách hàng được phân công. Webhook kết nối CRM với Slack (thông báo sales), Google Sheets (báo cáo), hay kế toán (tạo hóa đơn khi deal won).",
                  },
                ]} />

                {/* ==================== SECTION 5 ==================== */}
                <h2 id="webhook-n8n">Webhook Trong n8n — Thiết Lập Trong 2 Phút</h2>

                <p>
                  n8n biến webhook từ khái niệm kỹ thuật thành thứ bất kỳ ai cũng dùng được.
                  Thay vì phải viết server để nhận và xử lý webhook, n8n làm tất cả cho bạn.
                </p>

                <h3>Cách n8n tạo webhook URL</h3>

                <p>
                  Mỗi khi bạn thêm <strong>Webhook node</strong> vào workflow trong n8n, hệ thống
                  tự động tạo ra một URL duy nhất. Bạn chỉ cần copy URL đó và paste vào bất kỳ
                  dịch vụ nào hỗ trợ webhook.
                </p>

                <CodeBlock
                  lang="bash"
                  title="n8n Webhook URL (tự động tạo)"
                  code={`# Production webhook URL (workflow đang active)
https://your-n8n.domain.com/webhook/abc123-def456-ghi789

# Test webhook URL (dùng khi đang build workflow)
https://your-n8n.domain.com/webhook-test/abc123-def456-ghi789

# Self-hosted n8n trên localhost
http://localhost:5678/webhook/abc123-def456-ghi789`}
                />

                <h3>Ví dụ thực tế: Nhận webhook từ Stripe</h3>

                <StepList steps={[
                  {
                    title: "Thêm Webhook node vào n8n",
                    desc: "Mở n8n, tạo workflow mới, kéo Webhook node vào canvas. Chọn HTTP Method là POST. Copy URL được tạo tự động.",
                  },
                  {
                    title: "Đăng ký URL vào Stripe",
                    desc: "Vào Stripe Dashboard → Developers → Webhooks → Add endpoint. Paste URL vừa copy, chọn events muốn nhận (vd: payment_intent.succeeded). Lưu lại Signing Secret.",
                  },
                  {
                    title: "Test webhook",
                    desc: "Trong n8n, bấm 'Listen for test event'. Trên Stripe, bấm 'Send test webhook'. n8n sẽ nhận và hiển thị dữ liệu thực tế để bạn xây dựng tiếp workflow.",
                  },
                  {
                    title: "Xây dựng workflow xử lý",
                    desc: "Sau Webhook node, thêm các node xử lý: lấy thông tin đơn hàng từ data nhận được, gửi email xác nhận (Gmail node), cập nhật Google Sheet (Google Sheets node), và bật workflow khi hoàn thành.",
                  },
                ]} />

                <CalloutBox type="tip" title="Mẹo: Dùng webhook-test khi build">
                  n8n có hai URL: <code>/webhook/</code> (production, workflow phải active) và{" "}
                  <code>/webhook-test/</code> (development, không cần active). Khi đang xây
                  workflow, hãy dùng URL test — bạn không cần activate workflow để nhận dữ liệu.
                </CalloutBox>

                <CodeBlock
                  lang="yaml"
                  title="Cấu trúc dữ liệu webhook Stripe nhận được"
                  code={`# Ví dụ payload webhook từ Stripe
type: payment_intent.succeeded
data:
  object:
    id: pi_3abc123
    amount: 500000
    currency: vnd
    status: succeeded
    metadata:
      order_id: ORD-2026-001
      customer_email: customer@example.com`}
                />

                {/* ==================== SECTION 6 ==================== */}
                <h2 id="truoc-sau">Polling vs Push — Trước và Sau</h2>

                <p>
                  Nhiều hệ thống cũ vẫn dùng polling vì đơn giản hơn để setup ban đầu. Nhưng
                  khi scale lên, polling trở thành gánh nặng. Đây là sự khác biệt thực tế:
                </p>

                <BeforeAfter
                  before={{
                    title: "Polling (API hỏi liên tục)",
                    items: [
                      "Gọi API mỗi 5 phút để kiểm tra đơn hàng mới",
                      "Tốn 288 request/ngày dù chỉ có 10 đơn hàng",
                      "Độ trễ tối đa 5 phút (khoảng cách giữa 2 lần poll)",
                      "Có thể vượt rate limit API của dịch vụ",
                      "Server phải xử lý request dù không có gì mới",
                      "Chi phí API tăng theo số lần poll, không theo số sự kiện",
                    ],
                  }}
                  after={{
                    title: "Webhook (Push real-time)",
                    items: [
                      "Nhận thông báo ngay lập tức khi có đơn hàng mới",
                      "Chỉ 10 request/ngày cho 10 đơn hàng — chính xác 1:1",
                      "Độ trễ dưới 1 giây từ khi có sự kiện",
                      "Không bao giờ vượt rate limit — chỉ nhận khi có event",
                      "Server chỉ xử lý khi thực sự có việc",
                      "Chi phí gần như bằng 0, scale tốt hơn nhiều",
                    ],
                  }}
                />

                <CalloutBox type="warning" title="Khi nào nên dùng API polling thay vì webhook?">
                  Webhook không phải lúc nào cũng tốt hơn. Dùng polling khi: (1) Dịch vụ bạn
                  tích hợp không hỗ trợ webhook; (2) Bạn cần lấy dữ liệu theo lịch cố định
                  (báo cáo hàng ngày); (3) Bạn cần query nhiều nguồn và tổng hợp; (4) Dịch
                  vụ có SLA webhook không đảm bảo. Kết hợp cả hai là pattern tốt nhất.
                </CalloutBox>

                {/* ==================== SECTION 7 ==================== */}
                <h2 id="bang-so-sanh">Bảng So Sánh API vs Webhook</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "API (Polling)", "Webhook (Push)"]}
                  highlightCol={2}
                  rows={[
                    ["Ai khởi tạo", "Client (bạn)", "Server (dịch vụ)"],
                    ["Độ trễ", "Tối đa = khoảng cách poll", "Gần như real-time (<1s)"],
                    ["Tài nguyên", "Tốn khi poll liên tục", "Tối ưu — chỉ dùng khi cần"],
                    ["Độ phức tạp setup", "Đơn giản hơn", "Cần URL công khai"],
                    ["Rate limit", "Dễ vượt nếu poll nhiều", "Không ảnh hưởng"],
                    ["Kiểm soát timing", "Bạn quyết định khi nào hỏi", "Dịch vụ quyết định khi nào gửi"],
                    ["Xử lý lỗi", "Retry ngay lập tức", "Cần xử lý retry từ bên gửi"],
                    ["Dùng với n8n", "Schedule Trigger node", "Webhook node"],
                    ["Phù hợp nhất", "Báo cáo định kỳ, batch sync", "Real-time events, notifications"],
                  ]}
                />

                {/* ==================== FAQ ==================== */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* CTA */}
                <div className="not-prose mt-12 p-8 bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl border border-violet-100">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                    Sẵn sàng dùng webhook để tự động hóa?
                  </h3>
                  <p className="text-slate-500 text-sm mb-5">
                    n8n cho phép bạn thiết lập webhook và xây dựng workflow tự động hóa trong vài
                    phút — không cần viết code. Autoflow có thể giúp bạn xây dựng workflow đầu tiên
                    từ A đến Z.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/lien-he"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                    >
                      Đặt lịch tư vấn miễn phí
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href="/blog/n8n-la-gi"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 hover:border-primary hover:text-primary transition-colors"
                    >
                      Tìm hiểu thêm về n8n
                    </a>
                  </div>
                </div>

                <BlogFooter
                  title="Webhook Là Gì?"
                  slug="webhook-la-gi"
                  date="2026-04-01"
                />
              </div>
            </div>

            {/* Sticky TOC */}
            <aside className="hidden xl:block w-64 shrink-0 sticky top-32 self-start">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
