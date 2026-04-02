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
import CodeBlock from "@/components/blog/CodeBlock";
import BlogFooter from "@/components/blog/BlogFooter";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "n8n Là Gì? Hướng Dẫn Toàn Diện Cho Người Mới 2026",
  description:
    "n8n là gì? Tìm hiểu toàn diện về n8n — công cụ tự động hóa mã nguồn mở với 400+ tích hợp, 70+ AI nodes. So sánh n8n vs Zapier vs Make, hướng dẫn cài đặt, và 5 workflow thực tế cho SME Việt Nam.",
  keywords: [
    "n8n là gì",
    "hướng dẫn n8n tiếng việt",
    "n8n automation",
    "n8n self-host",
    "n8n vs zapier",
    "n8n vs make",
    "công cụ tự động hóa",
    "n8n workflow",
  ],
};

const tocItems = [
  { id: "n8n-la-gi", text: "n8n là gì?", level: 2 },
  { id: "hoat-dong", text: "n8n hoạt động như thế nào?", level: 2 },
  { id: "tinh-nang", text: "Tính năng nổi bật", level: 2 },
  { id: "so-sanh", text: "n8n vs Zapier vs Make", level: 2 },
  { id: "bang-gia", text: "Bảng giá n8n 2026", level: 2 },
  { id: "cai-dat", text: "Cách cài đặt n8n", level: 2 },
  { id: "cai-dat-docker", text: "Self-host bằng Docker", level: 3 },
  { id: "cai-dat-cloud", text: "Dùng n8n Cloud", level: 3 },
  { id: "workflow-sme", text: "5 workflow cho SME Việt Nam", level: 2 },
  { id: "tich-hop-viet-nam", text: "Tích hợp tools Việt Nam", level: 2 },
  { id: "uu-nhuoc-diem", text: "Ưu và nhược điểm", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "n8n có miễn phí không?",
    a: "n8n Community Edition hoàn toàn miễn phí khi tự host (self-host). Bạn chỉ tốn chi phí server, thường từ 70.000–120.000đ/tháng cho VPS cơ bản. n8n Cloud (có managed hosting) bắt đầu từ $20/tháng (~500.000đ). Không giới hạn số workflow hay số lần chạy khi self-host.",
  },
  {
    q: "n8n khó học không? Cần biết code không?",
    a: "n8n có giao diện kéo-thả trực quan, không cần code để tạo hầu hết workflow. Tuy nhiên n8n có hỗ trợ JavaScript/Python trong node Code nếu bạn cần logic phức tạp. Người hoàn toàn không biết code vẫn có thể tạo workflow cơ bản trong 1–2 ngày. So với Zapier, n8n có learning curve cao hơn nhưng mạnh hơn nhiều.",
  },
  {
    q: "n8n có an toàn không? Dữ liệu có bị lộ không?",
    a: "Khi self-host, toàn bộ dữ liệu ở lại trên server của bạn — n8n GmbH không có quyền truy cập. Đây là lý do nhiều doanh nghiệp có yêu cầu bảo mật cao (ngân hàng, y tế, pháp lý) chọn n8n. Với n8n Cloud, dữ liệu được mã hóa và lưu ở EU theo GDPR.",
  },
  {
    q: "n8n có tích hợp với Zalo không?",
    a: "n8n không có node Zalo OA chính thức, nhưng có community node 'n8n-nodes-zalo' do cộng đồng phát triển. Ngoài ra bạn có thể dùng node HTTP Request để gọi trực tiếp Zalo OA API. Autoflow có thể hỗ trợ bạn setup tích hợp Zalo — đặt lịch tư vấn miễn phí.",
  },
  {
    q: "n8n khác gì so với Zapier?",
    a: "Sự khác biệt lớn nhất: (1) n8n có thể self-host miễn phí, Zapier luôn phải trả tiền; (2) n8n cho phép viết code tùy ý trong workflow, Zapier không; (3) n8n có 70+ AI nodes tích hợp, Zapier phải dùng add-on; (4) Zapier dễ hơn cho người mới hoàn toàn. Nếu bạn xử lý dữ liệu nhạy cảm hoặc muốn tiết kiệm chi phí dài hạn — n8n thắng rõ ràng.",
  },
  {
    q: "n8n Version 2.0 có gì mới?",
    a: "n8n 2.0 ra mắt tháng 12/2025 mang nhiều cải tiến lớn: (1) Projects — tổ chức workflow theo dự án với phân quyền riêng; (2) AI Agent nodes được cải thiện mạnh, hỗ trợ multi-agent; (3) Canvas mới nhanh hơn 3x; (4) Sub-workflows được tối ưu hiệu năng; (5) Debug mode nâng cao. Đây là bản cập nhật lớn nhất trong lịch sử n8n.",
  },
  {
    q: "Tôi cần server gì để tự host n8n?",
    a: "Yêu cầu tối thiểu: 1GB RAM, 1 vCPU, 20GB ổ cứng. Thực tế khuyến nghị: 2GB RAM để chạy ổn định khi nhiều workflow đồng thời. Các nhà cung cấp phổ biến tại Việt Nam: DigitalOcean ($6/tháng), Vultr ($6/tháng), Bizfly Cloud (~120.000đ/tháng). Nhiều người dùng Việt Nam cũng chạy trên Render.com free tier cho test.",
  },
  {
    q: "n8n có hỗ trợ tiếng Việt không?",
    a: "Giao diện n8n hiện chỉ có tiếng Anh. Tuy nhiên tài liệu cộng đồng tiếng Việt đang phát triển. Autoflow.vn là nguồn tài liệu tiếng Việt chuyên sâu nhất về n8n tại Việt Nam, với các hướng dẫn cụ thể cho doanh nghiệp Việt.",
  },
];

export default function N8nLaGiBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="n8n-la-gi" title="n8n Là Gì? Hướng Dẫn Toàn Diện 2026" />
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
                Automation
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                n8n
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                Hướng dẫn
              </span>
              <span className="text-xs text-slate-500">20 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              n8n Là Gì?{" "}
              <span className="gradient-text">Hướng Dẫn Toàn Diện Cho Người Mới 2026</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              n8n là công cụ tự động hóa workflow mạnh nhất thế giới hiện nay — mã nguồn mở, có thể
              self-host miễn phí, 400+ tích hợp, 70+ AI nodes. Bài viết này giải thích toàn bộ từ
              khái niệm đến cài đặt thực tế, so sánh chi phí, và 5 workflow cụ thể cho doanh nghiệp
              Việt Nam.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Key stats */}
                <StatCard stats={[
                  { value: "181.8K", label: "GitHub Stars", sub: "top 50 repo toàn cầu", color: "text-violet-600" },
                  { value: "$2.5B", label: "định giá (10/2025)", sub: "$254M vốn huy động" },
                  { value: "400+", label: "tích hợp built-in", sub: "+ 5.834 community nodes" },
                  { value: "Miễn phí", label: "khi self-host", sub: "không giới hạn workflow" },
                ]} />

                {/* ==================== SECTION 1 ==================== */}
                <h2 id="n8n-la-gi">n8n Là Gì?</h2>

                <p>
                  <strong>n8n</strong> (đọc là <em>"nodemation"</em>) là một nền tảng tự động hóa
                  workflow (workflow automation) mã nguồn mở, cho phép bạn kết nối các ứng dụng,
                  dịch vụ và API với nhau mà không cần — hoặc rất ít — code. Mỗi "workflow" trong
                  n8n là một chuỗi các bước tự động: khi sự kiện A xảy ra, thực hiện hành động B,
                  rồi C, rồi D.
                </p>

                <p>
                  Ví dụ đơn giản: khi có đơn hàng mới trên Shopee → n8n tự động lưu vào Google
                  Sheet → gửi thông báo Telegram cho kho → cập nhật MISA. Tất cả xảy ra trong
                  vài giây, 24/7, không cần nhân viên ngồi làm thủ công.
                </p>

                <CalloutBox type="info" title="n8n vs Zapier vs Make — Tóm tắt nhanh">
                  Nếu bạn chỉ có 10 giây: n8n giống Zapier và Make nhưng{" "}
                  <strong>có thể tự host miễn phí</strong>, mạnh hơn về AI và code tùy chỉnh,
                  phù hợp doanh nghiệp cần bảo mật dữ liệu hoặc tiết kiệm chi phí dài hạn.
                </CalloutBox>

                <h3>Lịch sử và nguồn gốc</h3>

                <p>
                  n8n được thành lập năm <strong>2019</strong> tại Berlin, Đức bởi Jan Oberhauser.
                  Tên "n8n" là viết tắt của "nodemation" — kết hợp "node" (nút kết nối) và
                  "automation". Từ một dự án cá nhân, n8n nhanh chóng thu hút cộng đồng developer
                  toàn cầu nhờ triết lý <strong>fair-code</strong>: mã nguồn mở nhưng có giới hạn
                  thương mại hóa để đảm bảo công ty có thể phát triển bền vững.
                </p>

                <p>
                  Tháng 10/2025, n8n hoàn thành vòng gọi vốn Series C với{" "}
                  <strong>$254 triệu USD</strong>, nâng định giá lên <strong>$2.5 tỷ USD</strong>.
                  Đây là minh chứng rõ ràng nhất cho sức mạnh của mô hình "commercial open source"
                  trong lĩnh vực automation. Tháng 12/2025, n8n ra mắt{" "}
                  <strong>Version 2.0</strong> — bản cập nhật lớn nhất trong lịch sử với nhiều
                  cải tiến về AI, hiệu năng và trải nghiệm người dùng.
                </p>

                <StatCard stats={[
                  { value: "2019", label: "Năm thành lập", sub: "Berlin, Đức" },
                  { value: "$254M", label: "Tổng vốn huy động", sub: "Series C (10/2025)", color: "text-emerald-600" },
                  { value: "Dec 2025", label: "Version 2.0", sub: "bản cập nhật lớn nhất" },
                  { value: "Fair-code", label: "Giấy phép", sub: "không fully open source" },
                ]} />

                <h3>Fair-code là gì? n8n có thực sự "miễn phí" không?</h3>

                <p>
                  Đây là điểm nhiều người nhầm lẫn. n8n dùng <strong>giấy phép fair-code</strong>{" "}
                  (Sustainable Use License), không phải MIT hay Apache hoàn toàn. Điều này có nghĩa:
                </p>

                <ul>
                  <li>
                    <strong>Cá nhân và nội bộ doanh nghiệp:</strong> Miễn phí hoàn toàn, kể cả
                    dùng thương mại.
                  </li>
                  <li>
                    <strong>Bán lại n8n như dịch vụ (SaaS) cho người khác:</strong> Phải mua giấy
                    phép Enterprise.
                  </li>
                  <li>
                    <strong>Tự host để dùng cho workflow của công ty mình:</strong> Miễn phí hoàn
                    toàn, không giới hạn.
                  </li>
                </ul>

                <p>
                  Với 99% doanh nghiệp Việt Nam, n8n Community Edition tự host là{" "}
                  <strong>hoàn toàn miễn phí</strong>. Bạn chỉ tốn tiền server (~70k–150k/tháng).
                </p>

                {/* ==================== SECTION 2 ==================== */}
                <h2 id="hoat-dong">n8n Hoạt Động Như Thế Nào?</h2>

                <p>
                  n8n dựa trên mô hình <strong>node-based visual programming</strong>. Mỗi workflow
                  được xây dựng bằng cách kéo-thả các "node" (nút) và kết nối chúng lại với nhau
                  trên canvas trực quan.
                </p>

                <h3>3 thành phần cốt lõi</h3>

                <StepList steps={[
                  {
                    title: "Trigger Node — Điểm khởi động",
                    desc: "Mỗi workflow bắt đầu bằng một trigger: webhook (nhận HTTP request), lịch cố định (cron), hoặc sự kiện từ app (email mới, form mới, đơn hàng mới...). Trigger luôn là node đầu tiên.",
                  },
                  {
                    title: "Processing Nodes — Xử lý dữ liệu",
                    desc: "Sau trigger, dữ liệu đi qua các node xử lý: lọc (IF), biến đổi (Set, Code), gọi API (HTTP Request), làm việc với file (Read/Write), hoặc logic phân nhánh (Switch). Bạn có thể viết JavaScript/Python tùy ý trong node Code.",
                  },
                  {
                    title: "Action Nodes — Thực hiện hành động",
                    desc: "Cuối cùng là các node thực hiện hành động: gửi email, gửi Slack/Telegram, cập nhật database, tạo row trong Google Sheet, tạo task trong Asana... Hơn 400 app được hỗ trợ built-in.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#7C3AED"
                  title="Ví dụ: Workflow đơn hàng Shopee → MISA"
                  steps={[
                    { icon: <span className="text-lg">🛒</span>, label: "Trigger", sub: "Đơn Shopee mới" },
                    { icon: <span className="text-lg">🔄</span>, label: "Transform", sub: "Map dữ liệu" },
                    { icon: <span className="text-lg">🔀</span>, label: "IF Node", sub: "Kiểm tra đủ kho?" },
                    { icon: <span className="text-lg">📊</span>, label: "Google Sheet", sub: "Log đơn hàng" },
                    { icon: <span className="text-lg">💼</span>, label: "MISA API", sub: "Tạo hóa đơn" },
                    { icon: <span className="text-lg">📱</span>, label: "Telegram", sub: "Thông báo kho" },
                  ]}
                />

                <p>
                  Điều làm n8n khác biệt là <strong>mỗi node có thể nhận và trả về nhiều "items"
                  (mục dữ liệu) cùng lúc</strong>. Không như Zapier chỉ xử lý từng record một, n8n
                  có thể xử lý hàng nghìn records trong một lần chạy workflow — quan trọng khi
                  đồng bộ hàng loạt dữ liệu.
                </p>

                {/* ==================== SECTION 3 ==================== */}
                <h2 id="tinh-nang">Tính Năng Nổi Bật Của n8n</h2>

                <h3>1. 70+ AI Nodes tích hợp sẵn (LangChain-based)</h3>

                <p>
                  n8n là nền tảng automation <strong>đầu tiên tích hợp AI agent</strong> ở tầng
                  core, không phải add-on. Với 70+ AI nodes dựa trên LangChain, bạn có thể:
                </p>

                <ul>
                  <li>Tạo <strong>AI Agent</strong> tự quyết định tool nào cần dùng</li>
                  <li>Kết nối với <strong>bất kỳ LLM nào</strong>: OpenAI, Claude, Gemini, Mistral, hoặc local model qua Ollama</li>
                  <li>Xây dựng <strong>RAG pipeline</strong> (Retrieval-Augmented Generation) để AI trả lời dựa trên dữ liệu công ty</li>
                  <li>Dùng <strong>vector database nodes</strong>: Pinecone, Qdrant, Weaviate</li>
                  <li>Tạo <strong>multi-agent workflow</strong>: nhiều AI agent phối hợp nhau</li>
                </ul>

                <CalloutBox type="tip" title="AI Agent thực tế">
                  Ví dụ thực tế: Khách email hỏi về đơn hàng → n8n AI Agent tự tra cứu trong database
                  → viết email trả lời chuyên nghiệp → gửi tự động. Không cần nhân viên CS cho các
                  câu hỏi routine.
                </CalloutBox>

                <h3>2. 400+ tích hợp built-in + 5.834 community nodes</h3>

                <p>
                  n8n có <strong>400+ integrations chính thức</strong> bao gồm tất cả công cụ phổ
                  biến: Google Workspace, Slack, Notion, Airtable, Shopify, WooCommerce, HubSpot,
                  Salesforce, MySQL, PostgreSQL, MongoDB, AWS, và hàng trăm công cụ khác.
                </p>

                <p>
                  Ngoài ra, cộng đồng đã tạo thêm <strong>5.834 community nodes</strong> (tính đến
                  đầu 2026) cho các công cụ đặc thù — bao gồm nhiều ứng dụng Việt Nam như Zalo OA,
                  KiotViet, và các nền tảng TMĐT trong nước.
                </p>

                <h3>3. Self-hosting — Toàn quyền kiểm soát dữ liệu</h3>

                <p>
                  Đây là tính năng quan trọng nhất với doanh nghiệp Việt Nam có yêu cầu bảo mật.
                  Khi self-host n8n:
                </p>

                <ul>
                  <li>Dữ liệu <strong>không bao giờ rời server của bạn</strong></li>
                  <li>Không có giới hạn số lần chạy (executions) hay số workflow</li>
                  <li>Có thể chạy trong môi trường <strong>air-gapped</strong> (không cần internet)</li>
                  <li>Tùy chỉnh toàn bộ: database, caching, logging, monitoring</li>
                </ul>

                <h3>4. Code node — JavaScript và Python đầy đủ</h3>

                <p>
                  Khác với Zapier/Make chỉ cho phép logic đơn giản, n8n có{" "}
                  <strong>Code node hỗ trợ JavaScript và Python đầy đủ</strong>. Bạn có thể:
                </p>

                <ul>
                  <li>Viết thuật toán phức tạp, xử lý string/date/number tùy ý</li>
                  <li>Dùng thư viện npm tùy chỉnh (trong môi trường self-host)</li>
                  <li>Debug với console.log ngay trong giao diện</li>
                  <li>Xử lý JSON phức tạp, flatten/unflatten nested objects</li>
                </ul>

                <h3>5. Sub-workflows và modularity</h3>

                <p>
                  n8n cho phép tạo <strong>sub-workflows</strong> — workflow gọi workflow khác như
                  function call. Điều này giúp tổ chức logic phức tạp thành các module nhỏ, tái
                  sử dụng, dễ maintain. Đây là tính năng enterprise mà Zapier và Make không có
                  ở cùng mức độ.
                </p>

                <StatCard stats={[
                  { value: "70+", label: "AI Nodes", sub: "LangChain-based, built-in", color: "text-violet-600" },
                  { value: "400+", label: "Tích hợp chính thức", sub: "không cần code" },
                  { value: "5.834", label: "Community nodes", sub: "từ cộng đồng" },
                  { value: "JS + Python", label: "Code Node", sub: "logic tùy ý" },
                ]} />

                {/* ==================== SECTION 4 ==================== */}
                <h2 id="so-sanh">n8n vs Zapier vs Make — So Sánh Chi Tiết</h2>

                <p>
                  Ba nền tảng này thường được đặt cạnh nhau, nhưng chúng phục vụ các nhu cầu khác
                  nhau. Dưới đây là so sánh trung thực dựa trên dữ liệu thực tế 2026:
                </p>

                <ComparisonTable
                  headers={["Tiêu chí", "n8n", "Zapier", "Make (Integromat)"]}
                  highlightCol={1}
                  rows={[
                    ["Giá khởi điểm", "Miễn phí (self-host)", "$19.99/tháng", "$9/tháng"],
                    ["Giá quy đổi VND", "~75k/tháng (server)", "~510k/tháng", "~230k/tháng"],
                    ["Self-host", "Có — miễn phí", "Không", "Không"],
                    ["Giới hạn tasks/tháng", "Không giới hạn*", "750 tasks (free)", "1.000 ops (free)"],
                    ["AI Nodes tích hợp", "70+ nodes (LangChain)", "Có (add-on thêm tiền)", "Có (giới hạn)"],
                    ["Tích hợp chính thức", "400+", "6.000+", "1.500+"],
                    ["Viết code tùy ý", "Có (JS + Python)", "Không", "Có (giới hạn)"],
                    ["Độ khó học", "Trung bình", "Dễ nhất", "Trung bình"],
                    ["Bảo mật dữ liệu", "Tối đa (self-host)", "Dữ liệu lên Zapier", "Dữ liệu lên Make"],
                    ["Phù hợp với", "Dev, SME có tech", "Non-tech, dùng nhanh", "Visual flow phức tạp"],
                  ]}
                />

                <CalloutBox type="warning" title="Lưu ý quan trọng về giá">
                  Bảng giá trên tính cho gói cơ bản. Chi phí thực tế của Zapier có thể tăng mạnh
                  theo số lượng "tasks" — nhiều doanh nghiệp Việt Nam phản ánh hóa đơn Zapier tăng
                  10–15x sau 6 tháng tăng trưởng. Với n8n self-host, chi phí gần như cố định.
                </CalloutBox>

                <BeforeAfter
                  before={{
                    title: "Zapier — Đơn giản nhưng tốn tiền",
                    items: [
                      "Giao diện thân thiện nhất, không cần học",
                      "6.000+ integrations chính thức",
                      "Chi phí tăng theo số lượng task",
                      "Không thể self-host — dữ liệu lưu trên Zapier",
                      "Giới hạn logic phức tạp, không viết code tự do",
                    ],
                  }}
                  after={{
                    title: "n8n — Mạnh hơn, tiết kiệm hơn",
                    items: [
                      "Self-host miễn phí, không giới hạn executions",
                      "70+ AI nodes built-in (không tốn thêm)",
                      "Code node JS/Python cho logic phức tạp",
                      "Dữ liệu ở lại server của bạn — bảo mật tối đa",
                      "Learning curve cao hơn, cần setup ban đầu",
                    ],
                  }}
                />

                <h3>Khi nào nên chọn cái nào?</h3>

                <ComparisonTable
                  headers={["Tình huống", "Khuyến nghị"]}
                  rows={[
                    ["Mới bắt đầu, không biết code, muốn chạy ngay hôm nay", "Zapier (Free trial)"],
                    ["Xử lý dữ liệu nhạy cảm (y tế, tài chính, pháp lý)", "n8n self-host"],
                    ["Cần AI agent tích hợp sâu trong workflow", "n8n"],
                    ["Quy mô nhỏ, < 1.000 tasks/tháng, không muốn setup server", "Make Free"],
                    ["Muốn scale lớn với chi phí dự đoán được", "n8n self-host"],
                    ["Cần 6.000+ integrations, dùng tools rất đặc thù", "Zapier Pro"],
                    ["Có developer trong team, muốn customize sâu", "n8n"],
                  ]}
                />

                {/* ==================== SECTION 5 ==================== */}
                <h2 id="bang-gia">Bảng Giá n8n 2026</h2>

                <p>
                  n8n có hai hướng sử dụng chính: tự host (self-host) hoặc dùng n8n Cloud được
                  quản lý. Dưới đây là toàn bộ chi phí thực tế:
                </p>

                <ComparisonTable
                  headers={["Gói", "Giá USD/tháng", "Giá VND/tháng", "Phù hợp"]}
                  highlightCol={1}
                  rows={[
                    ["Self-host Community", "Miễn phí", "0đ (+ ~75k–150k server)", "Hầu hết SME Việt Nam"],
                    ["n8n Cloud Starter", "$20", "~510.000đ", "Không muốn quản lý server"],
                    ["n8n Cloud Pro", "$50", "~1.275.000đ", "Team nhiều người dùng"],
                    ["n8n Enterprise (Cloud)", "Liên hệ", "Từ ~5 triệu+", "Doanh nghiệp lớn, SLA"],
                    ["n8n Enterprise (Self-host)", "Liên hệ", "Từ ~5 triệu+", "Nhiều instance, SSO, audit log"],
                  ]}
                />

                <h3>Chi phí self-host thực tế tại Việt Nam</h3>

                <p>
                  Khi tự host n8n, bạn cần một VPS. Dưới đây là các lựa chọn phổ biến:
                </p>

                <ComparisonTable
                  headers={["Nhà cung cấp", "Gói phù hợp", "RAM", "Giá/tháng (VND)", "Lưu ý"]}
                  rows={[
                    ["DigitalOcean", "Basic Droplet", "2GB", "~150.000đ", "Ổn định, hỗ trợ tốt"],
                    ["Vultr", "Cloud Compute", "2GB", "~125.000đ", "Giá tốt, DC Singapore"],
                    ["Bizfly Cloud", "Basic", "2GB", "~120.000đ", "Dữ liệu trong Việt Nam"],
                    ["Hetzner", "CX22", "4GB", "~100.000đ", "Giá rẻ nhất, DC EU/US"],
                    ["Render.com", "Free tier", "512MB", "Miễn phí", "Test thôi, spin down khi idle"],
                  ]}
                />

                <CalloutBox type="success" title="Tổng chi phí thực tế">
                  Tự host n8n trên VPS 2GB: <strong>~120.000–150.000đ/tháng</strong>. So sánh với
                  Zapier Starter ($19.99/tháng = ~510.000đ) hay Make Basic ($9/tháng = ~230.000đ).
                  Với quy mô trung bình, tiết kiệm 300.000–400.000đ/tháng, sau 1 năm tiết kiệm{" "}
                  <strong>3.6–5 triệu đồng</strong>.
                </CalloutBox>

                {/* ==================== SECTION 6 ==================== */}
                <h2 id="cai-dat">Cách Cài Đặt n8n</h2>

                <p>
                  Có hai cách chính để bắt đầu với n8n: tự host bằng Docker (khuyến nghị cho
                  production) hoặc dùng n8n Cloud (không cần setup). Hướng dẫn từng bước dưới đây.
                </p>

                <h3 id="cai-dat-docker">Cách 1: Self-host bằng Docker (Khuyến nghị)</h3>

                <CalloutBox type="info" title="Yêu cầu">
                  VPS có ít nhất 1GB RAM (khuyến nghị 2GB), hệ điều hành Ubuntu 22.04, đã cài
                  Docker và Docker Compose. Cần tên miền nếu muốn dùng HTTPS.
                </CalloutBox>

                <p><strong>Bước 1:</strong> Tạo VPS Ubuntu 22.04 (2GB RAM) tại DigitalOcean, Vultr, hoặc Bizfly Cloud. SSH vào server:</p>

                <CodeBlock
                  title="Cài Docker trên VPS"
                  code={`ssh root@your-server-ip\ncurl -fsSL https://get.docker.com | sh\napt install -y docker-compose-plugin`}
                />

                <p><strong>Bước 2:</strong> Tạo thư mục project và file cấu hình Docker Compose:</p>

                <CodeBlock
                  title="docker-compose.yml"
                  lang="yaml"
                  code={`version: "3"\nservices:\n  n8n:\n    image: n8nio/n8n\n    restart: always\n    ports:\n      - "5678:5678"\n    volumes:\n      - n8n_data:/home/node/.n8n\n    environment:\n      - N8N_BASIC_AUTH_ACTIVE=true\n      - N8N_BASIC_AUTH_USER=admin\n      - N8N_BASIC_AUTH_PASSWORD=your-password\nvolumes:\n  n8n_data:`}
                />

                <p><strong>Bước 3:</strong> Khởi động n8n và kiểm tra logs:</p>

                <CodeBlock
                  title="Khởi động"
                  code={`docker compose up -d\ndocker compose logs -f n8n`}
                />

                <p><strong>Bước 4:</strong> Trỏ domain về IP server, cài Caddy hoặc nginx-proxy-manager để có HTTPS tự động.</p>

                <p><strong>Bước 5:</strong> Truy cập URL n8n, tạo tài khoản owner đầu tiên — xong!</p>

                <CalloutBox type="success" title="Hoàn tất!">
                  Sau 30-60 giây, n8n chạy tại <strong>http://your-server-ip:5678</strong>. Toàn bộ quá trình mất khoảng 10-15 phút.
                </CalloutBox>

                <WorkflowFlow
                  accentColor="#0EA5E9"
                  title="Luồng cài đặt self-host"
                  steps={[
                    { icon: <span className="text-lg">🖥️</span>, label: "Tạo VPS", sub: "Ubuntu 22.04, 2GB RAM" },
                    { icon: <span className="text-lg">🐳</span>, label: "Cài Docker", sub: "1 lệnh curl" },
                    { icon: <span className="text-lg">📝</span>, label: "docker-compose.yml", sub: "Copy template" },
                    { icon: <span className="text-lg">▶️</span>, label: "docker compose up", sub: "n8n chạy port 5678" },
                    { icon: <span className="text-lg">🔒</span>, label: "HTTPS + Domain", sub: "Tùy chọn nhưng nên làm" },
                    { icon: <span className="text-lg">✅</span>, label: "Sẵn sàng!", sub: "Tạo workflow đầu tiên" },
                  ]}
                />

                <h3 id="cai-dat-cloud">Cách 2: Dùng n8n Cloud (Không cần setup)</h3>

                <StepList steps={[
                  {
                    title: "Bước 1: Đăng ký tài khoản",
                    desc: "Vào n8n.io/cloud → Sign up. Điền email, tạo mật khẩu. n8n cung cấp 14 ngày trial miễn phí, không cần thẻ ngân hàng.",
                  },
                  {
                    title: "Bước 2: Chọn gói và thanh toán",
                    desc: "Sau trial, chọn Starter ($20/tháng) hoặc Pro ($50/tháng). Thanh toán bằng thẻ Visa/Mastercard hoặc PayPal. Lưu ý: cần thẻ quốc tế.",
                  },
                  {
                    title: "Bước 3: Truy cập n8n instance",
                    desc: "n8n Cloud cung cấp URL dạng your-name.app.n8n.cloud. Không cần setup gì thêm — đã có HTTPS, backup tự động, updates tự động.",
                  },
                  {
                    title: "Bước 4: Bắt đầu tạo workflow",
                    desc: "Khám phá template library (300+ templates có sẵn), hoặc tạo workflow mới từ đầu. n8n Cloud có bản trial đầy đủ tính năng Pro.",
                  },
                ]} />

                <CalloutBox type="tip" title="Nên chọn self-host hay Cloud?">
                  <strong>Self-host:</strong> Dành cho doanh nghiệp có ít nhất 1 người biết Linux
                  cơ bản, cần bảo mật dữ liệu, hoặc muốn tiết kiệm chi phí dài hạn.{" "}
                  <strong>Cloud:</strong> Dành cho người muốn bắt đầu ngay, không muốn quản lý
                  server, sẵn sàng trả phí. Bạn luôn có thể migrate từ Cloud sang self-host sau.
                </CalloutBox>

                {/* ==================== SECTION 7 ==================== */}
                <h2 id="workflow-sme">5 Workflow Phổ Biến Cho SME Việt Nam</h2>

                <p>
                  Dưới đây là 5 workflow n8n được các SME Việt Nam dùng nhiều nhất, từ đơn giản
                  đến phức tạp. Mỗi workflow có thể triển khai trong 1–4 giờ.
                </p>

                <h3>Workflow 1: Đồng bộ đơn hàng Shopee/Lazada → Google Sheet + MISA</h3>

                <p>
                  Dừng copy-paste đơn hàng thủ công. Workflow này tự động hóa toàn bộ quy trình
                  từ khi có đơn đến khi kế toán nhận được dữ liệu.
                </p>

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    { icon: <span className="text-lg">🛒</span>, label: "Shopee/Lazada", sub: "Đơn hàng mới (webhook)" },
                    { icon: <span className="text-lg">🔄</span>, label: "n8n Transform", sub: "Map + validate data" },
                    { icon: <span className="text-lg">📊</span>, label: "Google Sheet", sub: "Log tất cả đơn" },
                    { icon: <span className="text-lg">💼</span>, label: "MISA API", sub: "Tạo phiếu xuất kho" },
                    { icon: <span className="text-lg">📱</span>, label: "Telegram/Zalo", sub: "Thông báo kho hàng" },
                  ]}
                />

                <StepList steps={[
                  { title: "Trigger: Webhook nhận đơn từ Shopee/Lazada", desc: "Mỗi đơn mới → n8n nhận ngay lập tức qua webhook URL" },
                  { title: "Xử lý: Format dữ liệu", desc: "Chuẩn hóa tên sản phẩm, mã SKU, địa chỉ giao hàng" },
                  { title: "Action 1: Ghi vào Google Sheet", desc: "Log toàn bộ đơn theo ngày, dễ báo cáo" },
                  { title: "Action 2: Gọi MISA API", desc: "Tạo phiếu xuất kho tự động, không cần nhập tay" },
                  { title: "Action 3: Thông báo kho", desc: "Telegram/Zalo: 'Đơn mới #12345 — iPhone 15 x2 — Quận 7'" },
                ]} />

                <h3>Workflow 2: Lead Facebook Ads → CRM + Telegram ngay lập tức</h3>

                <p>
                  Tốc độ phản hồi lead là yếu tố quyết định chuyển đổi. Workflow này đảm bảo
                  không bỏ sót một lead nào, dù là 2h sáng.
                </p>

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    { icon: <span className="text-lg">📣</span>, label: "Facebook Lead Form", sub: "Webhook ngay lập tức" },
                    { icon: <span className="text-lg">📊</span>, label: "Google Sheet", sub: "Lưu lead database" },
                    { icon: <span className="text-lg">🤖</span>, label: "CRM Node", sub: "Tạo contact + deal" },
                    { icon: <span className="text-lg">📱</span>, label: "Telegram Sales", sub: "Alert tên + SĐT + nhu cầu" },
                    { icon: <span className="text-lg">📧</span>, label: "Email tự động", sub: "Gửi brochure cho lead" },
                  ]}
                />

                <h3>Workflow 3: AI Chatbot Zalo OA — Trả lời 24/7</h3>

                <p>
                  Kết hợp n8n + OpenAI để tạo chatbot Zalo OA thông minh, trả lời dựa trên
                  knowledge base của công ty bạn.
                </p>

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">💬</span>, label: "Zalo OA", sub: "Khách nhắn tin" },
                    { icon: <span className="text-lg">🔍</span>, label: "RAG Lookup", sub: "Tra FAQ + catalog" },
                    { icon: <span className="text-lg">🤖</span>, label: "OpenAI GPT-4o", sub: "Viết câu trả lời" },
                    { icon: <span className="text-lg">✅</span>, label: "Validate", sub: "Kiểm tra tone of voice" },
                    { icon: <span className="text-lg">💬</span>, label: "Gửi lại Zalo", sub: "< 5 giây" },
                  ]}
                />

                <h3>Workflow 4: Nhắc lịch hẹn + Theo dõi no-show</h3>

                <p>
                  Phù hợp với spa, phòng khám, salon, coaching. Tự động nhắc lịch và xử lý
                  trường hợp khách không đến.
                </p>

                <StepList steps={[
                  { title: "Khách đặt lịch qua form/Zalo/điện thoại", desc: "Data ghi vào Google Calendar + Sheet" },
                  { title: "24h trước: Zalo/SMS nhắc lịch lần 1", desc: "Kèm link xác nhận hoặc hủy" },
                  { title: "2h trước: Nhắc lần 2 + địa chỉ cụ thể", desc: "Google Maps link nếu khách mới lần đầu" },
                  { title: "Quá 15 phút không đến: Alert quản lý", desc: "Gọi điện xác nhận hoặc đặt lại lịch" },
                  { title: "Sau buổi hẹn: Thu thập feedback tự động", desc: "Rating 1–5 sao, gửi lên Google Reviews nếu ≥ 4" },
                ]} />

                <h3>Workflow 5: Báo cáo kinh doanh tự động gửi mỗi sáng</h3>

                <p>
                  Mỗi sáng 7h, workflow tự tổng hợp dữ liệu từ nhiều nguồn và gửi báo cáo tóm
                  tắt cho ban giám đốc — không cần nhân viên làm thủ công.
                </p>

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Cron 7:00 sáng", sub: "Mỗi ngày thứ 2–6" },
                    { icon: <span className="text-lg">📊</span>, label: "Pull dữ liệu", sub: "Sheet + MISA + CRM" },
                    { icon: <span className="text-lg">🤖</span>, label: "AI tóm tắt", sub: "Highlight bất thường" },
                    { icon: <span className="text-lg">📝</span>, label: "Tạo báo cáo", sub: "Google Doc / PDF" },
                    { icon: <span className="text-lg">📧</span>, label: "Email + Telegram", sub: "Gửi cho BGĐ" },
                  ]}
                />

                {/* ==================== SECTION 8 ==================== */}
                <h2 id="tich-hop-viet-nam">Tích Hợp n8n Với Tools Việt Nam</h2>

                <p>
                  Một câu hỏi phổ biến: "n8n có tích hợp được với các phần mềm Việt Nam không?"
                  Câu trả lời: <strong>Có — nhưng cách tích hợp khác nhau tùy từng tool.</strong>
                </p>

                <ComparisonTable
                  headers={["Tool Việt Nam", "Cách tích hợp", "Độ khó", "Ghi chú"]}
                  rows={[
                    ["Zalo OA", "Community node 'n8n-nodes-zalo' + HTTP Request", "Trung bình", "Cần ZCA (Zalo Cloud Account)"],
                    ["KiotViet", "HTTP Request (Public API)", "Dễ", "API docs đầy đủ tại api.kiotviet.vn"],
                    ["MISA AMIS", "HTTP Request (REST API)", "Trung bình", "Cần đăng ký API key, tài liệu API có"],
                    ["Shopee (Seller)", "HTTP Request (Open Platform API)", "Trung bình-khó", "Cần app approval từ Shopee"],
                    ["Lazada Seller", "HTTP Request (Open Platform)", "Trung bình-khó", "API key qua Lazada Open Platform"],
                    ["Tiki Seller", "HTTP Request (Tiki Open API)", "Trung bình", "Tài liệu tiếng Việt có sẵn"],
                    ["VNPAY", "HTTP Request (webhook + callback)", "Trung bình", "Verify signature cần Code node"],
                    ["Viettel SMS", "HTTP Request (ESMS API)", "Dễ", "Nhiều gateway SMS khác cũng tương tự"],
                  ]}
                />

                <h3>Tích hợp Zalo OA chi tiết</h3>

                <p>
                  Zalo OA là tích hợp phổ biến nhất với doanh nghiệp Việt. Có hai cách:
                </p>

                <StepList steps={[
                  {
                    title: "Cách 1: Community node (dễ hơn)",
                    desc: "Cài n8n-nodes-zalo từ npm. Node này wrap Zalo OA API, hỗ trợ gửi tin nhắn, broadcast, quản lý follower. Phù hợp người không muốn tự code.",
                  },
                  {
                    title: "Cách 2: HTTP Request node (linh hoạt hơn)",
                    desc: "Dùng node HTTP Request gọi trực tiếp Zalo OA API (developers.zalo.me/docs). Phù hợp khi cần tính năng mới nhất mà community node chưa cập nhật.",
                  },
                  {
                    title: "Lấy Access Token Zalo OA",
                    desc: "Đăng nhập oa.zalo.me → API & SDK → Tạo Ứng dụng → Lấy App ID + Secret. Dùng OAuth2 flow hoặc generate token trực tiếp cho server-to-server.",
                  },
                ]} />

                <CalloutBox type="tip" title="Mẹo với Zalo OA">
                  Zalo OA API miễn phí cho gửi tin nhắn tới follower. Tuy nhiên có giới hạn:
                  template tin nhắn phải được Zalo approve, không được gửi spam. Để gửi tin nhắn
                  ngoài 48h sau khi khách nhắn trước, phải dùng "Broadcast" (tính phí ZNS).
                </CalloutBox>

                <h3>Tích hợp KiotViet</h3>

                <p>
                  KiotViet có Public API khá đầy đủ, miễn phí cho tất cả gói trả phí. Các endpoint
                  hữu ích nhất với n8n:
                </p>

                <ul>
                  <li>
                    <strong>GET /orders:</strong> Lấy danh sách đơn hàng theo ngày — dùng cho báo
                    cáo tự động hàng ngày
                  </li>
                  <li>
                    <strong>POST /invoices:</strong> Tạo hóa đơn mới — khi nhận đơn từ Shopee/website
                  </li>
                  <li>
                    <strong>GET /products/inventories:</strong> Kiểm tra tồn kho — cảnh báo khi
                    hàng sắp hết
                  </li>
                  <li>
                    <strong>GET /customers:</strong> Đồng bộ khách hàng sang CRM hoặc email marketing
                  </li>
                </ul>

                {/* ==================== SECTION 9 ==================== */}
                <h2 id="uu-nhuoc-diem">Ưu Và Nhược Điểm Của n8n</h2>

                <p>
                  Không có công cụ nào hoàn hảo. Dưới đây là đánh giá trung thực từ góc nhìn
                  của người đã triển khai n8n cho nhiều doanh nghiệp Việt Nam:
                </p>

                <BeforeAfter
                  before={{
                    title: "Nhược điểm cần biết",
                    items: [
                      "Learning curve cao hơn Zapier — cần 1–2 tuần để quen",
                      "Self-host đòi hỏi kiến thức Linux/Docker cơ bản",
                      "Ít integrations chính thức hơn Zapier (400 vs 6.000)",
                      "Error handling cần tự cấu hình thủ công",
                      "Community nhỏ hơn, tài liệu tiếng Việt còn ít",
                      "Fair-code license — không dùng để bán lại như SaaS",
                    ],
                  }}
                  after={{
                    title: "Ưu điểm nổi bật",
                    items: [
                      "Self-host hoàn toàn miễn phí, không giới hạn executions",
                      "Dữ liệu ở lại server của bạn — bảo mật tối đa",
                      "70+ AI nodes tích hợp sâu, không tốn thêm tiền",
                      "Code node JS/Python cho logic phức tạp tùy ý",
                      "Sub-workflows, modularity cho hệ thống lớn",
                      "Chi phí dài hạn thấp hơn nhiều so với Zapier/Make",
                    ],
                  }}
                />

                <CalloutBox type="info" title="n8n phù hợp nhất với ai?">
                  n8n phù hợp nhất với: (1) doanh nghiệp xử lý dữ liệu nhạy cảm cần kiểm soát
                  hoàn toàn, (2) team có ít nhất 1 người biết công nghệ cơ bản, (3) doanh nghiệp
                  muốn tích hợp AI sâu vào workflow, (4) ai đã dùng Zapier và thấy chi phí tăng
                  quá nhanh theo scale.
                </CalloutBox>

                <BlogInlineCTA category="Pillar" slug="n8n-la-gi" variant="compact" />

                {/* ==================== SECTION 10 ==================== */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về n8n</h2>

                <FAQ items={faqItems} />

                {/* CTA */}
                <CalloutBox type="info" title="Bắt đầu với n8n nhưng không biết từ đâu?">
                  <p className="mb-3">
                    Autoflow.vn chuyên tư vấn và triển khai n8n cho doanh nghiệp Việt Nam. Từ
                    phân tích quy trình đến setup server, xây workflow, đến training team — chúng
                    tôi đồng hành cùng bạn.
                  </p>
                  <p className="mb-3">
                    <strong>Audit miễn phí 30 phút:</strong> Chia sẻ quy trình thủ công đang gặp
                    phải, nhận lộ trình automation cụ thể và ROI ước tính. Hoặc tham khảo{" "}
                    <a href="/blog/lo-trinh-tu-dong-hoa-sme">lộ trình 5 giai đoạn cho SME Việt Nam</a> để
                    biết n8n nằm ở đâu trong hành trình automation.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="n8n Là Gì? Hướng Dẫn Toàn Diện 2026" slug="n8n-la-gi" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
