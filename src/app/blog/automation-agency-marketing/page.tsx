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

export const metadata: Metadata = {
  title: "Automation Cho Agency Marketing — Quản Lý 10 Client Như 1",
  description:
    "Hướng dẫn tự động hóa agency marketing với n8n: onboarding client, báo cáo đa client, lên lịch social, routing lead. ROI 544%, tiết kiệm 12 giờ/tuần, +80% lead.",
  keywords: [
    "automation agency marketing",
    "n8n agency workflow",
    "tự động hóa agency",
    "quản lý client tự động",
    "marketing agency automation",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề agency khi scale", level: 2 },
  { id: "giai-phap", text: "4 workflow agency thực chiến", level: 2 },
  { id: "workflow-1", text: "Client onboarding tự động", level: 3 },
  { id: "workflow-2", text: "Báo cáo đa client tự động", level: 3 },
  { id: "workflow-3", text: "Social scheduling tập trung", level: 3 },
  { id: "workflow-4", text: "Lead routing thông minh", level: 3 },
  { id: "ket-qua", text: "Kết quả & số liệu", level: 2 },
  { id: "so-sanh", text: "Agency thủ công vs tự động hóa", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "Agency cần bao nhiêu người để vận hành hệ thống automation này?",
    a: "Một người có thể setup và maintain toàn bộ hệ thống sau khi đã được cài đặt. Thực tế là automation giải phóng team khỏi công việc lặp lại — một agency 5 người với automation tốt có thể phục vụ 15-20 client, trong khi không có automation thì 5 người chỉ manage được 5-7 client hiệu quả.",
  },
  {
    q: "Các workflow có hoạt động được với client dùng nhiều platform khác nhau không?",
    a: "Có. n8n có 400+ node bao phủ hầu hết marketing platforms: Google Ads, Facebook Ads, TikTok Ads, LinkedIn, Instagram, Google Analytics, GA4, Search Console, Mailchimp, HubSpot, Slack, và nhiều hơn nữa. Mỗi client có thể dùng stack khác nhau mà vẫn chạy qua cùng một workflow template.",
  },
  {
    q: "Báo cáo tự động có đủ chuyên nghiệp để gửi thẳng cho client không?",
    a: "Phụ thuộc vào template. Nhiều agency dùng Google Slides API hoặc Canva API để tạo report với design đẹp, logo client, màu sắc thương hiệu. Một số agency vẫn giữ bước human review cuối trước khi gửi — mất 5-10 phút thay vì 2-3 giờ tổng hợp thủ công.",
  },
  {
    q: "Nếu một client yêu cầu workflow đặc biệt, có customize được không?",
    a: "n8n rất linh hoạt — bạn có thể nhân bản workflow template rồi tùy chỉnh cho từng client. Thêm node đặc thù, thay đổi logic, kết nối API riêng của client. Đây là lợi thế lớn so với các tool automation cố định.",
  },
  {
    q: "Chi phí vận hành n8n cho agency là bao nhiêu?",
    a: "n8n Cloud từ $20/tháng (5,000 executions). Self-hosted trên VPS ~$10-20/tháng không giới hạn executions. So với việc thuê thêm 1 nhân viên để làm báo cáo thủ công (~15-20 triệu/tháng), ROI là rõ ràng ngay từ tháng đầu.",
  },
];

export default function AutomationAgencyMarketingBlog() {
  return (
    <>
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
              <span className="text-slate-600 truncate max-w-[300px]">Marketing</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold">
                Agency
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Marketing
              </span>
              <span className="text-xs text-slate-400">15 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Automation Cho Agency Marketing —{" "}
              <span className="gradient-text">Quản Lý 10 Client Như 1</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              544% ROI, 80% nhiều lead hơn, tiết kiệm 12 giờ mỗi tuần — đây là những con số thực
              từ các agency marketing đã triển khai automation. Vấn đề của bạn không phải thiếu client.
              Vấn đề là bạn đang dành quá nhiều thời gian cho công việc lặp lại thay vì công việc chiến lược.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "544%", label: "ROI trung bình", sub: "từ marketing automation (nguồn: Nucleus Research)", color: "text-accent" },
                  { value: "+80%", label: "nhiều lead hơn", sub: "agency dùng automation vs không dùng" },
                  { value: "12h", label: "tiết kiệm mỗi tuần", sub: "hết thủ công báo cáo, onboarding, scheduling" },
                  { value: "x2", label: "số client có thể phục vụ", sub: "cùng quy mô team, nhờ automation" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">Vấn Đề Của Agency Khi Bắt Đầu Scale</h2>

                <p>
                  Agency marketing có một nghịch lý kỳ lạ: càng nhiều client, càng ít thời gian để
                  làm việc tốt cho từng client. Thêm client số 8 đồng nghĩa với thêm 8 báo cáo hàng tuần,
                  8 onboarding process, 8 bộ social content cần lên lịch, 8 nguồn lead cần xử lý.
                </p>

                <CalloutBox type="warning" title="Cái bẫy tăng trưởng của agency">
                  Bạn có 5 client, mọi thứ chạy ổn. Thêm client thứ 6 → team overwhelmed. Thuê thêm người
                  → margin giảm → phải lấy thêm client để bù → lại overwhelmed. Đây là cái bẫy mà 80%
                  agency rơi vào. Lối thoát không phải thuê thêm người — mà là tự động hóa công việc lặp lại.
                </CalloutBox>

                <p>
                  Hãy thành thật: bao nhiêu phần trăm thời gian của team đang dành cho những việc này?
                  Tổng hợp báo cáo từ nhiều platform. Copy số liệu từ Google Ads sang spreadsheet.
                  Lên lịch đăng bài lên từng trang Facebook/Instagram. Gửi email chào mừng client mới.
                  Phân công lead mới cho đúng account manager. <strong>Tất cả đều có thể tự động hóa.</strong>
                </p>

                {/* Section 2 */}
                <h2 id="giai-phap">4 Workflow Agency Marketing Thực Chiến</h2>

                <p>
                  4 workflow dưới đây giải quyết 80% công việc lặp lại trong một agency marketing.
                  Triển khai đủ 4 workflow, team bạn lấy lại 10-12 giờ mỗi tuần để tập trung vào
                  strategy, creative, và client relationship.
                </p>

                <h3 id="workflow-1">Workflow 1: Client Onboarding Tự Động</h3>

                <p>
                  Từ lúc client ký hợp đồng đến lúc campaign đầu tiên live — thường mất 2-3 tuần
                  vì phải chờ từng bước thủ công. Workflow này rút xuống còn 3-4 ngày.
                </p>

                <StepList steps={[
                  { title: "Trigger: hợp đồng được ký (DocuSign / PandaDoc)", desc: "n8n webhook nhận notification khi client ký xong → bắt đầu chuỗi onboarding" },
                  { title: "Tạo workspace đầy đủ tự động", desc: "Tạo folder Google Drive, Notion workspace, Slack channel, Asana/Trello project — tất cả với naming convention chuẩn" },
                  { title: "Gửi onboarding email sequence", desc: "Email 1: chào mừng + link điền brief. Email 2 (ngày 2): checklist tài khoản cần cấp quyền. Email 3 (ngày 4): lịch kickoff meeting." },
                  { title: "Assign account manager và tạo task checklist", desc: "Dựa trên service package → assign đúng AM → tạo task onboarding checklist với due date tự động" },
                ]} />

                <WorkflowFlow
                  accentColor="#7C3AED"
                  steps={[
                    { icon: <span className="text-lg">✍️</span>, label: "Hợp đồng ký", sub: "DocuSign webhook" },
                    { icon: <span className="text-lg">🗂️</span>, label: "Tạo workspace", sub: "Drive + Notion + Slack" },
                    { icon: <span className="text-lg">📧</span>, label: "Email sequence", sub: "3 email tự động" },
                    { icon: <span className="text-lg">👤</span>, label: "Assign AM", sub: "+ Task checklist" },
                  ]}
                />

                <CalloutBox type="tip">
                  Thêm bước: sau khi client điền brief, n8n tự động tạo draft strategy deck trong Google Slides
                  với thông tin từ brief điền vào template. AM chỉ cần customize phần strategy thực sự —
                  tiết kiệm 2-3 giờ soạn presentation mỗi client mới.
                </CalloutBox>

                <h3 id="workflow-2">Workflow 2: Báo Cáo Đa Client Tự Động</h3>

                <p>
                  Đây thường là bài toán mất nhiều thời gian nhất của agency: tổng hợp số liệu từ
                  Google Ads, Facebook Ads, Google Analytics cho 10 client khác nhau mỗi tuần.
                  Workflow này làm toàn bộ trong 10 phút — không cần ai ngồi kéo số.
                </p>

                <StepList steps={[
                  { title: "Schedule: thứ Sáu 4 giờ chiều", desc: "n8n cron trigger khởi động quy trình pull data cho tất cả client" },
                  { title: "Pull data từ tất cả ad platforms", desc: "Google Ads API, Facebook Marketing API, TikTok Ads API → lấy: spend, impressions, clicks, conversions, CPA" },
                  { title: "Tổng hợp và tính KPIs theo template của từng client", desc: "So sánh với tuần trước, với mục tiêu tháng. Highlight những metric vượt hoặc dưới target" },
                  { title: "Tạo báo cáo và gửi cho client", desc: "Điền số vào Google Slides template có sẵn → gửi PDF qua email cho client. Nội bộ: gửi Google Sheet raw data lên Slack" },
                ]} />

                <WorkflowFlow
                  accentColor="#2563EB"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Thứ Sáu 4:00pm", sub: "Cron trigger" },
                    { icon: <span className="text-lg">📊</span>, label: "Pull all platforms", sub: "Google + Meta + TikTok" },
                    { icon: <span className="text-lg">🧮</span>, label: "Tính KPIs", sub: "So sánh target" },
                    { icon: <span className="text-lg">📄</span>, label: "Tạo report PDF", sub: "Google Slides → Email" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả thực tế">
                  Một agency performance marketing TP.HCM với 12 client: trước đây mất 1 ngày làm việc
                  mỗi tuần để tổng hợp báo cáo. Sau khi triển khai workflow này: 15 phút review báo cáo
                  AI tạo sẵn, cả nhóm lấy lại 6 giờ mỗi tuần để tập trung tối ưu campaign.
                </CalloutBox>

                <h3 id="workflow-3">Workflow 3: Social Scheduling Tập Trung</h3>

                <p>
                  Thay vì team content phải đăng nhập từng tài khoản Facebook/Instagram/LinkedIn
                  của từng client để lên lịch bài, toàn bộ quy trình được tập trung vào một điểm.
                </p>

                <StepList steps={[
                  { title: "Content creator submit bài qua Google Sheet / Airtable", desc: "Điền: client, platform, nội dung, caption, hashtag, ngày giờ đăng, trạng thái (draft/approved)" },
                  { title: "Trigger khi trạng thái chuyển sang Approved", desc: "n8n detect status change → bắt đầu lên lịch" },
                  { title: "Phân phối đến đúng platform của đúng client", desc: "Facebook API, Instagram API, LinkedIn API, TikTok API — mỗi client có credentials riêng được lưu an toàn" },
                  { title: "Thông báo sau khi đã lên lịch thành công", desc: "Slack DM cho content creator: 'Bài [tiêu đề] của [Client] đã được lên lịch đăng lúc [giờ]'" },
                ]} />

                <WorkflowFlow
                  accentColor="#EC4899"
                  steps={[
                    { icon: <span className="text-lg">📝</span>, label: "Content submit", sub: "Airtable / Google Sheet" },
                    { icon: <span className="text-lg">✅</span>, label: "Status: Approved", sub: "Trigger tự động" },
                    { icon: <span className="text-lg">🔀</span>, label: "Route đúng client", sub: "+ đúng platform" },
                    { icon: <span className="text-lg">📱</span>, label: "Lên lịch thành công", sub: "Slack confirm" },
                  ]}
                />

                <h3 id="workflow-4">Workflow 4: Lead Routing Thông Minh</h3>

                <p>
                  Lead từ nhiều nguồn (website, Facebook Ads, Google Ads, referral) đổ vào một điểm,
                  được phân loại và assign cho đúng account manager — không bao giờ bị bỏ sót.
                </p>

                <StepList steps={[
                  { title: "Thu thập lead từ tất cả nguồn", desc: "Facebook Lead Ads, Google Ads lead form, website form, Zalo OA — tất cả qua n8n webhook" },
                  { title: "Enrich và score lead tự động", desc: "Dựa trên: budget, service cần, ngành nghề, quy mô công ty → tính lead score (Hot / Warm / Cold)" },
                  { title: "Assign cho AM phù hợp", desc: "Hot lead ($10M+ budget) → Senior AM. Lead ngành F&B → AM chuyên F&B. Cân bằng workload tự động." },
                  { title: "Tạo CRM deal và nhắc nhở follow up", desc: "Tạo deal trong HubSpot/Pipedrive, gửi Slack DM cho AM được assign, nhắc follow up trong 2 giờ nếu chưa liên hệ" },
                ]} />

                <WorkflowFlow
                  accentColor="#059669"
                  steps={[
                    { icon: <span className="text-lg">📥</span>, label: "Lead từ mọi nguồn", sub: "FB / GG / Website / Zalo" },
                    { icon: <span className="text-lg">🏆</span>, label: "Score + classify", sub: "Hot / Warm / Cold" },
                    { icon: <span className="text-lg">🎯</span>, label: "Assign đúng AM", sub: "Theo expertise + workload" },
                    { icon: <span className="text-lg">📋</span>, label: "Tạo CRM deal", sub: "+ Nhắc follow up" },
                  ]}
                />

                {/* Section 3 */}
                <h2 id="ket-qua">Kết Quả & Số Liệu Thực Tế</h2>

                <StatCard stats={[
                  { value: "544%", label: "ROI từ marketing automation", sub: "Nucleus Research — trung bình ngành", color: "text-accent" },
                  { value: "12h", label: "tiết kiệm mỗi tuần", sub: "hết báo cáo, onboarding, scheduling thủ công" },
                  { value: "+80%", label: "nhiều lead hơn", sub: "nhờ lead routing không bỏ sót, phản hồi nhanh" },
                  { value: "x2", label: "số client cùng team", sub: "một agency 5 người manage được 15-20 client" },
                ]} />

                {/* Section 4 */}
                <h2 id="so-sanh">Agency Thủ Công vs Tự Động Hóa</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Agency chạy bằng tay",
                    items: [
                      "Onboarding client mất 2-3 tuần, nhiều bước thủ công",
                      "1 ngày làm việc mỗi tuần để tổng hợp báo cáo",
                      "Content team đăng nhập từng tài khoản để lên lịch bài",
                      "Lead đến từ nhiều nguồn, dễ bị bỏ sót hoặc phản hồi chậm",
                      "Càng nhiều client càng cần thuê thêm người",
                    ],
                  }}
                  after={{
                    title: "Sau — Agency với 4 workflow automation",
                    items: [
                      "Onboarding tự động trong 3-4 ngày, client trải nghiệm chuyên nghiệp",
                      "Báo cáo tạo tự động thứ Sáu, AM chỉ review 15 phút",
                      "Lên lịch tất cả client từ một bảng Airtable duy nhất",
                      "Lead 100% được capture, score, assign trong 5 phút",
                      "Scale gấp đôi client mà không cần tuyển thêm",
                    ],
                  }}
                />

                <ComparisonTable
                  headers={["Quy trình", "Thủ công", "Tự động (n8n)", "Tiết kiệm"]}
                  highlightCol={2}
                  rows={[
                    ["Onboarding 1 client", "2-3 tuần, 8-10 giờ nhân công", "3-4 ngày, 30 phút review", "~10 giờ/client"],
                    ["Báo cáo tuần (10 client)", "8-10 giờ/tuần", "15 phút review", "~9 giờ/tuần"],
                    ["Lên lịch social (50 bài/tuần)", "3-4 giờ/tuần", "Submit → auto schedule", "~3.5 giờ/tuần"],
                    ["Lead routing + CRM", "Mỗi ngày 1-2 giờ check", "Real-time, tự động", "~10 giờ/tuần"],
                    ["Tổng tiết kiệm/tuần", "—", "—", "22-25 giờ"],
                    ["Chi phí automation", "0 (nhưng tốn nhân sự)", "$20-50/tháng n8n", "ROI 544%"],
                  ]}
                />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Section 5 */}
                <h2 id="bat-dau">Bắt Đầu Như Thế Nào?</h2>

                <StepList steps={[
                  { title: "Kiểm kê công việc lặp lại trong agency", desc: "Liệt kê tất cả tasks nào team làm đi làm lại mỗi tuần. Ưu tiên task mất nhiều giờ nhất." },
                  { title: "Cài n8n và bắt đầu với báo cáo tự động", desc: "Workflow báo cáo có ROI rõ ràng nhất và dễ đo lường. Chạy ổn 2 tuần rồi thêm workflow khác." },
                  { title: "Chuẩn hóa quy trình trước khi tự động hóa", desc: "Automation nhân rộng quy trình — nếu quy trình lộn xộn thì automation sẽ nhân sự lộn xộn đó lên. Document rõ trước." },
                  { title: "Thêm dần từng workflow, đo lường từng bước", desc: "Mỗi tháng thêm 1 workflow mới. Đo giờ tiết kiệm được. Dùng số liệu đó để justify việc đầu tư tiếp theo." },
                ]} />

                <CalloutBox type="info" title="Agency của bạn đang lãng phí bao nhiêu giờ mỗi tuần?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi sẽ phân tích
                    quy trình agency của bạn, chỉ ra đúng những điểm có thể tự động hóa ngay,
                    và ước tính số giờ tiết kiệm được mỗi tuần.
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
          <BlogFooter title="Automation Agency Marketing" slug="automation-agency-marketing" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
