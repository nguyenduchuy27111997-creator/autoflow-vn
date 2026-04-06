import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalloutBox from "@/components/blog/CalloutBox";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import TableOfContents from "@/components/blog/TableOfContents";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";
import BlogFooter from "@/components/blog/BlogFooter";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";
import AnimatedCounter from "@/components/blog/AnimatedCounter";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Toàn Cảnh Công Cụ Tự Động Hóa Tại Việt Nam 2026: n8n, Zapier, Make & 20+ Nền Tảng",
  description:
    "So sánh chi tiết n8n, Zapier, Make & 20+ nền tảng automation. Giá VND, tích hợp công cụ Việt Nam, decision framework cho SME. Cập nhật 2026.",
  keywords: [
    "so sánh công cụ automation",
    "n8n vs zapier vs make 2026",
    "phần mềm tự động hóa tốt nhất",
    "công cụ automation Việt Nam",
    "so sánh nền tảng tự động hóa",
    "n8n giá bao nhiêu",
    "zapier thay thế",
    "make integromat việt nam",
    "automation tool comparison",
    "low-code no-code Việt Nam",
  ],
  alternates: { canonical: "https://autoflowvn.net/blog/so-sanh-cong-cu-automation-2026" },
  openGraph: {
    title: "Toàn Cảnh Công Cụ Tự Động Hóa Tại Việt Nam 2026",
    description: "So sánh chi tiết n8n, Zapier, Make & 20+ nền tảng. Giá VND, tích hợp Việt Nam, decision framework.",
    url: "https://autoflowvn.net/blog/so-sanh-cong-cu-automation-2026",
    type: "article",
  },
};

const tocItems = [
  { id: "tai-sao", text: "Tại sao cần so sánh?", level: 2 },
  { id: "3-ong-lon", text: "3 Ông Lớn: n8n vs Zapier vs Make", level: 2 },
  { id: "n8n-chi-tiet", text: "n8n — Open-source, self-host", level: 3 },
  { id: "zapier-chi-tiet", text: "Zapier — Vua no-code", level: 3 },
  { id: "make-chi-tiet", text: "Make — Visual automation", level: 3 },
  { id: "verdict-3", text: "Verdict: Khi nào chọn ai?", level: 3 },
  { id: "bang-so-sanh", text: "Bảng So Sánh Toàn Diện", level: 2 },
  { id: "phan-loai-nganh", text: "Phân loại theo ngành", level: 2 },
  { id: "phan-loai-ngan-sach", text: "Phân loại theo ngân sách", level: 2 },
  { id: "ecosystem-vn", text: "Ecosystem Việt Nam", level: 2 },
  { id: "decision-framework", text: "Decision Framework", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "n8n có thực sự miễn phí không?",
    a: "Có, n8n Community Edition hoàn toàn miễn phí khi self-host. Bạn chỉ trả tiền VPS (~150.000-500.000đ/tháng). n8n Cloud có gói trả phí từ $20/tháng. AutoFlow triển khai n8n self-host trên VPS tại TP.HCM, toàn bộ dữ liệu nằm trong lãnh thổ Việt Nam.",
  },
  {
    q: "Zapier đắt nhưng có đáng tiền không?",
    a: "Zapier phù hợp nếu bạn cần kết nối nhanh 2-3 ứng dụng phổ biến quốc tế (Salesforce, HubSpot, Slack) và không muốn quản lý server. Tuy nhiên với SME Việt Nam, giá $299/tháng cho gói Professional thường quá đắt khi n8n self-host làm được tương tự với chi phí thấp hơn 90%. Zapier cũng không hỗ trợ trực tiếp các công cụ Việt Nam như KiotViet, MISA, Zalo OA.",
  },
  {
    q: "Make (Integromat) có phải lựa chọn trung gian tốt?",
    a: "Make có giao diện đẹp hơn Zapier, giá rẻ hơn ($9/tháng cho gói cơ bản), và hỗ trợ scenario phức tạp. Tuy nhiên, Make cũng là cloud-only — dữ liệu nằm ở nước ngoài. Nếu bạn cần xử lý dữ liệu nhạy cảm hoặc tích hợp công cụ Việt Nam, n8n self-host vẫn là lựa chọn tốt hơn.",
  },
  {
    q: "Power Automate có phù hợp cho doanh nghiệp Việt Nam?",
    a: "Power Automate phù hợp nếu doanh nghiệp bạn đã dùng Microsoft 365 (Outlook, Teams, SharePoint). Giá từ ~370.000đ/user/tháng. Điểm yếu: ít tích hợp với công cụ Việt Nam, giao diện phức tạp, và bị lock-in vào hệ sinh thái Microsoft. Không phải lựa chọn tốt cho SME dùng Google Workspace hoặc công cụ Việt Nam.",
  },
  {
    q: "Doanh nghiệp nhỏ nên bắt đầu với công cụ nào?",
    a: "Với ngân sách dưới 5 triệu/tháng: n8n self-host (miễn phí) + VPS (~300.000đ/tháng). Bắt đầu với 2-3 workflow đơn giản: đồng bộ đơn hàng, nhắc lịch Zalo OA, thông báo Telegram. Xem lộ trình chi tiết tại bài Lộ Trình Tự Động Hóa Cho SME.",
  },
  {
    q: "Có nên dùng nhiều công cụ automation cùng lúc?",
    a: "Không nên. Multi-tool tạo ra phức tạp không cần thiết: workflow nằm rải rác, khó debug, chi phí cộng dồn. Chọn 1 nền tảng chính (khuyến nghị n8n) làm hub trung tâm, kết nối tất cả hệ thống qua đó. Ngoại lệ: nếu đã dùng automation built-in của KiotViet/Haravan cho tác vụ đơn giản, có thể giữ song song.",
  },
  {
    q: "AI Agent tools (LangChain, CrewAI) có thay thế được automation truyền thống?",
    a: "Chưa. AI Agent tools giỏi ở xử lý ngôn ngữ tự nhiên và ra quyết định, nhưng không thay thế được workflow automation cho tác vụ lặp lại có logic rõ ràng (đồng bộ đơn, tạo hóa đơn, nhắc lịch). Cách tiếp cận tốt nhất: dùng n8n làm nền tảng, tích hợp AI Agent nodes cho các tác vụ cần \"thông minh\" (phân loại ticket, soạn nội dung cá nhân hóa).",
  },
  {
    q: "Vendor lock-in là gì và tại sao cần quan tâm?",
    a: "Vendor lock-in là khi bạn phụ thuộc vào 1 nhà cung cấp đến mức không thể chuyển đổi mà không mất dữ liệu/workflow. Zapier và Make đều có rủi ro này — workflow chỉ chạy trên nền tảng họ, không export được. n8n open-source giải quyết vấn đề này: workflow export dạng JSON, self-host trên bất kỳ server nào, và bạn sở hữu toàn bộ dữ liệu.",
  },
  {
    q: "Công cụ nào hỗ trợ tích hợp Zalo OA, KiotViet, MISA tốt nhất?",
    a: "n8n — vì hỗ trợ HTTP Request node và Webhook, cho phép tích hợp bất kỳ API nào kể cả các công cụ Việt Nam chưa có connector chính thức. Zapier và Make chỉ hỗ trợ các app có trên marketplace của họ — hầu hết công cụ Việt Nam không có. AutoFlow đã xây sẵn template n8n cho KiotViet, MISA, Sapo, Haravan, Zalo OA, GHN, GHTK.",
  },
  {
    q: "Chi phí triển khai automation thực tế là bao nhiêu?",
    a: "Tự triển khai n8n: VPS 300.000-500.000đ/tháng + thời gian học. Thuê AutoFlow: gói Starter 8-15 triệu (one-time) cho 3-5 workflow + retainer tùy chọn 8-15 triệu/tháng. So sánh: Zapier Professional $299/tháng (~7,5 triệu) cho features tương đương nhưng không có hỗ trợ tiếng Việt và tích hợp Việt Nam.",
  },
];

export default function SoSanhCongCuAutomation2026() {
  return (
    <>
      <BreadcrumbJsonLd slug="so-sanh-cong-cu-automation-2026" title="Toàn Cảnh Công Cụ Tự Động Hóa Tại Việt Nam 2026" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }}
      />
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
              <span className="text-slate-600 truncate max-w-[300px]">So sánh công cụ automation 2026</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">Pillar</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">So sánh</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">Tools</span>
              <span className="text-xs text-slate-500">22 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Toàn Cảnh Công Cụ Tự Động Hóa Tại Việt Nam 2026:{" "}
              <span className="gradient-text">n8n, Zapier, Make & 20+ Nền Tảng</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Thị trường automation toàn cầu đạt $89 tỷ vào 2026, nhưng SME Việt Nam vẫn loay hoay chọn công cụ.
              Bài viết này so sánh chi tiết 20+ nền tảng — từ 3 ông lớn (n8n, Zapier, Make) đến công cụ Việt Nam
              (KiotViet, Sapo, Haravan) — với giá VND, khả năng tích hợp, và decision framework giúp bạn chọn đúng.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start relative">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Key stats */}
                <AnimatedCounter stats={[
                  { value: 89, prefix: "$", suffix: "B", label: "Thị trường automation 2026", sub: "Mordor Intelligence", color: "text-primary" },
                  { value: 20, suffix: "+", label: "Nền tảng được so sánh", sub: "trong bài viết này" },
                  { value: 90, suffix: "%", label: "Tiết kiệm chi phí", sub: "n8n self-host vs Zapier", color: "text-emerald-600" },
                  { value: 400, suffix: "+", label: "Tích hợp n8n", sub: "bao gồm công cụ Việt Nam", color: "text-violet-600" },
                ]} />

                {/* ==================== SECTION 1: TẠI SAO ==================== */}
                <h2 id="tai-sao">Tại Sao Cần So Sánh Công Cụ Automation?</h2>

                <p>
                  Năm 2026, thị trường automation bùng nổ với hàng trăm nền tảng — từ các &ldquo;ông lớn&rdquo; quốc tế
                  như Zapier, Make, tới open-source như n8n, và cả automation built-in trong các phần mềm Việt Nam.
                  Nhưng <strong>chọn sai công cụ từ đầu có thể gây thiệt hại lớn</strong>: tốn tiền license,
                  mất thời gian migrate, và tệ nhất — bị <em>vendor lock-in</em> không thoát ra được.
                </p>

                <p>
                  Nhiều SME Việt Nam chọn công cụ dựa trên &ldquo;bài review trên Google đầu tiên&rdquo; hoặc
                  &ldquo;anh bạn giới thiệu&rdquo;. Cách tiếp cận đó bỏ qua 3 yếu tố quan trọng nhất cho
                  doanh nghiệp Việt:
                </p>

                <div className="not-prose my-8 grid md:grid-cols-3 gap-4">
                  {[
                    { icon: "💰", title: "Giá VND thực tế", desc: "Zapier $299/tháng = 7,5 triệu. n8n self-host = 300.000đ/tháng. Chênh lệch 25 lần." },
                    { icon: "🇻🇳", title: "Tích hợp Việt Nam", desc: "KiotViet, MISA, Sapo, Zalo OA, GHN — hầu hết không có trên marketplace Zapier/Make." },
                    { icon: "🔒", title: "Dữ liệu & Bảo mật", desc: "Cloud = dữ liệu ở nước ngoài. Self-host = dữ liệu trên server tại Việt Nam." },
                  ].map((item) => (
                    <div key={item.title} className="bg-slate-50 rounded-xl p-5">
                      <span className="text-lg">{item.icon}</span>
                      <div className="font-display font-bold text-sm text-slate-900 mt-2">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <p>
                  Bài viết này không chỉ so sánh features — mà đặt trong bối cảnh SME Việt Nam: ngân sách hạn hẹp,
                  cần tích hợp công cụ nội địa, và quan tâm đến bảo mật dữ liệu. Nếu bạn chưa rõ automation là gì,
                  đọc trước: <a href="/blog/n8n-la-gi">n8n Là Gì? Hướng Dẫn Toàn Diện 2026</a> và{" "}
                  <a href="/blog/lo-trinh-tu-dong-hoa-sme">Lộ Trình Tự Động Hóa Cho SME</a>.
                </p>

                <CalloutBox type="info">
                  <strong>Ai nên đọc bài này?</strong> Chủ doanh nghiệp, quản lý vận hành, và IT manager đang tìm công cụ
                  automation phù hợp. Nếu bạn đã chọn n8n và muốn so sánh cụ thể với Zapier, xem{" "}
                  <a href="/blog/n8n-vs-zapier">n8n vs Zapier — SME Việt Nam Nên Chọn?</a>
                </CalloutBox>

                {/* ==================== SECTION 2: 3 ÔNG LỚN ==================== */}
                <h2 id="3-ong-lon"><span className="text-lg">🏆</span> 3 Ông Lớn: n8n vs Zapier vs Make</h2>

                <p>
                  Ba nền tảng này chiếm hơn 70% thị phần workflow automation toàn cầu. Mỗi cái có triết lý khác nhau,
                  phù hợp với đối tượng khác nhau. Hãy cùng phân tích chi tiết.
                </p>

                {/* --- n8n --- */}
                <h3 id="n8n-chi-tiet"><span className="text-lg">⚡</span> n8n — Open-Source, Self-Host, Không Giới Hạn</h3>

                <p>
                  n8n (viết tắt &ldquo;nodemation&rdquo;) là nền tảng automation open-source được tạo bởi Jan Oberhauser
                  (Đức) năm 2019. Điểm khác biệt lớn nhất: <strong>bạn có thể tự host trên server riêng, hoàn toàn
                  miễn phí</strong>. Với n8n 2.0 ra mắt cuối 2025, nền tảng này đã bổ sung 70+ AI nodes, hỗ trợ
                  LangChain native, và multi-agent orchestration.
                </p>

                <StatCard stats={[
                  { value: "400+", label: "Tích hợp sẵn", color: "text-primary" },
                  { value: "70+", label: "AI Nodes", sub: "LangChain, GPT, Claude" },
                  { value: "$0", label: "Chi phí license", sub: "Community Edition" },
                  { value: "50K+", label: "GitHub Stars", sub: "top 100 open-source" },
                ]} />

                <p>
                  <strong>Ưu điểm cho SME Việt Nam:</strong> Self-host = dữ liệu ở Việt Nam, không giới hạn workflow/execution,
                  HTTP Request node tích hợp được bất kỳ API nào (KiotViet, MISA, Sapo, Zalo OA). Chi phí chỉ VPS
                  150.000-500.000đ/tháng. Xem chi tiết: <a href="/blog/n8n-la-gi">n8n Là Gì?</a>
                </p>

                <p>
                  <strong>Nhược điểm:</strong> Cần kiến thức kỹ thuật cơ bản để cài đặt (hoặc thuê{" "}
                  <a href="/blog/tu-lam-hay-thue">chuyên gia triển khai</a>). Giao diện ban đầu có thể khó hơn
                  Zapier cho người mới. Không có marketplace app lớn như Zapier.
                </p>

                {/* --- Zapier --- */}
                <h3 id="zapier-chi-tiet"><span className="text-lg">🔗</span> Zapier — Vua No-Code, Giá Premium</h3>

                <p>
                  Zapier là nền tảng automation lớn nhất thế giới với 7.000+ integrations và giao diện cực kỳ đơn giản.
                  Nếu bạn chỉ cần kết nối 2-3 ứng dụng phổ biến quốc tế, Zapier làm được trong vài phút.
                  Tuy nhiên, <strong>giá cả là rào cản lớn nhất</strong> cho SME Việt Nam.
                </p>

                <StatCard stats={[
                  { value: "7,000+", label: "Integrations", color: "text-orange-600" },
                  { value: "$299", label: "/tháng Professional", sub: "~7,5 triệu VND" },
                  { value: "$3,588", label: "/năm minimum", sub: "cho plan hữu ích" },
                  { value: "0", label: "Tích hợp Việt Nam", sub: "không KiotViet, MISA, Zalo" },
                ]} />

                <p>
                  <strong>Ưu điểm:</strong> Giao diện đơn giản nhất thị trường, marketplace khổng lồ, không cần quản lý server.
                  AI features mới (Copilot, Canvas) giúp tạo workflow bằng ngôn ngữ tự nhiên.
                </p>

                <p>
                  <strong>Nhược điểm cho Việt Nam:</strong> Giá đắt ($299/tháng cho Professional), giới hạn tasks/tháng,
                  không self-host (dữ liệu ở Mỹ), <strong>không hỗ trợ trực tiếp KiotViet, MISA, Sapo, Zalo OA, GHN,
                  GHTK</strong>. Vendor lock-in cao — không export workflow.
                  So sánh chi tiết: <a href="/blog/n8n-vs-zapier">n8n vs Zapier cho SME Việt Nam</a>.
                </p>

                {/* --- Make --- */}
                <h3 id="make-chi-tiet"><span className="text-lg">🎨</span> Make (Integromat) — Visual Automation, Giá Trung Bình</h3>

                <p>
                  Make (trước đây là Integromat) nổi tiếng với giao diện visual đẹp nhất trong 3 nền tảng.
                  Workflow được thiết kế dạng &ldquo;scenario&rdquo; với flowchart trực quan. Giá cả cạnh tranh
                  hơn Zapier, nhưng vẫn là dịch vụ cloud-only.
                </p>

                <StatCard stats={[
                  { value: "1,800+", label: "Integrations", color: "text-purple-600" },
                  { value: "$9", label: "/tháng Core plan", sub: "~225.000 VND" },
                  { value: "$99", label: "/tháng Pro plan", sub: "~2,5 triệu VND" },
                  { value: "10K", label: "operations/tháng Core", sub: "hết thì dừng" },
                ]} />

                <p>
                  <strong>Ưu điểm:</strong> Giao diện visual đẹp, giá thấp hơn Zapier 3-5x, hỗ trợ scenario phức tạp
                  (router, iterator, aggregator), tốt cho người thích &ldquo;nhìn thấy&rdquo; workflow.
                </p>

                <p>
                  <strong>Nhược điểm cho Việt Nam:</strong> Cloud-only (dữ liệu ở EU), giới hạn operations/tháng
                  (10.000 operations hết rất nhanh với workflow chạy nhiều), ít tích hợp Việt Nam hơn cả Zapier.
                  AI features đang phát triển nhưng chưa mạnh bằng n8n.
                </p>

                {/* --- Verdict --- */}
                <h3 id="verdict-3"><span className="text-lg">⚖️</span> Verdict: Khi Nào Chọn Ai?</h3>

                <ComparisonTable
                  headers={["Tiêu chí", "n8n", "Zapier", "Make"]}
                  highlightCol={1}
                  rows={[
                    ["Giá/năm (team nhỏ)", "~1,5 triệu (VPS)", "89 triệu ($3,588)", "30 triệu ($1,188)"],
                    ["Self-host", "✅ Có", "❌ Không", "❌ Không"],
                    ["Tích hợp Việt Nam", "✅ Qua HTTP/Webhook", "❌ Không có", "❌ Rất ít"],
                    ["AI Nodes", "70+ (LangChain native)", "AI Copilot", "AI đang phát triển"],
                    ["Giới hạn workflow", "Không giới hạn", "Giới hạn theo plan", "Giới hạn operations"],
                    ["Code support", "JavaScript, Python", "Chỉ Python (limited)", "Chỉ trong module"],
                    ["Dữ liệu", "Server bạn (VN)", "Server Mỹ", "Server EU"],
                    ["Vendor lock-in", "Thấp (open-source)", "Cao", "Trung bình"],
                    ["Giao diện", "Tốt (cần quen)", "Rất đơn giản", "Rất đẹp (visual)"],
                    ["Cộng đồng", "GitHub 50K+ stars", "Lớn nhất", "Trung bình"],
                    ["Phù hợp", "SME Việt Nam, technical", "Enterprise quốc tế", "Freelancer, agency"],
                  ]}
                />

                <BeforeAfter
                  before={{ title: "Chọn sai công cụ", items: [
                    "Trả $299/tháng Zapier nhưng chỉ dùng 5% features",
                    "Không kết nối được KiotViet, MISA, Zalo OA",
                    "Dữ liệu khách hàng nằm trên server Mỹ",
                    "Hết budget sau 6 tháng, phải dừng automation",
                    "Vendor lock-in — không export được workflow",
                  ]}}
                  after={{ title: "Chọn đúng công cụ", items: [
                    "n8n self-host: 300.000đ/tháng, không giới hạn",
                    "Tích hợp mọi công cụ Việt Nam qua API/Webhook",
                    "Dữ liệu trên server tại TP.HCM",
                    "Tiết kiệm 90% chi phí, scale không lo",
                    "Open-source — sở hữu toàn bộ workflow",
                  ]}}
                />

                <CalloutBox type="tip">
                  <strong>Lựa chọn của AutoFlow:</strong> 95% khách hàng SME Việt Nam chúng tôi triển khai trên n8n self-host.
                  Lý do: chi phí thấp, tích hợp Việt Nam tốt, dữ liệu ở Việt Nam, không vendor lock-in.
                  Xem <a href="/blog/roi-calculator-automation">ROI Calculator</a> để tính tiết kiệm cụ thể.
                </CalloutBox>

                {/* ==================== SECTION 3: BẢNG SO SÁNH TOÀN DIỆN ==================== */}
                <h2 id="bang-so-sanh"><span className="text-lg">📊</span> Bảng So Sánh Toàn Diện 20+ Nền Tảng</h2>

                <p>
                  Ngoài 3 ông lớn, thị trường còn rất nhiều lựa chọn — từ enterprise platforms đến automation built-in
                  trong phần mềm Việt Nam, và cả AI-native tools. Dưới đây là bảng so sánh toàn cảnh.
                </p>

                <h4><span className="text-lg">🌐</span> Nền tảng Automation quốc tế</h4>

                <ComparisonTable
                  headers={["Nền tảng", "Loại", "Giá/tháng", "Integrations", "Self-host", "Phù hợp"]}
                  highlightCol={0}
                  rows={[
                    ["n8n", "Open-source", "Free (self-host)", "400+", "✅", "SME Việt Nam"],
                    ["Zapier", "Cloud SaaS", "$299+ Pro", "7,000+", "❌", "Enterprise quốc tế"],
                    ["Make", "Cloud SaaS", "$9-99", "1,800+", "❌", "Freelancer/Agency"],
                    ["Power Automate", "Microsoft", "~370K VND/user", "1,000+", "❌", "DN dùng Microsoft 365"],
                    ["Workato", "Enterprise", "$10,000+/năm", "1,200+", "❌", "Enterprise lớn"],
                    ["Tray.io", "Enterprise", "$5,000+/năm", "600+", "❌", "Enterprise IT"],
                    ["Activepieces", "Open-source", "Free (self-host)", "200+", "✅", "Thay thế Zapier đơn giản"],
                    ["Pipedream", "Developer", "Free-$29", "1,000+", "❌", "Developer"],
                    ["IFTTT", "Consumer", "$3.49", "800+", "❌", "Cá nhân / IoT"],
                  ]}
                />

                <h4><span className="text-lg">🇻🇳</span> Công cụ Việt Nam có automation built-in</h4>

                <ComparisonTable
                  headers={["Nền tảng", "Loại", "Automation built-in", "API mở", "Kết hợp n8n"]}
                  highlightCol={0}
                  rows={[
                    ["KiotViet", "POS/Quản lý bán hàng", "Cơ bản (trigger email)", "✅ REST API", "✅ Rất tốt"],
                    ["Sapo", "POS/E-commerce", "Cơ bản (thông báo)", "✅ REST API", "✅ Rất tốt"],
                    ["Haravan", "E-commerce platform", "Trung bình (workflow)", "✅ REST API", "✅ Tốt"],
                    ["MISA", "Kế toán/ERP", "Cơ bản (báo cáo)", "✅ REST API", "✅ Tốt"],
                    ["Pancake", "Quản lý fanpage", "Trung bình (auto-reply)", "⚠️ Hạn chế", "⚠️ Qua webhook"],
                    ["CRM Việt", "Getfly, Bitrix24 VN", "Trung bình", "✅ REST API", "✅ Tốt"],
                    ["Zalo OA", "Messaging platform", "Auto-reply cơ bản", "✅ REST API", "✅ Rất tốt"],
                  ]}
                />

                <p>
                  Xem hướng dẫn tích hợp chi tiết cho từng nền tảng:{" "}
                  <a href="/blog/kiotviet-n8n-tich-hop">KiotViet + n8n</a>,{" "}
                  <a href="/blog/sapo-n8n-da-kenh">Sapo + n8n</a>,{" "}
                  <a href="/blog/haravan-n8n-automation">Haravan + n8n</a>,{" "}
                  <a href="/blog/dong-bo-shopee-misa">Shopee → MISA</a>.
                </p>

                <h4><span className="text-lg">🧠</span> No-code & AI-native tools</h4>

                <ComparisonTable
                  headers={["Nền tảng", "Loại", "Điểm mạnh", "Hạn chế", "Kết hợp n8n"]}
                  highlightCol={0}
                  rows={[
                    ["Airtable Automations", "No-code DB", "Tự động trong Airtable", "Chỉ trong Airtable", "✅ Trigger/Action"],
                    ["Notion Automations", "No-code workspace", "Tự động trong Notion", "Rất hạn chế", "✅ Qua API"],
                    ["Google Apps Script", "Code (JS)", "Miễn phí, Google ecosystem", "Chỉ Google apps", "✅ Qua webhook"],
                    ["LangChain", "AI framework", "Xây AI Agent mạnh", "Cần developer", "✅ n8n nodes sẵn"],
                    ["CrewAI", "AI multi-agent", "Multi-agent orchestration", "Cần Python", "✅ Qua n8n AI nodes"],
                    ["AutoGPT", "AI autonomous", "Tự động hoàn toàn", "Chưa ổn định", "⚠️ Qua API"],
                    ["Dify", "AI app builder", "No-code AI workflow", "Hạn chế automation", "✅ Qua API"],
                  ]}
                />

                <CalloutBox type="warning">
                  <strong>Cảnh báo vendor lock-in:</strong> Khi chọn nền tảng cloud-only (Zapier, Make, Workato), workflow
                  của bạn bị &ldquo;nhốt&rdquo; trong hệ sinh thái đó. Không export, không migrate. Với n8n open-source,
                  bạn export workflow dạng JSON và chạy trên bất kỳ server nào.
                  Đọc thêm: <a href="/blog/bao-mat-data-automation">Bảo Mật Data Khi Dùng Automation</a>.
                </CalloutBox>

                {/* ==================== SECTION 4: PHÂN LOẠI THEO NGÀNH ==================== */}
                <h2 id="phan-loai-nganh"><span className="text-lg">🏭</span> Phân Loại Theo Ngành: Công Cụ Nào Cho Ngành Nào?</h2>

                <p>
                  Không có công cụ &ldquo;one-size-fits-all&rdquo;. Mỗi ngành có hệ sinh thái riêng và nhu cầu
                  automation khác nhau. Dưới đây là khuyến nghị dựa trên kinh nghiệm triển khai thực tế của AutoFlow.
                </p>

                <ComparisonTable
                  headers={["Ngành", "Công cụ chính", "Tích hợp cần có", "Bài viết liên quan"]}
                  rows={[
                    ["E-commerce / TMĐT", "n8n (hub trung tâm)", "Shopee, TikTok Shop, KiotViet, Sapo, MISA, GHN/GHTK", "Shopee→MISA, TikTok Shop, KiotViet"],
                    ["F&B (Nhà hàng, Cafe)", "n8n + Zalo OA", "KiotViet, Zalo OA, Google Maps", "Zalo OA F&B"],
                    ["Giáo dục", "n8n + Zalo OA", "Zalo OA, Google Sheets, Calendar", "Nhắc lịch Zalo OA"],
                    ["Bất động sản", "n8n + CRM", "Facebook Ads, Zalo OA, CRM", "Lead Facebook Ads BĐS"],
                    ["Y tế (Phòng khám)", "n8n + Zalo OA", "Zalo OA, Calendar, SMS", "Automation Phòng Khám"],
                    ["Salon & Spa", "n8n + Zalo OA", "Zalo OA, KiotViet, Booking", "Automation Salon Spa"],
                    ["Du lịch & Khách sạn", "n8n + Channel Manager", "Booking, Agoda, Zalo OA", "Automation Du lịch"],
                    ["Marketing Agency", "n8n + multi-client", "Facebook, Google, Email, Social", "Automation Agency"],
                    ["Logistics", "n8n + API vận chuyển", "GHN, GHTK, J&T, Shopee Logistics", "Logistics Vận Chuyển"],
                    ["Startup B2B", "n8n + CRM", "CRM, Email, Slack/Telegram", "CRM Tự Động Startup"],
                  ]}
                />

                <p>
                  <strong>Nhận xét chung:</strong> Dù ở ngành nào, n8n đều đóng vai trò <em>hub trung tâm</em> kết nối
                  các hệ thống lại với nhau. Các công cụ Việt Nam (KiotViet, Sapo, Haravan, Zalo OA) đều có API
                  mở — n8n tích hợp được tất cả qua HTTP Request node.
                </p>

                <p>
                  Đọc chi tiết cho ngành của bạn:{" "}
                  <a href="/blog/dong-bo-shopee-misa">E-commerce: Shopee → MISA</a>,{" "}
                  <a href="/blog/tiktok-shop-automation">TikTok Shop</a>,{" "}
                  <a href="/blog/zalo-oa-fnb">F&B: Zalo OA</a>,{" "}
                  <a href="/blog/nhac-lich-zalo-oa-giao-duc">Giáo dục: Nhắc lịch</a>,{" "}
                  <a href="/blog/lead-facebook-ads-bds">BĐS: Lead Facebook</a>.
                </p>

                {/* ==================== SECTION 5: PHÂN LOẠI THEO NGÂN SÁCH ==================== */}
                <h2 id="phan-loai-ngan-sach"><span className="text-lg">💰</span> Phân Loại Theo Ngân Sách</h2>

                <p>
                  Ngân sách là yếu tố quyết định cho hầu hết SME Việt Nam. Dưới đây là 4 tier ngân sách
                  với khuyến nghị công cụ cụ thể cho từng mức.
                </p>

                <div className="not-prose my-8 space-y-4">
                  {[
                    {
                      tier: "Free — 0đ/tháng",
                      color: "bg-green-50 border-green-200",
                      titleColor: "text-green-700",
                      tools: "n8n Community (self-host), Google Apps Script, Airtable Automations (free tier), Notion Automations",
                      note: "Cần kiến thức kỹ thuật cơ bản để cài n8n. Chi phí VPS ~150-300K/tháng.",
                      best: "Startup, freelancer, doanh nghiệp 1-3 người",
                    },
                    {
                      tier: "Dưới 5 triệu/tháng",
                      color: "bg-blue-50 border-blue-200",
                      titleColor: "text-blue-700",
                      tools: "n8n self-host + VPS chất lượng, Make Core ($9), IFTTT Pro ($3.49), Pipedream Pro ($29)",
                      note: "Ngân sách đủ để thuê VPS tốt + domain. AutoFlow gói Starter: 8-15 triệu one-time setup.",
                      best: "SME 5-15 người, cần 5-10 workflow cơ bản",
                    },
                    {
                      tier: "5-20 triệu/tháng",
                      color: "bg-violet-50 border-violet-200",
                      titleColor: "text-violet-700",
                      tools: "n8n self-host + AutoFlow retainer, Make Pro ($99), Zapier Starter ($19.99 - rất hạn chế)",
                      note: "Đủ budget để thuê chuyên gia quản lý + phát triển workflow mới hàng tháng.",
                      best: "SME 15-50 người, cần automation phức tạp, multi-channel",
                    },
                    {
                      tier: "Trên 20 triệu/tháng",
                      color: "bg-amber-50 border-amber-200",
                      titleColor: "text-amber-700",
                      tools: "n8n Enterprise, Zapier Professional ($299), Power Automate, Workato",
                      note: "Enterprise features: SSO, audit logs, priority support. Xem xét n8n Enterprise cho best value.",
                      best: "Doanh nghiệp 50+ người, compliance requirements, multi-department",
                    },
                  ].map((t) => (
                    <div key={t.tier} className={`${t.color} border rounded-xl p-5`}>
                      <div className={`font-display font-bold text-sm ${t.titleColor} mb-2`}>
                        <span className="text-lg">📌</span> {t.tier}
                      </div>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p><strong>Công cụ:</strong> {t.tools}</p>
                        <p><strong>Lưu ý:</strong> {t.note}</p>
                        <p><strong>Phù hợp:</strong> {t.best}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <CalloutBox type="tip">
                  <strong>Mẹo tiết kiệm:</strong> Đa số SME Việt Nam (dưới 50 người) chỉ cần tier 1-2:
                  n8n self-host + VPS tốt. Tổng chi phí dưới 500.000đ/tháng cho automation không giới hạn.
                  So sánh: Zapier Professional = 7,5 triệu/tháng cho cùng khả năng.
                  Tính ROI cụ thể: <a href="/blog/roi-calculator-automation">ROI Calculator</a>.
                </CalloutBox>

                {/* ==================== SECTION 6: ECOSYSTEM VIỆT NAM ==================== */}
                <h2 id="ecosystem-vn"><span className="text-lg">🇻🇳</span> Ecosystem Tự Động Hóa Việt Nam</h2>

                <p>
                  Đây là yếu tố mà các bài review quốc tế <strong>không bao giờ đề cập</strong>: công cụ nào
                  tích hợp được với hệ sinh thái phần mềm Việt Nam? Dưới đây là bản đồ tích hợp thực tế
                  mà AutoFlow đã kiểm chứng.
                </p>

                <ComparisonTable
                  headers={["Công cụ VN", "n8n", "Zapier", "Make", "Power Automate"]}
                  highlightCol={1}
                  rows={[
                    ["KiotViet", "✅ REST API + Templates", "❌", "❌", "❌"],
                    ["Sapo", "✅ REST API + Templates", "❌", "❌", "❌"],
                    ["Haravan", "✅ REST API + Templates", "❌", "⚠️ Hạn chế", "❌"],
                    ["MISA", "✅ REST API", "❌", "❌", "❌"],
                    ["Zalo OA", "✅ REST API + Templates", "❌", "❌", "❌"],
                    ["GHN", "✅ REST API", "❌", "❌", "❌"],
                    ["GHTK", "✅ REST API", "❌", "❌", "❌"],
                    ["VNPay", "✅ Webhook", "❌", "❌", "❌"],
                    ["MoMo", "✅ Webhook", "❌", "❌", "❌"],
                    ["meInvoice (MISA)", "✅ REST API", "❌", "❌", "❌"],
                    ["Shopee VN", "✅ REST API", "⚠️ Shopee global", "⚠️ Shopee global", "❌"],
                    ["TikTok Shop VN", "✅ REST API", "❌", "❌", "❌"],
                    ["Lazada VN", "✅ REST API", "⚠️ Lazada global", "⚠️ Lazada global", "❌"],
                  ]}
                />

                <p>
                  <strong>Kết luận rõ ràng:</strong> n8n là nền tảng duy nhất tích hợp tốt với toàn bộ ecosystem
                  Việt Nam. Lý do đơn giản: n8n có HTTP Request node và Webhook trigger cho phép kết nối
                  bất kỳ API nào — kể cả những dịch vụ chưa có trên marketplace chính thức. AutoFlow đã xây
                  sẵn <a href="/blog/n8n-workflow-templates">templates cho tất cả tích hợp phía trên</a>.
                </p>

                <p>
                  Hướng dẫn kỹ thuật:{" "}
                  <a href="/blog/webhook-la-gi">Webhook Là Gì?</a>,{" "}
                  <a href="/blog/api-la-gi">API Là Gì?</a>,{" "}
                  <a href="/blog/google-sheets-n8n-automation">Google Sheets + n8n</a>,{" "}
                  <a href="/blog/hoa-don-dien-tu-tu-dong">Hóa đơn điện tử + MISA meInvoice</a>.
                </p>

                <CalloutBox type="info">
                  <strong>Tại sao Zapier/Make không hỗ trợ công cụ Việt Nam?</strong> Vì marketplace của họ yêu cầu
                  nhà cung cấp tự đăng ký integration. Các công ty Việt Nam (KiotViet, MISA, Sapo) chưa có incentive
                  để làm điều này. n8n giải quyết bằng HTTP Request node — bạn chỉ cần API docs là kết nối được.
                </CalloutBox>

                {/* ==================== SECTION 7: DECISION FRAMEWORK ==================== */}
                <h2 id="decision-framework"><span className="text-lg">🧭</span> Decision Framework: Chọn Công Cụ Trong 5 Phút</h2>

                <p>
                  Thay vì so sánh mãi, hãy trả lời 5 câu hỏi dưới đây để tìm công cụ phù hợp. Đây là decision tree
                  mà AutoFlow sử dụng khi tư vấn cho khách hàng mới.
                </p>

                <div className="not-prose my-8 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                  <h4 className="font-display font-bold text-lg text-slate-900 mb-6">
                    <span className="text-lg">🌳</span> Decision Tree — 5 Câu Hỏi
                  </h4>
                  <div className="space-y-5">
                    {[
                      {
                        n: "1",
                        q: "Bạn cần tích hợp công cụ Việt Nam (KiotViet, MISA, Zalo OA)?",
                        yes: "→ n8n (duy nhất hỗ trợ tốt)",
                        no: "→ Tiếp câu 2",
                      },
                      {
                        n: "2",
                        q: "Ngân sách automation dưới 5 triệu/tháng?",
                        yes: "→ n8n self-host hoặc Make Core",
                        no: "→ Tiếp câu 3",
                      },
                      {
                        n: "3",
                        q: "Doanh nghiệp dùng Microsoft 365 (Outlook, Teams, SharePoint)?",
                        yes: "→ Power Automate + n8n",
                        no: "→ Tiếp câu 4",
                      },
                      {
                        n: "4",
                        q: "Cần AI Agent và xử lý thông minh?",
                        yes: "→ n8n (70+ AI nodes, LangChain native)",
                        no: "→ Tiếp câu 5",
                      },
                      {
                        n: "5",
                        q: "Team không biết code và chỉ cần kết nối 2-3 app quốc tế?",
                        yes: "→ Zapier (đơn giản nhất) hoặc Make (rẻ hơn)",
                        no: "→ n8n self-host (linh hoạt nhất, rẻ nhất)",
                      },
                    ].map((step) => (
                      <div key={step.n} className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                          {step.n}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 text-sm">{step.q}</div>
                          <div className="text-sm text-slate-500 mt-1">
                            <span className="text-green-600 font-medium">Có:</span> {step.yes}
                          </div>
                          <div className="text-sm text-slate-500">
                            <span className="text-slate-400 font-medium">Không:</span> {step.no}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  <strong>Kết quả phổ biến nhất:</strong> 80%+ SME Việt Nam đi tới câu trả lời &ldquo;n8n self-host&rdquo;
                  ngay từ câu hỏi 1. Đơn giản vì hầu hết đều cần tích hợp ít nhất 1 công cụ Việt Nam
                  (Zalo OA, KiotViet, MISA, hoặc sàn TMĐT Việt).
                </p>

                <CalloutBox type="success">
                  <strong>Bước tiếp theo:</strong> Đã xác định công cụ? Xem{" "}
                  <a href="/blog/lo-trinh-tu-dong-hoa-sme">Lộ Trình Tự Động Hóa 5 Giai Đoạn</a> để biết triển khai
                  như thế nào, hoặc <a href="/blog/tu-lam-hay-thue">Tự Làm Hay Thuê Chuyên Gia?</a> để quyết định
                  cách triển khai. Muốn bắt đầu ngay? <a href="/audit">Đặt audit miễn phí 30 phút</a>.
                </CalloutBox>

                <div className="not-prose my-8 bg-slate-50 rounded-2xl p-6 md:p-8">
                  <h4 className="font-display font-bold text-lg text-slate-900 mb-4">
                    Tóm tắt: Công cụ nào cho ai?
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { tool: "n8n self-host", who: "SME Việt Nam, startup, cần tích hợp VN, ngân sách hạn hẹp, muốn sở hữu dữ liệu", icon: "⚡" },
                      { tool: "Zapier", who: "Doanh nghiệp quốc tế, team non-tech, chỉ kết nối app phổ biến, không quan tâm giá", icon: "🔗" },
                      { tool: "Make", who: "Freelancer, agency, thích giao diện đẹp, ngân sách trung bình, workflow visual", icon: "🎨" },
                      { tool: "Power Automate", who: "Doanh nghiệp Microsoft ecosystem, compliance, enterprise", icon: "🏢" },
                      { tool: "KiotViet/Sapo built-in", who: "Cửa hàng nhỏ, chỉ cần automation đơn giản trong nội bộ app", icon: "🏪" },
                      { tool: "AI Agent (via n8n)", who: "SME muốn nâng cấp từ automation sang AI: chatbot, nội dung, phân loại", icon: "🧠" },
                    ].map((item) => (
                      <div key={item.tool} className="flex gap-3 items-start">
                        <span className="text-lg shrink-0">{item.icon}</span>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">{item.tool}</div>
                          <div className="text-xs text-slate-500">{item.who}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  Xem thêm bài viết liên quan:{" "}
                  <a href="/blog/ai-agent-n8n-sme">AI Agent + n8n cho SME</a>,{" "}
                  <a href="/blog/5-dau-hieu-can-automation">5 Dấu Hiệu Cần Tự Động Hóa</a>,{" "}
                  <a href="/blog/sme-chuyen-doi-so-2026">80% SME Tìm Giải Pháp Nhưng Không Biết Bắt Đầu</a>.
                </p>

                {/* ==================== FAQ ==================== */}
                <BlogInlineCTA category="So sánh" slug="so-sanh-cong-cu-automation-2026" />

                <h2 id="faq">Câu Hỏi Thường Gặp</h2>
                <FAQ items={faqItems} />

              </div>

              {/* Footer */}
              <BlogFooter
                title="Toàn Cảnh Công Cụ Tự Động Hóa Tại Việt Nam 2026: n8n, Zapier, Make & 20+ Nền Tảng"
                slug="so-sanh-cong-cu-automation-2026"
                date="2026-04-02"
              />
            </div>

            {/* TOC Sidebar */}
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
