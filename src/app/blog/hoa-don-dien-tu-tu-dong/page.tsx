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
  title: "Hóa Đơn Điện Tử Tự Động: n8n + MISA meInvoice — Xuất Hóa Đơn Không Cần Nhập Tay",
  description:
    "Hướng dẫn tự động hóa hóa đơn điện tử với n8n và MISA meInvoice: tự động xuất hóa đơn từ đơn hàng, xử lý hàng loạt, báo cáo thuế hàng tháng. Đáp ứng Nghị định 70/2025 và Thông tư 32/2025.",
  keywords: [
    "hóa đơn điện tử tự động",
    "misa meinvoice n8n",
    "xuất hóa đơn tự động",
    "tích hợp misa meinvoice",
    "hóa đơn điện tử nghị định 70",
    "tự động hóa kế toán",
    "hóa đơn điện tử doanh nghiệp",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề xuất hóa đơn thủ công", level: 2 },
  { id: "tuan-thu", text: "Bắt buộc pháp lý: bạn không thể bỏ qua", level: 2 },
  { id: "giai-phap", text: "3 workflow tự động hóa hóa đơn", level: 2 },
  { id: "workflow-1", text: "WF1: Đơn hàng → Hóa đơn tự động", level: 3 },
  { id: "workflow-2", text: "WF2: Xử lý hóa đơn hàng loạt", level: 3 },
  { id: "workflow-3", text: "WF3: Báo cáo thuế hàng tháng", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Triển khai như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function HoaDonDienTuTuDongBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="hoa-don-dien-tu-tu-dong" title="Hóa Đơn Điện Tử Tự Động: n8n + MISA meInvoice" />
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
              <span className="text-slate-600 truncate max-w-[300px]">Kế toán</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                Kế toán
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                MISA meInvoice · n8n
              </span>
              <span className="text-xs text-slate-500">11 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Hóa Đơn Điện Tử Tự Động:{" "}
              <span className="gradient-text">n8n + MISA meInvoice</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Kế toán ngồi xuất từng hóa đơn sau khi chốt đơn hàng. Điền tay
              thông tin khách, MST, số tiền. Sai một ký tự — hủy, lập lại từ
              đầu. Với hơn 764.000 doanh nghiệp đã đăng ký hóa đơn điện tử,
              quy trình thủ công này không còn phù hợp. 3 workflow n8n kết
              nối trực tiếp với MISA meInvoice giải quyết toàn bộ — đúng
              luật, không nhập tay, chạy 24/7.
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
                      value: "764.314",
                      label: "doanh nghiệp đã đăng ký",
                      sub: "hóa đơn điện tử tính đến 2024",
                      color: "text-blue-600",
                    },
                    {
                      value: "Bắt buộc",
                      label: "từ tháng 7/2022",
                      sub: "theo Nghị định 123/2020/NĐ-CP",
                      color: "text-red-500",
                    },
                    {
                      value: "1 tỷ VNĐ",
                      label: "ngưỡng Nghị định 70/2025",
                      sub: "doanh thu/năm phải dùng HĐĐT có mã",
                      color: "text-amber-500",
                    },
                    {
                      value: "#1",
                      label: "MISA meInvoice",
                      sub: "phần mềm HĐĐT được tin dùng nhất VN",
                      color: "text-emerald-600",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Xuất Hóa Đơn Thủ Công Đang Ngốn Bao Nhiêu Thời Gian Của Kế Toán?</h2>

                <p>
                  Mỗi đơn hàng hoàn thành là một hóa đơn cần xuất. Với doanh
                  nghiệp bán lẻ có 50–200 đơn mỗi ngày, kế toán đang ngồi lặp
                  lại một quy trình không thay đổi hàng trăm lần: mở MISA
                  meInvoice, điền tên khách, MST, địa chỉ, danh sách hàng hóa,
                  đơn giá, thuế suất, ký số, gửi cho khách.
                </p>

                <p>
                  Quy trình này mất 3–5 phút mỗi hóa đơn nếu làm đúng. Nhưng
                  thực tế không bao giờ suôn sẻ: MST khách nhập sai, tên hàng
                  không khớp danh mục, thuế suất chọn nhầm. Mỗi lỗi nhỏ buộc
                  hủy hóa đơn, lập lại — và hóa đơn đã hủy vẫn phải lưu theo
                  quy định pháp lý.
                </p>

                <CalloutBox type="warning" title="Rủi ro thực tế khi xuất hóa đơn thủ công">
                  Xuất hóa đơn chậm hoặc sai không chỉ gây phiền hà — đây là
                  vi phạm pháp lý. Theo Thông tư 78/2021/TT-BTC, hóa đơn điện
                  tử phải được lập tại thời điểm cung cấp hàng hóa, dịch vụ.
                  Chậm trễ có thể bị xử phạt vi phạm hành chính trong lĩnh vực
                  thuế, hóa đơn.
                </CalloutBox>

                <p>
                  Tệ hơn, doanh nghiệp có nhiều nhân viên kinh doanh xuất hóa
                  đơn độc lập dễ gặp tình trạng trùng số hóa đơn, sai kỳ kê
                  khai, thiếu hóa đơn trong tháng quyết toán. Kế toán trưởng
                  phải ngồi đối chiếu thủ công — mỗi lần đối chiếu là vài giờ
                  làm việc bị mất.
                </p>

                <p>
                  94% tác vụ lặp lại trong quy trình hóa đơn có thể tự động
                  hóa hoàn toàn. Dữ liệu đơn hàng đã có trong hệ thống —
                  n8n chỉ cần lấy ra, chuẩn hóa và đẩy vào MISA meInvoice API
                  để tạo hóa đơn hợp lệ, có chữ ký số, đúng định dạng
                  1C26TCC theo Thông tư 32/2025.
                </p>

                {/* Section 2: Tuân thủ pháp lý */}
                <h2 id="tuan-thu">Bắt Buộc Pháp Lý: Những Điều Doanh Nghiệp Không Thể Bỏ Qua</h2>

                <p>
                  Trước khi nói về tự động hóa, cần hiểu rõ khung pháp lý
                  hiện hành. Hóa đơn điện tử tại Việt Nam chịu sự điều chỉnh
                  bởi hệ thống văn bản pháp quy chồng chéo — và nhiều doanh
                  nghiệp đang vô tình vi phạm vì chưa cập nhật.
                </p>

                <CalloutBox type="info" title="Khung pháp lý hóa đơn điện tử 2025">
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>
                      <strong>Nghị định 123/2020/NĐ-CP:</strong> Bắt buộc toàn
                      bộ doanh nghiệp sử dụng HĐĐT từ tháng 7/2022.
                    </li>
                    <li>
                      <strong>Thông tư 78/2021/TT-BTC:</strong> Hướng dẫn thi
                      hành Nghị định 123, quy định thời điểm lập hóa đơn.
                    </li>
                    <li>
                      <strong>Nghị định 70/2025/NĐ-CP:</strong> Doanh nghiệp
                      doanh thu từ 1 tỷ VNĐ/năm phải dùng HĐĐT có mã của cơ
                      quan thuế.
                    </li>
                    <li>
                      <strong>Thông tư 32/2025/TT-BTC:</strong> Quy định định
                      dạng dữ liệu mới &ldquo;1C26TCC&rdquo; cho hóa đơn điện tử,
                      áp dụng từ 2025.
                    </li>
                  </ul>
                </CalloutBox>

                <p>
                  MISA meInvoice là phần mềm hóa đơn điện tử được Tổng cục
                  Thuế chứng nhận và đứng vị trí số 1 thị trường Việt Nam về
                  mức độ tin dùng. Phần mềm hỗ trợ đầy đủ định dạng
                  1C26TCC, tích hợp ký số USB token và HSM, kết nối trực tiếp
                  với cổng thuế điện tử.
                </p>

                <p>
                  Điểm mấu chốt: MISA meInvoice cung cấp REST API công khai
                  cho phép hệ thống bên ngoài — như n8n — tự động tạo, ký và
                  phát hành hóa đơn mà không cần thao tác thủ công trên giao
                  diện. Đây chính là nền tảng để xây dựng pipeline hóa đơn
                  hoàn toàn tự động, đúng pháp luật.
                </p>

                {/* Section 3: Giải pháp */}
                <h2 id="giai-phap">
                  3 Workflow Tự Động Hóa Hóa Đơn Điện Tử Với n8n + MISA meInvoice
                </h2>

                <p>
                  Thay vì kế toán mở MISA gõ từng dòng, n8n đóng vai trò lớp
                  trung gian: lấy dữ liệu từ hệ thống đơn hàng (ERP, CRM,
                  spreadsheet, Shopee, website), chuẩn hóa theo định dạng MISA
                  meInvoice API và phát hành hóa đơn tự động. Đây là 3 workflow
                  cốt lõi:
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">
                  Workflow 1: Tự Động Xuất Hóa Đơn Ngay Khi Hoàn Thành Đơn Hàng
                </h3>

                <p>
                  Workflow quan trọng nhất. Mỗi khi đơn hàng chuyển sang trạng
                  thái &ldquo;đã thanh toán&rdquo; hoặc &ldquo;đã giao hàng&rdquo;, hóa đơn điện tử
                  được tạo tự động trong MISA meInvoice — ký số, phát hành và
                  gửi PDF cho khách chỉ trong vài giây.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger: đơn hàng chuyển trạng thái hoàn thành",
                      desc: "n8n lắng nghe webhook từ hệ thống đơn hàng (WooCommerce, Shopee, MISA AMIS, Google Sheets). Kích hoạt ngay lập tức khi điều kiện thỏa mãn.",
                    },
                    {
                      title: "Validate thông tin khách hàng và hóa đơn",
                      desc: "Kiểm tra MST khách hàng qua API tra cứu thuế. Chuẩn hóa tên hàng hóa theo danh mục MISA. Xác định thuế suất đúng cho từng loại hàng (0%, 5%, 8%, 10%).",
                    },
                    {
                      title: "Tạo hóa đơn qua MISA meInvoice API",
                      desc: "Gọi API tạo hóa đơn với payload đầy đủ: thông tin người bán, người mua, danh sách hàng hóa, thuế suất, định dạng 1C26TCC. MISA tự động ký số và cấp mã thuế.",
                    },
                    {
                      title: "Gửi hóa đơn cho khách và lưu log",
                      desc: "n8n lấy link PDF hóa đơn từ MISA, gửi email/Zalo cho khách kèm file đính kèm. Lưu số hóa đơn, ngày phát hành vào hệ thống theo dõi. Alert Telegram nếu có lỗi.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">🛒</span>,
                      label: "Đơn hoàn thành",
                      sub: "Webhook real-time",
                    },
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Validate MST",
                      sub: "Tra cứu API thuế",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Tạo hóa đơn",
                      sub: "MISA meInvoice API",
                    },
                    {
                      icon: <span className="text-lg">🔏</span>,
                      label: "Ký số & cấp mã",
                      sub: "Tự động bởi MISA",
                    },
                    {
                      icon: <span className="text-lg">📧</span>,
                      label: "Gửi cho khách",
                      sub: "Email + Zalo PDF",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  MISA meInvoice API hỗ trợ phát hành hóa đơn theo lô — một
                  request có thể tạo nhiều hóa đơn cùng lúc. Đây là nền tảng
                  cho Workflow 2 xử lý hàng loạt vào cuối ngày hoặc cuối tháng.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">Workflow 2: Xử Lý Hóa Đơn Hàng Loạt Theo Lô</h3>

                <p>
                  Nhiều doanh nghiệp B2B không xuất hóa đơn ngay mà gộp theo
                  tuần hoặc theo tháng. Workflow này tự động thu thập tất cả
                  giao dịch trong kỳ, xử lý và phát hành hàng loạt — không
                  cần kế toán ngồi gõ từng cái.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Schedule trigger: chạy vào thời điểm định sẵn",
                      desc: "Cấu hình chạy cuối ngày (18:00), cuối tuần, hoặc ngày cuối tháng. n8n kéo toàn bộ giao dịch chưa có hóa đơn từ hệ thống nguồn.",
                    },
                    {
                      title: "Gom nhóm và dedup dữ liệu",
                      desc: "Nhóm giao dịch theo khách hàng (một khách nhiều đơn → một hóa đơn tổng hợp nếu yêu cầu). Loại bỏ trùng lặp, kiểm tra không xử lý hai lần.",
                    },
                    {
                      title: "Phát hành hóa đơn hàng loạt qua API",
                      desc: "Gọi MISA meInvoice API theo batch. Xử lý lỗi từng hóa đơn độc lập — một hóa đơn lỗi không ảnh hưởng các cái còn lại. Retry tự động với hóa đơn thất bại.",
                    },
                    {
                      title: "Báo cáo kết quả và xử lý ngoại lệ",
                      desc: "Tổng hợp kết quả: số thành công, số lỗi, lý do lỗi. Gửi báo cáo cho kế toán trưởng qua email. Hóa đơn lỗi được đánh dấu để kế toán xử lý thủ công.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#6366F1"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "Schedule trigger",
                      sub: "Cuối ngày / cuối tháng",
                    },
                    {
                      icon: <span className="text-lg">📥</span>,
                      label: "Kéo dữ liệu",
                      sub: "Giao dịch chưa có HĐ",
                    },
                    {
                      icon: <span className="text-lg">🔀</span>,
                      label: "Gom nhóm & dedup",
                      sub: "Tránh trùng lặp",
                    },
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Phát hành hàng loạt",
                      sub: "Batch API MISA",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Báo cáo kết quả",
                      sub: "Email kế toán trưởng",
                    },
                  ]}
                />

                {/* WF3 */}
                <h3 id="workflow-3">
                  Workflow 3: Tổng Hợp Báo Cáo Thuế Tự Động Hàng Tháng
                </h3>

                <p>
                  Cuối tháng, kế toán phải tổng hợp toàn bộ hóa đơn xuất ra,
                  phân loại theo thuế suất, đối chiếu với sổ sách để nộp tờ
                  khai thuế GTGT. Workflow này tự động hóa toàn bộ quá trình
                  tổng hợp — từ kéo dữ liệu hóa đơn, phân tích đến tạo báo
                  cáo sẵn sàng nộp thuế.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Kéo toàn bộ hóa đơn trong tháng từ MISA meInvoice",
                      desc: "Gọi MISA meInvoice API lấy danh sách hóa đơn theo kỳ (tháng/quý). Lọc theo trạng thái: đã phát hành, hợp lệ. Bao gồm cả hóa đơn điều chỉnh và hóa đơn hủy.",
                    },
                    {
                      title: "Phân tích và phân loại theo thuế suất",
                      desc: "Nhóm doanh thu theo thuế suất 0%, 5%, 8%, 10%. Tính tổng doanh thu, tổng thuế GTGT đầu ra. Đối chiếu với doanh thu ghi nhận trong hệ thống kế toán.",
                    },
                    {
                      title: "Tạo báo cáo Excel và Google Sheets",
                      desc: "Xuất file Excel định dạng chuẩn để nộp tờ khai thuế GTGT mẫu 01/GTGT. Đồng thời cập nhật Google Sheets theo dõi tháng cho ban lãnh đạo.",
                    },
                    {
                      title: "Gửi báo cáo và nhắc nhở hạn nộp thuế",
                      desc: "Email báo cáo đến kế toán trưởng và CFO. Tự động nhắc nhở 5 ngày trước hạn nộp thuế (ngày 20 tháng sau). Alert nếu phát hiện bất thường so với tháng trước.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    {
                      icon: <span className="text-lg">📅</span>,
                      label: "Cuối tháng",
                      sub: "Schedule ngày 1",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Kéo hóa đơn",
                      sub: "MISA meInvoice API",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Phân tích thuế",
                      sub: "Nhóm theo thuế suất",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Tạo báo cáo",
                      sub: "Excel + Google Sheets",
                    },
                    {
                      icon: <span className="text-lg">📬</span>,
                      label: "Gửi & nhắc hạn",
                      sub: "Email trước 5 ngày",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Tiết kiệm 8–12 giờ mỗi tháng chỉ từ Workflow 3">
                  <p className="mb-2">
                    Tổng hợp báo cáo thuế GTGT thủ công mất trung bình 8–12
                    giờ kế toán mỗi tháng. Với Workflow 3, thời gian này rút
                    xuống còn 15–20 phút để review và ký duyệt. Một năm tiết
                    kiệm khoảng 120 giờ — tương đương gần 3 tuần làm việc của
                    một kế toán.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Tính ROI cụ thể cho doanh nghiệp bạn — Đặt audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 4: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Tự Động Hóa Hóa Đơn Điện Tử</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Xuất hóa đơn thủ công 100%",
                    items: [
                      "Kế toán điền tay từng hóa đơn: tên khách, MST, hàng hóa, thuế suất",
                      "3–5 phút mỗi hóa đơn, 50 đơn/ngày = 2,5–4 giờ thuần túy nhập liệu",
                      "Lỗi MST, lỗi tên hàng → hủy hóa đơn, lập lại → mất thêm 10–15 phút",
                      "Khách hàng chờ hóa đơn từ vài giờ đến vài ngày sau khi thanh toán",
                      "Cuối tháng đối chiếu hóa đơn với sổ sách mất 2–3 ngày làm việc",
                      "Rủi ro bỏ sót hóa đơn, sai kỳ kê khai thuế GTGT",
                    ],
                  }}
                  after={{
                    title: "Sau — Hóa đơn điện tử tự động với n8n + MISA meInvoice",
                    items: [
                      "Hóa đơn được tạo tự động ngay khi đơn hàng hoàn thành, dưới 10 giây",
                      "0 thao tác thủ công — kế toán chỉ review ngoại lệ (dưới 1% trường hợp)",
                      "Tỷ lệ lỗi hóa đơn từ 2–5% xuống gần 0% nhờ validate MST tự động",
                      "Khách nhận email + Zalo PDF hóa đơn ngay sau khi thanh toán",
                      "Báo cáo thuế tự động tổng hợp, sẵn sàng kê khai vào ngày 1 hàng tháng",
                      "Tuân thủ đầy đủ Thông tư 32/2025, định dạng 1C26TCC, đúng pháp luật",
                    ],
                  }}
                />

                <StatCard
                  stats={[
                    {
                      value: "−95%",
                      label: "thời gian xuất hóa đơn",
                      sub: "từ 3–5 phút xuống dưới 10 giây",
                      color: "text-accent",
                    },
                    {
                      value: "0%",
                      label: "tỷ lệ lỗi MST/tên hàng",
                      sub: "validate tự động trước khi tạo HĐ",
                      color: "text-accent",
                    },
                    {
                      value: "120 giờ",
                      label: "tiết kiệm/năm",
                      sub: "chỉ từ tự động hóa báo cáo thuế",
                    },
                    {
                      value: "100%",
                      label: "tuân thủ pháp lý",
                      sub: "Thông tư 32/2025, định dạng 1C26TCC",
                    },
                  ]}
                />

                {/* Section 5: So sánh */}
                <h2 id="so-sanh">
                  So Sánh Chi Tiết: Hóa Đơn Thủ Công vs Tự Động (n8n + MISA meInvoice)
                </h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công 100%",
                    "Tự động (n8n + MISA meInvoice)",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Thời gian xuất mỗi hóa đơn",
                      "3–5 phút (nhập tay)",
                      "Dưới 10 giây (tự động)",
                    ],
                    [
                      "Tỷ lệ lỗi hóa đơn",
                      "2–5% (sai MST, tên hàng, thuế suất)",
                      "Dưới 0,01% (validate tự động)",
                    ],
                    [
                      "Gửi hóa đơn cho khách",
                      "Thủ công, chậm 1–24 giờ",
                      "Tự động trong vòng 10 giây",
                    ],
                    [
                      "Xử lý hóa đơn hàng loạt",
                      "Kế toán ngồi gõ từng cái",
                      "Batch tự động theo lịch",
                    ],
                    [
                      "Tổng hợp báo cáo thuế",
                      "2–3 ngày cuối tháng",
                      "Tự động ngày 1 hàng tháng",
                    ],
                    [
                      "Hoạt động",
                      "Giờ hành chính, trừ lễ tết",
                      "24/7, kể cả lễ tết",
                    ],
                    [
                      "Nhân sự cần thiết",
                      "0,5–1 FTE kế toán",
                      "0 FTE thêm khi scale",
                    ],
                    [
                      "Tuân thủ định dạng 1C26TCC",
                      "Phụ thuộc kỹ năng kế toán",
                      "Tự động đúng chuẩn 100%",
                    ],
                    [
                      "Chi phí vận hành/tháng",
                      "6–12 triệu (lương kế toán xuất HĐ)",
                      "500k–1 triệu (server n8n)",
                    ],
                  ]}
                />

                {/* Section 6: Bắt đầu */}
                <h2 id="bat-dau">
                  Triển Khai Hóa Đơn Điện Tử Tự Động Như Thế Nào?
                </h2>

                <p>
                  Lộ trình triển khai thực tế cho doanh nghiệp đang dùng MISA
                  meInvoice và muốn tự động hóa quy trình xuất hóa đơn — từ
                  setup đến vận hành ổn định trong 2–3 tuần:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Ngày 1–2: Kích hoạt MISA meInvoice API",
                      desc: "Đăng nhập MISA meInvoice, vào phần Tích hợp/API để lấy API key và endpoint. Kiểm tra tài khoản đã kích hoạt gói hỗ trợ API chưa (gói Enterprise mới có API). Cài n8n self-hosted hoặc n8n Cloud.",
                    },
                    {
                      title: "Ngày 3–5: Mapping danh mục hàng hóa và thuế suất",
                      desc: "Đây là bước quan trọng nhất. Export danh mục hàng hóa từ hệ thống đơn hàng và từ MISA, tạo bảng mapping. Xác định rõ thuế suất cho từng nhóm hàng. Lỗi ở bước này gây hóa đơn sai thuế suất.",
                    },
                    {
                      title: "Ngày 6–10: Triển khai và test Workflow 1",
                      desc: "Build workflow tự động xuất hóa đơn từ đơn hàng đơn lẻ. Test với 10–20 đơn thật trong môi trường sandbox MISA. Kiểm tra hóa đơn output đúng định dạng, đúng MST, đúng thuế suất.",
                    },
                    {
                      title: "Ngày 11–14: Triển khai Workflow 2 + 3",
                      desc: "Workflow xử lý hàng loạt và báo cáo thuế đơn giản hơn vì dựa trên logic đã có từ WF1. Cấu hình lịch chạy, test với dữ liệu tháng trước. Review output báo cáo với kế toán trưởng.",
                    },
                    {
                      title: "Ngày 15–21: Chạy song song và bàn giao",
                      desc: "Chạy tự động 100% nhưng kế toán vẫn kiểm tra chéo với hóa đơn thủ công 1–2 tuần. Sau khi xác nhận số liệu khớp → dừng xuất thủ công hoàn toàn. Thiết lập alert cho các trường hợp ngoại lệ.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không có đội IT? Vẫn triển khai được.">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng
                    tôi phân tích hệ thống đơn hàng hiện tại, cấu hình MISA
                    meInvoice, khối lượng hóa đơn và đưa ra lộ trình triển khai
                    cụ thể với chi phí rõ ràng. Đội ngũ AutoFlow đã triển khai
                    tự động hóa hóa đơn cho nhiều doanh nghiệp vừa và nhỏ tại
                    Việt Nam.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 7: FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={[
                  {
                    q: "MISA meInvoice có API để tích hợp tự động không?",
                    a: "Có. MISA meInvoice cung cấp REST API chính thức cho phép tạo, ký và phát hành hóa đơn điện tử từ hệ thống bên ngoài. API hỗ trợ xuất đơn lẻ và xuất hàng loạt (batch). Cần đăng ký gói Enterprise hoặc liên hệ MISA để kích hoạt tính năng API. Tài liệu kỹ thuật có trên cổng developer của MISA.",
                  },
                  {
                    q: "Hóa đơn tạo tự động qua API có giá trị pháp lý không?",
                    a: "Hoàn toàn có giá trị pháp lý. Hóa đơn được tạo qua MISA meInvoice API vẫn qua đúng quy trình ký số HSM và cấp mã của cơ quan thuế — đúng như khi tạo thủ công trên giao diện. Điều quan trọng là thông tin đầu vào (MST, tên hàng, thuế suất) phải chính xác, đây là phần workflow n8n phải validate kỹ trước khi gọi API.",
                  },
                  {
                    q: "Nếu hóa đơn bị lỗi khi tự động hóa thì xử lý thế nào?",
                    a: "Workflow được thiết kế với error handling đầy đủ. Mỗi hóa đơn lỗi được log chi tiết: lý do lỗi, thông tin đơn hàng tương ứng. n8n tự động retry một số lần với lỗi tạm thời (timeout, rate limit). Lỗi nghiệp vụ (MST không hợp lệ, sản phẩm không có trong danh mục) được escalate ngay cho kế toán xử lý thủ công. Không có hóa đơn nào bị bỏ sót.",
                  },
                  {
                    q: "Workflow có hỗ trợ hóa đơn điều chỉnh và hóa đơn hủy không?",
                    a: "Có thể mở rộng để xử lý. Hóa đơn điều chỉnh khi đơn hàng bị thay đổi, hóa đơn hủy khi đơn bị hủy sau khi đã xuất hóa đơn — đây là nghiệp vụ phức tạp hơn cần custom logic. Thường được triển khai ở giai đoạn 2 sau khi Workflow 1 đã ổn định.",
                  },
                  {
                    q: "Workflow tuân thủ Thông tư 32/2025 và định dạng 1C26TCC như thế nào?",
                    a: "MISA meInvoice đã tích hợp sẵn định dạng 1C26TCC theo Thông tư 32/2025. Khi gọi API tạo hóa đơn, MISA tự động áp dụng định dạng đúng chuẩn. Nhiệm vụ của n8n là đảm bảo payload gửi vào đúng cấu trúc mà MISA yêu cầu — không cần tự implement định dạng 1C26TCC.",
                  },
                  {
                    q: "Doanh nghiệp nhỏ dưới 20 hóa đơn/ngày có nên tự động hóa không?",
                    a: "Vẫn có lợi, đặc biệt nếu không có kế toán chuyên trách. Chi phí n8n Cloud free tier (5.000 executions/tháng) đủ cho khoảng 150 hóa đơn/tháng — không phát sinh thêm chi phí phần mềm. Lợi ích chính không chỉ là tiết kiệm thời gian mà còn là gửi hóa đơn cho khách ngay lập tức, đúng lúc, tạo ấn tượng chuyên nghiệp.",
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Hóa Đơn Điện Tử Tự Động" slug="hoa-don-dien-tu-tu-dong" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
