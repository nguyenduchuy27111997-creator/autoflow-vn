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
  title: "Đồng Bộ Shopee MISA Tự Động — Hết Nhập Tay, Hết Sai Sót",
  description:
    "Hướng dẫn tích hợp Shopee MISA tự động với n8n: đồng bộ đơn hàng, tồn kho, doanh thu real-time. Giảm 5 giờ nhập tay/ngày, sai sót từ 4% xuống 0%.",
  keywords: [
    "đồng bộ shopee misa",
    "tích hợp shopee misa tự động",
    "shopee misa n8n",
    "automation shopee",
    "đồng bộ đơn hàng shopee",
    "tự động hóa bán hàng shopee",
    "misa amis tự động",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề nhập tay hiện tại", level: 2 },
  { id: "giai-phap", text: "4 workflow tích hợp Shopee–MISA", level: 2 },
  { id: "workflow-1", text: "WF1: Đơn hàng → Phiếu bán", level: 3 },
  { id: "workflow-2", text: "WF2: Tồn kho real-time", level: 3 },
  { id: "workflow-3", text: "WF3: Vận chuyển → Zalo thông báo", level: 3 },
  { id: "workflow-4", text: "WF4: Báo cáo doanh thu tự động", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "ket-qua", text: "Kết quả thực tế", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function DongBoShopeeMisaBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="dong-bo-shopee-misa" title="Đồng Bộ Đơn Shopee → MISA Tự Động" />
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
              <span className="text-slate-600 truncate max-w-[300px]">E-commerce</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                E-commerce
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Shopee · MISA
              </span>
              <span className="text-xs text-slate-500">10 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Đồng Bộ Shopee → MISA Tự Động —{" "}
              <span className="gradient-text">Hết Nhập Tay, Hết Sai Sót</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Mỗi ngày nhân viên kế toán ngồi copy từng đơn Shopee vào MISA.
              Sai số lượng. Sai SKU. Cuối tháng báo cáo lệch. 4 workflow n8n
              giải quyết toàn bộ — đồng bộ real-time, không cần nhập tay, chạy
              24/7.
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
                      value: "5 giờ",
                      label: "nhập tay mỗi ngày",
                      sub: "mỗi nhân viên kế toán",
                      color: "text-red-500",
                    },
                    {
                      value: "8–10 lỗi",
                      label: "sai sót mỗi tuần",
                      sub: "sai SKU, sai số lượng, thiếu đơn",
                      color: "text-amber-500",
                    },
                    {
                      value: "240 triệu",
                      label: "chi phí nhân sự/năm",
                      sub: "chỉ để làm việc có thể tự động",
                      color: "text-red-500",
                    },
                    {
                      value: "56–62%",
                      label: "GMV thị trường Shopee",
                      sub: "Shopee chiếm ưu thế tuyệt đối tại VN",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Nhập Tay Shopee → MISA Đang Ngốn Bao Nhiêu Tiền Của Bạn?</h2>

                <p>
                  Shopee chiếm 56–62% tổng GMV thương mại điện tử Việt Nam.
                  Nếu bạn bán hàng trên Shopee, đơn về liên tục — sáng, trưa,
                  tối, cả cuối tuần. Nhưng MISA không tự biết.
                </p>

                <p>
                  Kết quả? Nhân viên kế toán phải ngồi mở hai màn hình: một
                  bên Shopee Seller Center, một bên MISA AMIS. Copy từng đơn.
                  Gõ từng dòng. Lặp đi lặp lại — 5 giờ mỗi ngày, 250 ngày một
                  năm.
                </p>

                <CalloutBox type="warning" title="Bạn có đang gặp những vấn đề này?">
                  Nhập tay thủ công không chỉ tốn thời gian — nó gây ra chuỗi
                  sai sót có hệ thống: tỷ lệ lỗi nhập tay dao động 1–4%, trong
                  khi hệ thống tự động chỉ là 0,001%. Sai một SKU → sai tồn
                  kho → sai báo cáo → sai quyết định mua hàng → hết hàng đúng
                  lúc cao điểm.
                </CalloutBox>

                <p>
                  Tệ hơn nữa: Shopee phạt nặng các shop vi phạm SLA{" "}
                  <em>Days to Ship</em>. Nếu kế toán nhập chậm, kho không biết
                  thực tế tồn kho, người soạn hàng xuất nhầm — đơn trễ, shop
                  bị hạ điểm. Vòng luẩn quẩn bắt đầu từ một thao tác thủ công.
                </p>

                <p>
                  94% doanh nghiệp đang thực hiện các tác vụ lặp lại có thể tự
                  động hóa hoàn toàn. Việc đồng bộ đơn hàng Shopee sang MISA
                  là ví dụ điển hình nhất — cấu trúc dữ liệu cố định, logic
                  không đổi, lặp hàng nghìn lần.
                </p>

                {/* Section 2: Giải pháp */}
                <h2 id="giai-phap">
                  4 Workflow Tích Hợp Shopee–MISA Tự Động Hoàn Toàn
                </h2>

                <p>
                  Dùng n8n làm lớp trung gian, bạn kết nối Shopee Open Platform
                  API với MISA AMIS API để tạo pipeline tự động end-to-end. Đây
                  là 4 workflow cốt lõi cho shop Shopee:
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">
                  Workflow 1: Đơn Hàng Shopee → MISA Phiếu Bán Hàng
                </h3>

                <p>
                  Workflow quan trọng nhất. Mỗi đơn hàng mới trên Shopee lập
                  tức được tạo thành phiếu bán hàng trong MISA — không cần
                  chạm tay.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Shopee webhook kích hoạt ngay khi có đơn mới",
                      desc: "n8n lắng nghe sự kiện order.create từ Shopee Open Platform. Độ trễ dưới 5 giây.",
                    },
                    {
                      title: "Validate và chuẩn hóa dữ liệu đơn hàng",
                      desc: "Kiểm tra SKU tồn tại trong MISA, map mã sản phẩm Shopee ↔ MISA, chuẩn hóa tên khách, địa chỉ, phương thức thanh toán.",
                    },
                    {
                      title: "Tạo phiếu bán hàng trong MISA AMIS",
                      desc: "Gọi MISA AMIS API (push/write) để tạo phiếu bán hàng với đầy đủ thông tin: mã đơn Shopee, sản phẩm, số lượng, giá, chiết khấu Shopee Voucher.",
                    },
                    {
                      title: "Ghi log và thông báo kế toán",
                      desc: "Lưu kết quả vào Google Sheet theo dõi. Nếu tạo thành công → log. Nếu lỗi → alert Telegram cho kế toán xử lý ngay.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#F97316"
                  steps={[
                    {
                      icon: <span className="text-lg">🛒</span>,
                      label: "Đơn mới Shopee",
                      sub: "Webhook real-time",
                    },
                    {
                      icon: <span className="text-lg">⚡</span>,
                      label: "n8n validate",
                      sub: "Map SKU + chuẩn hóa",
                    },
                    {
                      icon: <span className="text-lg">📄</span>,
                      label: "MISA phiếu bán",
                      sub: "Tạo tự động < 5 giây",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Log Google Sheet",
                      sub: "Theo dõi & audit",
                    },
                    {
                      icon: <span className="text-lg">🔔</span>,
                      label: "Alert nếu lỗi",
                      sub: "Telegram → kế toán",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  MISA AMIS sử dụng kiến trúc push/write API — nghĩa là n8n
                  chủ động đẩy dữ liệu vào MISA, không cần MISA polling. Đây
                  là kiến trúc phù hợp cho tích hợp Shopee vì đơn hàng có thể
                  về bất kỳ lúc nào, kể cả 2 giờ sáng.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">Workflow 2: Đồng Bộ Tồn Kho Shopee Real-Time</h3>

                <p>
                  Sai tồn kho là nguồn gốc của mọi vấn đề vận hành. Workflow
                  này giữ số lượng tồn kho trên Shopee và MISA luôn khớp nhau
                  — theo cả hai chiều.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Khi MISA cập nhật tồn kho (nhập hàng, kiểm kê)",
                      desc: "n8n phát hiện thay đổi qua MISA webhook hoặc polling định kỳ mỗi 15 phút. Lấy danh sách SKU có số lượng thay đổi.",
                    },
                    {
                      title: "Đồng bộ lên Shopee Seller API",
                      desc: "Gọi Shopee API cập nhật stock cho từng variation. Xử lý batch tối đa 50 SKU/request để tránh rate limit.",
                    },
                    {
                      title: "Khi đơn Shopee hoàn thành → trừ tồn kho MISA",
                      desc: "Shopee xác nhận giao hàng thành công → n8n trừ số lượng tương ứng trong MISA. Không cần nhân viên kho làm thủ công.",
                    },
                    {
                      title: "Cảnh báo tồn kho thấp",
                      desc: "SKU nào xuống dưới ngưỡng cài sẵn → Zalo/Telegram thông báo quản lý kho để đặt hàng kịp thời.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "MISA nhập hàng",
                      sub: "Webhook / polling 15 phút",
                    },
                    {
                      icon: <span className="text-lg">🔄</span>,
                      label: "n8n batch sync",
                      sub: "Xử lý 50 SKU/request",
                    },
                    {
                      icon: <span className="text-lg">🏪</span>,
                      label: "Shopee cập nhật",
                      sub: "Stock chính xác 100%",
                    },
                    {
                      icon: <span className="text-lg">⚠️</span>,
                      label: "Alert tồn thấp",
                      sub: "Zalo → quản lý kho",
                    },
                  ]}
                />

                {/* WF3 */}
                <h3 id="workflow-3">
                  Workflow 3: Trạng Thái Vận Chuyển → Zalo Thông Báo Khách
                </h3>

                <p>
                  Khách hàng hỏi đơn ở đâu rồi? Đây là câu hỏi nhân viên
                  CSKH nhận nhiều nhất — và hoàn toàn có thể tự động hóa.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Shopee cập nhật trạng thái vận chuyển",
                      desc: "Webhook nhận sự kiện: đã lấy hàng, đang vận chuyển, đến bưu cục, giao thành công, giao thất bại.",
                    },
                    {
                      title: "n8n xử lý và chọn template tin nhắn",
                      desc: 'Mỗi trạng thái có template Zalo riêng. VD: "Đơn #123 của bạn đã được lấy hàng, dự kiến đến trong 2–3 ngày."',
                    },
                    {
                      title: "Gửi Zalo OA cho khách",
                      desc: "Tra cứu số điện thoại khách hàng trong CRM → gửi tin Zalo. Nếu khách chưa follow OA → gửi SMS backup.",
                    },
                    {
                      title: "Giao thất bại → escalate ngay",
                      desc: "Nếu trạng thái là giao thất bại → thông báo tức thì cho team CSKH qua Telegram để liên hệ khách trong 1 giờ.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">🚚</span>,
                      label: "Trạng thái mới",
                      sub: "Shopee logistics webhook",
                    },
                    {
                      icon: <span className="text-lg">📝</span>,
                      label: "Chọn template",
                      sub: "Theo từng milestone",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Zalo → Khách",
                      sub: "Proactive thông báo",
                    },
                    {
                      icon: <span className="text-lg">❌</span>,
                      label: "Giao thất bại",
                      sub: "→ Alert CSKH 1 giờ",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Tại sao điều này quan trọng?">
                  Chủ động thông báo trạng thái vận chuyển giảm 70% câu hỏi
                  "đơn tôi đâu rồi?" từ khách hàng. Ít tin nhắn CSKH hơn =
                  đội ngũ tập trung vào vấn đề phức tạp hơn = review tốt hơn.
                </CalloutBox>

                {/* WF4 */}
                <h3 id="workflow-4">Workflow 4: Báo Cáo Doanh Thu Shopee Tự Động</h3>

                <p>
                  Cuối ngày, cuối tuần, cuối tháng — báo cáo tự tổng hợp và
                  gửi về. Không cần export, không cần pivot table, không cần
                  đợi kế toán làm thủ công.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger theo lịch (hàng ngày 8:00 sáng)",
                      desc: "n8n chạy schedule trigger mỗi sáng, kéo dữ liệu đơn hàng ngày hôm qua từ MISA AMIS (đã được đồng bộ qua WF1).",
                    },
                    {
                      title: "Tính toán KPI tự động",
                      desc: "Tổng doanh thu, số đơn, doanh thu theo kênh, top 10 sản phẩm bán chạy, tỷ lệ hủy đơn, tỷ lệ hoàn hàng.",
                    },
                    {
                      title: "So sánh với ngày/tuần/tháng trước",
                      desc: "Tự động tính % thay đổi. Nếu doanh thu giảm >20% so với cùng kỳ → flag đỏ để quản lý chú ý.",
                    },
                    {
                      title: "Gửi báo cáo qua Zalo/email",
                      desc: "Báo cáo tóm tắt gửi vào group Zalo quản lý lúc 8:00 sáng. Báo cáo chi tiết lưu Google Sheet, link đính kèm.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "8:00 mỗi sáng",
                      sub: "Schedule trigger",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Kéo dữ liệu MISA",
                      sub: "Đơn đã đồng bộ WF1",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính KPI",
                      sub: "Doanh thu, đơn, top SP",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Gửi Zalo group",
                      sub: "Tóm tắt + link chi tiết",
                    },
                  ]}
                />

                {/* Section 3: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Tích Hợp Shopee–MISA Tự Động</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Nhập tay 100%",
                    items: [
                      "Kế toán ngồi copy đơn từ Shopee vào MISA 5 giờ/ngày",
                      "8–10 lỗi sai SKU, số lượng, giá mỗi tuần",
                      "Tồn kho Shopee và MISA lệch nhau sau vài ngày",
                      "Khách hỏi đơn → nhân viên tra thủ công mất 5–10 phút",
                      "Báo cáo cuối tháng mất 2–3 ngày để tổng hợp",
                      "Shop bị phạt SLA vì không biết thực tế tồn kho",
                    ],
                  }}
                  after={{
                    title: "Sau — Đồng bộ Shopee MISA tự động",
                    items: [
                      "Đơn mới → MISA phiếu bán hàng trong dưới 5 giây",
                      "Tỷ lệ lỗi 0,001% — thực tế gần như bằng 0",
                      "Tồn kho đồng bộ real-time, chính xác tuyệt đối",
                      "Khách nhận Zalo thông báo tự động mỗi bước giao hàng",
                      "Báo cáo doanh thu gửi tự động lúc 8 giờ sáng mỗi ngày",
                      "0 vi phạm SLA kể từ khi triển khai",
                    ],
                  }}
                />

                {/* Section 4: Kết quả */}
                <h2 id="ket-qua">Kết Quả Thực Tế Sau Khi Triển Khai</h2>

                <StatCard
                  stats={[
                    {
                      value: "0 giờ",
                      label: "nhập tay mỗi ngày",
                      sub: "100% tự động qua n8n",
                      color: "text-accent",
                    },
                    {
                      value: "0,001%",
                      label: "tỷ lệ lỗi dữ liệu",
                      sub: "từ 1–4% xuống gần bằng 0",
                      color: "text-accent",
                    },
                    {
                      value: "−70%",
                      label: "câu hỏi CSKH về đơn",
                      sub: "Zalo thông báo chủ động",
                    },
                    {
                      value: "2 tuần",
                      label: "thời gian triển khai",
                      sub: "từ 0 → vận hành ổn định",
                    },
                  ]}
                />

                <p>
                  Một shop Shopee hạng Mall tại TP.HCM (ngành gia dụng, ~500
                  đơn/ngày) triển khai 4 workflow trên trong 2 tuần. Tháng đầu
                  tiên: kế toán tiết kiệm 110 giờ làm việc, sai sót kế toán
                  về 0, không phát sinh thêm nhân sự dù doanh thu tăng 30%.
                </p>

                <CalloutBox type="info" title="Bạn cần bao nhiêu đơn để có lợi?">
                  <p className="mb-2">
                    Với chi phí setup n8n khoảng 3–5 triệu và phí server ~500k/tháng,
                    chỉ cần tiết kiệm 10 giờ nhân sự/tháng là hòa vốn. Shop có
                    từ 30 đơn/ngày trở lên đều có ROI dương trong tháng đầu tiên.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Tính ROI cho shop của bạn — Đặt audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 5: So sánh */}
                <h2 id="so-sanh">
                  So Sánh Chi Tiết: Đồng Bộ Thủ Công vs Tích Hợp Shopee MISA Tự Động
                </h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công 100%",
                    "Tích hợp Shopee–MISA (n8n)",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Tốc độ đồng bộ đơn",
                      "15–60 phút (chờ kế toán)",
                      "Dưới 5 giây (real-time)",
                    ],
                    [
                      "Tỷ lệ lỗi dữ liệu",
                      "1–4% (nhập tay)",
                      "0,001% (tự động)",
                    ],
                    [
                      "Nhân sự cần thiết",
                      "0,5–1 FTE kế toán",
                      "0 FTE thêm",
                    ],
                    [
                      "Tồn kho Shopee vs MISA",
                      "Lệch sau 1–2 ngày",
                      "Đồng bộ real-time",
                    ],
                    [
                      "Thông báo khách hàng",
                      "Không có / thủ công",
                      "Zalo tự động mỗi milestone",
                    ],
                    [
                      "Báo cáo doanh thu",
                      "2–3 ngày cuối tháng",
                      "Mỗi sáng lúc 8:00",
                    ],
                    [
                      "Hoạt động",
                      "Giờ hành chính",
                      "24/7, kể cả lễ tết",
                    ],
                    [
                      "Vi phạm SLA Shopee",
                      "Thường xuyên khi cao điểm",
                      "0 vi phạm",
                    ],
                    [
                      "Chi phí vận hành/tháng",
                      "8–15 triệu (lương nhân sự)",
                      "500k–1 triệu (server n8n)",
                    ],
                  ]}
                />

                {/* Section 6: Bắt đầu */}
                <h2 id="bat-dau">
                  Bắt Đầu Triển Khai Tích Hợp Shopee MISA Như Thế Nào?
                </h2>

                <p>
                  Lộ trình triển khai thực tế cho một shop Shopee — từ chưa có
                  gì đến vận hành ổn định trong 2 tuần. Đây là{" "}
                  <a href="/blog/lo-trinh-tu-dong-hoa-sme">Giai đoạn 2 trong lộ trình tự động hóa SME</a> —
                  tích hợp hệ thống cốt lõi:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Ngày 1–2: Chuẩn bị API credentials",
                      desc: "Đăng ký Shopee Open Platform, lấy App ID + Secret Key. Lấy API key MISA AMIS từ trang quản trị. Cài n8n self-hosted hoặc n8n Cloud.",
                    },
                    {
                      title: "Ngày 3–5: Triển khai Workflow 1 (đơn hàng → phiếu bán)",
                      desc: "Đây là workflow có giá trị cao nhất và phức tạp nhất. Cần map đúng mã SKU giữa Shopee và MISA. Test kỹ với đơn thật trước khi bật live.",
                    },
                    {
                      title: "Ngày 6–8: Triển khai Workflow 2 (tồn kho)",
                      desc: "Sync tồn kho ban đầu một lần bằng tay để căn chỉnh baseline. Sau đó bật auto-sync. Monitor 2–3 ngày để đảm bảo không lệch.",
                    },
                    {
                      title: "Ngày 9–11: Workflow 3 + 4 (Zalo thông báo + báo cáo)",
                      desc: "Kết nối Zalo OA. Cài schedule báo cáo sáng. Hai workflow này đơn giản hơn, thường setup xong trong 1 ngày mỗi workflow.",
                    },
                    {
                      title: "Ngày 12–14: Chạy song song và bàn giao",
                      desc: "Chạy tự động 100% nhưng kế toán vẫn kiểm tra chéo. Sau 2–3 ngày không lỗi → chuyển sang vận hành hoàn toàn tự động.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không muốn tự làm? Có người làm cho bạn.">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi
                    phân tích quy trình Shopee hiện tại, số đơn/ngày, hệ thống
                    MISA đang dùng và đưa ra lộ trình tích hợp cụ thể với chi
                    phí rõ ràng.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 7: FAQ */}
                <h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

                <FAQ items={[
                  { q: "MISA AMIS có API để tích hợp không?", a: "Có. MISA AMIS cung cấp REST API chính thức, chủ yếu là push/write API — bạn đẩy dữ liệu vào MISA từ hệ thống bên ngoài. Đăng ký developer trên MISA Developer Portal để lấy API key. Các nghiệp vụ cơ bản như tạo phiếu bán hàng, cập nhật tồn kho đều được hỗ trợ." },
                  { q: "Shopee có cho phép tích hợp bên thứ ba không?", a: "Có. Shopee Open Platform cung cấp API công khai cho seller. Đăng ký ứng dụng trên Shopee Open Platform, nhận App ID và Secret Key, authorize OAuth cho shop. Quá trình mất khoảng 30 phút." },
                  { q: "Nếu Shopee hoặc MISA thay đổi API thì workflow có bị hỏng không?", a: "Đây là rủi ro thực tế với mọi tích hợp API. Cách phòng tránh: cài alert tự động khi workflow lỗi, theo dõi changelog của Shopee Open Platform (thường thông báo trước 30–90 ngày). n8n có error handling và retry logic giúp giảm thiểu downtime." },
                  { q: "Có phù hợp với shop nhỏ dưới 50 đơn/ngày không?", a: "Hoàn toàn phù hợp. Shop nhỏ hưởng lợi nhiều hơn vì thường không có kế toán chuyên trách — chủ shop tự nhập. Tiết kiệm 1–2 giờ/ngày. Với shop dưới 50 đơn/ngày, n8n Cloud free tier (5.000 executions/tháng) có thể đủ dùng." },
                  { q: "Tích hợp có ảnh hưởng đến quyết toán thuế và BCTC không?", a: "Không ảnh hưởng tiêu cực — ngược lại, dữ liệu chính xác hơn giúp BCTC đáng tin cậy hơn. Cần test kỹ logic mapping: đơn hủy, hoàn trả, chiết khấu Shopee Voucher. Luôn review với kế toán trưởng trước khi production." },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Đồng Bộ Đơn Shopee → MISA Tự Động" slug="dong-bo-shopee-misa" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
