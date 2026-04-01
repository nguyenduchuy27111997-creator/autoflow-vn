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
  title: "Báo Cáo Doanh Thu Tự Động Cho Chuỗi Cửa Hàng — Hết Gom Excel",
  description:
    "Tự động hóa báo cáo doanh thu cho chuỗi cửa hàng với n8n: từ 20 giờ/tuần xuống 2 giờ, giảm 22% tồn kho dư, nộp báo cáo đúng hạn tăng 43%. Hết gom Excel cuối tháng.",
  keywords: [
    "báo cáo tự động chuỗi cửa hàng",
    "báo cáo doanh thu n8n",
    "tự động hóa báo cáo bán lẻ",
    "hệ thống báo cáo tự động",
    "n8n báo cáo doanh thu",
    "quản lý chuỗi cửa hàng tự động",
    "dashboard doanh thu tự động",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề gom báo cáo cuối tháng", level: 2 },
  { id: "giai-phap", text: "3 workflow báo cáo tự động", level: 2 },
  { id: "workflow-1", text: "WF1: Báo cáo ngày tự động", level: 3 },
  { id: "workflow-2", text: "WF2: Tổng hợp tuần", level: 3 },
  { id: "workflow-3", text: "WF3: Dashboard tháng", level: 3 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "ket-qua", text: "Kết quả thực tế chuỗi 50 cửa hàng", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function BaoCaoDoanhThuTuDongBlog() {
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
              <span className="text-slate-600 truncate max-w-[300px]">Retail</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                Retail
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                Báo Cáo · n8n
              </span>
              <span className="text-xs text-slate-400">11 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Báo Cáo Doanh Thu Tự Động Cho Chuỗi Cửa Hàng —{" "}
              <span className="gradient-text">Hết Gom Excel</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Cuối tháng, kế toán trưởng ngồi 2 ngày liền gom báo cáo từ 50 cửa
              hàng: file Excel sai cột, thiếu dữ liệu, định dạng mỗi nơi một
              kiểu. 3 workflow n8n thay thế toàn bộ quy trình đó — báo cáo ngày,
              tuần, tháng tự tổng hợp và gửi về, không cần ai làm gì.
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
                      value: "20 giờ",
                      label: "gom báo cáo mỗi tuần",
                      sub: "chuỗi 50 cửa hàng, thủ công 100%",
                      color: "text-red-500",
                    },
                    {
                      value: "2 ngày",
                      label: "để xong báo cáo tháng",
                      sub: "kế toán trưởng bỏ hết việc khác",
                      color: "text-amber-500",
                    },
                    {
                      value: "+22%",
                      label: "tồn kho dư do dự báo sai",
                      sub: "vì số liệu báo cáo không kịp",
                      color: "text-red-500",
                    },
                    {
                      value: "57%",
                      label: "báo cáo nộp đúng hạn",
                      sub: "43% còn lại trễ hoặc thiếu",
                    },
                  ]}
                />

                {/* Section 1: Vấn đề */}
                <h2 id="van-de">Cuối Tháng Gom Báo Cáo 2 Ngày — Bạn Không Đơn Độc</h2>

                <p>
                  Cứ đến ngày 28–30 hàng tháng, kế toán trưởng của chuỗi bán lẻ
                  lại bắt đầu một cuộc hành trình quen thuộc: mở email, nhắc từng
                  cửa hàng gửi file Excel, chờ đợi, nhận về rồi phát hiện cột
                  "Doanh thu" mỗi cửa hàng đặt một chỗ khác nhau. Một cửa hàng
                  gộp cả VAT, một cửa hàng không gộp. Ba cửa hàng còn thiếu tuần
                  cuối tháng. Và nhất định có một cửa hàng gửi nhầm file tháng
                  trước.
                </p>

                <p>
                  Kết quả? 2 ngày làm việc biến mất chỉ để tổng hợp số liệu —
                  chưa kể thời gian phân tích thực sự. Với chuỗi 50 cửa hàng,
                  bài toán này nhân 50 lần mỗi tháng.
                </p>

                <CalloutBox type="warning" title="Vấn đề không chỉ là mất thời gian">
                  Báo cáo chậm đồng nghĩa quyết định chậm. Khi số liệu tồn kho
                  tuần trước chưa được tổng hợp, người mua hàng đặt thêm hàng
                  dựa trên cảm tính — dẫn đến tồn kho dư 22% mỗi quý. Với chuỗi
                  50 cửa hàng, con số đó tương đương hàng trăm triệu đồng vốn
                  bị chôn.
                </CalloutBox>

                <p>
                  Vấn đề không phải do nhân viên kém. Vấn đề là quy trình được
                  thiết kế cho 5 cửa hàng, nhưng chuỗi đã mở rộng lên 50. Công
                  cụ không scale — con người phải gánh phần còn lại. 94% tác vụ
                  lặp lại trong doanh nghiệp có thể tự động hóa hoàn toàn, và
                  tổng hợp báo cáo doanh thu là ví dụ điển hình nhất: cấu trúc
                  cố định, logic không đổi, lặp đi lặp lại mỗi ngày, tuần, tháng.
                </p>

                <p>
                  3 workflow n8n dưới đây giải quyết toàn bộ vòng lặp này — từ
                  báo cáo ngày gửi tự động lúc 8 giờ sáng, đến dashboard tháng
                  tự tổng hợp mà không cần ai nhắc ai.
                </p>

                {/* Section 2: Giải pháp */}
                <h2 id="giai-phap">
                  3 Workflow Báo Cáo Tự Động Cho Chuỗi Cửa Hàng
                </h2>

                <p>
                  Kiến trúc tổng thể: dữ liệu bán hàng từ POS hoặc phần mềm quản
                  lý (MISA, KiotViet, Sapo, Google Sheet…) được n8n kéo theo lịch,
                  tổng hợp, so sánh và phân phối đúng người — không cần ai thao
                  tác thủ công.
                </p>

                {/* WF1 */}
                <h3 id="workflow-1">Workflow 1: Báo Cáo Ngày Tự Động — 8:00 Sáng Mỗi Ngày</h3>

                <p>
                  Workflow xương sống. Mỗi sáng, quản lý nhận đủ số liệu của ngày
                  hôm qua — doanh thu từng cửa hàng, top sản phẩm, so sánh cùng
                  kỳ — mà không cần ai làm gì từ tối hôm trước.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Schedule trigger 7:45 sáng mỗi ngày",
                      desc: "n8n kích hoạt tự động, kéo dữ liệu bán hàng ngày hôm qua từ tất cả 50 cửa hàng thông qua API của hệ thống POS hoặc Google Sheet được đồng bộ.",
                    },
                    {
                      title: "Tổng hợp và tính KPI tự động",
                      desc: "Tính doanh thu thực (sau chiết khấu, hoàn trả), số giao dịch, giá trị đơn trung bình, top 5 sản phẩm bán chạy nhất, tỷ lệ chuyển đổi theo từng cửa hàng.",
                    },
                    {
                      title: "So sánh với hôm qua và cùng kỳ tuần trước",
                      desc: "Tự động tính % tăng trưởng. Cửa hàng nào giảm doanh thu trên 15% so với cùng kỳ → đánh dấu đỏ, thêm vào danh sách cần xem xét.",
                    },
                    {
                      title: "Phân phối báo cáo đúng người",
                      desc: "Quản lý vùng nhận tổng hợp khu vực. Giám đốc kinh doanh nhận toàn chuỗi. Quản lý cửa hàng chỉ nhận số liệu cửa hàng mình — tự động qua Zalo, email hoặc Slack.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "7:45 mỗi sáng",
                      sub: "Schedule trigger",
                    },
                    {
                      icon: <span className="text-lg">📥</span>,
                      label: "Kéo 50 cửa hàng",
                      sub: "POS / Google Sheet API",
                    },
                    {
                      icon: <span className="text-lg">🧮</span>,
                      label: "Tính KPI + flag",
                      sub: "So sánh cùng kỳ tự động",
                    },
                    {
                      icon: <span className="text-lg">👥</span>,
                      label: "Phân quyền phân phối",
                      sub: "Đúng người đúng số liệu",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Gửi Zalo / Email",
                      sub: "8:00 sáng — sẵn sàng đọc",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Phân quyền phân phối báo cáo là yếu tố then chốt thường bị bỏ
                  qua. Quản lý cửa hàng không cần thấy số liệu toàn chuỗi — và
                  giám đốc không cần đọc báo cáo từng cửa hàng. n8n cho phép
                  định tuyến dữ liệu theo vai trò, giúp mỗi người nhận đúng thứ
                  họ cần để ra quyết định.
                </CalloutBox>

                {/* WF2 */}
                <h3 id="workflow-2">Workflow 2: Tổng Hợp Tuần — Thứ Hai Đã Có Sẵn</h3>

                <p>
                  Cuộc họp đầu tuần thường bắt đầu bằng câu "tuần rồi doanh thu
                  thế nào?" — và mất 15 phút chờ ai đó mở laptop chạy báo cáo.
                  Workflow này đảm bảo con số đã sẵn sàng trước khi cuộc họp bắt
                  đầu.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger chủ nhật 23:00 — tổng hợp cả tuần",
                      desc: "n8n chạy cuối tuần, gom toàn bộ dữ liệu 7 ngày của 50 cửa hàng. Kiểm tra đầy đủ dữ liệu trước khi tổng hợp — cửa hàng nào thiếu số liệu → ping nhắc tự động.",
                    },
                    {
                      title: "Phân tích xu hướng và ngoại lệ",
                      desc: "So sánh 4 tuần liên tiếp để xác định xu hướng. Cửa hàng nào liên tục giảm 2 tuần trở lên → flag để quản lý vùng xem xét. Sản phẩm nào tăng đột biến → highlight cơ hội.",
                    },
                    {
                      title: "Cập nhật Google Sheet tổng hợp trung tâm",
                      desc: "Dữ liệu tuần được ghi vào Sheet master với cấu trúc chuẩn: mỗi hàng là một cửa hàng, mỗi cột là một tuần. Không ai cần copy-paste thêm.",
                    },
                    {
                      title: "Báo cáo tuần gửi thứ Hai 7:00 sáng",
                      desc: "Tóm tắt tuần kèm biểu đồ sparkline gửi vào group quản lý. Link dẫn đến Sheet chi tiết. Cuộc họp đầu tuần bắt đầu với đủ số liệu.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#6366F1"
                  steps={[
                    {
                      icon: <span className="text-lg">🗓️</span>,
                      label: "CN 23:00",
                      sub: "Schedule trigger cuối tuần",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "Kiểm tra đủ dữ liệu",
                      sub: "Ping cửa hàng thiếu số",
                    },
                    {
                      icon: <span className="text-lg">📈</span>,
                      label: "Phân tích xu hướng",
                      sub: "So sánh 4 tuần liên tiếp",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Cập nhật Sheet master",
                      sub: "Chuẩn hóa cấu trúc",
                    },
                    {
                      icon: <span className="text-lg">📨</span>,
                      label: "Gửi T2 7:00",
                      sub: "Sẵn sàng trước họp",
                    },
                  ]}
                />

                {/* WF3 */}
                <h3 id="workflow-3">Workflow 3: Dashboard Tháng — Không Cần Ai Gom</h3>

                <p>
                  Đây là workflow thay thế 2 ngày làm việc của kế toán trưởng.
                  Ngày 1 tháng sau, toàn bộ báo cáo tháng trước đã hoàn chỉnh và
                  gửi đến đúng người — bao gồm cả so sánh với budget, phân tích
                  tồn kho, và xếp hạng hiệu suất từng cửa hàng.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger ngày 1 hàng tháng — tổng hợp tháng vừa qua",
                      desc: "n8n kéo toàn bộ dữ liệu tháng từ tất cả nguồn: POS, kho, công nợ. Đối chiếu chéo giữa doanh thu POS và doanh thu kế toán để phát hiện lệch.",
                    },
                    {
                      title: "So sánh với budget và cùng kỳ năm trước",
                      desc: "Tự động tính mức đạt ngân sách (%) cho từng cửa hàng và toàn chuỗi. Cửa hàng đạt dưới 80% target → highlight đỏ trong báo cáo gửi ban giám đốc.",
                    },
                    {
                      title: "Phân tích tồn kho dư và thiếu",
                      desc: "Kết hợp dữ liệu doanh thu và tồn kho cuối tháng để tính vòng quay hàng tồn. SKU nào tồn quá 60 ngày → đề xuất khuyến mãi. SKU nào sắp hết → đề xuất nhập thêm.",
                    },
                    {
                      title: "Xuất PDF và gửi email chính thức",
                      desc: "Báo cáo PDF chuyên nghiệp được xuất tự động và gửi email đến ban giám đốc, kế toán trưởng, quản lý vùng. Không cần ai format thêm.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    {
                      icon: <span className="text-lg">📅</span>,
                      label: "Ngày 1 hàng tháng",
                      sub: "Trigger tự động",
                    },
                    {
                      icon: <span className="text-lg">🔗</span>,
                      label: "Gom đa nguồn",
                      sub: "POS + kho + kế toán",
                    },
                    {
                      icon: <span className="text-lg">⚖️</span>,
                      label: "Đối chiếu budget",
                      sub: "So sánh target vs thực tế",
                    },
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Phân tích tồn kho",
                      sub: "Vòng quay + đề xuất",
                    },
                    {
                      icon: <span className="text-lg">📄</span>,
                      label: "Xuất PDF + email",
                      sub: "Gửi đúng người tự động",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Tại sao 3 workflow thay vì 1?">
                  Tần suất khác nhau phục vụ mục đích khác nhau. Báo cáo ngày
                  dùng để phát hiện vấn đề kịp thời. Báo cáo tuần dùng để điều
                  chỉnh chiến thuật. Báo cáo tháng dùng để ra quyết định chiến
                  lược. Gộp tất cả vào một workflow sẽ tạo ra một báo cáo không
                  phù hợp với ai cả.
                </CalloutBox>

                {/* Section 3: Trước/Sau */}
                <h2 id="truoc-sau">Trước Và Sau Khi Triển Khai Báo Cáo Tự Động</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Gom báo cáo thủ công",
                    items: [
                      "Kế toán trưởng dành 20 giờ/tuần chỉ để gom và format báo cáo",
                      "Cuối tháng mất 2 ngày để tổng hợp — bỏ qua mọi việc khác",
                      "57% báo cáo nộp đúng hạn — 43% trễ hoặc thiếu dữ liệu",
                      "Dữ liệu tồn kho trễ 3–5 ngày → tồn dư tăng 22% mỗi quý",
                      "Quản lý vùng không có số liệu để họp đầu tuần",
                      "Phát hiện cửa hàng có vấn đề sau 2–3 tuần thay vì ngay ngày hôm sau",
                    ],
                  }}
                  after={{
                    title: "Sau — Hệ thống báo cáo tự động",
                    items: [
                      "Báo cáo ngày gửi lúc 8:00 sáng — không ai cần làm gì",
                      "Báo cáo tháng hoàn chỉnh vào ngày 1 — kế toán tập trung phân tích",
                      "100% báo cáo đúng hạn — nộp đúng hạn tăng từ 57% lên 100%",
                      "Tồn kho dư giảm 22% nhờ dữ liệu real-time cho quyết định mua hàng",
                      "Thời gian gom báo cáo giảm từ 20 giờ/tuần xuống 2 giờ",
                      "Phát hiện cửa hàng giảm doanh thu ngay ngày hôm sau",
                    ],
                  }}
                />

                {/* Section 4: Kết quả */}
                <h2 id="ket-qua">Kết Quả Thực Tế: Chuỗi 50 Cửa Hàng Sau 3 Tháng Triển Khai</h2>

                <StatCard
                  stats={[
                    {
                      value: "−90%",
                      label: "thời gian gom báo cáo",
                      sub: "từ 20 giờ/tuần xuống 2 giờ",
                      color: "text-accent",
                    },
                    {
                      value: "−22%",
                      label: "tồn kho dư thừa",
                      sub: "nhờ dữ liệu kịp thời cho mua hàng",
                      color: "text-accent",
                    },
                    {
                      value: "+43%",
                      label: "báo cáo nộp đúng hạn",
                      sub: "từ 57% lên 100%",
                      color: "text-accent",
                    },
                    {
                      value: "3 tuần",
                      label: "thời gian triển khai",
                      sub: "từ 0 đến vận hành ổn định",
                    },
                  ]}
                />

                <p>
                  Một chuỗi bán lẻ thời trang tại TP.HCM với 50 cửa hàng toàn
                  quốc triển khai 3 workflow trên trong 3 tuần. Kết quả sau 3
                  tháng vận hành: kế toán trưởng tiết kiệm 72 giờ làm việc mỗi
                  tháng, không còn báo cáo trễ, và lần đầu tiên ban giám đốc có
                  số liệu tồn kho kịp thời để điều chỉnh kế hoạch mua hàng —
                  giảm trực tiếp 22% giá trị hàng tồn dư trong quý đầu tiên.
                </p>

                <p>
                  Điều quan trọng hơn: kế toán trưởng chuyển 18 giờ/tuần từ
                  "gom số liệu" sang "phân tích số liệu". Trong 3 tháng đầu, đội
                  kế toán phát hiện 3 cửa hàng có xu hướng giảm doanh thu liên
                  tiếp và đề xuất điều chỉnh mặt bằng — điều không thể làm được
                  khi cả tuần chỉ lo gom Excel.
                </p>

                <CalloutBox type="info" title="ROI thực tế tính như thế nào?">
                  <p className="mb-2">
                    Chi phí triển khai khoảng 8–12 triệu, vận hành khoảng 1–2
                    triệu/tháng. Chỉ tính riêng tiết kiệm nhân sự kế toán (72
                    giờ/tháng × lương theo giờ), hầu hết chuỗi từ 10 cửa hàng
                    trở lên hoàn vốn trong tháng đầu tiên — chưa kể giá trị từ
                    quyết định mua hàng tốt hơn nhờ tồn kho chính xác.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Tính ROI cho chuỗi của bạn — Đặt audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Section 5: So sánh */}
                <h2 id="so-sanh">
                  So Sánh Chi Tiết: Báo Cáo Thủ Công vs Hệ Thống Tự Động (n8n)
                </h2>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Thủ công 100%",
                    "Báo cáo tự động (n8n)",
                  ]}
                  highlightCol={2}
                  rows={[
                    [
                      "Tần suất báo cáo ngày",
                      "Không có (không đủ người)",
                      "Mỗi sáng 8:00 tự động",
                    ],
                    [
                      "Thời gian gom báo cáo tháng",
                      "2 ngày làm việc",
                      "0 giờ — tự tổng hợp ngày 1",
                    ],
                    [
                      "Tỷ lệ báo cáo đúng hạn",
                      "57% (43% trễ hoặc thiếu)",
                      "100% — không phụ thuộc người",
                    ],
                    [
                      "Độ chính xác dữ liệu",
                      "Phụ thuộc người gửi file",
                      "Lấy thẳng từ nguồn, đối chiếu tự động",
                    ],
                    [
                      "Phân phối theo vai trò",
                      "Không có — ai cũng thấy tất cả",
                      "Phân quyền: đúng người đúng số",
                    ],
                    [
                      "Phát hiện vấn đề cửa hàng",
                      "Sau 2–3 tuần (khi tổng hợp)",
                      "Ngay ngày hôm sau (flag tự động)",
                    ],
                    [
                      "Tồn kho dư thừa",
                      "+22% do thiếu dữ liệu kịp thời",
                      "Giảm 22% nhờ cảnh báo tự động",
                    ],
                    [
                      "Scale khi mở thêm cửa hàng",
                      "Thêm người — thêm chi phí",
                      "Thêm cửa hàng vào config — không đổi chi phí",
                    ],
                    [
                      "Chi phí vận hành/tháng",
                      "Lương kế toán tổng hợp (full/part-time)",
                      "1–2 triệu (server n8n + storage)",
                    ],
                  ]}
                />

                {/* Section 6: Bắt đầu */}
                <h2 id="bat-dau">
                  Bắt Đầu Triển Khai Báo Cáo Tự Động Như Thế Nào?
                </h2>

                <p>
                  Lộ trình triển khai thực tế cho chuỗi cửa hàng — từ chưa có
                  gì đến hệ thống báo cáo tự động vận hành ổn định trong 3 tuần:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Tuần 1: Kiểm kê nguồn dữ liệu và cài n8n",
                      desc: "Xác định hệ thống POS đang dùng (MISA, KiotViet, Sapo, hay Google Sheet?), kiểm tra API có sẵn không. Cài n8n self-hosted hoặc n8n Cloud. Kết nối thử một cửa hàng để xác nhận dữ liệu kéo đúng.",
                    },
                    {
                      title: "Tuần 1–2: Triển khai Workflow 1 (báo cáo ngày)",
                      desc: "Bắt đầu từ báo cáo ngày — đơn giản nhất và có giá trị ngay lập tức. Xây dựng template báo cáo, kết nối Zalo OA hoặc email, test với dữ liệu thật. Chạy song song với quy trình cũ 3–5 ngày để xác nhận số khớp.",
                    },
                    {
                      title: "Tuần 2: Triển khai Workflow 2 (báo cáo tuần)",
                      desc: "Mở rộng logic từ WF1, thêm aggregation theo tuần và so sánh 4 tuần. Cài trigger cuối tuần, test với 2 tuần dữ liệu lịch sử. Chuẩn bị cấu trúc Google Sheet master.",
                    },
                    {
                      title: "Tuần 2–3: Triển khai Workflow 3 (dashboard tháng)",
                      desc: "Workflow phức tạp nhất — tích hợp thêm nguồn kho và kế toán. Cần kiểm tra kỹ logic đối chiếu, format PDF xuất ra. Test với tháng vừa qua trước khi bật production.",
                    },
                    {
                      title: "Tuần 3: Chạy song song và bàn giao",
                      desc: "Chạy tự động đồng thời với quy trình cũ. Kế toán xác nhận số liệu khớp. Sau 5–7 ngày không phát sinh chênh lệch → tắt quy trình thủ công, bàn giao vận hành.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không có đội kỹ thuật? Có người làm cho bạn.">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi
                    phân tích hệ thống POS đang dùng, số lượng cửa hàng, luồng
                    báo cáo hiện tại và đưa ra thiết kế hệ thống cụ thể với chi
                    phí rõ ràng trước khi bắt đầu.
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

                <FAQ
                  items={[
                    {
                      q: "Chuỗi của tôi dùng nhiều hệ thống POS khác nhau — n8n có xử lý được không?",
                      a: "Được. n8n hỗ trợ hàng trăm connector, bao gồm MISA, KiotViet, Sapo, Haravan, và cả Google Sheet thủ công. Nếu cửa hàng nào chưa có API, có thể dùng Google Sheet làm lớp trung gian — cửa hàng vẫn nhập vào Sheet, n8n kéo từ Sheet. Hệ thống hỗn hợp nhiều nguồn là tình huống phổ biến nhất chúng tôi xử lý.",
                    },
                    {
                      q: "Nếu một cửa hàng không gửi dữ liệu, workflow có bị lỗi cả hệ thống không?",
                      a: "Không. n8n có error handling và retry logic. Workflow được thiết kế để xử lý từng cửa hàng độc lập — một cửa hàng lỗi chỉ được flag và báo cáo vẫn chạy với 49 cửa hàng còn lại. Cửa hàng thiếu dữ liệu được ping tự động để bổ sung.",
                    },
                    {
                      q: "Độ trễ dữ liệu là bao nhiêu? Báo cáo ngày có số liệu đến mấy giờ tối hôm trước?",
                      a: "Phụ thuộc vào hệ thống POS. Với POS có API real-time (KiotViet, Sapo), dữ liệu chốt đến 23:59 hôm trước. Với Google Sheet, phụ thuộc giờ nhân viên nhập liệu. Báo cáo ngày thường phản ánh dữ liệu đến 22:00 hoặc 23:00 hôm trước — đủ để ra quyết định cho ngày hôm sau.",
                    },
                    {
                      q: "Dữ liệu báo cáo có được lưu trữ ở đâu? Có thể tra cứu lại lịch sử không?",
                      a: "Mọi báo cáo được lưu tự động vào Google Sheet master theo cấu trúc chuẩn — tra cứu được theo ngày, tuần, tháng, theo từng cửa hàng hoặc toàn chuỗi. Không giới hạn lịch sử. Dữ liệu thô cũng được lưu vào sheet riêng để audit.",
                    },
                    {
                      q: "Khi mở thêm cửa hàng mới, có phải cấu hình lại toàn bộ không?",
                      a: "Không. Chỉ cần thêm cửa hàng mới vào danh sách cấu hình (một file JSON hoặc Google Sheet config) — workflow tự động include cửa hàng đó vào tất cả các báo cáo từ ngày hôm sau. Đây là lợi thế lớn nhất khi chuỗi mở rộng.",
                    },
                  ]}
                />
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter
            title="Báo Cáo Doanh Thu Tự Động"
            slug="bao-cao-doanh-thu-tu-dong"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
