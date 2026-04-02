import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalloutBox from "@/components/blog/CalloutBox";
import StepList from "@/components/blog/StepList";
import StatCard from "@/components/blog/StatCard";
import ComparisonTable from "@/components/blog/ComparisonTable";
import TableOfContents from "@/components/blog/TableOfContents";
import WorkflowFlow from "@/components/blog/WorkflowFlow";
import FAQ from "@/components/blog/FAQ";
import BlogFooter from "@/components/blog/BlogFooter";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Quản Lý Chuỗi Nhà Hàng Tự Động: Báo Cáo, Tồn Kho, Ca Làm",
  description:
    "Hướng dẫn tự động hóa quản lý chuỗi nhà hàng với n8n: báo cáo doanh thu đa chi nhánh, cảnh báo tồn kho, quản lý ca làm. Giảm 80% thời gian quản lý, 0 Excel thủ công.",
  keywords: [
    "quản lý chuỗi nhà hàng",
    "automation chuỗi nhà hàng",
    "báo cáo đa chi nhánh",
    "tồn kho nhà hàng tự động",
    "quản lý ca làm tự động",
    "n8n f&b",
    "tự động hóa chuỗi cafe",
  ],
};

const tocItems = [
  { id: "van-de", text: "Đau đầu của người quản lý chuỗi", level: 2 },
  { id: "giai-phap", text: "4 workflow quản lý chuỗi tự động", level: 2 },
  { id: "workflow-1", text: "WF1: Báo cáo doanh thu đa chi nhánh", level: 3 },
  { id: "workflow-2", text: "WF2: Cảnh báo tồn kho tự động", level: 3 },
  { id: "workflow-3", text: "WF3: Quản lý ca làm & chấm công", level: 3 },
  { id: "workflow-4", text: "WF4: Dashboard tổng hợp cho owner", level: 3 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function QuanLyChuoiNhaHangTuDongBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="quan-ly-chuoi-nha-hang-tu-dong" title="Quản Lý Chuỗi Nhà Hàng Tự Động" />
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
              <span className="text-slate-600 truncate max-w-[300px]">F&B</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                F&B
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold">
                Chuỗi cửa hàng
              </span>
              <span className="text-xs text-slate-500">14 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Quản Lý Chuỗi Nhà Hàng Tự Động:{" "}
              <span className="gradient-text">Báo Cáo, Tồn Kho, Ca Làm</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              3 chi nhánh — 3 cách báo cáo khác nhau. Tồn kho chi nhánh 2 hết nguyên liệu nhưng không ai biết.
              Nhân viên ca tối nghỉ không báo. 4 workflow n8n giúp bạn quản lý tất cả từ 1 màn hình —
              báo cáo real-time, cảnh báo tồn kho, quản lý ca làm tự động.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "5 giờ/ngày", label: "chủ chuỗi mất để gom báo cáo", sub: "gọi điện, nhắn tin, check sheet từng chi nhánh", color: "text-red-500" },
                  { value: "23%", label: "nguyên liệu bị lãng phí", sub: "vì không có cảnh báo tồn kho kịp thời" },
                  { value: "15%", label: "ca làm bị thiếu người", sub: "vì nhân viên nghỉ không báo hoặc báo trễ" },
                  { value: "0 phút", label: "quản lý với automation", sub: "tất cả tự động, chỉ cần đọc báo cáo" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">🔥 Đau Đầu Của Người Quản Lý Chuỗi</h2>

                <p>
                  Bạn mở nhà hàng đầu tiên — mọi thứ ổn. Bạn tự đứng bếp, tự tính tiền, tự check tồn kho.
                  Rồi bạn mở chi nhánh 2. Rồi chi nhánh 3. Và bắt đầu hỗn loạn.
                </p>

                <p>
                  Những vấn đề kinh điển của người quản lý chuỗi F&B:
                </p>

                <ul>
                  <li><strong>Báo cáo mỗi chi nhánh 1 kiểu:</strong> Chi nhánh 1 gửi Excel, chi nhánh 2 gửi ảnh chụp, chi nhánh 3... quên gửi</li>
                  <li><strong>Tồn kho không đồng bộ:</strong> Chi nhánh 2 hết thịt bò nhưng chi nhánh 1 dư thừa — không ai biết để điều chuyển</li>
                  <li><strong>Ca làm loạn xạ:</strong> Nhân viên nghỉ không báo, đến trễ, đổi ca tự ý — bạn biết lúc cuối tháng khi tính lương</li>
                  <li><strong>Chi phí &quot;vô hình&quot;:</strong> Điện, nước, nguyên liệu hao phí — không có số liệu để so sánh giữa các chi nhánh</li>
                  <li><strong>Bạn phải có mặt để mọi thứ chạy:</strong> Nghỉ 1 ngày = loạn 1 ngày</li>
                </ul>

                <CalloutBox type="warning" title="Càng nhiều chi nhánh, càng nhiều lỗi">
                  Mỗi chi nhánh thêm vào không chỉ thêm doanh thu — mà còn thêm <em>độ phức tạp quản lý</em> theo cấp số nhân.
                  2 chi nhánh không khó gấp 2 lần 1 chi nhánh — mà khó gấp 4 lần. 5 chi nhánh? Khó gấp 25 lần.
                  Nếu không có hệ thống tự động, bạn sẽ là người bị vắt kiệt.
                </CalloutBox>

                <p>
                  Tin tốt: <strong>tất cả những vấn đề này đều có thể tự động hóa.</strong> Không cần phần mềm đắt tiền.
                  Không cần đổi hệ thống POS. Chỉ cần n8n + Google Sheets + Telegram (hoặc Zalo OA).
                </p>

                {/* Section 2 */}
                <h2 id="giai-phap">⚡ 4 Workflow Quản Lý Chuỗi Tự Động</h2>

                <h3 id="workflow-1">Workflow 1: Báo Cáo Doanh Thu Đa Chi Nhánh</h3>

                <p>
                  Mỗi tối 22:00, n8n tự động tổng hợp doanh thu của tất cả chi nhánh và gửi cho bạn.
                  Không cần gọi điện, không cần đợi ai gửi báo cáo.
                </p>

                <StepList steps={[
                  { title: "22:00 — n8n tự động kết xuất", desc: "Lấy dữ liệu doanh thu từ POS/Sheet của từng chi nhánh" },
                  { title: "Tổng hợp và so sánh", desc: "Doanh thu từng chi nhánh, so với hôm qua, so với cùng kỳ tuần trước, target tháng" },
                  { title: "Tạo báo cáo tự động", desc: "Google Sheet dashboard: bảng, chart, % đạt target. Cập nhật mỗi tối không cần ai làm." },
                  { title: "Gửi summary qua Telegram", desc: "'CN1: 18.5tr (92% target) | CN2: 12.3tr (78% target) | CN3: 21.1tr (105% target)'" },
                  { title: "Alert chi nhánh dưới target", desc: "Nếu chi nhánh nào đạt < 80% target → alert riêng cho quản lý chi nhánh đó" },
                ]} />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    { icon: <span className="text-lg">🏪</span>, label: "CN1 - POS data", sub: "KiotViet/Sapo" },
                    { icon: <span className="text-lg">🏪</span>, label: "CN2 - POS data", sub: "KiotViet/Sapo" },
                    { icon: <span className="text-lg">🏪</span>, label: "CN3 - POS data", sub: "KiotViet/Sapo" },
                    { icon: <span className="text-lg">📊</span>, label: "n8n tổng hợp", sub: "So sánh & chart" },
                    { icon: <span className="text-lg">💬</span>, label: "Telegram", sub: "Summary mỗi tối" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả thực tế">
                  Một chuỗi bún đậu ở Hà Nội (4 chi nhánh) trước kia mất 1.5 giờ mỗi tối để gom báo cáo qua điện thoại.
                  Sau khi cài workflow này — owner nhận Telegram summary lúc 22:05 mỗi tối, chỉ cần đọc 2 phút.
                  Tiết kiệm 45 giờ/tháng.
                </CalloutBox>

                <p>
                  Bài chi tiết về báo cáo doanh thu tự động:{" "}
                  <a href="/blog/bao-cao-doanh-thu-tu-dong">Báo Cáo Doanh Thu Tự Động Cho Chuỗi Cửa Hàng</a>
                </p>

                <h3 id="workflow-2">Workflow 2: Cảnh Báo Tồn Kho Tự Động</h3>

                <p>
                  Hết nguyên liệu = mất doanh thu + khách hàng thất vọng. Workflow này đảm bảo
                  bạn biết <strong>trước khi hết</strong>, không phải <strong>sau khi hết</strong>.
                </p>

                <StepList steps={[
                  { title: "Mỗi sáng 7:00 — kiểm tra tồn kho", desc: "n8n đọc dữ liệu tồn kho từ POS/Sheet của từng chi nhánh" },
                  { title: "So với ngưỡng cảnh báo", desc: "Mỗi nguyên liệu có ngưỡng (VD: thịt bò < 5kg, cà phê < 2kg). Dưới ngưỡng = cảnh báo." },
                  { title: "Alert cho quản lý chi nhánh", desc: "Telegram: 'CN2: Thịt bò còn 3kg (ngưỡng 5kg), Cà phê còn 1.5kg (ngưỡng 2kg)'" },
                  { title: "Tự động tạo đơn đặt hàng", desc: "Nếu tồn kho dưới ngưỡng → tạo draft đơn hàng cho nhà cung cấp trong Google Sheet" },
                  { title: "Tổng hợp tồn kho cross-branch", desc: "Nếu CN1 dư thừa mà CN2 thiếu → gợi ý điều chuyển thay vì mua mới" },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">📦</span>, label: "Check tồn kho", sub: "7:00 mỗi sáng" },
                    { icon: <span className="text-lg">⚠️</span>, label: "So ngưỡng", sub: "Từng nguyên liệu" },
                    { icon: <span className="text-lg">🚨</span>, label: "Alert thiếu", sub: "Telegram ngay" },
                    { icon: <span className="text-lg">📝</span>, label: "Đặt hàng", sub: "Draft tự động" },
                    { icon: <span className="text-lg">🔄</span>, label: "Điều chuyển", sub: "Cross-branch" },
                  ]}
                />

                <CalloutBox type="tip">
                  <strong>Tip:</strong> Đặt ngưỡng cảnh báo = lượng dùng cho 2 ngày. Ví dụ nhà hàng bán 10kg thịt bò/ngày →
                  ngưỡng = 20kg. Như vậy bạn có 2 ngày để đặt hàng mà không bị gián đoạn.
                </CalloutBox>

                <h3 id="workflow-3">Workflow 3: Quản Lý Ca Làm & Chấm Công</h3>

                <p>
                  Nhân viên F&B — đặc biệt part-time — thường đổi ca, nghỉ đột xuất, đến trễ.
                  Workflow này giúp bạn biết real-time và xử lý nhanh.
                </p>

                <StepList steps={[
                  { title: "Nhân viên check-in qua Telegram bot", desc: "Bấm '/checkin' trên Telegram khi đến quán. n8n ghi nhận thời gian + vị trí (optional)." },
                  { title: "Tự động đối chiếu với lịch ca", desc: "n8n kiểm tra: đúng ca chưa? Đến đúng giờ chưa? Thiếu ai chưa check-in?" },
                  { title: "Alert thiếu người", desc: "15 phút sau giờ bắt đầu ca mà còn thiếu người → Telegram alert cho quản lý chi nhánh" },
                  { title: "Tổng hợp chấm công cuối tháng", desc: "Google Sheet tự động: số ca, số giờ, trễ bao nhiêu lần, OT bao nhiêu giờ. Xuất ra để tính lương." },
                  { title: "Nhân viên xin nghỉ/đổi ca qua bot", desc: "'/xinnghi 15/04' hoặc '/doica @tên 15/04' → n8n cập nhật lịch và thông báo người liên quan" },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">👋</span>, label: "Check-in", sub: "Telegram bot" },
                    { icon: <span className="text-lg">📋</span>, label: "Đối chiếu ca", sub: "Tự động kiểm tra" },
                    { icon: <span className="text-lg">🚨</span>, label: "Alert thiếu", sub: "15 phút sau" },
                    { icon: <span className="text-lg">📊</span>, label: "Bảng chấm công", sub: "Tự động cuối tháng" },
                  ]}
                />

                <p>
                  Đọc thêm về cách tạo Telegram bot cho quản lý:{" "}
                  <a href="/blog/telegram-bot-n8n">Telegram Bot + n8n: Thông Báo & Quản Lý Từ Xa</a>
                </p>

                <h3 id="workflow-4">Workflow 4: Dashboard Tổng Hợp Cho Owner</h3>

                <p>
                  Tất cả 3 workflow trên đều đổ data vào Google Sheets. Workflow 4 tổng hợp thành
                  1 dashboard duy nhất — bạn mở lên là thấy toàn bộ chuỗi.
                </p>

                <StepList steps={[
                  { title: "Dashboard real-time trên Google Sheets", desc: "1 Sheet master: doanh thu, tồn kho, nhân sự — tất cả chi nhánh trên 1 màn hình" },
                  { title: "Chart tự động cập nhật", desc: "Biểu đồ doanh thu theo ngày, tuần, tháng. So sánh giữa các chi nhánh. Trend lên/xuống." },
                  { title: "Chỉ số sức khỏe từng chi nhánh", desc: "Doanh thu/nhân viên, chi phí nguyên liệu/doanh thu, tồn kho quay vòng, tỉ lệ khách quay lại" },
                  { title: "Báo cáo tháng tự động", desc: "Ngày 1 hàng tháng: n8n tạo báo cáo tháng đầy đủ, gửi email/Telegram cho owner và kế toán" },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">💰</span>, label: "Doanh thu", sub: "Từ WF1" },
                    { icon: <span className="text-lg">📦</span>, label: "Tồn kho", sub: "Từ WF2" },
                    { icon: <span className="text-lg">👥</span>, label: "Nhân sự", sub: "Từ WF3" },
                    { icon: <span className="text-lg">📊</span>, label: "Dashboard", sub: "1 màn hình" },
                    { icon: <span className="text-lg">📧</span>, label: "Báo cáo tháng", sub: "Tự động ngày 1" },
                  ]}
                />

                <CalloutBox type="info">
                  Bạn không cần phần mềm BI đắt tiền như Power BI hay Tableau. Google Sheets với chart có sẵn
                  đã đủ cho chuỗi 3-10 chi nhánh. Khi nào vượt 10 chi nhánh, lúc đó mới cần xem xét upgrade.
                </CalloutBox>

                {/* Section 3 */}
                <h2 id="so-sanh">⚖️ So Sánh: Thủ Công vs Tự Động</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "Tự động (n8n)"]}
                  highlightCol={2}
                  rows={[
                    ["Báo cáo doanh thu", "Gọi điện từng chi nhánh, gom Excel", "Tự động 22:00 mỗi tối, Telegram summary"],
                    ["Biết doanh thu hôm nay", "Cuối ngày hoặc sáng hôm sau", "Real-time, bất kỳ lúc nào"],
                    ["Kiểm tra tồn kho", "Gọi điện hỏi, hoặc đến tận nơi", "Tự động 7:00 sáng, alert nếu thiếu"],
                    ["Đặt nguyên liệu", "Nhớ thì đặt, quên thì hết hàng", "Draft đơn tự động khi dưới ngưỡng"],
                    ["Quản lý ca làm", "Group Zalo loạn xạ, ai nghỉ không biết", "Telegram bot check-in, alert thiếu người"],
                    ["Tính lương cuối tháng", "Đếm tay trên bảng chấm công giấy", "Sheet tự động xuất, chỉ cần duyệt"],
                    ["So sánh chi nhánh", "Cảm tính, không có số liệu", "Dashboard so sánh real-time"],
                    ["Owner đi vắng 1 ngày", "Loạn", "Bình thường, hệ thống tự chạy"],
                  ]}
                />

                <StatCard stats={[
                  { value: "0 phút", label: "gom báo cáo thủ công", sub: "tự động mỗi tối", color: "text-accent" },
                  { value: "-80%", label: "thời gian quản lý", sub: "từ 5 giờ → 1 giờ/ngày" },
                  { value: "-23%", label: "lãng phí nguyên liệu", sub: "nhờ cảnh báo tồn kho kịp thời" },
                  { value: "100%", label: "chi nhánh được kiểm soát", sub: "không phụ thuộc con người" },
                ]} />

                {/* Section 4 */}
                <h2 id="bat-dau">🚀 Bắt Đầu Như Thế Nào?</h2>

                <StepList steps={[
                  { title: "Chuẩn hóa data giữa các chi nhánh", desc: "Tất cả chi nhánh cần dùng chung 1 POS (KiotViet/Sapo) hoặc chung 1 template Google Sheet. Đây là bước 0 bắt buộc." },
                  { title: "Bắt đầu với WF1 (báo cáo doanh thu)", desc: "Impact lớn nhất, setup nhanh nhất. 1-2 ngày là có báo cáo tự động mỗi tối." },
                  { title: "Thêm WF2 (tồn kho) sau 1-2 tuần", desc: "Cần thời gian để nhập ngưỡng cho từng nguyên liệu từng chi nhánh." },
                  { title: "Thêm WF3 (ca làm) khi WF1+WF2 ổn", desc: "Cần nhân viên làm quen với Telegram bot — cho họ 1-2 tuần để thích nghi." },
                  { title: "Tạo dashboard (WF4) khi có đủ data", desc: "Sau 1 tháng chạy WF1+WF2+WF3, bạn sẽ có đủ data để tạo dashboard ý nghĩa." },
                ]} />

                <p>
                  Nếu bạn mới bắt đầu hành trình tự động hóa, đọc{" "}
                  <a href="/blog/lo-trinh-tu-dong-hoa-sme">Lộ trình tự động hóa cho SME</a> để hiểu
                  nên bắt đầu từ đâu và đi đến đâu.
                </p>

                <p>
                  Và kết hợp với <a href="/blog/zalo-oa-fnb">Zalo OA cho F&B</a> để không chỉ quản lý nội bộ mà còn
                  chăm sóc khách hàng tự động — tạo trải nghiệm hoàn chỉnh cho chuỗi nhà hàng.
                </p>

                <CalloutBox type="info" title="Cần tư vấn cho chuỗi nhà hàng?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — mình sẽ phân tích quy trình chuỗi của bạn
                    và đưa ra lộ trình cụ thể: bắt đầu từ workflow nào, chi phí, thời gian.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Inline CTA */}
                <BlogInlineCTA category="F&B" slug="quan-ly-chuoi-nha-hang-tu-dong" />

                {/* FAQ */}
                <h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

                <FAQ items={[
                  {
                    q: "Mình chỉ có 2 chi nhánh, có cần automation chưa?",
                    a: "Có! 2 chi nhánh là lúc bạn nên bắt đầu. Nếu đợi đến 5 chi nhánh mới làm, bạn sẽ mất nhiều thời gian và công sức hơn để chuẩn hóa. Bắt đầu sớm = dễ hơn, rẻ hơn."
                  },
                  {
                    q: "Các chi nhánh dùng POS khác nhau thì sao?",
                    a: "n8n kết nối được nhiều POS khác nhau trong 1 workflow. Nhưng lý tưởng nhất là chuẩn hóa về 1 POS cho toàn chuỗi. Nếu chưa làm được, dùng Google Sheets làm lớp trung gian."
                  },
                  {
                    q: "Nhân viên không biết dùng Telegram thì sao?",
                    a: "Telegram đơn giản hơn bạn nghĩ — chỉ cần bấm 1 nút '/checkin'. Mình sẽ tạo hướng dẫn 1 trang cho nhân viên. Ngoài ra, có thể dùng Zalo thay Telegram nếu nhân viên quen Zalo hơn."
                  },
                  {
                    q: "Chi phí setup cho chuỗi 3 chi nhánh là bao nhiêu?",
                    a: "Tự làm: n8n Cloud $24/tháng + Google Sheets (miễn phí) = ~600K/tháng. Thuê chuyên gia setup: 15-25 triệu (1 lần). Sau đó chi phí duy trì chỉ 600K-1 triệu/tháng. So với thuê thêm 1 nhân viên quản lý: tiết kiệm 6-8 triệu/tháng."
                  },
                  {
                    q: "Có thể theo dõi camera qua hệ thống này không?",
                    a: "Không trực tiếp — n8n không xử lý video. Nhưng bạn có thể tích hợp: camera có AI phát hiện sự kiện (như queue dài) → gửi webhook đến n8n → n8n alert qua Telegram. Tuy nhiên đây là advanced use case."
                  },
                  {
                    q: "Data có an toàn không? Nhân viên có xem được doanh thu không?",
                    a: "Bạn kiểm soát hoàn toàn ai được xem gì. VD: quản lý chi nhánh chỉ thấy data chi nhánh mình. Owner thấy tất cả. Google Sheets có phân quyền theo sheet/tab. n8n cũng có user roles."
                  },
                  {
                    q: "Nếu 1 chi nhánh bị mất mạng thì workflow có chạy không?",
                    a: "Workflow sẽ báo lỗi cho chi nhánh mất mạng và vẫn chạy bình thường cho các chi nhánh khác. Khi mạng về, data sẽ được đồng bộ từ POS (vì POS lưu offline). n8n có retry tự động."
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Quản Lý Chuỗi Nhà Hàng Tự Động" slug="quan-ly-chuoi-nha-hang-tu-dong" date="2026-04-02" />
        </article>
      </main>
      <Footer />
    </>
  );
}
