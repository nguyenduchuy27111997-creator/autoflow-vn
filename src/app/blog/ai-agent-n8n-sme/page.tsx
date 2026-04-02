import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import TableOfContents from "@/components/blog/TableOfContents";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import BeforeAfter from "@/components/blog/BeforeAfter";
import FAQ from "@/components/blog/FAQ";
import BlogFooter from "@/components/blog/BlogFooter";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "AI Agent + n8n: Tự Động Hóa Thông Minh Cho SME Việt Nam 2026",
  description:
    "Gartner dự báo 40% ứng dụng doanh nghiệp sẽ tích hợp AI agent vào 2026. Khám phá cách SME Việt Nam dùng n8n + AI agent để tự động hóa chăm sóc khách hàng, xử lý leads, quản lý kho và hơn thế nữa.",
  keywords: [
    "ai agent n8n",
    "ai automation vietnam 2026",
    "n8n ai agent",
    "tự động hóa ai việt nam",
    "ai agent sme",
    "n8n langchain vietnam",
    "workflow automation ai",
  ],
};

const tocItems = [
  { id: "ai-agent-la-gi", text: "AI Agent là gì?", level: 2 },
  { id: "thi-truong", text: "Thị trường AI Việt Nam 2026", level: 2 },
  { id: "use-cases", text: "5 use case thực tế cho SME", level: 2 },
  { id: "uc-1", text: "1. Bot hỗ trợ khách hàng 24/7", level: 3 },
  { id: "uc-2", text: "2. Phân loại & chăm sóc leads", level: 3 },
  { id: "uc-3", text: "3. Trợ lý email & lịch làm việc", level: 3 },
  { id: "uc-4", text: "4. Giám sát tồn kho thông minh", level: 3 },
  { id: "uc-5", text: "5. Xử lý tài liệu & hợp đồng", level: 3 },
  { id: "n8n-ai", text: "Năng lực AI của n8n", level: 2 },
  { id: "so-sanh", text: "Automation truyền thống vs AI Agent", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "AI Agent khác gì so với chatbot thông thường?",
    a: "Chatbot thông thường chỉ trả lời theo kịch bản cố định — hỏi câu A thì trả lời B. AI Agent có khả năng suy luận, lên kế hoạch và thực hiện nhiều bước liên tiếp để đạt mục tiêu. Ví dụ: thay vì chỉ trả lời 'giờ mở cửa là 9h', AI Agent có thể kiểm tra lịch, đặt lịch hẹn, gửi email xác nhận và cập nhật CRM — tất cả trong một luồng tự động.",
  },
  {
    q: "SME cần bao nhiêu ngân sách để triển khai AI Agent với n8n?",
    a: "Chi phí phụ thuộc vào quy mô. Với n8n self-hosted (miễn phí), bạn chỉ trả tiền cho AI model (OpenAI GPT-4o khoảng $0.01-0.03 mỗi 1,000 tokens) và server hosting (100-300k VND/tháng với VPS cơ bản). Một SME xử lý 500 yêu cầu/ngày có thể vận hành với chi phí 2-5 triệu VND/tháng — so với 15-25 triệu/tháng cho 1 nhân viên part-time.",
  },
  {
    q: "n8n có hỗ trợ tiếng Việt không?",
    a: "n8n là nền tảng workflow — bản thân nó ngôn ngữ-agnostic. Khi tích hợp với các AI model như GPT-4o, Claude, hoặc Gemini, bạn hoàn toàn có thể xử lý tiếng Việt. Thực tế, các model này hiểu tiếng Việt tốt ở mức 85-90% so với tiếng Anh. Bạn chỉ cần viết system prompt bằng tiếng Việt và AI sẽ phản hồi bằng tiếng Việt.",
  },
  {
    q: "Mất bao lâu để triển khai một AI Agent hoàn chỉnh?",
    a: "Phụ thuộc vào độ phức tạp. Bot hỗ trợ khách hàng cơ bản: 1-2 tuần. Hệ thống phân loại leads đầy đủ: 3-4 tuần. Hệ thống xử lý tài liệu phức tạp: 6-8 tuần. Nếu dùng các template có sẵn của n8n (có hơn 900 template), thời gian có thể giảm 50-70%.",
  },
  {
    q: "Dữ liệu khách hàng có an toàn khi dùng AI không?",
    a: "Đây là câu hỏi quan trọng. Có 3 lựa chọn: (1) Dùng OpenAI/Claude API — dữ liệu được mã hóa khi truyền, OpenAI cam kết không dùng API data để training; (2) Dùng Azure OpenAI hoặc AWS Bedrock — dữ liệu ở lại trong cloud của doanh nghiệp; (3) Dùng model local như Ollama — 100% on-premise, dữ liệu không ra ngoài. Với thông tin khách hàng nhạy cảm, khuyến nghị option 2 hoặc 3.",
  },
  {
    q: "46% doanh nghiệp Việt thiếu kỹ năng AI — tôi không biết code có dùng được không?",
    a: "n8n được thiết kế cho người không biết code. Giao diện kéo-thả trực quan, có 900+ template sẵn và cộng đồng hỗ trợ lớn. Tuy nhiên, để tận dụng tối đa AI Agent (viết prompt hiệu quả, xử lý edge cases, tích hợp API), bạn sẽ cần học thêm hoặc có người hỗ trợ setup ban đầu. Autoflow.vn cung cấp dịch vụ triển khai trọn gói nếu bạn cần.",
  },
];

export default function AIAgentN8nSMEBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="ai-agent-n8n-sme" title="AI Agent + n8n Cho SME Việt Nam 2026" />
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
              <span className="text-slate-600 truncate max-w-[300px]">AI</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                AI Agent
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                n8n
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                SME
              </span>
              <span className="text-xs text-slate-500">15 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              AI Agent + n8n:{" "}
              <span className="gradient-text">Tự Động Hóa Thông Minh Cho SME Việt Nam 2026</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Đến 2026, 40% ứng dụng doanh nghiệp toàn cầu sẽ tích hợp AI agent — tăng 8 lần so với mức dưới 5% năm 2025.
              Trong khi đó, 73% doanh nghiệp Việt đã ứng dụng AI ở một mức độ nào đó nhưng chỉ 12% dùng chuyên sâu.
              Khoảng cách này chính là lợi thế cạnh tranh của bạn — nếu hành động ngay hôm nay.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Gartner Stats */}
                <StatCard stats={[
                  { value: "40%", label: "apps doanh nghiệp có AI agent", sub: "Gartner dự báo đến 2026 (từ <5% năm 2025)", color: "text-violet-600" },
                  { value: "8x", label: "tăng trưởng AI agent", sub: "chỉ trong 12 tháng theo Gartner" },
                  { value: "$15T", label: "B2B spend qua AI agent", sub: "Gartner dự báo đến 2028", color: "text-emerald-600" },
                  { value: "31%", label: "CAGR thị trường AI Việt Nam", sub: "$161M (2025) → $1.8B (2034)" },
                ]} />

                {/* Section 1: What is AI Agent */}
                <h2 id="ai-agent-la-gi">AI Agent Là Gì? Giải Thích Đơn Giản Cho Chủ SME</h2>

                <p>
                  Hãy tưởng tượng bạn có một nhân viên mới. Nhân viên đó không bao giờ ngủ, không nghỉ lễ,
                  không cần tăng lương, và xử lý được hàng trăm việc cùng lúc. Nhưng quan trọng hơn —
                  họ <strong>tự suy nghĩ</strong> để giải quyết vấn đề, không chỉ làm theo checklist.
                </p>

                <p>
                  Đó chính là AI Agent.
                </p>

                <CalloutBox type="info" title="Định nghĩa đơn giản">
                  <strong>AI Agent</strong> là hệ thống phần mềm có khả năng nhận mục tiêu, tự lập kế hoạch,
                  sử dụng các công cụ (tool) khác nhau, và thực hiện nhiều bước liên tiếp để đạt được mục tiêu đó —
                  mà không cần con người can thiệp từng bước.
                </CalloutBox>

                <p>
                  Khác với automation truyền thống (làm đúng những gì được lập trình), AI Agent có thể:
                </p>

                <StepList steps={[
                  { title: "Hiểu ngữ cảnh", desc: "Đọc email khách hàng, hiểu ý định dù viết không rõ ràng hay có lỗi chính tả" },
                  { title: "Ra quyết định", desc: "Phân loại yêu cầu, ưu tiên xử lý, escalate khi cần — không cần rule cứng nhắc" },
                  { title: "Dùng nhiều công cụ", desc: "Gọi API, tìm kiếm database, gửi email, cập nhật CRM — tất cả trong một luồng" },
                  { title: "Học từ phản hồi", desc: "Điều chỉnh cách phản hồi dựa trên feedback, cải thiện theo thời gian" },
                ]} />

                <p>
                  Với n8n — nền tảng workflow automation có <strong>70+ AI nodes được xây dựng trên LangChain</strong>,
                  181,800 GitHub stars và định giá $2.5 tỷ USD — bạn có thể xây dựng AI Agent mà không cần viết code phức tạp.
                </p>

                {/* Section 2: Vietnam Market */}
                <h2 id="thi-truong">Thị Trường AI Việt Nam 2026: Cơ Hội Chưa Từng Có</h2>

                <StatCard stats={[
                  { value: "73%", label: "DN Việt đã ứng dụng AI", sub: "nhưng chỉ 12% dùng chuyên sâu (2025)", color: "text-blue-600" },
                  { value: "46.4%", label: "thiếu kỹ năng AI", sub: "rào cản lớn nhất cho doanh nghiệp VN", color: "text-red-500" },
                  { value: "58%", label: "SME toàn cầu đã dùng AI", sub: "nhưng chỉ 12% dùng rộng rãi" },
                  { value: "$1.8B", label: "thị trường AI Việt 2034", sub: "từ $161M năm 2025, CAGR 31%" },
                ]} />

                <p>
                  Con số 46.4% doanh nghiệp Việt Nam thiếu kỹ năng AI nghe có vẻ đáng lo ngại —
                  nhưng với SME, đây lại là <strong>tin tốt</strong>. Tại sao?
                </p>

                <p>
                  Bởi vì đây chính xác là lý do các công cụ <strong>no-code như n8n tồn tại</strong>.
                  Bạn không cần biết Python, không cần thuê data scientist, không cần hiểu LangChain hay vector embeddings.
                  Bạn chỉ cần hiểu quy trình kinh doanh của mình — và n8n sẽ kết nối phần còn lại.
                </p>

                <CalloutBox type="warning" title="Cửa sổ cơ hội đang thu hẹp">
                  Năm 2024, SME tiên phong triển khai AI agent có lợi thế cạnh tranh 12-18 tháng so với đối thủ.
                  Đến 2026, đây sẽ là tiêu chuẩn tối thiểu. Doanh nghiệp nào chưa tự động hóa sẽ không cạnh tranh được về giá và tốc độ.
                </CalloutBox>

                {/* Section 3: Use Cases */}
                <h2 id="use-cases">5 Use Case AI Agent Thực Tế Cho SME Việt Nam</h2>

                <p>
                  Không phải lý thuyết. Đây là 5 workflow AI Agent mà SME Việt có thể triển khai ngay với n8n,
                  từ đơn giản đến phức tạp — kèm sơ đồ luồng xử lý cụ thể.
                </p>

                {/* Use Case 1 */}
                <h3 id="uc-1">1. Bot Hỗ Trợ Khách Hàng 24/7 (Zalo + Website)</h3>

                <p>
                  Thay vì chatbot kịch bản cứng nhắc, AI Agent thực sự hiểu câu hỏi của khách —
                  kể cả khi khách viết sai chính tả, dùng từ lóng, hay hỏi điều chưa từng được lập trình trước.
                </p>

                <StepList steps={[
                  { title: "Khách nhắn tin qua Zalo OA hoặc widget website", desc: "AI Agent nhận tin nhắn, phân tích ý định: hỏi giá, khiếu nại, hỏi tình trạng đơn, hay yêu cầu hỗ trợ kỹ thuật" },
                  { title: "Truy vấn knowledge base của doanh nghiệp", desc: "Agent tìm kiếm trong FAQ, catalog sản phẩm, chính sách (dữ liệu bạn cung cấp) để trả lời chính xác" },
                  { title: "Tra cứu real-time nếu cần", desc: "Kiểm tra tình trạng đơn hàng trong database, lịch có hàng, trạng thái ticket — tự động qua API" },
                  { title: "Trả lời bằng tiếng Việt tự nhiên", desc: "Phản hồi trong 5-10 giây, đúng ngữ cảnh, không cứng nhắc như chatbot cũ" },
                  { title: "Escalate khi vượt thẩm quyền", desc: "Trường hợp phức tạp → tóm tắt hội thoại, chuyển cho nhân viên kèm toàn bộ context" },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">💬</span>, label: "Tin nhắn từ khách", sub: "Zalo / Website" },
                    { icon: <span className="text-lg">🧠</span>, label: "AI phân tích ý định", sub: "GPT-4o / Claude" },
                    { icon: <span className="text-lg">🔍</span>, label: "Truy vấn knowledge base", sub: "FAQ, catalog, chính sách" },
                    { icon: <span className="text-lg">⚡</span>, label: "Kiểm tra real-time", sub: "Đơn hàng, tồn kho" },
                    { icon: <span className="text-lg">✅</span>, label: "Phản hồi tự động", sub: "Hoặc chuyển nhân viên" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả điển hình">
                  Bot AI Agent xử lý được 70-80% câu hỏi thường gặp. Nhân viên CSKH chỉ cần xử lý 20-30% trường hợp phức tạp —
                  thay vì trả lời lặp đi lặp lại cùng một câu hỏi cả ngày.
                </CalloutBox>

                {/* Use Case 2 */}
                <h3 id="uc-2">2. Phân Loại & Chăm Sóc Leads Tự Động</h3>

                <p>
                  Leads về từ Facebook, Google Ads, Zalo, website — mỗi nguồn mỗi kiểu.
                  Sales thủ công sẽ mất 2-3 ngày để phân loại và liên hệ. AI Agent làm trong vài phút.
                </p>

                <StepList steps={[
                  { title: "Leads đổ về từ nhiều kênh", desc: "Facebook Lead Ads, Google Form, Zalo OA, website form — n8n nhận tất cả qua webhook" },
                  { title: "AI phân tích và chấm điểm", desc: "Đọc thông tin điền (ngành nghề, quy mô, nhu cầu), phân loại Hot/Warm/Cold dựa trên tiêu chí bạn định nghĩa" },
                  { title: "Phân công tự động cho sales", desc: "Hot lead → giao ngay cho senior sales kèm brief AI-generated. Cold lead → vào nurture sequence" },
                  { title: "Email/Zalo chào hàng cá nhân hóa", desc: "AI viết email chào hàng riêng cho từng lead, dựa trên ngành nghề và nhu cầu họ ghi trong form" },
                  { title: "Follow-up tự động theo thời gian", desc: "Không phản hồi sau 2 ngày → tự động gửi follow-up. Không phản hồi sau 7 ngày → chuyển sang sequence khác" },
                ]} />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    { icon: <span className="text-lg">📥</span>, label: "Lead mới vào", sub: "Facebook / Google / Zalo" },
                    { icon: <span className="text-lg">🤖</span>, label: "AI chấm điểm", sub: "Hot / Warm / Cold" },
                    { icon: <span className="text-lg">📋</span>, label: "Giao cho sales", sub: "Kèm AI brief" },
                    { icon: <span className="text-lg">📧</span>, label: "Email cá nhân hóa", sub: "AI viết theo ngành" },
                    { icon: <span className="text-lg">🔄</span>, label: "Follow-up tự động", sub: "D+2, D+7, D+14" },
                  ]}
                />

                {/* Use Case 3 */}
                <h3 id="uc-3">3. Trợ Lý Email & Lịch Làm Việc Thông Minh</h3>

                <p>
                  Hộp thư đến của CEO/Sales Manager chứa hàng trăm email mỗi ngày.
                  AI Agent không chỉ lọc spam — nó hiểu, phân loại, và xử lý email theo quyền hạn được giao.
                </p>

                <StepList steps={[
                  { title: "AI đọc và phân loại email incoming", desc: "Phân loại: yêu cầu báo giá, khiếu nại, hợp tác, spam, thông tin nội bộ. Mức độ ưu tiên: khẩn, bình thường, FYI" },
                  { title: "Soạn thảo phản hồi nháp", desc: "Với email thường gặp (hỏi báo giá, xin tài liệu), AI soạn phản hồi nháp sẵn chờ approve 1 click" },
                  { title: "Tự động xử lý email đơn giản", desc: "Email xin tài liệu → AI gửi đúng file từ Drive. Xác nhận lịch hẹn → cập nhật Google Calendar tự động" },
                  { title: "Summary báo cáo cuối ngày", desc: "5 giờ chiều: AI gửi tóm tắt inbox hôm nay — việc cần làm, deadline, các email quan trọng chưa reply" },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">📬</span>, label: "Email đến", sub: "Gmail / Outlook" },
                    { icon: <span className="text-lg">🏷️</span>, label: "AI phân loại", sub: "Ưu tiên + danh mục" },
                    { icon: <span className="text-lg">✍️</span>, label: "Soạn phản hồi nháp", sub: "Chờ approve 1 click" },
                    { icon: <span className="text-lg">📅</span>, label: "Cập nhật Calendar", sub: "Lịch hẹn tự động" },
                    { icon: <span className="text-lg">📊</span>, label: "Daily summary", sub: "Báo cáo 5h chiều" },
                  ]}
                />

                <CalloutBox type="tip">
                  Tính năng "soạn nháp chờ approve" là cách an toàn nhất để bắt đầu với AI email assistant.
                  Bạn vẫn kiểm soát hoàn toàn nội dung, nhưng tiết kiệm 60-70% thời gian gõ.
                </CalloutBox>

                {/* Use Case 4 */}
                <h3 id="uc-4">4. Giám Sát Tồn Kho & Cảnh Báo Thông Minh</h3>

                <p>
                  Hết hàng mà không biết = mất doanh thu. Nhập quá nhiều = đóng băng vốn.
                  AI Agent phân tích xu hướng và cảnh báo trước khi vấn đề xảy ra.
                </p>

                <StepList steps={[
                  { title: "Sync dữ liệu tồn kho real-time", desc: "Kết nối với phần mềm quản lý kho (Google Sheet, MISA, Sapo, KiotViet) — n8n pull data mỗi giờ hoặc real-time" },
                  { title: "AI phân tích xu hướng tiêu thụ", desc: "So sánh tốc độ bán với lịch sử, dự báo ngày hết hàng dựa trên trend hiện tại và mùa vụ" },
                  { title: "Cảnh báo thông minh trước 3-7 ngày", desc: "Không phải cảnh báo khi đã hết — mà cảnh báo trước đủ thời gian để đặt hàng và nhận hàng" },
                  { title: "Tự động tạo đề xuất đơn nhập", desc: "Số lượng đề xuất dựa trên tốc độ tiêu thụ hiện tại + buffer an toàn — gửi cho người phụ trách approve" },
                  { title: "Báo cáo hàng tuần về slow-moving items", desc: "Hàng tồn kho lâu, sắp hết hạn → đề xuất khuyến mãi hoặc thanh lý" },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">📦</span>, label: "Dữ liệu tồn kho", sub: "MISA / Sapo / Sheet" },
                    { icon: <span className="text-lg">📈</span>, label: "AI phân tích trend", sub: "Dự báo ngày hết hàng" },
                    { icon: <span className="text-lg">⚠️</span>, label: "Cảnh báo sớm", sub: "Trước 3-7 ngày" },
                    { icon: <span className="text-lg">📋</span>, label: "Đề xuất đơn nhập", sub: "Tự động + approve" },
                    { icon: <span className="text-lg">📊</span>, label: "Weekly report", sub: "Slow-moving items" },
                  ]}
                />

                {/* Use Case 5 */}
                <h3 id="uc-5">5. Xử Lý Tài Liệu & Hợp Đồng Bằng AI</h3>

                <p>
                  Hợp đồng PDF, hóa đơn scan, CV ứng viên — doanh nghiệp nhận hàng chục tài liệu mỗi ngày.
                  Đọc thủ công, trích xuất dữ liệu, nhập vào hệ thống: mất hàng giờ. AI Agent làm trong vài giây.
                </p>

                <StepList steps={[
                  { title: "Nhận tài liệu qua email hoặc upload", desc: "PDF, Word, hình ảnh scan — n8n nhận qua email attachment hoặc form upload" },
                  { title: "AI OCR và trích xuất thông tin", desc: "Đọc hóa đơn → trích xuất: số hóa đơn, ngày, nhà cung cấp, tổng tiền, items. Đọc CV → trích xuất: kỹ năng, kinh nghiệm, học vấn" },
                  { title: "Xác minh và validate dữ liệu", desc: "So khớp với dữ liệu đã có: nhà cung cấp có trong hệ thống không? Số tiền có khớp với PO không?" },
                  { title: "Tự động nhập vào hệ thống", desc: "Dữ liệu đã validate → đưa vào Google Sheet, MISA, CRM, ATS (applicant tracking system)" },
                  { title: "Flag để review nếu có bất thường", desc: "Số tiền lớn bất thường, nhà cung cấp mới, thông tin thiếu → tag để người phụ trách kiểm tra" },
                ]} />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    { icon: <span className="text-lg">📄</span>, label: "Tài liệu đến", sub: "PDF / Scan / Email" },
                    { icon: <span className="text-lg">🔎</span>, label: "AI OCR + trích xuất", sub: "Tất cả loại tài liệu" },
                    { icon: <span className="text-lg">✔️</span>, label: "Validate dữ liệu", sub: "So khớp hệ thống" },
                    { icon: <span className="text-lg">💾</span>, label: "Nhập vào hệ thống", sub: "MISA / CRM / Sheet" },
                    { icon: <span className="text-lg">🚩</span>, label: "Flag bất thường", sub: "Chờ review thủ công" },
                  ]}
                />

                {/* Section 4: n8n AI Capabilities */}
                <h2 id="n8n-ai">Tại Sao n8n Là Lựa Chọn Hàng Đầu Cho AI Agent?</h2>

                <p>
                  n8n không chỉ là công cụ automation thông thường. Với vòng gọi vốn $254M, định giá $2.5 tỷ USD,
                  và 181,800 GitHub stars, n8n đang dẫn đầu thị trường AI workflow automation toàn cầu.
                </p>

                <StatCard stats={[
                  { value: "70+", label: "AI nodes tích hợp sẵn", sub: "Xây dựng trên LangChain framework", color: "text-orange-600" },
                  { value: "181.8K", label: "GitHub stars", sub: "Top 50 repo phổ biến nhất thế giới" },
                  { value: "$254M", label: "Vốn huy động", sub: "Định giá $2.5 tỷ USD", color: "text-violet-600" },
                  { value: "900+", label: "Templates có sẵn", sub: "Bao gồm AI agent workflows" },
                ]} />

                <p>
                  Điều làm n8n nổi bật so với Zapier, Make, hay các công cụ no-code khác là khả năng
                  xây dựng <strong>AI Agent thực sự</strong> — không chỉ gọi API AI đơn giản:
                </p>

                <StepList steps={[
                  { title: "AI Agent node với memory", desc: "Agent nhớ context hội thoại, không phải xử lý từng tin nhắn độc lập. Hỗ trợ window buffer memory, vector store memory" },
                  { title: "Tool calling (function calling)", desc: "AI tự quyết định khi nào cần gọi tool nào: tìm kiếm web, query database, gửi email, gọi API — không cần rule cứng" },
                  { title: "RAG (Retrieval Augmented Generation)", desc: "Kết nối knowledge base của doanh nghiệp (Pinecone, Qdrant, Supabase vector) để AI trả lời dựa trên dữ liệu của bạn" },
                  { title: "Multi-agent orchestration", desc: "Nhiều AI agent phối hợp: agent A nghiên cứu, agent B viết nội dung, agent C kiểm tra — như một team thực sự" },
                  { title: "Self-hosted = dữ liệu ở lại", desc: "Cài trên server của bạn, dữ liệu không ra ngoài. Quan trọng với doanh nghiệp có dữ liệu nhạy cảm" },
                ]} />

                {/* Section 5: Comparison */}
                <h2 id="so-sanh">Automation Truyền Thống vs AI Agent: Khác Nhau Như Thế Nào?</h2>

                <BeforeAfter
                  before={{
                    title: "Automation Truyền Thống (Rule-based)",
                    items: [
                      'Nếu A thì B — logic cứng nhắc, không linh hoạt',
                      "Hỏi đúng kịch bản mới trả lời được, lệch là báo lỗi",
                      "Cần lập trình lại khi quy trình thay đổi",
                      "Xử lý dữ liệu có cấu trúc (số, ngày, dropdown)",
                      "Tốt cho quy trình lặp lại 100%, không có ngoại lệ",
                    ],
                  }}
                  after={{
                    title: "AI Agent (LLM-powered)",
                    items: [
                      "Hiểu ngữ cảnh, xử lý yêu cầu không rõ ràng hoặc bất thường",
                      "Trả lời được câu hỏi chưa từng gặp dựa trên knowledge base",
                      "Tự thích nghi, cải thiện qua thời gian",
                      "Xử lý text, hình ảnh, PDF, voice, video",
                      "Tốt cho quy trình cần phán đoán và linh hoạt",
                    ],
                  }}
                />

                <ComparisonTable
                  headers={["Tiêu chí", "Automation truyền thống", "AI Agent (n8n)"]}
                  highlightCol={2}
                  rows={[
                    ["Xử lý câu hỏi bất thường", "Báo lỗi hoặc không phản hồi", "Suy luận và đưa ra câu trả lời phù hợp"],
                    ["Ngôn ngữ tự nhiên", "Không hỗ trợ", "Hiểu tiếng Việt tự nhiên, kể cả từ lóng"],
                    ["Dữ liệu phi cấu trúc", "Không xử lý được", "Đọc PDF, email, hình ảnh, voice"],
                    ["Thay đổi quy trình", "Cần lập trình lại", "Cập nhật prompt/knowledge base"],
                    ["Chi phí setup", "Thấp — đơn giản hơn", "Trung bình — cần thiết kế prompt, knowledge base"],
                    ["Chi phí vận hành", "Gần như 0", "$0.01-0.05/yêu cầu tùy model"],
                    ["Độ tin cậy", "100% nếu đúng kịch bản", "90-95% — cần fallback cho trường hợp uncertain"],
                    ["Phù hợp nhất", "Invoice processing, data sync, notification", "Customer support, lead qualification, document analysis"],
                  ]}
                />

                <CalloutBox type="tip" title="Lời khuyên thực tế">
                  Không phải lúc nào AI Agent cũng là lựa chọn tốt nhất. Với quy trình lặp lại hoàn toàn
                  (sync đơn hàng từ Shopee vào Google Sheet), automation rule-based đơn giản hơn, rẻ hơn và đáng tin cậy hơn.
                  Dùng AI Agent khi quy trình cần <strong>phán đoán, hiểu ngôn ngữ tự nhiên, hoặc xử lý ngoại lệ</strong>.
                </CalloutBox>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về AI Agent và n8n</h2>

                <FAQ items={faqItems} />

                {/* Section 6: Get Started */}
                <h2 id="bat-dau">Bắt Đầu Từ Đâu? Lộ Trình 4 Bước Cho SME</h2>

                <StepList steps={[
                  { title: "Audit quy trình hiện tại (Tuần 1)", desc: "Liệt kê 10 quy trình lặp lại nhiều nhất. Đánh dấu cái nào cần phán đoán (→ AI Agent) và cái nào hoàn toàn cơ học (→ automation đơn giản hơn). Ưu tiên cái nào tốn nhiều giờ nhất." },
                  { title: "Chọn 1 use case để bắt đầu (Tuần 2)", desc: "Đừng làm tất cả cùng lúc. Bắt đầu với 1 use case có ROI rõ ràng nhất — thường là customer support bot hoặc lead qualification. Chạy thử 2 tuần trước khi mở rộng." },
                  { title: "Triển khai và đo lường (Tuần 3-6)", desc: "Track 3 chỉ số: số yêu cầu xử lý tự động (%), thời gian tiết kiệm được (giờ/tuần), mức độ hài lòng khách hàng (nếu là customer-facing). Điều chỉnh prompt và flow dựa trên kết quả thực tế." },
                  { title: "Scale ra toàn bộ tổ chức (Tháng 2+)", desc: "Sau khi 1 use case chạy ổn, nhân rộng ra các phòng ban và quy trình khác. Xây dựng internal knowledge base dùng chung cho nhiều AI agent." },
                ]} />

                {/* CTA Section */}
                <div className="not-prose mt-12 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-100 p-8">
                  <div className="max-w-xl">
                    <div className="text-sm font-semibold text-violet-600 mb-2">Miễn phí — Không cam kết</div>
                    <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                      Doanh nghiệp bạn nên bắt đầu từ đâu?
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      Đặt lịch <strong>audit miễn phí 45 phút</strong> — chuyên gia Autoflow sẽ phân tích
                      quy trình của bạn, xác định 3 cơ hội tự động hóa có ROI cao nhất, và đưa ra lộ trình
                      triển khai AI Agent cụ thể phù hợp ngân sách SME.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/audit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
                      >
                        Đặt lịch audit miễn phí
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="/quiz"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                      >
                        Làm quiz: AI Agent phù hợp với bạn không?
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="AI Agent + n8n Cho SME Việt Nam 2026" slug="ai-agent-n8n-sme" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
