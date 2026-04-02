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
  title: "Notion + n8n: Biến Notion Thành CRM & Project Hub Tự Động 2026",
  description:
    "Hướng dẫn tích hợp Notion với n8n để tạo CRM tự động: form lead vào Notion, auto-enrich dữ liệu, phân công task, báo cáo tuần. 100M+ users, 14 actions + 2 triggers.",
  keywords: [
    "notion n8n crm",
    "notion automation",
    "n8n notion integration",
    "notion crm tự động",
    "notion project management automation",
  ],
};

const tocItems = [
  { id: "van-de", text: "Notion dùng thủ công = lãng phí", level: 2 },
  { id: "giai-phap", text: "4 workflow Notion + n8n", level: 2 },
  { id: "workflow-1", text: "Form lead vào Notion", level: 3 },
  { id: "workflow-2", text: "Auto-enrich dữ liệu", level: 3 },
  { id: "workflow-3", text: "Phân công task tự động", level: 3 },
  { id: "workflow-4", text: "Báo cáo tuần tự động", level: 3 },
  { id: "ket-qua", text: "Kết quả & số liệu", level: 2 },
  { id: "so-sanh", text: "Notion CRM vs CRM truyền thống", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "Notion có thể thay thế hoàn toàn CRM chuyên dụng như HubSpot không?",
    a: "Với doanh nghiệp nhỏ đến trung bình (dưới 500 lead/tháng), Notion + n8n hoàn toàn đủ dùng và linh hoạt hơn nhiều so với CRM truyền thống. Bạn tự thiết kế pipeline phù hợp với quy trình của mình, không bị ép theo template cứng nhắc. Khi scale lên, có thể migrate dữ liệu sang HubSpot mà vẫn giữ n8n làm automation layer.",
  },
  {
    q: "n8n Notion node hỗ trợ những action nào?",
    a: "n8n Notion node hỗ trợ 14 actions (tạo, cập nhật, đọc, tìm kiếm page; thao tác với database, block, user) và 2 triggers (page được thêm vào database, page được cập nhật). Đủ để xây dựng bất kỳ workflow CRM hay project management nào.",
  },
  {
    q: "Dữ liệu trong Notion có an toàn khi tích hợp với n8n không?",
    a: "Có. n8n dùng Notion API chính thức với OAuth 2.0. Bạn cấp quyền cho integration chỉ truy cập đúng database cần thiết. n8n self-hosted thì data không đi qua server của bên thứ ba. n8n Cloud có chứng chỉ SOC 2 Type II.",
  },
  {
    q: "Có thể dùng Notion free plan với n8n không?",
    a: "Có. Notion API hoạt động với tất cả các plan kể cả free. Tuy nhiên free plan có giới hạn 1,000 block. Với CRM và project management, nên dùng ít nhất Notion Plus ($8/tháng) để không bị giới hạn.",
  },
  {
    q: "Workflow n8n có thể update Notion real-time không?",
    a: "n8n có thể phản hồi webhook real-time (ví dụ: form submit → tạo Notion page trong vài giây) hoặc chạy theo schedule (polling định kỳ). Notion cũng hỗ trợ webhook trigger khi có thay đổi trong database.",
  },
];

export default function NotionN8nCrmBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="notion-n8n-crm" title="Notion + n8n: Biến Notion Thành CRM Tự Động" />
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
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Notion
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                CRM
              </span>
              <span className="text-xs text-slate-500">13 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Notion + n8n: Biến Notion Thành{" "}
              <span className="gradient-text">CRM & Project Hub Tự Động</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              100 triệu người dùng đang dùng Notion — nhưng 90% trong số đó vẫn copy-paste thủ công,
              không ai tự động hóa gì cả. Với n8n và 14 actions + 2 triggers trong Notion node,
              bạn có thể biến Notion thành CRM và project hub thực sự mạnh mẽ mà không cần thêm phần mềm nào.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "100M+", label: "người dùng Notion", sub: "công cụ workspace phổ biến nhất thế giới", color: "text-slate-700" },
                  { value: "14+2", label: "actions + triggers trong n8n", sub: "native Notion node, không cần code" },
                  { value: "5 giờ", label: "tiết kiệm mỗi tuần", sub: "không còn copy-paste dữ liệu thủ công" },
                  { value: "0 đồng", label: "chi phí CRM thêm", sub: "Notion thay thế hoàn toàn CRM truyền thống" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">Notion Dùng Thủ Công = Lãng Phí Tiềm Năng Khổng Lồ</h2>

                <p>
                  Notion cực kỳ linh hoạt — đó vừa là điểm mạnh vừa là điểm yếu. Vì linh hoạt,
                  nhiều team tạo database lead, tạo board task, nhưng tất cả data phải được nhập tay.
                  <strong> Mỗi form submit = ai đó phải ngồi copy vào Notion. Mỗi task mới = ai đó phải tạo tay.</strong>
                </p>

                <CalloutBox type="warning" title="Quy trình điển hình đang lãng phí thời gian của bạn">
                  Lead điền form Typeform → marketing nhận email → copy thông tin sang Notion database.
                  Sales manager xem → assign cho sales rep → nhắn Slack cho rep biết. Rep tạo task
                  follow up tay. Cuối tuần tổng hợp báo cáo từ Notion sang Google Sheet. Tất cả đều thủ công.
                  Tất cả đều có thể tự động hóa hoàn toàn.
                </CalloutBox>

                <p>
                  Mất 5-8 giờ nhân công mỗi tuần chỉ để làm những việc lặp lại này.
                  Nhân với 52 tuần, nhân với lương nhân viên — bạn đang trả tiền cho những việc
                  mà n8n làm được trong vài giây, không bao giờ quên, không bao giờ sai.
                </p>

                <p>
                  Điều thú vị là Notion API rất mạnh — hỗ trợ đầy đủ CRUD trên database, page, block.
                  Và n8n có native Notion node với <strong>14 actions + 2 triggers</strong>, nghĩa là
                  bạn có thể làm mọi thứ chỉ bằng kéo thả, không cần viết một dòng code nào.
                </p>

                {/* Section 2 */}
                <h2 id="giai-phap">4 Workflow Notion + n8n Biến Đổi Quy Trình Làm Việc</h2>

                <p>
                  Dưới đây là 4 workflow có thể triển khai ngay — từ đơn giản đến phức tạp,
                  mỗi workflow giải quyết một điểm đau cụ thể trong quy trình CRM và project management.
                </p>

                <h3 id="workflow-1">Workflow 1: Form Lead Tự Động Vào Notion</h3>

                <p>
                  Mỗi khi có người điền form đăng ký, liên hệ, hoặc yêu cầu demo —
                  thông tin xuất hiện ngay trong Notion database của bạn, không cần ai can thiệp.
                </p>

                <StepList steps={[
                  { title: "Khách điền form (Typeform / Tally / Google Form)", desc: "n8n webhook nhận data ngay khi submit — tên, email, công ty, nhu cầu, nguồn traffic" },
                  { title: "n8n validate và làm sạch data", desc: "Chuẩn hóa định dạng phone, email. Loại bỏ spam entries. Gắn tag nguồn (Facebook Ads, Google Ads, Organic...)" },
                  { title: "Tạo page mới trong Notion CRM database", desc: "Điền đầy đủ properties: Name, Email, Company, Stage (New Lead), Source, Created date" },
                  { title: "Gửi thông báo cho sales team", desc: "Slack message: 'Lead mới: [Tên] từ [Công ty] — [Link Notion]'" },
                ]} />

                <WorkflowFlow
                  accentColor="#000000"
                  steps={[
                    { icon: <span className="text-lg">📝</span>, label: "Form submit", sub: "Typeform / Tally" },
                    { icon: <span className="text-lg">⚡</span>, label: "n8n validate", sub: "Clean + tag data" },
                    { icon: <span className="text-lg">📋</span>, label: "Notion page tạo", sub: "CRM database" },
                    { icon: <span className="text-lg">💬</span>, label: "Slack notify", sub: "Sales team alert" },
                  ]}
                />

                <CalloutBox type="tip">
                  Thêm bước UTM tracking: lấy utm_source, utm_campaign từ URL parameters khi khách điền form.
                  Lưu vào Notion để biết chính xác chiến dịch nào đang mang về lead chất lượng nhất.
                  Kết hợp với Google Analytics để có bức tranh toàn diện.
                </CalloutBox>

                <h3 id="workflow-2">Workflow 2: Auto-Enrich Dữ Liệu Lead</h3>

                <p>
                  Sau khi lead vào Notion, workflow này tự động làm giàu thông tin —
                  giúp sales rep có đủ context trước khi gọi điện mà không phải research thủ công
                  mất 15-20 phút mỗi lead.
                </p>

                <StepList steps={[
                  { title: "Trigger khi Notion page được tạo mới", desc: "n8n Notion trigger: 'page added to database' → bắt đầu quy trình enrich" },
                  { title: "Tra cứu thông tin công ty qua Clearbit / Apollo", desc: "Dùng email domain để lấy: quy mô công ty, ngành nghề, website, LinkedIn, ARR estimate" },
                  { title: "Tìm LinkedIn profile người liên hệ", desc: "Enrich với title, seniority level, số năm kinh nghiệm — đánh giá đây có phải decision maker không" },
                  { title: "Cập nhật Notion page với thông tin đã enrich", desc: "Update properties: Company Size, Industry, LinkedIn URL, Seniority, Lead Score (tính tự động)" },
                ]} />

                <WorkflowFlow
                  accentColor="#6B7280"
                  steps={[
                    { icon: <span className="text-lg">🔔</span>, label: "Notion trigger", sub: "Page được tạo mới" },
                    { icon: <span className="text-lg">🔍</span>, label: "Clearbit lookup", sub: "Company + contact" },
                    { icon: <span className="text-lg">💼</span>, label: "LinkedIn enrich", sub: "Title + seniority" },
                    { icon: <span className="text-lg">🏆</span>, label: "Lead scoring", sub: "Cập nhật Notion" },
                  ]}
                />

                <h3 id="workflow-3">Workflow 3: Phân Công Task Tự Động</h3>

                <p>
                  Khi một lead chuyển sang stage mới trong CRM, các task cần thiết được tạo
                  và assign tự động — không ai quên follow up nữa, không lead nào rơi vào khoảng trống.
                </p>

                <StepList steps={[
                  { title: "Trigger khi stage của lead thay đổi", desc: "n8n detect: Notion page property 'Stage' thay đổi từ 'New Lead' → 'Contacted'" },
                  { title: "Tạo task checklist tương ứng với stage", desc: "Stage 'Proposal': tạo tasks 'Soạn proposal', 'Schedule demo', 'Send pricing'. Due date tự tính." },
                  { title: "Assign task cho đúng người", desc: "Dựa trên region / product / workload của team → assign cho sales rep phù hợp nhất" },
                  { title: "Nhắc nhở khi task quá hạn", desc: "Schedule trigger mỗi sáng: check task quá hạn → Slack DM cho người được assign" },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">🔄</span>, label: "Stage thay đổi", sub: "Notion trigger" },
                    { icon: <span className="text-lg">📋</span>, label: "Tạo task list", sub: "Theo stage template" },
                    { icon: <span className="text-lg">👤</span>, label: "Assign người làm", sub: "Dựa trên workload" },
                    { icon: <span className="text-lg">⏰</span>, label: "Nhắc khi overdue", sub: "Slack DM tự động" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả thực tế">
                  Một agency digital marketing 8 người dùng workflow này: tỷ lệ follow up đúng hạn
                  tăng từ 60% lên 95%, không còn lead bị rơi vào quên lãng giữa các stage.
                  Sales cycle rút ngắn trung bình 4 ngày vì mọi người đều biết phải làm gì tiếp theo.
                </CalloutBox>

                <h3 id="workflow-4">Workflow 4: Báo Cáo Tuần Tự Động</h3>

                <p>
                  Thay vì mất 2 giờ mỗi thứ Sáu ngồi tổng hợp số liệu từ Notion,
                  workflow này tự thu thập, tính toán và gửi báo cáo — đúng 9 giờ sáng thứ Hai,
                  đợi bạn khi vừa vào làm.
                </p>

                <StepList steps={[
                  { title: "Schedule trigger: thứ Hai 9:00 sáng", desc: "n8n cron trigger khởi động quy trình báo cáo tuần tự động" },
                  { title: "Query Notion database để lấy số liệu tuần trước", desc: "Đếm lead mới, lead theo stage, deal closed, revenue. Filter theo date range." },
                  { title: "Tính toán KPIs và so sánh với tuần trước", desc: "Conversion rate, average deal size, pipeline velocity. Tô màu đỏ/xanh theo trend." },
                  { title: "Gửi báo cáo qua Slack + email", desc: "Slack channel #weekly-report + email cho manager với summary và chart từ Google Sheets" },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Thứ Hai 9:00", sub: "Cron trigger" },
                    { icon: <span className="text-lg">📊</span>, label: "Query Notion", sub: "Số liệu 7 ngày qua" },
                    { icon: <span className="text-lg">🧮</span>, label: "Tính KPIs", sub: "Conversion, revenue" },
                    { icon: <span className="text-lg">📧</span>, label: "Gửi báo cáo", sub: "Slack + Email" },
                  ]}
                />

                {/* Section 3 */}
                <h2 id="ket-qua">Kết Quả & Số Liệu Thực Tế</h2>

                <StatCard stats={[
                  { value: "5h", label: "tiết kiệm mỗi tuần", sub: "không còn copy-paste thủ công", color: "text-accent" },
                  { value: "95%", label: "follow up đúng hạn", sub: "từ 60% khi làm thủ công" },
                  { value: "0 phút", label: "để tạo báo cáo tuần", sub: "tự động hoàn toàn mỗi thứ Hai" },
                  { value: "+28%", label: "tốc độ convert lead", sub: "nhờ enrich data và assign đúng người" },
                ]} />

                {/* Section 4 */}
                <h2 id="so-sanh">Notion CRM vs Phần Mềm CRM Truyền Thống</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Notion không automation",
                    items: [
                      "Copy-paste lead từ form vào Notion thủ công",
                      "Sales rep phải tự research thông tin công ty",
                      "Task follow up tạo tay, dễ quên và bỏ sót",
                      "Báo cáo tuần mất 2 giờ tổng hợp thủ công",
                      "Lead rơi vào quên lãng giữa các stage",
                    ],
                  }}
                  after={{
                    title: "Sau — Notion + n8n tự động",
                    items: [
                      "Lead tự động vào Notion ngay khi submit form",
                      "Thông tin công ty, LinkedIn enrich tự động",
                      "Task checklist tạo và assign theo đúng stage",
                      "Báo cáo gửi tự động 9h sáng thứ Hai",
                      "Nhắc nhở overdue task tự động qua Slack",
                    ],
                  }}
                />

                <ComparisonTable
                  headers={["Tiêu chí", "HubSpot CRM", "Salesforce", "Notion + n8n"]}
                  highlightCol={3}
                  rows={[
                    ["Chi phí/tháng", "Từ $15/user", "Từ $25/user", "Notion $8/user + n8n ~$20 flat"],
                    ["Tùy chỉnh pipeline", "Trung bình", "Cao (phức tạp)", "Hoàn toàn tự do"],
                    ["Automation", "Có (giới hạn free)", "Có (đắt)", "n8n không giới hạn"],
                    ["Đường cong học tập", "Trung bình", "Cao", "Thấp (Notion quen thuộc)"],
                    ["Integration", "800+ apps", "5000+ apps", "n8n 400+ nodes"],
                    ["Phù hợp team size", "Mọi quy mô", "Enterprise", "1–100 người"],
                    ["Ownership dữ liệu", "Vendor-locked", "Vendor-locked", "Hoàn toàn của bạn"],
                  ]}
                />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Section 5 */}
                <h2 id="bat-dau">Bắt Đầu Như Thế Nào?</h2>

                <StepList steps={[
                  { title: "Tạo Notion Integration", desc: "Vào notion.so/my-integrations → tạo integration → lấy Internal Integration Token" },
                  { title: "Share database với integration", desc: "Mở Notion database → Share → Invite → chọn integration vừa tạo" },
                  { title: "Thêm Notion credentials vào n8n", desc: "n8n Credentials → Notion API → nhập token. Test connection." },
                  { title: "Bắt đầu với Workflow 1 (form → Notion)", desc: "Đơn giản nhất, thấy kết quả ngay. Chạy ổn rồi thêm enrich, task assignment, báo cáo." },
                ]} />

                <CalloutBox type="info" title="Muốn có Notion CRM template miễn phí?">
                  <p className="mb-2">
                    Đặt lịch <strong>tư vấn 30 phút</strong> — chúng tôi sẽ tặng kèm
                    Notion CRM template và n8n workflow JSON sẵn sàng import, phù hợp với ngành của bạn.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Nhận template miễn phí →
                  </a>
                </CalloutBox>

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Notion + n8n CRM" slug="notion-n8n-crm" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
