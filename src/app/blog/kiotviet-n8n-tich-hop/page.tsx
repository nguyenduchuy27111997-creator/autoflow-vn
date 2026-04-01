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
  title: "KiotViet + n8n: Đồng Bộ Tồn Kho & Đơn Hàng Tự Động Hoàn Toàn",
  description:
    "Hướng dẫn tích hợp KiotViet n8n tự động: đồng bộ tồn kho tự động KiotViet real-time, đơn hàng sang kế toán, khách hàng vào CRM và báo cáo hàng ngày. Dành cho 150.000+ cửa hàng SME.",
  keywords: [
    "kiotviet n8n",
    "tồn kho tự động kiotviet",
    "tích hợp kiotviet tự động",
    "kiotviet api n8n",
    "đồng bộ kiotviet",
    "kiotviet automation",
    "tự động hóa kiotviet",
    "kiotviet pos tích hợp",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề vận hành KiotViet hiện tại", level: 2 },
  { id: "giai-phap", text: "4 workflow tích hợp KiotViet–n8n", level: 2 },
  { id: "workflow-1", text: "WF1: Đồng bộ tồn kho real-time", level: 3 },
  { id: "workflow-2", text: "WF2: Đơn hàng mới → kế toán", level: 3 },
  { id: "workflow-3", text: "WF3: Khách hàng mới → CRM", level: 3 },
  { id: "workflow-4", text: "WF4: Báo cáo tổng hợp hàng ngày", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "ket-qua", text: "Kết quả thực tế", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu triển khai như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function KiotVietN8nBlog() {
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
                KiotViet · n8n
              </span>
              <span className="text-xs text-slate-400">11 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              KiotViet + n8n: Đồng Bộ Tồn Kho &amp; Đơn Hàng{" "}
              <span className="gradient-text">Tự Động Hoàn Toàn</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              KiotViet quản lý 150.000+ cửa hàng tại Việt Nam — nhưng dữ liệu
              tồn kho, đơn hàng và khách hàng vẫn đang nằm im trong phần mềm,
              không kết nối với kế toán hay CRM. 4 workflow n8n thay đổi điều
              đó: đồng bộ real-time, 0 nhập tay, hoạt động 24/7.
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
                      value: "150.000+",
                      label: "cửa hàng dùng KiotViet",
                      sub: "60% thị phần POS SME Việt Nam",
                      color: "text-green-600",
                    },
                    {
                      value: "3–4 giờ",
                      label: "nhập tay thủ công mỗi ngày",
                      sub: "đồng bộ đơn, tồn kho, báo cáo",
                      color: "text-red-500",
                    },
                    {
                      value: "2–5%",
                      label: "tỷ lệ lệch tồn kho",
                      sub: "giữa KiotViet và thực tế kho",
                      color: "text-amber-500",
                    },
                    {
                      value: "$51M",
                      label: "vốn đầu tư KiotViet",
                      sub: "Public API mở cho tích hợp bên thứ ba",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">KiotViet Đang Làm Tốt — Nhưng Dữ Liệu Bị Nhốt Trong Đó</h2>

                <p>
                  KiotViet chiếm 60% thị phần phần mềm quản lý bán hàng (POS)
                  cho doanh nghiệp vừa và nhỏ tại Việt Nam. Hơn 150.000 cửa
                  hàng — từ tạp hóa, thời trang đến nhà hàng — đang dùng nền
                  tảng này để quản lý bán hàng, tồn kho và khách hàng mỗi ngày.
                </p>

                <p>
                  Vấn đề không phải là KiotViet kém. Vấn đề là KiotViet làm
                  quá tốt một việc — quản lý tại điểm bán — nhưng dữ liệu sinh
                  ra từ đó không tự chảy sang nơi cần: phần mềm kế toán, hệ
                  thống CRM, công cụ báo cáo. Kết quả là nhân viên phải làm cầu
                  nối thủ công giữa các hệ thống.
                </p>

                <CalloutBox type="warning" title="Bạn có đang gặp những vấn đề này?">
                  Cuối ngày kế toán export Excel từ KiotViet rồi nhập tay vào
                  phần mềm kế toán. Tồn kho KiotViet lệch so với thực tế vì
                  không ai cập nhật kịp. Khách hàng mua lần đầu nhưng không
                  được chăm sóc vì dữ liệu kẹt trong KiotViet, chưa vào CRM.
                  Đây là bộ ba vấn đề phổ biến nhất của cửa hàng SME — và cả ba
                  đều có thể tự động hóa hoàn toàn.
                </CalloutBox>

                <p>
                  KiotViet cung cấp Public API chính thức hỗ trợ các nghiệp vụ
                  cốt lõi: sản phẩm (products), khách hàng (customers) và hóa
                  đơn (invoices). Với n8n làm lớp tự động hóa ở giữa, bạn có
                  thể xây dựng pipeline dữ liệu thực sự — không cần developer
                  full-time, không cần middleware đắt tiền.
                </p>

                <p>
                  94% doanh nghiệp SME đang thực hiện các tác vụ lặp lại có
                  thể tự động hóa. Đồng bộ tồn kho KiotViet là ví dụ hoàn hảo:
                  cấu trúc dữ liệu cố định, logic không đổi, lặp đi lặp lại
                  hàng trăm lần mỗi ngày.
                </p>

                {/* Section 2: Giải pháp */}
                <h2 id="giai-phap">
                  4 Workflow Tích Hợp KiotViet–n8n Tự Động Hoàn Toàn
                </h2>

                <p>
                  Dùng n8n làm lớp trung gian, bạn kết nối KiotViet Public API
                  với hệ thống kế toán, CRM và công cụ báo cáo để tạo pipeline
                  tự động end-to-end. Đây là 4 workflow cốt lõi cho cửa hàng
                  dùng KiotViet:
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">
                  Workflow 1: Đồng Bộ Tồn Kho KiotViet Real-Time
                </h3>

                <p>
                  Tồn kho lệch là nguyên nhân số một gây ra đặt nhầm hàng, bán
                  thiếu và mất uy tín với khách. Workflow này giữ tồn kho
                  KiotViet luôn khớp với thực tế — và cảnh báo kịp thời khi
                  hàng sắp hết.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Polling KiotViet API mỗi 10 phút",
                      desc: "n8n gọi KiotViet Products API để lấy danh sách SKU có số lượng thay đổi kể từ lần kiểm tra trước. So sánh với snapshot lưu trong database.",
                    },
                    {
                      title: "Phát hiện và phân loại chênh lệch",
                      desc: "n8n phân loại nguyên nhân thay đổi: hóa đơn bán hàng mới, phiếu nhập kho, điều chỉnh tồn kho thủ công. Mỗi loại có xử lý khác nhau.",
                    },
                    {
                      title: "Đồng bộ sang hệ thống đích",
                      desc: "Cập nhật tồn kho lên các kênh bán online (Shopee, Lazada, website) nếu có. Ghi nhận vào phần mềm kế toán nếu là giao dịch nhập/xuất kho.",
                    },
                    {
                      title: "Cảnh báo tồn kho thấp tự động",
                      desc: "SKU nào xuống dưới ngưỡng tối thiểu cài sẵn → Zalo/Telegram thông báo quản lý kho và người phụ trách mua hàng để đặt bổ sung kịp thời.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#16A34A"
                  steps={[
                    {
                      icon: <span className="text-lg">🏪</span>,
                      label: "KiotViet Products API",
                      sub: "Polling mỗi 10 phút",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "So sánh & phân loại",
                      sub: "Phát hiện thay đổi tồn kho",
                    },
                    {
                      icon: <span className="text-lg">🔄</span>,
                      label: "Đồng bộ đa kênh",
                      sub: "Kế toán + kênh online",
                    },
                    {
                      icon: <span className="text-lg">⚠️</span>,
                      label: "Alert tồn thấp",
                      sub: "Zalo → quản lý kho",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  KiotViet Public API hỗ trợ lọc sản phẩm theo{" "}
                  <code>lastModifiedFrom</code> — giúp n8n chỉ kéo những SKU
                  thực sự thay đổi thay vì toàn bộ danh mục. Với cửa hàng
                  3.000+ SKU, điều này giảm 90% lượng API call và giữ workflow
                  luôn dưới rate limit.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">
                  Workflow 2: Hóa Đơn KiotViet Mới → Kế Toán Tự Động
                </h3>

                <p>
                  Mỗi hóa đơn bán hàng trong KiotViet là một giao dịch kế toán
                  cần được ghi nhận. Thay vì kế toán xuất file cuối ngày rồi
                  nhập lại, workflow này đồng bộ real-time — hoặc theo lô mỗi
                  giờ nếu phần mềm kế toán không hỗ trợ tốc độ cao hơn.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Kéo hóa đơn mới từ KiotViet Invoices API",
                      desc: "n8n polling KiotViet Invoices API mỗi 15–30 phút. Lấy tất cả hóa đơn trạng thái 'completed' kể từ lần chạy trước. Lưu invoice ID đã xử lý để tránh trùng lặp.",
                    },
                    {
                      title: "Chuẩn hóa và map dữ liệu kế toán",
                      desc: "Chuyển đổi cấu trúc KiotViet sang định dạng phần mềm kế toán: map mã sản phẩm, tài khoản kế toán tương ứng, thuế VAT, phương thức thanh toán (tiền mặt/chuyển khoản/thẻ).",
                    },
                    {
                      title: "Tạo bút toán / phiếu bán trong kế toán",
                      desc: "Gọi API phần mềm kế toán (MISA, Fast, Bravo...) để tạo phiếu bán hàng tương ứng. Đính kèm mã hóa đơn KiotViet để đối chiếu sau này.",
                    },
                    {
                      title: "Xác nhận và ghi log kiểm toán",
                      desc: "Lưu mapping KiotViet Invoice ID ↔ Kế toán Document ID vào Google Sheet. Nếu lỗi → alert Telegram cho kế toán xử lý trong vòng 1 giờ.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#2563EB"
                  steps={[
                    {
                      icon: <span className="text-lg">🧾</span>,
                      label: "Hóa đơn KiotViet",
                      sub: "Invoices API mỗi 30 phút",
                    },
                    {
                      icon: <span className="text-lg">⚡</span>,
                      label: "n8n map dữ liệu",
                      sub: "Chuẩn hóa + phân loại",
                    },
                    {
                      icon: <span className="text-lg">📄</span>,
                      label: "Phiếu bán kế toán",
                      sub: "Tạo tự động, 0 nhập tay",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Log đối chiếu",
                      sub: "Google Sheet kiểm toán",
                    },
                    {
                      icon: <span className="text-lg">🔔</span>,
                      label: "Alert nếu lỗi",
                      sub: "Telegram → kế toán",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Hỗ trợ nhiều phần mềm kế toán">
                  Workflow này không bị giới hạn bởi phần mềm kế toán bạn đang
                  dùng. n8n có connector cho MISA AMIS, Fast Accounting, Bravo,
                  hoặc bất kỳ phần mềm nào có REST API. Nếu phần mềm kế toán
                  chỉ nhận file Excel/CSV, n8n cũng có thể tạo file và upload
                  tự động.
                </CalloutBox>

                {/* WF3 */}
                <h3 id="workflow-3">
                  Workflow 3: Khách Hàng Mới KiotViet → CRM Tự Động
                </h3>

                <p>
                  Mỗi khách hàng mua lần đầu là cơ hội giữ chân dài hạn — nhưng
                  nếu thông tin của họ kẹt trong KiotViet và không ai chăm sóc
                  sau đó, cơ hội đó mất đi. Workflow này đảm bảo mọi khách hàng
                  mới đều được đưa vào CRM và nhận được chăm sóc phù hợp.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Phát hiện khách hàng mới từ KiotViet Customers API",
                      desc: "n8n polling KiotViet Customers API mỗi giờ, lọc khách hàng tạo mới hoặc mua lần đầu. Kiểm tra xem khách đã có trong CRM chưa (dựa theo số điện thoại).",
                    },
                    {
                      title: "Enrich và phân loại khách hàng",
                      desc: "Dựa vào lịch sử mua hàng trong KiotViet: phân khúc khách VIP (doanh thu > 5 triệu), khách mua lần đầu, khách thân thiết. Gắn tag phù hợp.",
                    },
                    {
                      title: "Tạo hoặc cập nhật contact trong CRM",
                      desc: "Đẩy dữ liệu vào CRM (HubSpot, Salesforce, Zalo CRM, Google Contacts...). Map đầy đủ: tên, SĐT, email, địa chỉ, lịch sử mua hàng, phân khúc.",
                    },
                    {
                      title: "Kích hoạt chuỗi chăm sóc tự động",
                      desc: "Khách mua lần đầu → gửi tin cảm ơn qua Zalo OA. Khách chưa mua lại 30 ngày → gửi ưu đãi tái kích hoạt. Khách VIP → alert nhân viên CSKH để gọi điện.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#7C3AED"
                  steps={[
                    {
                      icon: <span className="text-lg">👤</span>,
                      label: "Khách mới KiotViet",
                      sub: "Customers API mỗi giờ",
                    },
                    {
                      icon: <span className="text-lg">🏷️</span>,
                      label: "Phân loại & tag",
                      sub: "VIP / lần đầu / thân thiết",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Cập nhật CRM",
                      sub: "Contact đầy đủ + phân khúc",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Chuỗi chăm sóc",
                      sub: "Zalo tự động theo phân khúc",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Tại sao đây là workflow có ROI cao nhất?">
                  Chi phí giữ chân khách hàng cũ thấp hơn 5–7 lần so với thu
                  hút khách mới. Đưa 100% khách hàng mới vào CRM và kích hoạt
                  chuỗi chăm sóc tự động thường tăng tỷ lệ mua lại 20–35% chỉ
                  trong quý đầu triển khai.
                </CalloutBox>

                {/* WF4 */}
                <h3 id="workflow-4">
                  Workflow 4: Báo Cáo Tổng Hợp KiotViet Hàng Ngày
                </h3>

                <p>
                  Cuối ngày chủ cửa hàng cần biết: hôm nay bán được bao nhiêu,
                  mặt hàng nào chạy nhất, tồn kho đang ở đâu. Workflow này tự
                  động tổng hợp và gửi báo cáo — không cần ai chạy report thủ
                  công.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger lúc 20:00 mỗi tối (hoặc giờ bạn chọn)",
                      desc: "n8n chạy schedule trigger, kéo toàn bộ hóa đơn trong ngày từ KiotViet Invoices API. Lọc theo trạng thái 'completed', loại bỏ đơn hủy.",
                    },
                    {
                      title: "Tính toán KPI tự động",
                      desc: "Tổng doanh thu thuần, số lượng hóa đơn, giá trị đơn trung bình, top 10 sản phẩm bán chạy, top 5 khách hàng chi tiêu cao nhất, doanh thu theo ca làm việc.",
                    },
                    {
                      title: "So sánh với hôm qua và cùng kỳ tuần trước",
                      desc: "Tự động tính % tăng/giảm. Nếu doanh thu giảm >15% so với trung bình 7 ngày trước → flag vàng. Giảm >30% → flag đỏ, alert khẩn cho chủ cửa hàng.",
                    },
                    {
                      title: "Gửi báo cáo đa kênh và lưu trữ",
                      desc: "Tóm tắt gửi vào Zalo cá nhân/group quản lý lúc 20:00. Báo cáo chi tiết ghi vào Google Sheet. Dashboard Power BI/Looker Studio tự cập nhật.",
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
                      icon: <span className="text-lg">📊</span>,
                      label: "Kéo hóa đơn ngày",
                      sub: "KiotViet Invoices API",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính KPI & so sánh",
                      sub: "Doanh thu, top SP, xu hướng",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Gửi Zalo + lưu Sheet",
                      sub: "Báo cáo tức thì mỗi tối",
                    },
                  ]}
                />

                {/* Section 3: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Tích Hợp KiotViet–n8n Tự Động</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Dữ liệu KiotViet bị cô lập",
                    items: [
                      "Kế toán xuất Excel từ KiotViet cuối ngày, nhập tay vào phần mềm kế toán",
                      "Tồn kho lệch 2–5% vì không ai cập nhật kịp sau mỗi đơn bán",
                      "Khách hàng mới mua xong không được chăm sóc, dữ liệu kẹt trong KiotViet",
                      "Chủ cửa hàng hỏi doanh thu hôm nay phải chờ đến sáng hôm sau",
                      "Không biết mặt hàng nào sắp hết, đặt hàng bổ sung luôn trễ",
                      "Tỷ lệ mua lại thấp vì không có quy trình chăm sóc khách có hệ thống",
                    ],
                  }}
                  after={{
                    title: "Sau — Tồn kho tự động KiotViet + đồng bộ liên tục",
                    items: [
                      "Hóa đơn KiotViet → phiếu kế toán tự động trong 30 phút, 0 nhập tay",
                      "Tồn kho đồng bộ real-time, sai lệch dưới 0,1% mỗi ngày",
                      "100% khách hàng mới vào CRM, nhận tin cảm ơn tự động trong 1 giờ",
                      "Báo cáo doanh thu gửi Zalo lúc 20:00 mỗi tối không cần ai thao tác",
                      "Cảnh báo tồn kho thấp tự động trước khi hết hàng 3–5 ngày",
                      "Tỷ lệ mua lại tăng 25–35% nhờ chuỗi chăm sóc khách hàng tự động",
                    ],
                  }}
                />

                {/* Section 4: Kết quả */}
                <h2 id="ket-qua">Kết Quả Thực Tế Sau Khi Triển Khai</h2>

                <StatCard
                  stats={[
                    {
                      value: "0 giờ",
                      label: "nhập tay kế toán mỗi ngày",
                      sub: "từ 3–4 giờ xuống 0",
                      color: "text-accent",
                    },
                    {
                      value: "<0,1%",
                      label: "sai lệch tồn kho",
                      sub: "từ 2–5% xuống gần bằng 0",
                      color: "text-accent",
                    },
                    {
                      value: "+28%",
                      label: "tỷ lệ mua lại khách cũ",
                      sub: "nhờ CRM tự động theo phân khúc",
                    },
                    {
                      value: "3 tuần",
                      label: "thời gian triển khai",
                      sub: "từ 0 → vận hành ổn định đầy đủ",
                    },
                  ]}
                />

                <p>
                  Một chuỗi cửa hàng thời trang tại Hà Nội (3 chi nhánh, ~200
                  hóa đơn/ngày) triển khai đầy đủ 4 workflow trong 3 tuần. Kết
                  quả tháng đầu: kế toán tiết kiệm 80 giờ làm việc, sai lệch
                  tồn kho về 0, tỷ lệ khách hàng quay lại tăng 28% so với
                  cùng kỳ năm trước.
                </p>

                <CalloutBox type="info" title="Cần bao nhiêu hóa đơn mỗi ngày để có lợi?">
                  <p className="mb-2">
                    Chi phí setup 4–6 triệu và vận hành ~500k/tháng. Cửa hàng
                    có từ 20 hóa đơn/ngày trở lên thường hoàn vốn trong tháng
                    đầu — chưa tính giá trị tăng tỷ lệ mua lại từ CRM tự động.
                    Cửa hàng 50+ hóa đơn/ngày thường tiết kiệm 15–20 triệu/tháng
                    chi phí nhân sự và sai sót.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Tính ROI cho cửa hàng của bạn — Đặt audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 5: So sánh */}
                <h2 id="so-sanh">
                  So Sánh Chi Tiết: Vận Hành Thủ Công vs Tích Hợp KiotViet n8n Tự Động
                </h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công 100%",
                    "Tích hợp KiotViet–n8n",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Đồng bộ hóa đơn kế toán",
                      "Cuối ngày, nhập tay 1–3 giờ",
                      "Tự động mỗi 30 phút, 0 tác động",
                    ],
                    [
                      "Độ chính xác tồn kho",
                      "2–5% sai lệch mỗi ngày",
                      "<0,1% — gần như tuyệt đối",
                    ],
                    [
                      "Khách hàng vào CRM",
                      "Không có / thủ công cuối tuần",
                      "100% tự động trong 1 giờ",
                    ],
                    [
                      "Báo cáo doanh thu",
                      "Chờ đến sáng hôm sau",
                      "Zalo lúc 20:00 mỗi tối",
                    ],
                    [
                      "Cảnh báo hết hàng",
                      "Phát hiện khi đã hết",
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
                      "24/7, kể cả lễ tết",
                    ],
                    [
                      "Nhân sự cần thiết",
                      "0,5–1 FTE kế toán/CSKH",
                      "0 FTE thêm",
                    ],
                    [
                      "Chi phí vận hành/tháng",
                      "6–12 triệu (lương nhân sự)",
                      "~500k (server n8n)",
                    ],
                  ]}
                />

                {/* Section 6: Bắt đầu */}
                <h2 id="bat-dau">
                  Bắt Đầu Triển Khai Tích Hợp KiotViet n8n Như Thế Nào?
                </h2>

                <p>
                  Lộ trình thực tế để đưa cửa hàng KiotViet từ vận hành thủ
                  công sang tự động hoàn toàn — trong 3 tuần:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Ngày 1–2: Chuẩn bị API credentials KiotViet",
                      desc: "Đăng ký tài khoản developer trên KiotViet Developer Portal, tạo ứng dụng để nhận Client ID và Client Secret. Cài n8n self-hosted (VPS ~200k/tháng) hoặc n8n Cloud (miễn phí cho workflow nhỏ). Cấu hình OAuth2 kết nối n8n với KiotViet.",
                    },
                    {
                      title: "Ngày 3–7: Triển khai Workflow 1 (đồng bộ tồn kho)",
                      desc: "Đây là workflow nền tảng, cần làm trước. Cài đặt ngưỡng tồn kho tối thiểu cho từng SKU. Test kỹ với dữ liệu thật trước khi bật tự động. Monitor sát trong 3 ngày đầu.",
                    },
                    {
                      title: "Ngày 8–12: Triển khai Workflow 2 (hóa đơn → kế toán)",
                      desc: "Map mã sản phẩm KiotViet ↔ tài khoản kế toán. Test toàn bộ loại hóa đơn: bán lẻ, bán buôn, đổi trả, chiết khấu. Review với kế toán trưởng trước khi production.",
                    },
                    {
                      title: "Ngày 13–17: Workflow 3 (khách hàng → CRM)",
                      desc: "Kết nối CRM đang dùng hoặc setup Google Contacts/Airtable nếu chưa có CRM. Cài đặt ngưỡng phân khúc khách VIP. Soạn template Zalo chăm sóc khách mới và khách tái kích hoạt.",
                    },
                    {
                      title: "Ngày 18–21: Workflow 4 + kiểm tra toàn hệ thống",
                      desc: "Setup báo cáo tự động hàng tối. Chạy song song với quy trình cũ 3 ngày để đối chiếu kết quả. Sau khi xác nhận chính xác → tắt hoàn toàn quy trình thủ công.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không muốn tự cài đặt? Có đội chuyên môn làm cho bạn.">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi
                    phân tích quy trình KiotViet hiện tại, số lượng hóa đơn mỗi
                    ngày, phần mềm kế toán đang dùng và đề xuất lộ trình tích
                    hợp cụ thể với chi phí và timeline rõ ràng.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 7: FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về Tích Hợp KiotViet n8n</h2>

                <FAQ items={[
                  {
                    q: "KiotViet có API công khai để tích hợp bên ngoài không?",
                    a: "Có. KiotViet cung cấp Public API chính thức hỗ trợ 3 nhóm nghiệp vụ cốt lõi: Products (sản phẩm & tồn kho), Customers (khách hàng) và Invoices (hóa đơn). Đăng ký tại KiotViet Developer Portal, tạo ứng dụng và xác thực OAuth2. Quá trình setup thường mất 1–2 giờ.",
                  },
                  {
                    q: "n8n có hỗ trợ sẵn KiotViet không hay phải tự code?",
                    a: "n8n chưa có node KiotViet tích hợp sẵn, nhưng bạn hoàn toàn có thể dùng HTTP Request node để gọi KiotViet API. Với cấu trúc REST API chuẩn của KiotViet, việc cấu hình thường không đòi hỏi kiến thức lập trình — chủ yếu là điền URL, header xác thực và tham số lọc.",
                  },
                  {
                    q: "Đồng bộ tồn kho KiotViet có chạy real-time thực sự không?",
                    a: "KiotViet API hiện tại không hỗ trợ webhook nên không thể real-time tuyệt đối. Cách tiếp cận phổ biến nhất là polling mỗi 5–15 phút — độ trễ này hoàn toàn chấp nhận được cho hầu hết cửa hàng. Nếu cần gần real-time hơn (dưới 1 phút), bạn có thể dùng KiotViet Webhooks nếu tài khoản của bạn được hỗ trợ tính năng này.",
                  },
                  {
                    q: "Tích hợp có hoạt động với chuỗi nhiều chi nhánh KiotViet không?",
                    a: "Có. KiotViet API hỗ trợ tham số lọc theo chi nhánh (branch). n8n có thể xử lý dữ liệu từ nhiều chi nhánh song song, tổng hợp về một dashboard chung hoặc phân tách báo cáo theo từng chi nhánh. Chuỗi 10+ chi nhánh vẫn vận hành tốt với n8n.",
                  },
                  {
                    q: "Nếu KiotViet thay đổi API thì workflow có bị hỏng không?",
                    a: "Đây là rủi ro có thực với mọi tích hợp API. KiotViet thường thông báo trước 30–60 ngày khi có breaking changes. Cách phòng tránh: cài error alert khi workflow lỗi (Telegram/email), subscribe KiotViet Developer newsletter, và duy trì tài liệu về mapping dữ liệu để cập nhật nhanh khi cần.",
                  },
                  {
                    q: "Chi phí triển khai và vận hành tích hợp KiotViet n8n là bao nhiêu?",
                    a: "Chi phí setup: 4–7 triệu nếu tự làm hoặc thuê đội tích hợp. Chi phí vận hành: VPS chạy n8n khoảng 200–500k/tháng. Hoặc dùng n8n Cloud: free tier đủ cho cửa hàng nhỏ (<5.000 lần chạy/tháng), gói trả phí từ $20/tháng. Cửa hàng 50+ hóa đơn/ngày thường hoàn vốn trong tháng đầu.",
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter
            title="KiotViet + n8n Tích Hợp"
            slug="kiotviet-n8n-tich-hop"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
