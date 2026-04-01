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
  title: "Nhắc Lịch Học Viên Qua Zalo OA — Giảm 80% Miss Lịch Cho Trung Tâm Đào Tạo",
  description:
    "Hướng dẫn tự động nhắc lịch học viên qua Zalo OA cho trung tâm đào tạo: 5 workflow thực tế, giảm 80% miss lịch, tiết kiệm 3 giờ/ngày gọi điện thủ công. Chi phí ZNS 200-800 VND/tin.",
  keywords: [
    "nhắc lịch zalo oa",
    "trung tâm đào tạo automation",
    "zalo oa giáo dục",
    "n8n nhắc lịch học viên",
    "tự động hóa trung tâm anh ngữ",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề nhắc lịch thủ công", level: 2 },
  { id: "so-lieu", text: "Số liệu thực tế", level: 2 },
  { id: "giai-phap", text: "5 workflow nhắc lịch tự động", level: 2 },
  { id: "workflow-1", text: "Nhắc lịch 24h trước", level: 3 },
  { id: "workflow-2", text: "Nhắc lịch 2h trước", level: 3 },
  { id: "workflow-3", text: "Điểm danh check-in tự động", level: 3 },
  { id: "workflow-4", text: "Lead capture từ form đăng ký", level: 3 },
  { id: "workflow-5", text: "Báo cáo sĩ số cuối ngày", level: 3 },
  { id: "ket-qua", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "so-sanh", text: "So sánh thủ công vs tự động", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "Zalo OA có phù hợp với trung tâm nhỏ dưới 100 học viên không?",
    a: "Hoàn toàn phù hợp. Zalo OA miễn phí đăng ký và không giới hạn số người follow. Với trung tâm nhỏ, bạn chỉ cần 1-2 workflow cơ bản là đã giảm đáng kể công việc thủ công. Chi phí ZNS chỉ phát sinh khi gửi tin nhắn chủ động (200-800 VND/tin), hoàn toàn kiểm soát được ngân sách.",
  },
  {
    q: "Học viên không dùng Zalo thì sao?",
    a: "Zalo có 78 triệu người dùng hoạt động hàng tháng tại Việt Nam — chiếm hơn 90% smartphone users. Tuy nhiên với học viên không dùng Zalo (thường là học sinh cấp 1-2), bạn có thể nhắc phụ huynh qua Zalo thay vì học viên trực tiếp. n8n cũng hỗ trợ kết hợp SMS hoặc email như kênh dự phòng.",
  },
  {
    q: "ZNS khác gì so với tin nhắn Zalo OA thông thường?",
    a: "Tin nhắn Zalo OA thông thường chỉ gửi được cho người đã follow OA và trong 7 ngày kể từ lần tương tác gần nhất. ZNS (Zalo Notification Service) gửi được đến mọi số điện thoại đã đăng ký Zalo, kể cả chưa follow OA, và không giới hạn thời gian. ZNS trả phí (200-800 VND/tin) nhưng tỷ lệ đọc đạt 85-90% — cao hơn SMS nhiều.",
  },
  {
    q: "Mất bao lâu để setup 5 workflow này?",
    a: "Nếu tự làm và có kinh nghiệm n8n cơ bản: khoảng 2-3 tuần để thiết lập đầy đủ và kiểm thử. Nếu thuê chuyên gia: 1-2 tuần bao gồm cả training nhân viên vận hành. Workflow 1 và 2 (nhắc lịch 24h và 2h) có thể chạy trong 3-5 ngày đầu tiên — đây nên là ưu tiên vì mang lại impact ngay lập tức.",
  },
  {
    q: "Có cần tích hợp với phần mềm quản lý học viên hiện tại không?",
    a: "Không bắt buộc. n8n có thể lấy dữ liệu lịch học từ Google Sheet, Google Calendar, Notion hoặc bất kỳ phần mềm nào có API. Nếu trung tâm bạn dùng phần mềm nội bộ không có API, vẫn có thể export CSV định kỳ và đưa vào Google Sheet làm nguồn dữ liệu cho n8n.",
  },
  {
    q: "Chi phí hàng tháng để vận hành các workflow này là bao nhiêu?",
    a: "Chi phí chính gồm: hosting n8n (VPS khoảng 200-400k/tháng hoặc n8n Cloud từ $20/tháng) + ZNS (ước tính 200-500k/tháng cho 500-1000 học viên với 2 lần nhắc/học viên/tuần). Tổng khoảng 500k-1 triệu/tháng — so với tiết kiệm 15-30 triệu/tháng nhân sự, ROI rất cao.",
  },
];

export default function NhacLichZaloOAGiaoDucBlog() {
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
              <span className="text-slate-600 truncate max-w-[300px]">Giáo dục</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                Giáo Dục
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Zalo OA
              </span>
              <span className="text-xs text-slate-400">14 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Nhắc Lịch Học Viên Qua Zalo OA —{" "}
              <span className="gradient-text">Giảm 80% Miss Lịch Cho Trung Tâm Đào Tạo</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Nhân viên dành 3 giờ mỗi ngày gọi điện nhắc lịch. Học viên vẫn miss buổi học. Doanh thu
              thất thoát âm thầm mỗi tháng. 5 workflow Zalo OA tự động hóa toàn bộ quy trình nhắc lịch —
              từ 24h trước đến check-in điểm danh — không cần thêm nhân sự.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Section 1: Problem */}
                <h2 id="van-de">Nhân Viên Gọi Điện 3 Giờ/Ngày — Học Viên Vẫn Nghỉ Không Báo</h2>

                <p>
                  Cứ mỗi buổi sáng, nhân viên hành chính của trung tâm đào tạo mở danh sách lịch học,
                  bắt đầu gọi từng số. Buổi tối 18:00 hôm nay có 12 học viên — gọi 12 cuộc. Ngày mai
                  10:00 có lớp khai giảng — gọi thêm 8 cuộc nữa. Xong thì nhắn Zalo cá nhân từng người
                  để chắc chắn họ nhận được.
                </p>

                <p>
                  3 tiếng mỗi ngày. Chỉ để nhắc lịch.
                </p>

                <CalloutBox type="warning" title="Vấn đề bạn đang gặp phải">
                  Ngay cả sau khi gọi điện và nhắn tin, tỷ lệ học viên miss lịch vẫn dao động
                  10-15%. Với lớp học 20 người, đó là 2-3 chỗ trống mỗi buổi — doanh thu mất đi
                  không thu hồi được. Nhân viên thì kiệt sức với công việc lặp đi lặp lại không
                  tạo ra giá trị.
                </CalloutBox>

                <p>
                  Vấn đề không phải nhân viên làm sai. Vấn đề là <strong>quy trình thủ công
                  không thể scale</strong>. Khi trung tâm tăng từ 200 lên 500 học viên, bạn không
                  thể thuê thêm 2 người chỉ để gọi điện nhắc lịch. Cần một hệ thống.
                </p>

                {/* Section 2: Stats */}
                <h2 id="so-lieu">Số Liệu Thực Tế Về Miss Lịch Và Chi Phí</h2>

                <StatCard stats={[
                  { value: "50-69%", label: "giảm miss lịch", sub: "nhờ nhắc lịch tự động (nghiên cứu y tế)", color: "text-accent" },
                  { value: "78 triệu", label: "người dùng Zalo", sub: "hoạt động hàng tháng tại Việt Nam" },
                  { value: "200-800đ", label: "mỗi tin ZNS", sub: "rẻ hơn SMS 40%" },
                  { value: "~35 triệu", label: "thu hồi mỗi tháng", sub: "khi giảm miss từ 12% xuống 7%" },
                ]} />

                <p>
                  Nghiên cứu trong lĩnh vực y tế — ngành có quy trình nhắc lịch hẹn tương tự giáo dục
                  — cho thấy nhắc lịch tự động đa kênh giảm tỷ lệ vắng mặt <strong>50-69%</strong>.
                  Khi áp dụng nhiều kênh nhắc song song (Zalo + SMS), con số này có thể đạt tới{" "}
                  <strong>60% giảm</strong> so với không nhắc gì.
                </p>

                <p>
                  Về mặt tài chính: một trung tâm với 300 học viên, lớp học 500.000 VND/buổi,
                  tỷ lệ miss 12% — mỗi tháng mất khoảng <strong>36 buổi học bị bỏ lỡ</strong> không
                  thu hồi được. Giảm tỷ lệ này xuống 7% đồng nghĩa với việc thu hồi thêm ~15 buổi/tháng,
                  tương đương <strong>7.5-8 triệu VND</strong> doanh thu thực thu mỗi tháng.
                </p>

                <CalloutBox type="info" title="Tại sao Zalo OA thay vì SMS hay email?">
                  Zalo có 78 triệu người dùng hoạt động tại Việt Nam — hầu hết học viên và phụ huynh
                  đều dùng hàng ngày. ZNS (Zalo Notification Service) có tỷ lệ đọc 85-90%, cao hơn
                  SMS (40-60%) và email (20-25%). Chi phí ZNS 200-800 VND/tin, rẻ hơn SMS 40%.
                  Đây là lý do Zalo OA là lựa chọn tối ưu cho trung tâm đào tạo tại Việt Nam.
                </CalloutBox>

                {/* Section 3: Workflows */}
                <h2 id="giai-phap">5 Workflow Nhắc Lịch Tự Động Cho Trung Tâm Đào Tạo</h2>

                <p>
                  Dùng n8n kết hợp Zalo OA API, bạn có thể tự động hóa toàn bộ quy trình — từ
                  nhắc lịch trước buổi học, điểm danh check-in, đến báo cáo sĩ số cho quản lý.
                  n8n có node Google Calendar tích hợp sẵn, kết hợp HTTP Request node để gọi
                  Zalo OA API (ZNS). Đây là 5 workflow cốt lõi:
                </p>

                {/* Workflow 1 */}
                <h3 id="workflow-1">Workflow 1: Nhắc Lịch 24 Giờ Trước Buổi Học</h3>

                <p>
                  Đây là lớp bảo vệ đầu tiên. Nhắc sớm giúp học viên sắp xếp lại kế hoạch cá nhân
                  nếu có xung đột — thay vì nghỉ đột ngột không báo vào buổi sáng hôm sau.
                </p>

                <StepList steps={[
                  { title: "n8n Cron trigger chạy lúc 18:00 hàng ngày", desc: "Kiểm tra Google Calendar: ai có lịch học trong khoảng 18:00 hôm sau đến 18:00 ngày kia" },
                  { title: "Lọc danh sách học viên cần nhắc", desc: "Google Calendar node trả về tên, số điện thoại, tên lớp, giờ học, phòng học" },
                  { title: "Gửi ZNS qua HTTP Request đến Zalo OA API", desc: '"Xin chào [Tên]! Nhắc bạn có buổi học [Tên lớp] vào lúc [Giờ] ngày mai tại [Phòng học]. Nhắn \'OK\' để xác nhận."' },
                  { title: "Ghi log phản hồi vào Google Sheet", desc: "Học viên reply 'OK', 'Vắng' hoặc không reply — ghi nhận tất cả để báo cáo sĩ số" },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Cron 18:00", sub: "Chạy tự động hàng ngày" },
                    { icon: <span className="text-lg">📅</span>, label: "Google Calendar", sub: "Lịch học ngày mai" },
                    { icon: <span className="text-lg">⚡</span>, label: "n8n xử lý", sub: "Lọc + format tin nhắn" },
                    { icon: <span className="text-lg">💬</span>, label: "ZNS → Học viên", sub: "Nhắc lịch 24h trước" },
                    { icon: <span className="text-lg">📊</span>, label: "Log Google Sheet", sub: "Ghi nhận phản hồi" },
                  ]}
                />

                <CalloutBox type="tip">
                  Thêm nút phản hồi nhanh trong ZNS: "Xác nhận tham dự" và "Xin nghỉ buổi này".
                  Học viên chỉ cần bấm một nút — không cần gõ. Tỷ lệ phản hồi tăng đáng kể
                  so với yêu cầu nhắn tin tự do.
                </CalloutBox>

                {/* Workflow 2 */}
                <h3 id="workflow-2">Workflow 2: Nhắc Lịch 2 Giờ Trước Buổi Học</h3>

                <p>
                  Lớp bảo vệ thứ hai. Nhắc 2 giờ trước giúp học viên đã quên hoặc bị cuốn
                  vào công việc kịp sắp xếp đi học. Đây là thời điểm vàng — đủ thời gian để
                  chuẩn bị nhưng đủ gần để tạo cảm giác cấp thiết.
                </p>

                <StepList steps={[
                  { title: "n8n Cron trigger chạy mỗi giờ", desc: "Kiểm tra: ai có buổi học trong 2 giờ tới và chưa xác nhận từ nhắc lần 1?" },
                  { title: "Lọc học viên chưa xác nhận", desc: "So sánh với log Google Sheet từ Workflow 1 — chỉ nhắc người chưa reply 'OK'" },
                  { title: "Gửi ZNS nhắc lần 2 qua Zalo OA", desc: '"[Tên] ơi, còn 2 tiếng nữa là đến giờ học [Tên lớp]. Hẹn gặp bạn tại [Phòng học] nhé!"' },
                  { title: "Vẫn không reply → thông báo giáo viên", desc: "Nếu 30 phút trước giờ học vẫn không có phản hồi → Telegram alert đến giáo viên phụ trách lớp" },
                ]} />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    { icon: <span className="text-lg">🔄</span>, label: "Cron mỗi giờ", sub: "Check liên tục" },
                    { icon: <span className="text-lg">🔍</span>, label: "Lọc chưa xác nhận", sub: "So với log lần 1" },
                    { icon: <span className="text-lg">💬</span>, label: "ZNS nhắc lần 2", sub: "2 giờ trước học" },
                    { icon: <span className="text-lg">🔔</span>, label: "Alert giáo viên", sub: "Nếu vẫn không reply" },
                  ]}
                />

                {/* Workflow 3 */}
                <h3 id="workflow-3">Workflow 3: Điểm Danh Check-In Tự Động</h3>

                <p>
                  Thay vì giáo viên điểm danh thủ công đầu buổi, học viên tự check-in qua Zalo
                  OA — nhanh hơn, chính xác hơn, và tạo dữ liệu chuyên cần tự động.
                </p>

                <StepList steps={[
                  { title: "15 phút trước giờ học: Zalo gửi link check-in", desc: '"Buổi học sắp bắt đầu! Bấm vào đây để check-in tham dự: [link]"' },
                  { title: "Học viên bấm link → điền mã OTP 4 số", desc: "Mỗi buổi học có mã OTP khác nhau — tránh check-in hộ. Mã được tạo tự động bởi n8n." },
                  { title: "n8n xác nhận và ghi điểm danh", desc: "Cập nhật Google Sheet: tên học viên, thời gian check-in, buổi học, lớp" },
                  { title: "Quá 15 phút sau giờ học chưa check-in → vắng mặt tự động", desc: "Hệ thống tự đánh vắng, gửi thông báo phụ huynh (với học sinh nhỏ tuổi)" },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">📲</span>, label: "Zalo gửi link", sub: "15 phút trước học" },
                    { icon: <span className="text-lg">🔢</span>, label: "OTP 4 số", sub: "Xác thực check-in" },
                    { icon: <span className="text-lg">✅</span>, label: "Xác nhận tham dự", sub: "Ghi log tự động" },
                    { icon: <span className="text-lg">📋</span>, label: "Cập nhật điểm danh", sub: "Google Sheet real-time" },
                    { icon: <span className="text-lg">🔔</span>, label: "Alert phụ huynh", sub: "Nếu vắng không báo" },
                  ]}
                />

                <CalloutBox type="success" title="Lợi ích kép">
                  Ngoài giảm công việc thủ công, dữ liệu điểm danh tự động cho phép bạn theo dõi
                  xu hướng chuyên cần của từng học viên. Ai nghỉ quá 3 buổi liên tiếp → trigger
                  workflow chăm sóc riêng từ quản lý học vụ.
                </CalloutBox>

                {/* Workflow 4 */}
                <h3 id="workflow-4">Workflow 4: Lead Capture Từ Form Đăng Ký Tự Động</h3>

                <p>
                  Khi học viên tiềm năng điền form tư vấn trên website hoặc fanpage, n8n
                  tự động phân loại, lưu trữ và bắt đầu chuỗi chăm sóc qua Zalo OA — không
                  cần nhân viên tư vấn can thiệp bước đầu.
                </p>

                <StepList steps={[
                  { title: "Webhook nhận data từ form đăng ký", desc: "Google Forms, Typeform, Facebook Lead Ads — tất cả đều gửi được về n8n qua webhook" },
                  { title: "Phân loại lead theo khóa học quan tâm", desc: "n8n đọc trường 'Khóa học' → tag lead: Tiếng Anh, Lập trình, Kỹ năng mềm..." },
                  { title: "Gửi Zalo OA: xác nhận + thông tin khóa học", desc: '"Cảm ơn [Tên] đã quan tâm đến [Khóa học]! Mình gửi bạn lịch khai giảng và học phí ngay đây..."' },
                  { title: "Tạo task nhắc tư vấn viên sau 24h", desc: "Nếu lead chưa đặt lịch tư vấn sau 1 ngày → Slack/Telegram alert cho team sales" },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">📝</span>, label: "Form đăng ký", sub: "Website / Facebook Ads" },
                    { icon: <span className="text-lg">⚡</span>, label: "n8n webhook", sub: "Nhận data real-time" },
                    { icon: <span className="text-lg">🏷️</span>, label: "Phân loại lead", sub: "Theo khóa học" },
                    { icon: <span className="text-lg">💬</span>, label: "Zalo OA welcome", sub: "Thông tin + lịch học" },
                    { icon: <span className="text-lg">📌</span>, label: "Task tư vấn viên", sub: "Nếu chưa book lịch" },
                  ]}
                />

                {/* Workflow 5 */}
                <h3 id="workflow-5">Workflow 5: Báo Cáo Sĩ Số Cuối Ngày</h3>

                <p>
                  Thay vì quản lý phải tổng hợp thủ công từ nhiều lớp, n8n tự động gom dữ
                  liệu điểm danh và gửi báo cáo tóm tắt mỗi tối — mất 0 phút nhân sự.
                </p>

                <StepList steps={[
                  { title: "n8n Cron trigger lúc 21:00 hàng ngày", desc: "Đọc toàn bộ dữ liệu điểm danh trong ngày từ Google Sheet" },
                  { title: "Tổng hợp theo từng lớp", desc: "Số học viên có mặt / vắng mặt / vắng có phép cho mỗi lớp học trong ngày" },
                  { title: "Gửi báo cáo qua Zalo OA cho quản lý", desc: "Tin nhắn định dạng bảng: Lớp A: 12/15 học viên (80%), Lớp B: 8/10 (80%)..." },
                  { title: "Gắn cờ lớp có sĩ số thấp dưới 70%", desc: "Lớp nào dưới ngưỡng → highlight đỏ trong báo cáo, gửi thêm Telegram alert" },
                ]} />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Cron 21:00", sub: "Tổng kết cuối ngày" },
                    { icon: <span className="text-lg">📊</span>, label: "Đọc Google Sheet", sub: "Dữ liệu điểm danh" },
                    { icon: <span className="text-lg">🧮</span>, label: "Tổng hợp", sub: "Theo từng lớp" },
                    { icon: <span className="text-lg">📋</span>, label: "Báo cáo Zalo", sub: "Gửi quản lý lúc 21h" },
                    { icon: <span className="text-lg">🚨</span>, label: "Alert lớp thấp", sub: "Dưới 70% sĩ số" },
                  ]}
                />

                {/* Section 4: Results */}
                <h2 id="ket-qua">Trước và Sau Khi Tự Động Hóa Nhắc Lịch</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Nhắc lịch thủ công",
                    items: [
                      "Nhân viên gọi điện 3 giờ/ngày cho từng học viên",
                      "Nhắn Zalo cá nhân từng người, không có template",
                      "Miss lịch 10-15%, không biết ai nghỉ cho đến khi bắt đầu lớp",
                      "Điểm danh viết tay, tổng hợp cuối tuần mới biết tỷ lệ",
                      "Lead form chờ nhân viên check email rồi mới gọi lại",
                      "Báo cáo sĩ số: quản lý tổng hợp thủ công mỗi tối",
                    ],
                  }}
                  after={{
                    title: "Sau — Zalo OA + n8n tự động",
                    items: [
                      "0 phút gọi điện — Zalo ZNS nhắc tự động 24h + 2h trước",
                      "Học viên xác nhận/xin nghỉ qua nút bấm trong Zalo",
                      "Miss lịch giảm xuống 3-5%, biết trước từ tối hôm trước",
                      "Điểm danh OTP real-time, báo cáo tự động lúc 21:00",
                      "Lead nhận Zalo welcome ngay lập tức, tư vấn viên được nhắc sau 24h",
                      "Quản lý nhận báo cáo đầy đủ qua Zalo mỗi tối, không cần làm gì",
                    ],
                  }}
                />

                <StatCard stats={[
                  { value: "3 giờ → 0", label: "thời gian gọi điện/ngày", sub: "nhân viên tập trung việc có giá trị hơn", color: "text-accent" },
                  { value: "-80%", label: "tỷ lệ miss lịch", sub: "từ 12-15% xuống 3-5%" },
                  { value: "85-90%", label: "tỷ lệ đọc ZNS", sub: "so với 40-60% của SMS" },
                  { value: "21:00", label: "báo cáo sĩ số tự động", sub: "0 phút nhân sự tổng hợp" },
                ]} />

                {/* Section 5: Comparison */}
                <h2 id="so-sanh">So Sánh Chi Tiết: Thủ Công vs Tự Động</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "Tự động (n8n + Zalo OA)"]}
                  highlightCol={2}
                  rows={[
                    ["Nhắc lịch 24h trước", "Nhân viên gọi điện + nhắn Zalo cá nhân", "ZNS tự động gửi lúc 18:00, không cần can thiệp"],
                    ["Nhắc lịch 2h trước", "Thường bỏ qua vì quá mất thời gian", "Tự động, chỉ nhắc người chưa xác nhận"],
                    ["Điểm danh", "Giáo viên gọi tên đầu buổi, ghi tay", "Học viên tự check-in OTP qua Zalo"],
                    ["Xử lý vắng mặt", "Biết khi lớp đã bắt đầu", "Biết trước 2-12 giờ, thông báo phụ huynh ngay"],
                    ["Lead từ form đăng ký", "Chờ nhân viên check email, gọi lại sau vài giờ", "Zalo welcome tự động trong vài giây"],
                    ["Báo cáo sĩ số", "Tổng hợp thủ công cuối ngày/tuần", "Tự động 21:00 hàng ngày, không làm gì"],
                    ["Chi phí nhân sự", "1 FTE hành chính (10-15 triệu/tháng)", "~500k-1 triệu/tháng vận hành hệ thống"],
                    ["Khả năng scale", "Tuyến tính: thêm học viên = thêm người", "Phi tuyến: 200 hay 2000 học viên, cùng chi phí"],
                    ["Hoạt động", "Giờ hành chính, nghỉ cuối tuần", "24/7, kể cả ngày lễ"],
                  ]}
                />

                {/* Section 6: FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Section 7: Getting Started */}
                <h2 id="bat-dau">Bắt Đầu Như Thế Nào?</h2>

                <p>
                  Không cần triển khai cả 5 workflow cùng lúc. Bắt đầu nhỏ, thấy kết quả,
                  rồi mở rộng dần. Đây là lộ trình được đề xuất:
                </p>

                <StepList steps={[
                  {
                    title: "Tuần 1: Đăng ký Zalo OA và xin phê duyệt ZNS",
                    desc: "Vào oa.zalo.me → tạo OA cho trung tâm. Xin phê duyệt template ZNS nhắc lịch học — thường mất 1-3 ngày làm việc. Chuẩn bị dữ liệu lịch học trên Google Calendar hoặc Google Sheet.",
                  },
                  {
                    title: "Tuần 2: Setup Workflow 1 — Nhắc lịch 24h",
                    desc: "Cài n8n (VPS hoặc n8n Cloud), kết nối Google Calendar và Zalo OA API. Chạy thử với 1 lớp học, xác nhận tin nhắn gửi đúng trước khi triển khai toàn bộ.",
                  },
                  {
                    title: "Tuần 3: Thêm Workflow 2 — Nhắc lịch 2h",
                    desc: "Workflow 2 tái sử dụng phần lớn logic của Workflow 1. Chỉ cần thêm bước lọc 'chưa xác nhận' và điều chỉnh thời gian trigger.",
                  },
                  {
                    title: "Tuần 4-5: Triển khai Workflow 3 + 5",
                    desc: "Điểm danh OTP và báo cáo sĩ số — hai workflow này cần thiết kế giao diện check-in nhỏ và template báo cáo. Ưu tiên làm cùng lúc vì chia sẻ cùng nguồn dữ liệu Google Sheet.",
                  },
                  {
                    title: "Tháng 2: Workflow 4 — Lead capture",
                    desc: "Sau khi 4 workflow kia đã chạy ổn định, thêm lead capture. Workflow này độc lập và không phụ thuộc dữ liệu nội bộ — dễ setup nhất trong 5 workflow.",
                  },
                ]} />

                <CalloutBox type="info" title="Cần hỗ trợ triển khai?">
                  <p className="mb-3">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi sẽ phân tích
                    quy trình hiện tại của trung tâm, xác định workflow nào mang lại impact
                    nhanh nhất, và đưa ra lộ trình triển khai cụ thể phù hợp quy mô của bạn.
                  </p>
                  <p className="mb-3">
                    Hoặc nếu bạn muốn tự đánh giá mức độ sẵn sàng tự động hóa của trung tâm:
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
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Nhắc Lịch Học Viên Qua Zalo OA" slug="nhac-lich-zalo-oa-giao-duc" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
