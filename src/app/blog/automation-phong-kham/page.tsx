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
  title: "Tự Động Hóa Phòng Khám: Nhắc Lịch, Xác Nhận & Chăm Sóc Bệnh Nhân",
  description:
    "Hướng dẫn tự động hóa phòng khám với 4 workflow thực tế: nhắc lịch bệnh nhân tự động 24h+2h, xác nhận lịch hẹn, thu thập phản hồi sau khám, và tái hẹn tự động. Giảm no-show 38-60%, tiết kiệm nhân sự lễ tân.",
  keywords: [
    "tự động hóa phòng khám",
    "nhắc lịch bệnh nhân tự động",
    "automation phòng khám",
    "n8n phòng khám",
    "zalo oa y tế",
    "giảm no-show phòng khám",
    "chăm sóc bệnh nhân tự động",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề no-show và doanh thu thất thoát", level: 2 },
  { id: "so-lieu", text: "Số liệu thực tế về nhắc lịch tự động", level: 2 },
  { id: "giai-phap", text: "4 workflow tự động hóa phòng khám", level: 2 },
  { id: "workflow-1", text: "Nhắc lịch 24h + 2h trước khám", level: 3 },
  { id: "workflow-2", text: "Xác nhận lịch hẹn tự động", level: 3 },
  { id: "workflow-3", text: "Thu thập phản hồi sau khám", level: 3 },
  { id: "workflow-4", text: "Tái hẹn và follow-up bệnh nhân", level: 3 },
  { id: "ket-qua", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "so-sanh", text: "So sánh thủ công vs tự động", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu triển khai như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "Phòng khám nhỏ 1-3 bác sĩ có cần tự động hóa không?",
    a: "Hoàn toàn cần — thậm chí còn cấp thiết hơn phòng khám lớn. Phòng khám nhỏ thường không có đủ nhân sự lễ tân để gọi nhắc lịch đầy đủ, dẫn đến no-show cao hơn. Chỉ cần Workflow 1 (nhắc lịch 24h+2h) là đã giảm no-show đáng kể với chi phí vận hành dưới 500k/tháng — ROI rõ ràng ngay tháng đầu.",
  },
  {
    q: "Dữ liệu bệnh nhân có được bảo mật không khi dùng n8n?",
    a: "n8n có thể tự host trên server của phòng khám — toàn bộ dữ liệu nằm trong hạ tầng của bạn, không qua bên thứ ba. Với ZNS Zalo, chỉ truyền số điện thoại và nội dung tin nhắn đã được phê duyệt template — không truyền thông tin y tế nhạy cảm. Thực hành tốt: không đưa chẩn đoán, kết quả xét nghiệm vào nội dung ZNS.",
  },
  {
    q: "Bệnh nhân cao tuổi không dùng smartphone thì xử lý thế nào?",
    a: "n8n hỗ trợ kênh dự phòng song song: nếu bệnh nhân không có Zalo, tự động chuyển sang SMS (qua Twilio hoặc SpeedSMS). Phòng khám cũng có thể cấu hình: bệnh nhân trên 65 tuổi → nhắc qua SMS + gọi điện tự động (IVR). Lễ tân chỉ cần can thiệp khi bệnh nhân không phản hồi cả hai kênh.",
  },
  {
    q: "Tích hợp với phần mềm quản lý phòng khám (HIS/EMR) hiện tại được không?",
    a: "Phụ thuộc phần mềm. n8n hỗ trợ API REST, webhook, và kết nối trực tiếp database (PostgreSQL, MySQL). Các phần mềm phổ biến như Doctorlogic, eDoctor, hay ClinicSoft thường có API hoặc export CSV. Nếu phần mềm không có API, n8n có thể đọc từ Google Sheet làm lớp trung gian — nhân viên nhập lịch hẹn vào Sheet, n8n xử lý từ đó.",
  },
  {
    q: "Phản hồi sau khám thu thập như thế nào để bệnh nhân chịu điền?",
    a: "Thời điểm là yếu tố then chốt: gửi trong vòng 2-4 giờ sau khi bệnh nhân rời phòng khám — lúc trải nghiệm còn tươi. Giữ form ngắn (3-5 câu, có thể hoàn thành trong 60 giây) và gửi qua Zalo với nút bấm chọn sẵn thay vì gõ tự do. Tỷ lệ phản hồi trung bình 25-40% — cao hơn nhiều so với form email hay giấy tờ tại chỗ.",
  },
  {
    q: "Chi phí hàng tháng để vận hành 4 workflow này là bao nhiêu?",
    a: "Chi phí chính: hosting n8n (VPS ~200-400k/tháng hoặc n8n Cloud từ $20/tháng) + ZNS (ước tính 300-800k/tháng cho 300-500 lịch hẹn, mỗi bệnh nhân nhận 2-3 tin). Tổng khoảng 600k-1.5 triệu/tháng. So với một ca khám bị no-show mất 200-500k doanh thu, hệ thống hoàn vốn sau 3-5 ca tránh được — thường trong tuần đầu tiên.",
  },
];

export default function AutomationPhongKhamBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="automation-phong-kham" title="Tự Động Hóa Phòng Khám: Nhắc Lịch Bệnh Nhân" />
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
              <span className="text-slate-600 truncate max-w-[300px]">Y tế</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold">
                Y Tế
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Phòng Khám
              </span>
              <span className="text-xs text-slate-500">13 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Tự Động Hóa Phòng Khám —{" "}
              <span className="gradient-text">Nhắc Lịch, Xác Nhận & Chăm Sóc Bệnh Nhân</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Trung bình 5-30% bệnh nhân không đến theo lịch hẹn mà không báo trước. Mỗi ca
              no-show là doanh thu mất đi không thu hồi được, khung giờ bỏ trống lãng phí, và
              bệnh nhân khác không đặt được lịch. 4 workflow tự động hóa toàn bộ vòng đời lịch
              hẹn — từ nhắc lịch đến chăm sóc sau khám — giúp phòng khám giảm no-show 38-60%
              mà không cần thêm nhân sự lễ tân.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Section 1: Problem */}
                <h2 id="van-de">No-Show Đang Ăn Mòn Doanh Thu Phòng Khám Mỗi Ngày</h2>

                <p>
                  Bác sĩ chuẩn bị xong hồ sơ, phòng khám sẵn sàng, lễ tân chờ — nhưng bệnh
                  nhân không đến. Không gọi điện báo, không nhắn tin hủy. Chỉ đơn giản là
                  không xuất hiện.
                </p>

                <p>
                  Đây không phải trường hợp hi hữu. Nghiên cứu từ nhiều phòng khám cho thấy
                  tỷ lệ no-show dao động <strong>5-30%</strong> tùy chuyên khoa và loại hình
                  phòng khám. Với phòng khám chuyên khoa có 20 lịch hẹn/ngày, ngay cả tỷ lệ
                  10% cũng có nghĩa là 2 ca trống mỗi ngày — khoảng 40 ca/tháng bị lãng phí.
                </p>

                <CalloutBox type="warning" title="Vòng luẩn quẩn của no-show">
                  Khi bệnh nhân no-show, phòng khám không chỉ mất doanh thu ca đó. Bệnh nhân
                  khác không đặt được lịch vì slot đã bị giữ. Bác sĩ không thể tối ưu lịch.
                  Và bệnh nhân no-show thường trở thành khách hàng bỏ đi — không tái khám,
                  không giới thiệu người quen. Một lần no-show có thể mất đi giá trị lifetime
                  của một bệnh nhân.
                </CalloutBox>

                <p>
                  Lễ tân có thể gọi điện nhắc từng người — nhưng với 30-50 lịch hẹn/ngày,
                  đó là 2-3 giờ chỉ để gọi điện. Nhiều phòng khám bỏ qua bước nhắc vì thiếu
                  thời gian, hoặc chỉ nhắc được một phần. Kết quả: no-show vẫn cao, lễ tân
                  quá tải, bác sĩ không có thông tin trước về sĩ số thực sự trong ngày.
                </p>

                <p>
                  Vấn đề không phải nhân viên không cố gắng. Vấn đề là{" "}
                  <strong>quy trình nhắc lịch thủ công không thể đáng tin cậy và không
                  scale được</strong>. Cần một hệ thống tự động hóa — và nghiên cứu chứng
                  minh hệ thống đó hoạt động.
                </p>

                {/* Section 2: Stats */}
                <h2 id="so-lieu">Số Liệu Thực Tế: Nhắc Lịch Tự Động Hiệu Quả Đến Mức Nào?</h2>

                <StatCard stats={[
                  { value: "38-60%", label: "giảm no-show", sub: "nhờ nhắc lịch tự động đa kênh", color: "text-accent" },
                  { value: "5-30%", label: "tỷ lệ no-show trung bình", sub: "khi không có hệ thống nhắc lịch" },
                  { value: "23%", label: "nhiều hơn khả năng đến khám", sub: "khi bệnh nhân nhận nhắc tự động" },
                  { value: "-7%", label: "giảm thêm mỗi tin nhắn bổ sung", sub: "nhắc 2 lần hiệu quả hơn 1 lần" },
                ]} />

                <p>
                  Dữ liệu từ nghiên cứu hệ thống y tế cho thấy: bệnh nhân nhận được nhắc
                  lịch tự động có xác suất đến khám cao hơn <strong>23%</strong> so với
                  không nhận nhắc gì. Mỗi tin nhắn nhắc bổ sung giảm thêm <strong>7%</strong>{" "}
                  tỷ lệ no-show — đó là lý do nhắc hai lần (24h + 2h) cho kết quả tốt hơn
                  đáng kể so với nhắc một lần duy nhất.
                </p>

                <p>
                  Về tài chính: phòng khám với 300 lịch hẹn/tháng, giá trị trung bình
                  500.000 VND/ca, tỷ lệ no-show 15% — mỗi tháng mất{" "}
                  <strong>45 ca × 500.000 = 22.5 triệu VND</strong>. Giảm no-show xuống 6%
                  (giảm 60%) đồng nghĩa thu hồi thêm khoảng <strong>13-14 triệu/tháng</strong>{" "}
                  — với chi phí vận hành hệ thống dưới 1.5 triệu/tháng.
                </p>

                <CalloutBox type="info" title="Tại sao Zalo ZNS thay vì SMS hay gọi điện?">
                  Zalo có 78 triệu người dùng hoạt động tại Việt Nam. ZNS (Zalo Notification
                  Service) đạt tỷ lệ đọc 85-90%, cao hơn SMS (40-60%) và cao hơn email nhiều
                  lần. Chi phí ZNS 200-800 VND/tin — rẻ hơn gọi điện thủ công về cả chi phí
                  lẫn thời gian nhân sự. Với bệnh nhân không dùng Zalo, n8n tự động chuyển
                  sang kênh dự phòng SMS.
                </CalloutBox>

                {/* Section 3: Workflows */}
                <h2 id="giai-phap">4 Workflow Tự Động Hóa Toàn Bộ Vòng Đời Lịch Hẹn</h2>

                <p>
                  Dùng n8n kết nối Google Calendar (hoặc phần mềm HIS của phòng khám) với
                  Zalo OA API, bạn có thể tự động hóa toàn bộ vòng đời lịch hẹn — từ nhắc
                  lịch đến xác nhận, từ thu thập phản hồi đến tái hẹn. Đây là 4 workflow
                  cốt lõi theo thứ tự ưu tiên triển khai:
                </p>

                {/* Workflow 1 */}
                <h3 id="workflow-1">Workflow 1: Nhắc Lịch 24 Giờ + 2 Giờ Trước Khám</h3>

                <p>
                  Đây là workflow có ROI cao nhất và nên triển khai đầu tiên. Hai lần nhắc
                  ở hai thời điểm chiến lược — 24h để bệnh nhân sắp xếp kế hoạch, 2h để
                  nhắc người đã quên hoặc bị bận — giảm no-show hiệu quả hơn đáng kể so
                  với chỉ nhắc một lần.
                </p>

                <StepList steps={[
                  {
                    title: "Cron trigger chạy lúc 16:00 hàng ngày — nhắc lịch 24h",
                    desc: "n8n đọc Google Calendar: ai có lịch hẹn từ 16:00 ngày mai đến 16:00 ngày kia. Lọc lấy tên, số điện thoại, tên bác sĩ, khung giờ, phòng khám.",
                  },
                  {
                    title: "Gửi ZNS nhắc lịch 24h qua Zalo OA",
                    desc: '"Xin chào [Tên]! Nhắc bạn có lịch khám với Bác sĩ [Tên BS] vào lúc [Giờ] ngày mai tại [Phòng khám]. Vui lòng đến trước 10 phút."',
                  },
                  {
                    title: "Cron trigger chạy mỗi 30 phút — nhắc lịch 2h",
                    desc: "Kiểm tra ai có lịch hẹn trong 2 giờ tới. So sánh với log xác nhận — chỉ nhắc bệnh nhân chưa xác nhận hoặc chưa hủy từ lần nhắc 24h.",
                  },
                  {
                    title: "Gửi ZNS nhắc lịch 2h + nút hành động",
                    desc: '"[Tên] ơi, còn 2 tiếng nữa là đến giờ khám. Bác sĩ [Tên BS] đang chờ bạn lúc [Giờ]." Kèm nút: "Xác nhận tham dự" và "Tôi cần hủy/đổi lịch".',
                  },
                  {
                    title: "Ghi log phản hồi và alert lễ tân khi cần",
                    desc: "Bệnh nhân bấm nút → n8n ghi nhận. Nếu 30 phút trước giờ khám vẫn chưa có phản hồi → gửi Telegram alert cho lễ tân để gọi điện xác nhận trực tiếp.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Cron 16:00", sub: "Nhắc lịch ngày mai" },
                    { icon: <span className="text-lg">📅</span>, label: "Google Calendar", sub: "Lịch hẹn 24h tới" },
                    { icon: <span className="text-lg">💬</span>, label: "ZNS nhắc 24h", sub: "Gửi qua Zalo OA" },
                    { icon: <span className="text-lg">🔄</span>, label: "Cron mỗi 30p", sub: "Check lịch hẹn 2h tới" },
                    { icon: <span className="text-lg">💬</span>, label: "ZNS nhắc 2h", sub: "Kèm nút xác nhận/hủy" },
                    { icon: <span className="text-lg">📊</span>, label: "Log + Alert", sub: "Lễ tân nếu cần" },
                  ]}
                />

                <CalloutBox type="tip">
                  Thêm thông tin thực tế vào tin nhắc nhắc: tên bác sĩ cụ thể, số phòng,
                  hướng dẫn đỗ xe, yêu cầu mang theo giấy tờ (nếu có). Tin nhắn càng cụ
                  thể, bệnh nhân càng ít lý do để bỏ lịch vì "quên mang giấy tờ" hay
                  "không biết đường vào".
                </CalloutBox>

                {/* Workflow 2 */}
                <h3 id="workflow-2">Workflow 2: Xác Nhận Lịch Hẹn Và Quản Lý Hủy/Đổi</h3>

                <p>
                  Workflow 1 gửi nhắc — Workflow 2 xử lý phản hồi. Khi bệnh nhân bấm
                  "hủy lịch", hệ thống không chỉ ghi nhận mà còn tự động mở slot cho
                  bệnh nhân khác và thông báo lễ tân để liên hệ tái hẹn.
                </p>

                <StepList steps={[
                  {
                    title: "Webhook nhận phản hồi từ nút bấm trong ZNS",
                    desc: "Bệnh nhân bấm 'Xác nhận tham dự' → n8n ghi nhận confirmed. Bấm 'Tôi cần hủy/đổi lịch' → trigger workflow hủy.",
                  },
                  {
                    title: "Xác nhận: gửi ZNS xác nhận kèm thông tin bổ sung",
                    desc: '"Đã xác nhận! Hẹn gặp bạn lúc [Giờ] ngày [Ngày]. Địa chỉ: [Địa chỉ]. Nếu cần thay đổi, nhắn tin về đây trước 2 giờ."',
                  },
                  {
                    title: "Hủy lịch: tự động mở slot + alert lễ tân",
                    desc: "n8n cập nhật Google Calendar: đổi trạng thái slot từ Booked → Available. Gửi Telegram alert cho lễ tân: '[Tên] hủy lịch [Giờ]. Slot trống — có thể xếp bệnh nhân chờ.'",
                  },
                  {
                    title: "Gửi ZNS đề xuất lịch hẹn mới cho bệnh nhân vừa hủy",
                    desc: '"Bạn muốn đặt lịch khám khác không? Nhấn đây để chọn khung giờ phù hợp." Kèm link form đặt lịch. Tỷ lệ tái hẹn ngay sau khi hủy đạt 30-40%.',
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    { icon: <span className="text-lg">📲</span>, label: "Bệnh nhân phản hồi", sub: "Bấm nút trong ZNS" },
                    { icon: <span className="text-lg">⚡</span>, label: "n8n xử lý", sub: "Phân nhánh xác nhận/hủy" },
                    { icon: <span className="text-lg">✅</span>, label: "Xác nhận", sub: "Gửi ZNS + ghi log" },
                    { icon: <span className="text-lg">📅</span>, label: "Mở slot", sub: "Cập nhật Calendar" },
                    { icon: <span className="text-lg">🔔</span>, label: "Alert lễ tân", sub: "Telegram ngay lập tức" },
                  ]}
                />

                <CalloutBox type="success" title="Lợi ích ẩn của Workflow 2">
                  Khi bệnh nhân hủy sớm (24h trước), phòng khám có đủ thời gian liên hệ
                  bệnh nhân chờ và lấp đầy slot. Phòng khám triển khai hệ thống này báo
                  cáo tỷ lệ lấp đầy slot hủy đạt 55-70% — so với gần 0% khi không có
                  quy trình tự động.
                </CalloutBox>

                {/* Workflow 3 */}
                <h3 id="workflow-3">Workflow 3: Thu Thập Phản Hồi Sau Khám</h3>

                <p>
                  Phản hồi sau khám là công cụ quan trọng để cải thiện chất lượng dịch vụ
                  và xây dựng lòng tin bệnh nhân — nhưng ít phòng khám làm được vì quy
                  trình thủ công quá tốn thời gian. Tự động hóa biến đây thành dữ liệu
                  thường xuyên, không tốn nhân sự.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger 2 giờ sau khi ca khám kết thúc",
                    desc: "n8n theo dõi Google Calendar: khi slot chuyển sang trạng thái Completed → đợi 2 giờ → trigger gửi phản hồi. Đây là thời điểm tối ưu: trải nghiệm còn tươi nhưng bệnh nhân đã về đến nhà.",
                  },
                  {
                    title: "Gửi ZNS form phản hồi ngắn qua Zalo OA",
                    desc: '"Cảm ơn bạn đã tin tưởng khám tại [Tên phòng khám]. Bạn có 60 giây để chia sẻ trải nghiệm hôm nay không?" Kèm nút đánh giá 1-5 sao trực tiếp trong Zalo.',
                  },
                  {
                    title: "Bệnh nhân trả lời ngay trong Zalo — không cần mở link ngoài",
                    desc: "Hỏi tối đa 3 câu: đánh giá tổng thể (1-5 sao), thái độ bác sĩ (1-5 sao), và một câu mở 'Bạn muốn chúng tôi cải thiện điều gì?'",
                  },
                  {
                    title: "n8n tổng hợp vào Google Sheet + alert khi đánh giá thấp",
                    desc: "Ghi nhận từng phản hồi theo bác sĩ, ca khám, ngày. Nếu bệnh nhân cho 1-2 sao → Telegram alert ngay cho quản lý để xử lý kịp thời.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">🏥</span>, label: "Ca khám kết thúc", sub: "Slot → Completed" },
                    { icon: <span className="text-lg">⏱️</span>, label: "Chờ 2 giờ", sub: "Bệnh nhân về đến nhà" },
                    { icon: <span className="text-lg">⭐</span>, label: "ZNS khảo sát", sub: "3 câu, 60 giây" },
                    { icon: <span className="text-lg">📊</span>, label: "Ghi Google Sheet", sub: "Theo bác sĩ + ngày" },
                    { icon: <span className="text-lg">🚨</span>, label: "Alert 1-2 sao", sub: "Quản lý xử lý ngay" },
                  ]}
                />

                {/* Workflow 4 */}
                <h3 id="workflow-4">Workflow 4: Tái Hẹn Và Follow-Up Bệnh Nhân</h3>

                <p>
                  Nhiều bệnh nhân cần tái khám định kỳ nhưng quên đặt lịch. Workflow 4
                  tự động nhắc tái hẹn đúng thời điểm — dựa trên ghi chú bác sĩ hoặc
                  protocol tái khám — biến bệnh nhân một lần thành bệnh nhân trung thành.
                </p>

                <StepList steps={[
                  {
                    title: "Bác sĩ ghi chú 'tái khám sau X ngày' trong hồ sơ",
                    desc: "n8n đọc Google Sheet hồ sơ bệnh nhân: khi cột 'Tái khám' có giá trị → tạo task nhắc với ngày cụ thể. Không cần bác sĩ nhớ theo dõi thủ công.",
                  },
                  {
                    title: "X-3 ngày trước ngày tái khám: gửi ZNS gợi ý đặt lịch",
                    desc: '"Xin chào [Tên]! Bác sĩ [Tên BS] đề nghị bạn tái khám sau [X] ngày kể từ lần khám [Ngày]. Bạn muốn đặt lịch ngay không?"',
                  },
                  {
                    title: "Kèm link đặt lịch hoặc nút gọi lại yêu cầu",
                    desc: "Bệnh nhân bấm 'Đặt lịch ngay' → chuyển đến form đặt lịch với thông tin đã điền sẵn (tên, số điện thoại, bác sĩ). Giảm ma sát tối đa.",
                  },
                  {
                    title: "Nếu không phản hồi sau 3 ngày: nhắc lần 2 + alert lễ tân",
                    desc: "Gửi thêm 1 tin ZNS nhắc lần hai. Nếu vẫn không đặt lịch → Telegram alert lễ tân để gọi điện hỏi thăm. Tỷ lệ tái khám tăng 25-35% so với không nhắc.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">📋</span>, label: "Hồ sơ tái khám", sub: "Ghi chú bác sĩ" },
                    { icon: <span className="text-lg">📅</span>, label: "X-3 ngày", sub: "Trigger nhắc tái khám" },
                    { icon: <span className="text-lg">💬</span>, label: "ZNS gợi ý đặt lịch", sub: "Kèm link đặt nhanh" },
                    { icon: <span className="text-lg">🔄</span>, label: "Nhắc lần 2", sub: "Nếu chưa đặt sau 3 ngày" },
                    { icon: <span className="text-lg">🔔</span>, label: "Alert lễ tân", sub: "Gọi điện theo dõi" },
                  ]}
                />

                <CalloutBox type="info" title="Ứng dụng mở rộng: Follow-up bệnh mãn tính">
                  Với bệnh nhân tiểu đường, huyết áp, hoặc điều trị dài hạn — Workflow 4
                  có thể cấu hình nhắc định kỳ hàng tháng, kèm lời nhắc uống thuốc
                  (nếu phù hợp quy định). Không cần thêm nhân sự y tá theo dõi thủ công
                  từng bệnh nhân mãn tính.
                </CalloutBox>

                {/* Section 4: Results */}
                <h2 id="ket-qua">Trước Và Sau Khi Tự Động Hóa Phòng Khám</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Quy trình thủ công",
                    items: [
                      "Lễ tân gọi điện nhắc lịch 2-3 giờ mỗi ngày, không đủ thời gian nhắc hết",
                      "No-show 10-20%, biết khi bệnh nhân không đến và slot đã trống",
                      "Slot bị hủy thường bỏ trống vì không có quy trình lấp đầy kịp thời",
                      "Thu thập phản hồi bằng phiếu giấy tại chỗ — tỷ lệ điền thấp, dữ liệu không tổng hợp được",
                      "Nhắc tái khám: bác sĩ nhớ mới nhắc, bệnh nhân quên thì thôi",
                      "Lễ tân bận gọi điện nhắc lịch không có thời gian chăm sóc bệnh nhân trực tiếp",
                    ],
                  }}
                  after={{
                    title: "Sau — n8n + Zalo OA tự động",
                    items: [
                      "0 phút gọi điện nhắc lịch — ZNS tự động gửi đúng giờ, đúng người, đúng thông tin",
                      "No-show giảm 38-60%, biết trước từ chiều hôm trước ai sẽ không đến",
                      "Slot hủy được lấp đầy 55-70% nhờ alert lễ tân và danh sách bệnh nhân chờ",
                      "Phản hồi sau khám tự động 2 giờ sau ca — tỷ lệ phản hồi 25-40%, dữ liệu theo bác sĩ",
                      "Tái khám tự động theo ghi chú bác sĩ — không bệnh nhân nào bị quên",
                      "Lễ tân tập trung tiếp đón và chăm sóc bệnh nhân hiện tại",
                    ],
                  }}
                />

                <StatCard stats={[
                  { value: "38-60%", label: "giảm no-show", sub: "từ 15% xuống 6-9% trung bình", color: "text-accent" },
                  { value: "55-70%", label: "slot hủy được lấp đầy", sub: "nhờ alert lễ tân kịp thời" },
                  { value: "25-40%", label: "tỷ lệ phản hồi khảo sát", sub: "qua Zalo vs phiếu giấy" },
                  { value: "3 giờ → 0", label: "thời gian gọi nhắc lịch/ngày", sub: "lễ tân làm việc có giá trị hơn" },
                ]} />

                {/* Section 5: Comparison */}
                <h2 id="so-sanh">So Sánh Chi Tiết: Thủ Công vs Tự Động Hóa</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "Tự động (n8n + Zalo OA)"]}
                  highlightCol={2}
                  rows={[
                    ["Nhắc lịch 24h trước", "Lễ tân gọi điện từng người — hay bị bỏ sót", "ZNS tự động 16:00 hàng ngày, không bỏ sót"],
                    ["Nhắc lịch 2h trước", "Thường không làm vì quá tốn thời gian", "Tự động, chỉ nhắc người chưa xác nhận"],
                    ["Xử lý hủy lịch", "Bệnh nhân gọi điện, lễ tân ghi thủ công", "Bấm nút Zalo → slot tự mở, alert lễ tân ngay"],
                    ["Lấp đầy slot hủy", "Gọi điện danh sách chờ — thường quá muộn", "Alert tức thì → lấp đầy 55-70% slot hủy"],
                    ["Phản hồi sau khám", "Phiếu giấy tại chỗ, tỷ lệ điền thấp", "ZNS 2h sau khám, 25-40% phản hồi, dữ liệu tự động"],
                    ["Nhắc tái khám", "Bác sĩ hoặc bệnh nhân tự nhớ", "Tự động theo ghi chú bác sĩ, đúng thời điểm"],
                    ["Giờ hoạt động", "Giờ hành chính, nghỉ cuối tuần", "24/7, kể cả lịch hẹn cuối tuần và ngày lễ"],
                    ["Chi phí nhân sự nhắc lịch", "2-3 giờ lễ tân/ngày (~5-8 triệu/tháng)", "~600k-1.5 triệu/tháng vận hành hệ thống"],
                    ["Khả năng scale", "Thêm bệnh nhân = thêm nhân sự", "50 hay 500 lịch hẹn, cùng chi phí vận hành"],
                  ]}
                />

                {/* Section 6: FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Section 7: Getting Started */}
                <h2 id="bat-dau">Bắt Đầu Triển Khai Như Thế Nào?</h2>

                <p>
                  Không cần triển khai cả 4 workflow cùng lúc. Bắt đầu với workflow mang
                  lại kết quả nhanh nhất, đo lường, rồi mở rộng. Đây là lộ trình được
                  đề xuất theo thứ tự ưu tiên:
                </p>

                <StepList steps={[
                  {
                    title: "Tuần 1: Đăng ký Zalo OA và xin phê duyệt template ZNS",
                    desc: "Vào oa.zalo.me → tạo OA cho phòng khám (cần giấy phép hoạt động để xác minh). Soạn và nộp template ZNS nhắc lịch — Zalo thường phê duyệt trong 1-3 ngày làm việc. Chuẩn bị dữ liệu lịch hẹn trên Google Calendar hoặc Sheet.",
                  },
                  {
                    title: "Tuần 2: Triển khai Workflow 1 — Nhắc lịch 24h + 2h",
                    desc: "Cài n8n (VPS hoặc n8n Cloud), kết nối Google Calendar và Zalo OA API. Chạy thử với 10 lịch hẹn đầu tiên, xác nhận tin nhắn gửi đúng nội dung và đúng giờ trước khi triển khai toàn bộ.",
                  },
                  {
                    title: "Tuần 3: Thêm Workflow 2 — Xác nhận và xử lý hủy",
                    desc: "Workflow 2 xây dựng trên nền Workflow 1. Cần thêm webhook xử lý phản hồi nút bấm và logic phân nhánh xác nhận/hủy. Cấu hình alert Telegram cho lễ tân.",
                  },
                  {
                    title: "Tuần 4-5: Workflow 3 — Thu thập phản hồi sau khám",
                    desc: "Thiết kế form phản hồi ngắn, cấu hình trigger dựa trên trạng thái slot. Xây dựng dashboard Google Sheet theo dõi NPS theo bác sĩ và theo tuần.",
                  },
                  {
                    title: "Tháng 2: Workflow 4 — Tái hẹn tự động",
                    desc: "Workflow này cần quy ước ghi chú 'tái khám' trong hồ sơ bệnh nhân được chuẩn hóa. Phối hợp với bác sĩ để thống nhất format ghi chú, sau đó n8n đọc và xử lý tự động.",
                  },
                ]} />

                <CalloutBox type="info" title="Cần hỗ trợ triển khai?">
                  <p className="mb-3">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi sẽ phân
                    tích quy trình hiện tại của phòng khám, ước tính doanh thu đang thất
                    thoát vì no-show, và đưa ra lộ trình triển khai phù hợp quy mô của bạn.
                  </p>
                  <p className="mb-3">
                    Hoặc nếu bạn muốn tự đánh giá mức độ sẵn sàng tự động hóa của phòng
                    khám:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/audit"
                      className="inline-flex items-center gap-1 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Đặt lịch audit miễn phí →
                    </a>
                    <a
                      href="/quiz"
                      className="inline-flex items-center gap-1 border border-primary text-primary text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      Làm quiz đánh giá tự động hóa
                    </a>
                  </div>
                </CalloutBox>

              </div>
            </div>

            {/* Table of Contents */}
            <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
          <BlogFooter title="Automation Phòng Khám" slug="automation-phong-kham" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
