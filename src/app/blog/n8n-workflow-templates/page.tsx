import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import TableOfContents from "@/components/blog/TableOfContents";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import FAQ from "@/components/blog/FAQ";
import BlogFooter from "@/components/blog/BlogFooter";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "10 n8n Workflow Templates Miễn Phí Cho SME Việt Nam 2026",
  description:
    "Khám phá 10 n8n workflow templates miễn phí tốt nhất cho doanh nghiệp vừa và nhỏ Việt Nam — Lead Gen, E-commerce, Chăm sóc khách hàng, Báo cáo và AI. Tải về từ thư viện 9.022+ templates.",
  keywords: [
    "n8n workflow templates",
    "n8n template miễn phí",
    "n8n templates việt nam",
    "n8n automation template",
    "workflow tự động hóa",
    "n8n sme việt nam",
    "n8n lead generation",
    "n8n ecommerce template",
  ],
};

const tocItems = [
  { id: "gioi-thieu", text: "Thư viện templates n8n", level: 2 },
  { id: "lead-gen", text: "Nhóm 1: Lead Generation (3 templates)", level: 2 },
  { id: "template-1", text: "Template 1: Facebook Lead Ads → CRM", level: 3 },
  { id: "template-2", text: "Template 2: Form → Email Nurture tự động", level: 3 },
  { id: "template-3", text: "Template 3: LinkedIn Lead → Slack + Sheet", level: 3 },
  { id: "ecommerce", text: "Nhóm 2: E-commerce (2 templates)", level: 2 },
  { id: "template-4", text: "Template 4: Đơn hàng → MISA + Telegram", level: 3 },
  { id: "template-5", text: "Template 5: Tồn kho thấp → Cảnh báo tự động", level: 3 },
  { id: "customer-care", text: "Nhóm 3: Chăm sóc khách hàng (2 templates)", level: 2 },
  { id: "template-6", text: "Template 6: AI Chatbot hỗ trợ khách hàng", level: 3 },
  { id: "template-7", text: "Template 7: Review → Phân tích cảm xúc", level: 3 },
  { id: "reporting", text: "Nhóm 4: Báo cáo tự động (2 templates)", level: 2 },
  { id: "template-8", text: "Template 8: Báo cáo doanh thu hàng tuần", level: 3 },
  { id: "template-9", text: "Template 9: Dashboard Google Data Studio", level: 3 },
  { id: "ai", text: "Nhóm 5: AI Agent (1 template)", level: 2 },
  { id: "template-10", text: "Template 10: AI Agent xử lý email", level: 3 },
  { id: "so-sanh-nhom", text: "So sánh các nhóm template", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "Template n8n có thực sự miễn phí không?",
    a: "Có. Toàn bộ templates trên n8n.io/workflows đều miễn phí tải về và sử dụng. Bạn chỉ cần tài khoản n8n (cũng miễn phí) để import. Chi phí duy nhất là server nếu bạn chọn self-host (~70k–150k/tháng) hoặc subscription n8n Cloud từ $20/tháng.",
  },
  {
    q: "Làm thế nào để import template vào n8n?",
    a: "Có 3 cách: (1) Trên n8n.io, nhấn 'Use workflow' — template sẽ tự động mở trong n8n Cloud nếu bạn đang đăng nhập; (2) Tải file JSON về, vào n8n → Import from File; (3) Copy JSON và dùng Import from Clipboard. Sau khi import, bạn cần điền credentials (API keys, OAuth) cho các service liên quan.",
  },
  {
    q: "Template có hoạt động ngay không hay phải chỉnh sửa?",
    a: "Hầu hết templates cần chỉnh sửa nhỏ: điền credentials cho các service (Google, Slack, v.v.), cập nhật ID/URL/field name phù hợp với dữ liệu của bạn. Templates là điểm khởi đầu tốt — tiết kiệm 70–80% thời gian so với build từ đầu. Autoflow có thể hỗ trợ customize template cho doanh nghiệp của bạn.",
  },
  {
    q: "Awesome-n8n-templates trên GitHub có gì đặc biệt?",
    a: "Repo awesome-n8n-templates (github.com/enescang/awesome-n8n-templates) tập hợp 280+ templates được cộng đồng kiểm tra và đánh giá chất lượng cao hơn mức trung bình. Ưu điểm: có categorization rõ ràng, nhiều templates phức tạp hơn (multi-step, AI-powered), và được cập nhật thường xuyên bởi community.",
  },
  {
    q: "SME Việt Nam nên bắt đầu với template nào?",
    a: "Tùy ngành: (1) Bán lẻ/TMĐT: bắt đầu với Template 4 (đơn hàng → MISA + Telegram) — ROI cao nhất, tiết kiệm 2–3 giờ/ngày ngay lập tức; (2) Dịch vụ/B2B: Template 2 (form → email nurture) để nuôi dưỡng lead tự động; (3) Mọi doanh nghiệp: Template 8 (báo cáo tuần) vì ai cũng cần báo cáo và đây là workflow đơn giản nhất để bắt đầu.",
  },
  {
    q: "n8n có template cho Zalo OA không?",
    a: "Template chính thức cho Zalo OA còn hạn chế vì Zalo không có trong danh sách integrations chính thức của n8n. Tuy nhiên có thể dùng HTTP Request node để gọi Zalo OA API trực tiếp. Autoflow.vn có template nội bộ cho Zalo OA — liên hệ để được hỗ trợ.",
  },
  {
    q: "Có thể kết hợp nhiều templates lại không?",
    a: "Hoàn toàn được, đây là sức mạnh thực sự của n8n. Ví dụ: kết hợp Template 1 (Lead Ads → CRM) với Template 2 (Email nurture) để tạo pipeline hoàn chỉnh từ quảng cáo đến chăm sóc lead. Dùng tính năng Sub-workflow của n8n để gọi workflow này từ workflow khác.",
  },
  {
    q: "Tôi không biết code, có dùng được templates không?",
    a: "Có. Đa số templates trong bài này không yêu cầu viết code. Bạn chỉ cần: kéo-thả để chỉnh layout (nếu cần), điền thông tin credentials, và cập nhật field mapping. Tuy nhiên Templates AI (nhóm 5) và một số templates nâng cao có thể cần hiểu cơ bản về JSON và JavaScript.",
  },
];

export default function N8nWorkflowTemplatesBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="n8n-workflow-templates" title="10 n8n Workflow Templates Miễn Phí Cho SME" />
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-3xl mb-10">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-5">
              <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
              <span>/</span>
              <span className="text-slate-600 truncate max-w-[300px]">Hướng dẫn</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                Templates
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                n8n
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                Miễn phí
              </span>
              <span className="text-xs text-slate-500">15 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              10 n8n Workflow Templates Miễn Phí{" "}
              <span className="gradient-text">Cho SME Việt Nam 2026</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Thư viện n8n hiện có hơn 9.022 templates — nhưng bạn cần cái nào? Bài viết này chọn
              lọc 10 templates tốt nhất, thực chiến nhất cho doanh nghiệp vừa và nhỏ Việt Nam, chia
              theo 5 nhóm: Lead Gen, E-commerce, Chăm sóc khách hàng, Báo cáo, và AI.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* ==================== INTRO ==================== */}
                <h2 id="gioi-thieu">Thư Viện Templates n8n — Con Số Ấn Tượng</h2>

                <p>
                  Một trong những lợi thế lớn nhất của n8n so với các công cụ automation khác là
                  kho template khổng lồ từ cộng đồng. Thay vì xây dựng workflow từ đầu, bạn có thể
                  import sẵn một template đã được kiểm nghiệm, điền credentials của mình, và bắt
                  đầu chạy trong vài phút.
                </p>

                <StatCard stats={[
                  { value: "9.022+", label: "Templates trong thư viện", sub: "n8n.io/workflows", color: "text-violet-600" },
                  { value: "6.181+", label: "AI-powered templates", sub: "LangChain, OpenAI, Claude", color: "text-blue-600" },
                  { value: "993+", label: "Chatbot templates", sub: "customer support, sales bot" },
                  { value: "280+", label: "Curated templates", sub: "awesome-n8n-templates (GitHub)", color: "text-emerald-600" },
                ]} />

                <p>
                  Với hơn <strong>9.022 templates</strong> trên thư viện chính thức, trong đó{" "}
                  <strong>6.181 templates sử dụng AI</strong>, n8n rõ ràng đang dẫn đầu xu hướng
                  kết hợp automation và trí tuệ nhân tạo. Ngoài ra, repo{" "}
                  <a href="https://github.com/enescang/awesome-n8n-templates" target="_blank" rel="noopener noreferrer">
                    awesome-n8n-templates
                  </a>{" "}
                  trên GitHub tập hợp hơn <strong>280 templates được cộng đồng chọn lọc</strong>,
                  đánh giá chất lượng cao — rất đáng bookmark.
                </p>

                <CalloutBox type="info" title="Cách sử dụng bài viết này">
                  Mỗi template dưới đây bao gồm: mô tả ngắn, các bước thực hiện, sơ đồ workflow
                  trực quan, và link đến template gốc trên n8n.io. Bạn có thể import trực tiếp
                  và chỉnh sửa theo nhu cầu — không cần build từ đầu.
                </CalloutBox>

                {/* ==================== GROUP 1: LEAD GEN ==================== */}
                <h2 id="lead-gen">Nhóm 1: Lead Generation — 3 Templates</h2>

                <p>
                  Lead generation là bài toán số một của hầu hết doanh nghiệp Việt Nam. Ba templates
                  dưới đây giúp tự động hóa toàn bộ quy trình từ thu thập lead đến nuôi dưỡng — tiết
                  kiệm hàng giờ làm thủ công mỗi ngày.
                </p>

                {/* Template 1 */}
                <h3 id="template-1">Template 1: Facebook Lead Ads → CRM Tự Động</h3>

                <p>
                  Khi khách hàng điền form Facebook Lead Ads, dữ liệu tự động được đẩy vào CRM
                  (HubSpot, Pipedrive, hoặc Google Sheet), gửi email chào mừng, và thông báo cho
                  sales qua Slack/Telegram — tất cả trong dưới 30 giây.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Facebook Lead Ads Webhook",
                    desc: "n8n lắng nghe webhook từ Facebook khi có lead mới từ bất kỳ form nào trong tài khoản quảng cáo.",
                  },
                  {
                    title: "Làm sạch và chuẩn hóa dữ liệu",
                    desc: "Node Set chuẩn hóa tên, số điện thoại (thêm +84 nếu cần), email về lowercase — tránh duplicate trong CRM.",
                  },
                  {
                    title: "Kiểm tra duplicate trong CRM",
                    desc: "Node HTTP Request gọi CRM API để kiểm tra xem email/phone đã tồn tại chưa trước khi tạo contact mới.",
                  },
                  {
                    title: "Tạo contact và deal trong CRM",
                    desc: "Nếu lead mới: tạo contact, tạo deal với stage 'New Lead', gán cho sales phụ trách theo vùng/campaign.",
                  },
                  {
                    title: "Gửi email chào mừng tự động",
                    desc: "Node Gmail/SendGrid gửi email cá nhân hóa với tên khách hàng, offer phù hợp với campaign mà họ đã điền form.",
                  },
                  {
                    title: "Thông báo sales team qua Telegram",
                    desc: "Gửi message vào group Telegram của sales với đầy đủ thông tin lead, link CRM, và gợi ý follow-up.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#7C3AED"
                  title="Facebook Lead Ads → CRM → Nurture"
                  steps={[
                    { icon: <span className="text-lg">📣</span>, label: "Trigger", sub: "FB Lead Ads" },
                    { icon: <span className="text-lg">🔍</span>, label: "Check Dup", sub: "CRM lookup" },
                    { icon: <span className="text-lg">👤</span>, label: "Create Contact", sub: "CRM" },
                    { icon: <span className="text-lg">📧</span>, label: "Welcome Email", sub: "SendGrid" },
                    { icon: <span className="text-lg">📱</span>, label: "Notify Sales", sub: "Telegram" },
                  ]}
                />

                <CalloutBox type="tip" title="Mẹo tối ưu Template 1">
                  Thêm node <strong>Wait</strong> 10 phút trước khi gửi email chào mừng — nghiên
                  cứu cho thấy email gửi ngay lập tức có tỷ lệ open thấp hơn email gửi sau 5–15
                  phút (trông tự nhiên hơn, ít bị filter spam hơn).
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1247-sync-facebook-lead-ads-to-hubspot" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* Template 2 */}
                <h3 id="template-2">Template 2: Form Submission → Email Nurture Tự Động</h3>

                <p>
                  Template này biến form liên hệ (Typeform, Tally, Google Form, hoặc form website)
                  thành một chuỗi email nurture tự động 5 bước — giữ warm lead cho đến khi họ sẵn
                  sàng mua hàng.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Webhook từ form bất kỳ",
                    desc: "Hỗ trợ Typeform, Tally.so, JotForm, Google Forms, hoặc bất kỳ form nào có khả năng gửi webhook. Bạn chỉ cần điền URL webhook của n8n vào cài đặt form.",
                  },
                  {
                    title: "Phân loại lead theo nguồn và nhu cầu",
                    desc: "Node Switch phân loại lead dựa trên câu trả lời (ngành, quy mô, nhu cầu) để gửi email sequence phù hợp — không phải một email chung cho tất cả.",
                  },
                  {
                    title: "Email 1 (ngay lập tức): Xác nhận và tài nguyên",
                    desc: "Gửi ngay: email xác nhận đã nhận form, kèm tài nguyên miễn phí (ebook, checklist) liên quan đến nhu cầu của họ.",
                  },
                  {
                    title: "Email 2–4 (ngày 3, 7, 14): Nurture tự động",
                    desc: "Dùng Wait node để delay, sau đó gửi email giá trị: case study, demo video, FAQ, social proof — tùy theo segment.",
                  },
                  {
                    title: "Email 5 (ngày 21): Sales email",
                    desc: "Email cuối sequence với offer cụ thể, urgency (limited time), và CTA rõ ràng để book demo hoặc mua hàng.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#0EA5E9"
                  title="Form → 5-Email Nurture Sequence"
                  steps={[
                    { icon: <span className="text-lg">📝</span>, label: "Form Submit", sub: "Typeform/Tally" },
                    { icon: <span className="text-lg">🔀</span>, label: "Segment", sub: "Switch Node" },
                    { icon: <span className="text-lg">📧</span>, label: "Email 1", sub: "Ngay lập tức" },
                    { icon: <span className="text-lg">⏱️</span>, label: "Wait 3–21 ngày", sub: "Drip sequence" },
                    { icon: <span className="text-lg">💰</span>, label: "Sales Email", sub: "Ngày 21" },
                  ]}
                />

                <CalloutBox type="warning" title="Lưu ý pháp lý">
                  Khi gửi email marketing, đảm bảo tuân thủ quy định về opt-in và có link
                  unsubscribe rõ ràng trong mỗi email. n8n không tự động xử lý unsubscribe — bạn
                  cần thêm logic để cập nhật trạng thái vào danh sách của mình.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1862-automate-customer-emails-after-contact-form-submission-on-website" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* Template 3 */}
                <h3 id="template-3">Template 3: LinkedIn Lead → Slack + Google Sheet</h3>

                <p>
                  Dành cho B2B và các doanh nghiệp dùng LinkedIn để tìm kiếm khách hàng. Template
                  này tự động lưu thông tin prospect vào Google Sheet và thông báo cho sales ngay
                  khi có lead mới từ LinkedIn Lead Gen Forms.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: LinkedIn Lead Gen Form Webhook",
                    desc: "Kết nối LinkedIn Campaign Manager với n8n qua webhook — kích hoạt mỗi khi có người điền LinkedIn Lead Gen Form.",
                  },
                  {
                    title: "Enrich dữ liệu lead",
                    desc: "Tùy chọn: gọi thêm API LinkedIn hoặc Clearbit để làm giàu thông tin — công ty, chức vụ, quy mô, ngành hàng.",
                  },
                  {
                    title: "Lưu vào Google Sheet master",
                    desc: "Append row vào Google Sheet tập trung với đầy đủ thông tin: tên, chức vụ, công ty, email, LinkedIn URL, ngày nhận, campaign source.",
                  },
                  {
                    title: "Thông báo Slack cho sales",
                    desc: "Gửi message Slack vào channel #leads với card thông tin lead đẹp mắt, button 'View in Sheet' và 'Add to CRM'.",
                  },
                  {
                    title: "Tạo task follow-up trong Asana/Notion",
                    desc: "Tự động tạo task follow-up với deadline 24h cho sales phụ trách — không để lead nào bị bỏ quên.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#0A66C2"
                  title="LinkedIn Lead → CRM Pipeline"
                  steps={[
                    { icon: <span className="text-lg">💼</span>, label: "LinkedIn", sub: "Lead Form" },
                    { icon: <span className="text-lg">✨</span>, label: "Enrich", sub: "Clearbit/API" },
                    { icon: <span className="text-lg">📊</span>, label: "Google Sheet", sub: "Master list" },
                    { icon: <span className="text-lg">💬</span>, label: "Slack", sub: "Notify sales" },
                    { icon: <span className="text-lg">✅</span>, label: "Task", sub: "Follow-up 24h" },
                  ]}
                />

                <CalloutBox type="tip" title="Mẹo cho thị trường Việt Nam">
                  LinkedIn Lead Gen hoạt động tốt cho B2B Việt Nam, đặc biệt ngành IT, tài chính,
                  và dịch vụ chuyên nghiệp. Kết hợp với Facebook Lead Ads (Template 1) để cover
                  cả 2 kênh quan trọng nhất — merge data vào cùng một Google Sheet master.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1243-add-new-linkedin-lead-gen-form-responses-to-a-google-sheet" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* ==================== GROUP 2: E-COMMERCE ==================== */}
                <h2 id="ecommerce">Nhóm 2: E-commerce — 2 Templates</h2>

                <p>
                  Với hơn 70% SME Việt Nam hoạt động trong lĩnh vực bán lẻ hoặc có kênh bán hàng
                  online, nhóm templates e-commerce này có tiềm năng tiết kiệm thời gian lớn nhất
                  — từ xử lý đơn hàng đến quản lý tồn kho.
                </p>

                {/* Template 4 */}
                <h3 id="template-4">Template 4: Đơn Hàng Mới → MISA + Telegram + Google Sheet</h3>

                <p>
                  Template "flagship" dành cho SME Việt Nam. Mỗi khi có đơn hàng mới (từ Shopee,
                  Lazada, WooCommerce, hoặc Haravan), hệ thống tự động ghi nhận vào MISA, cập nhật
                  Google Sheet, và thông báo kho — không cần nhân viên ngồi nhập tay.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Webhook từ sàn TMĐT hoặc website",
                    desc: "Nhận webhook từ Shopee Seller API, Lazada Open Platform, WooCommerce hooks, hoặc Haravan webhooks khi có đơn hàng mới / đơn được xác nhận.",
                  },
                  {
                    title: "Parse và chuẩn hóa dữ liệu đơn hàng",
                    desc: "Node Set + Code chuẩn hóa format: tính tổng tiền (trừ phí ship, voucher), map SKU sang tên sản phẩm, chuẩn hóa địa chỉ giao hàng.",
                  },
                  {
                    title: "Kiểm tra tồn kho thực tế",
                    desc: "Gọi API MISA / kho nội bộ để kiểm tra số lượng tồn. Nếu đủ hàng → tiếp tục. Nếu thiếu → thông báo riêng cho kho và sales.",
                  },
                  {
                    title: "Tạo hóa đơn trong MISA",
                    desc: "Gọi MISA AMIS API để tạo hóa đơn bán hàng với đầy đủ thông tin: khách hàng, sản phẩm, số lượng, giá, phương thức thanh toán.",
                  },
                  {
                    title: "Log vào Google Sheet báo cáo",
                    desc: "Append row vào Sheet theo dõi đơn hàng ngày với: mã đơn, kênh bán, sản phẩm, doanh thu, trạng thái — phục vụ báo cáo EOD.",
                  },
                  {
                    title: "Thông báo kho qua Telegram",
                    desc: "Gửi message vào group Telegram của kho với: địa chỉ giao hàng, danh sách sản phẩm cần đóng gói, ghi chú đặc biệt, deadline ship.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  title="Đơn hàng → MISA → Kho → Báo cáo"
                  steps={[
                    { icon: <span className="text-lg">🛒</span>, label: "Đơn mới", sub: "Shopee/Lazada" },
                    { icon: <span className="text-lg">🔍</span>, label: "Check kho", sub: "MISA API" },
                    { icon: <span className="text-lg">🧾</span>, label: "Tạo hóa đơn", sub: "MISA AMIS" },
                    { icon: <span className="text-lg">📊</span>, label: "Google Sheet", sub: "Log đơn hàng" },
                    { icon: <span className="text-lg">📦</span>, label: "Telegram kho", sub: "Lệnh đóng gói" },
                  ]}
                />

                <CalloutBox type="success" title="ROI thực tế của Template 4">
                  Một shop thời trang online tại TP.HCM với 50–100 đơn/ngày tiết kiệm được
                  khoảng <strong>2–3 giờ nhập liệu thủ công mỗi ngày</strong> sau khi áp dụng
                  template này. Với chi phí nhân sự 200k/giờ, đó là 400k–600k/ngày — tương đương
                  12–18 triệu/tháng tiết kiệm trực tiếp.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1440-receive-shopify-order-and-trigger-an-automated-email" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io (Shopify version)
                  </a>
                </p>

                {/* Template 5 */}
                <h3 id="template-5">Template 5: Cảnh Báo Tồn Kho Thấp Tự Động</h3>

                <p>
                  Template này chạy định kỳ (mỗi sáng 8h hoặc mỗi 4 giờ), kiểm tra tồn kho,
                  và gửi cảnh báo tự động khi sản phẩm nào đó sắp hết hàng — trước khi xảy ra
                  tình trạng out-of-stock làm mất đơn hàng.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Schedule — mỗi sáng 8:00 AM",
                    desc: "Dùng Schedule trigger của n8n để chạy tự động mỗi ngày lúc 8:00, hoặc cấu hình chạy mỗi 4 tiếng cho shop có volume cao.",
                  },
                  {
                    title: "Lấy dữ liệu tồn kho từ hệ thống",
                    desc: "Gọi API kho hàng (MISA, KiotViet, Haravan, hoặc Shopee Seller) để lấy danh sách sản phẩm và số lượng tồn hiện tại.",
                  },
                  {
                    title: "Lọc sản phẩm dưới ngưỡng",
                    desc: "Node Filter tự động lọc ra các sản phẩm có tồn kho < ngưỡng cài đặt (ví dụ: < 10 cái, hoặc < 3 ngày bán trung bình).",
                  },
                  {
                    title: "Tính ngày hết hàng dự kiến",
                    desc: "Node Code tính toán dựa trên tốc độ bán trung bình 30 ngày: dự kiến hết hàng trong bao nhiêu ngày — ưu tiên cảnh báo theo mức độ khẩn cấp.",
                  },
                  {
                    title: "Gửi báo cáo tồn kho thấp",
                    desc: "Gửi message Telegram hoặc email với danh sách sản phẩm cần nhập hàng, sắp xếp theo mức độ ưu tiên (màu đỏ/vàng), kèm link đặt hàng nhà cung cấp.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  title="Kiểm tra tồn kho → Cảnh báo thông minh"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Schedule 8AM", sub: "Hàng ngày" },
                    { icon: <span className="text-lg">📦</span>, label: "Lấy tồn kho", sub: "KiotViet/MISA" },
                    { icon: <span className="text-lg">🔢</span>, label: "Tính ngày HH", sub: "Code Node" },
                    { icon: <span className="text-lg">🚨</span>, label: "Lọc khẩn cấp", sub: "Filter Node" },
                    { icon: <span className="text-lg">📱</span>, label: "Cảnh báo", sub: "Telegram/Email" },
                  ]}
                />

                <CalloutBox type="tip" title="Mẹo thiết lập ngưỡng cảnh báo">
                  Đừng dùng ngưỡng cố định (ví dụ: 10 cái) cho tất cả sản phẩm. Thay vào đó,
                  tính <strong>safety stock = (lead time nhà cung cấp) × (doanh số trung bình ngày)</strong>.
                  Sản phẩm bán 50 cái/ngày cần cảnh báo sớm hơn sản phẩm bán 2 cái/tuần.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1946-monitor-woocommerce-stock-levels-and-send-low-inventory-alerts" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* ==================== GROUP 3: CUSTOMER CARE ==================== */}
                <h2 id="customer-care">Nhóm 3: Chăm Sóc Khách Hàng — 2 Templates</h2>

                <p>
                  Chăm sóc khách hàng là một trong những lĩnh vực được hưởng lợi nhiều nhất từ
                  AI automation. Hai templates sau đây giúp xử lý 60–80% câu hỏi routine của
                  khách hàng mà không cần nhân viên trực 24/7.
                </p>

                {/* Template 6 */}
                <h3 id="template-6">Template 6: AI Chatbot Hỗ Trợ Khách Hàng</h3>

                <p>
                  Template AI chatbot tích hợp với website hoặc fanpage Facebook của bạn. Khách
                  hàng hỏi — AI trả lời dựa trên knowledge base của công ty — 24/7, không cần
                  nhân viên trực.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Webhook nhận tin nhắn từ khách",
                    desc: "Nhận message từ website chat widget (Crisp, Intercom), Facebook Messenger, hoặc bất kỳ kênh nào qua webhook/API.",
                  },
                  {
                    title: "Load knowledge base của công ty",
                    desc: "Kết nối với vector database (Pinecone, Supabase pgvector) đã được nạp nội dung FAQ, chính sách, thông tin sản phẩm — RAG pipeline.",
                  },
                  {
                    title: "AI Agent phân tích và trả lời",
                    desc: "GPT-4o hoặc Claude tìm kiếm trong knowledge base, tổng hợp câu trả lời phù hợp với ngữ cảnh, lịch sử chat, và văn hóa giao tiếp Việt Nam.",
                  },
                  {
                    title: "Phân loại câu hỏi không thể tự trả lời",
                    desc: "Nếu AI không đủ thông tin (confidence score thấp), tự động chuyển sang hàng đợi nhân viên và thông báo qua Slack/Telegram.",
                  },
                  {
                    title: "Log cuộc hội thoại để cải thiện",
                    desc: "Lưu toàn bộ conversation vào Google Sheet hoặc Notion để team review, cải thiện knowledge base, và phát hiện câu hỏi mới thường gặp.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  title="AI Chatbot 24/7 → Escalate khi cần"
                  steps={[
                    { icon: <span className="text-lg">💬</span>, label: "Tin nhắn", sub: "Khách hàng" },
                    { icon: <span className="text-lg">🔍</span>, label: "RAG Search", sub: "Knowledge base" },
                    { icon: <span className="text-lg">🤖</span>, label: "AI Agent", sub: "GPT-4o/Claude" },
                    { icon: <span className="text-lg">🔀</span>, label: "Route", sub: "Auto / Human" },
                    { icon: <span className="text-lg">📋</span>, label: "Log", sub: "Notion/Sheet" },
                  ]}
                />

                <CalloutBox type="info" title="Cấu hình ngôn ngữ tiếng Việt">
                  Thêm system prompt: <em>"Bạn là trợ lý chăm sóc khách hàng của [Tên Công ty].
                  Trả lời bằng tiếng Việt, lịch sự và thân thiện. Gọi khách là 'anh/chị'. Nếu
                  không chắc, đề nghị kết nối với nhân viên thay vì đoán mò."</em> — điều này
                  giúp AI phù hợp hơn với văn hóa giao tiếp Việt Nam.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1954-build-an-ai-powered-customer-support-chatbot" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* Template 7 */}
                <h3 id="template-7">Template 7: Review → Phân Tích Cảm Xúc + Phản Hồi Tự Động</h3>

                <p>
                  Tự động thu thập review từ Google Maps, Facebook, và Shopee. AI phân tích cảm
                  xúc, ưu tiên review tiêu cực để xử lý ngay, và soạn thảo phản hồi đề xuất
                  cho team — không bỏ sót review nào.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Cron — Quét review mỗi 6 tiếng",
                    desc: "Schedule trigger chạy mỗi 6 tiếng, gọi API Google My Business, Facebook Graph API, và Shopee API để lấy review mới.",
                  },
                  {
                    title: "Lọc review chưa xử lý",
                    desc: "So sánh timestamp với lần chạy trước (lưu trong Redis/Airtable), chỉ xử lý review mới — tránh duplicate.",
                  },
                  {
                    title: "AI phân tích sentiment và chủ đề",
                    desc: "GPT-4o mini (tiết kiệm chi phí) phân loại: positive/neutral/negative, chủ đề chính (giao hàng, chất lượng, giá cả, dịch vụ), và điểm ưu tiên.",
                  },
                  {
                    title: "Xử lý theo mức độ ưu tiên",
                    desc: "Review 1–2 sao → tạo task khẩn trong CRM, thông báo manager ngay. Review 3 sao → vào hàng đợi xử lý trong 24h. Review 4–5 sao → log và có thể dùng làm social proof.",
                  },
                  {
                    title: "Soạn phản hồi đề xuất bằng AI",
                    desc: "AI soạn 2–3 phương án phản hồi cho review tiêu cực, human duyệt và publish — tiết kiệm thời gian viết nhưng vẫn giữ yếu tố con người.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#EF4444"
                  title="Review → Sentiment → Escalate → Respond"
                  steps={[
                    { icon: <span className="text-lg">⭐</span>, label: "Thu review", sub: "GG/FB/Shopee" },
                    { icon: <span className="text-lg">🤖</span>, label: "Sentiment AI", sub: "GPT-4o mini" },
                    { icon: <span className="text-lg">🚨</span>, label: "1-2 sao", sub: "Escalate ngay" },
                    { icon: <span className="text-lg">✍️</span>, label: "Soạn phản hồi", sub: "AI + Human duyệt" },
                    { icon: <span className="text-lg">📊</span>, label: "Dashboard", sub: "Theo dõi trends" },
                  ]}
                />

                <CalloutBox type="tip" title="Chi phí AI cho Template 7">
                  Dùng GPT-4o mini thay vì GPT-4o cho việc phân loại sentiment — rẻ hơn 15 lần,
                  độ chính xác chỉ kém khoảng 3–5%. Với 100 review/tháng, chi phí API chỉ khoảng
                  3.000–5.000 VNĐ/tháng. Dùng GPT-4o chỉ cho bước soạn phản hồi.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1980-analyze-and-respond-to-google-reviews-using-ai" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* ==================== GROUP 4: REPORTING ==================== */}
                <h2 id="reporting">Nhóm 4: Báo Cáo Tự Động — 2 Templates</h2>

                <p>
                  Báo cáo thủ công là một trong những công việc tốn thời gian và dễ sai nhất trong
                  doanh nghiệp. Hai templates dưới đây tự động hóa báo cáo hàng tuần và dashboard
                  real-time — giúp bạn có insight kinh doanh mà không cần ngồi tổng hợp số liệu.
                </p>

                {/* Template 8 */}
                <h3 id="template-8">Template 8: Báo Cáo Doanh Thu Hàng Tuần Tự Động</h3>

                <p>
                  Mỗi thứ Hai lúc 8:00 sáng, template này tự động tổng hợp doanh thu tuần trước
                  từ tất cả kênh bán hàng, so sánh với tuần trước và cùng kỳ, và gửi báo cáo
                  đẹp mắt vào email/Slack cho ban lãnh đạo.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Thứ Hai 8:00 AM mỗi tuần",
                    desc: "Schedule trigger: 0 8 * * 1 (cron syntax). Mỗi thứ Hai đầu tuần, workflow tự động chạy và tổng hợp dữ liệu tuần trước (T2–CN).",
                  },
                  {
                    title: "Lấy dữ liệu từ tất cả nguồn",
                    desc: "Song song: lấy doanh thu từ Shopee, Lazada, website (WooCommerce/Haravan), và data MISA. Dùng node Merge để gộp lại.",
                  },
                  {
                    title: "Tính toán KPIs và so sánh",
                    desc: "Node Code tính: tổng doanh thu, số đơn, AOV, top 10 sản phẩm, tăng/giảm so tuần trước (%), so cùng kỳ tuần trước tháng trước.",
                  },
                  {
                    title: "Tạo biểu đồ và visualization",
                    desc: "Dùng QuickChart.io API hoặc Google Charts để tạo biểu đồ cột/đường nhúng trực tiếp vào email — không cần tool BI phức tạp.",
                  },
                  {
                    title: "Gửi báo cáo đa kênh",
                    desc: "Email HTML đẹp đến ban lãnh đạo, message tóm tắt 3 điểm vào Slack #management, cập nhật Google Sheet archive để so sánh dài hạn.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#0EA5E9"
                  title="Tự động báo cáo doanh thu thứ Hai 8AM"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "T2 8:00 AM", sub: "Schedule" },
                    { icon: <span className="text-lg">📊</span>, label: "Pull data", sub: "Multi-source" },
                    { icon: <span className="text-lg">🔢</span>, label: "Tính KPIs", sub: "Code Node" },
                    { icon: <span className="text-lg">📈</span>, label: "Tạo biểu đồ", sub: "QuickChart" },
                    { icon: <span className="text-lg">📧</span>, label: "Gửi báo cáo", sub: "Email + Slack" },
                  ]}
                />

                <CalloutBox type="success" title="Template đơn giản nhất để bắt đầu">
                  Đây là template được Autoflow khuyến nghị cho doanh nghiệp mới bắt đầu với n8n.
                  Lý do: không cần AI, không cần webhook phức tạp, chỉ cần Schedule + Google Sheet
                  + Email. Có thể setup trong 2–3 giờ và tạo giá trị ngay từ tuần đầu tiên.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1819-generate-weekly-report-and-send-via-email" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* Template 9 */}
                <h3 id="template-9">Template 9: Cập Nhật Dashboard Google Data Studio Tự Động</h3>

                <p>
                  Template này tự động đồng bộ dữ liệu từ nhiều nguồn vào Google Sheets, là
                  data source cho Google Looker Studio (Data Studio) dashboard — tạo dashboard
                  real-time không cần BI engineer.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Mỗi giờ hoặc real-time",
                    desc: "Schedule chạy mỗi giờ để cập nhật tổng quan, hoặc kết hợp với webhook triggers từ các nguồn để real-time hơn.",
                  },
                  {
                    title: "Pull dữ liệu marketing",
                    desc: "Lấy số liệu từ Google Ads API, Facebook Marketing API: impressions, clicks, spend, conversions — cập nhật vào Sheet 'Marketing'.",
                  },
                  {
                    title: "Pull dữ liệu bán hàng",
                    desc: "Từ WooCommerce/Haravan/MISA: đơn hàng, doanh thu, sản phẩm bán chạy, tỷ lệ hoàn hàng — cập nhật vào Sheet 'Sales'.",
                  },
                  {
                    title: "Pull dữ liệu vận hành",
                    desc: "Từ Airtable/Notion/hệ thống nội bộ: SLA ticket hỗ trợ, tiến độ dự án, KPI nhân sự — cập nhật vào Sheet 'Operations'.",
                  },
                  {
                    title: "Looker Studio tự cập nhật",
                    desc: "Google Looker Studio connect trực tiếp với các Sheets, tự động refresh — ban lãnh đạo vào dashboard thấy số liệu luôn mới nhất, không cần nhập tay.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#34A853"
                  title="Multi-source → Google Sheets → Looker Studio"
                  steps={[
                    { icon: <span className="text-lg">📣</span>, label: "Google Ads", sub: "Marketing" },
                    { icon: <span className="text-lg">🛒</span>, label: "E-commerce", sub: "Sales" },
                    { icon: <span className="text-lg">⚙️</span>, label: "Operations", sub: "Internal data" },
                    { icon: <span className="text-lg">📊</span>, label: "Google Sheets", sub: "Data lake" },
                    { icon: <span className="text-lg">📈</span>, label: "Looker Studio", sub: "Live dashboard" },
                  ]}
                />

                <CalloutBox type="tip" title="Template tiết kiệm nhất">
                  Thay vì trả $500–2000/tháng cho Tableau, Power BI, hay các BI SaaS, bạn có thể
                  xây dashboard tương đương với <strong>Google Looker Studio miễn phí + n8n</strong>.
                  Nhiều startup Việt Nam đang dùng stack này cho dashboard toàn công ty.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/1844-sync-data-from-multiple-sources-to-google-sheets" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* ==================== GROUP 5: AI ==================== */}
                <h2 id="ai">Nhóm 5: AI Agent — 1 Template Nổi Bật</h2>

                <p>
                  Nhóm AI là phần phát triển nhanh nhất của thư viện n8n — với 6.181 templates.
                  Template dưới đây được chọn vì tính thực tiễn cao nhất với SME Việt Nam:
                  xử lý email là bài toán ngốn thời gian của mọi doanh nghiệp.
                </p>

                {/* Template 10 */}
                <h3 id="template-10">Template 10: AI Agent Xử Lý Và Phân Loại Email Tự Động</h3>

                <p>
                  Template AI Agent phức tạp nhất trong danh sách, nhưng cũng mạnh nhất.
                  AI đọc email đến, phân loại, trích xuất thông tin quan trọng, và thực hiện
                  các action phù hợp — giảm 60–70% thời gian xử lý email của team.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger: Email mới đến Gmail/Outlook",
                    desc: "Gmail trigger hoặc Microsoft Outlook trigger kích hoạt khi có email mới vào inbox được chỉ định (có thể filter theo label/folder).",
                  },
                  {
                    title: "AI phân loại email theo loại",
                    desc: "GPT-4o phân loại email thành: yêu cầu báo giá, khiếu nại, đơn hàng, hợp tác, spam, hoặc internal. Confidence score được tính để quyết định auto-action hay cần human review.",
                  },
                  {
                    title: "Trích xuất thông tin có cấu trúc",
                    desc: "Với email yêu cầu báo giá: trích xuất tên công ty, sản phẩm quan tâm, số lượng, deadline. Với khiếu nại: mã đơn hàng, vấn đề cụ thể, mức độ nghiêm trọng.",
                  },
                  {
                    title: "Action tự động theo loại email",
                    desc: "Báo giá → tạo deal trong CRM + assign sales. Khiếu nại → tạo ticket trong Freshdesk/Zendesk + thông báo manager. Đơn hàng → xử lý theo Template 4. Spam → move to trash.",
                  },
                  {
                    title: "Soạn thảo phản hồi đề xuất",
                    desc: "AI soạn email phản hồi hoàn chỉnh, đưa vào Gmail Drafts — human xem lại và gửi trong 1 click. Hoặc auto-send cho các loại email có confidence cao và response template rõ ràng.",
                  },
                  {
                    title: "Log và học từ feedback",
                    desc: "Ghi lại mọi phân loại vào Airtable. Khi human sửa classification → tự động cập nhật few-shot examples trong system prompt → AI ngày càng chính xác hơn.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#6366F1"
                  title="Email → AI Agent → Multi-action"
                  steps={[
                    { icon: <span className="text-lg">📨</span>, label: "Email đến", sub: "Gmail/Outlook" },
                    { icon: <span className="text-lg">🤖</span>, label: "AI Classify", sub: "GPT-4o" },
                    { icon: <span className="text-lg">📋</span>, label: "Extract info", sub: "Structured data" },
                    { icon: <span className="text-lg">🔀</span>, label: "Route action", sub: "CRM/Ticket/Auto" },
                    { icon: <span className="text-lg">✍️</span>, label: "Draft reply", sub: "Human → Send" },
                  ]}
                />

                <CalloutBox type="warning" title="Lưu ý khi triển khai Template 10">
                  Bắt đầu với chế độ <strong>"suggest only"</strong> — AI đề xuất nhưng human
                  xác nhận tất cả action trong 2–4 tuần đầu. Sau khi đánh giá độ chính xác {">"}
                  90%, mới bật auto-action cho các loại email rủi ro thấp (spam filter, routing).
                  Không bao giờ auto-send email đến khách hàng mà không có human review ban đầu.
                </CalloutBox>

                <p>
                  <a href="https://n8n.io/workflows/2043-ai-agent-to-classify-and-respond-to-emails" target="_blank" rel="noopener noreferrer">
                    Xem template gốc trên n8n.io
                  </a>
                </p>

                {/* ==================== COMPARISON TABLE ==================== */}
                <h2 id="so-sanh-nhom">So Sánh Các Nhóm Template — Chọn Cái Nào Trước?</h2>

                <p>
                  Không thể triển khai tất cả 10 templates cùng lúc? Bảng dưới đây giúp bạn
                  ưu tiên theo mức độ phù hợp với doanh nghiệp của mình.
                </p>

                <ComparisonTable
                  highlightCol={2}
                  headers={["Nhóm Template", "Độ phức tạp", "Thời gian setup", "ROI dự kiến", "Phù hợp nhất"]}
                  rows={[
                    ["Lead Gen (T1–T3)", "Trung bình", "4–8 giờ/template", "Cao — tiết kiệm 1–2h/ngày", "Doanh nghiệp B2C, B2B có quảng cáo"],
                    ["E-commerce (T4–T5)", "Thấp–Trung bình", "3–6 giờ/template", "Rất cao — 2–3h/ngày nhập liệu", "Shop online, bán lẻ TMĐT"],
                    ["Customer Care (T6–T7)", "Cao (có AI)", "8–16 giờ/template", "Cao — giảm 60–70% thời gian CS", "Doanh nghiệp nhiều khách, CS phức tạp"],
                    ["Báo cáo (T8–T9)", "Thấp", "2–4 giờ/template", "Trung bình — 2–4h/tuần", "Mọi doanh nghiệp, đặc biệt SME"],
                    ["AI Agent (T10)", "Cao", "12–20 giờ", "Cao — giảm 60–70% xử lý email", "Doanh nghiệp email-heavy, sales/CS"],
                  ]}
                />

                <CalloutBox type="info" title="Lộ trình triển khai được khuyến nghị">
                  <strong>Tuần 1–2:</strong> Bắt đầu với Template 8 (báo cáo tuần) — đơn giản
                  nhất, tạo giá trị ngay, giúp team làm quen với n8n.{" "}
                  <strong>Tuần 3–4:</strong> Thêm Template 4 (đơn hàng → MISA) nếu là TMĐT hoặc
                  Template 2 (email nurture) nếu là dịch vụ.{" "}
                  <strong>Tháng 2:</strong> Mở rộng thêm Lead Gen và Customer Care.{" "}
                  <strong>Tháng 3+:</strong> Triển khai AI templates khi đã quen với n8n.
                </CalloutBox>

                {/* ==================== FAQ ==================== */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về n8n Templates</h2>
              </div>

              <FAQ items={faqItems} />

              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold">
                <BlogFooter
                  title="10 n8n Workflow Templates"
                  slug="n8n-workflow-templates"
                  date="2026-04-01"
                />
              </div>
            </div>

            {/* Sticky TOC */}
            <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
