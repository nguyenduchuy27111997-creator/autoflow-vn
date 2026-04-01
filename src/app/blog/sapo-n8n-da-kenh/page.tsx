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
  title: "Sapo + n8n: Quản Lý Đa Kênh Tự Động Cho Cửa Hàng Việt Nam",
  description:
    "Hướng dẫn tích hợp Sapo n8n tự động: đồng bộ đơn hàng đa kênh, cảnh báo tồn kho, phân khúc khách hàng qua Zalo và báo cáo doanh thu hàng ngày. Dành cho 230.000+ merchant Sapo tại Việt Nam.",
  keywords: [
    "sapo n8n",
    "quản lý đa kênh sapo",
    "tích hợp sapo tự động",
    "sapo api n8n",
    "đồng bộ sapo đa kênh",
    "sapo automation",
    "tự động hóa sapo",
    "sapo pos tích hợp",
    "sapo omnichannel n8n",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề vận hành đa kênh Sapo hiện tại", level: 2 },
  { id: "giai-phap", text: "4 workflow tích hợp Sapo–n8n", level: 2 },
  { id: "workflow-1", text: "WF1: Đồng bộ đơn hàng đa kênh", level: 3 },
  { id: "workflow-2", text: "WF2: Cảnh báo tồn kho thấp", level: 3 },
  { id: "workflow-3", text: "WF3: Phân khúc khách hàng → Zalo", level: 3 },
  { id: "workflow-4", text: "WF4: Báo cáo doanh thu hàng ngày", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "ket-qua", text: "Kết quả thực tế", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu triển khai như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function SapoN8nDaKenhBlog() {
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
              <span className="text-slate-600 truncate max-w-[300px]">E-commerce</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                E-commerce
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Sapo · n8n
              </span>
              <span className="text-xs text-slate-400">12 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Sapo + n8n: Quản Lý Đa Kênh{" "}
              <span className="gradient-text">Tự Động Cho Cửa Hàng Việt Nam</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Sapo đang phục vụ 230.000+ merchant trên toàn quốc — nhưng khi
              bán đồng thời trên POS, website, Shopee và TikTok Shop, đơn hàng
              và tồn kho lại là bài toán phối hợp thủ công mỗi ngày. 4 workflow
              n8n giải quyết điều đó: đồng bộ đa kênh real-time, cảnh báo tức
              thì và báo cáo tự động — 24/7 không nghỉ.
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
                      value: "230.000+",
                      label: "merchant đang dùng Sapo",
                      sub: "POS, Web, Social & Omnichannel",
                      color: "text-green-600",
                    },
                    {
                      value: "$119,29M",
                      label: "quy mô thị trường cloud POS VN 2033",
                      sub: "từ $25,55M hiện tại, CAGR 16,66%/năm",
                      color: "text-blue-600",
                    },
                    {
                      value: "3–5 giờ",
                      label: "nhập tay đồng bộ đa kênh mỗi ngày",
                      sub: "đơn hàng, tồn kho, báo cáo",
                      color: "text-red-500",
                    },
                    {
                      value: "173",
                      label: "nhân viên Sapo",
                      sub: "Nền tảng omnichannel hàng đầu Việt Nam",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Sapo Giỏi Quản Lý Đa Kênh — Nhưng Vẫn Cần Người Phối Hợp</h2>

                <p>
                  Sapo là một trong những nền tảng quản lý bán hàng đa kênh
                  toàn diện nhất tại Việt Nam. Với bộ sản phẩm gồm Sapo POS,
                  Sapo Web, Sapo Social và Sapo Omnichannel, hệ thống đã giúp
                  230.000+ cửa hàng vận hành trên nhiều kênh cùng lúc — từ quầy
                  bán trực tiếp đến website thương mại điện tử và mạng xã hội.
                </p>

                <p>
                  Nhưng "đa kênh" cũng đồng nghĩa với "đa điểm dữ liệu". Đơn
                  hàng từ Shopee, Lazada, TikTok Shop và website chảy vào Sapo
                  mỗi giờ. Tồn kho biến động liên tục theo từng giao dịch. Khách
                  hàng mua ở nhiều kênh khác nhau nhưng dữ liệu chăm sóc không
                  được hợp nhất. Và cuối ngày, chủ cửa hàng vẫn phải chờ ai đó
                  ngồi tổng hợp báo cáo.
                </p>

                <CalloutBox type="warning" title="Bạn có đang gặp những vấn đề này?">
                  Tồn kho cập nhật Sapo nhưng chưa phản ánh lên Shopee, Lazada
                  kịp thời — dẫn đến bán quá số lượng thực. Khách hàng mua lần
                  đầu trên website nhưng không được gửi tin chăm sóc vì dữ liệu
                  chưa vào đúng nơi. Báo cáo doanh thu đa kênh phải gộp tay từ
                  nhiều nguồn mỗi tối. Đây là vòng lặp thủ công có thể cắt hoàn
                  toàn với n8n.
                </CalloutBox>

                <p>
                  Sapo cung cấp REST API đầy đủ cho các đối tác tích hợp: quản
                  lý sản phẩm, đơn hàng, tồn kho và khách hàng đều có endpoint
                  riêng. Với n8n làm lớp tự động hóa trung gian, bạn có thể xây
                  pipeline dữ liệu thực sự nối Sapo với Zalo, CRM, kế toán và
                  dashboard — không cần developer full-time, không cần phần mềm
                  middleware đắt tiền.
                </p>

                <p>
                  Thị trường cloud POS Việt Nam đang tăng trưởng 16,66%/năm —
                  từ 25,55 triệu USD hiện tại lên dự kiến 119,29 triệu USD vào
                  năm 2033. Những cửa hàng tự động hóa vận hành đa kênh sớm sẽ
                  có lợi thế cạnh tranh rõ rệt trong giai đoạn tăng trưởng này.
                </p>

                {/* Section 2: Giải pháp */}
                <h2 id="giai-phap">
                  4 Workflow Tích Hợp Sapo–n8n Cho Vận Hành Đa Kênh
                </h2>

                <p>
                  Dưới đây là 4 workflow cốt lõi giải quyết những điểm đau lớn
                  nhất khi vận hành đa kênh với Sapo. Mỗi workflow độc lập —
                  bạn có thể triển khai theo thứ tự ưu tiên hoặc cùng lúc.
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">
                  Workflow 1: Đồng Bộ Đơn Hàng Đa Kênh Tự Động
                </h3>

                <p>
                  Khi đơn hàng đổ về từ nhiều kênh — Shopee, Lazada, TikTok
                  Shop, website Sapo và POS tại quầy — việc đồng bộ trạng thái,
                  cập nhật kho và đẩy sang kế toán thường rơi vào tay nhân viên.
                  Workflow này tự động hóa toàn bộ chuỗi đó.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Lắng nghe đơn hàng mới qua Sapo Webhook",
                      desc: "Cấu hình Sapo Webhook gửi sự kiện order.created và order.updated về n8n ngay lập tức. Không cần polling — latency dưới 30 giây từ lúc đơn xuất hiện đến lúc workflow chạy.",
                    },
                    {
                      title: "Phân loại đơn theo kênh và trạng thái",
                      desc: "n8n đọc trường source_name trong payload Sapo để phân biệt đơn từ Shopee, Lazada, TikTok Shop, web hay POS. Đơn hàng từ mỗi kênh có luồng xử lý và quy tắc kho khác nhau.",
                    },
                    {
                      title: "Trừ tồn kho và đồng bộ ngược lên các kênh",
                      desc: "Sau khi xác nhận đơn, n8n cập nhật tồn kho trong Sapo và đẩy số lượng mới lên Shopee Seller API, Lazada Seller Center API — giữ cho tồn kho đồng nhất trên tất cả kênh trong vòng 1 phút.",
                    },
                    {
                      title: "Đẩy đơn sang kế toán và ghi log",
                      desc: "Tạo phiếu bán hàng tự động trong phần mềm kế toán. Lưu mapping Sapo Order ID ↔ Kế toán Document ID vào Google Sheet để đối chiếu. Alert Telegram nếu xử lý thất bại.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#16A34A"
                  steps={[
                    {
                      icon: <span className="text-lg">🛒</span>,
                      label: "Sapo Webhook",
                      sub: "Đơn mới từ mọi kênh",
                    },
                    {
                      icon: <span className="text-lg">🔀</span>,
                      label: "Phân loại kênh",
                      sub: "Shopee / Lazada / Web / POS",
                    },
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Cập nhật tồn kho",
                      sub: "Sapo + sàn TMDT đồng bộ",
                    },
                    {
                      icon: <span className="text-lg">📄</span>,
                      label: "Phiếu bán kế toán",
                      sub: "Tự động, 0 nhập tay",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Sapo hỗ trợ webhook với nhiều event type: <code>orders/create</code>,{" "}
                  <code>orders/updated</code>, <code>inventory_items/update</code>. Kết
                  hợp cả ba loại event trong một workflow n8n giúp bạn có pipeline
                  đầy đủ mà không cần polling tốn tài nguyên. Đây là cách tiếp cận
                  hiệu quả nhất cho cửa hàng có trên 100 đơn/ngày.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">
                  Workflow 2: Cảnh Báo Tồn Kho Thấp Tự Động
                </h3>

                <p>
                  Hết hàng trên một kênh mà không biết là tình huống tệ nhất
                  với cửa hàng đa kênh: đơn vẫn vào nhưng không có hàng giao,
                  dẫn đến hủy đơn, tụt rating và mất khách. Workflow này cảnh
                  báo trước khi điều đó xảy ra.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Polling Sapo Inventory API mỗi 15 phút",
                      desc: "n8n gọi Sapo Inventory API để lấy số lượng tồn kho hiện tại của tất cả SKU. So sánh với ngưỡng tối thiểu đã cấu hình sẵn cho từng sản phẩm và từng kho.",
                    },
                    {
                      title: "Phát hiện SKU dưới ngưỡng an toàn",
                      desc: "Lọc danh sách SKU có tồn kho thực tế nhỏ hơn min_stock. Phân loại mức độ: vàng (sắp hết — dưới 30% ngưỡng), đỏ (nguy hiểm — dưới 10%), hết hoàn toàn (= 0).",
                    },
                    {
                      title: "Tạm ẩn sản phẩm hết hàng trên các kênh",
                      desc: "SKU về 0 trên Sapo → n8n tự động gọi API tắt listing tương ứng trên Shopee và Lazada để tránh nhận đơn không có hàng. Bật lại tự động khi tồn kho được nhập bổ sung.",
                    },
                    {
                      title: "Gửi cảnh báo chi tiết qua Zalo và Telegram",
                      desc: "Tin nhắn cảnh báo gửi đến quản lý kho và người phụ trách mua hàng: tên sản phẩm, mã SKU, số lượng hiện tại, ngưỡng tối thiểu, kênh bị ảnh hưởng và link đặt hàng bổ sung nếu có.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#DC2626"
                  steps={[
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Sapo Inventory API",
                      sub: "Polling mỗi 15 phút",
                    },
                    {
                      icon: <span className="text-lg">⚠️</span>,
                      label: "Phát hiện SKU thấp",
                      sub: "Vàng / Đỏ / Hết hàng",
                    },
                    {
                      icon: <span className="text-lg">🔒</span>,
                      label: "Tạm ẩn listing",
                      sub: "Shopee & Lazada tự động",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Alert Zalo + Telegram",
                      sub: "Quản lý kho + mua hàng",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Tại sao cần tạm ẩn listing tự động?">
                  Trên Shopee và Lazada, nhận đơn rồi hủy vì hết hàng sẽ bị phạt
                  điểm uy tín và có thể ảnh hưởng đến thứ hạng hiển thị. Tự động
                  ẩn listing ngay khi tồn kho về 0 giúp bảo vệ rating cửa hàng
                  trong khi chờ nhập hàng bổ sung — không cần nhân viên theo dõi
                  liên tục.
                </CalloutBox>

                {/* WF3 */}
                <h3 id="workflow-3">
                  Workflow 3: Phân Khúc Khách Hàng Sapo → Zalo Tự Động
                </h3>

                <p>
                  Khách hàng mua từ nhiều kênh khác nhau nhưng không có quy trình
                  chăm sóc hệ thống — đây là điểm mất doanh thu lớn nhất của
                  cửa hàng đa kênh. Workflow này biến dữ liệu khách hàng trong
                  Sapo thành chuỗi chăm sóc cá nhân hóa qua Zalo OA.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Phát hiện khách hàng mới và phân khúc từ Sapo",
                      desc: "n8n polling Sapo Customers API mỗi giờ, lấy khách tạo mới và lịch sử mua hàng. Phân khúc dựa theo tổng chi tiêu: Mới (chưa mua), Thường (1–2 đơn), Tiềm năng (3–5 đơn), VIP (6+ đơn hoặc chi tiêu trên 10 triệu).",
                    },
                    {
                      title: "Kiểm tra và cập nhật CRM",
                      desc: "Đối chiếu số điện thoại với CRM hiện có (HubSpot, Airtable, Google Contacts). Tạo contact mới nếu chưa có, cập nhật phân khúc và tag kênh mua (POS, web, Shopee, Lazada) nếu đã có.",
                    },
                    {
                      title: "Kích hoạt chuỗi tin nhắn Zalo theo phân khúc",
                      desc: "Khách mới → tin cảm ơn + giới thiệu chương trình thành viên trong vòng 1 giờ. Khách 30 ngày chưa quay lại → tin ưu đãi tái kích hoạt. Khách VIP → thông báo sản phẩm mới ưu tiên và ưu đãi độc quyền.",
                    },
                    {
                      title: "Alert nhân viên CSKH cho khách VIP",
                      desc: "Khách hàng VIP hoặc có tổng chi tiêu trên 20 triệu → n8n gửi thông báo cho nhân viên CSKH qua Zalo/Slack kèm thông tin đầy đủ để gọi điện chăm sóc cá nhân trong ngày.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#7C3AED"
                  steps={[
                    {
                      icon: <span className="text-lg">👤</span>,
                      label: "Sapo Customers API",
                      sub: "Polling mỗi giờ",
                    },
                    {
                      icon: <span className="text-lg">🏷️</span>,
                      label: "Phân khúc tự động",
                      sub: "Mới / Thường / VIP",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Cập nhật CRM",
                      sub: "Tag kênh + phân khúc",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Zalo OA tự động",
                      sub: "Tin nhắn theo phân khúc",
                    },
                  ]}
                />

                <CalloutBox type="success" title="ROI của workflow phân khúc khách hàng">
                  Chi phí giữ chân khách hàng cũ thấp hơn 5–7 lần so với thu
                  hút khách mới. Với cửa hàng đa kênh Sapo có 500+ khách/tháng,
                  tự động hóa chuỗi chăm sóc thường tăng tỷ lệ mua lại 20–35%
                  trong quý đầu triển khai — mà không cần tăng ngân sách marketing.
                </CalloutBox>

                {/* WF4 */}
                <h3 id="workflow-4">
                  Workflow 4: Báo Cáo Doanh Thu Đa Kênh Hàng Ngày
                </h3>

                <p>
                  Chủ cửa hàng đa kênh cần nhìn thấy bức tranh tổng thể mỗi
                  tối: hôm nay bán được bao nhiêu trên từng kênh, tổng doanh thu,
                  sản phẩm nào chạy nhất, và so với hôm qua thế nào. Workflow
                  này tự động tổng hợp và gửi báo cáo — không ai cần thao tác.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger lúc 20:00 mỗi tối",
                      desc: "n8n chạy schedule trigger, gọi Sapo Orders API để lấy tất cả đơn hàng trong ngày có trạng thái completed. Lọc theo từng source_name để tách dữ liệu theo kênh.",
                    },
                    {
                      title: "Tính KPI theo kênh và tổng hợp",
                      desc: "Tính doanh thu thuần, số đơn, giá trị đơn trung bình (AOV) cho từng kênh: POS, website, Shopee, Lazada, TikTok Shop. Top 10 sản phẩm bán chạy nhất trong ngày. Tổng doanh thu hợp nhất toàn kênh.",
                    },
                    {
                      title: "So sánh xu hướng và phát hiện bất thường",
                      desc: "Tự động tính % tăng/giảm so với hôm qua và trung bình 7 ngày trước. Kênh nào giảm doanh thu trên 20% → flag vàng. Giảm trên 40% hoặc 0 đơn trên kênh thường hoạt động → flag đỏ, alert ngay cho chủ.",
                    },
                    {
                      title: "Gửi báo cáo đa kênh và lưu trữ",
                      desc: "Tóm tắt dạng text gửi Zalo cá nhân và group quản lý lúc 20:00. Báo cáo đầy đủ theo kênh ghi vào Google Sheet để lưu lịch sử. Dashboard Looker Studio tự cập nhật dữ liệu mới nhất.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#EA580C"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "20:00 mỗi tối",
                      sub: "Schedule trigger",
                    },
                    {
                      icon: <span className="text-lg">🛒</span>,
                      label: "Kéo đơn hàng ngày",
                      sub: "Sapo Orders API — mọi kênh",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "KPI theo kênh",
                      sub: "Doanh thu + xu hướng + top SP",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Zalo + Google Sheet",
                      sub: "Báo cáo tức thì mỗi tối",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Kết hợp workflow báo cáo với Google Looker Studio (miễn phí)
                  để có dashboard trực quan cập nhật real-time. Chỉ cần kết nối
                  Google Sheet mà n8n ghi dữ liệu vào — bạn có biểu đồ doanh
                  thu theo kênh, theo tuần, theo tháng mà không cần phần mềm
                  BI trả phí.
                </CalloutBox>

                {/* Section 3: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Tích Hợp Sapo–n8n Đa Kênh</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Vận hành đa kênh Sapo thủ công",
                    items: [
                      "Đơn từ Shopee, Lazada, TikTok Shop phải đối chiếu tay với POS cuối ngày",
                      "Tồn kho cập nhật Sapo nhưng trễ 1–2 giờ mới phản ánh lên các sàn — dẫn đến bán quá số lượng",
                      "Khách hàng mua qua nhiều kênh nhưng không có CRM thống nhất, chăm sóc manh mún",
                      "Báo cáo doanh thu đa kênh phải gộp tay từ 4–5 nguồn, mất 1–2 giờ mỗi tối",
                      "Phát hiện hết hàng khi đã nhận đơn — phải hủy đơn, mất điểm uy tín trên sàn",
                      "Chủ cửa hàng không biết kênh nào đang mang lại doanh thu tốt nhất",
                    ],
                  }}
                  after={{
                    title: "Sau — Sapo đa kênh tự động với n8n",
                    items: [
                      "Đơn hàng từ mọi kênh đồng bộ vào kế toán tự động trong vòng 1 phút",
                      "Tồn kho đồng nhất trên Sapo và tất cả sàn TMDT — sai lệch dưới 0,1%",
                      "100% khách hàng mới vào CRM, nhận tin chăm sóc theo phân khúc trong 1 giờ",
                      "Báo cáo doanh thu theo kênh gửi Zalo lúc 20:00 mỗi tối không cần ai thao tác",
                      "SKU hết hàng tự động ẩn trên Shopee/Lazada — bảo vệ rating cửa hàng",
                      "Dashboard đa kênh real-time: biết ngay kênh nào hiệu quả nhất từng ngày",
                    ],
                  }}
                />

                {/* Section 4: Kết quả */}
                <h2 id="ket-qua">Kết Quả Thực Tế Sau Khi Triển Khai Sapo n8n</h2>

                <StatCard
                  stats={[
                    {
                      value: "0 giờ",
                      label: "đồng bộ đơn hàng thủ công mỗi ngày",
                      sub: "từ 3–5 giờ xuống 0",
                      color: "text-accent",
                    },
                    {
                      value: "<0,1%",
                      label: "sai lệch tồn kho đa kênh",
                      sub: "từ 2–5% sai lệch xuống gần bằng 0",
                      color: "text-accent",
                    },
                    {
                      value: "+30%",
                      label: "tỷ lệ mua lại khách cũ",
                      sub: "nhờ chăm sóc tự động theo phân khúc",
                    },
                    {
                      value: "4 tuần",
                      label: "thời gian triển khai đầy đủ",
                      sub: "từ 0 → 4 workflow vận hành ổn định",
                    },
                  ]}
                />

                <p>
                  Một chuỗi cửa hàng thời trang tại TP.HCM (2 chi nhánh POS,
                  website Sapo và shop Shopee — tổng ~150 đơn/ngày) triển khai
                  đầy đủ 4 workflow trong 4 tuần. Kết quả tháng đầu: không còn
                  trường hợp bán quá tồn kho, tiết kiệm 90 giờ công nhập tay
                  mỗi tháng, tỷ lệ khách quay lại tăng 30% so với cùng kỳ năm
                  trước nhờ chuỗi chăm sóc Zalo tự động.
                </p>

                <CalloutBox type="info" title="Cần bao nhiêu đơn/ngày để triển khai có lợi?">
                  <p className="mb-2">
                    Chi phí setup 5–8 triệu và vận hành ~500k/tháng. Cửa hàng
                    có từ 30 đơn/ngày trở lên trên nhiều kênh thường hoàn vốn
                    trong tháng đầu — chưa tính giá trị tăng tỷ lệ mua lại và
                    bảo vệ rating trên sàn TMDT. Cửa hàng 100+ đơn/ngày thường
                    tiết kiệm 20–30 triệu/tháng chi phí nhân sự và sai sót.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Tính ROI cho cửa hàng Sapo của bạn — Đặt audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 5: So sánh */}
                <h2 id="so-sanh">
                  So Sánh: Vận Hành Đa Kênh Thủ Công vs Sapo n8n Tự Động
                </h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công 100%",
                    "Sapo + n8n tự động",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Đồng bộ đơn hàng đa kênh",
                      "Đối chiếu tay cuối ngày, 2–4 giờ",
                      "Tự động trong 1 phút, 0 tác động",
                    ],
                    [
                      "Tồn kho trên sàn TMDT",
                      "Cập nhật trễ 1–2 giờ, hay lệch",
                      "Đồng bộ real-time, <0,1% sai lệch",
                    ],
                    [
                      "Phòng tránh bán quá tồn kho",
                      "Phụ thuộc nhân viên kiểm tra",
                      "Tự động ẩn listing khi hết hàng",
                    ],
                    [
                      "Chăm sóc khách hàng đa kênh",
                      "Không có / thủ công theo đợt",
                      "100% khách vào CRM + Zalo tự động",
                    ],
                    [
                      "Báo cáo doanh thu đa kênh",
                      "Gộp tay 4–5 nguồn, mất 1–2 giờ",
                      "Tự động lúc 20:00, phân tích theo kênh",
                    ],
                    [
                      "Cảnh báo hết hàng",
                      "Phát hiện khi đã nhận đơn",
                      "Cảnh báo trước 3–5 ngày",
                    ],
                    [
                      "Tỷ lệ mua lại khách cũ",
                      "Phụ thuộc nhân viên CSKH",
                      "+25–35% nhờ chăm sóc tự động",
                    ],
                    [
                      "Hoạt động",
                      "Giờ hành chính",
                      "24/7, kể cả lễ tết và peak sale",
                    ],
                    [
                      "Chi phí vận hành/tháng",
                      "8–15 triệu (lương nhân sự + sai sót)",
                      "~500k (server n8n)",
                    ],
                  ]}
                />

                {/* Section 6: Bắt đầu */}
                <h2 id="bat-dau">
                  Bắt Đầu Triển Khai Sapo n8n Đa Kênh Như Thế Nào?
                </h2>

                <p>
                  Lộ trình thực tế để đưa cửa hàng Sapo từ vận hành đa kênh
                  thủ công sang tự động hoàn toàn — trong 4 tuần:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Ngày 1–3: Chuẩn bị Sapo API và n8n",
                      desc: "Liên hệ Sapo để kích hoạt API access cho tài khoản của bạn (yêu cầu gói Pro trở lên). Lấy API Key và cấu hình Private App trong Sapo Admin. Cài n8n self-hosted (VPS ~200k/tháng) hoặc n8n Cloud. Test kết nối với Sapo API — gọi thử endpoint /admin/orders.json để xác nhận.",
                    },
                    {
                      title: "Ngày 4–10: Workflow 2 — Cảnh báo tồn kho trước",
                      desc: "Nên làm trước vì đây là workflow bảo vệ doanh thu ngay lập tức. Cấu hình ngưỡng min_stock cho từng SKU trong Google Sheet. Test với dữ liệu tồn kho thật. Xác nhận cảnh báo Zalo đến đúng người, đúng thông tin.",
                    },
                    {
                      title: "Ngày 11–17: Workflow 1 — Đồng bộ đơn hàng đa kênh",
                      desc: "Cấu hình Sapo Webhook. Xây logic phân loại kênh và map sang kế toán. Test toàn bộ kịch bản: đơn mới, đơn hủy, đổi trả, đơn từng kênh. Review mapping tài khoản kế toán với kế toán trưởng trước khi production.",
                    },
                    {
                      title: "Ngày 18–24: Workflow 3 — Phân khúc khách hàng Zalo",
                      desc: "Kết nối Zalo OA API (cần tài khoản Zalo OA Official). Định nghĩa ngưỡng phân khúc phù hợp với cửa hàng của bạn. Soạn template tin nhắn cho từng phân khúc. Test với 20–30 khách hàng thật trước khi bật toàn bộ.",
                    },
                    {
                      title: "Ngày 25–28: Workflow 4 + kiểm tra toàn hệ thống",
                      desc: "Setup báo cáo tự động hàng tối. Chạy song song với quy trình cũ 3 ngày để đối chiếu kết quả. Sau khi xác nhận chính xác → tắt hoàn toàn quy trình thủ công. Cài monitoring để nhận alert khi bất kỳ workflow nào gặp lỗi.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không muốn tự cài đặt? Có đội chuyên môn làm cho bạn.">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi
                    phân tích quy trình Sapo đa kênh hiện tại, số lượng đơn hàng
                    mỗi ngày, kênh đang bán và đề xuất lộ trình tích hợp cụ thể
                    với chi phí và timeline rõ ràng.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 7: FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về Sapo n8n Đa Kênh</h2>

                <FAQ items={[
                  {
                    q: "Sapo có API công khai để tích hợp với n8n không?",
                    a: "Có. Sapo cung cấp REST API đầy đủ cho các đối tác tích hợp, hỗ trợ quản lý đơn hàng, sản phẩm, tồn kho và khách hàng. API yêu cầu tài khoản Sapo gói Pro trở lên. Xác thực qua API Key (Private App) — cấu hình trong Sapo Admin. n8n dùng HTTP Request node để gọi Sapo API mà không cần connector chuyên biệt.",
                  },
                  {
                    q: "Sapo có hỗ trợ webhook không hay phải dùng polling?",
                    a: "Sapo hỗ trợ webhook cho nhiều event quan trọng: tạo đơn hàng, cập nhật đơn, thay đổi tồn kho, khách hàng mới. Đây là cách tốt nhất để tích hợp real-time vì không cần polling liên tục. Với các dữ liệu không có webhook (như báo cáo tổng hợp), polling theo schedule vẫn hoạt động tốt.",
                  },
                  {
                    q: "Workflow đồng bộ đa kênh có xử lý được đơn đổi trả và hủy không?",
                    a: "Có. Sapo webhook gửi event orders/updated khi trạng thái đơn thay đổi, bao gồm hủy và đổi trả. n8n đọc trường financial_status và fulfillment_status để xác định loại thay đổi, sau đó thực hiện hành động phù hợp: hoàn kho, hủy phiếu kế toán, cập nhật CRM. Cần test kỹ các kịch bản này trước khi production.",
                  },
                  {
                    q: "Tích hợp có hoạt động với chuỗi nhiều chi nhánh Sapo không?",
                    a: "Có. Sapo API hỗ trợ lọc dữ liệu theo location_id (chi nhánh/kho). n8n có thể xử lý song song nhiều chi nhánh, tổng hợp báo cáo toàn chuỗi hoặc tách riêng theo từng chi nhánh. Chuỗi 5–10 chi nhánh vẫn vận hành tốt với cấu hình workflow phù hợp.",
                  },
                  {
                    q: "Zalo OA API có khó cấu hình không? Cần điều kiện gì?",
                    a: "Zalo OA API yêu cầu tài khoản Zalo Official Account đã được xác minh (tài khoản doanh nghiệp). Sau khi có OA, đăng ký ứng dụng tại Zalo Developer Portal để lấy App ID và Secret. n8n gọi Zalo API qua HTTP Request node — không có connector tích hợp sẵn nhưng Zalo API có tài liệu tiếng Việt đầy đủ và dễ tích hợp.",
                  },
                  {
                    q: "Chi phí triển khai và vận hành Sapo n8n là bao nhiêu?",
                    a: "Chi phí setup: 5–8 triệu nếu thuê đội tích hợp chuyên môn, hoặc thấp hơn nếu tự làm có kinh nghiệm kỹ thuật. Chi phí vận hành: VPS chạy n8n khoảng 200–500k/tháng, hoặc n8n Cloud từ $20/tháng. Cửa hàng 100+ đơn/ngày đa kênh thường hoàn vốn trong tháng đầu nhờ tiết kiệm nhân sự và tăng doanh thu từ chăm sóc khách hàng tự động.",
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter
            title="Sapo + n8n Đa Kênh"
            slug="sapo-n8n-da-kenh"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
