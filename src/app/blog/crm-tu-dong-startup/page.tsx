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
  title: "CRM Tự Động Cho Startup B2B — Đừng Để Lead Rơi",
  description:
    "Hướng dẫn triển khai CRM automation cho startup B2B: tự động hóa lead capture, follow-up, lead scoring và báo cáo pipeline. ROI $8.71/$1, tăng 34% năng suất sale với n8n.",
  keywords: [
    "crm automation startup",
    "crm tự động b2b",
    "crm tự động hóa",
    "n8n crm startup",
    "lead scoring tự động",
    "follow-up tự động b2b",
    "pipeline report tự động",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề: lead rơi trong startup B2B", level: 2 },
  { id: "thong-ke", text: "Con số nói lên tất cả", level: 2 },
  { id: "giai-phap", text: "4 workflow CRM tự động cho B2B", level: 2 },
  { id: "workflow-1", text: "Workflow 1: Lead capture → CRM tự động", level: 3 },
  { id: "workflow-2", text: "Workflow 2: Chuỗi follow-up tự động", level: 3 },
  { id: "workflow-3", text: "Workflow 3: Lead scoring thông minh", level: 3 },
  { id: "workflow-4", text: "Workflow 4: Báo cáo pipeline hàng tuần", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi có CRM tự động", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs CRM tự động", level: 2 },
  { id: "chi-phi-roi", text: "Chi phí và ROI thực tế", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Triển khai CRM tự động từng bước", level: 2 },
];

const faqItems = [
  {
    q: "Startup bao nhiêu người thì cần CRM tự động hóa?",
    a: "Ngay khi bạn có hơn 1 sale và nhận hơn 20 lead/tháng, bạn đã cần CRM. Lý do: với 2 sale trở lên, không có hệ thống tập trung thì lead bị trùng lặp, mâu thuẫn về ownership, và không ai theo dõi được toàn bộ pipeline. CRM tự động hóa giải quyết cả hai vấn đề cùng lúc — tập trung dữ liệu và tự động hóa các tác vụ lặp đi lặp lại.",
  },
  {
    q: "n8n khác gì so với HubSpot hay Salesforce trong bối cảnh startup?",
    a: "HubSpot và Salesforce là CRM all-in-one với giao diện sẵn và rất nhiều tính năng — nhưng chi phí leo thang nhanh (HubSpot Sales Pro: $90/user/tháng, Salesforce: $150+/user/tháng). n8n là automation engine — bạn kết nối bất kỳ CRM nào (kể cả Google Sheet) với mọi công cụ khác. Với startup giai đoạn đầu, n8n + Google Sheet là combo tiết kiệm nhất; scale lên thì n8n vẫn kết nối được HubSpot/Salesforce mà không cần viết lại workflow.",
  },
  {
    q: "Lead scoring B2B khác gì B2C?",
    a: "B2C thường score theo hành vi cá nhân (trang xem, thời gian trên site). B2B cần score theo hai lớp: firmographic (quy mô công ty, ngành, ARR) và behavioral (mở email, đặt demo, xem pricing page, số lần liên hệ). Điểm firmographic thường cố định khi nhập; điểm behavioral cộng dồn theo thời gian. n8n có thể tự động hóa cả hai lớp bằng cách kéo dữ liệu từ nhiều nguồn (form, email tracking, website analytics) và tính tổng điểm trong CRM.",
  },
  {
    q: "Thời gian phản hồi 42 giờ có phải là thực tế với startup Việt Nam không?",
    a: "Con số 42 giờ là trung bình toàn cầu từ nghiên cứu của InsideSales.com — thực tế startup Việt Nam có thể còn chậm hơn do thiếu hệ thống chuẩn hóa. Điều quan trọng hơn là nghiên cứu cũng chỉ ra: phản hồi trong 5 phút đầu tăng 21 lần khả năng qualify lead so với 30 phút. Trong B2B, khách hàng tiềm năng thường đang so sánh 3–5 vendor cùng lúc — ai phản hồi chuyên nghiệp và nhanh nhất có lợi thế cạnh tranh rõ ràng.",
  },
  {
    q: "Workflow follow-up tự động có bị coi là spam không?",
    a: "Không, nếu làm đúng. Spam xảy ra khi nội dung không liên quan, tần suất quá dày, và không có opt-out. Follow-up B2B hiệu quả cần: cá nhân hóa theo ngành/vấn đề cụ thể của prospect, cung cấp giá trị thực ở mỗi email (case study, insight, công cụ hữu ích), khoảng cách hợp lý (ngày 1, 3, 7, 14, 30), và luôn có option để unsubscribe hoặc dừng chuỗi khi khách phản hồi. n8n xử lý tất cả điều này — dừng chuỗi ngay khi detect phản hồi từ prospect.",
  },
  {
    q: "Chi phí triển khai hệ thống CRM tự động cho startup khoảng bao nhiêu?",
    a: "Chi phí phụ thuộc vào quy mô và độ phức tạp. Phương án tiết kiệm nhất: n8n self-hosted (miễn phí) + Google Sheet (miễn phí) + email marketing tool cơ bản (~$20–30/tháng) — chi phí setup 1 lần khoảng 5–10 triệu. Nếu dùng n8n Cloud, thêm $20–50/tháng. So với ROI $8.71 trên mỗi $1 đầu tư vào CRM (Nucleus Research), chi phí này thường hoàn vốn trong vòng 1–2 tháng đầu tiên.",
  },
];

export default function CRMTuDongStartupBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="crm-tu-dong-startup" title="CRM Tự Động Cho Startup B2B — Đừng Để Lead Rơi" />
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
              <span className="text-slate-600 truncate max-w-[300px]">Startup</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                Startup B2B
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                CRM Automation
              </span>
              <span className="text-xs text-slate-400">15 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              CRM Tự Động Cho Startup B2B —{" "}
              <span className="gradient-text">Đừng Để Lead Rơi</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Trung bình một startup B2B mất 42 giờ để phản hồi lead mới.
              Trong khi đó, 78% khách hàng B2B mua từ vendor phản hồi đầu tiên.
              Đây là hệ thống 4 workflow biến CRM từ công cụ ghi chép thành cỗ máy doanh thu tự động.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Hook StatCard */}
                <StatCard
                  stats={[
                    {
                      value: "42h",
                      label: "thời gian phản hồi lead trung bình B2B",
                      sub: "con số đang giết doanh thu của bạn",
                      color: "text-red-500",
                    },
                    {
                      value: "5 phút",
                      label: "phản hồi = 21x khả năng qualify",
                      sub: "so với chờ 30 phút",
                      color: "text-amber-500",
                    },
                    {
                      value: "$8.71",
                      label: "ROI trên mỗi $1 đầu tư vào CRM",
                      sub: "Nucleus Research, trung bình ngành",
                      color: "text-accent",
                    },
                    {
                      value: "+34%",
                      label: "năng suất sale tăng",
                      sub: "khi tự động hóa CRM đúng cách",
                      color: "text-primary",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Vấn Đề: Lead Rơi Trong Startup B2B</h2>

                <p>
                  Bạn đang chạy startup B2B. Inbound lead về đều qua website, LinkedIn,
                  hay sự kiện networking. Nhưng cuối tháng nhìn lại — tỷ lệ chuyển đổi thấp hơn nhiều
                  so với kỳ vọng. Và bạn không biết tại sao.
                </p>

                <p>
                  Vấn đề thường không nằm ở chất lượng sản phẩm hay năng lực của sale.
                  Vấn đề nằm ở khoảng trống giữa lúc lead điền form và lúc ai đó thực sự
                  làm gì đó với thông tin đó.
                </p>

                <CalloutBox type="warning" title="Hành trình điển hình của một lead B2B không có CRM tự động">
                  Lead điền form demo lúc 2 giờ chiều thứ Tư. Email thông báo rơi vào inbox của founder.
                  Founder đang họp, đọc email lúc 5 giờ, định forward cho sale nhưng quên.
                  Sale nhận thông tin lúc sáng thứ Năm, gọi lại lúc 10 giờ — 20 tiếng sau.
                  Khách đã book demo với 2 đối thủ và một bên đã chốt xong trong buổi sáng hôm đó.{" "}
                  <strong>Lead không chết vì sản phẩm kém — lead chết vì quy trình rỗng.</strong>
                </CalloutBox>

                <p>
                  Đây là pattern phổ biến đến mức đau lòng trong startup B2B giai đoạn sớm.
                  Team sale năng động, sản phẩm tốt, nhưng không có hệ thống tự động làm cầu nối
                  giữa marketing và sales. Kết quả: hàng chục lead mỗi tháng bị rơi vào khoảng trống.
                </p>

                <p>
                  Và vấn đề càng trầm trọng hơn khi scale: càng nhiều lead, khoảng trống càng rộng.
                  Hiring thêm sale không giải quyết được structural problem này — bạn cần một hệ thống,
                  không phải thêm người.
                </p>

                {/* Section 2: Thống kê */}
                <h2 id="thong-ke">Con Số Nói Lên Tất Cả</h2>

                <p>
                  Trước khi đi vào giải pháp, hãy nhìn vào quy mô của vấn đề.
                  Những số liệu dưới đây không phải để hù dọa — chúng là thực tế thị trường
                  mà bạn đang cạnh tranh trong đó.
                </p>

                <StatCard
                  stats={[
                    {
                      value: "65%",
                      label: "doanh nghiệp triển khai CRM trong 5 năm đầu",
                      sub: "đối thủ của bạn đã làm rồi",
                      color: "text-blue-600",
                    },
                    {
                      value: "99%",
                      label: "doanh nghiệp B2B dùng CRM cho retention",
                      sub: "giữ khách cũ cũng quan trọng như chốt mới",
                      color: "text-violet-600",
                    },
                    {
                      value: "+29%",
                      label: "doanh thu tăng khi có CRM đúng cách",
                      sub: "Salesforce State of Sales Report",
                      color: "text-emerald-600",
                    },
                    {
                      value: "78%",
                      label: "khách B2B mua từ vendor phản hồi đầu tiên",
                      sub: "tốc độ là lợi thế cạnh tranh thực sự",
                      color: "text-red-500",
                    },
                  ]}
                />

                <p>
                  65% doanh nghiệp triển khai CRM trong 5 năm đầu — nghĩa là đối thủ cạnh tranh của bạn
                  rất có thể đã có hệ thống rồi. Và 99% B2B dùng CRM không chỉ để chốt mới mà còn
                  để giữ khách cũ: upsell, cross-sell, renewal. Đây là toàn bộ vòng đời doanh thu,
                  không chỉ là phần đầu phễu.
                </p>

                <CalloutBox type="info" title="Tại sao 5 phút tạo ra sự khác biệt 21 lần?">
                  Nghiên cứu của InsideSales.com trên 100,000 cuộc gọi cho thấy:{" "}
                  <strong>phản hồi trong 5 phút đầu tăng 21 lần khả năng qualify lead</strong>{" "}
                  so với chờ 30 phút. Lý do tâm lý: khách hàng B2B thường điền form trong trạng thái
                  "đang có vấn đề cần giải quyết ngay" — cửa sổ mua hàng hẹp hơn bạn nghĩ.
                  Càng để lâu, urgency càng giảm, và họ càng có thêm thời gian để tìm giải pháp thay thế.
                </CalloutBox>

                {/* Section 3: 4 Workflows */}
                <h2 id="giai-phap">4 Workflow CRM Tự Động Cho Startup B2B</h2>

                <p>
                  Bốn workflow này được thiết kế để vá đúng những lỗ hổng phổ biến nhất trong
                  quy trình sales B2B của startup: từ lead capture đến follow-up, scoring, và
                  visibility của toàn bộ pipeline. Bạn không cần triển khai cả bốn cùng lúc —
                  ưu tiên theo thứ tự và build dần.
                </p>

                {/* Workflow 1 */}
                <h3 id="workflow-1">Workflow 1: Lead Capture Tự Động Vào CRM</h3>

                <p>
                  Đây là nền tảng của mọi thứ. Mọi lead từ bất kỳ nguồn nào —
                  website form, LinkedIn, sự kiện, cold outreach — phải được ghi vào CRM
                  ngay lập tức, tự động, không cần tay người. Không có bước này thì
                  không có quy trình nào hoạt động được.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Nhận lead từ nhiều nguồn cùng lúc",
                      desc: "Webhook từ website form, LinkedIn Lead Gen Form API, import danh sách sự kiện CSV, hay thậm chí email tự động — n8n gộp tất cả vào một pipeline xử lý duy nhất",
                    },
                    {
                      title: "Làm giàu dữ liệu tự động (enrichment)",
                      desc: "Tự động tra cứu công ty qua Clearbit hoặc Apollo: quy mô, ngành, ARR ước tính, LinkedIn URL — biến một địa chỉ email thành hồ sơ đầy đủ",
                    },
                    {
                      title: "Dedup và validate trước khi ghi",
                      desc: "Kiểm tra trùng lặp theo email và tên công ty; validate định dạng email và số điện thoại; gắn nguồn (UTM, channel) và timestamp chính xác",
                    },
                    {
                      title: "Ghi vào CRM với đầy đủ context",
                      desc: "Tạo record mới trong CRM (Google Sheet, HubSpot, hoặc bất kỳ tool nào) với status 'New — Uncontacted', assigned sale, và priority flag dựa trên firmographic ban đầu",
                    },
                    {
                      title: "Thông báo sale phụ trách ngay lập tức",
                      desc: "Gửi Slack hoặc Zalo với đầy đủ thông tin: tên, công ty, vị trí, nguồn, và link trực tiếp vào CRM record — sale không cần tìm kiếm, nhấn link là xong",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#7C3AED"
                  steps={[
                    {
                      icon: <span className="text-lg">🌐</span>,
                      label: "Lead từ mọi nguồn",
                      sub: "Web, LinkedIn, Event, Email",
                    },
                    {
                      icon: <span className="text-lg">⚡</span>,
                      label: "n8n xử lý",
                      sub: "Enrichment + validate",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "Dedup & check",
                      sub: "Không lead nào bị trùng",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Ghi vào CRM",
                      sub: "Đầy đủ context, tự động",
                    },
                    {
                      icon: <span className="text-lg">🔔</span>,
                      label: "Alert sale ngay",
                      sub: "Slack / Zalo real-time",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Với B2B, firmographic data quan trọng hơn demographic. Khi lead về, hãy tự động
                  kiểm tra: công ty có bao nhiêu nhân viên? Ngành gì? Series mấy rồi?
                  Những thông tin này giúp sale chuẩn bị pitch đúng trước khi gọi —
                  thay vì hỏi những câu cơ bản đáng lẽ đã biết.
                </CalloutBox>

                {/* Workflow 2 */}
                <h3 id="workflow-2">Workflow 2: Chuỗi Follow-Up Tự Động Theo Ngữ Cảnh</h3>

                <p>
                  Phần lớn deal B2B không chốt trong cuộc gọi đầu tiên. Nghiên cứu cho thấy
                  trung bình cần 5–8 điểm chạm trước khi prospect ra quyết định — nhưng
                  80% sale bỏ cuộc sau lần tiếp xúc thứ 2. Workflow này đảm bảo
                  không lead nào bị bỏ rơi giữa chừng, dù sale quên hay đang bận.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Ngày 1: Email xác nhận + tài liệu value",
                      desc: "Tự động gửi case study liên quan đến ngành của prospect, one-pager sản phẩm, và link đặt lịch demo — được cá nhân hóa theo thông tin firmographic đã có",
                    },
                    {
                      title: "Ngày 3: Touchpoint giá trị, không bán hàng",
                      desc: 'Email ngắn với insight hữu ích: "3 điều công ty [ngành của họ] thường bỏ qua khi chọn [loại sản phẩm của bạn]" — xây dựng trust trước khi push',
                    },
                    {
                      title: "Ngày 7: Social proof có target",
                      desc: "Case study từ công ty tương tự (cùng ngành, cùng quy mô) với số liệu cụ thể — không phải testimonial chung chung mà là proof point sát với situation của họ",
                    },
                    {
                      title: "Ngày 14: Offer cụ thể với deadline",
                      desc: '"Chúng tôi có slot demo còn lại tuần này — free 30 phút, không obligation. Sau đó slot sẽ kín đến tháng sau." — tạo urgency thực sự, không giả tạo',
                    },
                    {
                      title: "Ngày 30: Break-up email hoặc long-term nurture",
                      desc: "Nếu vẫn im lặng: break-up email lịch sự để đóng loop. Nếu có tín hiệu interest: chuyển sang long-term nurture sequence mỗi 2 tuần với content giá trị",
                    },
                    {
                      title: "Dừng chuỗi ngay khi có tín hiệu",
                      desc: "Bất kỳ phản hồi nào — reply email, click link, book demo — n8n tự động dừng sequence, cập nhật CRM, và alert sale để follow up ngay lập tức",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#059669"
                  steps={[
                    {
                      icon: <span className="text-lg">📩</span>,
                      label: "Lead vào CRM",
                      sub: "Trigger sequence",
                    },
                    {
                      icon: <span className="text-lg">💌</span>,
                      label: "Ngày 1: Value",
                      sub: "Case study + lịch demo",
                    },
                    {
                      icon: <span className="text-lg">💡</span>,
                      label: "Ngày 3–7: Trust",
                      sub: "Insight + social proof",
                    },
                    {
                      icon: <span className="text-lg">🎯</span>,
                      label: "Ngày 14: Offer",
                      sub: "Urgency có deadline",
                    },
                    {
                      icon: <span className="text-lg">🔄</span>,
                      label: "Phản hồi → Alert",
                      sub: "Dừng tự động, sale vào ngay",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Cá nhân hóa không cần tốn công">
                  n8n có thể tự động điền biến vào email template: tên người, tên công ty,
                  ngành, và thậm chí case study phù hợp dựa trên tag đã được gán khi lead vào.
                  Kết quả: mỗi email nhìn như được viết tay, nhưng được gửi tự động hoàn toàn —
                  sale không cần đụng tay vào trừ khi prospect phản hồi.
                </CalloutBox>

                {/* Workflow 3 */}
                <h3 id="workflow-3">Workflow 3: Lead Scoring Thông Minh Theo Thời Gian Thực</h3>

                <p>
                  Không phải mọi lead đều bằng nhau — nhưng nếu không có hệ thống scoring,
                  sale sẽ xử lý theo thứ tự thời gian thay vì theo mức độ tiềm năng.
                  Kết quả là deal có giá trị thấp được chăm sóc kỹ trong khi deal lớn bị bỏ lạnh
                  vì không có gì phân biệt chúng.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Firmographic score (điểm tĩnh khi lead vào)",
                      desc: "Quy mô công ty 1–50 người: +10, 51–200: +20, 200+: +30. Ngành phù hợp ICP: +25. Vị trí Decision Maker (CxO, VP, Director): +20. Có funding rõ ràng: +15",
                    },
                    {
                      title: "Behavioral score (điểm động, cộng dồn)",
                      desc: "Mở email: +2 mỗi lần. Click link trong email: +5. Xem trang pricing: +15. Book demo: +40. Reply email bất kỳ: +25. Quay lại website sau 7+ ngày: +10",
                    },
                    {
                      title: "Tính tổng và phân tier tự động",
                      desc: "Hot (80+ điểm): alert sale ngay, ưu tiên gọi trong 1 giờ. Warm (40–79): vào follow-up priority queue. Cold (dưới 40): long-term nurture sequence, không tốn thời gian sale",
                    },
                    {
                      title: "Cập nhật real-time và re-score",
                      desc: "Mỗi khi có hành vi mới, n8n tự động cộng điểm, re-classify tier, và nếu lead nhảy từ Cold lên Hot thì alert sale ngay lập tức — kể cả lúc 11 giờ đêm",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#DC2626"
                  steps={[
                    {
                      icon: <span className="text-lg">🏢</span>,
                      label: "Firmographic",
                      sub: "Điểm tĩnh khi vào",
                    },
                    {
                      icon: <span className="text-lg">👆</span>,
                      label: "Behavioral",
                      sub: "Cộng dồn theo hành vi",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính tổng điểm",
                      sub: "Real-time scoring",
                    },
                    {
                      icon: <span className="text-lg">🔥</span>,
                      label: "Hot / Warm / Cold",
                      sub: "Tự động phân tier",
                    },
                    {
                      icon: <span className="text-lg">📲</span>,
                      label: "Alert khi tier thay đổi",
                      sub: "Sale biết ngay lập tức",
                    },
                  ]}
                />

                <CalloutBox type="warning" title="Đừng để sale tự quyết định lead nào quan trọng">
                  Không có scoring system, sale tự nhiên ưu tiên lead mà họ cảm thấy "dễ chốt"
                  hơn là lead có tiềm năng lớn nhất. Đây là nguồn gốc của việc close nhiều deal nhỏ
                  trong khi bỏ lỡ deal enterprise đang nằm đó không ai chăm. Lead scoring
                  tự động loại bỏ bias này và đưa ra danh sách ưu tiên khách quan.
                </CalloutBox>

                {/* Workflow 4 */}
                <h3 id="workflow-4">Workflow 4: Báo Cáo Pipeline Tự Động Hàng Tuần</h3>

                <p>
                  Visibility là vấn đề lớn thứ hai sau tốc độ. Founder và head of sales
                  cần biết pipeline trông như thế nào không chỉ khi end-of-quarter review
                  mà mỗi tuần — để điều chỉnh sớm thay vì panic vào tháng cuối quý.
                  Workflow này tự động tổng hợp và gửi báo cáo mà không cần ai làm thủ công.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Pull dữ liệu từ CRM mỗi thứ Hai lúc 8 giờ sáng",
                      desc: "n8n tự động query toàn bộ pipeline: số lead theo stage, deal value, close probability, và các thay đổi so với tuần trước — không cần ai export hay copy-paste",
                    },
                    {
                      title: "Tính các chỉ số quan trọng tự động",
                      desc: "Conversion rate mỗi stage, average deal size, sales cycle length, và forecast doanh thu tháng này dựa trên weighted pipeline (xác suất × deal value)",
                    },
                    {
                      title: "Highlight cảnh báo tự động",
                      desc: "Deal nào không có activity trong 7+ ngày? Lead nào score tăng mạnh nhưng chưa được contact? Stage nào có tỷ lệ chuyển đổi đang giảm so với tháng trước?",
                    },
                    {
                      title: "Gửi summary qua Slack và email",
                      desc: "Report ngắn gọn 1 trang: top 5 deal cần action ngay, pipeline health score, forecast vs target, và 3 deal có rủi ro cao nhất — founder đọc trong 2 phút",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#0EA5E9"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "Lịch tự động",
                      sub: "Mỗi thứ Hai 8 giờ sáng",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Pull từ CRM",
                      sub: "Toàn bộ pipeline data",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính metrics",
                      sub: "Conversion, forecast, cycle",
                    },
                    {
                      icon: <span className="text-lg">⚠️</span>,
                      label: "Flag cảnh báo",
                      sub: "Deal stuck, hot lead bỏ quên",
                    },
                    {
                      icon: <span className="text-lg">📬</span>,
                      label: "Gửi report",
                      sub: "Slack + email, 2 phút đọc",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Report hàng tuần thay đổi behavior của sale">
                  Khi sale biết mỗi tuần sẽ có báo cáo về deal nào stuck — họ tự nhiên
                  update CRM thường xuyên hơn và chủ động follow up trước khi bị flag.
                  Đây là side effect tích cực của visibility: accountability được tạo ra
                  không phải bởi áp lực từ trên xuống, mà bởi transparency của dữ liệu.
                </CalloutBox>

                {/* Before / After */}
                <h2 id="truoc-sau">Trước Và Sau Khi Có CRM Tự Động</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Startup không có CRM tự động",
                    items: [
                      "Lead về email/Zalo → founder forward → sale check → trung bình 42 giờ",
                      "Không có enrichment: sale gọi mà không biết gì về công ty đối diện",
                      "Follow-up phụ thuộc vào sale nhớ — 80% deal bị bỏ sau lần tiếp xúc thứ 2",
                      "Không có scoring: deal $500/tháng được chăm giống deal $5,000/tháng",
                      "Pipeline visibility: founder hỏi sale mới biết, số liệu không nhất quán",
                      "Khi sale nghỉ việc: toàn bộ context về deal bị mất theo",
                    ],
                  }}
                  after={{
                    title: "Sau — CRM tự động hóa với n8n",
                    items: [
                      "Lead vào → sale nhận thông báo đầy đủ trong dưới 5 phút, 24/7",
                      "Enrichment tự động: sale gọi đã biết quy mô, ngành, funding của prospect",
                      "Chuỗi follow-up 30 ngày chạy tự động, dừng ngay khi có phản hồi",
                      "Lead scoring real-time: Hot lead được ưu tiên, Cold lead vào nurture tự động",
                      "Báo cáo pipeline hàng tuần: founder thấy toàn bộ funnel không cần hỏi",
                      "Mọi interaction được ghi lại: onboard sale mới dễ dàng, không mất context",
                    ],
                  }}
                />

                {/* Comparison Table */}
                <h2 id="so-sanh">So Sánh: Thủ Công vs CRM Tự Động</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Quy trình thủ công", "CRM tự động với n8n"]}
                  highlightCol={2}
                  rows={[
                    [
                      "Thời gian phản hồi lead",
                      "42 giờ (trung bình B2B toàn cầu)",
                      "Dưới 5 phút, 24/7",
                    ],
                    [
                      "Tỷ lệ qualify lead",
                      "Chuẩn thị trường",
                      "+21x khi phản hồi trong 5 phút đầu",
                    ],
                    [
                      "Enrichment dữ liệu",
                      "Sale tự tra cứu thủ công",
                      "Tự động qua Clearbit/Apollo khi lead vào",
                    ],
                    [
                      "Follow-up consistency",
                      "Phụ thuộc vào sale nhớ (80% bỏ sau lần 2)",
                      "Chuỗi 30 ngày tự động, không sót bước nào",
                    ],
                    [
                      "Lead scoring",
                      "Không có hoặc cảm tính",
                      "Firmographic + behavioral, real-time",
                    ],
                    [
                      "Pipeline visibility",
                      "Hỏi sale từng người, thiếu nhất quán",
                      "Dashboard + báo cáo tự động hàng tuần",
                    ],
                    [
                      "Năng suất sale",
                      "Chuẩn",
                      "+34% (tự động hóa tác vụ lặp đi lặp lại)",
                    ],
                    [
                      "ROI đầu tư",
                      "Khó đo lường",
                      "$8.71 trên mỗi $1 đầu tư (Nucleus Research)",
                    ],
                  ]}
                />

                {/* Chi phí và ROI */}
                <h2 id="chi-phi-roi">Chi Phí Và ROI Thực Tế</h2>

                <p>
                  Một trong những lý do startup trì hoãn triển khai CRM tự động là lo ngại về chi phí.
                  Nhưng nếu nhìn vào con số thực tế, bức tranh hoàn toàn khác.
                </p>

                <div className="not-prose bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 my-8">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
                    Tính ROI theo kịch bản thực tế
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">
                        Kịch bản: Startup B2B 5 người sale, 100 lead/tháng
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-slate-500 mb-1">Chi phí triển khai (1 lần)</p>
                          <p className="font-bold text-slate-800">5–10 triệu VND</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Chi phí vận hành/tháng</p>
                          <p className="font-bold text-slate-800">~500k–1 triệu VND</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Lead không bị rơi thêm/tháng</p>
                          <p className="font-bold text-emerald-600">+15–25 lead/tháng</p>
                        </div>
                        <div>
                          <p className="text-slate-500 mb-1">Thời gian sale tiết kiệm/tuần</p>
                          <p className="font-bold text-emerald-600">5–8 giờ/sale/tuần</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                      <p className="text-sm font-semibold text-emerald-800">
                        Nếu ACV (Annual Contract Value) trung bình của bạn là $3,000: chỉ cần chốt thêm 1 deal/tháng nhờ CRM tự động đã hoàn vốn toàn bộ chi phí triển khai trong tháng đầu tiên.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-emerald-200">
                    <p className="text-xs text-slate-500 mb-3">
                      Muốn có ước tính chính xác hơn cho business của bạn? Đặt lịch audit miễn phí — chúng tôi sẽ phân tích quy trình hiện tại và đưa ra ROI projection cụ thể.
                    </p>
                    <a
                      href="/audit"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-colors no-underline"
                    >
                      Tính ROI cho startup của tôi →
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Getting started */}
                <h2 id="bat-dau">Triển Khai CRM Tự Động Từng Bước</h2>

                <p>
                  Đừng cố triển khai tất cả cùng một lúc. Cách tiếp cận tốt nhất là
                  bắt đầu với Workflow 1 và 2 — hai workflow đó đã giải quyết được vấn đề lớn nhất
                  (lead rơi và follow-up inconsistency). Sau đó thêm dần Workflow 3 và 4 khi team đã ổn định.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Audit quy trình hiện tại và xác định bottleneck",
                      desc: "Theo dõi 1 tuần: lead về từ đâu? Mất bao lâu trước khi sale biết? Có bao nhiêu lead chưa được contact sau 48 giờ? Số liệu thực tế sẽ cho thấy workflow nào cần ưu tiên nhất.",
                    },
                    {
                      title: "Thiết lập CRM cơ sở (nếu chưa có)",
                      desc: "Bắt đầu với Google Sheet nếu team nhỏ và ít phức tạp. Cấu trúc tối thiểu: Tên, Công ty, Email, SĐT, Nguồn, Stage, Owner, Score, Last Contact, Next Action, Notes.",
                    },
                    {
                      title: "Cài n8n và kết nối nguồn lead đầu tiên",
                      desc: "n8n self-hosted (miễn phí) hoặc n8n Cloud ($20/tháng). Bắt đầu với 1 nguồn lead — thường là website contact form. Verify workflow chạy đúng trước khi thêm nguồn khác.",
                    },
                    {
                      title: "Kết nối notification channel cho sale",
                      desc: "Slack là lựa chọn tốt cho team kỹ thuật. Zalo là tốt hơn nếu sale chủ yếu dùng điện thoại. Đảm bảo thông báo có đầy đủ context và link trực tiếp vào CRM record.",
                    },
                    {
                      title: "Build follow-up sequence đầu tiên",
                      desc: "Bắt đầu đơn giản: 3 email trong 7 ngày. Sau khi verify tỷ lệ open và reply, mở rộng thành chuỗi 30 ngày. Đừng build chuỗi dài ngay từ đầu — bạn cần data để biết message nào work.",
                    },
                    {
                      title: "Thêm lead scoring khi đã có đủ data",
                      desc: "Lead scoring chỉ có giá trị khi bạn có đủ historical data để validate model. Sau 2–3 tháng với Workflow 1 và 2, bạn sẽ thấy pattern: lead từ nguồn nào, firmographic nào thường chốt — dùng đó để build scoring model.",
                    },
                    {
                      title: "Kích hoạt báo cáo pipeline tự động",
                      desc: "Workflow 4 có thể bật ngay từ đầu — ngay cả khi CRM còn đơn giản, weekly report về số lead mới, conversion rate cơ bản đã tạo ra visibility đáng kể so với không có gì.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không biết bắt đầu từ đâu?">
                  <p className="mb-3">
                    Đặt lịch{" "}
                    <strong>audit miễn phí 30 phút</strong> — chúng tôi sẽ xem xét quy trình
                    sales hiện tại của startup, ước tính số lead đang bị rơi mỗi tháng,
                    và đề xuất lộ trình triển khai CRM tự động phù hợp với giai đoạn của bạn.
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
          <BlogFooter title="CRM Tự Động Cho Startup B2B" slug="crm-tu-dong-startup" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
