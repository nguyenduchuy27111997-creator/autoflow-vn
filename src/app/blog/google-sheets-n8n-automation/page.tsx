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
  title: "Google Sheets + n8n: Biến Bảng Tính Thành Hệ Thống Tự Động",
  description:
    "Hơn 1,1 tỷ người dùng Google Sheets nhưng 90% vẫn copy-paste thủ công. 5 workflow n8n biến bảng tính thành hệ thống tự động: thu lead, xử lý đơn, gửi báo cáo, xuất hóa đơn, cảnh báo ngưỡng — không cần lập trình.",
  keywords: [
    "google sheets n8n",
    "tự động google sheets",
    "n8n google sheets workflow",
    "tự động hóa bảng tính",
    "google sheets automation",
    "n8n tự động hóa",
    "tích hợp google sheets",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề: copy-paste vô tận giữa các Sheet", level: 2 },
  { id: "giai-phap", text: "5 workflow Google Sheets + n8n", level: 2 },
  { id: "workflow-1", text: "WF1: Form → Sheet → CRM tự động", level: 3 },
  { id: "workflow-2", text: "WF2: Sheet làm mini-database", level: 3 },
  { id: "workflow-3", text: "WF3: Báo cáo tự động từ Sheet", level: 3 },
  { id: "workflow-4", text: "WF4: Sheet → hóa đơn tự động", level: 3 },
  { id: "workflow-5", text: "WF5: Cảnh báo ngưỡng từ Sheet", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động (n8n)", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function GoogleSheetsN8nAutomationBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="google-sheets-n8n-automation" title="Google Sheets + n8n: Biến Sheet Thành Hệ Thống" />
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
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                Hướng dẫn
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                Google Sheets · n8n
              </span>
              <span className="text-xs text-slate-500">12 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Google Sheets + n8n:{" "}
              <span className="gradient-text">Biến Bảng Tính Thành Hệ Thống Tự Động</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Bạn đang mở 5 tab Sheet cùng lúc, copy dữ liệu từ tab này sang tab
              kia, rồi lại paste sang email, rồi lại nhập tay vào CRM. Vòng lặp
              đó lặp đi lặp lại mỗi ngày — dù Google Sheets hoàn toàn có thể kết
              nối trực tiếp với mọi thứ thông qua n8n, không cần một dòng code nào.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Hook Stats */}
                <StatCard
                  stats={[
                    {
                      value: "1,1 tỷ",
                      label: "người dùng Google Sheets toàn cầu",
                      sub: "công cụ bảng tính phổ biến nhất thế giới",
                      color: "text-emerald-500",
                    },
                    {
                      value: "90%",
                      label: "doanh nghiệp vẫn dùng bảng tính",
                      sub: "nhưng chủ yếu vẫn thao tác thủ công",
                      color: "text-amber-500",
                    },
                    {
                      value: "87%",
                      label: "team cộng tác trên Sheet hàng tuần",
                      sub: "nhưng sync dữ liệu vẫn bằng tay",
                      color: "text-red-500",
                    },
                    {
                      value: "+24%",
                      label: "tăng trưởng tự động hóa API mỗi năm",
                      sub: "xu hướng tích hợp Sheet với hệ thống khác",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Copy-Paste Giữa Các Sheet — Vòng Lặp Không Có Hồi Kết</h2>

                <p>
                  Google Sheets có giới hạn 10 triệu ô dữ liệu — đủ cho bất kỳ
                  doanh nghiệp nào. Nhưng giới hạn thực sự không nằm ở ô dữ liệu.
                  Giới hạn nằm ở chỗ Sheet không tự biết khi nào cần gửi email,
                  không tự kết nối vào CRM, không tự xuất hóa đơn — và bạn phải
                  làm tất cả những việc đó bằng tay, mỗi ngày, không ngừng nghỉ.
                </p>

                <p>
                  Một kịch bản quen thuộc: khách hàng điền form → bạn mở Sheet để
                  thêm tên → mở CRM để tạo contact → mở email để gửi welcome →
                  quay lại Sheet đánh dấu "đã xử lý". Năm bước thủ công cho một
                  lead. Với 50 lead mỗi tuần, đó là 250 thao tác lặp lại, không
                  tạo ra giá trị nào ngoài việc chuyển dữ liệu từ chỗ này sang
                  chỗ khác.
                </p>

                <CalloutBox type="warning" title="Vấn đề không chỉ là mất thời gian">
                  Dữ liệu copy-paste thủ công là nguồn lỗi số một trong vận hành.
                  Một ô sai vị trí, một hàng bị bỏ qua, một cột nhầm tên — và
                  toàn bộ báo cáo, hóa đơn, hay thông báo gửi đi đều sai theo.
                  87% lỗi dữ liệu trong doanh nghiệp vừa và nhỏ đến từ nhập liệu
                  thủ công.
                </CalloutBox>

                <p>
                  Vấn đề không phải Google Sheets kém — ngược lại, Sheets là công
                  cụ cực kỳ mạnh vì hầu hết mọi người đã biết dùng. Vấn đề là
                  Sheets đang bị cô lập: dữ liệu nằm trong Sheets nhưng các hành
                  động — gửi email, cập nhật CRM, tạo hóa đơn — đều nằm ở hệ
                  thống khác. n8n là lớp kết nối biến Sheet thành trung tâm điều
                  phối dữ liệu, tự động kích hoạt hành động đúng lúc, đúng nơi,
                  không cần con người làm trung gian.
                </p>

                <p>
                  5 workflow dưới đây bao phủ các tình huống phổ biến nhất —
                  từ thu thập lead đến xuất hóa đơn, từ tổng hợp báo cáo đến
                  cảnh báo ngưỡng dữ liệu. Không cần lập trình, không cần đội
                  kỹ thuật.
                </p>

                {/* Section 2: Giải pháp */}
                <h2 id="giai-phap">
                  5 Workflow Google Sheets + n8n Cho Doanh Nghiệp Việt
                </h2>

                <p>
                  Kiến trúc chung: Google Sheets đóng vai trò là nguồn dữ liệu
                  (trigger khi có hàng mới, hay dữ liệu tham chiếu) hoặc đích
                  lưu trữ (n8n ghi kết quả xử lý vào Sheet). n8n đứng giữa, xử
                  lý logic, kết nối với email, CRM, Zalo, hệ thống hóa đơn —
                  toàn bộ tự động theo sự kiện hoặc lịch.
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">Workflow 1: Google Form → Sheet → CRM Tự Động</h3>

                <p>
                  Workflow cơ bản nhất và có tác động ngay lập tức. Mỗi khi khách
                  điền Google Form, dữ liệu vào Sheet, n8n kích hoạt ngay: tạo
                  contact trong CRM, gửi email chào, và gán lead cho đúng nhân
                  viên phụ trách — không ai cần làm gì.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Google Sheets trigger — phát hiện hàng mới",
                      desc: "n8n theo dõi Sheet theo polling (mỗi 1–5 phút) hoặc webhook từ Apps Script. Ngay khi hàng mới xuất hiện từ form submission, trigger kích hoạt toàn bộ workflow.",
                    },
                    {
                      title: "Làm sạch và chuẩn hóa dữ liệu",
                      desc: "n8n chuẩn hóa số điện thoại (thêm +84, xóa khoảng trắng), chuẩn hóa tên (viết hoa chữ cái đầu), phân loại lead theo nguồn (website, landing page, sự kiện) trước khi đưa vào hệ thống.",
                    },
                    {
                      title: "Tạo contact trong CRM và gán sales",
                      desc: "n8n tạo contact mới trong HubSpot, Salesforce, hay bất kỳ CRM nào đang dùng. Tự động gán cho đúng nhân viên theo khu vực, sản phẩm quan tâm, hoặc round-robin. Cập nhật lại Sheet với ID CRM.",
                    },
                    {
                      title: "Gửi email chào và thông báo nội bộ",
                      desc: "Email tự động đến khách hàng trong vòng 2 phút — tên được cá nhân hóa, nội dung theo sản phẩm đăng ký. Đồng thời, thông báo Zalo/Slack gửi đến sales phụ trách với đầy đủ thông tin lead.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">📝</span>,
                      label: "Google Form submit",
                      sub: "Khách điền form",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Sheet nhận dữ liệu",
                      sub: "n8n trigger tức thì",
                    },
                    {
                      icon: <span className="text-lg">🧹</span>,
                      label: "Làm sạch & phân loại",
                      sub: "Chuẩn hóa SĐT, tên, nguồn",
                    },
                    {
                      icon: <span className="text-lg">👤</span>,
                      label: "Tạo contact CRM",
                      sub: "Gán đúng sales phụ trách",
                    },
                    {
                      icon: <span className="text-lg">📧</span>,
                      label: "Email + thông báo",
                      sub: "Khách & sales cùng nhận",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Bước làm sạch dữ liệu thường bị bỏ qua nhưng lại quan trọng
                  nhất. Khi khách nhập số điện thoại "0901 234 567" và CRM cần
                  "+84901234567", n8n xử lý chuyển đổi tự động — đảm bảo dữ liệu
                  sạch từ đầu thay vì dọn dẹp thủ công sau này.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">Workflow 2: Google Sheet Làm Mini-Database Cho Toàn Hệ Thống</h3>

                <p>
                  Nhiều doanh nghiệp Việt dùng Google Sheet như "database tạm" —
                  danh sách sản phẩm, bảng giá, danh mục khách hàng. Thay vì mỗi
                  hệ thống đọc Sheet riêng lẻ, n8n biến Sheet thành nguồn dữ liệu
                  trung tâm được đồng bộ tự động đến mọi nơi cần dùng.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Sheet là nguồn sự thật duy nhất",
                      desc: "Khi team cập nhật bảng giá hoặc danh mục sản phẩm trong Sheet, n8n phát hiện thay đổi (so sánh hash hoặc timestamp cột 'Cập nhật lần cuối') và bắt đầu đồng bộ.",
                    },
                    {
                      title: "Đồng bộ đến website và app bán hàng",
                      desc: "n8n gọi API cập nhật giá/sản phẩm trên website (WooCommerce, Shopify, Haravan), app bán hàng, hay bảng giá trên Zalo OA — không cần đăng nhập từng hệ thống để cập nhật.",
                    },
                    {
                      title: "Cập nhật hệ thống kho và kế toán",
                      desc: "Thay đổi SKU hay giá cost trong Sheet tự động cập nhật vào phần mềm kho (MISA, Fast Accounting, KiotViet) — xóa bỏ tình trạng giá Sheet và giá hệ thống lệch nhau.",
                    },
                    {
                      title: "Log thay đổi và thông báo team",
                      desc: "Mỗi lần đồng bộ, n8n ghi log (ai thay đổi, thay đổi gì, lúc mấy giờ) vào Sheet audit riêng. Thông báo tự động gửi đến Zalo group quản lý khi có cập nhật quan trọng.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#6366F1"
                  steps={[
                    {
                      icon: <span className="text-lg">✏️</span>,
                      label: "Cập nhật trong Sheet",
                      sub: "Giá, SKU, danh mục",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "n8n phát hiện thay đổi",
                      sub: "So sánh version tự động",
                    },
                    {
                      icon: <span className="text-lg">🌐</span>,
                      label: "Đồng bộ website",
                      sub: "Shopify / Haravan / WooCommerce",
                    },
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Cập nhật kho & kế toán",
                      sub: "MISA / KiotViet",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Log + thông báo",
                      sub: "Audit trail tự động",
                    },
                  ]}
                />

                {/* WF3 */}
                <h3 id="workflow-3">Workflow 3: Báo Cáo Tự Động Từ Dữ Liệu Sheet</h3>

                <p>
                  Sheet chứa dữ liệu bán hàng, chi phí, hay KPI nhưng báo cáo
                  tổng hợp vẫn phải làm tay mỗi tuần. Workflow này đọc Sheet,
                  tính toán, tạo báo cáo và gửi đến đúng người — tự động theo
                  lịch, không cần ai thao tác.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Schedule trigger theo lịch — ngày, tuần, tháng",
                      desc: "n8n kích hoạt theo lịch cố định: mỗi sáng thứ Hai 8:00 cho báo cáo tuần, ngày 1 hàng tháng cho tổng kết tháng. Không phụ thuộc vào bất kỳ ai nhớ hay quên.",
                    },
                    {
                      title: "Đọc và tổng hợp dữ liệu từ nhiều Sheet",
                      desc: "n8n kết hợp dữ liệu từ nhiều tab hoặc nhiều file Sheet (ví dụ: mỗi tháng một file riêng), tổng hợp theo khu vực, theo sản phẩm, theo nhân viên — logic tính toán được cấu hình một lần, chạy mãi.",
                    },
                    {
                      title: "Tính KPI, so sánh, đánh dấu ngoại lệ",
                      desc: "Tự động tính tăng trưởng so với kỳ trước, so sánh với target. Dữ liệu nào vượt ngưỡng cảnh báo (tăng đột biến, giảm mạnh, dưới target) được đánh dấu đặc biệt trong báo cáo.",
                    },
                    {
                      title: "Tạo báo cáo và phân phối đúng người",
                      desc: "Báo cáo được tạo dưới dạng email HTML, file PDF, hoặc cập nhật vào Sheet dashboard riêng. Phân phối theo vai trò: giám đốc nhận tổng quan, trưởng phòng nhận chi tiết bộ phận mình.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "Schedule trigger",
                      sub: "Ngày / Tuần / Tháng",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Đọc nhiều Sheet",
                      sub: "Gom dữ liệu đa nguồn",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính KPI & flag",
                      sub: "So sánh, đánh dấu ngoại lệ",
                    },
                    {
                      icon: <span className="text-lg">📄</span>,
                      label: "Tạo báo cáo",
                      sub: "Email HTML hoặc PDF",
                    },
                    {
                      icon: <span className="text-lg">👥</span>,
                      label: "Phân phối theo role",
                      sub: "Đúng người đúng dữ liệu",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Kết hợp với Looker Studio hoặc Google Data Studio">
                  Nếu muốn dashboard trực quan hơn, n8n có thể ghi dữ liệu đã
                  tổng hợp vào một Sheet riêng làm nguồn cho Looker Studio —
                  dashboard tự cập nhật mỗi khi n8n chạy. Không cần kết nối trực
                  tiếp từng nguồn dữ liệu vào Looker, n8n làm lớp ETL trung gian.
                </CalloutBox>

                {/* WF4 */}
                <h3 id="workflow-4">Workflow 4: Sheet → Hóa Đơn Tự Động</h3>

                <p>
                  Đơn hàng được ghi vào Sheet — rồi ai đó phải mở template Word,
                  copy số liệu, điền tên khách, lưu PDF, gửi email. Workflow này
                  loại bỏ toàn bộ công đoạn thủ công đó: Sheet có đơn mới, hóa
                  đơn PDF xuất và gửi tự động trong vòng 2 phút.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger khi cột 'Trạng thái' đổi thành 'Đã xác nhận'",
                      desc: "n8n theo dõi cột trạng thái trong Sheet đơn hàng. Khi nhân viên đổi trạng thái sang 'Đã xác nhận' hoặc khi đơn từ website tự vào Sheet, trigger kích hoạt ngay lập tức.",
                    },
                    {
                      title: "Điền dữ liệu vào template hóa đơn",
                      desc: "n8n lấy thông tin từ hàng đó (tên khách, địa chỉ, danh sách sản phẩm, số lượng, đơn giá, thuế) và điền vào template Google Docs hoặc HTML template đã được thiết kế sẵn.",
                    },
                    {
                      title: "Xuất PDF và lưu trữ có tổ chức",
                      desc: "Chuyển đổi sang PDF với tên file chuẩn hóa (mã đơn + tên khách + ngày). Lưu tự động vào Google Drive theo thư mục tháng/năm. Không bao giờ mất hóa đơn, không cần tìm kiếm.",
                    },
                    {
                      title: "Gửi email cho khách và cập nhật Sheet",
                      desc: "Email tự động gửi cho khách với hóa đơn PDF đính kèm. Cột 'Hóa đơn đã gửi' trong Sheet tự cập nhật thành TRUE, link Drive được ghi vào cột tương ứng để tra cứu sau.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Xác nhận đơn hàng",
                      sub: "Đổi trạng thái trong Sheet",
                    },
                    {
                      icon: <span className="text-lg">📝</span>,
                      label: "Điền template",
                      sub: "Google Docs / HTML",
                    },
                    {
                      icon: <span className="text-lg">📄</span>,
                      label: "Xuất PDF",
                      sub: "Tên file chuẩn hóa",
                    },
                    {
                      icon: <span className="text-lg">💾</span>,
                      label: "Lưu Google Drive",
                      sub: "Thư mục theo tháng/năm",
                    },
                    {
                      icon: <span className="text-lg">📧</span>,
                      label: "Gửi email khách",
                      sub: "PDF đính kèm tự động",
                    },
                  ]}
                />

                {/* WF5 */}
                <h3 id="workflow-5">Workflow 5: Cảnh Báo Ngưỡng Từ Sheet — Biết Trước Khi Quá Muộn</h3>

                <p>
                  Sheet chứa dữ liệu tồn kho, doanh thu, hay deadline — nhưng
                  bạn chỉ biết có vấn đề khi mở Sheet ra xem. Workflow này đảo
                  ngược logic: n8n chủ động đọc Sheet theo lịch, phát hiện dữ
                  liệu vượt ngưỡng và gửi cảnh báo tức thì — bạn biết ngay mà
                  không cần mở Sheet.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Định nghĩa ngưỡng cảnh báo trong Sheet config",
                      desc: "Một Sheet riêng làm config: cột nào, ngưỡng là bao nhiêu, cảnh báo gửi cho ai, qua kênh nào (Zalo, email, Slack). Thay đổi ngưỡng không cần động vào n8n — chỉ sửa Sheet config.",
                    },
                    {
                      title: "n8n quét định kỳ và so sánh với ngưỡng",
                      desc: "Mỗi 15 phút hoặc mỗi giờ, n8n đọc Sheet dữ liệu, so sánh với ngưỡng trong config. Hàng nào vi phạm ngưỡng được gom lại — tránh spam cảnh báo khi nhiều hàng cùng vượt ngưỡng một lúc.",
                    },
                    {
                      title: "Gửi cảnh báo có ngữ cảnh — không chỉ số",
                      desc: "Tin nhắn cảnh báo bao gồm: mục nào, giá trị hiện tại, ngưỡng là bao nhiêu, và gợi ý hành động tiếp theo. Ví dụ: 'Tồn kho SP-001 còn 15 đơn vị (ngưỡng: 20) — cần đặt hàng nhà cung cấp'.",
                    },
                    {
                      title: "Ghi log cảnh báo và theo dõi xử lý",
                      desc: "Mỗi cảnh báo được ghi vào Sheet log với trạng thái (Đã gửi / Đã xử lý). Nếu sau X giờ chưa được đánh dấu xử lý, n8n gửi nhắc nhở leo thang lên cấp trên.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    {
                      icon: <span className="text-lg">⚙️</span>,
                      label: "Sheet config ngưỡng",
                      sub: "Ai nhận, qua kênh nào",
                    },
                    {
                      icon: <span className="text-lg">🔄</span>,
                      label: "Quét mỗi 15 phút",
                      sub: "So sánh với ngưỡng",
                    },
                    {
                      icon: <span className="text-lg">🚨</span>,
                      label: "Phát hiện vi phạm",
                      sub: "Gom thành nhóm cảnh báo",
                    },
                    {
                      icon: <span className="text-lg">📲</span>,
                      label: "Cảnh báo có ngữ cảnh",
                      sub: "Zalo / Email / Slack",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Log & leo thang",
                      sub: "Nhắc nhở nếu chưa xử lý",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Ứng dụng thực tế phổ biến nhất">
                  <ul className="list-none p-0 m-0 space-y-1">
                    <li>Tồn kho dưới mức tối thiểu → nhắc đặt hàng</li>
                    <li>Doanh thu ngày thấp hơn 30% so với target → cảnh báo quản lý</li>
                    <li>Deadline task trong Sheet sắp đến → nhắc nhân viên phụ trách</li>
                    <li>Công nợ khách hàng quá hạn → nhắc bộ phận thu hồi nợ</li>
                  </ul>
                </CalloutBox>

                {/* Section 3: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Kết Nối Google Sheets Với n8n</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Sheet bị cô lập, copy-paste thủ công",
                    items: [
                      "Mỗi lead từ form phải copy thủ công vào CRM — 5 bước mỗi lần",
                      "Cập nhật giá phải đăng nhập từng hệ thống — mất 30–60 phút mỗi lần",
                      "Báo cáo tuần: ai đó ngồi tổng hợp Sheet 2–3 giờ mỗi thứ Hai",
                      "Hóa đơn: mở Word, copy số liệu, lưu PDF, gửi email — 10 phút mỗi đơn",
                      "Tồn kho hết khi mở Sheet mới biết — đã quá muộn để đặt hàng",
                      "Dữ liệu giữa các hệ thống thường xuyên lệch do nhập tay sai",
                    ],
                  }}
                  after={{
                    title: "Sau — Sheet là trung tâm điều phối tự động",
                    items: [
                      "Lead vào Sheet → CRM cập nhật và email gửi đi trong 2 phút",
                      "Sửa giá trong Sheet → tất cả hệ thống đồng bộ trong 5 phút",
                      "Báo cáo tuần tự gửi lúc 7:00 sáng thứ Hai — không ai làm gì",
                      "Xác nhận đơn trong Sheet → hóa đơn PDF gửi khách tự động",
                      "Tồn kho chạm ngưỡng → cảnh báo Zalo ngay lập tức, trước khi hết",
                      "Dữ liệu đồng nhất vì được đồng bộ tự động, không qua tay người",
                    ],
                  }}
                />

                {/* Section 4: So sánh */}
                <h2 id="so-sanh">
                  So Sánh Chi Tiết: Thao Tác Thủ Công vs Google Sheets + n8n
                </h2>

                <ComparisonTable
                  headers={[
                    "Tác vụ",
                    "Thủ công (hiện tại)",
                    "Tự động với n8n",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Xử lý 1 lead từ form",
                      "5 bước tay, 3–5 phút",
                      "0 bước tay, tự động trong 2 phút",
                    ],
                    [
                      "Cập nhật bảng giá toàn hệ thống",
                      "Đăng nhập từng hệ thống, 30–60 phút",
                      "Sửa Sheet, đồng bộ tự động trong 5 phút",
                    ],
                    [
                      "Báo cáo tuần",
                      "2–3 giờ tổng hợp thủ công",
                      "Tự gửi đúng giờ, 0 giờ nhân công",
                    ],
                    [
                      "Xuất hóa đơn và gửi khách",
                      "10 phút mỗi đơn (Word → PDF → email)",
                      "Tự động trong 2 phút sau khi xác nhận",
                    ],
                    [
                      "Phát hiện tồn kho thấp",
                      "Khi mở Sheet ra xem — thường đã muộn",
                      "Cảnh báo tức thì khi chạm ngưỡng",
                    ],
                    [
                      "Độ chính xác dữ liệu",
                      "Phụ thuộc người nhập — lỗi thường xuyên",
                      "Đồng bộ tự động — nhất quán mọi hệ thống",
                    ],
                    [
                      "Scale khi tăng lượng đơn hàng",
                      "Cần thêm người làm thủ công",
                      "Xử lý tự động không giới hạn",
                    ],
                    [
                      "Theo dõi lịch sử thay đổi",
                      "Không có hoặc phải tự ghi chép",
                      "Log tự động, audit trail đầy đủ",
                    ],
                    [
                      "Chi phí triển khai",
                      "0 — nhưng trả bằng thời gian nhân viên mỗi ngày",
                      "5–15 triệu một lần, 1–2 triệu/tháng vận hành",
                    ],
                  ]}
                />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ
                  items={[
                    {
                      q: "n8n có thể đọc Google Sheets real-time không hay phải chờ polling?",
                      a: "n8n hỗ trợ hai cách: polling (kiểm tra Sheet mỗi 1–5 phút, phù hợp cho hầu hết trường hợp) và webhook qua Google Apps Script (gần real-time, trigger ngay khi có thay đổi). Với form submission, Apps Script webhook cho phản hồi trong vòng vài giây. Polling 1 phút đủ cho 95% use case doanh nghiệp.",
                    },
                    {
                      q: "Sheet có quá nhiều dữ liệu (hàng chục nghìn hàng) — n8n có xử lý được không?",
                      a: "Được, nhưng cần thiết kế đúng. n8n đọc Sheet theo batch và hỗ trợ lọc theo điều kiện (chỉ đọc hàng có trạng thái 'Chờ xử lý' chứ không đọc toàn bộ). Google Sheets có giới hạn 10 triệu ô — với thiết kế batch + filter, n8n hoạt động ổn ngay cả với Sheet 50.000 hàng.",
                    },
                    {
                      q: "Nếu Sheet bị chỉnh sửa sai (xóa nhầm hàng, sửa sai công thức) thì workflow có bị ảnh hưởng không?",
                      a: "n8n có error handling riêng — nếu dữ liệu đầu vào không hợp lệ, workflow ghi lỗi vào log và tiếp tục xử lý các hàng khác, không bị treo cả hệ thống. Ngoài ra, nên bật tính năng lịch sử phiên bản của Google Sheets (Version History) để khôi phục khi cần.",
                    },
                    {
                      q: "Có thể dùng n8n với Microsoft Excel hoặc Excel Online thay vì Google Sheets không?",
                      a: "Có. n8n có node riêng cho Microsoft Excel (OneDrive) và cả file Excel trên local/server. Tuy nhiên Google Sheets có ưu điểm về API ổn định hơn và tích hợp mượt mà hơn với hệ sinh thái Google (Gmail, Drive, Forms). Nếu team đang dùng Microsoft 365, n8n vẫn hỗ trợ tốt qua OneDrive + Excel Online.",
                    },
                    {
                      q: "Cần kỹ năng gì để thiết lập các workflow này? Có phải biết lập trình không?",
                      a: "Không cần lập trình. n8n có giao diện kéo-thả trực quan. Để thiết lập 5 workflow trên, bạn cần: hiểu logic nghiệp vụ (cái gì trigger cái gì), biết cấu trúc dữ liệu trong Sheet của mình, và khoảng 2–4 giờ học cơ bản n8n. Nếu không muốn tự làm, đội chúng tôi có thể thiết lập và bàn giao hoàn chỉnh.",
                    },
                    {
                      q: "Chi phí triển khai và vận hành cụ thể là bao nhiêu?",
                      a: "n8n Cloud có gói miễn phí (giới hạn 5 workflow, 2.500 lần thực thi/tháng) — đủ để thử nghiệm. Gói trả phí từ $20/tháng cho dùng không giới hạn. Self-hosted trên VPS cơ bản (~200.000đ/tháng) là lựa chọn phổ biến nhất cho doanh nghiệp Việt. Chi phí thiết kế workflow tùy độ phức tạp: từ 3–5 triệu cho workflow đơn giản đến 10–20 triệu cho hệ thống tích hợp đầy đủ.",
                    },
                  ]}
                />
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter
            title="Google Sheets + n8n"
            slug="google-sheets-n8n-automation"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
