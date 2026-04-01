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
  title: "Quản Lý Review Google Maps Tự Động — Tăng Sao, Tăng Khách 2026",
  description:
    "Hướng dẫn tự động hóa quản lý review Google Maps: monitor và alert review mới, AI auto-reply draft, funnel chuyển feedback thành 5 sao. 88% khách đọc review trước khi chọn.",
  keywords: [
    "review google maps tự động",
    "quản lý review google maps",
    "automation review google",
    "tự động trả lời review",
    "tăng sao google maps",
  ],
};

const tocItems = [
  { id: "van-de", text: "Tại sao review Google Maps quan trọng", level: 2 },
  { id: "giai-phap", text: "3 workflow quản lý review tự động", level: 2 },
  { id: "workflow-1", text: "Monitor & alert review mới", level: 3 },
  { id: "workflow-2", text: "AI auto-reply draft", level: 3 },
  { id: "workflow-3", text: "Funnel feedback → review 5 sao", level: 3 },
  { id: "ket-qua", text: "Kết quả & số liệu", level: 2 },
  { id: "so-sanh", text: "Thủ công vs tự động", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "Google có cho phép tự động trả lời review không?",
    a: "Google cho phép sử dụng Google Business Profile API để đăng phản hồi review, miễn là nội dung không vi phạm chính sách của họ. Workflow AI-draft không đăng phản hồi tự động mà chỉ soạn bản nháp để bạn review và xác nhận một click — đây là cách tiếp cận an toàn và chuyên nghiệp nhất.",
  },
  {
    q: "Workflow có thể kéo tất cả review cũ chưa trả lời không?",
    a: "Có. Bước đầu tiên khi setup là chạy một lần để pull toàn bộ review chưa có phản hồi (có thể filter theo rating, thời gian). n8n xử lý từng review, AI soạn draft, bạn review và approve hàng loạt. Thường mất 1-2 buổi để xử lý backlog.",
  },
  {
    q: "AI có soạn được tiếng Việt tự nhiên không?",
    a: "GPT-4 và Claude đều viết tiếng Việt rất tốt. Bạn cần cung cấp prompt rõ ràng với: tên cửa hàng, tone of voice (thân thiện, chuyên nghiệp...), các điểm mạnh muốn nhắc đến. Sau vài lần điều chỉnh prompt, AI sẽ viết đúng phong cách thương hiệu của bạn.",
  },
  {
    q: "Có thể monitor nhiều cơ sở cùng một lúc không?",
    a: "Có. Bạn có thể có nhiều Place ID trong một workflow, hoặc tạo nhiều workflow chạy song song — một workflow per location. Tất cả alert đổ về cùng một Slack channel, phân biệt bằng tên chi nhánh.",
  },
  {
    q: "Funnel xin review có vi phạm chính sách Google không?",
    a: "Google cấm incentivized reviews (đổi quà lấy review) và review gating (chỉ hỏi người hài lòng). Workflow đúng cách là hỏi feedback từ TẤT CẢ khách, chỉ những người tự nguyện chọn để lại review thì mới gửi link Google Maps. Không lọc theo rating, không hứa phần thưởng.",
  },
];

export default function QuanLyReviewGoogleMapsBlog() {
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
              <span className="text-slate-600 truncate max-w-[300px]">Marketing</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-semibold">
                Google Maps
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Marketing
              </span>
              <span className="text-xs text-slate-400">11 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Quản Lý Review Google Maps Tự Động —{" "}
              <span className="gradient-text">Tăng Sao, Tăng Khách</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              88% khách hàng đọc review trước khi chọn dịch vụ. 97% đọc phản hồi của chủ cơ sở.
              Nhưng hầu hết doanh nghiệp không trả lời review vì không có thời gian.
              3 workflow dưới đây giải quyết điều đó — monitor 24/7, AI soạn draft, tự động thu thập review mới.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "88%", label: "khách đọc review trước khi chọn", sub: "nguồn: BrightLocal Local Consumer Review Survey", color: "text-yellow-600" },
                  { value: "97%", label: "đọc phản hồi của chủ cơ sở", sub: "phản hồi review là yếu tố tin tưởng quan trọng" },
                  { value: "+30%", label: "tăng engagement", sub: "khi phản hồi review trong vòng 24 giờ" },
                  { value: "4.4+", label: "rating ngưỡng khách chọn", sub: "dưới 4.4 sao, khách bắt đầu nghi ngờ" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">Tại Sao Review Google Maps Là Tài Sản Tiếp Thị Quan Trọng Nhất?</h2>

                <p>
                  Khi khách hàng muốn ăn tối, cắt tóc, hay tìm dịch vụ sửa chữa — họ không hỏi bạn bè.
                  Họ mở Google Maps và nhìn vào số sao. <strong>Rating Google Maps của bạn là đội sales
                  hoạt động 24/7</strong> — không cần lương, không ngủ, không nghỉ lễ.
                </p>

                <CalloutBox type="warning" title="Bạn có đang bỏ tiền trên bàn?">
                  Một cơ sở 4.2 sao vs 4.6 sao cùng ngành, cùng giá — khách chọn 4.6 sao 70% số lần.
                  Sự chênh lệch 0.4 sao đó không phải do dịch vụ của bạn tệ hơn. Mà vì đối thủ
                  đang chủ động thu thập review và trả lời mỗi ngày — còn bạn thì không.
                </CalloutBox>

                <p>
                  Vấn đề không phải khách hàng không muốn để lại review — họ chỉ quên. Không có ai nhắc.
                  Không ai gửi link. Còn review xấu thì xuất hiện và nằm đó vĩnh viễn vì không ai trả lời.
                  Mỗi tuần không xử lý là thêm một tuần uy tín tiếp tục bị bào mòn.
                </p>

                <p>
                  Tin tốt: toàn bộ quy trình này — từ monitor review mới, soạn phản hồi, đến xin review
                  từ khách hài lòng — đều có thể tự động hóa với n8n và Google Business Profile API.
                </p>

                {/* Section 2 */}
                <h2 id="giai-phap">3 Workflow Quản Lý Review Google Maps Tự Động</h2>

                <h3 id="workflow-1">Workflow 1: Monitor & Alert Review Mới</h3>

                <p>
                  Không bao giờ bỏ sót một review nào nữa — dù là lúc 2 giờ sáng hay ngày cuối tuần.
                  Workflow này theo dõi liên tục và cảnh báo ngay khi có review mới.
                </p>

                <StepList steps={[
                  { title: "Schedule polling Google Business Profile API", desc: "n8n cron trigger chạy mỗi 2 giờ, gọi API để lấy danh sách review mới nhất theo Place ID" },
                  { title: "So sánh với danh sách đã xử lý", desc: "Kiểm tra review ID mới — nếu chưa có trong Google Sheet log thì trigger alert" },
                  { title: "Phân loại theo rating và sentiment", desc: "5 sao = tag Positive. 1-2 sao = tag Urgent (cần xử lý ngay). 3-4 sao = tag Neutral" },
                  { title: "Gửi alert đến đúng người qua Slack / Zalo", desc: "1-2 sao: tag manager, notify ngay. 4-5 sao: notify kênh chung để team biết tin tốt" },
                ]} />

                <WorkflowFlow
                  accentColor="#FBBC04"
                  steps={[
                    { icon: <span className="text-lg">⏰</span>, label: "Polling mỗi 2h", sub: "Google Business API" },
                    { icon: <span className="text-lg">🔍</span>, label: "Phát hiện review mới", sub: "So sánh với log" },
                    { icon: <span className="text-lg">🏷️</span>, label: "Phân loại rating", sub: "Urgent / Neutral / Positive" },
                    { icon: <span className="text-lg">🔔</span>, label: "Alert đúng người", sub: "Slack / Zalo OA" },
                  ]}
                />

                <CalloutBox type="tip">
                  Với review 1-2 sao, thời gian vàng để phản hồi là trong vòng 4 giờ. Phản hồi nhanh,
                  chuyên nghiệp không chỉ xử lý khiếu nại — nó còn cho hàng trăm người đọc review đó
                  thấy rằng bạn thực sự quan tâm đến khách hàng.
                </CalloutBox>

                <h3 id="workflow-2">Workflow 2: AI Auto-Reply Draft</h3>

                <p>
                  Khi có review mới, AI lập tức soạn bản phản hồi phù hợp với nội dung và rating —
                  bạn chỉ cần đọc qua, sửa nếu cần, và click gửi. Tiết kiệm 80% thời gian so với viết từ đầu.
                </p>

                <StepList steps={[
                  { title: "Nhận review content từ Workflow 1", desc: "Nội dung review, rating, tên reviewer, thời gian — đẩy vào AI processing pipeline" },
                  { title: "GPT-4 soạn phản hồi theo context", desc: "Prompt bao gồm: tên cơ sở, tone of voice, điểm mạnh cần nhắc, hướng xử lý review xấu" },
                  { title: "Tạo Google Doc / Notion page với draft", desc: "Draft lưu kèm review gốc, rating, link trực tiếp đến review trên Google Maps" },
                  { title: "Gửi link cho người phụ trách để review", desc: "Slack message với link draft. Phê duyệt xong thì post phản hồi qua Google Business Profile API" },
                ]} />

                <WorkflowFlow
                  accentColor="#4285F4"
                  steps={[
                    { icon: <span className="text-lg">📝</span>, label: "Review content", sub: "Từ Workflow 1" },
                    { icon: <span className="text-lg">🤖</span>, label: "GPT-4 soạn draft", sub: "Context-aware" },
                    { icon: <span className="text-lg">📄</span>, label: "Lưu vào Notion", sub: "Kèm review gốc" },
                    { icon: <span className="text-lg">✅</span>, label: "Human approve", sub: "1 click, post ngay" },
                  ]}
                />

                <CalloutBox type="success" title="Ví dụ AI draft thực tế">
                  Review: &quot;Đồ ăn ngon nhưng phục vụ hơi chậm.&quot; (3 sao) — AI soạn: &quot;Cảm ơn bạn đã ghé và
                  chia sẻ nhận xét chân thành! Chúng tôi rất vui khi bạn thích đồ ăn. Về tốc độ phục vụ,
                  đây là điều chúng tôi đang nỗ lực cải thiện — đặc biệt vào giờ cao điểm. Hẹn gặp lại
                  bạn lần sau với trải nghiệm tốt hơn nhé!&quot;
                </CalloutBox>

                <h3 id="workflow-3">Workflow 3: Funnel Feedback Thành Review 5 Sao</h3>

                <p>
                  Đây là workflow mang lại nhiều review nhất. Thay vì chờ khách tự để lại review
                  (hiếm khi xảy ra tự nhiên), hệ thống chủ động hỏi feedback — và hướng người hài lòng đến Google Maps.
                </p>

                <StepList steps={[
                  { title: "Trigger sau khi khách hoàn thành dịch vụ", desc: "Đặt lịch, đơn hàng, hoặc check-in → n8n biết khách vừa trải nghiệm dịch vụ" },
                  { title: "Gửi Zalo / SMS hỏi feedback nội bộ", desc: "\"Bạn hài lòng với trải nghiệm hôm nay không?\" Nút: Rất hài lòng / Bình thường / Cần cải thiện" },
                  { title: "Phân luồng theo phản hồi", desc: "Rất hài lòng: gửi link Google Maps review. Cần cải thiện: gửi form feedback chi tiết cho manager" },
                  { title: "Theo dõi và nhắc lần 2 nếu chưa để lại review", desc: "Sau 48h nếu chưa thấy review mới từ số điện thoại đó thì gửi nhắc lần 2 nhẹ nhàng" },
                ]} />

                <WorkflowFlow
                  accentColor="#34A853"
                  steps={[
                    { icon: <span className="text-lg">🤝</span>, label: "Dịch vụ hoàn thành", sub: "Trigger từ booking / POS" },
                    { icon: <span className="text-lg">💬</span>, label: "Hỏi feedback", sub: "Zalo / SMS" },
                    { icon: <span className="text-lg">🔀</span>, label: "Phân luồng", sub: "Hài lòng vs cần cải thiện" },
                    { icon: <span className="text-lg">⭐</span>, label: "Mời review Google", sub: "Link trực tiếp" },
                    { icon: <span className="text-lg">🔔</span>, label: "Alert quản lý", sub: "Nếu feedback xấu" },
                  ]}
                />

                {/* Section 3 */}
                <h2 id="ket-qua">Kết Quả & Số Liệu Thực Tế</h2>

                <StatCard stats={[
                  { value: "0 phút", label: "monitor thủ công mỗi ngày", sub: "hệ thống tự động cảnh báo 24/7", color: "text-accent" },
                  { value: "-80%", label: "thời gian soạn phản hồi", sub: "AI draft trong 10 giây, bạn review 1 phút" },
                  { value: "x3", label: "số review mới mỗi tháng", sub: "nhờ funnel feedback chủ động" },
                  { value: "+0.4", label: "tăng rating trung bình", sub: "sau 60 ngày triển khai đầy đủ 3 workflow" },
                ]} />

                {/* Section 4 */}
                <h2 id="so-sanh">Thủ Công vs Tự Động: So Sánh Chi Tiết</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Quản lý review thủ công",
                    items: [
                      "Kiểm tra review thủ công 1-2 lần/ngày (nếu nhớ)",
                      "Review xấu nằm đó không ai trả lời hàng tuần",
                      "Soạn phản hồi mất 10-15 phút mỗi review",
                      "Không có hệ thống xin review từ khách hài lòng",
                      "Rating giảm dần vì review xấu chiếm tỷ lệ cao",
                    ],
                  }}
                  after={{
                    title: "Sau — 3 workflow tự động",
                    items: [
                      "Alert ngay khi có review mới, phân loại tự động",
                      "Review xấu được xử lý trong vòng 4 giờ",
                      "AI soạn draft trong 10 giây, approve 1 click",
                      "Funnel tự động xin review từ mọi khách hài lòng",
                      "Rating tăng đều đặn mỗi tháng",
                    ],
                  }}
                />

                <ComparisonTable
                  headers={["Tiêu chí", "Không làm gì", "Thủ công", "3 Workflow tự động"]}
                  highlightCol={3}
                  rows={[
                    ["Phát hiện review xấu", "Có thể không bao giờ", "1-2 ngày sau", "Trong 2 giờ"],
                    ["Tỷ lệ phản hồi review", "0%", "20–40%", "90%+"],
                    ["Thời gian soạn phản hồi", "N/A", "10-15 phút/review", "< 2 phút (AI draft)"],
                    ["Review mới mỗi tháng", "2-5 tự nhiên", "5-10", "15-30+"],
                    ["Thời gian quản lý/tuần", "0 (bỏ mặc)", "3-5 giờ", "< 30 phút"],
                    ["Rating sau 3 tháng", "Giảm hoặc không đổi", "Tăng chậm", "Tăng 0.3-0.5 sao"],
                  ]}
                />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Section 5 */}
                <h2 id="bat-dau">Bắt Đầu Như Thế Nào?</h2>

                <StepList steps={[
                  { title: "Xác nhận quyền truy cập Google Business Profile API", desc: "Vào Google Cloud Console → bật Business Profile API → tạo OAuth credentials cho cơ sở của bạn" },
                  { title: "Lấy Place ID của cơ sở", desc: "Tìm trên Google Maps → Share → link chứa Place ID. Hoặc dùng Google Place API Lookup." },
                  { title: "Bắt đầu với Workflow 1 (monitor & alert)", desc: "Đơn giản nhất. Nắm được mình đang nhận review gì thì mới xử lý được hiệu quả." },
                  { title: "Thêm AI draft sau 1 tuần chạy ổn định", desc: "Khi đã quen với flow, thêm GPT-4 node để soạn draft tự động. Tiết kiệm ngay từ ngày đầu." },
                ]} />

                <CalloutBox type="info" title="Muốn tăng rating Google Maps trong 30 ngày?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — chúng tôi sẽ phân tích
                    profile Google Maps hiện tại và đề xuất workflow phù hợp nhất với loại hình kinh doanh của bạn.
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
          <BlogFooter title="Quản Lý Review Google Maps" slug="quan-ly-review-google-maps" date="2026-04-01" />
        </article>
      </main>
      <Footer />
    </>
  );
}
