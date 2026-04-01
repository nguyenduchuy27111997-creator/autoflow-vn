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
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "WhatsApp Business + n8n: Tự Động Hóa Giao Tiếp Khách Hàng Quốc Tế 2026",
  description:
    "Hướng dẫn tích hợp WhatsApp Business API với n8n: thông báo đơn hàng, chatbot tự động, thu lead vào CRM, cập nhật vận chuyển. 2.9 tỷ users, 90% open rate — kênh quốc tế không thể bỏ qua.",
  keywords: [
    "whatsapp business n8n",
    "whatsapp automation",
    "whatsapp business api",
    "n8n whatsapp workflow",
    "whatsapp chatbot",
    "tự động hóa whatsapp",
    "whatsapp cloud api",
    "n8n whatsapp node",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề khi quản lý WhatsApp thủ công", level: 2 },
  { id: "whatsapp-stats", text: "Tại sao WhatsApp Business?", level: 2 },
  { id: "cloud-api-setup", text: "Kết nối WhatsApp Cloud API với n8n", level: 2 },
  { id: "workflow-1", text: "Workflow 1: Thông báo đơn hàng tự động", level: 3 },
  { id: "workflow-2", text: "Workflow 2: Chatbot tự trả lời", level: 3 },
  { id: "workflow-3", text: "Workflow 3: Thu lead → CRM", level: 3 },
  { id: "workflow-4", text: "Workflow 4: Cập nhật vận chuyển", level: 3 },
  { id: "ket-qua", text: "Kết quả trước và sau", level: 2 },
  { id: "so-sanh", text: "So sánh các kênh nhắn tin", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "WhatsApp Business API khác gì WhatsApp Business App?",
    a: "WhatsApp Business App là ứng dụng dành cho doanh nghiệp nhỏ — dùng 1 số điện thoại, trả lời thủ công, không có API. WhatsApp Business API (hay WhatsApp Cloud API) là nền tảng dành cho doanh nghiệp vừa và lớn — cho phép tích hợp hệ thống, gửi tin tự động, webhook real-time, và nhiều agent cùng xử lý. n8n chỉ tích hợp được với Cloud API.",
  },
  {
    q: "Chi phí sử dụng WhatsApp Cloud API là bao nhiêu?",
    a: "WhatsApp tính phí theo conversation (cuộc hội thoại 24h), không tính theo từng tin nhắn. Có 4 loại: marketing (~0.08–0.13 USD/conv), utility (~0.02–0.04 USD/conv), authentication (~0.02 USD/conv), và service (phản hồi khi khách nhắn trước — miễn phí trong 24h đầu). Mỗi tháng được 1.000 service conversation miễn phí. Doanh nghiệp Việt Nam thường tốn 2–8 triệu đồng/tháng tùy lượng.",
  },
  {
    q: "n8n có node WhatsApp sẵn không hay phải dùng HTTP Request?",
    a: "n8n có node WhatsApp Cloud chính thức từ phiên bản 0.214 trở lên. Node này hỗ trợ: gửi tin nhắn văn bản, template message, media (hình ảnh, file), và nhận webhook. Bạn không cần viết HTTP Request thủ công cho các tác vụ cơ bản — chỉ cần điền credentials và chọn action. Với workflow phức tạp hơn (ví dụ gửi interactive buttons), dùng HTTP Request node để gọi Cloud API trực tiếp.",
  },
  {
    q: "Template message là gì và khi nào cần dùng?",
    a: "Khi doanh nghiệp muốn chủ động nhắn tin cho khách (không phải phản hồi), WhatsApp yêu cầu dùng template message đã được phê duyệt trước. Template có thể chứa biến động (tên khách, mã đơn, ngày giao). Thời gian duyệt template thường 24–48 giờ. Trong 4 workflow bài này, Workflow 1 (thông báo đơn hàng) và Workflow 4 (cập nhật vận chuyển) cần template message. Workflow 2 và 3 dùng session message (phản hồi khi khách nhắn trước) — không cần template.",
  },
  {
    q: "Khách hàng Việt Nam có dùng WhatsApp không?",
    a: "Việt Nam là thị trường số 2 toàn cầu về lượt tải WhatsApp (sau Ấn Độ). Đặc biệt phổ biến trong: xuất khẩu/thương mại quốc tế, du lịch và khách sạn (khách nước ngoài), freelance và agency làm việc với client quốc tế, F&B có khách Tây và expat. Nếu doanh nghiệp bạn có bất kỳ điểm tiếp xúc quốc tế nào, WhatsApp là kênh không thể bỏ qua.",
  },
  {
    q: "Tôi có thể dùng n8n self-host để tích hợp WhatsApp không?",
    a: "Có. n8n self-host hoàn toàn hỗ trợ WhatsApp Cloud node và webhook. Bạn cần: VPS với HTTPS (bắt buộc — WhatsApp không chấp nhận HTTP webhook), domain hoặc subdomain, và n8n phiên bản 0.214+. Nếu dùng n8n Cloud (cloud.n8n.io), setup đơn giản hơn vì HTTPS đã có sẵn và không cần quản lý server.",
  },
];

export default function WhatsAppBusinessN8nBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="whatsapp-business-n8n" title="WhatsApp Business + n8n: Giao Tiếp Khách Quốc Tế" />
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
                Hướng dẫn
              </span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                WhatsApp Business
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                n8n
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Quốc Tế
              </span>
              <span className="text-xs text-slate-400">14 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              WhatsApp Business + n8n:{" "}
              <span className="gradient-text">
                Tự Động Hóa Giao Tiếp Khách Hàng Quốc Tế
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              2.9 tỷ người dùng, Việt Nam top 2 toàn cầu về lượt tải, tỷ lệ
              mở tin 90%. Nhưng hầu hết doanh nghiệp vẫn đang trả lời WhatsApp
              thủ công — chậm, không nhất quán, bỏ sót khách quốc tế. Bài này
              hướng dẫn bạn xây 4 workflow WhatsApp automation bằng n8n, từ
              thông báo đơn hàng đến chatbot AI, không cần lập trình.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Section 1 — PAS Intro */}
                <h2 id="van-de">Vấn Đề: Khách Quốc Tế Nhắn WhatsApp Mà Không Ai Trả Lời</h2>

                <p>
                  Một khách hàng từ Singapore nhắn WhatsApp hỏi giá đơn hàng
                  bulk lúc 9 giờ tối giờ Việt Nam. Nhân viên đã về nhà. Đến
                  sáng hôm sau mở điện thoại — tin nhắn đã 11 tiếng chưa được
                  đọc. Khách đã mua từ đối thủ ở Thái Lan.
                </p>

                <CalloutBox type="warning" title="Chi phí của sự chậm trễ">
                  Theo nghiên cứu của Meta: khách hàng B2B kỳ vọng phản hồi
                  trong vòng <strong>1 giờ</strong> trên WhatsApp Business.
                  Phản hồi sau 5 giờ làm giảm{" "}
                  <strong>70% khả năng chốt đơn</strong>. Với thị trường quốc
                  tế, múi giờ khác nhau khiến khoảng trống này càng lớn hơn —
                  và automation là cách duy nhất để lấp đầy.
                </CalloutBox>

                <p>
                  Vấn đề không chỉ là tốc độ. Khi nhiều nhân viên cùng dùng
                  một tài khoản WhatsApp Business, câu trả lời không nhất quán,
                  lead bị mất giữa các ca, lịch sử chat bị xóa khi đổi thiết
                  bị. Giải pháp là{" "}
                  <strong>
                    tích hợp WhatsApp Cloud API với n8n để tự động hóa toàn
                    bộ quy trình
                  </strong>{" "}
                  — từ thông báo đơn hàng, chatbot phản hồi, đến đẩy lead vào
                  CRM và cập nhật vận chuyển real-time.
                </p>

                {/* Section 2 — Stats */}
                <h2 id="whatsapp-stats">Tại Sao WhatsApp Business Là Kênh Quốc Tế Không Thể Bỏ Qua?</h2>

                <p>
                  Trước khi vào kỹ thuật, hãy xem những con số giải thích tại
                  sao WhatsApp là kênh ưu tiên cho bất kỳ doanh nghiệp nào có
                  khách hàng quốc tế:
                </p>

                <StatCard
                  stats={[
                    {
                      value: "2.9B",
                      label: "người dùng toàn cầu",
                      sub: "kênh nhắn tin lớn nhất thế giới",
                      color: "text-green-500",
                    },
                    {
                      value: "#2",
                      label: "Việt Nam tải nhiều nhất",
                      sub: "chỉ sau Ấn Độ — thị trường tiềm năng lớn",
                      color: "text-green-600",
                    },
                    {
                      value: "90%",
                      label: "tỷ lệ mở tin nhắn",
                      sub: "so với 20–25% của email marketing",
                      color: "text-violet-500",
                    },
                    {
                      value: "$3.6B",
                      label: "chi tiêu toàn cầu 2026",
                      sub: "dự báo doanh nghiệp chi cho WhatsApp Business",
                      color: "text-emerald-500",
                    },
                  ]}
                />

                <p>
                  WhatsApp Business API (nay gọi là{" "}
                  <strong>WhatsApp Cloud API</strong> — do Meta quản lý trực
                  tiếp) cho phép doanh nghiệp gửi tin tự động, nhận webhook
                  real-time, quản lý nhiều agent cùng lúc, và — quan trọng
                  nhất — tích hợp với n8n để kết nối toàn bộ quy trình kinh
                  doanh.
                </p>

                <CalloutBox type="info" title="n8n và WhatsApp Cloud API">
                  Từ phiên bản 0.214, n8n có{" "}
                  <strong>node WhatsApp Cloud chính thức</strong> — không cần
                  cấu hình HTTP Request thủ công cho các tác vụ thông thường.
                  Node hỗ trợ gửi văn bản, template message, media (hình ảnh,
                  PDF, video), nhận webhook tin nhắn đến, và tích hợp ngay với
                  các node AI trong n8n để xây chatbot.
                </CalloutBox>

                {/* Section 3 — Setup */}
                <h2 id="cloud-api-setup">Kết Nối WhatsApp Cloud API Với n8n</h2>

                <p>
                  Trước khi xây workflow, bạn cần kết nối WhatsApp Business
                  Account với n8n qua Meta Developer Platform. Các bước này
                  làm một lần duy nhất:
                </p>

                <StepList
                  steps={[
                    {
                      title: "Tạo Meta Developer App",
                      desc: "Vào developers.facebook.com → My Apps → Create App → chọn loại Business. Thêm product WhatsApp vào app. Đây là nơi bạn lấy Phone Number ID và Access Token.",
                    },
                    {
                      title: "Liên kết WhatsApp Business Account",
                      desc: "Trong Meta Developer App → WhatsApp → Getting Started → chọn hoặc tạo WhatsApp Business Account. Thêm số điện thoại thực của doanh nghiệp (hoặc dùng số sandbox test miễn phí trong lúc dev).",
                    },
                    {
                      title: "Lấy credentials cho n8n",
                      desc: "Copy Phone Number ID và tạo Permanent Access Token (System User Token) trong Business Manager. Trong n8n → Credentials → WhatsApp Business Cloud → dán vào. Access Token dạng system user không hết hạn như user token.",
                    },
                    {
                      title: "Đăng ký webhook trong n8n",
                      desc: "Tạo WhatsApp Trigger node trong n8n. Copy Webhook URL → dán vào Meta Developer App → Webhooks → Callback URL. Điền Verify Token (tự đặt) trùng với n8n. Subscribe events: messages, message_deliveries.",
                    },
                    {
                      title: "Tạo Message Templates (cho tin chủ động)",
                      desc: "Vào WhatsApp Manager → Message Templates → Create Template. Templates cần phê duyệt 24–48h. Trong lúc chờ, dùng sandbox để test. Templates dùng cho Workflow 1 và 4.",
                    },
                  ]}
                />

                <CalloutBox type="tip" title="Dùng số sandbox khi dev">
                  Meta cung cấp test number sandbox miễn phí — bạn có thể
                  gửi tin nhắn từ n8n đến tối đa 5 số điện thoại trong
                  whitelist mà không cần template phê duyệt. Dùng sandbox để
                  test toàn bộ workflow trước khi chuyển sang production với
                  số thật.
                </CalloutBox>

                {/* Section 4 — Workflow 1 */}
                <h2 id="workflow-1">Workflow 1: Thông Báo Đơn Hàng Tự Động</h2>

                <p>
                  Workflow phổ biến nhất — gửi tin nhắn WhatsApp tự động khi
                  có đơn hàng mới, thanh toán thành công, hoặc trạng thái
                  thay đổi. Khách hàng nhận thông báo tức thì, không cần staff
                  gửi thủ công.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger từ hệ thống đơn hàng",
                      desc: "Webhook nhận event từ WooCommerce, Shopify, Haravan, hoặc bất kỳ OMS nào khi order mới được tạo hoặc cập nhật trạng thái. Có thể dùng cron job đọc Google Sheet/database định kỳ nếu hệ thống không có webhook.",
                    },
                    {
                      title: "Lọc và chuẩn bị dữ liệu",
                      desc: "Filter node: chỉ xử lý đơn có trạng thái 'confirmed' hoặc 'paid'. Set node: chuẩn hóa dữ liệu — tên khách, mã đơn, tổng tiền, ngày dự kiến giao.",
                    },
                    {
                      title: "Lookup số WhatsApp của khách",
                      desc: "Lấy số điện thoại từ đơn hàng. Chuẩn hóa format quốc tế (thêm country code: +84 cho Việt Nam, +65 cho Singapore). Kiểm tra số hợp lệ trước khi gửi.",
                    },
                    {
                      title: "Gửi Template Message qua n8n WhatsApp node",
                      desc: "Chọn template đã được phê duyệt. Map các biến: {{1}} = tên khách, {{2}} = mã đơn, {{3}} = tổng tiền, {{4}} = ngày giao dự kiến. WhatsApp node tự format và gửi.",
                    },
                    {
                      title: "Log kết quả và xử lý lỗi",
                      desc: "Lưu message_id trả về từ WhatsApp vào Google Sheet hoặc database để tracking. Setup error handler: nếu gửi thất bại (số không tồn tại, bị block), log lại và gửi alert cho team.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#22C55E"
                  steps={[
                    {
                      icon: <span className="text-lg">🛒</span>,
                      label: "Đơn hàng mới",
                      sub: "Webhook từ OMS",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "Lọc + chuẩn hóa",
                      sub: "Filter & Set node",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Lookup số WA",
                      sub: "Format +country code",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Gửi Template",
                      sub: "WhatsApp Cloud node",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Log kết quả",
                      sub: "Sheet / database",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả kỳ vọng">
                  100% khách nhận thông báo đơn hàng trong vòng 30 giây sau
                  khi đặt hàng thành công. Tỷ lệ mở tin WhatsApp đạt 85–92%
                  so với 18–25% nếu dùng email. Giảm hoàn toàn công việc gửi
                  xác nhận đơn hàng thủ công của nhân viên.
                </CalloutBox>

                {/* Section 5 — Workflow 2 */}
                <h2 id="workflow-2">Workflow 2: Chatbot Tự Trả Lời Tin Nhắn</h2>

                <p>
                  Khi khách nhắn vào WhatsApp Business, chatbot n8n tự phân
                  loại câu hỏi và trả lời tức thì — 24/7, không cần nhân viên
                  trực. Phù hợp với doanh nghiệp có lượng tin nhắn lớn và câu
                  hỏi lặp lại.
                </p>

                <StepList
                  steps={[
                    {
                      title: "WhatsApp Trigger node nhận tin nhắn",
                      desc: "n8n nhận webhook từ Meta khi có tin nhắn mới. Extract: sender phone (wa_id), message text, message_id, timestamp. Lọc bỏ status update (delivered, read) — chỉ xử lý tin nhắn thực.",
                    },
                    {
                      title: "Phân loại ý định (Intent Detection)",
                      desc: "Switch node khớp từ khóa tiếng Anh và tiếng Việt: 'price / giá' → pricing | 'order / đơn hàng' → order_status | 'contact / liên hệ' → contact_info | 'hello / hi / xin chào' → greeting | else → fallback_ai",
                    },
                    {
                      title: "Trả lời theo từng intent",
                      desc: "Set node chứa câu trả lời định sẵn cho mỗi intent. Có thể kéo dữ liệu động từ Google Sheet (bảng giá, thông tin liên hệ) để luôn cập nhật mà không cần sửa workflow.",
                    },
                    {
                      title: "Fallback: AI xử lý câu hỏi phức tạp",
                      desc: "Câu hỏi không khớp rule nào → chuyển sang AI Agent node (GPT-4o mini). AI có system prompt bằng tiếng Anh/Việt, knowledge base sản phẩm, và lịch sử chat để trả lời tự nhiên.",
                    },
                    {
                      title: "Gửi phản hồi qua WhatsApp Cloud node",
                      desc: "Phản hồi dùng session message (không cần template — vì đây là reply trong 24h khách nhắn trước). Thêm interactive buttons nếu muốn: 'Xem danh mục', 'Liên hệ sales', 'Theo dõi đơn hàng'.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Khách nhắn WA",
                      sub: "Webhook real-time",
                    },
                    {
                      icon: <span className="text-lg">🔀</span>,
                      label: "Phân loại intent",
                      sub: "Switch node",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Câu trả lời định sẵn",
                      sub: "Set node + Sheet",
                    },
                    {
                      icon: <span className="text-lg">🤖</span>,
                      label: "AI fallback",
                      sub: "GPT-4o mini",
                    },
                    {
                      icon: <span className="text-lg">📤</span>,
                      label: "WA reply < 3s",
                      sub: "Session message",
                    },
                  ]}
                />

                <CalloutBox type="tip" title="Interactive Buttons tăng conversion">
                  Sau khi trả lời câu hỏi, thêm 2–3 interactive quick reply
                  buttons để hướng khách đến bước tiếp theo:{" "}
                  <strong>"Xem báo giá"</strong>,{" "}
                  <strong>"Đặt lịch demo"</strong>,{" "}
                  <strong>"Chat với chuyên viên"</strong>. Theo thống kê Meta,
                  tin nhắn có buttons tăng tỷ lệ tương tác thêm 40–60% so với
                  tin nhắn text thuần túy.
                </CalloutBox>

                {/* Section 6 — Workflow 3 */}
                <h2 id="workflow-3">Workflow 3: Thu Lead Vào CRM Tự Động</h2>

                <p>
                  Mỗi người nhắn vào WhatsApp Business là một lead tiềm năng.
                  Workflow này tự động thu thập thông tin, qualify lead, và
                  đẩy vào CRM — không bỏ sót bất kỳ cơ hội nào.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Detect khách hàng mới (lần đầu nhắn)",
                      desc: "Khi nhận tin nhắn đầu tiên từ một số điện thoại chưa có trong database, flag là 'new_lead'. Lookup Google Sheet hoặc CRM bằng wa_id để xác định khách mới hay cũ.",
                    },
                    {
                      title: "Thu thập thông tin qua conversation",
                      desc: "Gửi tin nhắn chào hỏi và hỏi tên, nhu cầu. Ví dụ: 'Hello! I am [Brand] assistant. Could you tell us what you are looking for today?' — Lưu câu trả lời vào session data.",
                    },
                    {
                      title: "Qualify lead tự động",
                      desc: "AI Agent phân tích nhu cầu trong tin nhắn: budget indicator, urgency, decision-maker signals. Tự động gán lead score và label: Hot / Warm / Cold dựa trên từ khóa và ngữ cảnh.",
                    },
                    {
                      title: "Push lead vào CRM",
                      desc: "Tạo contact mới trong HubSpot, Salesforce, hoặc Google Sheet CRM. Lưu: số WA, tên (nếu có), nhu cầu, lead score, ngày tiếp xúc đầu, transcript tin nhắn đầu tiên.",
                    },
                    {
                      title: "Thông báo sales team",
                      desc: "Gửi Slack/Telegram alert cho sales rep phụ trách: 'New WA lead — +65XXXXXXXX — interested in [product X] — Lead Score: Hot. View CRM: [link]. Reply within 30 minutes.'",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    {
                      icon: <span className="text-lg">👤</span>,
                      label: "Lead mới nhắn WA",
                      sub: "Detect first contact",
                    },
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "Thu thập thông tin",
                      sub: "Conversation flow",
                    },
                    {
                      icon: <span className="text-lg">🏷️</span>,
                      label: "AI qualify + score",
                      sub: "Hot / Warm / Cold",
                    },
                    {
                      icon: <span className="text-lg">🗃️</span>,
                      label: "Push vào CRM",
                      sub: "HubSpot / Sheet",
                    },
                    {
                      icon: <span className="text-lg">🔔</span>,
                      label: "Alert sales team",
                      sub: "Slack / Telegram",
                    },
                  ]}
                />

                <p>
                  Kết hợp Workflow 3 với Facebook Lead Ads: khi khách submit
                  form quảng cáo Facebook và để lại số điện thoại, n8n tự động
                  gửi tin nhắn WhatsApp trong vòng 60 giây để chào hỏi và
                  qualify. Tốc độ phản hồi này tăng tỷ lệ chuyển đổi lead
                  Facebook lên{" "}
                  <strong>3–5 lần</strong> so với gọi điện sau 24 giờ.
                </p>

                {/* Section 7 — Workflow 4 */}
                <h2 id="workflow-4">Workflow 4: Cập Nhật Trạng Thái Vận Chuyển Real-Time</h2>

                <p>
                  Câu hỏi <em>"Where is my order?"</em> chiếm 30–40% tổng
                  lượng tin nhắn CSKH quốc tế. Workflow này tự động push cập
                  nhật vận chuyển đến khách hàng qua WhatsApp — không cần họ
                  hỏi, không cần nhân viên tra cứu.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Nhận webhook từ đơn vị vận chuyển",
                      desc: "GHN, GHTK, Viettel Post, hoặc các carrier quốc tế (DHL, FedEx, UPS) đều có webhook API. n8n nhận event khi trạng thái thay đổi: picked_up, in_transit, out_for_delivery, delivered, failed_delivery.",
                    },
                    {
                      title: "Lookup thông tin khách từ tracking code",
                      desc: "Dùng tracking_code hoặc order_id từ webhook để tìm trong database/Google Sheet: số WhatsApp của khách, tên khách, chi tiết đơn hàng.",
                    },
                    {
                      title: "Map trạng thái sang tin nhắn thân thiện",
                      desc: "Switch node chuyển technical status thành ngôn ngữ khách hàng: 'picked_up' → 'Your order has been picked up and is on the way to sorting facility' | 'out_for_delivery' → 'Great news! Your package is out for delivery today!'",
                    },
                    {
                      title: "Gửi Template Message với tracking link",
                      desc: "Dùng approved template với biến: tên khách, trạng thái, ETA, link theo dõi đơn. Nếu trạng thái là 'failed_delivery' → gửi thêm interactive buttons: 'Reschedule Delivery' hoặc 'Contact Support'.",
                    },
                    {
                      title: "Cập nhật trạng thái trong CRM/OMS",
                      desc: "Sau khi gửi WhatsApp thành công, cập nhật trạng thái đơn hàng trong hệ thống nội bộ. Log thời gian gửi thông báo để đảm bảo SLA cam kết với khách.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    {
                      icon: <span className="text-lg">🚚</span>,
                      label: "Carrier webhook",
                      sub: "GHN / DHL / FedEx",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "Lookup khách hàng",
                      sub: "Từ tracking code",
                    },
                    {
                      icon: <span className="text-lg">✍️</span>,
                      label: "Format tin nhắn",
                      sub: "Status → ngôn ngữ thân thiện",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "WA Template push",
                      sub: "Kèm tracking link",
                    },
                    {
                      icon: <span className="text-lg">🗃️</span>,
                      label: "Cập nhật OMS",
                      sub: "Log + sync status",
                    },
                  ]}
                />

                <CalloutBox type="success" title="Giảm CSKH inbound đáng kể">
                  Doanh nghiệp xuất khẩu triển khai workflow này báo cáo giảm{" "}
                  <strong>35–45%</strong> lượng tin nhắn CSKH hỏi về vận
                  chuyển. Khách hàng quốc tế được chủ động thông báo trước khi
                  họ kịp lo lắng — nâng điểm hài lòng (CSAT) trung bình từ
                  3.8 lên 4.5/5 trong 3 tháng đầu triển khai.
                </CalloutBox>

                {/* Section 8 — Before/After */}
                <h2 id="ket-qua">Kết Quả Trước và Sau Khi Triển Khai WhatsApp Automation</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Quản lý WhatsApp thủ công",
                    items: [
                      "Phản hồi chậm 2–12 giờ do múi giờ khác nhau",
                      "Nhiều nhân viên dùng chung tài khoản — câu trả lời không nhất quán",
                      "Lead mới không được follow up kịp thời",
                      "Không có record lịch sử chat với từng khách",
                      "Thông báo vận chuyển gửi thủ công, hay bị quên",
                      "Không biết tin nhắn nào đã xử lý, tin nào chưa",
                    ],
                  }}
                  after={{
                    title: "Sau — WhatsApp Cloud API + n8n",
                    items: [
                      "Phản hồi tự động trong 1–3 giây, 24/7 mọi múi giờ",
                      "Chatbot xử lý 65–75% câu hỏi không cần nhân viên",
                      "100% lead mới được chào hỏi và qualify trong 60 giây",
                      "Toàn bộ hội thoại log vào CRM, tra cứu dễ dàng",
                      "Cập nhật vận chuyển push tự động theo từng mốc",
                      "Dashboard n8n: số tin nhắn, tỷ lệ tự phục vụ, lead score",
                    ],
                  }}
                />

                <StatCard
                  stats={[
                    {
                      value: "< 3s",
                      label: "thời gian phản hồi",
                      sub: "từ 2–12 giờ xuống dưới 3 giây",
                      color: "text-green-500",
                    },
                    {
                      value: "70%",
                      label: "câu hỏi tự phục vụ",
                      sub: "chatbot xử lý không cần nhân viên",
                    },
                    {
                      value: "3–5x",
                      label: "tỷ lệ chuyển đổi lead",
                      sub: "nhờ phản hồi trong 60 giây đầu tiên",
                    },
                    {
                      value: "-40%",
                      label: "CSKH inbound",
                      sub: "nhờ proactive shipping updates",
                      color: "text-emerald-500",
                    },
                  ]}
                />

                {/* Section 9 — Comparison Table */}
                <h2 id="so-sanh">So Sánh Các Kênh Nhắn Tin Cho Doanh Nghiệp</h2>

                <p>
                  Khi nào dùng WhatsApp thay vì Zalo, Email, hoặc SMS? Bảng
                  dưới so sánh theo các tiêu chí quan trọng nhất:
                </p>

                <ComparisonTable
                  headers={["Tiêu chí", "WhatsApp Business", "Zalo OA", "Email", "SMS"]}
                  highlightCol={1}
                  rows={[
                    [
                      "Phạm vi",
                      "Toàn cầu (180+ quốc gia)",
                      "Chỉ Việt Nam",
                      "Toàn cầu",
                      "Toàn cầu (tốn phí)",
                    ],
                    [
                      "Tỷ lệ mở tin",
                      "85–92%",
                      "80–90%",
                      "18–25%",
                      "90%+",
                    ],
                    [
                      "Hỗ trợ rich media",
                      "Hình, video, PDF, buttons",
                      "Hình, card, buttons",
                      "Hình, HTML",
                      "Text only",
                    ],
                    [
                      "Chi phí gửi",
                      "~0.02–0.13 USD/conv",
                      "Phức tạp theo loại ZNS",
                      "Gần như 0",
                      "300–1.000đ/tin",
                    ],
                    [
                      "Tốc độ nhận",
                      "Tức thì",
                      "Tức thì",
                      "Vài giây đến vài phút",
                      "Tức thì",
                    ],
                    [
                      "n8n integration",
                      "Native node chính thức",
                      "HTTP Request / webhook",
                      "SMTP / API node",
                      "Twilio / SMS gateway",
                    ],
                    [
                      "Phù hợp nhất",
                      "Khách quốc tế, B2B export",
                      "Khách Việt Nam nội địa",
                      "Newsletter, drip campaign",
                      "OTP, nhắc nhở khẩn",
                    ],
                  ]}
                />

                <p>
                  Chiến lược tối ưu cho doanh nghiệp Việt Nam có cả khách
                  trong nước lẫn quốc tế:{" "}
                  <strong>
                    dùng Zalo OA cho khách nội địa, WhatsApp Business cho
                    khách nước ngoài
                  </strong>
                  . n8n cho phép bạn xây workflow phát hiện quốc gia của khách
                  hàng và tự động chọn kênh phù hợp — tất cả chạy trong cùng
                  một hệ thống.
                </p>

                <CalloutBox type="info" title="Multi-channel với n8n">
                  n8n dễ dàng kết nối cả WhatsApp và Zalo trong cùng một
                  workflow: nhận đơn hàng → kiểm tra quốc gia của số điện
                  thoại → nếu +84 (Việt Nam) gửi qua Zalo OA, các quốc gia
                  còn lại gửi qua WhatsApp. Một workflow, hai kênh, không cần
                  quản lý riêng biệt.
                </CalloutBox>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                <CalloutBox type="info" title="Sẵn sàng triển khai?">
                  <p className="mb-2">
                    Đặt lịch{" "}
                    <strong>tư vấn miễn phí 30 phút</strong> — mình sẽ phân
                    tích quy trình hiện tại và đề xuất 2–3 workflow WhatsApp
                    automation có ROI cao nhất cho doanh nghiệp bạn, từ thông
                    báo đơn hàng đến chatbot tư vấn quốc tế.
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
            title="WhatsApp Business + n8n"
            slug="whatsapp-business-n8n"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
