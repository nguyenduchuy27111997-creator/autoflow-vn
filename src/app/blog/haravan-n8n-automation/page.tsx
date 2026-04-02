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
  title: "Haravan + n8n: Tự Động Hóa Shop Online Đa Kênh Toàn Diện",
  description:
    "Hướng dẫn tích hợp Haravan n8n tự động hóa: đồng bộ đơn hàng đa kênh, tồn kho real-time, CSKH Zalo, báo cáo tự động. Dành cho 50.000+ doanh nghiệp dùng Haravan tại Việt Nam.",
  keywords: [
    "haravan n8n",
    "haravan tự động hóa",
    "tích hợp haravan tự động",
    "haravan automation",
    "haravan đa kênh",
    "tự động hóa shop online",
    "haravan api n8n",
    "haravan omnichannel",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề vận hành đa kênh", level: 2 },
  { id: "giai-phap", text: "4 workflow Haravan + n8n", level: 2 },
  { id: "workflow-1", text: "WF1: Đồng bộ đơn hàng đa kênh", level: 3 },
  { id: "workflow-2", text: "WF2: Tồn kho real-time", level: 3 },
  { id: "workflow-3", text: "WF3: Zalo CSKH tự động", level: 3 },
  { id: "workflow-4", text: "WF4: Báo cáo đa kênh tự động", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "ket-qua", text: "Kết quả thực tế", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu triển khai", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function HaravanN8nAutomationBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="haravan-n8n-automation" title="Haravan + n8n: Tự Động Hóa Shop Online Đa Kênh" />
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
              <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold">
                E-commerce
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Haravan · n8n
              </span>
              <span className="text-xs text-slate-500">12 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Haravan + n8n: Tự Động Hóa Shop Online{" "}
              <span className="gradient-text">Đa Kênh Toàn Diện</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Haravan phục vụ hơn 50.000 doanh nghiệp Việt với nền tảng thương
              mại điện tử đa kênh mạnh nhất nước. Nhưng khi đơn về từ website,
              Shopee, TikTok Shop cùng lúc — không có automation, đội vận hành
              sẽ chìm trong công việc thủ công. 4 workflow n8n giải quyết toàn
              bộ, chạy 24/7.
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
                      value: "50.000+",
                      label: "doanh nghiệp dùng Haravan",
                      sub: "nền tảng TMDT đa kênh lớn nhất Việt Nam",
                      color: "text-teal-500",
                    },
                    {
                      value: "9.110",
                      label: "cửa hàng đang hoạt động",
                      sub: "live stores theo dữ liệu BuiltWith",
                      color: "text-blue-500",
                    },
                    {
                      value: "6–8 giờ",
                      label: "xử lý thủ công mỗi ngày",
                      sub: "khi vận hành đa kênh không có automation",
                      color: "text-red-500",
                    },
                    {
                      value: "3–5%",
                      label: "tỷ lệ sai sót đơn hàng",
                      sub: "khi nhập tay từ nhiều nguồn kênh",
                      color: "text-amber-500",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Vận Hành Đa Kênh Không Có Automation — Bẫy Tăng Trưởng Thực Sự</h2>

                <p>
                  Haravan được mệnh danh là "Shopify của Việt Nam" — nền tảng
                  duy nhất trong nước cho phép quản lý website, POS, kho hàng,
                  vận chuyển và bán đa kênh trên một hệ thống duy nhất. Với API
                  toàn diện bao phủ inventory, orders, POS và logistics, Haravan
                  sẵn sàng cho tự động hóa từ A đến Z.
                </p>

                <p>
                  Nhưng có một nghịch lý: càng nhiều kênh bán — website riêng,
                  Shopee, Lazada, TikTok Shop, cửa hàng offline — đội vận hành
                  càng phải làm nhiều hơn theo cấp số nhân. Mỗi kênh có giao
                  diện riêng, quy trình riêng, và không tự "nói chuyện" với
                  nhau.
                </p>

                <CalloutBox type="warning" title="Những triệu chứng phổ biến khi vận hành đa kênh thủ công:">
                  Đơn hàng từ website, Shopee, TikTok Shop đổ về cùng lúc — nhân
                  viên phải mở 4–5 tab để xử lý. Tồn kho trên các kênh lệch
                  nhau sau vài giờ. Khách mua được hàng đã hết trên kênh khác.
                  Báo cáo doanh thu cuối tháng phải gom từ nhiều nguồn, sai số
                  không tránh khỏi.
                </CalloutBox>

                <p>
                  Haravan cung cấp API chính thức đầy đủ: Haravan REST API cho
                  orders, products, inventory; Haravan POS API cho chuỗi cửa
                  hàng; tích hợp webhook real-time. Đây chính xác là những gì
                  n8n cần để xây dựng pipeline automation end-to-end — không cần
                  code, không cần đội kỹ thuật riêng.
                </p>

                <p>
                  94% tác vụ lặp lại trong vận hành e-commerce có thể tự động
                  hóa hoàn toàn. Với Haravan, con số này thậm chí còn cao hơn
                  vì API đã được thiết kế sẵn cho tích hợp bên thứ ba.
                </p>

                {/* Section 2: Giải pháp */}
                <h2 id="giai-phap">
                  4 Workflow Haravan + n8n Cho Shop Đa Kênh
                </h2>

                <p>
                  Dưới đây là 4 workflow cốt lõi khi tích hợp Haravan với n8n.
                  Mỗi workflow giải quyết một điểm đau riêng biệt — và khi chạy
                  cùng nhau, chúng tạo ra một hệ thống vận hành gần như hoàn
                  toàn tự động.
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">
                  Workflow 1: Đồng Bộ Đơn Hàng Đa Kênh Vào Haravan
                </h3>

                <p>
                  Khi đơn về từ nhiều nguồn cùng lúc — website Haravan, Shopee,
                  TikTok Shop, Lazada — workflow này tập trung tất cả về một
                  điểm xử lý duy nhất trong Haravan, tự động phân loại và gán
                  vào đúng quy trình fulfillment.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Webhook nhận đơn từ mọi kênh bán",
                      desc: "n8n lắng nghe đồng thời: Haravan webhook (orders/create), Shopee Order webhook, TikTok Shop webhook. Mỗi kênh kích hoạt riêng trong vòng dưới 5 giây.",
                    },
                    {
                      title: "Chuẩn hóa và map dữ liệu đơn hàng",
                      desc: "Mỗi kênh có cấu trúc dữ liệu khác nhau. n8n transform về schema chuẩn: mã đơn, khách hàng, sản phẩm (SKU Haravan), số lượng, giá, địa chỉ giao, phương thức thanh toán.",
                    },
                    {
                      title: "Tạo hoặc cập nhật đơn hàng trong Haravan",
                      desc: "Gọi Haravan REST API để tạo order mới với tag nguồn kênh (shopee, tiktok, website). Haravan trở thành single source of truth cho toàn bộ đơn hàng.",
                    },
                    {
                      title: "Assign fulfillment và thông báo kho",
                      desc: "Dựa vào kho gần nhất, tồn kho thực tế và SLA từng kênh, n8n tự động assign fulfillment location và gửi Zalo thông báo đội kho chuẩn bị hàng.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#0D9488"
                  steps={[
                    {
                      icon: <span className="text-lg">🛒</span>,
                      label: "Đơn đa kênh",
                      sub: "Shopee / TikTok / Web",
                    },
                    {
                      icon: <span className="text-lg">⚡</span>,
                      label: "n8n transform",
                      sub: "Chuẩn hóa schema",
                    },
                    {
                      icon: <span className="text-lg">🏬</span>,
                      label: "Haravan order",
                      sub: "Tạo tự động < 5 giây",
                    },
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Assign kho",
                      sub: "Fulfillment tự động",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Zalo → Kho",
                      sub: "Thông báo chuẩn hàng",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Haravan REST API hỗ trợ tạo đơn hàng với trường{" "}
                  <code>source_name</code> để phân biệt nguồn kênh. Đây là điểm
                  mấu chốt giúp báo cáo đa kênh cuối tháng chính xác và không
                  cần gộp thủ công từ nhiều nguồn.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">Workflow 2: Đồng Bộ Tồn Kho Đa Kênh Real-Time</h3>

                <p>
                  Khi bán đa kênh mà không đồng bộ tồn kho, chỉ cần một đợt
                  flash sale là hàng chục đơn oversell xuất hiện. Workflow này
                  giữ tồn kho trên mọi kênh luôn phản ánh thực tế trong Haravan
                  Inventory — theo thời gian thực.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Haravan Inventory Webhook kích hoạt khi tồn kho thay đổi",
                      desc: "Mỗi khi có đơn hàng, điều chỉnh kho, nhập hàng hay kiểm kê trong Haravan, webhook inventory_levels/update bắn ra. n8n nhận và xử lý ngay lập tức.",
                    },
                    {
                      title: "Tính toán tồn kho khả dụng theo kênh",
                      desc: "n8n phân bổ lượng tồn theo cấu hình: 60% Shopee, 30% TikTok Shop, 10% buffer website. Áp dụng logic ưu tiên kênh theo mùa hoặc chiến dịch.",
                    },
                    {
                      title: "Cập nhật đồng loạt lên các sàn",
                      desc: "Gọi song song Shopee Update Stock API, TikTok Shop Product API, Lazada Product API. Batch tối đa 50 SKU/request, xử lý retry khi gặp rate limit.",
                    },
                    {
                      title: "Cảnh báo tồn kho thấp tự động",
                      desc: "SKU nào xuống dưới ngưỡng cài sẵn → Zalo OA thông báo quản lý kho để đặt hàng. Cảnh báo kèm link Haravan admin để xem nhanh.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    {
                      icon: <span className="text-lg">🏪</span>,
                      label: "Haravan kho thay đổi",
                      sub: "Webhook real-time",
                    },
                    {
                      icon: <span className="text-lg">🔢</span>,
                      label: "Phân bổ tồn kho",
                      sub: "Theo tỉ lệ kênh",
                    },
                    {
                      icon: <span className="text-lg">🔄</span>,
                      label: "Sync đa sàn",
                      sub: "Shopee / TikTok / Lazada",
                    },
                    {
                      icon: <span className="text-lg">⚠️</span>,
                      label: "Alert tồn thấp",
                      sub: "Zalo → quản lý kho",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Tại sao phân bổ tồn kho theo tỉ lệ kênh?">
                  Không nên để tất cả tồn kho hiển thị trên mọi kênh — rủi ro
                  oversell rất cao khi nhiều kênh nhận đơn cùng lúc trong flash
                  sale. Chiến lược phân bổ có buffer giúp giữ an toàn, đồng
                  thời tối ưu tỷ lệ chốt đơn trên từng kênh.
                </CalloutBox>

                {/* WF3 */}
                <h3 id="workflow-3">
                  Workflow 3: Zalo CSKH Tự Động Theo Hành Trình Đơn Hàng
                </h3>

                <p>
                  Câu hỏi "đơn tôi đâu rồi?" chiếm 60–70% tổng tin nhắn CSKH
                  của shop e-commerce. Toàn bộ có thể tự động hóa — từ xác nhận
                  đơn đến thông báo giao thành công — mà không cần nhân viên
                  trực.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Xác nhận đơn hàng ngay sau khi tạo",
                      desc: "Haravan webhook orders/create kích hoạt → n8n gửi Zalo OA xác nhận đơn với mã đơn hàng, sản phẩm, tổng tiền và dự kiến giao hàng. Thời gian: dưới 30 giây.",
                    },
                    {
                      title: "Thông báo trạng thái vận chuyển real-time",
                      desc: "Haravan tích hợp sẵn GHTK, GHN, J&T, Viettel Post. Khi trạng thái fulfillment thay đổi → n8n nhận webhook → gửi Zalo theo template tương ứng: đang lấy hàng, đang vận chuyển, ra bưu cục, giao thành công.",
                    },
                    {
                      title: "Xử lý giao thất bại — escalate ngay",
                      desc: "Trạng thái giao thất bại → n8n đồng thời: gửi Zalo cho khách hỏi lịch giao lại, thông báo Telegram team CSKH, tạo task trong hệ thống để follow up trong 2 giờ.",
                    },
                    {
                      title: "Review request sau khi nhận hàng",
                      desc: "3 ngày sau giao thành công → n8n tự động gửi Zalo mời khách đánh giá sản phẩm kèm link review trực tiếp trên Shopee hoặc website Haravan.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Xác nhận đơn",
                      sub: "< 30 giây sau tạo đơn",
                    },
                    {
                      icon: <span className="text-lg">🚚</span>,
                      label: "Cập nhật vận chuyển",
                      sub: "Mỗi milestone logistics",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Zalo → Khách",
                      sub: "Proactive thông báo",
                    },
                    {
                      icon: <span className="text-lg">⭐</span>,
                      label: "Mời review",
                      sub: "3 ngày sau nhận hàng",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Haravan + Zalo OA — tích hợp tự nhiên nhất cho thị trường Việt">
                  Haravan đã có integration chính thức với Zalo OA qua Haravan
                  Marketing. Khi dùng n8n, bạn có thể mở rộng logic phức tạp
                  hơn: cá nhân hóa tin nhắn theo lịch sử mua, A/B test template,
                  gộp thông báo để tránh spam khách.
                </CalloutBox>

                {/* WF4 */}
                <h3 id="workflow-4">Workflow 4: Báo Cáo Đa Kênh Tự Động Mỗi Sáng</h3>

                <p>
                  Khi bán đa kênh, báo cáo doanh thu không thể chỉ nhìn vào một
                  con số tổng. Bạn cần biết kênh nào đang mang lại ROI tốt nhất,
                  sản phẩm nào bán chạy ở đâu, tỷ lệ hoàn trả theo kênh — mỗi
                  sáng, không cần đợi kế toán tổng hợp.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Schedule trigger lúc 7:30 sáng mỗi ngày",
                      desc: "n8n tự động kéo dữ liệu đơn hàng hôm qua từ Haravan API (đã tập hợp từ tất cả kênh qua WF1). Dữ liệu sạch, không cần gom thêm từ Shopee hay TikTok riêng.",
                    },
                    {
                      title: "Tính KPI theo từng kênh và tổng hợp",
                      desc: "Tổng doanh thu và theo kênh (website / Shopee / TikTok / offline), số đơn, AOV (Average Order Value), top 10 sản phẩm bán chạy, tỷ lệ hủy đơn và hoàn hàng theo kênh.",
                    },
                    {
                      title: "So sánh với cùng kỳ và phát hiện bất thường",
                      desc: "Tự động tính % thay đổi so với hôm qua, tuần trước và tháng trước cùng ngày. Nếu kênh nào giảm >25% so với cùng kỳ → flag cảnh báo đỏ trong báo cáo.",
                    },
                    {
                      title: "Gửi báo cáo Zalo group lúc 8:00 sáng",
                      desc: "Tin nhắn Zalo tóm tắt số liệu chính gửi vào group quản lý. Google Sheet chi tiết cập nhật tự động và link đính kèm. Dashboard Haravan mở sẵn link để drill down.",
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
                      icon: <span className="text-lg">📊</span>,
                      label: "Kéo Haravan API",
                      sub: "Tất cả kênh gộp lại",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính KPI đa kênh",
                      sub: "Doanh thu, đơn, top SP",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Zalo + Sheet",
                      sub: "Tóm tắt + link chi tiết",
                    },
                  ]}
                />

                {/* Section 3: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Tự Động Hóa Với Haravan + n8n</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Vận hành đa kênh thủ công",
                    items: [
                      "Mở 4–5 tab để xử lý đơn từ website, Shopee, TikTok cùng lúc",
                      "Tồn kho lệch giữa các kênh sau vài giờ, oversell xảy ra thường xuyên",
                      "Khách hỏi đơn → nhân viên tra thủ công mất 5–10 phút",
                      "Báo cáo doanh thu đa kênh mất 2–3 ngày cuối tháng",
                      "Không biết kênh nào đang có ROI tốt nhất theo thời gian thực",
                      "SLA giao hàng bị vi phạm khi cao điểm vì xử lý không kịp",
                    ],
                  }}
                  after={{
                    title: "Sau — Haravan + n8n tự động hoàn toàn",
                    items: [
                      "Đơn từ mọi kênh tự động vào Haravan, assign kho trong dưới 5 giây",
                      "Tồn kho đồng bộ real-time, phân bổ thông minh theo kênh",
                      "Khách nhận Zalo tự động từ xác nhận đơn đến giao thành công",
                      "Báo cáo KPI đa kênh gửi Zalo mỗi sáng lúc 8:00",
                      "Phân tích ROI theo kênh real-time, ra quyết định nhanh hơn",
                      "0 vi phạm SLA — hệ thống xử lý 24/7 kể cả cuối tuần",
                    ],
                  }}
                />

                {/* Section 4: Kết quả */}
                <h2 id="ket-qua">Kết Quả Thực Tế Sau Khi Triển Khai</h2>

                <StatCard
                  stats={[
                    {
                      value: "0 giờ",
                      label: "xử lý đơn thủ công",
                      sub: "100% tự động qua n8n pipeline",
                      color: "text-accent",
                    },
                    {
                      value: "< 5 giây",
                      label: "đơn vào Haravan từ mọi kênh",
                      sub: "từ 15–60 phút chờ nhân viên",
                      color: "text-accent",
                    },
                    {
                      value: "−65%",
                      label: "tin nhắn CSKH về đơn hàng",
                      sub: "Zalo thông báo chủ động theo hành trình",
                    },
                    {
                      value: "3 tuần",
                      label: "thời gian triển khai đầy đủ",
                      sub: "từ 0 → 4 workflow vận hành ổn định",
                    },
                  ]}
                />

                <p>
                  Một thương hiệu thời trang tại Hà Nội vận hành Haravan đa
                  kênh (website + 2 shop Shopee + TikTok Shop + 3 cửa hàng POS)
                  triển khai 4 workflow trên trong 3 tuần. Tháng đầu tiên: đội
                  vận hành tiết kiệm 140 giờ làm việc, tỷ lệ oversell về 0,
                  điểm đánh giá dịch vụ khách hàng tăng từ 4,6 lên 4,9/5.
                </p>

                <CalloutBox type="info" title="Haravan có lợi thế lớn so với các nền tảng khác khi automation">
                  <p className="mb-2">
                    Haravan API được thiết kế với developer in mind — rate limit
                    cao hơn, webhook ổn định hơn, và có sandbox environment để
                    test trước khi production. Điều này giúp rút ngắn thời gian
                    triển khai n8n đáng kể so với các sàn khép kín hơn.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đánh giá hệ thống Haravan của bạn — Đặt audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 5: So sánh */}
                <h2 id="so-sanh">
                  So Sánh Chi Tiết: Vận Hành Thủ Công vs Haravan + n8n Tự Động
                </h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công (đa kênh)",
                    "Haravan + n8n Tự Động",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Tốc độ xử lý đơn hàng",
                      "15–60 phút (chờ nhân viên)",
                      "Dưới 5 giây (real-time)",
                    ],
                    [
                      "Đồng bộ tồn kho đa kênh",
                      "Lệch sau 2–4 giờ",
                      "Real-time, phân bổ thông minh",
                    ],
                    [
                      "Rủi ro oversell",
                      "Cao — đặc biệt khi flash sale",
                      "Gần như bằng 0",
                    ],
                    [
                      "Thông báo khách hàng",
                      "Không có / nhân viên gửi thủ công",
                      "Zalo tự động toàn bộ hành trình",
                    ],
                    [
                      "Báo cáo KPI đa kênh",
                      "2–3 ngày cuối tháng",
                      "Mỗi sáng lúc 8:00",
                    ],
                    [
                      "Nhân sự vận hành",
                      "3–5 nhân viên cho đa kênh",
                      "1 người giám sát là đủ",
                    ],
                    [
                      "Hoạt động",
                      "Giờ hành chính, kém hiệu quả cuối tuần",
                      "24/7, kể cả flash sale lúc 0:00",
                    ],
                    [
                      "Tỷ lệ lỗi dữ liệu",
                      "3–5% (nhập tay đa nguồn)",
                      "< 0,01% (tự động hóa)",
                    ],
                    [
                      "Chi phí vận hành/tháng",
                      "15–30 triệu (lương nhân sự)",
                      "1–2 triệu (server n8n)",
                    ],
                  ]}
                />

                {/* Section 6: Bắt đầu */}
                <h2 id="bat-dau">
                  Lộ Trình Triển Khai Haravan + n8n Trong 3 Tuần
                </h2>

                <p>
                  Từ shop Haravan chưa có automation nào đến hệ thống 4 workflow
                  vận hành ổn định — đây là lộ trình thực tế theo thứ tự ưu
                  tiên giá trị:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Ngày 1–3: Chuẩn bị hạ tầng và API",
                      desc: "Lấy Haravan API credentials từ Haravan Admin (Settings → Apps → Private App). Cài n8n self-hosted trên VPS hoặc dùng n8n Cloud. Cấu hình Haravan webhook URL trỏ về n8n. Test kết nối với Haravan sandbox.",
                    },
                    {
                      title: "Ngày 4–8: Triển khai Workflow 1 (đồng bộ đơn hàng)",
                      desc: "Đây là workflow phức tạp nhất và có giá trị cao nhất. Map SKU giữa từng kênh và Haravan. Test kỹ với đơn thật từ từng kênh. Chạy song song với thủ công 2–3 ngày để cross-check.",
                    },
                    {
                      title: "Ngày 9–13: Triển khai Workflow 2 (tồn kho đa kênh)",
                      desc: "Định nghĩa tỉ lệ phân bổ tồn kho theo kênh phù hợp với business của bạn. Sync baseline ban đầu. Bật auto-sync và monitor 3–4 ngày đảm bảo không lệch.",
                    },
                    {
                      title: "Ngày 14–17: Workflow 3 (Zalo CSKH tự động)",
                      desc: "Kết nối Zalo OA. Viết template tin nhắn cho từng trạng thái đơn hàng. Cài logic escalate khi giao thất bại. Workflow này thường hoàn thiện trong 2 ngày.",
                    },
                    {
                      title: "Ngày 18–21: Workflow 4 + vận hành đầy đủ",
                      desc: "Cài báo cáo KPI tự động. Chạy toàn bộ 4 workflow song song, monitor chặt chẽ. Sau khi không phát sinh lỗi trong 3 ngày → tắt hoàn toàn quy trình thủ công, bàn giao vận hành 100% tự động.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không muốn tự setup? Chúng tôi làm cho bạn.">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi
                    phân tích quy trình Haravan hiện tại của bạn: số kênh đang
                    bán, đơn/ngày, workflow thủ công đang làm, và đề xuất lộ
                    trình automation cụ thể với chi phí rõ ràng.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 7: FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về Haravan + n8n</h2>

                <FAQ items={[
                  {
                    q: "Haravan có API đủ mạnh để tích hợp n8n không?",
                    a: "Có. Haravan REST API bao phủ toàn diện: Orders, Products, Inventory Levels, Fulfillments, Customers, POS, Shipping. Haravan cũng hỗ trợ webhook cho hầu hết các sự kiện quan trọng. Đây là một trong những nền tảng TMDT Việt có API tốt nhất để tích hợp bên thứ ba.",
                  },
                  {
                    q: "Tích hợp với Shopee, TikTok Shop qua Haravan hay trực tiếp?",
                    a: "Phụ thuộc vào use case. Haravan HaraConnect đã tích hợp sẵn với nhiều sàn — nếu chỉ cần đồng bộ cơ bản, dùng HaraConnect. Nếu cần logic phức tạp hơn (phân bổ tồn kho theo thuật toán riêng, automation đa điều kiện), n8n kết nối trực tiếp với API từng sàn cho linh hoạt hơn.",
                  },
                  {
                    q: "n8n có thể kết nối với Haravan POS không?",
                    a: "Có. Haravan POS API cho phép đồng bộ đơn hàng offline về hệ thống chung. Đặc biệt hữu ích cho thương hiệu có cả kênh online lẫn cửa hàng vật lý — báo cáo doanh thu có thể gộp cả online và offline trong một workflow.",
                  },
                  {
                    q: "Nếu Haravan cập nhật API, workflow có bị hỏng không?",
                    a: "Rủi ro này có thực. Haravan thường thông báo deprecation trước 60–90 ngày. Phòng tránh: cài error alert tự động trong n8n khi workflow lỗi, theo dõi Haravan Developer Changelog, và đặt monitoring endpoint kiểm tra sức khỏe workflow mỗi giờ.",
                  },
                  {
                    q: "Shop Haravan nhỏ (dưới 100 đơn/ngày) có nên dùng n8n không?",
                    a: "Hoàn toàn có. Ngay cả shop nhỏ cũng hưởng lợi từ automation: tiết kiệm 2–4 giờ/ngày xử lý thủ công, giảm lỗi, CSKH tốt hơn. n8n Cloud free tier (5.000 executions/tháng) thường đủ cho shop dưới 50 đơn/ngày. Từ 100+ đơn/ngày, n8n self-hosted chi phí thấp hơn đáng kể.",
                  },
                  {
                    q: "Thời gian triển khai và chi phí ước tính?",
                    a: "Triển khai đầy đủ 4 workflow mất khoảng 2–3 tuần. Chi phí setup khoảng 5–10 triệu tùy độ phức tạp. Chi phí vận hành hàng tháng: 500k–1,5 triệu cho server n8n. ROI dương thường đạt được trong tháng đầu tiên với shop có từ 50 đơn/ngày trở lên.",
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Haravan + n8n Automation" slug="haravan-n8n-automation" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
