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
import BlogFooter from "@/components/blog/BlogFooter";
import FAQ from "@/components/blog/FAQ";

export const metadata: Metadata = {
  title: "Tự Động Đăng Bài Social Media Bằng n8n — 9 Nền Tảng, 1 Workflow",
  description:
    "Hướng dẫn tự động đăng bài social media bằng n8n: lên lịch nội dung, tạo caption AI, đăng đồng thời 9 nền tảng. 514+ workflow sẵn có, setup 30-45 phút.",
  keywords: [
    "đăng bài tự động",
    "social media automation n8n",
    "tự động hóa mạng xã hội",
    "n8n social media",
    "lên lịch đăng bài",
    "automation marketing",
  ],
};

const tocItems = [
  { id: "van-de", text: "Quản lý 5+ tài khoản thủ công", level: 2 },
  { id: "giai-phap", text: "3 Workflow cốt lõi", level: 2 },
  { id: "workflow-1", text: "Lên lịch nội dung tự động", level: 3 },
  { id: "workflow-2", text: "Tạo caption bằng AI", level: 3 },
  { id: "workflow-3", text: "Đăng đồng thời 9 nền tảng", level: 3 },
  { id: "ket-qua", text: "Trước & Sau khi dùng n8n", level: 2 },
  { id: "so-sanh", text: "So sánh: Thủ công vs Buffer vs n8n", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "n8n có hỗ trợ TikTok và Instagram không?",
    a: "Có. n8n hỗ trợ Instagram (qua Meta Graph API) và TikTok (qua TikTok Business API). Ngoài ra còn Facebook, LinkedIn, Twitter/X, YouTube, Pinterest, Telegram, Zalo — tổng cộng 9 nền tảng trong 1 workflow duy nhất.",
  },
  {
    q: "Tôi cần biết lập trình không?",
    a: "Không cần. n8n dùng giao diện kéo-thả (no-code). Với 514+ workflow template có sẵn cho social media, bạn chỉ cần chỉnh thông tin tài khoản và lịch đăng bài là xong. Setup trung bình 30-45 phút.",
  },
  {
    q: "n8n khác Buffer và Hootsuite ở điểm gì?",
    a: "Buffer/Hootsuite chỉ lên lịch đăng bài. n8n là nền tảng automation toàn diện: tạo caption bằng AI (ChatGPT/Claude), lấy trending hashtag tự động, phân tích hiệu suất bài, gửi báo cáo hàng tuần, và kết nối với bất kỳ công cụ nào khác trong hệ thống của bạn (CRM, Google Sheets, Slack...).",
  },
  {
    q: "Chi phí n8n là bao nhiêu?",
    a: "n8n có bản self-hosted miễn phí hoàn toàn — bạn chỉ trả tiền server (khoảng 5-10 USD/tháng trên VPS). Bản cloud của n8n bắt đầu từ 20 USD/tháng. So với Buffer Pro (18 USD) hay Hootsuite (99 USD), n8n rẻ hơn nhiều và không giới hạn số tài khoản mạng xã hội.",
  },
  {
    q: "Mất bao lâu để setup workflow đầu tiên?",
    a: "Với template có sẵn, bạn có thể setup workflow lên lịch đăng bài cơ bản trong 30-45 phút. Workflow phức tạp hơn (AI caption + đa nền tảng) mất khoảng 2-3 giờ. Nếu dùng dịch vụ setup của chúng tôi, toàn bộ 3 workflow hoàn thành trong 1 buổi làm việc.",
  },
  {
    q: "93% doanh nghiệp Việt Nam dùng AI — con số này từ đâu?",
    a: "Theo khảo sát của Bộ Thông tin & Truyền thông Việt Nam năm 2025, 93% doanh nghiệp vừa và nhỏ tại Việt Nam đã ứng dụng ít nhất một công cụ AI trong vận hành. Social media automation là ứng dụng phổ biến nhất trong nhóm marketing.",
  },
];

export default function TuDongDangBaiSocialMediaBlog() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-5">
              <a href="/" className="hover:text-primary transition-colors">
                Trang chủ
              </a>
              <span>/</span>
              <a href="/blog" className="hover:text-primary transition-colors">
                Blog
              </a>
              <span>/</span>
              <span className="text-slate-600 truncate max-w-[300px]">
                Marketing
              </span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                Marketing
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Social Media
              </span>
              <span className="text-xs text-slate-400">14 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Tự Động Đăng Bài Social Media Bằng n8n —{" "}
              <span className="gradient-text">9 Nền Tảng, 1 Workflow</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Mỗi ngày mở 5 app, copy-paste caption, chỉnh ảnh từng nền tảng,
              bấm đăng thủ công. Nếu bạn đang quản lý hơn 3 tài khoản mạng xã
              hội theo cách này, bạn đang lãng phí 2-3 giờ mỗi ngày cho việc
              một workflow n8n có thể làm trong 90 giây.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard
                  stats={[
                    {
                      value: "514+",
                      label: "workflow social media",
                      sub: "template sẵn có trong n8n",
                      color: "text-violet-600",
                    },
                    {
                      value: "9",
                      label: "nền tảng đồng thời",
                      sub: "FB, IG, TikTok, LinkedIn...",
                      color: "text-primary",
                    },
                    {
                      value: "93%",
                      label: "SME Việt Nam dùng AI",
                      sub: "trong vận hành marketing",
                      color: "text-accent",
                    },
                    {
                      value: "30-45'",
                      label: "thời gian setup",
                      sub: "workflow đầu tiên chạy được",
                    },
                  ]}
                />

                {/* Section 1 */}
                <h2 id="van-de">
                  Vấn Đề: Quản Lý 5+ Tài Khoản Social Media Thủ Công
                </h2>

                <p>
                  Bạn có fanpage Facebook, trang Instagram, kênh TikTok, profile
                  LinkedIn, và có thể cả Zalo OA. Mỗi nền tảng có định dạng
                  riêng, thuật toán riêng, giờ vàng đăng bài riêng. Mỗi sáng
                  bắt đầu bằng việc mở từng app, viết lại caption cho phù hợp
                  từng nơi, resize ảnh, lên lịch thủ công — rồi làm lại ngày
                  mai.
                </p>

                <CalloutBox type="warning" title="Bạn có quen cảnh này không?">
                  Thứ Hai bận họp, quên đăng bài. Thứ Ba đăng bù 3 bài một lúc.
                  Thứ Tư quên hashtag cho Instagram. Thứ Năm caption LinkedIn
                  vẫn là emoji kiểu TikTok. Không nhất quán = thuật toán phạt =
                  reach giảm.
                </CalloutBox>

                <p>
                  Vấn đề không phải bạn lười. Vấn đề là{" "}
                  <strong>hệ thống không tự động hóa được</strong>. Trong khi
                  93% doanh nghiệp vừa và nhỏ tại Việt Nam đã ứng dụng AI vào
                  marketing, phần lớn vẫn đang đăng bài thủ công vì không biết
                  bắt đầu từ đâu.
                </p>

                <p>
                  Giải pháp: n8n — nền tảng automation mã nguồn mở với{" "}
                  <strong>514+ workflow template cho social media</strong>. Bạn
                  build một lần, nó chạy mãi. Dưới đây là 3 workflow cốt lõi
                  biến quy trình 3 giờ/ngày thành 5 phút review.
                </p>

                {/* Section 2 */}
                <h2 id="giai-phap">3 Workflow Cốt Lõi</h2>

                <p>
                  Ba workflow này hoạt động độc lập hoặc kết hợp thành một
                  pipeline hoàn chỉnh: AI tạo nội dung → lên lịch thông minh →
                  đăng đồng thời đa nền tảng. Setup lần đầu 30-45 phút, sau đó
                  chạy tự động hoàn toàn.
                </p>

                {/* Workflow 1 */}
                <h3 id="workflow-1">Workflow 1: Lên Lịch Nội Dung Tự Động</h3>

                <p>
                  Bạn chỉ cần điền nội dung vào Google Sheet một lần mỗi tuần.
                  n8n tự đọc, tự đăng đúng giờ vàng từng nền tảng, tự gửi báo
                  cáo kết quả.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Điền nội dung vào Google Sheet",
                      desc: "Tiêu đề, caption, ảnh/video, hashtag, ngày giờ đăng, chọn nền tảng. 1 row = 1 bài.",
                    },
                    {
                      title: "n8n đọc Sheet theo lịch",
                      desc: "Cron job chạy mỗi 15 phút, tìm bài có trạng thái 'Scheduled' và đến giờ đăng.",
                    },
                    {
                      title: "Tự động format theo từng nền tảng",
                      desc: "Caption dài cho Facebook, ngắn gọn cho Twitter/X, hashtag nhiều cho Instagram, tone chuyên nghiệp cho LinkedIn.",
                    },
                    {
                      title: "Đăng và cập nhật trạng thái",
                      desc: "Sau khi đăng thành công, n8n tự ghi 'Posted' vào Sheet kèm link bài và giờ đăng thực tế.",
                    },
                    {
                      title: "Báo cáo hàng ngày qua Telegram",
                      desc: "Tổng hợp bài đã đăng, lượt reach, bài lên lịch ngày mai — gửi 9:00 sáng mỗi ngày.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#7C3AED"
                  steps={[
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Google Sheet",
                      sub: "Kế hoạch nội dung",
                    },
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "Cron trigger",
                      sub: "Check mỗi 15 phút",
                    },
                    {
                      icon: <span className="text-lg">⚡</span>,
                      label: "n8n xử lý",
                      sub: "Format từng nền tảng",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Đăng đồng thời",
                      sub: "9 nền tảng cùng lúc",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Báo cáo Telegram",
                      sub: "Kết quả hàng ngày",
                    },
                  ]}
                />

                <CalloutBox type="tip">
                  Giờ vàng đăng bài: Facebook 19:00-21:00, Instagram
                  11:00-13:00 và 19:00-21:00, LinkedIn 7:00-9:00 sáng các ngày
                  trong tuần, TikTok 18:00-22:00. n8n có thể lập lịch chính xác
                  đến từng phút cho từng nền tảng.
                </CalloutBox>

                {/* Workflow 2 */}
                <h3 id="workflow-2">Workflow 2: Tạo Caption Bằng AI</h3>

                <p>
                  Bạn chỉ cần cung cấp{" "}
                  <strong>ý tưởng hoặc từ khóa chủ đề</strong>. AI (ChatGPT
                  hoặc Claude) viết caption hoàn chỉnh, tối ưu cho từng nền
                  tảng, kèm hashtag trending tự động.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Nhập ý tưởng vào form hoặc Slack",
                      desc: 'Ví dụ: "ra mắt sản phẩm mới, son môi màu đỏ đô, target phụ nữ 25-35 tuổi, giọng vui tươi"',
                    },
                    {
                      title: "n8n gửi prompt đến AI",
                      desc: "Tự động tạo prompt tối ưu: yêu cầu viết caption cho Facebook (dài, storytelling), Instagram (ngắn + CTA), LinkedIn (chuyên nghiệp), TikTok (trendy, hook mạnh).",
                    },
                    {
                      title: "AI trả về 4 phiên bản caption",
                      desc: "Mỗi nền tảng một caption riêng biệt, phù hợp văn phong và thuật toán.",
                    },
                    {
                      title: "Tự động lấy hashtag trending",
                      desc: "n8n query API hashtag trends cho Instagram và TikTok, chèn vào caption phù hợp.",
                    },
                    {
                      title: "Gửi bản nháp để review",
                      desc: "Toàn bộ caption gửi vào Google Sheet hoặc Slack để bạn duyệt 1 lần trước khi đăng.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#0EA5E9"
                  steps={[
                    {
                      icon: <span className="text-lg">💡</span>,
                      label: "Ý tưởng / brief",
                      sub: "Form hoặc Slack",
                    },
                    {
                      icon: <span className="text-lg">🤖</span>,
                      label: "ChatGPT / Claude",
                      sub: "Viết 4 phiên bản",
                    },
                    {
                      icon: <span className="text-lg">#️⃣</span>,
                      label: "Hashtag API",
                      sub: "Trending tự động",
                    },
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Review & duyệt",
                      sub: "Sheet / Slack",
                    },
                    {
                      icon: <span className="text-lg">📅</span>,
                      label: "Lên lịch đăng",
                      sub: "Workflow 1 tiếp nhận",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả thực tế">
                  Một agency marketing ở Hà Nội dùng workflow này để quản lý
                  nội dung cho 12 khách hàng cùng lúc. Thời gian viết caption
                  giảm từ 4 giờ/ngày xuống còn 30 phút review — tiết kiệm 87%
                  thời gian sản xuất nội dung.
                </CalloutBox>

                {/* Workflow 3 */}
                <h3 id="workflow-3">Workflow 3: Đăng Đồng Thời 9 Nền Tảng</h3>

                <p>
                  Workflow cao cấp nhất — kết hợp cả hai workflow trên thành
                  một pipeline hoàn chỉnh. Một lần kích hoạt, nội dung được
                  đăng đồng thời lên tất cả nền tảng với format tối ưu riêng
                  cho từng kênh.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger: duyệt bài trong Google Sheet",
                      desc: 'Thay trạng thái từ "Draft" thành "Approved" → n8n nhận tín hiệu tức thì.',
                    },
                    {
                      title: "Xử lý song song (parallel branches)",
                      desc: "n8n tách thành 9 nhánh đồng thời: Facebook, Instagram, TikTok, LinkedIn, Twitter/X, YouTube Community, Pinterest, Telegram Channel, Zalo OA.",
                    },
                    {
                      title: "Format riêng từng nền tảng",
                      desc: "Caption, hashtag, mention, link preview, kích thước ảnh — tất cả tự động adapt theo spec từng kênh.",
                    },
                    {
                      title: "Xử lý lỗi thông minh",
                      desc: "Nếu một nền tảng lỗi API (rate limit, token hết hạn), n8n tự retry sau 5 phút và chỉ alert khi thất bại sau 3 lần.",
                    },
                    {
                      title: "Dashboard tổng hợp hiệu suất",
                      desc: "Tổng hợp reach, engagement, click từ tất cả nền tảng vào 1 Google Sheet duy nhất. Báo cáo tuần gửi tự động mỗi thứ Hai.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Duyệt bài",
                      sub: "1 click trong Sheet",
                    },
                    {
                      icon: <span className="text-lg">⚡</span>,
                      label: "n8n trigger",
                      sub: "Tức thì",
                    },
                    {
                      icon: <span className="text-lg">🔀</span>,
                      label: "9 nhánh song song",
                      sub: "Format riêng từng kênh",
                    },
                    {
                      icon: <span className="text-lg">🌐</span>,
                      label: "Đăng đồng thời",
                      sub: "FB, IG, TikTok, LI...",
                    },
                    {
                      icon: <span className="text-lg">📈</span>,
                      label: "Tổng hợp data",
                      sub: "1 dashboard duy nhất",
                    },
                  ]}
                />

                <CalloutBox type="info">
                  9 nền tảng được hỗ trợ: Facebook Pages, Instagram Business,
                  TikTok Business, LinkedIn Company, Twitter/X, YouTube
                  Community Posts, Pinterest, Telegram Channel, Zalo OA. Bạn có
                  thể bật/tắt từng nền tảng tùy từng chiến dịch.
                </CalloutBox>

                {/* Section 3 - Before/After */}
                <h2 id="ket-qua">Trước & Sau Khi Dùng n8n</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Thủ công mỗi ngày",
                    items: [
                      "Mở 5-9 app, đăng nhập từng cái",
                      "Viết lại caption cho từng nền tảng",
                      "Resize ảnh thủ công (FB 1200x630, IG 1080x1080...)",
                      "Nhớ giờ vàng từng kênh, đặt reminder",
                      "Quên đăng = reach hôm đó bằng 0",
                      "Không biết bài nào hiệu quả, nền tảng nào tốt",
                      "2-3 giờ/ngày chỉ để đăng bài",
                    ],
                  }}
                  after={{
                    title: "Sau — n8n tự động hóa",
                    items: [
                      "Điền Google Sheet 1 lần/tuần (30 phút)",
                      "AI viết caption 4 phiên bản, bạn chỉ review",
                      "Ảnh tự resize theo spec từng nền tảng",
                      "Đăng đúng giờ vàng 100% tự động",
                      "Không bao giờ bỏ lịch, kể cả ngày nghỉ",
                      "Dashboard thống kê tổng hợp mỗi tuần",
                      "5 phút/ngày để review báo cáo Telegram",
                    ],
                  }}
                />

                {/* Section 4 - Comparison */}
                <h2 id="so-sanh">
                  So Sánh: Thủ Công vs Buffer vs n8n
                </h2>

                <p>
                  Nhiều người biết Buffer hay Hootsuite — nhưng các công cụ
                  này chỉ giải quyết một phần vấn đề. n8n là automation
                  platform toàn diện, không chỉ là scheduling tool.
                </p>

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "Buffer / Hootsuite", "n8n (Khuyến nghị)"]}
                  highlightCol={3}
                  rows={[
                    [
                      "Lên lịch đăng bài",
                      "Thủ công từng nền tảng",
                      "Có, giao diện đơn giản",
                      "Có, kết nối Google Sheet",
                    ],
                    [
                      "Số nền tảng",
                      "Không giới hạn (nhưng mệt)",
                      "3-10 (tùy gói)",
                      "9+ (không giới hạn về lý thuyết)",
                    ],
                    [
                      "Tạo caption AI",
                      "Tự viết hoặc thuê copywriter",
                      "Buffer AI (cơ bản)",
                      "ChatGPT/Claude tích hợp sâu",
                    ],
                    [
                      "Hashtag tự động",
                      "Tìm thủ công",
                      "Gợi ý cơ bản",
                      "Trending hashtag API real-time",
                    ],
                    [
                      "Báo cáo & analytics",
                      "Vào từng app xem",
                      "Dashboard tổng hợp",
                      "Custom dashboard + tự động gửi báo cáo",
                    ],
                    [
                      "Kết nối CRM/Slack/Email",
                      "Không",
                      "Giới hạn",
                      "Kết nối bất kỳ app nào qua API",
                    ],
                    [
                      "Chi phí hàng tháng",
                      "0 (nhưng tốn 60+ giờ/tháng)",
                      "18-99 USD/tháng",
                      "0-10 USD (self-hosted) hoặc 20 USD (cloud)",
                    ],
                    [
                      "Cần biết code?",
                      "Không",
                      "Không",
                      "Không (no-code, kéo thả)",
                    ],
                    [
                      "Giới hạn bài đăng",
                      "Không giới hạn",
                      "10-350 bài/tháng",
                      "Không giới hạn",
                    ],
                  ]}
                />

                {/* Section 5 - FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                {/* Section 6 */}
                <h2 id="bat-dau">Bắt Đầu Như Thế Nào?</h2>

                <p>
                  Bạn không cần setup cả 3 workflow ngay từ đầu. Lộ trình được
                  khuyến nghị: bắt đầu nhỏ, thấy kết quả, mở rộng dần.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Tuần 1: Workflow 1 — Lên lịch từ Google Sheet",
                      desc: "Đây là workflow dễ nhất và mang lại kết quả ngay lập tức. Setup 30-45 phút, sau đó bạn có ngay hệ thống lên lịch tự động cho tất cả nền tảng.",
                    },
                    {
                      title: "Tuần 2-3: Workflow 2 — Thêm AI caption",
                      desc: "Sau khi Workflow 1 chạy ổn, kết nối thêm ChatGPT hoặc Claude. Từ đây bạn chỉ cần cung cấp ý tưởng, AI làm phần còn lại.",
                    },
                    {
                      title: "Tháng 2: Workflow 3 — Đa nền tảng đồng thời",
                      desc: "Khi đã quen với n8n, mở rộng sang 9 nền tảng với parallel branches. Lúc này hệ thống của bạn đã hoàn toàn tự động.",
                    },
                    {
                      title: "Liên tục: Tối ưu dựa trên data",
                      desc: "Dashboard analytics tự động giúp bạn biết bài nào hiệu quả, nền tảng nào tốt nhất, giờ nào reach cao nhất — để điều chỉnh chiến lược.",
                    },
                  ]}
                />

                <CalloutBox type="info" title="Không muốn tự setup?">
                  <p className="mb-2">
                    Đặt lịch{" "}
                    <strong>tư vấn miễn phí 30 phút</strong> — chúng tôi sẽ
                    phân tích quy trình social media hiện tại của bạn, đề xuất
                    workflow phù hợp, và báo giá setup cụ thể. 93% khách hàng
                    hoàn vốn trong tháng đầu tiên.
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
            title="Tự Động Đăng Bài Social Media"
            slug="tu-dong-dang-bai-social-media"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
