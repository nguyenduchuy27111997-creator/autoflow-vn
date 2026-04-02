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
  title: "Tự Làm Automation Hay Thuê Chuyên Gia? So Sánh Chi Tiết 2026",
  description:
    "Tự làm automation hay thuê agency? So sánh chi phí, thời gian, rủi ro cho SME Việt Nam 2026: DIY $9,240/năm vs Agency $2,900–$4,200. Phân tích trung thực.",
  keywords: [
    "tự làm automation",
    "thuê automation agency",
    "automation cho doanh nghiệp",
    "automation việt nam",
    "chi phí automation",
    "thuê chuyên gia automation",
    "diy automation",
    "automation agency việt nam",
  ],
};

const tocItems = [
  { id: "van-de", text: "Bài toán: tốn tiền ở đâu nhiều hơn?", level: 2 },
  { id: "ba-lua-chon", text: "3 lựa chọn chính", level: 2 },
  { id: "tu-lam", text: "Lựa chọn 1: Tự làm (DIY)", level: 3 },
  { id: "thue-freelancer", text: "Lựa chọn 2: Thuê freelancer", level: 3 },
  { id: "thue-agency", text: "Lựa chọn 3: Thuê agency", level: 3 },
  { id: "so-sanh-chi-phi", text: "So sánh chi phí thực tế", level: 2 },
  { id: "quy-trinh-agency", text: "Quy trình làm việc với agency", level: 2 },
  { id: "truoc-sau", text: "Trước và sau khi thuê agency", level: 2 },
  { id: "ma-tran", text: "Ma trận quyết định theo quy mô", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function TuLamHayThueBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="tu-lam-hay-thue" title="Tự Làm Automation Hay Thuê Chuyên Gia?" />
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
              <span className="text-slate-600 truncate max-w-[300px]">Kiến thức</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                Kiến thức
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Automation
              </span>
              <span className="text-xs text-slate-500">12 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Tự Làm Automation Hay Thuê Chuyên Gia?{" "}
              <span className="gradient-text">So Sánh Chi Tiết 2026</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Chủ doanh nghiệp thường nghĩ{" "}
              <strong className="text-slate-700">tự làm sẽ tiết kiệm hơn</strong>. Nhưng khi tính
              đủ thời gian học, thử-sai, và chi phí cơ hội — con số thực tế là{" "}
              <strong className="text-slate-700">$9,240/năm</strong> cho DIY, so với{" "}
              <strong className="text-slate-700">$2,900–$4,200 một lần</strong> khi thuê agency. Đây
              là phân tích trung thực nhất bạn sẽ đọc về quyết định này.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Key stats */}
                <StatCard stats={[
                  { value: "$9,240", label: "Chi phí DIY/năm", sub: "Tính đủ thời gian + tool + sai sót", color: "text-red-500" },
                  { value: "$2,900", label: "Agency một lần (cơ bản)", sub: "3–5 workflow, done-for-you", color: "text-green-600" },
                  { value: "$10–40", label: "Freelancer VN/giờ", sub: "Thị trường nội địa 2026" },
                  { value: "3–6 tháng", label: "Thời gian để thành thạo DIY", sub: "Nếu không có nền tảng kỹ thuật" },
                ]} />

                {/* Section 1 - Problem */}
                <h2 id="van-de">Bài Toán: Bạn Đang Tốn Tiền Ở Đâu Nhiều Hơn?</h2>

                <p>
                  Hãy thành thật: lý do bạn muốn tự làm automation thường là{" "}
                  <strong>"để tiết kiệm tiền"</strong>. Nhưng bài toán thực tế phức tạp hơn rất nhiều.
                  Tự làm không có nghĩa là miễn phí — nó chỉ có nghĩa là bạn trả bằng{" "}
                  <em>thời gian của mình</em> thay vì bằng tiền mặt.
                </p>

                <p>
                  Một chủ doanh nghiệp SME điển hình tại Việt Nam có thu nhập quy đổi khoảng{" "}
                  <strong>$15–$30/giờ</strong> (tương đương 375.000–750.000 đồng). Nếu bạn dành 10
                  giờ/tuần để học n8n, thiết kế workflow, debug lỗi, và maintain — đó là{" "}
                  <strong>$7,800–$15,600/năm</strong> chi phí cơ hội. Chưa tính phí tool, VPS, và
                  những lần workflow hỏng làm trễ đơn hàng.
                </p>

                <CalloutBox type="warning" title="Cái bẫy tư duy 'tự làm cho rẻ'">
                  Nhiều chủ doanh nghiệp tính: "n8n miễn phí, VPS $5/tháng, tôi chỉ tốn $60/năm."
                  Nhưng họ quên tính <strong>150+ giờ học trong năm đầu</strong>, các lần workflow
                  chạy sai làm mất dữ liệu, và chi phí cơ hội của thời gian không tập trung vào core
                  business. Con số thực gần $9,240/năm hơn $60.
                </CalloutBox>

                <p>
                  Điều đó không có nghĩa là bạn <em>không nên</em> tự làm. Nó phụ thuộc vào{" "}
                  <strong>background kỹ thuật, quy mô doanh nghiệp, loại workflow</strong>, và quan
                  trọng nhất — thời gian của bạn đáng giá bao nhiêu so với việc tập trung phát triển
                  kinh doanh.
                </p>

                {/* Section 2 - 3 options */}
                <h2 id="ba-lua-chon">3 Lựa Chọn Chính: Phân Tích Thực Tế</h2>

                <h3 id="tu-lam">Lựa Chọn 1: Tự Làm (DIY)</h3>

                <p>
                  Tự làm automation nghĩa là bạn tự học nền tảng (n8n, Make, Zapier...), tự thiết
                  kế workflow, tự debug khi có lỗi, và tự maintain về lâu dài. Phù hợp nhất khi
                  bạn có nền tảng kỹ thuật hoặc có người trong team có thể đảm nhận.
                </p>

                <StepList steps={[
                  { title: "Chi phí tool: $60–$300/năm", desc: "n8n self-hosted ~$60/năm (VPS), Make Starter $9/tháng, Zapier Pro $20/tháng. Tool không phải phần đắt nhất." },
                  { title: "Thời gian học ban đầu: 40–80 giờ", desc: "Để làm được workflow thực tế cho doanh nghiệp, không phải chỉ hello world. Người có nền IT: 2–3 tuần. Người không có background kỹ thuật: 2–3 tháng." },
                  { title: "Thời gian maintain: 3–5 giờ/tuần", desc: "Kiểm tra workflow chạy đúng, debug khi API thay đổi, thêm tính năng mới khi business phát triển. Tích lũy 150–260 giờ/năm." },
                  { title: "Chi phí sai sót: khó đo lường", desc: "Workflow hỏng gửi nhầm email cho 500 khách, hoặc trừ kho sai → mất uy tín, mất khách. Chi phí thực tế thường lớn hơn con số bạn nghĩ." },
                ]} />

                <CalloutBox type="info" title="DIY phù hợp khi...">
                  Bạn hoặc team có background developer/IT. Bạn muốn hiểu sâu hệ thống của mình.
                  Workflow đơn giản (2–3 bước, ít edge case). Bạn có thời gian đầu tư 3–6 tháng đầu
                  để học và thử nghiệm. Doanh nghiệp dưới 10 người, workflow không phức tạp.
                </CalloutBox>

                <h3 id="thue-freelancer">Lựa Chọn 2: Thuê Freelancer</h3>

                <p>
                  Thị trường freelancer automation tại Việt Nam đang phát triển mạnh. Bạn có thể
                  tìm trên Upwork (quốc tế), TopDev, ITviec, hoặc các group Facebook/Zalo chuyên
                  về automation.
                </p>

                <StatCard stats={[
                  { value: "$10–20/hr", label: "Freelancer VN (junior)", sub: "1–2 năm kinh nghiệm n8n/Make", color: "text-blue-500" },
                  { value: "$25–40/hr", label: "Freelancer VN (senior)", sub: "3+ năm, portfolio thực tế", color: "text-violet-600" },
                  { value: "$50–80/hr", label: "Freelancer quốc tế (Upwork)", sub: "Từ Đông Âu, Philippines, Ấn Độ" },
                  { value: "20–40h", label: "Giờ cho 3–5 workflow cơ bản", sub: "Tùy độ phức tạp và tích hợp" },
                ]} />

                <p>
                  Với freelancer VN senior ở mức $30/giờ và 30 giờ build 3–5 workflow cơ bản —
                  bạn nhìn vào khoảng <strong>$900 một lần</strong>. Nghe có vẻ hợp lý, nhưng có
                  những rủi ro cần cân nhắc:
                </p>

                <StepList steps={[
                  { title: "Rủi ro chất lượng: thiếu documentation", desc: "Freelancer thường không viết tài liệu. Nếu họ biến mất, bạn nhận lại một hệ thống không ai hiểu được — kể cả bạn." },
                  { title: "Phụ thuộc 1 người", desc: "Khi workflow hỏng lúc cao điểm, nếu freelancer không pick up máy — bạn kẹt. Không có backup, không có SLA, không có cam kết." },
                  { title: "Không có chiến lược dài hạn", desc: "Freelancer giải quyết task được giao. Họ không tư vấn 'workflow này nên thiết kế thế nào để scale sau 6 tháng'. Bạn có thể bị build debt." },
                  { title: "Chi phí maintain phát sinh", desc: "Mỗi lần cần sửa/thêm tính năng, bạn phải re-hire hoặc trả thêm. Sau 1 năm, tổng chi phí thường gấp 2–3 lần chi phí build ban đầu." },
                ]} />

                <CalloutBox type="tip" title="Khi nào thuê freelancer là lựa chọn hợp lý?">
                  Bạn có người nội bộ biết kỹ thuật đủ để maintain sau khi freelancer build.
                  Workflow đơn giản, ít edge case, không cần support dài hạn. Budget dưới 10 triệu
                  cho một project nhỏ. Bạn đã biết chính xác mình muốn gì và chỉ cần người thực thi.
                </CalloutBox>

                <h3 id="thue-agency">Lựa Chọn 3: Thuê Agency</h3>

                <p>
                  Agency automation cung cấp dịch vụ trọn gói: tư vấn, thiết kế, build, test, triển
                  khai, và support sau triển khai. Đây là mô hình khác hoàn toàn về trách nhiệm và
                  cam kết so với freelancer.
                </p>

                <p>
                  Thị trường agency automation tại Việt Nam 2026 có hai phân khúc chính:
                </p>

                <ComparisonTable
                  headers={["Phân khúc Agency", "Chi phí", "Scope điển hình", "Phù hợp"]}
                  highlightCol={-1}
                  rows={[
                    ["Agency nhỏ/boutique (VN)", "$1,500–$4,200/project", "3–8 workflow, 30–60 ngày", "SME 10–50 người, 1–2 phòng ban"],
                    ["Agency mid-size (VN)", "$4,000–$10,000/project", "8–20 workflow, toàn doanh nghiệp", "SME 50–200 người, đa phòng ban"],
                    ["Retainer (ongoing support)", "$500–$2,000/tháng", "Maintain + cải tiến liên tục", "Doanh nghiệp cần scale nhanh"],
                    ["Agency quốc tế", "$10,000–$50,000+/project", "Enterprise-grade, full audit", "Tập đoàn, FDI, compliance cao"],
                  ]}
                />

                <p>
                  Với SME Việt Nam điển hình (10–50 người, cần tự động hóa 3–6 quy trình cốt lõi),
                  budget thực tế dao động{" "}
                  <strong>$2,900–$4,200 cho project cơ bản</strong>, bao gồm tư vấn, build, và
                  3 tháng support sau triển khai.
                </p>

                <CalloutBox type="success" title="Agency khác freelancer ở điểm nào?">
                  <strong>Cam kết kết quả, không phải giờ công.</strong> Agency ký hợp đồng theo
                  outcome: "Workflow xử lý đơn hàng chạy ổn định, kết nối MISA + Zalo OA, trong
                  30 ngày." Nếu không đạt, agency chịu trách nhiệm sửa — không tính thêm phí.
                  Freelancer tính tiền theo giờ, kể cả giờ họ dùng để debug lỗi do họ tạo ra.
                </CalloutBox>

                {/* Section 3 - Cost comparison */}
                <h2 id="so-sanh-chi-phi">So Sánh Chi Phí Thực Tế: Năm Đầu Tiên</h2>

                <p>
                  Phân tích dưới đây dựa trên profile điển hình: SME Việt Nam, 20 nhân viên, cần
                  tự động hóa 4 quy trình (xử lý đơn hàng, onboarding khách hàng, báo cáo tự động,
                  thông báo Zalo). Chủ doanh nghiệp có giá trị thời gian $20/giờ.
                </p>

                <ComparisonTable
                  headers={["Khoản chi phí", "DIY", "Freelancer", "Agency"]}
                  highlightCol={3}
                  rows={[
                    ["Phí tool/platform", "$120/năm", "$120/năm", "Included"],
                    ["Build ban đầu (người ngoài)", "$0", "$900–$1,200", "$2,900–$4,200"],
                    ["Thời gian học (quy đổi tiền)", "$3,000 (150h × $20)", "$0", "$0"],
                    ["Thời gian maintain/năm", "$3,120 (156h × $20)", "$800–$1,500", "Included 3 tháng"],
                    ["Chi phí sai sót ước tính", "$500–$3,000", "$200–$800", "Thấp (có SLA)"],
                    ["Documentation & handover", "$0 (tự làm)", "Thường không có", "Có, đầy đủ"],
                    ["Tổng năm đầu (ước tính)", "$6,740–$9,240", "$2,020–$3,620", "$2,900–$4,200"],
                  ]}
                />

                <StatCard stats={[
                  { value: "$9,240", label: "DIY — chi phí thực năm đầu", sub: "Bao gồm thời gian + tool + sai sót", color: "text-red-500" },
                  { value: "$3,620", label: "Freelancer — chi phí năm đầu", sub: "Rủi ro cao về chất lượng & maintain", color: "text-yellow-600" },
                  { value: "$4,200", label: "Agency — chi phí năm đầu", sub: "Trọn gói, có SLA, có documentation", color: "text-green-600" },
                  { value: "Năm 2+", label: "Agency thường rẻ hơn DIY", sub: "DIY vẫn tốn $3,000+/năm để maintain", color: "text-blue-500" },
                ]} />

                <CalloutBox type="warning" title="Tại sao DIY đắt hơn nhiều người nghĩ?">
                  Chi phí DIY không nằm ở phần mềm — nằm ở <strong>thời gian bị lấy đi khỏi
                  core business</strong>. Mỗi giờ bạn debug n8n là một giờ bạn không dành cho
                  khách hàng, sản phẩm, hay chiến lược. Với doanh nghiệp đang tăng trưởng,
                  chi phí cơ hội này thường lớn hơn tiền trả cho agency.
                </CalloutBox>

                {/* Section 4 - Agency process */}
                <h2 id="quy-trinh-agency">Quy Trình Làm Việc Với Agency — Bạn Kỳ Vọng Gì?</h2>

                <p>
                  Nhiều chủ doanh nghiệp ngại thuê agency vì lo không biết tiền đi đâu, hoặc sợ
                  mất kiểm soát. Thực tế, quy trình làm việc với agency chuyên nghiệp rất có cấu
                  trúc và minh bạch:
                </p>

                <WorkflowFlow
                  accentColor="#7C3AED"
                  title="Quy trình triển khai automation với agency"
                  subtitle="Từ audit đến vận hành — thường mất 3–6 tuần cho SME điển hình"
                  steps={[
                    { icon: <span className="text-lg">🔍</span>, label: "Audit & Discovery", sub: "Hiểu quy trình hiện tại, xác định điểm đau, ưu tiên hóa workflow" },
                    { icon: <span className="text-lg">🗺️</span>, label: "Blueprint & Scope", sub: "Thiết kế kiến trúc, confirm tool stack, ký hợp đồng rõ ràng" },
                    { icon: <span className="text-lg">⚙️</span>, label: "Build & Test", sub: "Build từng workflow, test với dữ liệu thực, nhận feedback liên tục" },
                    { icon: <span className="text-lg">🚀</span>, label: "Go Live & Handover", sub: "Triển khai, train team vận hành, bàn giao documentation đầy đủ" },
                    { icon: <span className="text-lg">🛡️</span>, label: "Support & Optimize", sub: "Monitor, fix lỗi, cải tiến dựa trên dữ liệu thực tế sau live" },
                  ]}
                />

                <p>
                  Điểm khác biệt quan trọng của agency so với freelancer là ở bước{" "}
                  <strong>Audit & Discovery</strong>. Thay vì nhận spec và build ngay, agency đầu
                  tư thời gian hiểu deep vào quy trình của bạn — thường 2–4 buổi làm việc để map
                  out toàn bộ luồng dữ liệu, xác định bottleneck thực sự, và đề xuất thứ tự ưu
                  tiên hợp lý.
                </p>

                <CalloutBox type="info" title="Bạn nhận được gì khi kết thúc project với agency?">
                  <strong>1. Workflow đang chạy và đã được test</strong> với dữ liệu thực tế của bạn.
                  <br /><strong>2. Documentation đầy đủ</strong>: sơ đồ flow, hướng dẫn vận hành, cách
                  xử lý các lỗi thường gặp.
                  <br /><strong>3. Training session</strong> cho team của bạn: biết cách monitor, biết
                  phải làm gì khi có vấn đề.
                  <br /><strong>4. Support cam kết</strong>: ít nhất 30–90 ngày hỗ trợ sau go-live để
                  đảm bảo ổn định.
                </CalloutBox>

                {/* Section 5 - Before/After */}
                <h2 id="truoc-sau">Trước và Sau Khi Thuê Agency</h2>

                <BeforeAfter
                  before={{
                    title: "Trước khi thuê — Thực tế phổ biến",
                    items: [
                      "Chủ doanh nghiệp tự mày mò YouTube/tutorial, mất 2–3 tháng chưa xong",
                      "Workflow tự build hỏng ở cao điểm, không biết debug từ đâu",
                      "Freelancer build xong không có documentation, đổi người là mất trắng",
                      "Mỗi workflow mới lại phải thuê người mới, chi phí tích lũy không kiểm soát",
                      "Team không biết vận hành, mọi vấn đề đều phụ thuộc 1 người bên ngoài",
                      "3 tháng sau live, 30% workflow đã không còn hoạt động đúng vì API thay đổi",
                    ],
                  }}
                  after={{
                    title: "Sau khi thuê agency — Kết quả thực tế",
                    items: [
                      "Project xong trong 4 tuần, chủ doanh nghiệp chỉ tham gia 3 buổi review",
                      "Workflow đã được stress-test, có error handling cho mọi edge case",
                      "Documentation đầy đủ, team nội bộ tự xử lý 80% vấn đề vận hành",
                      "Hệ thống được thiết kế để scale — thêm workflow mới dễ dàng, không build lại từ đầu",
                      "3 tháng support sau live: agency tự monitor và fix trước khi bạn biết có vấn đề",
                      "ROI rõ ràng: đo được số giờ nhân sự tiết kiệm, số lỗi thủ công giảm",
                    ],
                  }}
                />

                {/* Section 6 - Decision matrix by business size */}
                <h2 id="ma-tran">Ma Trận Quyết Định Theo Quy Mô Doanh Nghiệp</h2>

                <p>
                  Không có công thức chung. Quyết định đúng phụ thuộc vào nhiều yếu tố —
                  nhưng quy mô doanh nghiệp là điểm khởi đầu tốt nhất để phân tích:
                </p>

                <ComparisonTable
                  headers={["Quy mô & tình huống", "Lựa chọn tốt nhất", "Lý do cụ thể"]}
                  highlightCol={-1}
                  rows={[
                    ["Solopreneur / 1–5 người, founder biết IT", "DIY", "Thời gian nhiều, cần tiết kiệm, tech background có sẵn"],
                    ["Solopreneur / 1–5 người, không biết IT", "Freelancer hoặc Agency nhỏ", "Không nên đầu tư thời gian học khi core business cần focus"],
                    ["Startup 5–20 người, có developer trong team", "DIY với framework chuẩn", "Developer setup, founder không cần học, có người maintain"],
                    ["SME 10–50 người, không có IT nội bộ", "Agency (khuyến nghị)", "ROI rõ nhất: tiết kiệm thời gian quản lý, có documentation"],
                    ["SME 50–200 người, nhiều phòng ban", "Agency mid-size + retainer", "Cần tư vấn chiến lược, không chỉ build workflow đơn lẻ"],
                    ["Cần 1–2 workflow đơn giản, budget dưới 5 triệu", "Freelancer có kinh nghiệm", "Project nhỏ, freelancer đủ nếu bạn biết maintain sau đó"],
                    ["Workflow phức tạp, nhiều tích hợp Việt Nam", "Agency", "MISA + Zalo OA + KiotViet cần expertise cụ thể"],
                    ["Đã có automation nhưng muốn tối ưu", "Agency (audit)", "Review và refactor thường hiệu quả hơn xây mới"],
                    ["Compliance / bảo mật dữ liệu cao", "Agency với cam kết SLA", "Freelancer hiếm khi có quy trình security chuyên nghiệp"],
                    ["Budget cực hạn, timeline dài", "DIY có lộ trình học", "Đầu tư 3 tháng học bài bản, sau đó tự build và maintain"],
                  ]}
                />

                <p>
                  Nếu bạn vẫn chưa chắc chắn sau khi đọc ma trận trên — câu hỏi đơn giản nhất
                  để tự hỏi là: <strong>"Nếu tôi bỏ 80 giờ trong 3 tháng tới, tôi nên dùng thời
                  gian đó để học automation hay để phát triển doanh thu?"</strong> Câu trả lời
                  thường tự nó nói lên lựa chọn đúng.
                </p>

                <CalloutBox type="success" title="Lời khuyên thực tế từ góc độ agency">
                  Chúng tôi thường gặp khách hàng đã thử DIY 4–6 tháng, sau đó đến với agency.
                  Điểm chung: họ mất thời gian, build một số workflow hoạt động được nhưng không có
                  cấu trúc, và kiệt sức với việc maintain. Nếu bạn nhận ra mình đang trong tình
                  huống đó — đó là tín hiệu tốt để đánh giá lại. Tham khảo{" "}
                  <a href="/blog/lo-trinh-tu-dong-hoa-sme">framework 5 giai đoạn automation</a> để
                  xác định đúng thời điểm cần chuyên gia.
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline mt-2 block"
                  >
                    Đặt lịch audit miễn phí 30 phút →
                  </a>
                </CalloutBox>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={[
                  {
                    q: "Tôi không có background IT — có tự học automation được không?",
                    a: "Được, nhưng cần thực tế về thời gian. Với n8n hoặc Make, người không có IT background thường cần 60–120 giờ để build được workflow thực tế. Nếu bạn có thể dành 2–3 giờ/ngày trong 1–2 tháng, hoàn toàn khả thi. Nếu không có thời gian đó, thuê người làm sẽ tiết kiệm hơn về tổng thể.",
                  },
                  {
                    q: "Chi phí agency $2,900–$4,200 là cho bao nhiêu workflow?",
                    a: "Ở phân khúc SME Việt Nam, mức đó thường bao gồm 3–5 workflow cốt lõi (ví dụ: xử lý đơn hàng, onboarding khách, báo cáo tự động, thông báo Zalo OA). Tùy agency và độ phức tạp, con số có thể cao hơn hoặc thấp hơn. Quan trọng hơn là những gì included: documentation, training, và support sau go-live.",
                  },
                  {
                    q: "Nếu thuê agency, sau này tôi có bị 'khóa' vào họ không?",
                    a: "Agency chuyên nghiệp bàn giao toàn bộ: source workflow, documentation, quyền truy cập hệ thống — mọi thứ là của bạn. Bạn có thể tiếp tục tự maintain, thuê người khác, hoặc giữ agency hỗ trợ. Hỏi về điều này trước khi ký hợp đồng: 'Nếu tôi dừng hợp tác, tôi nhận được những gì?'",
                  },
                  {
                    q: "Freelancer trên Upwork có đáng tin hơn freelancer Việt Nam không?",
                    a: "Không nhất thiết. Freelancer VN thường am hiểu hơn về context Việt Nam (MISA, KiotViet, Zalo OA, VNPay), có thể giao tiếp dễ hơn, và chi phí thấp hơn. Upwork có hệ thống review nhưng không đảm bảo chất lượng. Quan trọng hơn là kiểm tra portfolio thực tế, hỏi reference, và làm pilot project nhỏ trước.",
                  },
                  {
                    q: "Retainer agency $500–$2,000/tháng — có đáng không?",
                    a: "Đáng nếu bạn cần cải tiến liên tục: thêm workflow mới mỗi tháng, tích hợp khi business thay đổi, và có người chịu trách nhiệm khi hệ thống gặp vấn đề. Không đáng nếu workflow đã ổn định và bạn chỉ cần maintain — trong trường hợp đó, trả theo sự cố (~$50–$100/vấn đề) hiệu quả hơn.",
                  },
                  {
                    q: "Tôi đã tự build nhưng hệ thống đang lộn xộn — có nên thuê agency refactor không?",
                    a: "Thường là có. Audit + refactor thường rẻ hơn xây lại từ đầu và ít rủi ro hơn (bạn đã biết workflow hoạt động thế nào). Agency sẽ đánh giá những gì đang chạy tốt, những gì cần sửa, và thiết kế lại architecture để dễ maintain về lâu dài. Đặt lịch audit để có đánh giá cụ thể cho hệ thống của bạn.",
                  },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="Tự Làm Hay Thuê Chuyên Gia?" slug="tu-lam-hay-thue" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
