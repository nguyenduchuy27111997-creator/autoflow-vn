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
  title: "API Là Gì? Giải Thích Cho Chủ Doanh Nghiệp Không Biết Code",
  description:
    "API là gì và tại sao chủ SME cần biết? Giải thích đơn giản bằng ví dụ thực tế: khách sạn, bảng điều khiển xe hơi. 5 ứng dụng API phổ biến cho doanh nghiệp, so sánh API vs Webhook, và cách n8n dùng API để tự động hóa.",
  keywords: [
    "api là gì",
    "api cho người mới",
    "api là gì đơn giản",
    "api doanh nghiệp",
    "webhook vs api",
    "n8n api",
  ],
};

const tocItems = [
  { id: "api-la-gi", text: "API là gì? Giải thích đơn giản", level: 2 },
  { id: "vi-du", text: "2 ví dụ dễ hiểu", level: 2 },
  { id: "tai-sao-quan-trong", text: "Tại sao SME cần biết API?", level: 2 },
  { id: "5-vi-du", text: "5 API phổ biến cho doanh nghiệp", level: 2 },
  { id: "api-vs-webhook", text: "API vs Webhook: khác nhau gì?", level: 2 },
  { id: "n8n-dung-api", text: "n8n dùng API như thế nào", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "ket-luan", text: "Tóm tắt", level: 2 },
];

const faqItems = [
  {
    q: "Tôi có cần biết code để dùng API không?",
    a: "Không. Với các tool như n8n, Zapier, Make — bạn kết nối API bằng cách click và điền form, không cần viết code. Bạn chỉ cần hiểu API là gì (đã đọc bài này) và có API key từ dịch vụ bạn muốn kết nối.",
  },
  {
    q: "API key là gì và tôi lấy ở đâu?",
    a: "API key là mật khẩu đặc biệt để xác nhận danh tính khi gọi API. Ví dụ: để dùng OpenAI API, bạn vào platform.openai.com → API keys → Create new. Mỗi dịch vụ có cách lấy khác nhau nhưng thường nằm trong phần Settings hoặc Developer.",
  },
  {
    q: "API miễn phí hay trả tiền?",
    a: "Phần lớn API có gói miễn phí với giới hạn nhất định (ví dụ: Google Sheets API miễn phí hoàn toàn, OpenAI có 5$ credit khi đăng ký). Khi dùng nhiều hơn thì trả theo lượt gọi — thường rất rẻ, vài xu đến vài đô cho hàng nghìn requests.",
  },
  {
    q: "API có an toàn không? Dữ liệu của tôi có bị lộ không?",
    a: "API dùng HTTPS (mã hóa) và authentication (API key / OAuth). Dữ liệu truyền qua API được mã hóa giống như bạn mua hàng online. Quan trọng là giữ API key bí mật — không share lên GitHub hoặc gửi qua email.",
  },
  {
    q: "Webhook khác API ở điểm nào quan trọng nhất?",
    a: "API là bạn chủ động đi hỏi ('Đơn hàng mới chưa?'). Webhook là hệ thống tự gọi bạn khi có chuyện ('Vừa có đơn mới!'). Webhook hiệu quả hơn vì không tốn requests kiểm tra liên tục. Trong thực tế, n8n dùng cả hai tùy tình huống.",
  },
];

export default function ApiLaGiBlog() {
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
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                Kiến thức
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                API
              </span>
              <span className="text-xs text-slate-400">10 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              API Là Gì?{" "}
              <span className="gradient-text">Giải Thích Cho Chủ Doanh Nghiệp Không Biết Code</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              82% tổ chức đang xây dựng chiến lược API-first. Nhưng hầu hết chủ SME nghe đến
              API là thấy mơ hồ — "cái đó dành cho dân kỹ thuật." Sai. Hiểu API sẽ giúp bạn
              tiết kiệm hàng chục giờ mỗi tuần mà không cần biết một dòng code.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "82%", label: "tổ chức API-first", sub: "theo báo cáo Postman 2024", color: "text-violet-500" },
                  { value: "30,000+", label: "API công khai", sub: "trên ProgrammableWeb directory" },
                  { value: "83%", label: "developer thời gian làm việc với API", sub: "thiết kế, build hoặc tích hợp" },
                  { value: "0", label: "dòng code cần viết", sub: "nếu dùng n8n để gọi API" },
                ]} />

                {/* Section 1 */}
                <h2 id="api-la-gi">API Là Gì? Giải Thích Không Cần Background Kỹ Thuật</h2>

                <p>
                  API viết tắt của <strong>Application Programming Interface</strong> — nghe phức
                  tạp, nhưng khái niệm rất đơn giản: API là <em>cách để hai phần mềm nói chuyện
                  với nhau</em>.
                </p>

                <p>
                  Hãy quên định nghĩa kỹ thuật đi. Nghĩ về nó theo cách này: bạn có phần mềm A
                  (ví dụ: website của bạn) và phần mềm B (ví dụ: Google Maps). API là cánh cửa
                  và ngôn ngữ chung để A hỏi B: "Cho tôi xem bản đồ khu vực này" và B trả
                  lời bằng dữ liệu bản đồ.
                </p>

                <CalloutBox type="info" title="Định nghĩa 1 câu">
                  API là hợp đồng quy định: phần mềm A có thể yêu cầu gì từ phần mềm B, và B
                  sẽ trả lời theo format nào.
                </CalloutBox>

                {/* Section 2 */}
                <h2 id="vi-du">2 Ví Dụ Dễ Hiểu Nhất Về API</h2>

                <h3>Ví dụ 1: Concierge Khách Sạn</h3>

                <p>
                  Tưởng tượng bạn ở tại một khách sạn sang trọng. Bạn muốn đặt nhà hàng, gọi taxi,
                  hay hỏi về điểm tham quan — bạn không tự làm tất cả. Bạn gọi concierge.
                </p>

                <p>
                  Concierge là người trung gian: biết cách nói chuyện với nhà hàng, với hãng taxi,
                  với tour operator. Bạn chỉ cần nói yêu cầu bằng ngôn ngữ của bạn, concierge
                  dịch và xử lý, rồi trả kết quả về cho bạn.
                </p>

                <p>
                  <strong>API hoạt động giống hệt:</strong> phần mềm của bạn nói "tôi cần dữ liệu
                  thời tiết TP.HCM", API dịch yêu cầu đó sang định dạng máy chủ thời tiết hiểu,
                  lấy dữ liệu, và trả về cho phần mềm của bạn dưới dạng có thể dùng được.
                </p>

                <h3>Ví dụ 2: Bảng Điều Khiển Xe Hơi</h3>

                <p>
                  Khi bạn lái xe, bạn không cần biết động cơ hoạt động như thế nào. Bảng điều
                  khiển cho bạn thấy tốc độ, nhiên liệu, nhiệt độ — thông tin đã được xử lý và
                  hiển thị theo cách bạn hiểu.
                </p>

                <p>
                  API tương tự: nó <em>ẩn đi sự phức tạp</em> bên trong và chỉ cho bạn thấy
                  những thông tin và tính năng bạn cần. Bạn không cần biết Shopee lưu đơn hàng
                  như thế nào — API chỉ cho bạn biết: "Có 5 đơn mới, đây là thông tin."
                </p>

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">🖥️</span>, label: "Phần mềm A", sub: "Gửi yêu cầu" },
                    { icon: <span className="text-lg">🚪</span>, label: "API", sub: "Cánh cửa trung gian" },
                    { icon: <span className="text-lg">🖥️</span>, label: "Phần mềm B", sub: "Xử lý và trả lời" },
                    { icon: <span className="text-lg">📦</span>, label: "Dữ liệu", sub: "Trả về chuẩn format" },
                    { icon: <span className="text-lg">✅</span>, label: "Kết quả", sub: "Phần mềm A dùng được" },
                  ]}
                />

                {/* Section 3 */}
                <h2 id="tai-sao-quan-trong">Tại Sao Chủ SME Cần Hiểu API?</h2>

                <p>
                  Không phải để code. Mà để <strong>hiểu giá trị của automation và đưa ra quyết
                  định đúng</strong>.
                </p>

                <StepList steps={[
                  { title: "Kết nối các phần mềm bạn đang dùng", desc: "CRM + kế toán + email marketing + Zalo — nếu chúng có API, bạn có thể kết nối tự động. Không cần nhập tay, không cần xuất/nhập Excel." },
                  { title: "Dữ liệu thời gian thực", desc: "Tồn kho tự cập nhật, đơn hàng tự vào hệ thống, báo cáo tự tổng hợp — không cần chờ cuối ngày mới biết số liệu." },
                  { title: "Mở rộng không giới hạn", desc: "Mỗi phần mềm mới có API là một 'building block' mới. Thêm tính năng không cần phát triển từ đầu." },
                  { title: "Đánh giá vendor thông minh hơn", desc: 'Khi chọn phần mềm mới, biết hỏi: "Có API không? Document API ở đâu?" — câu hỏi này ngay lập tức lọc ra vendor tốt.' },
                ]} />

                <CalloutBox type="warning" title="Phần mềm không có API = bẫy">
                  Nhiều phần mềm rẻ tiền không có API, nghĩa là dữ liệu bị kẹt trong đó.
                  Khi bạn muốn chuyển sang phần mềm khác hoặc kết nối với hệ thống khác —
                  bạn không thể. Đây là lý do nhiều SME bị phụ thuộc vào một vendor mãi mãi.
                </CalloutBox>

                {/* Section 4 */}
                <h2 id="5-vi-du">5 API Phổ Biến Dành Cho Doanh Nghiệp Việt</h2>

                <StepList steps={[
                  { title: "Google Sheets API — miễn phí, mạnh mẽ", desc: "Đọc/ghi dữ liệu vào Sheets từ bất kỳ đâu. Dùng như database đơn giản. Phổ biến nhất cho SME bắt đầu automation." },
                  { title: "Zalo OA API — kênh nhắn tin số 1 Việt Nam", desc: "Gửi tin nhắn, thông báo, OTP, broadcast cho followers. Miễn phí cho tin nhắn ZNS với template được duyệt." },
                  { title: "OpenAI API — AI tích hợp vào quy trình", desc: "Tự động phân loại email, soạn nội dung, trả lời chatbot. Giá từ $0.002/1000 tokens — rất rẻ cho volume vừa." },
                  { title: "Shopee/Lazada API — quản lý đa sàn", desc: "Sync tồn kho, cập nhật giá, lấy đơn hàng tự động. Giảm 80% thời gian quản lý sàn TMĐT." },
                  { title: "VNPay / MoMo API — thanh toán tự động", desc: "Xác nhận thanh toán, refund, reconciliation tự động. Không cần check app payment thủ công." },
                ]} />

                {/* Section 5 */}
                <h2 id="api-vs-webhook">API vs Webhook: Sự Khác Biệt Quan Trọng</h2>

                <p>
                  Đây là câu hỏi phổ biến nhất khi bắt đầu tìm hiểu về automation. Hiểu sự
                  khác biệt này giúp bạn chọn đúng cách tích hợp.
                </p>

                <BeforeAfter
                  before={{
                    title: "API — Bạn chủ động hỏi",
                    items: [
                      "Giống như gọi điện để hỏi thông tin",
                      "Bạn quyết định khi nào cần dữ liệu",
                      "Ví dụ: mỗi giờ hỏi 'có đơn mới không?'",
                      "Tốn requests ngay cả khi không có gì mới",
                      "Phù hợp khi cần dữ liệu theo lịch cố định",
                    ],
                  }}
                  after={{
                    title: "Webhook — Hệ thống chủ động báo bạn",
                    items: [
                      "Giống như đăng ký nhận thông báo push",
                      "Hệ thống gọi bạn khi có sự kiện",
                      "Ví dụ: Shopee gọi ngay khi có đơn mới",
                      "Chỉ dùng tài nguyên khi thực sự cần",
                      "Phù hợp khi cần phản ứng real-time",
                    ],
                  }}
                />

                <ComparisonTable
                  headers={["Tiêu chí", "API (Polling)", "Webhook"]}
                  highlightCol={2}
                  rows={[
                    ["Ai chủ động", "Bạn (phần mềm của bạn)", "Hệ thống kia"],
                    ["Thời điểm nhận data", "Theo lịch bạn đặt", "Ngay khi có sự kiện"],
                    ["Độ trễ", "Phụ thuộc tần suất poll", "Gần như real-time"],
                    ["Tài nguyên", "Dùng ngay cả khi không có gì", "Chỉ dùng khi cần"],
                    ["Độ phức tạp setup", "Đơn giản hơn", "Cần URL công khai để nhận"],
                    ["Ví dụ dùng tốt", "Báo cáo định kỳ, đồng bộ hàng đêm", "Xác nhận đơn, alert real-time"],
                    ["n8n hỗ trợ", "Schedule node + HTTP Request", "Webhook node"],
                  ]}
                />

                {/* Section 6 */}
                <h2 id="n8n-dung-api">n8n Dùng API Như Thế Nào Trong Thực Tế</h2>

                <p>
                  n8n là tool automation — và về cơ bản, n8n chính là một "super concierge" biết
                  gọi API của hàng ngàn dịch vụ mà không cần bạn viết code.
                </p>

                <StepList steps={[
                  { title: "Khi có trigger (webhook hoặc schedule)", desc: "n8n bắt đầu chạy workflow. Ví dụ: nhận webhook từ Shopee khi có đơn mới." },
                  { title: "Gọi API để lấy thêm thông tin", desc: "Gọi API khách hàng trong CRM để lấy lịch sử mua hàng, address, điểm tích lũy." },
                  { title: "Xử lý và biến đổi dữ liệu", desc: "Format lại thông tin, tính toán, phân loại — không cần code phức tạp." },
                  { title: "Gọi API để thực hiện hành động", desc: "Gọi Zalo OA API để gửi tin xác nhận. Gọi Google Sheets API để lưu đơn. Gọi Telegram API để báo warehouse." },
                  { title: "Lặp lại cho từng step tiếp theo", desc: "Mỗi node trong n8n là một lần gọi API — kết nối lại thành một chuỗi tự động hoàn chỉnh." },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">⚡</span>, label: "Trigger", sub: "Webhook / Schedule" },
                    { icon: <span className="text-lg">📡</span>, label: "Gọi API A", sub: "Lấy thêm data" },
                    { icon: <span className="text-lg">🔄</span>, label: "Xử lý", sub: "Format / Logic" },
                    { icon: <span className="text-lg">📡</span>, label: "Gọi API B", sub: "Thực hiện action" },
                    { icon: <span className="text-lg">✅</span>, label: "Hoàn thành", sub: "Log kết quả" },
                  ]}
                />

                <CalloutBox type="success" title="Ví dụ thực tế: Đơn Shopee → Zalo OA → Google Sheet">
                  Đơn mới từ Shopee (webhook) → n8n gọi Shopee API để lấy thông tin đầy đủ → gọi
                  Zalo OA API để gửi xác nhận cho khách → gọi Google Sheets API để lưu vào báo
                  cáo. Ba API, ba hành động, chạy tự động trong 5 giây, zero manual work.
                </CalloutBox>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp Về API</h2>
                <FAQ items={faqItems} />

                {/* Conclusion */}
                <h2 id="ket-luan">Tóm Tắt: Những Điều Bạn Cần Nhớ</h2>

                <StepList steps={[
                  { title: "API là cách hai phần mềm nói chuyện với nhau", desc: "Không cần code. Không cần hiểu kỹ thuật. Chỉ cần biết: có API = có thể kết nối." },
                  { title: "API khác Webhook ở chỗ ai chủ động", desc: "API: bạn hỏi. Webhook: hệ thống báo bạn. Cả hai đều dùng trong automation, tùy tình huống." },
                  { title: "n8n giúp bạn dùng API mà không cần code", desc: "Mỗi node trong n8n là một lần gọi API. Kết nối chúng lại = workflow tự động hoàn chỉnh." },
                  { title: "Khi chọn phần mềm, hãy hỏi 'Có API không?'", desc: "Phần mềm không có API = dữ liệu bị kẹt. Đây là tiêu chí quan trọng thứ hai sau tính năng." },
                ]} />

                <CalloutBox type="info" title="Sẵn sàng tích hợp API cho doanh nghiệp?">
                  <p className="mb-2">
                    Đặt lịch <strong>tư vấn miễn phí 30 phút</strong> — mình sẽ xem bạn đang
                    dùng phần mềm gì và tìm cơ hội kết nối API tiết kiệm thời gian nhất.
                  </p>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                  >
                    Đặt lịch tư vấn miễn phí →
                  </a>
                </CalloutBox>

              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>

          <BlogFooter
            title="API Là Gì?"
            slug="api-la-gi"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
