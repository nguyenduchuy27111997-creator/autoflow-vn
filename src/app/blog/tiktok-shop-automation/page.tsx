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
  title: "TikTok Shop + n8n: Tự Động Hóa Đơn Hàng Cho Seller Việt Nam",
  description:
    "Hướng dẫn tự động hóa TikTok Shop với n8n: xác nhận đơn, đồng bộ tồn kho, Zalo thông báo, báo cáo hàng ngày. TikTok chiếm 41% thị phần TMĐT VN với $3.4B GMV H1 2025.",
  keywords: [
    "tiktok shop tự động",
    "n8n tiktok shop",
    "tự động hóa tiktok shop",
    "tiktok seller automation",
    "đồng bộ tiktok shop",
    "tiktok shop n8n workflow",
    "tự động xác nhận đơn tiktok",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề của seller TikTok Shop", level: 2 },
  { id: "giai-phap", text: "4 workflow tự động hóa TikTok Shop", level: 2 },
  { id: "workflow-1", text: "WF1: Xác nhận & xử lý đơn hàng", level: 3 },
  { id: "workflow-2", text: "WF2: Đồng bộ tồn kho real-time", level: 3 },
  { id: "workflow-3", text: "WF3: Zalo thông báo khách hàng", level: 3 },
  { id: "workflow-4", text: "WF4: Báo cáo doanh thu hàng ngày", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "ket-qua", text: "Kết quả thực tế", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function TiktokShopAutomationBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="tiktok-shop-automation" title="TikTok Shop + n8n: Tự Động Hóa Đơn Hàng" />
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
              <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold">
                E-commerce
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                TikTok Shop · n8n
              </span>
              <span className="text-xs text-slate-500">11 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              TikTok Shop + n8n:{" "}
              <span className="gradient-text">Tự Động Hóa Đơn Hàng Cho Seller Việt Nam</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              TikTok Shop chiếm 41% thị phần TMĐT Việt Nam với $3.4B GMV chỉ
              trong nửa đầu 2025. Đơn về như vũ bão 24/7 — nhưng đội ngũ vẫn
              đang xác nhận thủ công, đồng bộ tồn kho bằng tay, nhắn khách
              từng tin một. 4 workflow n8n giải quyết toàn bộ, chạy tự động
              ngay cả lúc 3 giờ sáng.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Hook Stats */}
                <StatCard
                  stats={[
                    {
                      value: "$3.4B",
                      label: "GMV TikTok Shop H1 2025",
                      sub: "chỉ riêng thị trường Việt Nam",
                      color: "text-pink-500",
                    },
                    {
                      value: "41%",
                      label: "thị phần TMĐT Việt Nam",
                      sub: "TikTok Shop vượt qua Lazada, Tiki",
                      color: "text-pink-500",
                    },
                    {
                      value: "296M",
                      label: "giao dịch H1 2025",
                      sub: "trung bình 1,6M đơn mỗi ngày",
                      color: "text-red-500",
                    },
                    {
                      value: "3–6 giờ",
                      label: "xử lý thủ công mỗi ngày",
                      sub: "xác nhận, đồng bộ, nhắn khách",
                      color: "text-red-500",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">TikTok Shop Tăng Trưởng Nhanh — Nhưng Quy Trình Vận Hành Đang Kéo Bạn Lại</h2>

                <p>
                  Nửa đầu 2025, TikTok Shop ghi nhận 296 triệu giao dịch tại
                  Việt Nam. Con số này không chỉ là thành tích kinh doanh — nó
                  là 296 triệu đơn hàng cần được xử lý, xác nhận, đóng gói,
                  giao hàng và chăm sóc sau mua. Nếu bạn là seller có 200–500
                  đơn/ngày, đây là bài toán vận hành thực sự.
                </p>

                <p>
                  TikTok Seller API sử dụng kiến trúc REST-based với hệ thống
                  webhook cho sự kiện thời gian thực: đơn mới, thay đổi trạng
                  thái, cập nhật tồn kho, trả hàng hoàn tiền. Về mặt kỹ thuật,
                  mọi thứ đã sẵn sàng để tự động hóa. Nhưng hầu hết seller vẫn
                  đang xử lý bằng tay vì chưa biết bắt đầu từ đâu.
                </p>

                <CalloutBox type="warning" title="Bạn có đang gặp những vấn đề này?">
                  TikTok Shop có SLA xác nhận đơn chặt hơn Shopee: seller cần
                  xác nhận trong 24 giờ, nếu trễ shop bị hạ điểm và giảm phân
                  phối video. Khi đơn về đêm khuya hoặc cuối tuần, xác nhận
                  thủ công gần như không khả thi. Kết quả là vòng luẩn quẩn:
                  trễ xác nhận → hạ điểm → ít đơn → doanh thu giảm.
                </CalloutBox>

                <p>
                  Thêm vào đó, TikTok Shop và hệ thống kho/kế toán không kết
                  nối. Tồn kho thực tế và tồn kho trên TikTok Shop thường lệch
                  nhau sau 2–3 ngày vận hành cao điểm. Hết hàng mà không biết
                  → nhận đơn không giao được → bị phạt. Đây không phải lỗi
                  của đội ngũ — đây là lỗi quy trình.
                </p>

                <p>
                  94% tác vụ vận hành TMĐT có thể tự động hóa hoàn toàn.
                  TikTok Shop là nền tảng đi đầu trong việc cung cấp API đầy
                  đủ cho seller. Không tận dụng là lãng phí cơ hội cạnh tranh
                  đáng kể.
                </p>

                {/* Section 2: Giải pháp */}
                <h2 id="giai-phap">
                  4 Workflow Tự Động Hóa TikTok Shop Với n8n
                </h2>

                <p>
                  n8n đóng vai trò lớp tích hợp trung gian, kết nối TikTok
                  Seller API với hệ thống kho, kế toán, CRM và kênh thông báo
                  của bạn. Đây là 4 workflow cốt lõi giúp seller TikTok Shop
                  vận hành tự động end-to-end:
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">
                  Workflow 1: Tự Động Xác Nhận & Xử Lý Đơn Hàng TikTok Shop
                </h3>

                <p>
                  Workflow quan trọng nhất và có tác động tức thì nhất. Mỗi
                  đơn hàng mới trên TikTok Shop được tự động xác nhận, kiểm
                  tra tồn kho và đẩy sang hệ thống kho — không cần ai thao
                  tác, kể cả 3 giờ sáng.
                </p>

                <StepList
                  steps={[
                    {
                      title: "TikTok webhook kích hoạt ngay khi có đơn mới",
                      desc: "n8n lắng nghe sự kiện ORDER_STATUS_CHANGE từ TikTok Seller API (REST webhook). Đơn mới chạm vào hệ thống trong dưới 10 giây.",
                    },
                    {
                      title: "Kiểm tra tồn kho và validate đơn hàng",
                      desc: "Kiểm tra SKU còn hàng trong hệ thống kho thực tế. Nếu đủ hàng → tự động xác nhận đơn qua TikTok API. Nếu hết hàng → alert ngay cho quản lý kho.",
                    },
                    {
                      title: "Đẩy đơn sang hệ thống kho/ERP",
                      desc: "Tạo lệnh xuất kho tự động: tên khách, địa chỉ, SKU, số lượng, mã vận đơn TikTok Express. Kho nhận thông tin đóng gói không cần nhập tay.",
                    },
                    {
                      title: "Ghi log và cập nhật Google Sheet theo dõi",
                      desc: "Lưu toàn bộ đơn hàng vào Google Sheet dashboard: mã đơn, sản phẩm, giá trị, trạng thái. Nếu xử lý thất bại → alert Telegram tức thì cho quản lý.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Đơn mới TikTok",
                      sub: "Webhook real-time",
                    },
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Kiểm tra tồn kho",
                      sub: "Validate tự động",
                    },
                    {
                      icon: <span className="text-lg">⚡</span>,
                      label: "Xác nhận đơn",
                      sub: "TikTok API < 10 giây",
                    },
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Lệnh xuất kho",
                      sub: "Tự động, không nhập tay",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Log & theo dõi",
                      sub: "Google Sheet + Alert",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  TikTok Seller API sử dụng kiến trúc REST-based với OAuth 2.0.
                  Webhook sự kiện đơn hàng có độ trễ dưới 30 giây so với thời
                  điểm khách đặt hàng thực tế — đủ nhanh để tự động xác nhận
                  trong SLA 24 giờ kể cả khi đội ngũ đang ngủ.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">Workflow 2: Đồng Bộ Tồn Kho TikTok Shop Real-Time</h3>

                <p>
                  Tồn kho lệch là nguyên nhân hàng đầu khiến seller TikTok
                  bị phạt và mất điểm shop. Workflow này giữ số lượng trên
                  TikTok Shop luôn phản ánh đúng thực tế kho — theo cả hai
                  chiều, liên tục 24/7.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Phát hiện thay đổi tồn kho từ hệ thống kho",
                      desc: "n8n nhận webhook hoặc polling mỗi 10 phút từ hệ thống kho thực tế (WMS/ERP/Google Sheet). Lấy danh sách SKU có số lượng thay đổi kể từ lần sync cuối.",
                    },
                    {
                      title: "Cập nhật tồn kho lên TikTok Shop",
                      desc: "Gọi TikTok Seller API để cập nhật stock cho từng product variant. Xử lý batch theo giới hạn rate limit của API, tự động retry nếu thất bại.",
                    },
                    {
                      title: "Khi đơn TikTok hoàn thành → trừ tồn kho thực",
                      desc: "TikTok xác nhận giao hàng thành công → n8n tự động trừ số lượng tương ứng trong hệ thống kho nội bộ. Không cần kho trưởng làm thủ công.",
                    },
                    {
                      title: "Cảnh báo tồn kho thấp và hết hàng",
                      desc: "SKU nào xuống dưới ngưỡng cài sẵn → Zalo/Telegram thông báo ngay cho quản lý kho. SKU về 0 → tự động ẩn sản phẩm trên TikTok Shop để tránh nhận đơn không giao được.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    {
                      icon: <span className="text-lg">🏭</span>,
                      label: "Kho thực tế",
                      sub: "Webhook / polling 10 phút",
                    },
                    {
                      icon: <span className="text-lg">🔄</span>,
                      label: "n8n xử lý batch",
                      sub: "Rate limit safe",
                    },
                    {
                      icon: <span className="text-lg">🛍️</span>,
                      label: "TikTok cập nhật",
                      sub: "Stock chính xác 100%",
                    },
                    {
                      icon: <span className="text-lg">⚠️</span>,
                      label: "Alert tồn thấp",
                      sub: "Zalo → quản lý kho",
                    },
                    {
                      icon: <span className="text-lg">🚫</span>,
                      label: "Hết hàng → ẩn SP",
                      sub: "Tránh nhận đơn ảo",
                    },
                  ]}
                />

                <CalloutBox type="warning" title="Đừng bỏ qua bước ẩn sản phẩm khi hết hàng">
                  TikTok Shop phạt nặng tỷ lệ hủy đơn cao. Nếu hết hàng mà
                  sản phẩm vẫn hiển thị, khách vẫn đặt, bạn phải hủy → tỷ lệ
                  hủy tăng → điểm shop giảm → phân phối video bị cắt. Tự động
                  ẩn sản phẩm khi hết hàng là bảo vệ điểm số quan trọng nhất.
                </CalloutBox>

                {/* WF3 */}
                <h3 id="workflow-3">
                  Workflow 3: Zalo Thông Báo Khách Hàng Tự Động
                </h3>

                <p>
                  Khách mua TikTok Shop kỳ vọng trải nghiệm nhanh, thông tin
                  minh bạch. Workflow này gửi thông báo proactive qua Zalo
                  mỗi khi trạng thái đơn hàng thay đổi — không cần đội CSKH
                  can thiệp.
                </p>

                <StepList
                  steps={[
                    {
                      title: "TikTok webhook báo thay đổi trạng thái vận chuyển",
                      desc: "n8n nhận sự kiện logistics từ TikTok: đã tạo vận đơn, đã lấy hàng, đang vận chuyển, đến bưu cục gần nhất, giao thành công, giao thất bại, yêu cầu hoàn hàng.",
                    },
                    {
                      title: "Chọn template tin nhắn Zalo phù hợp",
                      desc: 'Mỗi milestone có template riêng. Ví dụ: "Đơn #TT123 của bạn đang trên đường giao, dự kiến đến ngày mai. TikTok Express tracking: [link]." Cá nhân hóa theo tên khách và sản phẩm.',
                    },
                    {
                      title: "Tra cứu SĐT khách và gửi Zalo OA",
                      desc: "Lấy số điện thoại từ dữ liệu đơn hàng TikTok → gửi tin Zalo OA. Nếu khách chưa follow OA → gửi SMS backup qua API nhà mạng.",
                    },
                    {
                      title: "Giao thất bại → escalate CSKH trong 1 giờ",
                      desc: "Trạng thái giao thất bại → thông báo tức thì cho team CSKH qua Telegram group. Gắn thông tin khách, địa chỉ, lý do thất bại để CSKH liên hệ ngay không cần tra cứu.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">🚚</span>,
                      label: "Logistics update",
                      sub: "TikTok Express webhook",
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
                      sub: "→ CSKH trong 1 giờ",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Tại sao Zalo thay vì chỉ dùng thông báo TikTok?">
                  TikTok in-app notification chỉ hiện khi khách mở app. Zalo
                  có tỷ lệ đọc tin OA trung bình 65–80% trong vòng 1 giờ, cao
                  hơn nhiều so với email (20–30%) và push notification (15–25%).
                  Với 74 triệu người dùng Zalo tại Việt Nam, đây là kênh thông
                  báo hiệu quả nhất cho khách nội địa.
                </CalloutBox>

                {/* WF4 */}
                <h3 id="workflow-4">Workflow 4: Báo Cáo Doanh Thu TikTok Shop Hàng Ngày</h3>

                <p>
                  Bạn có biết chính xác hôm qua shop bán được bao nhiêu, sản
                  phẩm nào chạy nhất, tỷ lệ hoàn hàng bao nhiêu? Workflow
                  này tổng hợp toàn bộ và gửi vào group Zalo quản lý mỗi
                  sáng — không cần ai làm báo cáo.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger tự động lúc 7:30 sáng mỗi ngày",
                      desc: "n8n chạy schedule trigger, kéo toàn bộ dữ liệu đơn hàng ngày hôm qua từ TikTok Seller API: đã giao, đang giao, hủy, hoàn hàng.",
                    },
                    {
                      title: "Tính toán KPI doanh thu tự động",
                      desc: "Tổng doanh thu (sau phí TikTok), số đơn thành công, doanh thu theo từng sản phẩm, top 5 sản phẩm bán chạy, tỷ lệ hủy đơn, tỷ lệ hoàn hàng, giá trị đơn trung bình.",
                    },
                    {
                      title: "So sánh với ngày/tuần trước",
                      desc: "Tự động tính % thay đổi so với hôm qua và cùng ngày tuần trước. Nếu doanh thu giảm trên 25% so với cùng ngày tuần trước → gắn cờ đỏ để quản lý chú ý.",
                    },
                    {
                      title: "Gửi báo cáo vào Zalo group + lưu Google Sheet",
                      desc: "Tin nhắn tóm tắt dạng text gửi vào Zalo group quản lý lúc 8:00 sáng. Báo cáo chi tiết được lưu tự động vào Google Sheet với link đính kèm trong tin nhắn.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "7:30 mỗi sáng",
                      sub: "Schedule trigger",
                    },
                    {
                      icon: <span className="text-lg">📥</span>,
                      label: "Kéo dữ liệu TikTok",
                      sub: "Seller API hôm qua",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính KPI",
                      sub: "Doanh thu, đơn, top SP",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Zalo group",
                      sub: "8:00 sáng mỗi ngày",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Google Sheet",
                      sub: "Lưu trữ lịch sử",
                    },
                  ]}
                />

                {/* Section 3: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Tự Động Hóa TikTok Shop</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Vận hành thủ công 100%",
                    items: [
                      "Xác nhận đơn thủ công, trễ nếu đơn về đêm hoặc cuối tuần",
                      "Tồn kho TikTok Shop lệch thực tế sau 2–3 ngày cao điểm",
                      "Nhận đơn không có hàng → hủy → điểm shop giảm",
                      "Khách hỏi đơn → CSKH tra thủ công mất 5–10 phút/lần",
                      "Báo cáo doanh thu làm cuối tuần, mất 2–3 giờ",
                      "SLA xác nhận 24 giờ thường xuyên vi phạm khi nhiều đơn",
                    ],
                  }}
                  after={{
                    title: "Sau — TikTok Shop tự động với n8n",
                    items: [
                      "Đơn mới xác nhận tự động trong dưới 10 giây, kể cả 3 giờ sáng",
                      "Tồn kho đồng bộ real-time, chính xác tuyệt đối 24/7",
                      "Hết hàng → tự động ẩn sản phẩm, không nhận đơn ảo",
                      "Khách nhận Zalo thông báo chủ động mỗi bước giao hàng",
                      "Báo cáo doanh thu gửi tự động lúc 8 giờ sáng mỗi ngày",
                      "0 vi phạm SLA xác nhận đơn kể từ khi triển khai",
                    ],
                  }}
                />

                {/* Section 4: Kết quả */}
                <h2 id="ket-qua">Kết Quả Thực Tế Sau Khi Triển Khai</h2>

                <StatCard
                  stats={[
                    {
                      value: "< 10 giây",
                      label: "xác nhận đơn tự động",
                      sub: "từ khi đơn về đến khi xác nhận",
                      color: "text-accent",
                    },
                    {
                      value: "0 vi phạm",
                      label: "SLA xác nhận đơn",
                      sub: "100% đơn xác nhận đúng hạn",
                      color: "text-accent",
                    },
                    {
                      value: "−65%",
                      label: "câu hỏi CSKH về đơn",
                      sub: "Zalo thông báo chủ động",
                    },
                    {
                      value: "3 tuần",
                      label: "thời gian triển khai",
                      sub: "từ 0 → vận hành ổn định",
                    },
                  ]}
                />

                <p>
                  Một seller TikTok Shop tại Hà Nội (ngành mỹ phẩm, ~350 đơn/ngày)
                  triển khai 4 workflow trên trong 3 tuần. Kết quả tháng đầu
                  tiên: điểm shop tăng từ 4.2 lên 4.8 sao do giảm tỷ lệ hủy
                  đơn, doanh thu tăng 22% nhờ phân phối video được cải thiện,
                  đội vận hành tiết kiệm 25 giờ/tuần.
                </p>

                <CalloutBox type="info" title="Điểm shop TikTok ảnh hưởng trực tiếp đến doanh thu">
                  <p className="mb-2">
                    TikTok Shop dùng điểm seller để quyết định phân phối video
                    và voucher ưu tiên. Điểm cao → video được đẩy nhiều hơn →
                    đơn về nhiều hơn. Tự động hóa giúp duy trì điểm ổn định
                    bằng cách loại bỏ vi phạm SLA và giảm tỷ lệ hủy/hoàn.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đánh giá quy trình TikTok Shop của bạn — Audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 5: So sánh */}
                <h2 id="so-sanh">
                  So Sánh Chi Tiết: Vận Hành Thủ Công vs TikTok Shop Tự Động
                </h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công 100%",
                    "TikTok Shop tự động (n8n)",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Tốc độ xác nhận đơn",
                      "15 phút – 24 giờ (chờ người)",
                      "Dưới 10 giây (tự động)",
                    ],
                    [
                      "Vi phạm SLA xác nhận",
                      "Thường xuyên khi cao điểm",
                      "0 vi phạm",
                    ],
                    [
                      "Đồng bộ tồn kho",
                      "Lệch sau 2–3 ngày cao điểm",
                      "Real-time, chính xác 100%",
                    ],
                    [
                      "Nhận đơn khi hết hàng",
                      "Thường xảy ra → phải hủy",
                      "Tự ẩn sản phẩm, không xảy ra",
                    ],
                    [
                      "Thông báo khách hàng",
                      "Không có / CSKH nhắn thủ công",
                      "Zalo tự động mỗi milestone",
                    ],
                    [
                      "Báo cáo doanh thu",
                      "Cuối tuần, mất 2–3 giờ",
                      "Mỗi sáng lúc 8:00 tự động",
                    ],
                    [
                      "Hoạt động ngoài giờ hành chính",
                      "Không xử lý đơn đêm/cuối tuần",
                      "24/7, kể cả lễ tết",
                    ],
                    [
                      "Điểm shop TikTok",
                      "Biến động, dễ bị hạ khi cao điểm",
                      "Ổn định, cải thiện liên tục",
                    ],
                    [
                      "Chi phí vận hành/tháng",
                      "6–12 triệu (nhân sự thêm ca)",
                      "500k–1 triệu (server n8n)",
                    ],
                  ]}
                />

                {/* Section 6: Bắt đầu */}
                <h2 id="bat-dau">
                  Bắt Đầu Triển Khai Tự Động Hóa TikTok Shop Như Thế Nào?
                </h2>

                <p>
                  Lộ trình thực tế cho seller TikTok Shop từ chưa có gì đến
                  vận hành tự động hoàn toàn trong 3 tuần:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Tuần 1, Ngày 1–2: Chuẩn bị API và môi trường",
                      desc: "Đăng ký TikTok Developer Portal, tạo ứng dụng, lấy App Key + App Secret. Authorize OAuth cho TikTok Shop account. Cài n8n self-hosted (VPS ~200k/tháng) hoặc n8n Cloud. Kết nối webhook endpoint với TikTok.",
                    },
                    {
                      title: "Tuần 1, Ngày 3–5: Workflow 1 — Xác nhận đơn tự động",
                      desc: "Build và test workflow xác nhận đơn. Chạy song song với xác nhận thủ công 2 ngày để đảm bảo không sót đơn. Sau khi ổn định → tắt thủ công, bật full auto.",
                    },
                    {
                      title: "Tuần 2, Ngày 6–8: Workflow 2 — Đồng bộ tồn kho",
                      desc: "Sync tồn kho ban đầu một lần để căn chỉnh baseline giữa kho thực và TikTok Shop. Bật auto-sync và rule tự ẩn sản phẩm hết hàng. Monitor chặt 3 ngày đầu.",
                    },
                    {
                      title: "Tuần 2, Ngày 9–11: Workflow 3 — Zalo thông báo",
                      desc: "Kết nối Zalo OA API. Build template tin nhắn cho từng trạng thái vận chuyển. Test với đơn thật. Cài fallback SMS cho khách chưa follow OA.",
                    },
                    {
                      title: "Tuần 3: Workflow 4 + kiểm tra tổng thể",
                      desc: "Cài schedule báo cáo sáng, customize KPI theo nhu cầu quản lý. Chạy đồng thời 4 workflow, monitor 1 tuần đầy đủ. Sau đó bàn giao vận hành không cần giám sát thường xuyên.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không có dev nội bộ? Không vấn đề.">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi
                    phân tích quy trình TikTok Shop hiện tại, số đơn/ngày, hệ
                    thống kho bạn đang dùng và đưa ra lộ trình tự động hóa cụ
                    thể với chi phí rõ ràng, không phát sinh.
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
                    q: "TikTok Seller API có cho phép tích hợp bên thứ ba không?",
                    a: "Có. TikTok cung cấp TikTok Shop Open Platform với REST API đầy đủ dành cho seller và đối tác tích hợp. Đăng ký trên TikTok Developer Portal, tạo ứng dụng, authorize OAuth 2.0 cho shop của bạn. Quá trình đăng ký thường mất 1–3 ngày làm việc để được phê duyệt.",
                  },
                  {
                    q: "Tự động xác nhận đơn có rủi ro xác nhận nhầm đơn lỗi không?",
                    a: "Workflow được thiết kế với bước validate trước khi xác nhận: kiểm tra tồn kho thực, kiểm tra địa chỉ giao hàng hợp lệ, kiểm tra SKU tồn tại trong hệ thống. Đơn nào không pass validate → không xác nhận tự động, thay vào đó alert ngay cho quản lý. Tỷ lệ cần xử lý thủ công thường dưới 1% tổng đơn.",
                  },
                  {
                    q: "n8n tự động hóa TikTok Shop có phù hợp với seller nhỏ dưới 50 đơn/ngày không?",
                    a: "Hoàn toàn phù hợp. Seller nhỏ thường không có nhân sự chuyên trách — chủ shop tự xử lý mọi thứ. Workflow tự động giúp chủ shop tập trung vào content và marketing thay vì vận hành. n8n Cloud free tier (5.000 executions/tháng) đủ cho shop 50 đơn/ngày chạy cả 4 workflow.",
                  },
                  {
                    q: "Nếu TikTok thay đổi API thì workflow có bị hỏng không?",
                    a: "Đây là rủi ro chung của mọi tích hợp API. TikTok thường thông báo deprecation trước 30–90 ngày trên Developer Portal. Cách phòng tránh: subscribe TikTok Developer changelog, cài alert khi workflow lỗi (n8n có error workflow riêng), review API version mỗi quý. n8n có retry logic và error handling giúp giảm thiểu downtime.",
                  },
                  {
                    q: "Có thể tích hợp TikTok Shop với phần mềm kế toán MISA hoặc Excel không?",
                    a: "Có. n8n kết nối được với MISA AMIS qua REST API chính thức, với Google Sheets (thay thế Excel trên cloud), và nhiều phần mềm ERP/kế toán khác. Workflow 1 có thể đẩy đơn TikTok trực tiếp vào MISA tạo phiếu bán hàng, tương tự như workflow đồng bộ Shopee-MISA.",
                  },
                  {
                    q: "Chi phí triển khai tự động hóa TikTok Shop với n8n là bao nhiêu?",
                    a: "Chi phí gồm: (1) VPS để chạy n8n self-hosted ~200–400k/tháng, hoặc n8n Cloud ~500k/tháng; (2) Chi phí setup và build workflow một lần tùy độ phức tạp. Với 4 workflow cơ bản, chi phí vận hành dưới 1 triệu/tháng — thường hòa vốn sau 2–3 tuần so với chi phí nhân sự tiết kiệm được.",
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
          <BlogFooter
            title="TikTok Shop + n8n Automation"
            slug="tiktok-shop-automation"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
