import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalloutBox from "@/components/blog/CalloutBox";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import TableOfContents from "@/components/blog/TableOfContents";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";
import BlogFooter from "@/components/blog/BlogFooter";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";
import AnimatedCounter from "@/components/blog/AnimatedCounter";
import StageTimeline from "@/components/blog/StageTimeline";
import ROICalculator from "@/components/blog/ROICalculator";
import MaturityQuiz from "@/components/blog/MaturityQuiz";
import JsonLd from "@/components/JsonLd";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";

export const metadata: Metadata = {
  title: "Lộ Trình Tự Động Hóa Cho SME Việt Nam 2026: Từ Thủ Công Đến AI Agent",
  description:
    "Hướng dẫn toàn diện 5 giai đoạn tự động hóa quy trình cho doanh nghiệp nhỏ và vừa Việt Nam. Framework maturity model, ROI calculator, công cụ đánh giá, và lộ trình triển khai thực tế bằng n8n.",
  keywords: [
    "lộ trình tự động hóa",
    "tự động hóa quy trình SME",
    "automation cho doanh nghiệp nhỏ",
    "n8n automation Việt Nam",
    "chuyển đổi số SME 2026",
    "automation maturity model",
    "ROI tự động hóa",
    "AI agent doanh nghiệp",
  ],
  alternates: { canonical: "https://autoflowvn.net/blog/lo-trinh-tu-dong-hoa-sme" },
  openGraph: {
    title: "Lộ Trình Tự Động Hóa Cho SME Việt Nam 2026",
    description: "Framework 5 giai đoạn + ROI calculator + đánh giá maturity miễn phí.",
    url: "https://autoflowvn.net/blog/lo-trinh-tu-dong-hoa-sme",
    type: "article",
  },
};

const tocItems = [
  { id: "tai-sao", text: "Tại sao SME cần lộ trình?", level: 2 },
  { id: "framework", text: "Framework 5 Giai Đoạn", level: 2 },
  { id: "giai-doan-1", text: "GĐ 1: Thủ Công", level: 3 },
  { id: "giai-doan-2", text: "GĐ 2: Automation Cơ Bản", level: 3 },
  { id: "giai-doan-3", text: "GĐ 3: Hệ Thống Kết Nối", level: 3 },
  { id: "giai-doan-4", text: "GĐ 4: Automation Thông Minh", level: 3 },
  { id: "giai-doan-5", text: "GĐ 5: AI Agent Tự Vận Hành", level: 3 },
  { id: "roi-calculator", text: "ROI Calculator", level: 2 },
  { id: "danh-gia", text: "Đánh giá Maturity", level: 2 },
  { id: "cong-cu", text: "Công cụ & Ecosystem Việt Nam", level: 2 },
  { id: "bat-dau", text: "Bắt đầu từ đâu?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "SME nhỏ (dưới 10 người) có cần automation không?",
    a: "Hoàn toàn có. SME nhỏ thường lãng phí 15-25 giờ/tuần cho việc lặp lại. Với chi phí từ 8-15 triệu, bạn có thể tự động hóa các quy trình cốt lõi và tiết kiệm tương đương 1 nhân viên full-time. Bắt đầu từ Giai đoạn 2 với 2-3 workflow đơn giản nhất.",
  },
  {
    q: "Mất bao lâu để đi từ Giai đoạn 1 đến Giai đoạn 3?",
    a: "Trung bình 2-4 tháng nếu có chuyên gia hỗ trợ, 4-8 tháng nếu tự triển khai. Giai đoạn 2 (automation cơ bản) thường hoàn thành trong 1-2 tuần. Giai đoạn 3 (kết nối hệ thống) cần 3-4 tuần thêm. Quan trọng nhất là bắt đầu — mỗi workflow mới đều tạo ra giá trị ngay lập tức.",
  },
  {
    q: "Chi phí triển khai automation cho SME là bao nhiêu?",
    a: "Giai đoạn 2 (cơ bản): 8-15 triệu, 1-2 tuần. Giai đoạn 3 (kết nối): 20-35 triệu thêm, 3-4 tuần. Giai đoạn 4 (thông minh): 50-80 triệu, 6-8 tuần. Payback trung bình: 3-6 tháng. ROI năm đầu thường 200-500%. Dùng ROI Calculator ở trên để tính cho trường hợp cụ thể.",
  },
  {
    q: "n8n có phù hợp cho SME không biết code?",
    a: "Có. n8n có giao diện kéo-thả trực quan. Với gói Starter, AutoFlow triển khai toàn bộ — bạn chỉ cần mô tả quy trình hiện tại. Đội ngũ của bạn chỉ cần biết dùng (không cần biết code). Tuy nhiên nếu muốn tự triển khai, bạn cần khoảng 1-2 tuần để học cơ bản.",
  },
  {
    q: "Làm sao biết nên ưu tiên tự động hóa quy trình nào trước?",
    a: "Ưu tiên theo công thức: (Tần suất × Thời gian × Số người) ÷ Độ phức tạp. Quy trình lặp lại hàng ngày, tốn nhiều thời gian, liên quan nhiều người, và logic đơn giản → tự động trước. Ví dụ điển hình: đồng bộ đơn hàng, nhắc lịch khách hàng, báo cáo tự động.",
  },
  {
    q: "Dữ liệu có an toàn khi dùng automation?",
    a: "Với n8n self-host (lựa chọn AutoFlow khuyến nghị), toàn bộ dữ liệu nằm trên server của bạn tại Việt Nam — không gửi ra nước ngoài. AutoFlow sử dụng VPS tại TP.HCM, mã hóa đầu cuối, và tuân thủ quy định bảo mật dữ liệu Việt Nam.",
  },
  {
    q: "AI Agent khác gì automation thông thường?",
    a: "Automation thông thường chạy theo luồng cố định (if-then). AI Agent có khả năng ra quyết định, xử lý tình huống mới, và tự điều chỉnh. Ví dụ: automation gửi tin nhắn giống nhau cho tất cả; AI Agent phân tích từng khách hàng và soạn nội dung cá nhân hóa. n8n 2.0 hỗ trợ native AI Agent với 70+ nodes.",
  },
  {
    q: "Có cần dừng hoạt động kinh doanh để triển khai automation?",
    a: "Không. AutoFlow triển khai song song — hệ thống cũ vẫn chạy bình thường. Mỗi workflow được test kỹ trước khi bật live. Chuyển đổi diễn ra từng bước, không gián đoạn. Đây là ưu điểm lớn của cách tiếp cận theo giai đoạn thay vì thay đổi cả hệ thống một lúc.",
  },
  {
    q: "AutoFlow hỗ trợ những ngành nào?",
    a: "Hiện tại AutoFlow phục vụ chuyên sâu: E-commerce (Shopee, TikTok Shop, KiotViet, Haravan, Sapo), F&B, Giáo dục, Bất động sản, Y tế (phòng khám), Salon & Spa, Du lịch & Khách sạn, và Logistics. Mỗi ngành có bộ workflow template riêng, đã được kiểm chứng với khách hàng thực tế.",
  },
  {
    q: "Retainer hàng tháng sau triển khai có bắt buộc không?",
    a: "Không bắt buộc. Sau khi triển khai xong, hệ thống tự chạy. Retainer (8-15 triệu/tháng) dành cho doanh nghiệp muốn hỗ trợ liên tục: monitor, fix lỗi trong 24h, thêm workflow mới mỗi tháng. Tỉ lệ khách chọn retainer: 70%+ vì muốn yên tâm và phát triển liên tục.",
  },
];

export default function LoTrinhTuDongHoaSME() {
  return (
    <>
      <BreadcrumbJsonLd slug="lo-trinh-tu-dong-hoa-sme" title="Lộ Trình Tự Động Hóa Cho SME Việt Nam 2026" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Lộ Trình Tự Động Hóa 5 Giai Đoạn Cho SME Việt Nam",
          description: "Framework 5 giai đoạn giúp doanh nghiệp nhỏ và vừa tự động hóa từ thủ công đến AI Agent.",
          totalTime: "P6M",
          estimatedCost: { "@type": "MonetaryAmount", currency: "VND", value: "15000000" },
          step: [
            { "@type": "HowToStep", position: 1, name: "Giai đoạn 1: Thủ Công", text: "Đánh giá quy trình hiện tại, xác định pain points, đo baseline." },
            { "@type": "HowToStep", position: 2, name: "Giai đoạn 2: Automation Cơ Bản", text: "Tự động hóa 2-3 workflow lặp lại nhiều nhất bằng n8n." },
            { "@type": "HowToStep", position: 3, name: "Giai đoạn 3: Hệ Thống Kết Nối", text: "Kết nối CRM, sàn TMĐT, kế toán, và Zalo OA vào một luồng thống nhất." },
            { "@type": "HowToStep", position: 4, name: "Giai đoạn 4: Automation Thông Minh", text: "Thêm logic phân nhánh, scoring, và workflow xử lý ngoại lệ." },
            { "@type": "HowToStep", position: 5, name: "Giai đoạn 5: AI Agent Tự Vận Hành", text: "Tích hợp AI Agent để tự ra quyết định và xử lý tình huống mới." },
          ],
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
              <span className="text-slate-600 truncate max-w-[300px]">Lộ trình tự động hóa</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">Pillar</span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">Strategy</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">n8n</span>
              <span className="text-xs text-slate-500">25 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Lộ Trình Tự Động Hóa Cho SME Việt Nam 2026:{" "}
              <span className="gradient-text">Từ Thủ Công Đến AI Agent</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              97% doanh nghiệp Việt Nam là SME, nhưng chỉ 23% đã chuyển đổi số thực sự. Bài viết này
              cung cấp framework 5 giai đoạn — từ thủ công hoàn toàn đến AI Agent tự vận hành — cùng
              công cụ đánh giá miễn phí và ROI calculator để bạn biết chính xác nên bắt đầu từ đâu.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Key stats */}
                <AnimatedCounter stats={[
                  { value: 97, suffix: "%", label: "DN Việt Nam là SME", sub: "Bộ KH&ĐT 2025", color: "text-primary" },
                  { value: 23, suffix: "%", label: "đã chuyển đổi số", sub: "chỉ 1 trong 4 doanh nghiệp" },
                  { value: 40, suffix: "%", label: "giảm chi phí", sub: "khi áp dụng automation", color: "text-emerald-600" },
                  { value: 544, suffix: "%", label: "ROI trung bình", sub: "theo nghiên cứu Nucleus", color: "text-violet-600" },
                ]} />

                {/* ==================== SECTION 1 ==================== */}
                <h2 id="tai-sao">Tại Sao SME Việt Nam Cần Lộ Trình Tự Động Hóa?</h2>

                <p>
                  Hầu hết SME khi nghe &ldquo;tự động hóa&rdquo; đều nghĩ đến robot hay phần mềm phức tạp. Thực tế, tự động hóa
                  quy trình (workflow automation) đơn giản hơn nhiều: <strong>để máy tính làm những việc lặp đi lặp lại
                  thay cho con người</strong>.
                </p>

                <p>
                  Vấn đề là nhiều doanh nghiệp nhảy thẳng vào mua phần mềm mà không có lộ trình. Kết quả:
                  tiền mất, nhân viên không biết dùng, hệ thống chạy rời rạc. <strong>Tự động hóa không phải
                  là một dự án — mà là một hành trình</strong>.
                </p>

                <BeforeAfter
                  before={{ title: "Không có lộ trình", items: [
                    "Nhảy thẳng vào mua CRM đắt tiền → không ai dùng",
                    "Tự động hóa một quy trình rồi dừng",
                    "Không đo baseline → không biết hiệu quả",
                    "Mỗi phòng ban dùng tool riêng, không kết nối",
                    "Chờ đến khi \"sẵn sàng\" mới bắt đầu",
                  ]}}
                  after={{ title: "Có lộ trình rõ ràng", items: [
                    "Bắt đầu nhỏ → scale dần theo lộ trình rõ ràng",
                    "Xây dựng hệ sinh thái automation kết nối",
                    "Đo trước, triển khai, đo sau — có data thuyết phục",
                    "Tất cả hệ thống nói chuyện với nhau qua n8n",
                    "Bắt đầu ngay từ những việc đơn giản nhất",
                  ]}}
                />

                <CalloutBox type="tip">
                  <strong>Con số quan trọng:</strong> SME áp dụng AI và automation tăng năng suất 25% và giảm chi phí
                  vận hành 20-40%. Payback trung bình: 3-6 tháng. Xem thêm:{" "}
                  <a href="/blog/roi-calculator-automation">ROI Calculator chi tiết</a>.
                </CalloutBox>

                {/* ==================== FRAMEWORK ==================== */}
                <h2 id="framework">Framework 5 Giai Đoạn Automation Maturity</h2>

                <p>
                  Dựa trên kinh nghiệm triển khai cho hàng chục SME Việt Nam, AutoFlow đã phát triển
                  framework <strong>5 Giai Đoạn Automation Maturity</strong> — giúp bạn xác định vị trí
                  hiện tại và lộ trình tiến lên.
                </p>

                <StageTimeline stages={[
                  {
                    number: 1,
                    title: "Thủ Công",
                    subtitle: "Excel, giấy, copy-paste",
                    color: "#EF4444",
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
                    items: [
                      "Quản lý khách hàng bằng sổ/Excel",
                      "Nhập đơn hàng thủ công giữa các hệ thống",
                      "Gọi/nhắn khách hàng khi nhớ",
                      "Báo cáo cuối tháng mất 2-3 ngày",
                      "Không có backup tự động",
                    ],
                    tools: ["Excel", "Sổ tay", "Zalo cá nhân"],
                    timeframe: "Hiện tại",
                  },
                  {
                    number: 2,
                    title: "Automation Cơ Bản",
                    subtitle: "2-3 workflow đơn giản",
                    color: "#F59E0B",
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                    items: [
                      "Đồng bộ đơn hàng tự động (Shopee → MISA)",
                      "Nhắc lịch khách hàng qua Zalo OA",
                      "Thông báo đơn mới qua Telegram",
                      "Google Sheet tự cập nhật từ nhiều nguồn",
                      "Workflow đơn tuyến (trigger → action)",
                    ],
                    tools: ["n8n", "Zalo OA", "Telegram", "Google Sheets"],
                    timeframe: "1-2 tuần",
                  },
                  {
                    number: 3,
                    title: "Hệ Thống Kết Nối",
                    subtitle: "CRM + sàn + kế toán liên thông",
                    color: "#3B82F6",
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
                    items: [
                      "CRM kết nối tự động với sàn TMĐT + MISA",
                      "Workflow đa nhánh có logic phân loại",
                      "Báo cáo doanh thu tự động mỗi sáng",
                      "Email marketing drip tự động",
                      "Sync đa kênh: online + offline + Zalo",
                    ],
                    tools: ["n8n", "KiotViet/Sapo", "MISA", "Zalo OA", "Resend"],
                    timeframe: "3-4 tuần",
                  },
                  {
                    number: 4,
                    title: "Automation Thông Minh",
                    subtitle: "Logic phức tạp, scoring, alerts",
                    color: "#8B5CF6",
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                    items: [
                      "Lead scoring tự động dựa trên hành vi",
                      "Escalation rules: lead nóng → nhắc sales",
                      "Error handling: tự retry, alert khi fail",
                      "Workflow xử lý ngoại lệ (hoàn tiền, đổi trả)",
                      "Dashboard real-time cho management",
                    ],
                    tools: ["n8n", "Supabase", "Telegram Bot", "Custom Dashboard"],
                    timeframe: "6-8 tuần",
                  },
                  {
                    number: 5,
                    title: "AI Agent Tự Vận Hành",
                    subtitle: "AI ra quyết định, xử lý mới",
                    color: "#10B981",
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                    items: [
                      "AI chatbot tư vấn khách 24/7 qua Zalo",
                      "AI phân tích review & sentiment tự động",
                      "AI soạn nội dung cá nhân hóa per customer",
                      "Multi-agent: AI + human handoff thông minh",
                      "Predictive analytics: dự đoán churn, upsell",
                    ],
                    tools: ["n8n 2.0", "Claude/GPT", "LangChain", "Vector DB"],
                    timeframe: "8-12 tuần",
                  },
                ]} />

                {/* ==================== STAGE DETAILS ==================== */}
                <h3 id="giai-doan-1">Giai Đoạn 1: Thủ Công — &ldquo;Mọi Thứ Đang Chạy Bằng Tay&rdquo;</h3>

                <p>
                  Đây là điểm xuất phát của 70% SME Việt Nam. Dữ liệu nằm rải rác ở Excel, sổ tay, Zalo cá nhân.
                  Mỗi lần cần báo cáo phải mở 5-6 file tổng hợp. Nhân viên mới mất 2-3 tuần để hiểu quy trình
                  vì không có gì được ghi lại.
                </p>

                <p>
                  <strong>Bạn ở giai đoạn này nếu:</strong> Khi nhân viên nghỉ phép, không ai biết khách hàng đang
                  ở bước nào. Báo cáo doanh thu cuối tháng cần 2-3 ngày tổng hợp. Bỏ lỡ lead vì quên follow up.
                </p>

                <CalloutBox type="info">
                  <strong>Hành động ngay:</strong> Ghi lại 5 quy trình tốn thời gian nhất. Đo thời gian thực tế cho mỗi quy trình.
                  Đây sẽ là baseline để đánh giá hiệu quả sau khi automation. Xem bài:{" "}
                  <a href="/blog/5-dau-hieu-can-automation">5 Dấu Hiệu Cần Tự Động Hóa Ngay</a>.
                </CalloutBox>

                <h3 id="giai-doan-2">Giai Đoạn 2: Automation Cơ Bản — &ldquo;Quick Wins&rdquo;</h3>

                <p>
                  Giai đoạn này tập trung vào <strong>2-3 workflow có ROI cao nhất</strong>. Không cần phức tạp —
                  chỉ cần kết nối những gì đang tốn thời gian nhiều nhất.
                </p>

                <WorkflowFlow
                  title="Ví dụ: Đồng bộ đơn hàng Shopee → MISA"
                  subtitle="Tiết kiệm 3 giờ/ngày cho nhân viên nhập đơn"
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">⚡</span>, label: "Đơn mới trên Shopee", sub: "Webhook real-time" },
                    { icon: <span className="text-lg">🔄</span>, label: "n8n xử lý dữ liệu", sub: "Map fields, validate" },
                    { icon: <span className="text-lg">📤</span>, label: "Tạo hóa đơn MISA", sub: "API tự động" },
                    { icon: <span className="text-lg">✅</span>, label: "Báo Telegram", sub: "Thông báo team" },
                  ]}
                />

                <p>
                  <strong>Kết quả điển hình của giai đoạn này:</strong> Tiết kiệm 10-15 giờ/tuần, giảm 90% lỗi nhập liệu,
                  nhân viên tập trung vào việc có giá trị hơn. Chi phí: 8-15 triệu, hoàn vốn trong 4-6 tuần.
                </p>

                <p>
                  Đọc thêm các hướng dẫn cụ thể:{" "}
                  <a href="/blog/dong-bo-shopee-misa">Đồng bộ Shopee → MISA</a>,{" "}
                  <a href="/blog/nhac-lich-zalo-oa-giao-duc">Nhắc lịch qua Zalo OA</a>,{" "}
                  <a href="/blog/telegram-bot-n8n">Telegram Bot thông báo</a>,{" "}
                  <a href="/blog/google-sheets-n8n-automation">Google Sheets automation</a>.
                </p>

                <h3 id="giai-doan-3">Giai Đoạn 3: Hệ Thống Kết Nối — &ldquo;Mọi Thứ Nói Chuyện Với Nhau&rdquo;</h3>

                <p>
                  Đây là bước nhảy vọt. Thay vì mỗi workflow chạy riêng lẻ, bạn xây dựng <strong>một hệ sinh thái
                  automation kết nối</strong>: CRM biết đơn hàng, kế toán biết doanh thu, marketing biết hành vi khách hàng.
                </p>

                <ComparisonTable
                  headers={["Tiêu chí", "Giai đoạn 2", "Giai đoạn 3"]}
                  rows={[
                    ["Số workflow", "2-3 workflow đơn lẻ", "8-15 workflow kết nối"],
                    ["Data flow", "Một chiều (A → B)", "Đa chiều (A ↔ B ↔ C)"],
                    ["Báo cáo", "Google Sheet thủ công", "Dashboard tự động mỗi sáng"],
                    ["Xử lý ngoại lệ", "Gặp lỗi → dừng", "Alert + retry tự động"],
                    ["Đa kênh", "1-2 kênh", "Tất cả kênh đồng bộ"],
                  ]}
                  highlightCol={2}
                />

                <p>
                  Bài viết chi tiết cho từng ngành:{" "}
                  <a href="/blog/tiktok-shop-automation">TikTok Shop</a>,{" "}
                  <a href="/blog/kiotviet-n8n-tich-hop">KiotViet</a>,{" "}
                  <a href="/blog/haravan-n8n-automation">Haravan</a>,{" "}
                  <a href="/blog/sapo-n8n-da-kenh">Sapo đa kênh</a>,{" "}
                  <a href="/blog/hoa-don-dien-tu-tu-dong">Hóa đơn điện tử</a>,{" "}
                  <a href="/blog/email-marketing-automation-n8n">Email marketing</a>,{" "}
                  <a href="/blog/bao-cao-doanh-thu-tu-dong">Báo cáo doanh thu</a>.
                </p>

                <h3 id="giai-doan-4">Giai Đoạn 4: Automation Thông Minh — &ldquo;Hệ Thống Tự Ra Quyết Định&rdquo;</h3>

                <p>
                  Ở giai đoạn này, automation không chỉ <em>chạy</em> mà còn <em>quyết định</em>. Lead nào nóng nhất?
                  Email nào cần gửi trước? Đơn nào có rủi ro hoàn? Hệ thống tự xếp hạng, phân loại, và hành động.
                </p>

                <WorkflowFlow
                  title="Ví dụ: Lead Scoring & Routing tự động"
                  subtitle="Lead nóng → sales gọi trong 5 phút, lead lạnh → nurture email"
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">⚡</span>, label: "Lead mới từ FB Ads", sub: "Webhook" },
                    { icon: <span className="text-lg">🔄</span>, label: "Scoring engine", sub: "Tính điểm 0-100" },
                    { icon: <span className="text-lg">📤</span>, label: "Hot → Sales Telegram", sub: "Phản hồi 5 phút" },
                    { icon: <span className="text-lg">✅</span>, label: "Cold → Email nurture", sub: "Drip 7 ngày" },
                  ]}
                />

                <p>
                  Đọc thêm:{" "}
                  <a href="/blog/crm-tu-dong-startup">CRM tự động cho startup</a>,{" "}
                  <a href="/blog/lead-facebook-ads-bds">Lead Facebook Ads BĐS</a>,{" "}
                  <a href="/blog/n8n-error-handling">Error handling chuyên nghiệp</a>,{" "}
                  <a href="/blog/notion-n8n-crm">Notion + n8n CRM</a>.
                </p>

                <h3 id="giai-doan-5">Giai Đoạn 5: AI Agent Tự Vận Hành — &ldquo;Tương Lai Đã Đến&rdquo;</h3>

                <p>
                  Với n8n 2.0 ra mắt cuối 2025, AI Agent không còn là khái niệm xa vời. <strong>70+ AI nodes</strong>,
                  hỗ trợ LangChain, multi-agent orchestration — SME Việt Nam hoàn toàn có thể xây dựng AI assistant
                  cho riêng mình.
                </p>

                <StatCard stats={[
                  { value: "70+", label: "AI nodes trong n8n 2.0", color: "text-emerald-600" },
                  { value: "40%", label: "apps sẽ có AI Agent đến 2028", sub: "Dự báo Gartner" },
                  { value: "24/7", label: "AI chatbot trả lời khách", sub: "không cần nhân viên trực" },
                  { value: "3x", label: "tăng conversion", sub: "với cá nhân hóa AI" },
                ]} />

                <p>
                  Đọc thêm:{" "}
                  <a href="/blog/ai-agent-n8n-sme">AI Agent + n8n cho SME</a>,{" "}
                  <a href="/blog/tao-noi-dung-ai-n8n">Tạo nội dung bằng AI</a>,{" "}
                  <a href="/blog/chatbot-zalo-oa-n8n">Chatbot Zalo OA</a>.
                </p>

                <CalloutBox type="warning">
                  <strong>Đừng nhảy cóc!</strong> Nhiều SME muốn chạy thẳng lên AI Agent mà chưa có nền tảng data và workflow cơ bản.
                  AI Agent hiệu quả nhất khi xây trên nền giai đoạn 3-4 vững chắc. Bắt đầu từ giai đoạn 2, scale dần.
                </CalloutBox>

                {/* ==================== ROI CALCULATOR ==================== */}
                <h2 id="roi-calculator">Tính ROI Cho Doanh Nghiệp Bạn</h2>

                <p>
                  Điều chỉnh các thông số bên dưới để xem bạn có thể tiết kiệm bao nhiêu. Số liệu được tính
                  dựa trên mức tiết kiệm 85% thời gian thủ công — con số thực tế từ khách hàng AutoFlow.
                </p>

                <ROICalculator />

                <p>
                  Muốn tính chi tiết hơn cho ngành của bạn? Xem{" "}
                  <a href="/blog/roi-calculator-automation">ROI Calculator chuyên sâu</a>{" "}
                  hoặc <a href="/audit">đặt audit miễn phí 30 phút</a> để có báo cáo cá nhân hóa.
                </p>

                <BlogInlineCTA category="Pillar" slug="lo-trinh-tu-dong-hoa-sme" variant="compact" />

                {/* ==================== MATURITY QUIZ ==================== */}
                <h2 id="danh-gia">Đánh Giá: Doanh Nghiệp Bạn Ở Giai Đoạn Nào?</h2>

                <p>
                  Trả lời 5 câu hỏi dưới đây để biết doanh nghiệp bạn đang ở giai đoạn nào trong lộ trình
                  automation — và nhận gợi ý bước tiếp theo.
                </p>

                <MaturityQuiz />

                {/* ==================== TOOLS ==================== */}
                <h2 id="cong-cu">Công Cụ & Ecosystem Tự Động Hóa Tại Việt Nam</h2>

                <p>
                  Một trong những ưu thế lớn nhất của n8n: <strong>tích hợp được với hầu hết công cụ
                  Việt Nam phổ biến</strong>. Dưới đây là bản đồ ecosystem mà AutoFlow đã triển khai thành công:
                </p>

                <ComparisonTable
                  headers={["Danh mục", "Công cụ phổ biến", "Giai đoạn nên tích hợp"]}
                  rows={[
                    ["Sàn TMĐT", "Shopee, TikTok Shop, Lazada", "GĐ 2-3"],
                    ["POS / CRM", "KiotViet, Sapo, Haravan", "GĐ 2-3"],
                    ["Kế toán", "MISA, Fast, meInvoice", "GĐ 3"],
                    ["Messaging", "Zalo OA, Telegram, WhatsApp", "GĐ 2"],
                    ["Email", "Resend, Mailchimp, SendGrid", "GĐ 3"],
                    ["Database", "Google Sheets, Supabase, MySQL", "GĐ 2-4"],
                    ["Marketing", "Facebook Ads, Google Ads", "GĐ 3-4"],
                    ["AI / LLM", "Claude, GPT, Gemini via n8n", "GĐ 5"],
                    ["Vận chuyển", "GHN, GHTK, J&T Express", "GĐ 3"],
                  ]}
                />

                <p>
                  Xem hướng dẫn tích hợp chi tiết:{" "}
                  <a href="/blog/n8n-la-gi">n8n là gì? Hướng dẫn toàn diện</a>,{" "}
                  <a href="/blog/webhook-la-gi">Webhook là gì?</a>,{" "}
                  <a href="/blog/api-la-gi">API là gì?</a>,{" "}
                  <a href="/blog/n8n-vs-zapier">n8n vs Zapier</a>,{" "}
                  <a href="/blog/n8n-workflow-templates">10 workflow templates miễn phí</a>.
                </p>

                {/* ==================== START ==================== */}
                <h2 id="bat-dau">Bắt Đầu Từ Đâu?</h2>

                <p>
                  Dù bạn ở giai đoạn nào, công thức luôn là: <strong>Đánh giá → Chọn quick win → Triển khai → Đo lường → Mở rộng</strong>.
                </p>

                <div className="not-prose my-8 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                  <h4 className="font-display font-bold text-lg text-slate-900 mb-4">3 bước đầu tiên ngay hôm nay:</h4>
                  <div className="space-y-4">
                    {[
                      { n: "1", title: "Làm bài đánh giá ở trên", desc: "Biết chính xác doanh nghiệp bạn ở giai đoạn nào." },
                      { n: "2", title: "Liệt kê 5 quy trình tốn thời gian nhất", desc: "Đo thời gian thực tế cho mỗi quy trình. Đây là baseline của bạn." },
                      { n: "3", title: "Đặt audit miễn phí 30 phút", desc: "AutoFlow phân tích quy trình và đưa ra lộ trình cụ thể, gói giá phù hợp." },
                    ].map((step) => (
                      <div key={step.n} className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                          {step.n}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">{step.title}</div>
                          <div className="text-sm text-slate-500">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href="/audit"
                      className="flex-1 text-center px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
                    >
                      Đặt Audit Miễn Phí 30 Phút →
                    </a>
                    <a
                      href="/quiz"
                      className="flex-1 text-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                    >
                      Làm Quiz Đánh Giá Chi Tiết Hơn
                    </a>
                  </div>
                </div>

                <p>
                  Xem thêm:{" "}
                  <a href="/blog/tu-lam-hay-thue">Tự làm hay thuê chuyên gia?</a>,{" "}
                  <a href="/blog/sme-chuyen-doi-so-2026">80% SME tìm giải pháp nhưng không biết bắt đầu</a>,{" "}
                  <a href="/blog/bao-mat-data-automation">Bảo mật data khi dùng automation</a>.
                </p>

                {/* ==================== FAQ ==================== */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>
                <FAQ items={faqItems} />

              </div>

              {/* Footer */}
              <BlogFooter
                title="Lộ Trình Tự Động Hóa Cho SME Việt Nam 2026: Từ Thủ Công Đến AI Agent"
                slug="lo-trinh-tu-dong-hoa-sme"
                date="2026-04-02"
              />
            </div>

            {/* TOC Sidebar */}
            <TableOfContents items={tocItems} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
