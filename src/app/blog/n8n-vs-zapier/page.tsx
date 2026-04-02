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
  title: "n8n vs Zapier: SME Việt Nam Nên Chọn Cái Nào? So Sánh 2026",
  description:
    "So sánh chi tiết n8n vs Zapier cho doanh nghiệp Việt Nam 2026: giá, tích hợp Zalo/MISA/KiotViet, self-hosting, AI. Tiết kiệm đến $3,528/năm.",
  keywords: [
    "n8n vs zapier",
    "so sánh n8n zapier",
    "n8n zapier việt nam",
    "automation tool việt nam",
    "n8n self hosted",
    "zapier alternative",
  ],
};

const tocItems = [
  { id: "van-de", text: "Bạn đang trả bao nhiêu cho Zapier?", level: 2 },
  { id: "tong-quan", text: "Tổng quan: n8n và Zapier là gì?", level: 2 },
  { id: "so-sanh-chinh", text: "So sánh toàn diện", level: 2 },
  { id: "gia-ca", text: "Phân tích chi phí thực tế", level: 2 },
  { id: "gia-zapier", text: "Bảng giá Zapier", level: 3 },
  { id: "gia-n8n", text: "Bảng giá n8n", level: 3 },
  { id: "kich-ban-thuc-te", text: "Kịch bản: Shop Shopee 1000 đơn/ngày", level: 3 },
  { id: "cong-cu-viet", text: "Hỗ trợ công cụ Việt Nam", level: 2 },
  { id: "khi-nao-zapier", text: "Khi nào nên chọn Zapier?", level: 2 },
  { id: "khi-nao-n8n", text: "Khi nào nên chọn n8n?", level: 2 },
  { id: "truoc-sau", text: "Trước và sau khi chuyển sang n8n", level: 2 },
  { id: "ket-luan", text: "Kết luận & ma trận quyết định", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

export default function N8nVsZapierBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="n8n-vs-zapier" title="n8n vs Zapier — SME Việt Nam Nên Chọn?" />
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
              <span className="text-slate-600 truncate max-w-[300px]">So sánh</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                So sánh
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Automation
              </span>
              <span className="text-xs text-slate-500">15 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              n8n vs Zapier —{" "}
              <span className="gradient-text">SME Việt Nam Nên Chọn Cái Nào? So Sánh Chi Tiết 2026</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Bạn đang trả <strong className="text-slate-700">$3,588/năm</strong> cho Zapier mà không biết n8n có thể làm
              tương tự với chỉ <strong className="text-slate-700">$60</strong>? Và Zapier không hỗ trợ Zalo, MISA hay
              KiotViet — những công cụ cốt lõi của doanh nghiệp Việt. Đây là so sánh trung thực nhất bạn sẽ đọc.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Key stats */}
                <StatCard stats={[
                  { value: "$3,588", label: "Zapier/năm (10K tasks)", sub: "≈ 90 triệu đồng/năm", color: "text-red-500" },
                  { value: "$60", label: "n8n self-hosted/năm", sub: "≈ 1.5 triệu đồng/năm", color: "text-green-600" },
                  { value: "8,000+", label: "Tích hợp của Zapier", sub: "nhưng KHÔNG có Zalo, MISA, KiotViet" },
                  { value: "400+", label: "Tích hợp n8n native", sub: "+ community nodes Việt Nam" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">Bạn Đang Trả Bao Nhiêu Cho Zapier?</h2>

                <p>
                  Hãy làm một phép tính nhanh. Bạn có một shop trên Shopee, mỗi ngày 1.000 đơn hàng.
                  Mỗi đơn cần một workflow 5 bước: nhận đơn → kiểm tra tồn kho → cập nhật MISA → gửi Zalo → log Google Sheet.
                </p>

                <p>
                  Với Zapier: <strong>1.000 đơn × 5 bước = 5.000 tasks/ngày = 150.000 tasks/tháng</strong>.
                  Gói Team $69/tháng chỉ có 2.000 tasks. Bạn sẽ phải mua gói cao hơn — khoảng <strong>$299/tháng = $3,588/năm</strong>.
                </p>

                <p>
                  Với n8n: <strong>1.000 executions/ngày</strong> — n8n tính theo lần chạy workflow, không phải
                  theo từng bước. Tự host trên VPS $5/tháng = <strong>$60/năm</strong>. Tiết kiệm $3,528 mỗi năm.
                </p>

                <CalloutBox type="warning" title="Điểm mù lớn nhất của Zapier">
                  Zapier tính phí theo <strong>task</strong> — nghĩa là mỗi bước trong workflow tốn 1 task.
                  Workflow 5 bước chạy 1.000 lần = 5.000 tasks. n8n tính theo <strong>execution</strong> —
                  workflow 5 bước chạy 1.000 lần = 1.000 executions. Chi phí khác nhau hoàn toàn.
                </CalloutBox>

                {/* Section 2 */}
                <h2 id="tong-quan">Tổng Quan: n8n và Zapier Là Gì?</h2>

                <p>
                  Cả hai đều là nền tảng automation — giúp bạn kết nối các ứng dụng và tự động hóa quy trình
                  mà không cần viết code phức tạp. Nhưng triết lý và đối tượng mục tiêu rất khác nhau.
                </p>

                <p>
                  <strong>Zapier</strong> ra đời năm 2011, được thiết kế cho non-technical users tại thị trường
                  Mỹ và châu Âu. Giao diện kéo-thả đơn giản, hơn 8.000 tích hợp với các tool phổ biến toàn cầu
                  (Slack, HubSpot, Salesforce, Gmail...). Phù hợp cho doanh nghiệp nhỏ cần setup nhanh và
                  không có IT team.
                </p>

                <p>
                  <strong>n8n</strong> ra đời năm 2019, là nền tảng open-source với mô hình "fair-code".
                  Hỗ trợ self-hosting, viết JavaScript/Python tùy ý, 70+ AI nodes, và quan trọng nhất —
                  cộng đồng đang xây dựng các tích hợp cho công cụ Việt Nam như Zalo, MISA, KiotViet.
                </p>

                {/* Section 3 - Main comparison */}
                <h2 id="so-sanh-chinh">So Sánh Toàn Diện: n8n vs Zapier</h2>

                <p>
                  Bảng so sánh dưới đây tập trung vào các tiêu chí quan trọng nhất với doanh nghiệp Việt Nam.
                  Cột n8n được highlight vì đây thường là lựa chọn tốt hơn cho thị trường nội địa — nhưng
                  Zapier vẫn có điểm mạnh riêng sẽ được phân tích công bằng.
                </p>

                <ComparisonTable
                  headers={["Tiêu chí", "Zapier", "n8n"]}
                  highlightCol={2}
                  rows={[
                    ["Mô hình tính phí", "Theo task (mỗi bước = 1 task)", "Theo execution (cả workflow = 1 lần chạy)"],
                    ["Gói miễn phí", "100 tasks/tháng", "Unlimited (self-hosted)"],
                    ["Chi phí điển hình (SME)", "$69–$299/tháng", "$0–$60/năm (self-hosted)"],
                    ["Self-hosting", "Không hỗ trợ", "Có — Docker, VPS, Railway"],
                    ["Data sovereignty", "Data qua server Mỹ", "Data trên server của bạn"],
                    ["Zalo OA", "Không có", "Có (community node)"],
                    ["MISA Accounting", "Không có", "Có (API integration)"],
                    ["KiotViet POS", "Không có", "Có (community node)"],
                    ["Shopee / Lazada", "Hạn chế", "Có (webhook + API)"],
                    ["Custom code (JS/Python)", "Hạn chế (có tính phí)", "Đầy đủ, miễn phí"],
                    ["AI / LangChain nodes", "Có (Zapier AI)", "70+ AI nodes, LangChain"],
                    ["Số tích hợp native", "8,000+", "400+ (+ community)"],
                    ["Độ dễ dùng", "Rất dễ, kéo thả", "Trung bình, cần học"],
                    ["Hỗ trợ tiếng Việt", "Không có", "Cộng đồng Việt"],
                    ["Phù hợp cho", "SME quốc tế, non-tech", "SME Việt Nam, dev, tech team"],
                  ]}
                />

                {/* Section 4 - Pricing deep dive */}
                <h2 id="gia-ca">Phân Tích Chi Phí Thực Tế</h2>

                <p>
                  Đây là phần quan trọng nhất. Con số trên website của Zapier trông rất hợp lý — nhưng
                  khi bạn tính theo nhu cầu thực tế của một SME Việt Nam, con số sẽ khiến bạn ngạc nhiên.
                </p>

                <h3 id="gia-zapier">Bảng Giá Zapier (2026)</h3>

                <ComparisonTable
                  headers={["Gói", "Giá/tháng", "Tasks/tháng", "Quy ra VND/năm", "Phù hợp"]}
                  highlightCol={-1}
                  rows={[
                    ["Free", "$0", "100 tasks", "0 đồng", "Test nhỏ, không thực tế"],
                    ["Pro", "$19.99", "750 tasks", "≈ 6 triệu/năm", "Workflow 1-2 bước, ít đơn"],
                    ["Team", "$69", "2,000 tasks", "≈ 21 triệu/năm", "Workflow đơn giản, <400 đơn/ngày"],
                    ["Company", "$103.50", "50,000 tasks", "≈ 31 triệu/năm", "Workflow nhiều bước, ~1000 đơn/ngày"],
                    ["Enterprise", "Custom (~$299+)", "Unlimited", "≈ 90 triệu+/năm", "Doanh nghiệp lớn"],
                  ]}
                />

                <h3 id="gia-n8n">Bảng Giá n8n (2026)</h3>

                <ComparisonTable
                  headers={["Gói", "Giá/tháng", "Executions/tháng", "Quy ra VND/năm", "Phù hợp"]}
                  highlightCol={2}
                  rows={[
                    ["Community (Self-hosted)", "$0 + VPS ~$5", "Không giới hạn", "≈ 1.5 triệu/năm", "SME Việt Nam, khuyến nghị"],
                    ["Starter (Cloud)", "€24 (~$26)", "2,500 executions", "≈ 7.5 triệu/năm", "Không muốn tự quản lý server"],
                    ["Pro (Cloud)", "€60 (~$65)", "10,000 executions", "≈ 19 triệu/năm", "Scale lớn hơn"],
                    ["Enterprise (Cloud)", "Custom", "Unlimited", "Thương lượng", "Tập đoàn, nhiều team"],
                  ]}
                />

                <CalloutBox type="tip" title="VPS ở đâu rẻ và ổn định tại Việt Nam?">
                  Để self-host n8n, bạn cần VPS tối thiểu 1 vCPU / 1GB RAM.
                  Các lựa chọn phổ biến: <strong>DigitalOcean $6/tháng</strong>, <strong>Railway $5/tháng</strong>,
                  hoặc <strong>VPS Việt Nam từ Viettel IDC / VNPT</strong> nếu cần data ở trong nước.
                  Setup mất khoảng 30 phút với Docker.
                </CalloutBox>

                <h3 id="kich-ban-thuc-te">Kịch Bản Thực Tế: Shop Shopee 1.000 Đơn/Ngày</h3>

                <p>
                  Hãy tính cụ thể cho một shop thương mại điện tử điển hình tại Việt Nam:
                </p>

                <StepList steps={[
                  { title: "Workflow: 5 bước xử lý đơn hàng", desc: "Shopee webhook → check tồn kho → cập nhật MISA → gửi Zalo xác nhận → log Google Sheet" },
                  { title: "Tần suất: 1.000 đơn/ngày = 30.000 đơn/tháng", desc: "Đây là mức trung bình của shop Shopee tầm trung tại Việt Nam" },
                  { title: "Zapier tính: 30.000 đơn × 5 bước = 150.000 tasks/tháng", desc: "Cần gói Enterprise ~$299/tháng → $3,588/năm ≈ 90 triệu đồng/năm" },
                  { title: "n8n tính: 30.000 đơn = 30.000 executions/tháng", desc: "Self-host trên VPS $5/tháng → $60/năm ≈ 1.5 triệu đồng/năm" },
                  { title: "Tiết kiệm: $3,528/năm ≈ 88 triệu đồng/năm", desc: "Đủ để thuê thêm 1 nhân viên part-time hoặc đầu tư marketing" },
                ]} />

                <StatCard stats={[
                  { value: "150K", label: "tasks Zapier/tháng", sub: "cho 1K đơn × 5 bước", color: "text-red-500" },
                  { value: "30K", label: "executions n8n/tháng", sub: "cho 1K đơn (5 bước = 1 lần)", color: "text-green-600" },
                  { value: "5×", label: "Zapier đắt hơn n8n cloud", sub: "khi so cùng workload" },
                  { value: "59×", label: "Zapier đắt hơn n8n self-hosted", sub: "$3,588 vs $60/năm" },
                ]} />

                <CalloutBox type="success" title="Case study thực tế từ DEV.to">
                  Một developer người Đức chia sẻ trên DEV.to: sau khi chuyển từ Zapier sang n8n self-hosted,
                  tiết kiệm được <strong>€2,000+/năm</strong>. Workflow phức tạp hơn trước vì n8n cho phép
                  viết JavaScript tùy ý, xử lý logic điều kiện phức tạp mà Zapier tính phí rất cao.
                </CalloutBox>

                {/* Section 5 - Vietnamese tools */}
                <h2 id="cong-cu-viet">Hỗ Trợ Công Cụ Việt Nam — Đây Mới Là Vấn Đề Cốt Lõi</h2>

                <p>
                  Đây là lý do lớn nhất khiến Zapier <em>không phải lựa chọn tối ưu</em> cho doanh nghiệp Việt.
                  Zapier được thiết kế cho thị trường Mỹ và châu Âu — các công cụ của bạn đơn giản là không có mặt ở đó.
                </p>

                <CalloutBox type="warning" title="Zapier KHÔNG hỗ trợ các công cụ cốt lõi của Việt Nam">
                  Zalo OA, MISA Accounting, KiotViet POS, Shopee Việt Nam (API riêng),
                  VietQR, VNPay, MoMo — <strong>không có integration native trên Zapier</strong>.
                  Bạn có thể dùng webhook tùy chỉnh, nhưng sẽ cần developer và mất đi ưu điểm
                  "no-code" mà bạn đang trả tiền cho.
                </CalloutBox>

                <ComparisonTable
                  headers={["Công cụ", "Zapier", "n8n", "Ghi chú"]}
                  highlightCol={2}
                  rows={[
                    ["Zalo OA", "Không có", "Có (community node)", "Gửi tin ZNS, broadcast, chatbot"],
                    ["MISA Accounting", "Không có", "Có (REST API)", "Tạo hóa đơn, đồng bộ kế toán"],
                    ["KiotViet POS", "Không có", "Có (community node)", "Đồng bộ đơn hàng, tồn kho"],
                    ["Shopee VN", "Hạn chế", "Có (webhook + API)", "Order management, inventory"],
                    ["Lazada VN", "Hạn chế", "Có (API integration)", "Tương tự Shopee"],
                    ["TikTok Shop VN", "Không có", "Có (webhook)", "Đang phát triển thêm"],
                    ["VietQR / VNPay", "Không có", "Có (API)", "Xác nhận thanh toán tự động"],
                    ["Google Workspace", "Có đầy đủ", "Có đầy đủ", "Ngang nhau"],
                    ["Slack / Teams", "Có đầy đủ", "Có đầy đủ", "Ngang nhau"],
                    ["HubSpot / Salesforce", "Có đầy đủ", "Có", "Zapier nhỉnh hơn một chút"],
                    ["Gmail / Outlook", "Có đầy đủ", "Có đầy đủ", "Ngang nhau"],
                  ]}
                />

                <p>
                  Workflow dưới đây là ví dụ điển hình chỉ n8n mới làm được cho doanh nghiệp Việt Nam:
                </p>

                <WorkflowFlow
                  accentColor="#7C3AED"
                  title="Workflow xử lý đơn hàng toàn diện — chỉ n8n làm được"
                  subtitle="Zapier thiếu Zalo OA, MISA và KiotViet — workflow này không thể build trên Zapier"
                  steps={[
                    { icon: <span className="text-lg">🛒</span>, label: "Shopee đơn mới", sub: "Webhook real-time" },
                    { icon: <span className="text-lg">📦</span>, label: "KiotViet check tồn kho", sub: "Giảm số lượng tự động" },
                    { icon: <span className="text-lg">🧾</span>, label: "MISA tạo hóa đơn", sub: "Kế toán tự động" },
                    { icon: <span className="text-lg">💬</span>, label: "Zalo OA xác nhận", sub: "Khách nhận tin 30 giây" },
                    { icon: <span className="text-lg">📊</span>, label: "Google Sheet log", sub: "Báo cáo real-time" },
                  ]}
                />

                {/* Section 6 - When to choose Zapier */}
                <h2 id="khi-nao-zapier">Khi Nào Nên Chọn Zapier?</h2>

                <p>
                  Sẽ không trung thực nếu chỉ nói n8n tốt hơn mọi trường hợp. Zapier có những điểm mạnh
                  thực sự và phù hợp với một số tình huống nhất định.
                </p>

                <StepList steps={[
                  { title: "Bạn là non-technical và cần setup trong 1 giờ", desc: "Zapier có giao diện kéo thả cực kỳ đơn giản. Không cần biết Docker, VPS, hay command line. Nếu bạn không có IT support, Zapier dễ hơn đáng kể." },
                  { title: "Bạn chỉ dùng công cụ quốc tế phổ biến", desc: "Nếu stack của bạn là Slack + Gmail + HubSpot + Salesforce + Notion — Zapier có tích hợp native tốt hơn, được maintain thường xuyên hơn." },
                  { title: "Workflow đơn giản, ít bước, workload nhỏ", desc: "Dưới 750 tasks/tháng với gói Pro $19.99 — chi phí chấp nhận được. Không đáng tốn công setup n8n cho 5-10 automation đơn giản." },
                  { title: "Bạn cần hỗ trợ và SLA chính thức", desc: "Zapier có support team, SLA cam kết, documentation đầy đủ bằng tiếng Anh. n8n community edition không có support chính thức." },
                  { title: "Công ty của bạn có compliance requirements nghiêm ngặt", desc: "Một số doanh nghiệp nước ngoài hoạt động tại Việt Nam cần dùng vendor được SOC 2 certified — Zapier đáp ứng điều này dễ hơn." },
                ]} />

                <CalloutBox type="info" title="Zapier thực sự tốt cho...">
                  Startup fintech cần kết nối Stripe + Intercom + Mixpanel. Agency marketing dùng
                  Facebook Ads + HubSpot + Slack. Đội sales dùng Salesforce + Gmail + Calendly.
                  Nếu bạn chủ yếu dùng công cụ Mỹ/EU và không có công cụ Việt Nam trong stack — Zapier là lựa chọn hợp lý.
                </CalloutBox>

                {/* Section 7 - When to choose n8n */}
                <h2 id="khi-nao-n8n">Khi Nào Nên Chọn n8n?</h2>

                <p>
                  n8n được thiết kế cho người dùng muốn kiểm soát hoàn toàn — từ data, đến code, đến chi phí.
                  Với SME Việt Nam, đây thường là lựa chọn vượt trội.
                </p>

                <StepList steps={[
                  { title: "Bạn dùng Zalo OA, MISA, KiotViet, Shopee VN", desc: "Đây là deal-breaker. Nếu stack của bạn có bất kỳ công cụ Việt Nam nào, n8n là lựa chọn duy nhất thực tế." },
                  { title: "Workflow có hơn 3-4 bước hoặc workload lớn", desc: "Từ mức 2.000 tasks Zapier trở lên (khoảng 400 đơn/ngày với workflow 5 bước), n8n self-hosted tiết kiệm rõ rệt." },
                  { title: "Bạn cần custom logic phức tạp", desc: "n8n cho phép viết JavaScript và Python trực tiếp trong node, xử lý transform data phức tạp, gọi API tùy chỉnh — miễn phí và không giới hạn." },
                  { title: "Data sovereignty là yêu cầu bắt buộc", desc: "Dữ liệu khách hàng, dữ liệu tài chính không được rời khỏi server Việt Nam? n8n self-hosted là giải pháp duy nhất. Zapier xử lý data qua server Mỹ." },
                  { title: "Bạn muốn tích hợp AI vào workflow", desc: "n8n có 70+ AI nodes, hỗ trợ LangChain, có thể kết nối GPT-4, Claude, Gemini vào quy trình tự động. Phù hợp cho AI-powered customer service, content generation tự động." },
                  { title: "Bạn có (hoặc có thể thuê) 1 người biết cơ bản về server", desc: "Setup n8n trên VPS mất 30-60 phút với Docker. Nếu có developer hoặc có thể thuê freelancer setup một lần — đây là đầu tư xứng đáng." },
                ]} />

                <CalloutBox type="tip" title="Quy tắc nhanh để quyết định">
                  Nếu bạn trả lời YES cho bất kỳ câu nào sau: <strong>Tôi dùng Zalo OA</strong> /
                  <strong> Tôi có hơn 500 đơn/ngày</strong> / <strong>Tôi cần data ở Việt Nam</strong> /
                  <strong> Tôi muốn tiết kiệm trên 5 triệu/năm</strong> — hãy chọn n8n.
                </CalloutBox>

                {/* Section 8 - Before/After */}
                <h2 id="truoc-sau">Trước và Sau Khi Chuyển Sang n8n</h2>

                <BeforeAfter
                  before={{
                    title: "Dùng Zapier — Thực tế đau lòng",
                    items: [
                      "Trả $299/tháng cho 150K tasks — bằng lương nhân viên",
                      "Không có Zalo OA → khách hàng không nhận được xác nhận",
                      "Không có MISA → kế toán vẫn nhập tay từng hóa đơn",
                      "KiotViet phải check thủ công, không tự đồng bộ",
                      "Data khách qua server Mỹ — lo ngại compliance",
                      "Mỗi bước logic phức tạp = task = tiền",
                    ],
                  }}
                  after={{
                    title: "Dùng n8n self-hosted — Kết quả thực tế",
                    items: [
                      "VPS $5/tháng = $60/năm, tiết kiệm $3,528/năm",
                      "Zalo OA tích hợp hoàn toàn, khách nhận tin trong 30 giây",
                      "MISA tự tạo hóa đơn khi đơn hàng được xác nhận",
                      "KiotViet tự trừ tồn kho, cảnh báo hàng sắp hết",
                      "Data ở trên server của bạn, trong lãnh thổ Việt Nam",
                      "Custom JavaScript xử lý logic phức tạp, không tốn thêm xu nào",
                    ],
                  }}
                />

                {/* Section 9 - Conclusion */}
                <h2 id="ket-luan">Kết Luận và Ma Trận Quyết Định</h2>

                <p>
                  Không có câu trả lời "đúng cho tất cả". Nhưng nếu bạn là SME Việt Nam với workload thực tế
                  và dùng bất kỳ công cụ Việt Nam nào — n8n là lựa chọn rõ ràng hơn. Dưới đây là ma trận
                  quyết định giúp bạn chọn nhanh:
                </p>

                <ComparisonTable
                  headers={["Tình huống của bạn", "Nên chọn", "Lý do"]}
                  highlightCol={-1}
                  rows={[
                    ["Dùng Zalo OA, MISA hoặc KiotViet", "n8n", "Zapier không có integration"],
                    ["Non-technical, cần setup trong 1 ngày", "Zapier", "UX đơn giản hơn đáng kể"],
                    ["Trên 500 đơn hàng/ngày", "n8n", "Chi phí Zapier sẽ rất lớn"],
                    ["Chỉ dùng Slack, Gmail, HubSpot", "Zapier", "Tích hợp tốt hơn, ổn định hơn"],
                    ["Cần data ở Việt Nam", "n8n", "Self-host, data không rời khỏi server"],
                    ["Budget dưới 2 triệu/năm", "n8n", "Self-host VPS $5/tháng = 1.5 triệu/năm"],
                    ["Cần AI + LangChain trong workflow", "n8n", "70+ AI nodes, Zapier AI kém hơn"],
                    ["Compliance SOC 2 bắt buộc", "Zapier", "Certified, có SLA, dễ audit hơn"],
                    ["Workflow logic phức tạp (JavaScript)", "n8n", "Code tự do, không tốn thêm tiền"],
                    ["Startup sản phẩm toàn cầu", "Zapier hoặc n8n", "Tùy stack — đánh giá lại theo tiêu chí trên"],
                  ]}
                />

                <p>
                  Nếu bạn vẫn đang dùng Zapier và chi phí đang tăng dần theo lượng đơn hàng —
                  đây là thời điểm tốt để đánh giá lại. Migration từ Zapier sang n8n thường mất
                  1-2 tuần cho một developer có kinh nghiệm, và khoản tiết kiệm sẽ hoàn vốn trong 1-2 tháng đầu tiên.
                </p>

                <CalloutBox type="info" title="Bạn đang dùng Zapier và muốn biết có nên chuyển không?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — mình sẽ phân tích workflow hiện tại,
                    tính chi phí thực tế, và đưa ra đánh giá trung thực: có đáng chuyển sang n8n không,
                    và migration sẽ mất bao lâu.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

                {/* FAQ */}
                <h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

                <FAQ items={[
                  { q: "n8n có thực sự miễn phí không, hay có chi phí ẩn?", a: "n8n Community Edition là open-source, miễn phí hoàn toàn — không giới hạn workflow, executions, users. Chi phí duy nhất là VPS (~$5-10/tháng). Nếu dùng n8n Cloud (không self-host) thì từ €24/tháng." },
                  { q: "Chuyển từ Zapier sang n8n mất bao lâu?", a: "Workflow đơn giản (3-5 bước): 30-60 phút. Toàn bộ 10-20 workflow: 1-2 tuần với developer có kinh nghiệm. Cần 1-2 ngày làm quen giao diện n8n nếu đã quen Zapier." },
                  { q: "n8n có hỗ trợ Zalo ZNS không?", a: "Có. Tích hợp qua HTTP Request node (core) hoặc community node chuyên biệt. Gửi tin ZNS, broadcast, chatbot tự động. Đây là lý do n8n được ưa chuộng tại Việt Nam." },
                  { q: "Zapier có thể làm gì n8n không làm được?", a: "Công bằng mà nói: (1) 8,000+ tích hợp app nhỏ Mỹ/EU, (2) Giao diện trực quan hơn cho non-technical user, (3) SLA và enterprise support chính thức. Nhưng với stack Việt Nam, những ưu điểm này hiếm khi bù cho chi phí và thiếu tích hợp bản địa." },
                  { q: "Tôi không biết code — có dùng n8n được không?", a: "Được, nhưng khó hơn Zapier. Workflow đơn giản dùng kéo-thả không cần code. Để khai thác hết tiềm năng (JS custom, API phức tạp), cần developer hỗ trợ. Phổ biến: thuê freelancer setup, sau đó tự vận hành." },
                ]} />

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
          <BlogFooter title="n8n vs Zapier — SME Việt Nam Nên Chọn Cái Nào?" slug="n8n-vs-zapier" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
