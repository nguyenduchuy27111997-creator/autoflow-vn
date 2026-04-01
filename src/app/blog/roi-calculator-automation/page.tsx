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
  title: "ROI Calculator: Tính Tiết Kiệm Khi Tự Động Hóa — Công Thức + Ví Dụ Thực Tế",
  description:
    "Công thức ROI automation đầy đủ. 3 ví dụ tính toán thực tế cho e-commerce, phòng khám, agency. Payback 3-6 tháng, ROI 544% marketing automation. Tính tiết kiệm cho doanh nghiệp của bạn.",
  keywords: [
    "roi automation calculator",
    "tính toán tiết kiệm automation",
    "roi n8n",
    "automation đáng đầu tư không",
    "payback period automation",
    "tiết kiệm chi phí automation",
  ],
};

const tocItems = [
  { id: "van-de", text: "Tại sao ROI automation thường bị đánh giá sai?", level: 2 },
  { id: "cong-thuc", text: "Công thức ROI đầy đủ", level: 2 },
  { id: "vi-du-1", text: "Ví dụ 1: E-commerce 500 đơn/tháng", level: 3 },
  { id: "vi-du-2", text: "Ví dụ 2: Phòng khám 80 bệnh nhân/ngày", level: 3 },
  { id: "vi-du-3", text: "Ví dụ 3: Agency marketing 15 client", level: 3 },
  { id: "benchmark", text: "Bảng benchmark theo ngành", level: 2 },
  { id: "tu-tinh", text: "Cách tự tính cho doanh nghiệp bạn", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "ket-luan", text: "Kết luận", level: 2 },
];

const faqItems = [
  {
    q: "ROI 544% có thực sự đạt được không?",
    a: "Con số 544% đến từ nghiên cứu của Nucleus Research về marketing automation (2024). Trong thực tế, SME thường đạt 150-300% ROI trong năm đầu — thấp hơn nhưng vẫn rất tốt. Con số phụ thuộc vào: giá nhân công hiện tại, số giờ tiết kiệm, và mức độ automation có thể thay thế công việc thủ công.",
  },
  {
    q: "Chi phí setup automation mất bao nhiêu?",
    a: "Chi phí thường gồm: (1) Tool: n8n self-host miễn phí + VPS ~200k/tháng hoặc n8n Cloud ~500k/tháng. (2) Nhân công setup: 5-30 triệu tùy độ phức tạp. (3) Thời gian training: 2-5 ngày. Tổng đầu tư ban đầu thường từ 5-20 triệu, payback trong 3-6 tháng.",
  },
  {
    q: "Làm sao tính thời gian nhân viên tiết kiệm?",
    a: "Cách đơn giản nhất: yêu cầu nhân viên track thời gian cho từng task trong 1 tuần. Phân loại: task lặp lại (có thể automate) vs task sáng tạo/quyết định (không nên automate). Nhân số giờ lặp lại/tuần × 4 tuần × lương giờ = tiết kiệm tháng.",
  },
  {
    q: "Automation có thể thay thế hoàn toàn nhân viên không?",
    a: "Không — và không nên cố. Automation thay thế task lặp lại, không thay thế con người. Mục tiêu là mỗi nhân viên làm được nhiều giá trị hơn trong cùng thời gian, không phải cắt giảm nhân sự. Công ty dùng automation tốt thường tăng output mà không tăng headcount.",
  },
  {
    q: "Khi nào KHÔNG nên đầu tư automation?",
    a: "Không nên nếu: (1) Quy trình thay đổi thường xuyên — automation cần quy trình ổn định. (2) Volume quá thấp — dưới 50 task/tháng, ROI khó đạt. (3) Chưa có quy trình chuẩn — automate chaos = chaos nhanh hơn. Nên chuẩn hóa thủ công trước, rồi mới automate.",
  },
];

export default function RoiCalculatorAutomationBlog() {
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
              <span className="text-slate-600 truncate max-w-[300px]">Kiến thức</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                Kiến thức
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold">
                ROI
              </span>
              <span className="text-xs text-slate-400">13 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              ROI Calculator: Tính Tiết Kiệm Khi Tự Động Hóa —{" "}
              <span className="gradient-text">Có Công Thức và Ví Dụ Thực Tế</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              "Automation nghe hay nhưng không biết có đáng đầu tư không." — Đây là câu hỏi
              thực tế nhất. Bài này cho bạn công thức tính ROI cụ thể, 3 ví dụ tính toán thực
              tế, và bảng benchmark để bạn biết mình đang ở đâu trước khi quyết định.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "3-6 tháng", label: "payback period trung bình", sub: "cho SME Việt Nam", color: "text-green-500" },
                  { value: "544%", label: "ROI marketing automation", sub: "Nucleus Research 2024" },
                  { value: "$15K-150K", label: "tiết kiệm năm đầu", sub: "tùy quy mô doanh nghiệp" },
                  { value: "20 giờ", label: "tiết kiệm/tuần trung bình", sub: "cho SME 10-50 nhân viên" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">Tại Sao ROI Automation Thường Bị Đánh Giá Sai?</h2>

                <p>
                  Hầu hết chủ doanh nghiệp khi tính ROI automation chỉ tính một chiều:
                  "Tool này tốn bao nhiêu tiền?" Đây là cách tính sai hoàn toàn.
                </p>

                <p>
                  ROI automation cần tính <strong>cả hai phía</strong>: chi phí đầu tư (tool +
                  setup + thời gian) và lợi ích thực (giờ tiết kiệm + lỗi giảm + doanh thu tăng
                  từ tốc độ phản hồi nhanh hơn).
                </p>

                <CalloutBox type="warning" title="Sai lầm phổ biến nhất">
                  Chỉ so sánh chi phí phần mềm automation vs lương nhân viên. Bỏ qua:
                  chi phí lỗi do thủ công, chi phí cơ hội (nhân viên có thể làm việc giá
                  trị hơn), và doanh thu tăng thêm từ response time nhanh hơn.
                </CalloutBox>

                {/* Section 2 */}
                <h2 id="cong-thuc">Công Thức ROI Automation Đầy Đủ</h2>

                <StepList steps={[
                  { title: "Bước 1: Tính tổng chi phí đầu tư (TCI)", desc: "TCI = Chi phí tool hàng tháng + Chi phí setup một lần (chia 12 tháng) + Thời gian training (giờ × lương/giờ)" },
                  { title: "Bước 2: Tính tiết kiệm hàng tháng (MS)", desc: "MS = Số giờ tiết kiệm/tháng × Lương giờ trung bình + Chi phí lỗi tránh được + Doanh thu tăng thêm" },
                  { title: "Bước 3: Tính ROI tháng", desc: "ROI = (MS - TCI) / TCI × 100%. Payback Period = TCI một lần / (MS - TCI tháng)" },
                  { title: "Bước 4: Tính ROI năm", desc: "ROI năm = (MS × 12 - TCI một lần - TCI tháng × 12) / (TCI một lần + TCI tháng × 12) × 100%" },
                ]} />

                <CalloutBox type="info" title="Công thức đơn giản cho người bắt đầu">
                  Nếu cần ước tính nhanh: Giờ tiết kiệm/tháng × Lương giờ trung bình.
                  Nếu con số này lớn hơn 2× chi phí tool + setup → đầu tư có lợi.
                </CalloutBox>

                {/* Section 3 — 3 examples */}
                <h2 id="vi-du-1">Ví Dụ 1: E-commerce — 500 Đơn Hàng/Tháng</h2>

                <p>
                  Shop quần áo online, doanh thu 500 triệu/tháng, 2 nhân viên vận hành. Hiện
                  tại: xử lý đơn thủ công từ Shopee + Lazada + website, cập nhật tồn kho, gửi
                  xác nhận cho khách, báo cáo cuối ngày.
                </p>

                <StepList steps={[
                  { title: "Chi phí hiện tại (thủ công)", desc: "2 nhân viên × 8tr/tháng = 16tr. Ước tính 60% thời gian cho task lặp lại = 9.6tr/tháng phí nhân công cho task có thể automate." },
                  { title: "Chi phí automation", desc: "n8n Cloud: 500k/tháng. Setup (thuê chuyên gia): 8tr một lần. Thời gian training: 5tr (2 ngày × 2 người). Tổng đầu tư: 13tr. Chi phí tháng sau: 500k." },
                  { title: "Tiết kiệm sau automation", desc: "Task automate: xác nhận đơn, sync tồn kho, báo cáo doanh thu, nhắc đánh giá. Tiết kiệm: 40 giờ/tháng × 50k/giờ = 2tr. Cộng: giảm lỗi đơn hàng 80% = tiết kiệm 1.5tr/tháng chi phí xử lý khiếu nại." },
                  { title: "Kết quả", desc: "Tiết kiệm ròng: 3.5tr - 0.5tr = 3tr/tháng. Payback: 13tr / 3tr = 4.3 tháng. ROI năm 1: (3tr × 12 - 13tr) / 13tr × 100% = 177%." },
                ]} />

                <StatCard stats={[
                  { value: "4.3 tháng", label: "payback period", sub: "e-commerce 500 đơn/tháng", color: "text-green-500" },
                  { value: "177%", label: "ROI năm đầu", sub: "sau khi trừ chi phí đầu tư" },
                  { value: "40 giờ", label: "tiết kiệm/tháng", sub: "nhân viên chuyển sang task giá trị cao hơn" },
                ]} />

                <h2 id="vi-du-2">Ví Dụ 2: Phòng Khám — 80 Bệnh Nhân/Ngày</h2>

                <p>
                  Phòng khám nha khoa, 3 bác sĩ, 2 lễ tân. Hiện tại: lễ tân nhắc lịch tái khám
                  bằng điện thoại, gửi hồ sơ kết quả thủ công, nhập dữ liệu bệnh nhân từ giấy
                  vào hệ thống.
                </p>

                <StepList steps={[
                  { title: "Vấn đề số hóa: 35% lịch tái khám bị miss", desc: "Bệnh nhân không quay lại vì không ai nhắc. Doanh thu mất: 35% × 80 bệnh nhân × 5% quay lại = 1.4 bệnh nhân/ngày × 500k trung bình = 700k/ngày = 21tr/tháng doanh thu mất." },
                  { title: "Chi phí automation", desc: "n8n + Zalo OA setup: 15tr một lần. Chi phí tháng: 800k (n8n Cloud + Zalo ZNS). Training: 3tr." },
                  { title: "Tiết kiệm sau automation", desc: "Nhắc lịch tự động → giảm miss-appointment 80% → khôi phục ~17tr doanh thu/tháng. Tiết kiệm lễ tân 30 giờ/tháng gọi điện = 1.5tr. Tổng lợi ích: 18.5tr/tháng." },
                  { title: "Kết quả", desc: "Tiết kiệm ròng: 18.5tr - 0.8tr = 17.7tr/tháng. Payback: 18tr đầu tư / 17.7tr = 1 tháng. ROI năm 1: cực kỳ cao do doanh thu hồi phục." },
                ]} />

                <CalloutBox type="success" title="Insight quan trọng">
                  Với phòng khám, giá trị lớn nhất không phải tiết kiệm nhân công — mà là
                  doanh thu từ bệnh nhân quay lại. Automation chuyển từ cost center thành
                  revenue driver.
                </CalloutBox>

                <h2 id="vi-du-3">Ví Dụ 3: Agency Marketing — 15 Client</h2>

                <p>
                  Agency digital marketing, 8 nhân viên, 15 client. Mỗi client cần báo cáo
                  tuần, theo dõi campaign, update số liệu. Hiện tại mất 2 ngày/tuần chỉ để
                  làm báo cáo thủ công.
                </p>

                <StepList steps={[
                  { title: "Chi phí báo cáo thủ công", desc: "2 ngày/tuần × 2 nhân viên × 2tr/ngày = 8tr/tuần = 32tr/tháng cho task báo cáo. Đây là 40% tổng lương nhân sự." },
                  { title: "Chi phí automation", desc: "n8n + Google Looker Studio setup: 20tr một lần. Chi phí tháng: 1tr. Training: 5tr." },
                  { title: "Tiết kiệm sau automation", desc: "Báo cáo tự động chạy mỗi thứ 2, dữ liệu từ Google Ads + Facebook Ads + Google Analytics. 2 nhân viên chuyển sang consulting và strategy. Tiết kiệm trực tiếp: 25tr/tháng. Capacity tăng: có thể nhận thêm 5 client không tăng headcount." },
                  { title: "Kết quả", desc: "Tiết kiệm ròng: 25tr - 1tr = 24tr/tháng. Payback: 25tr / 24tr = 1.04 tháng. ROI năm 1: 1056%. Nếu tính thêm 5 client mới: revenue tăng thêm 75tr/tháng." },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">📊</span>, label: "Tính TCI", sub: "Tool + setup + training" },
                    { icon: <span className="text-lg">⏱️</span>, label: "Đo giờ tiết kiệm", sub: "Track 1 tuần thực tế" },
                    { icon: <span className="text-lg">💰</span>, label: "Quy ra tiền", sub: "Giờ × lương giờ" },
                    { icon: <span className="text-lg">📈</span>, label: "Tính ROI", sub: "(Lợi ích - Chi phí) / Chi phí" },
                    { icon: <span className="text-lg">✅</span>, label: "Quyết định", sub: "Payback < 12 tháng → GO" },
                  ]}
                />

                {/* Section 4 */}
                <h2 id="benchmark">Bảng Benchmark ROI Theo Ngành</h2>

                <ComparisonTable
                  headers={["Ngành", "Payback Period", "ROI Năm 1", "Giờ Tiết Kiệm/Tháng", "Task Automate Tốt Nhất"]}
                  highlightCol={2}
                  rows={[
                    ["E-commerce", "3-5 tháng", "150-300%", "30-60 giờ", "Xử lý đơn, sync tồn kho, báo cáo"],
                    ["Phòng khám", "1-2 tháng", "300-500%", "20-40 giờ", "Nhắc lịch, hồ sơ bệnh nhân"],
                    ["Agency", "1-2 tháng", "400-800%", "40-80 giờ", "Báo cáo, lead nurturing"],
                    ["F&B (chuỗi)", "4-6 tháng", "120-200%", "20-35 giờ", "Đặt bàn, feedback, khuyến mãi"],
                    ["Bất động sản", "3-4 tháng", "200-400%", "25-50 giờ", "Lead qualification, follow-up"],
                    ["Giáo dục", "2-4 tháng", "200-350%", "20-40 giờ", "Nhắc lịch học, thu học phí"],
                    ["Logistics", "3-6 tháng", "150-250%", "35-60 giờ", "Tracking, thông báo giao hàng"],
                  ]}
                />

                {/* Section 5 */}
                <h2 id="tu-tinh">Cách Tự Tính ROI Cho Doanh Nghiệp Của Bạn</h2>

                <p>
                  Không cần spreadsheet phức tạp. 3 bước đơn giản:
                </p>

                <StepList steps={[
                  { title: "Bước 1: Track thời gian 1 tuần", desc: "Yêu cầu team ghi lại mỗi task và thời gian. Phân loại: lặp lại vs quyết định. Task lặp lại > 3 lần/tuần = ứng viên automation." },
                  { title: "Bước 2: Ước tính chi phí đầu tư", desc: "n8n tool: 0-500k/tháng. Setup: 5-20tr tùy phức tạp. Training: 3-5 ngày team. Tổng đầu tư thường 8-25tr cho SME." },
                  { title: "Bước 3: So sánh và quyết định", desc: "Nếu tiết kiệm tháng > 2× chi phí tháng → ROI dương. Nếu payback < 6 tháng → đầu tư tốt. Nếu payback < 3 tháng → đầu tư ngay." },
                ]} />

                <BeforeAfter
                  before={{
                    title: "Không Automation — Chi phí ẩn",
                    items: [
                      "Lương cho task lặp lại: không ai tính",
                      "Chi phí lỗi thủ công: không đo được",
                      "Cơ hội bỏ lỡ vì chậm response: không thấy",
                      "Scale khó: muốn tăng doanh thu = tăng người",
                      "Burnout nhân viên: chi phí tuyển dụng lại cao",
                    ],
                  }}
                  after={{
                    title: "Có Automation — Chi phí rõ ràng",
                    items: [
                      "Tool: 500k-1tr/tháng, cố định và dự đoán được",
                      "Setup: một lần, phân bổ 12-24 tháng",
                      "Tiết kiệm: đo được bằng giờ × lương",
                      "Scale không tăng chi phí tuyến tính",
                      "Nhân viên làm việc có giá trị hơn, ít burnout",
                    ],
                  }}
                />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về ROI Automation</h2>
                <FAQ items={faqItems} />

                {/* Conclusion */}
                <h2 id="ket-luan">Kết Luận: Khi Nào Nên Bắt Đầu?</h2>

                <p>
                  Câu trả lời ngắn gọn: nếu team của bạn đang làm bất kỳ task nào lặp đi lặp
                  lại hơn 3 lần/tuần và mỗi lần mất hơn 15 phút — đó là ứng viên automation
                  tốt. Phép tính rất đơn giản.
                </p>

                <StepList steps={[
                  { title: "Bắt đầu nhỏ, đo ROI ngay", desc: "Chọn 1 workflow. Implement. Đo giờ tiết kiệm trong 30 ngày. Có số liệu thực trước khi mở rộng." },
                  { title: "Ưu tiên task có ROI cao nhất", desc: "Task lặp lại nhiều + tốn thời gian nhiều + lương cao = ROI tốt nhất. Báo cáo và xác nhận đơn thường đứng đầu." },
                  { title: "Tính ROI 12 tháng, không phải 1 tháng", desc: "Tháng đầu thường âm do chi phí setup. Nhìn vào 6-12 tháng để thấy bức tranh đúng." },
                ]} />

                <CalloutBox type="success" title="Benchmark thực tế của AutoFlow">
                  Trung bình client của AutoFlow đạt payback trong 4.2 tháng và ROI 240% trong
                  năm đầu tiên. Số này tính bảo thủ, chỉ tính tiết kiệm chi phí trực tiếp —
                  không tính doanh thu tăng thêm từ response time nhanh hơn.
                </CalloutBox>

                <CalloutBox type="info" title="Muốn tính ROI cụ thể cho doanh nghiệp bạn?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — mình sẽ phân tích quy
                    trình của bạn, tính toán tiết kiệm thực tế, và đưa ra lộ trình automation
                    với ROI cụ thể.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Tính ROI cho doanh nghiệp của tôi →
                  </a>
                </CalloutBox>

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>

          <BlogFooter
            title="ROI Calculator Automation"
            slug="roi-calculator-automation"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
