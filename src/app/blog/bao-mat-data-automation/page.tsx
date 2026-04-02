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
  title: "Bảo Mật Data Khi Dùng Automation — Hướng Dẫn Cho SME Việt Nam",
  description:
    "Chi phí vi phạm dữ liệu trung bình $4.4M. Hướng dẫn bảo mật cho SME dùng automation: cloud vs self-host, tính năng bảo mật n8n, tuân thủ PDPD Nghị định 13/2023, checklist thực hành tốt nhất.",
  keywords: [
    "bảo mật automation",
    "data privacy n8n",
    "n8n self host bảo mật",
    "PDPD nghị định 13",
    "bảo mật dữ liệu doanh nghiệp",
    "automation an toàn",
  ],
};

const tocItems = [
  { id: "van-de", text: "Tại sao bảo mật quan trọng với automation?", level: 2 },
  { id: "rui-ro", text: "3 rủi ro bảo mật phổ biến nhất", level: 2 },
  { id: "cloud-vs-selfhost", text: "Cloud vs Self-host: nên chọn gì?", level: 2 },
  { id: "n8n-bao-mat", text: "Tính năng bảo mật của n8n", level: 2 },
  { id: "pdpd", text: "Tuân thủ PDPD — Nghị định 13/2023", level: 2 },
  { id: "checklist", text: "Checklist bảo mật 12 điểm", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu an toàn", level: 2 },
];

const faqItems = [
  {
    q: "n8n Cloud có an toàn không? Dữ liệu khách hàng tôi có bị lộ không?",
    a: "n8n Cloud lưu trữ trên AWS với SOC 2 Type II certification, mã hóa AES-256 at rest và TLS 1.2+ in transit. Dữ liệu workflow của bạn được cách ly riêng. Tuy nhiên, credentials (API keys) vẫn được n8n lưu trên server của họ — đây là điểm self-host có lợi thế hơn.",
  },
  {
    q: "Self-host n8n tốn chi phí bao nhiêu?",
    a: "n8n Community Edition miễn phí 100%. Chi phí là VPS: $5-20/tháng (DigitalOcean, Linode, hoặc VPS Việt Nam). Một VPS 2GB RAM chạy n8n ổn cho 50-100 workflow. Tổng chi phí: 120-240k/tháng, rẻ hơn nhiều so với $20+/tháng cho n8n Cloud.",
  },
  {
    q: "Tôi cần làm gì để tuân thủ Nghị định 13/2023?",
    a: "Các bước cơ bản: (1) Lập danh sách dữ liệu cá nhân bạn đang xử lý, (2) Cập nhật chính sách privacy policy, (3) Có cơ chế xóa dữ liệu khi người dùng yêu cầu, (4) Báo cáo vi phạm trong 72 giờ. Tham khảo thêm tại Bộ Công an — cổng thông tin bảo vệ dữ liệu cá nhân.",
  },
  {
    q: "API key lưu ở đâu trong n8n là an toàn nhất?",
    a: "Luôn lưu trong n8n Credentials (menu Credentials → Add). Tuyệt đối không hardcode API key vào trong workflow node. n8n mã hóa credentials và không hiển thị giá trị sau khi lưu. Với self-host, thêm lớp bảo vệ bằng cách dùng biến môi trường thay vì lưu trực tiếp.",
  },
  {
    q: "Nếu n8n server của tôi bị hack thì sao?",
    a: "Rủi ro chính: credentials bị lộ, workflow bị chỉnh sửa, dữ liệu trong workflow execution bị đọc. Giảm thiểu bằng: cập nhật n8n thường xuyên, dùng reverse proxy (Nginx) + SSL, giới hạn IP truy cập admin, backup credentials định kỳ, bật 2FA cho n8n login.",
  },
];

export default function BaoMatDataAutomationBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="bao-mat-data-automation" title="Bảo Mật Data Khi Dùng Automation — Hướng Dẫn SME" />
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
              <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold">
                Bảo mật
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                Kiến thức
              </span>
              <span className="text-xs text-slate-500">12 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Bảo Mật Data Khi Dùng Automation —{" "}
              <span className="gradient-text">Hướng Dẫn Thực Tế Cho SME</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Chi phí vi phạm dữ liệu trung bình $4.4 triệu USD mỗi sự cố. Automation kết nối
              nhiều hệ thống — đồng nghĩa với nhiều điểm có thể bị tấn công. Nhưng đây không
              phải lý do để tránh automation. Đây là lý do để làm đúng từ đầu.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "$4.4M", label: "chi phí vi phạm dữ liệu trung bình", sub: "IBM Cost of a Data Breach 2024", color: "text-red-500" },
                  { value: "277 ngày", label: "thời gian phát hiện vi phạm", sub: "trung bình toàn cầu" },
                  { value: "83%", label: "vi phạm do yếu tố con người", sub: "phishing, mật khẩu yếu, cấu hình sai" },
                  { value: "Nghị định 13", label: "PDPD Việt Nam có hiệu lực", sub: "từ 01/07/2023" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">Tại Sao Bảo Mật Quan Trọng Đặc Biệt Khi Dùng Automation?</h2>

                <p>
                  Automation kết nối nhiều hệ thống với nhau: CRM, email, kế toán, kho hàng, ngân
                  hàng. Mỗi kết nối là một API key, một credential, một điểm truy cập. Trong môi
                  trường thủ công, nhân viên phải đăng nhập từng hệ thống. Trong automation, tất
                  cả credentials được lưu tập trung.
                </p>

                <p>
                  Điều này không có nghĩa automation kém an toàn hơn — thực ra ngược lại nếu làm
                  đúng. Nhưng <strong>rủi ro tập trung hơn</strong>: bảo mật tốt = rất tốt; bảo
                  mật kém = toàn bộ hệ thống bị ảnh hưởng cùng lúc.
                </p>

                <CalloutBox type="warning" title="Tình huống thực tế">
                  Một công ty e-commerce lưu API key Shopee, MoMo, và database trong cùng một
                  n8n Cloud instance không có 2FA. Nhân viên IT rời công ty, không thu hồi
                  credential. Tài khoản cũ vẫn có quyền truy cập toàn bộ automation trong 6 tháng.
                </CalloutBox>

                {/* Section 2 */}
                <h2 id="rui-ro">3 Rủi Ro Bảo Mật Phổ Biến Nhất Với SME Dùng Automation</h2>

                <StepList steps={[
                  { title: "Rủi ro 1: Lộ API key và credentials", desc: "API key Shopee, Zalo OA, ngân hàng lưu trong workflow không được mã hóa đúng cách. Nếu ai đó có access vào n8n — họ có tất cả." },
                  { title: "Rủi ro 2: Dữ liệu khách hàng đi qua bên thứ ba", desc: "Khi dùng n8n Cloud hoặc Zapier, dữ liệu (tên, email, số điện thoại khách hàng) đi qua server của họ. Với Nghị định 13/2023, đây là vấn đề pháp lý." },
                  { title: "Rủi ro 3: Workflow không có access control", desc: "Ai cũng có thể xem và chỉnh sửa workflow, bao gồm cả workflow xử lý thanh toán hoặc gửi email. Không có log ai đã thay đổi gì." },
                ]} />

                {/* Section 3 */}
                <h2 id="cloud-vs-selfhost">Cloud vs Self-host: Chọn Cái Nào?</h2>

                <p>
                  Đây là quyết định quan trọng nhất về bảo mật. Không có đáp án đúng cho tất cả —
                  phụ thuộc vào loại dữ liệu bạn xử lý và khả năng kỹ thuật.
                </p>

                <BeforeAfter
                  before={{
                    title: "n8n Cloud — Dễ dùng, ít kiểm soát",
                    items: [
                      "Setup trong 5 phút, không cần server",
                      "n8n chịu trách nhiệm bảo mật hạ tầng",
                      "Dữ liệu trên server của n8n (EU)",
                      "SOC 2 Type II certified",
                      "Cập nhật tự động",
                      "Credentials vẫn trên server n8n",
                    ],
                  }}
                  after={{
                    title: "Self-host — Kiểm soát tuyệt đối",
                    items: [
                      "Dữ liệu 100% ở máy chủ của bạn",
                      "Không bên thứ ba nào có thể truy cập",
                      "Tuân thủ PDPD dễ dàng hơn",
                      "Cần technical knowledge để setup",
                      "Bạn chịu trách nhiệm cập nhật, backup",
                      "Chi phí chỉ từ 120k/tháng VPS",
                    ],
                  }}
                />

                <ComparisonTable
                  headers={["Tiêu chí", "n8n Cloud", "Self-host"]}
                  highlightCol={2}
                  rows={[
                    ["Dữ liệu đặt ở đâu", "Server n8n (EU/US)", "Server của bạn (VN hoặc chọn region)"],
                    ["Credentials", "Mã hóa, lưu trên n8n", "Mã hóa, lưu trên server của bạn"],
                    ["Tuân thủ PDPD", "Phức tạp hơn (bên thứ ba)", "Đơn giản hơn (bạn kiểm soát)"],
                    ["Setup", "5 phút", "2-4 giờ (có guide chi tiết)"],
                    ["Bảo trì", "n8n tự lo", "Bạn tự lo (cập nhật, backup)"],
                    ["Chi phí", "$20-50/tháng", "$5-20/tháng (VPS)"],
                    ["Khuyến nghị cho", "Dữ liệu không nhạy cảm, không biết kỹ thuật", "Dữ liệu khách hàng, y tế, tài chính"],
                  ]}
                />

                <CalloutBox type="tip">
                  Khuyến nghị: nếu workflow xử lý thông tin khách hàng (tên, số điện thoại, địa
                  chỉ, lịch sử mua hàng), hãy self-host. Nếu chỉ kết nối các tool nội bộ không
                  có PII, n8n Cloud là đủ.
                </CalloutBox>

                {/* Section 4 */}
                <h2 id="n8n-bao-mat">Tính Năng Bảo Mật Của n8n</h2>

                <StepList steps={[
                  { title: "Credentials encryption", desc: "Tất cả API keys, passwords được mã hóa AES-256 trước khi lưu vào database. Không ai có thể đọc được giá trị thực kể cả admin n8n Cloud." },
                  { title: "Role-based access control (RBAC)", desc: "Phân quyền: Owner có toàn quyền, Admin quản lý user, Member chỉ xem/chạy workflow được assign. Không cần cấp quyền thừa." },
                  { title: "Execution data retention", desc: "Cấu hình xóa execution history sau N ngày — dữ liệu khách hàng không bị lưu mãi trong log. Quan trọng cho PDPD compliance." },
                  { title: "2FA (Two-Factor Authentication)", desc: "Bật 2FA cho n8n login. Ngăn chặn truy cập trái phép ngay cả khi mật khẩu bị lộ." },
                  { title: "Audit log", desc: "Trong n8n Enterprise: log đầy đủ ai đã đăng nhập, tạo/sửa workflow, xem credentials. Traceability cho compliance." },
                  { title: "Environment variables", desc: "Với self-host: lưu secrets trong .env file thay vì hardcode trong config. n8n không bao giờ log giá trị env variable." },
                ]} />

                <WorkflowFlow
                  accentColor="#EF4444"
                  steps={[
                    { icon: <span className="text-lg">🔑</span>, label: "Credentials", sub: "AES-256 encrypted" },
                    { icon: <span className="text-lg">👥</span>, label: "RBAC", sub: "Phân quyền theo role" },
                    { icon: <span className="text-lg">🔐</span>, label: "2FA Login", sub: "Bảo vệ truy cập" },
                    { icon: <span className="text-lg">🗑️</span>, label: "Data Retention", sub: "Tự xóa log cũ" },
                    { icon: <span className="text-lg">📋</span>, label: "Audit Log", sub: "Ai làm gì, khi nào" },
                  ]}
                />

                {/* Section 5 */}
                <h2 id="pdpd">Tuân Thủ PDPD — Nghị Định 13/2023</h2>

                <p>
                  Nghị định bảo vệ dữ liệu cá nhân số 13/2023/NĐ-CP có hiệu lực từ 01/07/2023 —
                  đây là khung pháp lý bảo vệ dữ liệu đầu tiên của Việt Nam tương tự GDPR của EU.
                </p>

                <CalloutBox type="warning" title="Ai bị ảnh hưởng?">
                  Tất cả tổ chức xử lý dữ liệu cá nhân của công dân Việt Nam — bao gồm SME.
                  Dữ liệu cá nhân bao gồm: tên, số điện thoại, địa chỉ, email, lịch sử mua hàng,
                  thông tin sức khỏe, thông tin tài chính.
                </CalloutBox>

                <StepList steps={[
                  { title: "Điều 13: Thông báo xử lý dữ liệu", desc: "Phải thông báo cho người dùng về mục đích, phạm vi, và thời gian lưu trữ dữ liệu. Privacy policy cần cập nhật đề cập đến automation." },
                  { title: "Điều 9: Quyền xóa dữ liệu", desc: "Người dùng có quyền yêu cầu xóa dữ liệu. Automation của bạn cần có workflow xử lý yêu cầu này — xóa khỏi CRM, Sheet, email list." },
                  { title: "Điều 23: Bảo vệ dữ liệu khi chuyển giao bên thứ ba", desc: "Khi dữ liệu đi qua n8n Cloud, Zapier, hay bất kỳ tool nào — cần có DPA (Data Processing Agreement) với vendor đó." },
                  { title: "Điều 26: Báo cáo vi phạm", desc: "Vi phạm dữ liệu phải báo cáo cho Bộ Công an trong vòng 72 giờ. Cần có quy trình incident response." },
                ]} />

                <CalloutBox type="info">
                  Ưu thế của n8n self-host: dữ liệu không rời khỏi server của bạn, không cần
                  DPA với bên thứ ba cho data processing, dễ đáp ứng yêu cầu xóa dữ liệu.
                </CalloutBox>

                {/* Section 6 */}
                <h2 id="checklist">Checklist Bảo Mật 12 Điểm Cho SME</h2>

                <StepList steps={[
                  { title: "1. Bật 2FA cho n8n và tất cả service kết nối", desc: "Google, Zalo OA, ngân hàng, CRM — tất cả đều phải có 2FA. Đây là lớp bảo vệ quan trọng nhất." },
                  { title: "2. Dùng dedicated service account", desc: "Tạo tài khoản riêng cho n8n (không dùng tài khoản cá nhân). Giới hạn quyền ở mức tối thiểu cần thiết." },
                  { title: "3. Rotate API keys định kỳ", desc: "Đổi API keys 3-6 tháng một lần. Ngay lập tức khi có nhân viên nghỉ việc." },
                  { title: "4. Cấu hình execution data retention", desc: "Set 30-90 ngày tối đa. Dữ liệu khách hàng không nên lưu trong execution log vô thời hạn." },
                  { title: "5. Dùng HTTPS cho tất cả webhook", desc: "Webhook HTTP (không có S) truyền dữ liệu không mã hóa. Luôn dùng HTTPS endpoint." },
                  { title: "6. Validate và sanitize input trong webhook", desc: "Thêm node kiểm tra dữ liệu đầu vào — tránh SQL injection, script injection qua webhook payload." },
                  { title: "7. Không log dữ liệu nhạy cảm", desc: "Tắt execution data save cho workflow xử lý payment, mật khẩu, hoặc thông tin y tế." },
                  { title: "8. Phân quyền RBAC đúng cách", desc: "Developer = Member (không phải Admin). Chỉ Owner/senior có quyền xem và sửa credentials." },
                  { title: "9. Backup n8n định kỳ", desc: "Backup database n8n hàng ngày. Lưu backup ở nơi khác (S3, Google Drive). Test restore mỗi tháng." },
                  { title: "10. Cập nhật n8n thường xuyên", desc: "Security patches thường xuyên trong các phiên bản mới. Set lịch cập nhật monthly hoặc khi có security release." },
                  { title: "11. Lập danh sách dữ liệu cá nhân đang xử lý", desc: "Data inventory: workflow nào xử lý PII gì, lưu ở đâu, xóa khi nào. Cần thiết cho PDPD compliance." },
                  { title: "12. Có quy trình xử lý khi bị breach", desc: "Ai được thông báo? Cách cô lập hệ thống? Báo cáo trong 72 giờ như thế nào? Viết ra và test." },
                ]} />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về Bảo Mật Automation</h2>
                <FAQ items={faqItems} />

                {/* Section 7 */}
                <h2 id="bat-dau">Bắt Đầu Đúng Cách Ngay Từ Đầu</h2>

                <p>
                  Bảo mật không phải thứ bạn thêm vào sau khi đã build xong — nó cần được tính
                  từ đầu. Chi phí fix security sau này gấp 10 lần làm đúng từ đầu.
                </p>

                <CalloutBox type="success" title="Nguyên tắc đơn giản nhất">
                  Trước khi build bất kỳ workflow nào, hỏi: &quot;Workflow này xử lý dữ liệu gì?
                  Ai cần access? Dữ liệu lưu bao lâu?&quot; Ba câu hỏi này định hình 80% quyết
                  định bảo mật.
                </CalloutBox>

                <CalloutBox type="info" title="Cần audit bảo mật automation của bạn?">
                  <p className="mb-2">
                    Đặt lịch <strong>security audit miễn phí 30 phút</strong> — mình sẽ review
                    cấu hình n8n và các workflow hiện tại, chỉ ra điểm rủi ro và cách khắc phục.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch audit miễn phí →
                  </a>
                </CalloutBox>

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>

          <BlogFooter
            title="Bảo Mật Data Automation"
            slug="bao-mat-data-automation"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
