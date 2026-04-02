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
  title: "Tự Động Hóa Salon & Spa: Đặt Lịch, Nhắc Hẹn & Chăm Khách VIP",
  description:
    "Hướng dẫn tự động hóa salon spa với 4 workflow thực tế: xác nhận đặt lịch, nhắc hẹn 24h+2h, thu thập phản hồi sau dịch vụ, và chương trình VIP loyalty. Giảm no-show 70%, tăng tỷ lệ quay lại khách hàng trung thành.",
  keywords: [
    "tự động hóa salon",
    "nhắc lịch spa",
    "automation salon spa",
    "n8n salon tóc",
    "zalo oa salon",
    "giảm no-show spa",
    "chăm sóc khách VIP salon",
    "đặt lịch spa tự động",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề no-show và doanh thu thất thoát ở salon & spa", level: 2 },
  { id: "so-lieu", text: "Số liệu thực tế về thị trường làm đẹp Việt Nam", level: 2 },
  { id: "giai-phap", text: "4 workflow tự động hóa salon & spa", level: 2 },
  { id: "workflow-1", text: "Xác nhận đặt lịch tức thì", level: 3 },
  { id: "workflow-2", text: "Nhắc hẹn 24h + 2h trước dịch vụ", level: 3 },
  { id: "workflow-3", text: "Thu thập phản hồi & mời đánh giá Google", level: 3 },
  { id: "workflow-4", text: "Chương trình VIP & loyalty tự động", level: 3 },
  { id: "ket-qua", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "so-sanh", text: "So sánh thủ công vs tự động", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu triển khai như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "Salon nhỏ 2-3 ghế có cần tự động hóa không?",
    a: "Cần — đặc biệt khi quy mô nhỏ nghĩa là mỗi slot trống đều tác động lớn đến doanh thu ngày hôm đó. Workflow nhắc lịch 24h+2h (Workflow 2) là ưu tiên đầu tiên: triển khai trong 1 tuần, chi phí vận hành dưới 400k/tháng, và bắt đầu giảm no-show ngay từ tuần đầu. Với salon 2-3 ghế, chỉ cần giữ thêm 2-3 lịch hẹn/tuần không bị bỏ trống là đã hoàn vốn hệ thống.",
  },
  {
    q: "Khách đặt lịch qua nhiều kênh khác nhau (Facebook, Zalo, điện thoại) thì tự động hóa thế nào?",
    a: "n8n hoạt động như một trung tâm tích hợp: đặt lịch từ Facebook Messenger → webhook ghi vào Google Sheet/Calendar; đặt qua Zalo OA → webhook ghi vào cùng Sheet; lễ tân nhận điện thoại → nhập thủ công vào Sheet. Sau đó một workflow duy nhất đọc từ Sheet và tự động gửi ZNS xác nhận + nhắc hẹn cho tất cả — bất kể nguồn đặt lịch ban đầu là gì.",
  },
  {
    q: "Nhắc hẹn như vậy khách có thấy phiền không?",
    a: "Không, nếu nhắc đúng thời điểm và đúng nội dung. Nghiên cứu cho thấy 85% khách hàng đánh giá cao nhắc hẹn tự động — họ bận và dễ quên. Bí quyết là: cá nhân hóa (gọi tên, ghi rõ dịch vụ và tên kỹ thuật viên), giữ ngắn gọn, không spam. Nhắc đúng 2 lần (24h và 2h) là tối ưu — thêm lần thứ 3 thường phản tác dụng.",
  },
  {
    q: "Tích hợp phần mềm quản lý salon (như KiotViet, SlickPos, Salone) được không?",
    a: "Phụ thuộc phần mềm. KiotViet và SlickPos có API REST — n8n kết nối trực tiếp để đọc lịch hẹn và cập nhật trạng thái. Phần mềm không có API: dùng export Google Sheet làm lớp trung gian (nhân viên sync sang Sheet, n8n xử lý từ Sheet). Nếu chỉ dùng app đặt lịch thủ công (sổ hoặc Excel), Google Sheet là giải pháp đơn giản và miễn phí để bắt đầu.",
  },
  {
    q: "Chương trình VIP loyalty tự động hoạt động chính xác không khi khách dùng nhiều dịch vụ cùng lúc?",
    a: "n8n theo dõi điểm tích lũy theo số điện thoại — mỗi lần check-out ghi nhận giá trị hóa đơn và cộng điểm theo công thức bạn cấu hình (ví dụ: 10k chi tiêu = 1 điểm). Nhiều dịch vụ trong cùng một lần đến → cộng điểm cho tổng hóa đơn. Khi khách đạt ngưỡng VIP → trigger gửi ZNS thông báo và quyền lợi ngay lập tức. Lịch sử điểm ghi vào Google Sheet — có thể kiểm tra bất kỳ lúc nào.",
  },
  {
    q: "Chi phí hàng tháng để vận hành 4 workflow này là bao nhiêu?",
    a: "Chi phí chính: hosting n8n (VPS ~200-400k/tháng hoặc n8n Cloud từ $20/tháng) + ZNS Zalo (ước tính 200-600k/tháng cho 200-400 lịch hẹn, mỗi khách 2-3 tin). Tổng khoảng 500k-1.2 triệu/tháng. So với mỗi slot trống trị giá 150-500k tùy dịch vụ, hệ thống hoàn vốn khi tránh được 3-4 lịch hẹn bị no-show mỗi tháng — thường xảy ra trong tuần đầu tiên triển khai.",
  },
];

export default function AutomationSalonSpaBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="automation-salon-spa" title="Tự Động Hóa Salon & Spa: Đặt Lịch, Nhắc Hẹn, VIP" />
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
              <span className="text-slate-600 truncate max-w-[300px]">Làm đẹp</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold">
                Làm Đẹp
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold">
                Salon & Spa
              </span>
              <span className="text-xs text-slate-500">14 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Tự Động Hóa Salon & Spa —{" "}
              <span className="gradient-text">Đặt Lịch, Nhắc Hẹn & Chăm Khách VIP</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              15-30% khách đặt lịch salon & spa không đến mà không báo trước — mỗi ghế trống là
              doanh thu biến mất không thu hồi được. Trong khi đó, 46% khách hàng làm đẹp Việt
              Nam đặt lịch online và 67% ưu tiên kênh di động. 4 workflow tự động hóa toàn bộ
              vòng đời lịch hẹn — từ xác nhận đặt lịch đến nuôi dưỡng khách VIP — giảm no-show
              đến 70% mà không cần thêm nhân sự.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Section 1: Problem */}
                <h2 id="van-de">No-Show Đang Ăn Mòn Doanh Thu Salon & Spa Mỗi Ngày</h2>

                <p>
                  Kỹ thuật viên chuẩn bị xong dụng cụ, ghế đã sẵn sàng, lễ tân chờ đón — nhưng
                  khách không đến. Không gọi điện báo, không nhắn tin hủy. Chỉ đơn giản là im
                  lặng. Slot đó biến mất vĩnh viễn.
                </p>

                <p>
                  Đây không phải trường hợp hi hữu. Trong ngành làm đẹp, tỷ lệ no-show dao động{" "}
                  <strong>15-30%</strong> — cao hơn đáng kể so với các ngành dịch vụ khác. Với
                  salon có 20 lịch hẹn/ngày, tỷ lệ 20% có nghĩa là 4 ghế trống mỗi ngày, tương
                  đương khoảng 80 lịch hẹn bị bỏ lỡ mỗi tháng.
                </p>

                <CalloutBox type="warning" title="No-show không chỉ là doanh thu mất đi">
                  Mỗi lịch hẹn bị no-show kéo theo nhiều tổn thất đồng thời: kỹ thuật viên không
                  có việc làm trong khung giờ đó (trả lương nhưng không có doanh thu), khách muốn
                  đặt cùng khung giờ đó bị từ chối, nguyên vật liệu đã chuẩn bị có thể hỏng, và
                  khách no-show hiếm khi quay lại — họ thường cảm thấy ngại và tìm salon khác.
                  Một lần no-show có thể mất đi giá trị cả vòng đời của một khách hàng trung thành.
                </CalloutBox>

                <p>
                  Lễ tân có thể gọi điện nhắc từng người — nhưng với 30-50 lịch hẹn/ngày trải
                  đều 6-7 ngày/tuần, đó là công việc lặp đi lặp lại không hiệu quả. Nhiều salon
                  bỏ qua bước nhắc hoặc chỉ nhắc những khách VIP. Kết quả: no-show vẫn cao, lễ
                  tân quá tải với công việc giá trị thấp, và không có dữ liệu để hiểu tại sao
                  khách không quay lại.
                </p>

                <p>
                  Vấn đề không nằm ở nhân sự. Vấn đề là{" "}
                  <strong>quy trình giao tiếp với khách hoàn toàn thủ công và không
                  thể scale</strong>. Nghiên cứu ngành chứng minh: một hệ thống nhắc hẹn tự
                  động đúng cách có thể giảm no-show tới <strong>70%</strong> — không cần thêm
                  một nhân viên nào.
                </p>

                {/* Section 2: Stats */}
                <h2 id="so-lieu">Thị Trường Làm Đẹp Việt Nam: Cơ Hội Đang Bị Bỏ Ngỏ</h2>

                <StatCard stats={[
                  { value: "$2.79B", label: "quy mô thị trường làm đẹp Việt Nam", sub: "và tiếp tục tăng trưởng mạnh", color: "text-primary" },
                  { value: "15-30%", label: "tỷ lệ no-show trung bình ngành salon", sub: "khi không có hệ thống nhắc hẹn" },
                  { value: "70%", label: "giảm no-show", sub: "khi triển khai nhắc hẹn tự động đa kênh", color: "text-accent" },
                  { value: "46%", label: "khách đặt lịch online", sub: "67% ưu tiên kênh di động (Zalo, app)" },
                ]} />

                <p>
                  Với thị trường làm đẹp Việt Nam đạt <strong>2.79 tỷ USD</strong>, nhu cầu
                  dịch vụ salon & spa đang bùng nổ — nhưng phần lớn cơ sở vẫn vận hành theo
                  quy trình thủ công từ 10-15 năm trước. Trong khi đó, khách hàng đã thay
                  đổi: <strong>46% đặt lịch qua kênh online</strong>, và{" "}
                  <strong>67% ưu tiên thiết bị di động</strong> — Zalo là kênh số một.
                </p>

                <p>
                  Nghiên cứu tác động của nhắc hẹn cá nhân hóa cho thấy hiệu quả rõ rệt:{" "}
                  <strong>+48% tỷ lệ phản hồi</strong> khi tin nhắc đề cập tên khách, dịch
                  vụ cụ thể, và tên kỹ thuật viên — so với tin nhắc chung chung. Đây chính là
                  lợi thế mà n8n + Zalo OA mang lại: cá nhân hóa quy mô lớn, tự động hoàn
                  toàn.
                </p>

                <CalloutBox type="info" title="Tại sao Zalo ZNS là lựa chọn tối ưu cho salon & spa?">
                  Zalo có 78 triệu người dùng hoạt động tại Việt Nam — hầu hết khách hàng
                  salon của bạn đều dùng Zalo hàng ngày. ZNS (Zalo Notification Service)
                  đạt tỷ lệ đọc 85-90%, cao hơn nhiều so với SMS (40-60%) và email. Chi phí
                  200-800 VND/tin — rẻ hơn gọi điện nhắc thủ công cả về tiền lẫn thời gian
                  nhân sự. Tin ZNS hiển thị tên salon, logo, và nội dung có định dạng đẹp —
                  tạo ấn tượng chuyên nghiệp ngay từ lần đầu tiên khách nhận được.
                </CalloutBox>

                {/* Section 3: Workflows */}
                <h2 id="giai-phap">4 Workflow Tự Động Hóa Toàn Bộ Hành Trình Khách Hàng</h2>

                <p>
                  Dùng n8n kết nối Google Calendar (hoặc phần mềm quản lý salon) với Zalo OA
                  API, bạn xây dựng một hệ thống chạy 24/7 — xác nhận lịch hẹn ngay khi đặt,
                  nhắc đúng lúc trước khi đến, thu thập phản hồi sau dịch vụ, và tự động nuôi
                  dưỡng khách VIP. Đây là 4 workflow cốt lõi theo thứ tự ưu tiên triển khai:
                </p>

                {/* Workflow 1 */}
                <h3 id="workflow-1">Workflow 1: Xác Nhận Đặt Lịch Tức Thì</h3>

                <p>
                  Thời điểm khách vừa đặt lịch xong là lúc tâm trạng tốt nhất — họ đang háo
                  hức và cam kết. Gửi xác nhận tức thì (trong vòng 30 giây) củng cố cam kết
                  đó và thiết lập kỳ vọng rõ ràng, giảm đáng kể khả năng quên hoặc bỏ lịch
                  về sau.
                </p>

                <StepList steps={[
                  {
                    title: "Webhook nhận trigger khi có lịch hẹn mới",
                    desc: "Đặt lịch qua website (form) → webhook. Qua Zalo OA chatbot → webhook. Lễ tân nhập Google Sheet → n8n polling phát hiện record mới. Tất cả đổ về cùng một workflow xử lý.",
                  },
                  {
                    title: "n8n trích xuất và chuẩn hóa thông tin lịch hẹn",
                    desc: "Tên khách, số điện thoại, dịch vụ, tên kỹ thuật viên, ngày giờ, địa chỉ cơ sở (nếu chuỗi nhiều chi nhánh). Chuẩn hóa format ngày giờ và tên dịch vụ trước khi gửi.",
                  },
                  {
                    title: "Gửi ZNS xác nhận ngay lập tức qua Zalo OA",
                    desc: '"Salon [Tên] đã xác nhận lịch hẹn của bạn! Dịch vụ: [Dịch vụ] với [Kỹ thuật viên] lúc [Giờ] ngày [Ngày]. Địa chỉ: [Địa chỉ]. Nếu cần thay đổi, nhắn tin lại đây."',
                  },
                  {
                    title: "Ghi log vào Google Sheet trung tâm + alert nội bộ",
                    desc: "Ghi nhận lịch hẹn mới vào Sheet theo dõi. Nếu đặt lịch ngoài giờ làm việc → gửi Telegram thông báo cho quản lý/lễ tân để xem xét sáng hôm sau.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#EC4899"
                  steps={[
                    { icon: <span className="text-lg">📋</span>, label: "Đặt lịch mới", sub: "Web / Zalo / Lễ tân" },
                    { icon: <span className="text-lg">⚡</span>, label: "Webhook trigger", sub: "n8n nhận ngay lập tức" },
                    { icon: <span className="text-lg">🔍</span>, label: "Chuẩn hóa dữ liệu", sub: "Tên, dịch vụ, giờ" },
                    { icon: <span className="text-lg">💬</span>, label: "ZNS xác nhận", sub: "Gửi trong 30 giây" },
                    { icon: <span className="text-lg">📊</span>, label: "Ghi log + Alert", sub: "Sheet & Telegram" },
                  ]}
                />

                <CalloutBox type="tip">
                  Thêm hướng dẫn chuẩn bị vào tin xác nhận: "Để dịch vụ đạt kết quả tốt
                  nhất, vui lòng đến với tóc sạch và không dùng sản phẩm tạo kiểu." Hoặc
                  với dịch vụ nails: "Vui lòng không dùng kem dưỡng tay trong 2 tiếng trước
                  khi đến." Thông tin hữu ích như vậy khiến khách thấy được chăm sóc ngay
                  từ lần đầu tương tác.
                </CalloutBox>

                {/* Workflow 2 */}
                <h3 id="workflow-2">Workflow 2: Nhắc Hẹn 24 Giờ + 2 Giờ Trước Dịch Vụ</h3>

                <p>
                  Đây là workflow có ROI cao nhất trong toàn bộ hệ thống. Hai lần nhắc ở hai
                  thời điểm chiến lược — 24h để khách sắp xếp kế hoạch ngày hôm sau, 2h để
                  nhắc người đã quên hoặc bị bận đột xuất — phối hợp nhau giảm no-show tối
                  đa theo nghiên cứu thực tế.
                </p>

                <StepList steps={[
                  {
                    title: "Cron trigger chạy lúc 17:00 hàng ngày — nhắc lịch 24h",
                    desc: "n8n đọc Google Sheet/Calendar: ai có lịch hẹn từ 17:00 ngày mai đến 17:00 ngày kia. Lọc lấy tên, số điện thoại, dịch vụ, tên kỹ thuật viên, và khung giờ.",
                  },
                  {
                    title: "Gửi ZNS nhắc lịch 24h — cá nhân hóa hoàn toàn",
                    desc: '"[Tên] ơi, nhắc nhẹ bạn nhé! Ngày mai lúc [Giờ] bạn có lịch [Dịch vụ] với [Kỹ thuật viên] tại [Salon]. Hẹn gặp bạn sớm nhé!"',
                  },
                  {
                    title: "Cron trigger chạy mỗi 30 phút — nhắc lịch 2h",
                    desc: "Kiểm tra ai có lịch hẹn trong 2 giờ tới. So sánh với log xác nhận — chỉ nhắc khách chưa xác nhận hoặc chưa phản hồi từ lần nhắc 24h.",
                  },
                  {
                    title: "Gửi ZNS nhắc 2h + nút hành động",
                    desc: '"Còn 2 tiếng nữa là đến giờ hẹn rồi [Tên]! [Kỹ thuật viên] đang chờ bạn lúc [Giờ]." Kèm nút: "Tôi sẽ đến đúng giờ" và "Tôi cần hủy/đổi lịch".',
                  },
                  {
                    title: "Ghi log phản hồi và alert lễ tân khi cần",
                    desc: "Khách bấm nút → n8n ghi nhận. Nếu 45 phút trước giờ hẹn vẫn không có phản hồi → gửi Telegram alert cho lễ tân để gọi điện xác nhận trực tiếp.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Cron 17:00", sub: "Nhắc lịch ngày mai" },
                    { icon: <span className="text-lg">📅</span>, label: "Lọc lịch hẹn", sub: "Google Sheet/Calendar" },
                    { icon: <span className="text-lg">💬</span>, label: "ZNS nhắc 24h", sub: "Cá nhân hóa đầy đủ" },
                    { icon: <span className="text-lg">🔄</span>, label: "Cron mỗi 30p", sub: "Check lịch hẹn 2h tới" },
                    { icon: <span className="text-lg">💬</span>, label: "ZNS nhắc 2h", sub: "Nút xác nhận / hủy" },
                    { icon: <span className="text-lg">🔔</span>, label: "Alert lễ tân", sub: "Gọi nếu không phản hồi" },
                  ]}
                />

                <CalloutBox type="success" title="Cá nhân hóa tăng hiệu quả nhắc hẹn lên 48%">
                  Tin nhắc đề cập tên kỹ thuật viên cụ thể — không chỉ tên dịch vụ — tạo
                  cảm giác có người đang chờ đợi mình, không chỉ một "slot" vô danh. Nghiên
                  cứu cho thấy cá nhân hóa ở cấp độ này tăng tỷ lệ phản hồi và xác nhận
                  lên <strong>48%</strong> so với tin nhắn chung chung.
                </CalloutBox>

                {/* Workflow 3 */}
                <h3 id="workflow-3">Workflow 3: Thu Thập Phản Hồi & Mời Đánh Giá Google</h3>

                <p>
                  Phản hồi sau dịch vụ là vũ khí cạnh tranh bị hầu hết salon bỏ ngỏ — vì
                  quy trình thủ công quá bất tiện. Tự động hóa biến đây thành nguồn dữ liệu
                  thường xuyên để cải thiện chất lượng và xây dựng uy tín online qua đánh
                  giá Google Maps.
                </p>

                <StepList steps={[
                  {
                    title: "Trigger 2-3 giờ sau khi lịch hẹn kết thúc",
                    desc: "n8n theo dõi lịch hẹn: khi slot chuyển sang trạng thái Completed (lễ tân đánh dấu hoặc tự động sau thời gian dự kiến) → đợi 2-3 giờ → trigger gửi khảo sát. Thời điểm vàng: khách đã về nhà, trải nghiệm còn tươi.",
                  },
                  {
                    title: "Gửi ZNS form phản hồi siêu ngắn qua Zalo OA",
                    desc: '"[Tên] ơi, cảm ơn bạn đã ghé [Salon] hôm nay! [Kỹ thuật viên] rất vui được phục vụ bạn. Bạn có 30 giây cho chúng tôi biết trải nghiệm hôm nay không?" Kèm nút đánh giá 5 sao trực tiếp trong Zalo.',
                  },
                  {
                    title: "Nếu khách đánh giá 4-5 sao — mời đánh giá Google Maps",
                    desc: '"Cảm ơn bạn rất nhiều! Nếu bạn có thể chia sẻ trải nghiệm trên Google sẽ giúp ích rất nhiều cho chúng tôi." Kèm link trực tiếp đến trang đánh giá Google của salon.',
                  },
                  {
                    title: "Nếu khách đánh giá 1-3 sao — alert quản lý xử lý ngay",
                    desc: "Telegram alert tức thì cho quản lý với tên khách, dịch vụ, kỹ thuật viên, và điểm đánh giá. Quản lý có thể liên hệ khách trong vòng 30-60 phút để giải quyết — trước khi khách đăng đánh giá tiêu cực lên mạng.",
                  },
                  {
                    title: "Tổng hợp dữ liệu vào Google Sheet theo kỹ thuật viên và dịch vụ",
                    desc: "Mỗi phản hồi ghi nhận: tên khách, kỹ thuật viên, dịch vụ, điểm đánh giá, nhận xét mở (nếu có), ngày. Dashboard theo tuần và tháng giúp quản lý theo dõi xu hướng.",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">✂️</span>, label: "Dịch vụ hoàn thành", sub: "Slot → Completed" },
                    { icon: <span className="text-lg">⏱️</span>, label: "Chờ 2-3 giờ", sub: "Khách về đến nhà" },
                    { icon: <span className="text-lg">⭐</span>, label: "ZNS khảo sát", sub: "30 giây, nút bấm" },
                    { icon: <span className="text-lg">🗺️</span>, label: "4-5 sao → Google", sub: "Link đánh giá Maps" },
                    { icon: <span className="text-lg">🚨</span>, label: "1-3 sao → Alert", sub: "Quản lý xử lý ngay" },
                    { icon: <span className="text-lg">📊</span>, label: "Ghi Sheet", sub: "Theo KTV & dịch vụ" },
                  ]}
                />

                <CalloutBox type="info" title="Chiến lược đánh giá Google thực tế">
                  Salon có hệ thống thu thập đánh giá tự động sau dịch vụ thường tăng số
                  đánh giá Google Maps gấp 3-5 lần trong 3 tháng đầu. Đánh giá Google là
                  kênh tìm kiếm khách hàng mới miễn phí hiệu quả nhất cho salon — quan
                  trọng hơn cả chạy quảng cáo Facebook trong nhiều trường hợp.
                </CalloutBox>

                {/* Workflow 4 */}
                <h3 id="workflow-4">Workflow 4: Chương Trình VIP & Loyalty Tự Động</h3>

                <p>
                  Khách hàng trung thành tạo ra 80% doanh thu cho salon — nhưng hầu hết
                  cơ sở không có hệ thống tích điểm và ưu đãi VIP có hệ thống. Workflow 4
                  tự động theo dõi lịch sử chi tiêu, phân loại khách VIP, và gửi ưu đãi
                  cá nhân hóa đúng thời điểm để khách quay lại thường xuyên hơn.
                </p>

                <StepList steps={[
                  {
                    title: "Sau mỗi lần thanh toán — cộng điểm tự động theo giá trị hóa đơn",
                    desc: "n8n đọc Google Sheet thanh toán: mỗi 100k chi tiêu = 1 điểm (hoặc công thức bạn thiết lập). Cập nhật tổng điểm trong bảng khách hàng theo số điện thoại. Gửi ZNS thông báo điểm ngay sau thanh toán.",
                  },
                  {
                    title: "Khi đạt ngưỡng VIP — trigger gửi thẻ VIP và quyền lợi",
                    desc: 'Ví dụ ngưỡng: 500 điểm (5 triệu chi tiêu) → hạng Silver; 1000 điểm → Gold; 2000 điểm → Platinum. ZNS: "Chúc mừng [Tên]! Bạn vừa đạt hạng [VIP Level] tại [Salon]. Quyền lợi: [liệt kê ưu đãi]."',
                  },
                  {
                    title: "Nhắc khách quay lại sau X ngày theo lịch sử dịch vụ",
                    desc: "n8n theo dõi: khách cắt tóc thường quay lại sau 30-45 ngày; nhuộm sau 45-60 ngày; dưỡng da mặt sau 21-30 ngày. Khi đến thời điểm → gửi ZNS gợi ý đặt lịch với ưu đãi nhỏ.",
                  },
                  {
                    title: "Tặng quà sinh nhật tự động cho tất cả khách hàng",
                    desc: 'Cron trigger chạy hàng ngày kiểm tra ai có sinh nhật hôm nay hoặc ngày mai. ZNS: "[Tên] ơi, sinh nhật vui vẻ nhé! [Salon] tặng bạn [ưu đãi] khi ghé thăm trong tháng này." Tỷ lệ đặt lịch từ tin sinh nhật đạt 35-45%.',
                  },
                  {
                    title: "Cảnh báo khách sắp mất hạng VIP",
                    desc: "Nếu khách VIP không đặt lịch trong 60 ngày → ZNS nhắc nhở với ưu đãi đặc biệt để giữ chân: 'Bạn còn [X] điểm để duy trì hạng [VIP]. Đặt lịch tuần này để không mất ưu đãi nhé!'",
                  },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">💰</span>, label: "Thanh toán xong", sub: "Cộng điểm tự động" },
                    { icon: <span className="text-lg">🏆</span>, label: "Đạt ngưỡng VIP", sub: "Gửi thẻ + quyền lợi" },
                    { icon: <span className="text-lg">🔄</span>, label: "Nhắc quay lại", sub: "Theo lịch sử dịch vụ" },
                    { icon: <span className="text-lg">🎂</span>, label: "Sinh nhật tự động", sub: "Ưu đãi cá nhân hóa" },
                    { icon: <span className="text-lg">⚠️</span>, label: "Cảnh báo mất hạng", sub: "Giữ chân khách VIP" },
                  ]}
                />

                <CalloutBox type="success" title="Tại sao chương trình loyalty tự động hiệu quả hơn thẻ giấy?">
                  Thẻ khách hàng thân thiết giấy thường bị để quên ở nhà, không biết còn
                  bao nhiêu điểm, và nhân viên thường quên đóng dấu. Hệ thống tự động theo
                  dõi mọi thứ qua số điện thoại — không cần thẻ, không cần nhớ. Khách nhận
                  thông báo điểm sau mỗi lần đến, biết mình cần bao nhiêu để lên hạng, và
                  nhận ưu đãi đúng thời điểm. Đây là lý do tỷ lệ quay lại tăng{" "}
                  <strong>25-40%</strong> ở các salon triển khai hệ thống này.
                </CalloutBox>

                {/* Section 4: Results */}
                <h2 id="ket-qua">Trước Và Sau Khi Tự Động Hóa Salon & Spa</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Quy trình thủ công",
                    items: [
                      "Lễ tân gọi điện nhắc lịch 1-2 tiếng mỗi ngày, vẫn bỏ sót nhiều ca",
                      "No-show 15-30%, biết khi ghế đã trống và không kịp lấp đầy",
                      "Xác nhận lịch hẹn không đồng nhất — khách đặt lịch xong không chắc có được xác nhận không",
                      "Thu thập phản hồi bằng miệng hoặc không thu thập — không có dữ liệu",
                      "Chương trình loyalty bằng thẻ giấy — hay mất thẻ, khách không nhớ điểm",
                      "Không biết khách nào sắp đến kỳ cắt/nhuộm — để khách tự nhớ và tự đặt",
                    ],
                  }}
                  after={{
                    title: "Sau — n8n + Zalo OA tự động",
                    items: [
                      "0 phút gọi điện nhắc lịch — ZNS cá nhân hóa tự động gửi đúng giờ cho từng khách",
                      "No-show giảm 70%, biết trước từ chiều hôm trước ai cần lễ tân gọi thêm",
                      "Xác nhận lịch hẹn ngay trong 30 giây — khách an tâm, slot không bị bỏ trống vì nhầm lẫn",
                      "25-40% khách phản hồi khảo sát, đánh giá Google Maps tăng 3-5x trong 3 tháng",
                      "Loyalty tự động theo số điện thoại — không cần thẻ, điểm cộng ngay sau thanh toán",
                      "Nhắc quay lại đúng chu kỳ dịch vụ — tỷ lệ tái đặt lịch tăng 25-40%",
                    ],
                  }}
                />

                <StatCard stats={[
                  { value: "70%", label: "giảm no-show", sub: "từ 15-30% xuống 5% trung bình", color: "text-accent" },
                  { value: "+48%", label: "tăng tỷ lệ phản hồi", sub: "nhờ cá nhân hóa tên và dịch vụ", color: "text-primary" },
                  { value: "3-5x", label: "đánh giá Google Maps mới", sub: "trong 3 tháng đầu triển khai" },
                  { value: "+25-40%", label: "tỷ lệ tái đặt lịch", sub: "khách quay lại đúng chu kỳ dịch vụ" },
                ]} />

                {/* Section 5: Comparison */}
                <h2 id="so-sanh">So Sánh Chi Tiết: Thủ Công vs Tự Động Hóa</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "Tự động (n8n + Zalo OA)"]}
                  highlightCol={2}
                  rows={[
                    ["Xác nhận đặt lịch", "Gọi điện hoặc nhắn tay — hay bị chậm hoặc quên", "ZNS trong 30 giây, 24/7 kể cả ngoài giờ làm việc"],
                    ["Nhắc hẹn 24h", "Lễ tân gọi điện từng người — mất 1-2 tiếng, hay bỏ sót", "ZNS tự động lúc 17:00, không bỏ sót ai"],
                    ["Nhắc hẹn 2h", "Thường không làm vì quá tốn thời gian", "Tự động mỗi 30 phút, chỉ nhắc người chưa xác nhận"],
                    ["Xử lý hủy lịch", "Khách gọi điện, lễ tân ghi thủ công", "Bấm nút Zalo → alert lễ tân, slot sẵn sàng đặt lại ngay"],
                    ["Phản hồi sau dịch vụ", "Hỏi miệng tại quầy — tỷ lệ thấp, không lưu dữ liệu", "ZNS 2-3h sau, 25-40% phản hồi, dữ liệu theo KTV"],
                    ["Đánh giá Google Maps", "Khách tự nhớ — hiếm khi xảy ra", "Tự động mời sau đánh giá 4-5 sao — tăng 3-5x reviews"],
                    ["Chương trình loyalty", "Thẻ giấy hay mất, nhân viên hay quên đóng dấu", "Tích điểm tự động theo SĐT, thông báo ngay sau thanh toán"],
                    ["Nhắc quay lại", "Khách tự nhớ — không nhất quán", "Tự động theo chu kỳ dịch vụ của từng khách"],
                    ["Giờ hoạt động", "Giờ hành chính, nghỉ cuối tuần và lễ", "24/7, tự động xử lý lịch hẹn cuối tuần và ngày lễ"],
                    ["Chi phí nhắc lịch", "2 tiếng lễ tân/ngày (~3-5 triệu/tháng)", "~500k-1.2 triệu/tháng vận hành toàn bộ hệ thống"],
                  ]}
                />

                {/* Section 6: FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Section 7: Getting Started */}
                <h2 id="bat-dau">Bắt Đầu Triển Khai Như Thế Nào?</h2>

                <p>
                  Không cần triển khai cả 4 workflow cùng lúc — và không nên. Bắt đầu với
                  Workflow mang lại kết quả nhanh và rõ nhất, đo lường trong 2-3 tuần, rồi
                  mở rộng. Đây là lộ trình được đề xuất cho salon & spa:
                </p>

                <StepList steps={[
                  {
                    title: "Tuần 1: Chuẩn bị nền tảng — Zalo OA và Google Sheet",
                    desc: "Vào oa.zalo.me → tạo OA cho salon (cần GPKD để xác minh). Soạn và nộp template ZNS nhắc lịch và xác nhận đặt lịch — Zalo thường duyệt trong 1-3 ngày làm việc. Chuẩn hóa dữ liệu lịch hẹn: đảm bảo mỗi record có tên khách, SĐT, dịch vụ, tên KTV, ngày giờ.",
                  },
                  {
                    title: "Tuần 2: Triển khai Workflow 1 + 2 — Xác nhận và Nhắc hẹn",
                    desc: "Cài n8n (VPS hoặc n8n Cloud), kết nối Google Sheet và Zalo OA API. Chạy thử Workflow 1 (xác nhận) và Workflow 2 (nhắc 24h + 2h) với 20 lịch hẹn đầu tiên. Xác nhận tin nhắn gửi đúng nội dung, đúng giờ, đúng khách trước khi mở rộng.",
                  },
                  {
                    title: "Tuần 3-4: Đo lường kết quả và tối ưu nội dung tin nhắn",
                    desc: "So sánh tỷ lệ no-show tuần trước và sau khi triển khai. Thử nghiệm A/B nội dung tin nhắn: ví dụ nhắc với/không có tên kỹ thuật viên — xem cái nào có tỷ lệ xác nhận cao hơn. Tối ưu thời điểm gửi dựa trên dữ liệu thực tế của salon bạn.",
                  },
                  {
                    title: "Tháng 2: Thêm Workflow 3 — Thu thập phản hồi và đánh giá Google",
                    desc: "Thiết kế form khảo sát 2-3 câu, cấu hình trigger sau khi slot chuyển trạng thái Completed. Xây dựng Google Sheet dashboard theo dõi đánh giá theo kỹ thuật viên và loại dịch vụ.",
                  },
                  {
                    title: "Tháng 2-3: Triển khai Workflow 4 — Loyalty và VIP tự động",
                    desc: "Thiết kế hệ thống điểm (công thức tích điểm, các ngưỡng hạng VIP, quyền lợi từng hạng). Nhập lịch sử chi tiêu hiện tại nếu có để khách cũ không bắt đầu từ 0. Kiểm tra kỹ logic điểm trước khi thông báo chương trình cho khách.",
                  },
                ]} />

                <CalloutBox type="info" title="Cần hỗ trợ triển khai?">
                  <p className="mb-3">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi sẽ phân
                    tích quy trình hiện tại của salon, ước tính doanh thu đang thất thoát
                    vì no-show, và đưa ra lộ trình triển khai phù hợp quy mô của bạn.
                  </p>
                  <p className="mb-3">
                    Hoặc nếu bạn muốn tự đánh giá mức độ sẵn sàng tự động hóa trước:
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
          <BlogFooter title="Automation Salon & Spa" slug="automation-salon-spa" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
