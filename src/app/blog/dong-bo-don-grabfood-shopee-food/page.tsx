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
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Đồng Bộ Đơn GrabFood & ShopeeFood Tự Động — Giảm 100% Nhập Tay",
  description:
    "Hướng dẫn tự động đồng bộ đơn GrabFood, ShopeeFood vào POS/kế toán bằng n8n. Giảm 100% nhập tay, báo cáo real-time, giảm sai sót xuống 0%. Dành cho nhà hàng, quán cafe.",
  keywords: [
    "đồng bộ đơn grabfood",
    "shopee food automation",
    "tự động hóa đơn delivery",
    "n8n nhà hàng",
    "grabfood pos đồng bộ",
    "automation f&b",
    "đồng bộ đơn hàng tự động",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề nhập đơn delivery thủ công", level: 2 },
  { id: "ton-that", text: "Tổn thất thực tế mỗi tháng", level: 2 },
  { id: "giai-phap", text: "3 workflow đồng bộ tự động", level: 2 },
  { id: "workflow-1", text: "WF1: Đồng bộ đơn real-time", level: 3 },
  { id: "workflow-2", text: "WF2: Đối soát cuối ngày", level: 3 },
  { id: "workflow-3", text: "WF3: Báo cáo kênh bán hàng", level: 3 },
  { id: "tich-hop", text: "Tích hợp với hệ thống hiện tại", level: 2 },
  { id: "truoc-sau", text: "Trước và sau khi tự động hóa", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function DongBoDonGrabFoodShopeeFoodBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="dong-bo-don-grabfood-shopee-food" title="Đồng Bộ Đơn GrabFood & ShopeeFood Tự Động" />
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
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                Delivery
              </span>
              <span className="text-xs text-slate-500">12 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Đồng Bộ Đơn GrabFood & ShopeeFood Tự Động —{" "}
              <span className="gradient-text">Giảm 100% Nhập Tay</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Đơn GrabFood về — nhân viên ghi tay vào sổ. Đơn ShopeeFood về — lại ghi. Cuối ngày đối soát — thiếu 3 đơn, thừa 2 đơn.
              Mỗi ngày như vậy. 3 workflow n8n giải quyết toàn bộ — đồng bộ real-time, đối soát tự động, báo cáo theo kênh.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "45 phút", label: "nhân viên mất mỗi ngày", sub: "nhập đơn từ app delivery vào sổ/POS", color: "text-red-500" },
                  { value: "12%", label: "đơn bị sai khi nhập tay", sub: "sai giá, thiếu món, nhầm khách" },
                  { value: "2.5 triệu", label: "mất mỗi tháng vì sai đơn", sub: "trung bình nhà hàng 100+ đơn/ngày" },
                  { value: "0 giây", label: "đồng bộ với automation", sub: "đơn về → POS cập nhật ngay" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">🔥 Vấn Đề Nhập Đơn Delivery Thủ Công</h2>

                <p>
                  Bạn có nhà hàng trên GrabFood, ShopeeFood (và có thể cả Baemin trước đây). Mỗi ngày 80-200 đơn từ các app này.
                  Vấn đề là: <strong>không có app nào tự động đẩy data vào POS hay sổ kế toán của bạn.</strong>
                </p>

                <p>
                  Kết quả? Nhân viên phải nhìn màn hình tablet GrabFood, rồi ghi lại từng đơn vào:
                </p>

                <ul>
                  <li>Sổ tay (nhà hàng nhỏ)</li>
                  <li>Google Sheet (nhà hàng vừa)</li>
                  <li>POS như KiotViet, Sapo (nhà hàng lớn hơn)</li>
                  <li>Phần mềm kế toán như MISA (để đối soát doanh thu)</li>
                </ul>

                <CalloutBox type="warning" title="Bạn có nhận ra không?">
                  Mỗi đơn delivery mất 2-3 phút để nhập thủ công. Với 100 đơn/ngày = 3-5 giờ nhân viên chỉ để <em>nhập lại</em> thông tin
                  đã có sẵn trên app. Đó là 3-5 giờ có thể dùng để phục vụ khách, kiểm tra chất lượng, hay nghỉ ngơi.
                </CalloutBox>

                <p>
                  Và chưa kể lỗi: nhập sai giá, thiếu món, nhầm đơn của khách này sang khách kia.
                  Cuối tháng đối soát với GrabFood — chênh lệch 500K-2 triệu là chuyện bình thường.
                  Bạn không biết là <strong>app tính sai hay mình nhập sai</strong>.
                </p>

                {/* Section 2 */}
                <h2 id="ton-that">💸 Tổn Thất Thực Tế Mỗi Tháng</h2>

                <p>
                  Mình đã làm việc với 15+ nhà hàng ở TP.HCM và Hà Nội. Đây là những con số thực tế
                  mà họ chia sẻ trước khi tự động hóa:
                </p>

                <StatCard stats={[
                  { value: "3-5 giờ/ngày", label: "thời gian nhập đơn thủ công", sub: "tương đương 1 nhân viên full-time" },
                  { value: "8-15%", label: "đơn bị sai sót", sub: "sai giá, thiếu món, trùng đơn" },
                  { value: "1.5-3 triệu/tháng", label: "chênh lệch khi đối soát", sub: "không biết mất ở đâu" },
                  { value: "2-3 ngày", label: "đối soát cuối tháng", sub: "nhân viên kế toán mất thêm" },
                ]} />

                <p>
                  Tính nhanh: 1 nhân viên lương 6-8 triệu/tháng chỉ để nhập đơn + chênh lệch đối soát 2 triệu/tháng
                  = <strong>bạn đang mất 8-10 triệu/tháng</strong> cho 1 việc mà máy làm được trong 0 giây.
                </p>

                <CalloutBox type="tip">
                  Nếu bạn có 2-3 chi nhánh, nhân con số này lên. Chuỗi 5 chi nhánh mất 40-50 triệu/tháng
                  cho việc nhập đơn thủ công và sai sót đối soát. Đó là tiền thuê được 1 bếp trưởng tốt.
                </CalloutBox>

                {/* Section 3 */}
                <h2 id="giai-phap">⚡ 3 Workflow Đồng Bộ Tự Động</h2>

                <p>
                  Dùng n8n kết hợp webhook và API của các nền tảng delivery, bạn có thể tự động hóa toàn bộ
                  quy trình — từ nhận đơn đến đối soát đến báo cáo. Đây là 3 workflow cốt lõi:
                </p>

                <h3 id="workflow-1">Workflow 1: Đồng Bộ Đơn Real-Time</h3>

                <p>
                  Đây là workflow quan trọng nhất — mỗi khi có đơn mới từ GrabFood hoặc ShopeeFood,
                  n8n tự động nhận và xử lý ngay lập tức.
                </p>

                <StepList steps={[
                  { title: "Đơn mới từ GrabFood/ShopeeFood", desc: "n8n webhook nhận thông tin đơn hàng real-time khi khách đặt" },
                  { title: "Chuẩn hóa dữ liệu", desc: "Chuyển đổi format: tên món, giá, phí ship, giảm giá, phí nền tảng — thành 1 format chung" },
                  { title: "Tự động lưu vào Google Sheet / POS", desc: "Ghi nhận: mã đơn, nguồn (Grab/Shopee), tên khách, danh sách món, tổng tiền, thời gian" },
                  { title: "Thông báo bếp qua Telegram", desc: "Chef nhận order ngay lập tức kèm chi tiết món ăn, ghi chú đặc biệt" },
                  { title: "Cập nhật trạng thái cho khách", desc: "Zalo OA gửi tin: 'Đơn #123 đang được chuẩn bị, dự kiến 25 phút'" },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">🍜</span>, label: "Đơn GrabFood", sub: "Webhook real-time" },
                    { icon: <span className="text-lg">🛵</span>, label: "Đơn ShopeeFood", sub: "Webhook real-time" },
                    { icon: <span className="text-lg">⚡</span>, label: "n8n chuẩn hóa", sub: "Format chung" },
                    { icon: <span className="text-lg">📊</span>, label: "Lưu POS/Sheet", sub: "Tự động 0 giây" },
                    { icon: <span className="text-lg">👨‍🍳</span>, label: "Alert bếp", sub: "Telegram ngay" },
                  ]}
                />

                <CalloutBox type="info" title="Về API của GrabFood và ShopeeFood">
                  <p className="mb-2">
                    GrabFood có <strong>GrabFood Merchant API</strong> cho phép nhận webhook khi có đơn mới.
                    ShopeeFood (nay là ShopeeFood Partner) cũng có API tương tự.
                    Nếu bạn chưa có API access, n8n có thể dùng phương pháp &quot;screen scraping&quot; hoặc
                    kết nối qua email thông báo đơn mới.
                  </p>
                </CalloutBox>

                <p>
                  <strong>Kết quả:</strong> Đơn về → POS cập nhật trong 5 giây. Không ai cần chạm tay.
                  Bếp nhận order qua Telegram ngay lập tức — nhanh hơn cả việc đọc trên tablet app.
                </p>

                <h3 id="workflow-2">Workflow 2: Đối Soát Cuối Ngày Tự Động</h3>

                <p>
                  Mỗi tối 23:00, n8n tự động chạy đối soát giữa dữ liệu bạn ghi và dữ liệu trên app delivery.
                  Bất kỳ chênh lệch nào đều được phát hiện và thông báo ngay.
                </p>

                <StepList steps={[
                  { title: "23:00 — n8n tự động kết xuất", desc: "Lấy dữ liệu đơn hàng từ Google Sheet/POS và từ báo cáo GrabFood/ShopeeFood" },
                  { title: "So khớp từng đơn", desc: "Match theo mã đơn: kiểm tra giá, phí, giảm giá, trạng thái. Phát hiện đơn thiếu, đơn thừa." },
                  { title: "Tạo báo cáo chênh lệch", desc: "Tự động tạo Sheet 'Đối Soát' với cột: mã đơn, nguồn, số tiền bạn ghi, số tiền app, chênh lệch" },
                  { title: "Thông báo quản lý", desc: "Nếu chênh lệch > 100K → Telegram alert cho manager. Kèm link Sheet đối soát." },
                ]} />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    { icon: <span className="text-lg">🕚</span>, label: "23:00 trigger", sub: "Mỗi tối tự động" },
                    { icon: <span className="text-lg">📥</span>, label: "Kết xuất data", sub: "POS + App delivery" },
                    { icon: <span className="text-lg">🔍</span>, label: "So khớp đơn", sub: "Match theo mã đơn" },
                    { icon: <span className="text-lg">📋</span>, label: "Báo cáo chênh lệch", sub: "Sheet tự động" },
                    { icon: <span className="text-lg">🚨</span>, label: "Alert nếu sai", sub: "Telegram → Manager" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả thực tế">
                  Một nhà hàng bún bò ở Quận 1 trước kia mất 2 giờ mỗi tối để đối soát. Sau khi cài workflow này,
                  việc đối soát chạy tự động lúc 23:00 — sáng hôm sau manager chỉ cần xem báo cáo 5 phút.
                  Chênh lệch giảm từ 2.5 triệu/tháng xuống còn 200K/tháng (và phát hiện được cả lỗi từ phía app).
                </CalloutBox>

                <h3 id="workflow-3">Workflow 3: Báo Cáo Kênh Bán Hàng</h3>

                <p>
                  Bạn cần biết: kênh nào bán chạy nhất? GrabFood hay ShopeeFood? Tại quán hay delivery?
                  Workflow này tự động tổng hợp và gửi báo cáo hằng tuần.
                </p>

                <StepList steps={[
                  { title: "Thứ 2 hàng tuần — tổng hợp dữ liệu", desc: "n8n lấy data từ POS: phân theo kênh GrabFood, ShopeeFood, tại quán, Zalo order" },
                  { title: "Tính toán chỉ số", desc: "Doanh thu theo kênh, số đơn, giá trị đơn trung bình, % phí nền tảng, lợi nhuận thực" },
                  { title: "Tạo báo cáo tự động", desc: "Google Sheet dashboard với biểu đồ: pie chart theo kênh, trend tuần, top món bán chạy" },
                  { title: "Gửi Telegram/Zalo cho chủ quán", desc: "Summary: 'Tuần này: GrabFood 45 triệu (120 đơn), ShopeeFood 28 triệu (85 đơn), Tại quán 35 triệu'" },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">📅</span>, label: "Thứ 2 trigger", sub: "Hàng tuần tự động" },
                    { icon: <span className="text-lg">📊</span>, label: "Tổng hợp data", sub: "Tất cả kênh" },
                    { icon: <span className="text-lg">📈</span>, label: "Dashboard", sub: "Chart + số liệu" },
                    { icon: <span className="text-lg">💬</span>, label: "Gửi báo cáo", sub: "Telegram/Zalo" },
                  ]}
                />

                <p>
                  Báo cáo này giúp bạn ra quyết định: nên đầu tư marketing vào kênh nào?
                  Món nào bán chạy trên GrabFood nhưng không bán trên ShopeeFood — cần push không?
                  Phí nền tảng kênh nào cao quá — có nên giảm?
                </p>

                {/* Section 4 */}
                <h2 id="tich-hop">🔗 Tích Hợp Với Hệ Thống Hiện Tại</h2>

                <p>
                  Bạn không cần thay đổi POS hay phần mềm kế toán. n8n kết nối với những gì bạn đang dùng:
                </p>

                <ComparisonTable
                  headers={["Hệ thống", "Cách kết nối", "Thời gian setup"]}
                  highlightCol={2}
                  rows={[
                    ["KiotViet", "API chính thức — đồng bộ đơn, tồn kho, sản phẩm", "1-2 ngày"],
                    ["Sapo POS", "API chính thức — đồng bộ đơn hàng và khách hàng", "1-2 ngày"],
                    ["Google Sheets", "n8n native node — ghi/đọc tức thì", "30 phút"],
                    ["MISA", "API hoặc import CSV tự động", "2-3 ngày"],
                    ["Excel/Sổ tay", "Chuyển sang Google Sheet trước, rồi kết nối n8n", "1 ngày"],
                  ]}
                />

                <CalloutBox type="tip">
                  <strong>Bắt đầu với Google Sheets trước</strong> nếu bạn chưa có POS. Sheet làm trung gian,
                  n8n ghi đơn vào Sheet, bạn đọc Sheet. Sau này upgrade lên KiotViet/Sapo thì chỉ cần
                  thêm 1 bước trong workflow — không cần làm lại từ đầu.
                </CalloutBox>

                <p>
                  Với các nhà hàng đang dùng <a href="/blog/zalo-oa-fnb">Zalo OA để chăm sóc khách</a>,
                  bạn có thể kết hợp: đơn delivery về → đồng bộ POS → đồng thời gửi Zalo xác nhận cho khách.
                  Tất cả trong 1 workflow duy nhất.
                </p>

                {/* Section 5 */}
                <h2 id="truoc-sau">📊 Trước Và Sau Khi Tự Động Hóa</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Thủ công 100%",
                    items: [
                      "Nhân viên nhìn tablet GrabFood, ghi tay vào sổ/POS",
                      "Mỗi đơn mất 2-3 phút để nhập",
                      "Cuối ngày đối soát bằng tay — mất 1-2 giờ",
                      "Chênh lệch 1-3 triệu/tháng không biết mất ở đâu",
                      "Không biết kênh nào lời, kênh nào lỗ",
                      "Bếp đợi order — khách đợi lâu — review xấu",
                    ],
                  }}
                  after={{
                    title: "Sau — n8n đồng bộ tự động",
                    items: [
                      "Đơn về → POS/Sheet cập nhật trong 5 giây",
                      "0 phút nhập tay — nhân viên tập trung phục vụ",
                      "Đối soát chạy tự động lúc 23:00 mỗi tối",
                      "Chênh lệch giảm 90% — phát hiện lỗi ngay",
                      "Báo cáo kênh bán hàng hàng tuần tự động",
                      "Bếp nhận order qua Telegram — nhanh hơn 10x",
                    ],
                  }}
                />

                <StatCard stats={[
                  { value: "0 phút", label: "nhập đơn thủ công", sub: "100% tự động", color: "text-accent" },
                  { value: "-90%", label: "chênh lệch đối soát", sub: "từ 2.5 triệu → 200K/tháng" },
                  { value: "5 giây", label: "đơn → POS cập nhật", sub: "thay vì 2-3 phút" },
                  { value: "3-5 giờ", label: "nhân viên tiết kiệm/ngày", sub: "tập trung việc khác" },
                ]} />

                {/* Section 6 */}
                <h2 id="so-sanh">⚖️ So Sánh Chi Tiết</h2>

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "Tự động (n8n)"]}
                  highlightCol={2}
                  rows={[
                    ["Nhập đơn delivery", "2-3 phút/đơn, nhân viên ghi tay", "Tự động trong 5 giây, 0 người"],
                    ["Đối soát cuối ngày", "1-2 giờ, sổ tay vs app", "Tự động 23:00, báo cáo sáng"],
                    ["Chênh lệch/tháng", "1-3 triệu không rõ nguyên nhân", "< 200K, phát hiện lỗi ngay"],
                    ["Báo cáo kênh bán", "Không có hoặc làm thủ công cuối tháng", "Tự động hàng tuần, có chart"],
                    ["Thông báo bếp", "Nhân viên chạy vào báo", "Telegram tự động < 5 giây"],
                    ["Chi phí nhân sự", "1 FTE (6-8 triệu/tháng)", "0 đồng thêm"],
                    ["Sai sót", "8-15% đơn sai", "< 1% (chỉ lỗi từ app)"],
                    ["Hoạt động", "Giờ làm việc", "24/7 kể cả lễ tết"],
                  ]}
                />

                {/* Section 7 */}
                <h2 id="bat-dau">🚀 Bắt Đầu Như Thế Nào?</h2>

                <StepList steps={[
                  { title: "Kiểm kê hệ thống hiện tại", desc: "Bạn đang dùng gì? KiotViet, Sapo, Google Sheet hay sổ tay? Liệt kê tất cả." },
                  { title: "Bắt đầu với Workflow 1 (đồng bộ đơn)", desc: "Đây là workflow có ROI cao nhất. Setup 1-2 ngày, thấy kết quả ngay lập tức." },
                  { title: "Thêm Workflow 2 (đối soát) sau 1 tuần", desc: "Khi data đơn đã chạy ổn trên Sheet/POS, thêm đối soát tự động." },
                  { title: "Thêm Workflow 3 (báo cáo kênh) sau 1 tháng", desc: "Cần ít nhất 4 tuần data để báo cáo có ý nghĩa." },
                ]} />

                <p>
                  Nếu bạn đang ở giai đoạn đầu của tự động hóa, đọc thêm{" "}
                  <a href="/blog/lo-trinh-tu-dong-hoa-sme">Lộ trình tự động hóa cho SME</a> để hiểu
                  toàn cảnh trước khi bắt tay vào làm.
                </p>

                <p>
                  Và nếu bạn đã có Zalo OA, kết hợp với{" "}
                  <a href="/blog/zalo-oa-fnb">workflow Zalo OA cho F&B</a> để đồng thời
                  đồng bộ đơn và chăm sóc khách hàng — tạo trải nghiệm hoàn chỉnh.
                </p>

                <p>
                  Để biết chi phí chính xác và thời gian setup, đọc thêm{" "}
                  <a href="/blog/bao-cao-doanh-thu-tu-dong">bài về báo cáo doanh thu tự động</a> —
                  nhiều concept tương tự áp dụng được cho nhà hàng.
                </p>

                <CalloutBox type="info" title="Không biết bắt đầu từ đâu?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — mình sẽ xem bạn đang dùng hệ thống gì,
                    đơn hàng từ kênh nào, và đưa ra workflow cụ thể nhất cho nhà hàng/cafe của bạn.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* Inline CTA */}
                <BlogInlineCTA category="F&B" slug="dong-bo-don-grabfood-shopee-food" />

                {/* FAQ */}
                <h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

                <FAQ items={[
                  {
                    q: "GrabFood và ShopeeFood có API cho phép kết nối không?",
                    a: "Có. GrabFood có Merchant Integration API, ShopeeFood có Partner API. Tuy nhiên cần đăng ký và được duyệt. Trong lúc chờ, n8n có thể đọc email thông báo đơn mới hoặc dùng phương pháp khác để nhận data."
                  },
                  {
                    q: "Nếu mình chỉ có Google Sheet, không có POS thì sao?",
                    a: "Hoàn toàn được! Google Sheet là điểm bắt đầu tuyệt vời. n8n ghi đơn vào Sheet, bạn đọc Sheet. Chi phí $0. Khi nào sẵn sàng upgrade lên KiotViet/Sapo thì chỉ cần sửa 1 bước trong workflow."
                  },
                  {
                    q: "Mất bao lâu để setup toàn bộ 3 workflow?",
                    a: "Workflow 1 (đồng bộ đơn): 1-2 ngày. Workflow 2 (đối soát): 1 ngày. Workflow 3 (báo cáo): nửa ngày. Tổng cộng 3-4 ngày làm việc. Nên bắt đầu từ WF1 trước, chạy ổn rồi thêm WF2, WF3."
                  },
                  {
                    q: "Chi phí hàng tháng là bao nhiêu?",
                    a: "n8n self-host: $0-20/tháng (VPS). n8n Cloud: từ $24/tháng. Google Sheet: miễn phí. Telegram bot: miễn phí. Tổng chi phí: dưới 500K/tháng — rẻ hơn nhiều so với 1 nhân viên nhập liệu."
                  },
                  {
                    q: "Có bị mất đơn khi hệ thống automation lỗi không?",
                    a: "n8n có Error Handling workflow — nếu 1 đơn không xử lý được, n8n gửi alert ngay qua Telegram. Bạn cũng vẫn nhận thông báo trên tablet app như bình thường, nên không bao giờ mất đơn."
                  },
                  {
                    q: "Baemin đã đóng cửa, còn Baemin cũ thì sao?",
                    a: "Baemin đã ngừng hoạt động tại VN từ 2023. Nếu bạn có data Baemin cũ cần đối soát, n8n vẫn import được từ file CSV/Excel. Nhưng workflow mới chỉ cần tập trung GrabFood + ShopeeFood."
                  },
                  {
                    q: "Nhà hàng mình chỉ có 30-50 đơn/ngày, có cần automation không?",
                    a: "Có! 30-50 đơn x 2-3 phút = 1-2.5 giờ/ngày nhập tay. Nhân 30 ngày = 30-75 giờ/tháng. Đó vẫn là một người làm việc bán thời gian. Và sai sót đối soát không phụ thuộc số đơn — 1 đơn sai cũng ảnh hưởng."
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Đồng Bộ Đơn GrabFood & ShopeeFood Tự Động" slug="dong-bo-don-grabfood-shopee-food" date="2026-04-02" />
        </article>
      </main>
      <Footer />
    </>
  );
}
