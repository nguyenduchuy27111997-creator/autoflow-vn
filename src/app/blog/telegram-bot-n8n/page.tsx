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
import CodeBlock from "@/components/blog/CodeBlock";
import FAQ from "@/components/blog/FAQ";
import BreadcrumbJsonLd from "@/components/blog/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Telegram Bot + n8n: Thông Báo & Quản Lý Kinh Doanh Từ Xa 2026",
  description:
    "Hướng dẫn xây Telegram Bot bằng n8n: cảnh báo đơn hàng, thông báo tồn kho, báo cáo ngày, quản lý task nhóm. Telegram 1B MAU, 1.2 tỷ tương tác bot/tháng — điều hành doanh nghiệp ngay từ điện thoại.",
  keywords: [
    "telegram bot n8n",
    "thông báo telegram tự động",
    "telegram bot kinh doanh",
    "n8n telegram workflow",
    "telegram bot quản lý",
    "tạo telegram bot",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề khi thiếu thông báo tự động", level: 2 },
  { id: "telegram-stats", text: "Tại sao chọn Telegram?", level: 2 },
  { id: "bot-setup", text: "Tạo Telegram Bot và kết nối n8n", level: 2 },
  { id: "workflow-1", text: "Workflow 1: Bot cảnh báo đơn hàng", level: 3 },
  { id: "workflow-2", text: "Workflow 2: Bot cảnh báo tồn kho", level: 3 },
  { id: "workflow-3", text: "Workflow 3: Báo cáo tóm tắt ngày", level: 3 },
  { id: "workflow-4", text: "Workflow 4: Quản lý task nhóm", level: 3 },
  { id: "ket-qua", text: "Kết quả trước và sau", level: 2 },
  { id: "so-sanh", text: "So sánh kênh thông báo kinh doanh", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
];

const faqItems = [
  {
    q: "Telegram Bot miễn phí hay tốn phí?",
    a: "Telegram Bot API hoàn toàn miễn phí — không giới hạn tin nhắn, không phí API. Bạn chỉ tốn chi phí server n8n (~200k/tháng trên VPS) và tùy chọn phí OpenAI nếu tích hợp AI. Đây là lợi thế lớn so với SMS, email transactional, hay ZNS đều tính phí mỗi tin.",
  },
  {
    q: "Telegram Bot có thể nhận lệnh từ chủ doanh nghiệp không?",
    a: "Có. Telegram Bot hỗ trợ nhận lệnh dạng /command (ví dụ /baocao, /tonkho, /donhang). Trong n8n, bạn dùng Webhook + Switch node để phân loại lệnh và thực thi workflow tương ứng. Chủ doanh nghiệp nhắn /baocao lúc 9 giờ tối là nhận ngay bản tóm tắt doanh thu ngày.",
  },
  {
    q: "Bot Telegram có an toàn để nhận thông tin kinh doanh không?",
    a: "Telegram dùng mã hóa MTProto với end-to-end encryption cho Secret Chats. Bot messages được mã hóa server-side. Để tăng bảo mật: giới hạn bot chỉ nhận lệnh từ chat_id cụ thể (whitelist), không log dữ liệu nhạy cảm, và dùng group private thay vì channel public. n8n chạy on-premise (server của bạn) nên dữ liệu không qua bên thứ ba.",
  },
  {
    q: "Tôi có thể dùng một Bot cho nhiều mục đích không?",
    a: "Có thể, nhưng không khuyến khích. Tốt hơn là tạo 2–3 bot chuyên dụng: 1 bot cho thông báo hệ thống (đơn hàng, tồn kho), 1 bot cho báo cáo, 1 bot cho team communication. Mỗi bot có token riêng, dễ quản lý và debug hơn. n8n cho phép bạn dùng nhiều Telegram credential khác nhau trong cùng một instance.",
  },
  {
    q: "n8n Telegram node khác gì so với gọi API trực tiếp?",
    a: "n8n Telegram node là wrapper tiện lợi: tự xử lý authentication, format message, error handling. Nhưng có giới hạn — một số tính năng nâng cao (inline keyboard, callback query, file upload lớn) cần dùng HTTP Request node gọi Telegram API trực tiếp. Bài này dùng cả hai: Telegram node cho tác vụ đơn giản, HTTP Request cho tính năng nâng cao.",
  },
  {
    q: "Bot có thể gửi thông báo cho nhiều người cùng lúc không?",
    a: "Có. Lưu danh sách chat_id vào Google Sheet hoặc database, dùng n8n Loop node để lặp qua từng người và gửi. Tuy nhiên, Telegram giới hạn rate: tối đa 30 tin/giây cho group, 1 tin/giây cho cùng 1 chat. n8n có Wait node để kiểm soát tốc độ gửi, tránh bị Telegram chặn.",
  },
];

export default function TelegramBotN8nBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="telegram-bot-n8n" title="Telegram Bot + n8n: Thông Báo & Quản Lý Từ Xa" />
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
              <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold">
                Telegram Bot
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold">
                n8n
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                Tự động hóa
              </span>
              <span className="text-xs text-slate-400">14 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Telegram Bot + n8n:{" "}
              <span className="gradient-text">
                Thông Báo &amp; Quản Lý Kinh Doanh Từ Xa
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Telegram có 1 tỷ người dùng toàn cầu và 1.2 tỷ tương tác bot mỗi
              tháng. Nhưng hầu hết doanh nghiệp Việt vẫn dùng điện thoại để
              hỏi nhân viên tình trạng đơn hàng, đợi email báo cáo cuối ngày, hay
              bỏ lỡ cảnh báo tồn kho vào cuối tuần. Bài này hướng dẫn bạn xây
              4 Telegram Bot bằng n8n: từ cảnh báo đơn hàng real-time đến quản
              lý task nhóm — điều hành doanh nghiệp ngay từ điện thoại, không
              cần gọi điện cho ai.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                {/* Section 1 — PAS Intro */}
                <h2 id="van-de">Vấn Đề: Điều Hành Kinh Doanh Bằng Gọi Điện và Excel</h2>

                <p>
                  Chủ shop online muốn biết hôm nay có bao nhiêu đơn mới — phải
                  nhắn nhân viên kho. Muốn biết sản phẩm nào sắp hết — phải chờ
                  kiểm kê cuối tuần. Muốn biết doanh thu tháng đến đâu — phải mở
                  laptop tra file Excel. Và khi đi công tác hay nghỉ cuối tuần,
                  mọi thứ đều phải chờ đến thứ Hai.
                </p>

                <CalloutBox type="warning" title="Chi phí vô hình của việc thiếu thông báo tự động">
                  Mỗi lần chủ doanh nghiệp phải gọi điện hỏi nhân viên tình
                  trạng vận hành tốn trung bình{" "}
                  <strong>8–15 phút</strong> (gọi + chờ + nghe báo cáo miệng).
                  Với 5 lần/ngày, đó là hơn{" "}
                  <strong>1 giờ mỗi ngày chỉ để hỏi thông tin</strong> — thông
                  tin mà hệ thống của bạn đã có sẵn nhưng chưa được đẩy đến nơi
                  cần.
                </CalloutBox>

                <p>
                  Giải pháp không phải là dashboard phức tạp hay phần mềm quản
                  lý đắt tiền — mà là{" "}
                  <strong>
                    thông tin tự động tìm đến bạn, đúng lúc, đúng nơi
                  </strong>
                  . Telegram Bot kết hợp n8n làm chính xác điều đó: đẩy thông
                  báo quan trọng về điện thoại của bạn ngay khi sự kiện xảy ra,
                  24/7, không cần ai vận hành thủ công.
                </p>

                {/* Section 2 — Stats */}
                <h2 id="telegram-stats">Tại Sao Chọn Telegram Cho Thông Báo Kinh Doanh?</h2>

                <p>
                  Trước khi đi vào kỹ thuật, hãy xem tại sao Telegram — chứ
                  không phải email hay SMS — là kênh thông báo kinh doanh tốt
                  nhất hiện tại:
                </p>

                <StatCard
                  stats={[
                    {
                      value: "1B",
                      label: "người dùng toàn cầu",
                      sub: "Monthly Active Users, tăng 3x trong 4 năm",
                      color: "text-sky-500",
                    },
                    {
                      value: "~35M",
                      label: "người dùng Việt Nam",
                      sub: "và tăng nhanh trong giới doanh nghiệp, tech",
                      color: "text-sky-600",
                    },
                    {
                      value: "10M+",
                      label: "bot đang hoạt động",
                      sub: "trên nền tảng Telegram toàn cầu",
                      color: "text-violet-500",
                    },
                    {
                      value: "1.2B",
                      label: "tương tác bot/tháng",
                      sub: "27% doanh nghiệp eCommerce dùng bot Telegram",
                      color: "text-emerald-500",
                    },
                  ]}
                />

                <p>
                  Telegram Bot API miễn phí hoàn toàn — không giới hạn tin
                  nhắn, không phí theo volume. So với SMS (tốn 500–1.500đ/tin),
                  email (thường bị bỏ qua), hay Zalo ZNS (tính phí chủ động),
                  Telegram là lựa chọn kinh tế nhất cho thông báo nội bộ. Và
                  quan trọng hơn: Telegram{" "}
                  <strong>
                    có rate cực cao — đội ngũ mở và đọc ngay, không bị kẹt
                    trong inbox email
                  </strong>
                  .
                </p>

                <CalloutBox type="info" title="n8n và Telegram">
                  n8n có Telegram node tích hợp sẵn — gửi tin nhắn, ảnh, file,
                  inline keyboard chỉ với vài click. Kết hợp với Webhook node để
                  nhận lệnh ngược lại từ Telegram, bạn có thể xây{" "}
                  <strong>bot 2 chiều</strong>: vừa đẩy thông báo chủ động, vừa
                  nhận lệnh điều khiển từ điện thoại.
                </CalloutBox>

                {/* Section 3 — Bot Setup */}
                <h2 id="bot-setup">Tạo Telegram Bot và Kết Nối Với n8n</h2>

                <p>
                  Trước khi xây bất kỳ workflow nào, bạn cần tạo bot trên
                  Telegram và lấy token để n8n xác thực. Toàn bộ quá trình mất
                  dưới 5 phút.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Tạo bot qua BotFather",
                      desc: "Mở Telegram, tìm @BotFather. Nhắn /newbot, đặt tên và username (phải kết thúc bằng \"bot\", ví dụ: MyShopAlertBot). BotFather trả về Bot Token dạng 123456789:AABBccDDee...",
                    },
                    {
                      title: "Lưu Bot Token vào n8n Credentials",
                      desc: "Trong n8n, vào Credentials → New → Telegram API. Dán Bot Token vào. Đặt tên dễ nhận biết: \"Telegram Alert Bot\". Credentials này dùng lại cho tất cả workflow.",
                    },
                    {
                      title: "Lấy Chat ID của bạn hoặc group",
                      desc: "Nhắn /start cho bot vừa tạo. Truy cập https://api.telegram.org/bot{TOKEN}/getUpdates để xem chat_id. Với group: thêm bot vào group, nhắn bất kỳ message, rồi getUpdates để lấy group chat_id (số âm, ví dụ -100123456789).",
                    },
                    {
                      title: "Test kết nối trong n8n",
                      desc: "Tạo workflow mới, kéo Telegram node → chọn action \"Send Message\". Chọn credential vừa tạo, điền Chat ID, nhắn \"Hello from n8n!\". Chạy workflow — nếu nhận được tin trong Telegram là thành công.",
                    },
                    {
                      title: "Setup Webhook để nhận lệnh (tùy chọn)",
                      desc: "Nếu muốn bot nhận lệnh từ Telegram: tạo Webhook node trong n8n → copy URL → gọi https://api.telegram.org/bot{TOKEN}/setWebhook?url={WEBHOOK_URL} để đăng ký. Từ giờ mọi tin nhắn gửi cho bot đều trigger workflow.",
                    },
                  ]}
                />

                <CodeBlock
                  lang="bash"
                  title="Lấy Chat ID và đăng ký Webhook cho Telegram Bot"
                  code={`# Lấy chat_id sau khi nhắn /start cho bot
curl "https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getUpdates"

# Kết quả trả về — tìm trường "id" trong "chat"
# {
#   "result": [{
#     "message": {
#       "chat": { "id": 123456789, "type": "private" },
#       "text": "/start"
#     }
#   }]
# }

# Đăng ký Webhook để bot nhận lệnh real-time
curl "https://api.telegram.org/bot{YOUR_BOT_TOKEN}/setWebhook" \\
  -d "url=https://your-n8n.com/webhook/telegram-commands"

# Xác nhận webhook đã active
curl "https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getWebhookInfo"`}
                />

                <CalloutBox type="tip" title="Bảo mật Bot Token">
                  Bot Token là thông tin nhạy cảm — ai có token có thể gửi tin
                  nhân danh bot của bạn. Không hardcode trong workflow, không
                  commit lên Git. Luôn lưu trong n8n Credentials. Nếu token bị
                  lộ, vào BotFather nhắn{" "}
                  <code>/revoke</code> để hủy và tạo token mới ngay.
                </CalloutBox>

                {/* Section 4 — Workflow 1 */}
                <h2 id="workflow-1">Workflow 1: Bot Cảnh Báo Đơn Hàng Mới Real-Time</h2>

                <p>
                  Workflow quan trọng nhất cho doanh nghiệp eCommerce: mỗi khi
                  có đơn hàng mới, bot Telegram nhắn ngay cho chủ shop và nhân
                  viên kho — không cần ai phải ngồi F5 trang quản lý hay chờ
                  email thông báo.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Trigger: Webhook từ nền tảng bán hàng",
                      desc: "Shopify, WooCommerce, Haravan đều hỗ trợ webhook khi có đơn mới. Hoặc dùng n8n Poll node kiểm tra API mỗi 1–2 phút nếu nền tảng không có webhook. Trigger khi: order.status = \"pending\" hoặc \"processing\".",
                    },
                    {
                      title: "Lọc và enrich thông tin đơn hàng",
                      desc: "Code node extract: tên khách, số điện thoại, địa chỉ, danh sách sản phẩm, tổng tiền, phương thức thanh toán. Thêm emoji và format tiền Việt Nam (1.500.000đ thay vì 1500000).",
                    },
                    {
                      title: "Phân loại đơn hàng theo ưu tiên",
                      desc: "Switch node: đơn > 5 triệu → tag PREMIUM + thêm emoji cờ đỏ, đơn có note đặc biệt → tag CHUYÊN BIỆT, đơn thường → tag THƯỜNG. Mỗi loại gửi về channel Telegram khác nhau.",
                    },
                    {
                      title: "Gửi thông báo Telegram với inline keyboard",
                      desc: "Telegram node gửi tin nhắn đã format kèm inline keyboard có 2 nút: [Xác nhận đơn] và [Xem chi tiết]. Khi nhân viên nhấn nút, bot nhận callback và cập nhật trạng thái trong hệ thống.",
                    },
                    {
                      title: "Cập nhật Google Sheet theo dõi đơn hàng",
                      desc: "Đồng thời ghi đơn vào Google Sheet log: timestamp, order_id, khách hàng, tổng tiền, trạng thái. Sheet này làm nguồn dữ liệu cho báo cáo cuối ngày (Workflow 3).",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#0EA5E9"
                  steps={[
                    {
                      icon: <span className="text-lg">🛒</span>,
                      label: "Đơn hàng mới",
                      sub: "Webhook trigger",
                    },
                    {
                      icon: <span className="text-lg">⚙️</span>,
                      label: "Format & phân loại",
                      sub: "Code node",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Ghi log Sheet",
                      sub: "Google Sheets",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Alert Telegram",
                      sub: "Kèm inline keyboard",
                    },
                    {
                      icon: <span className="text-lg">✅</span>,
                      label: "Nhân viên xác nhận",
                      sub: "Callback → update hệ thống",
                    },
                  ]}
                />

                <CodeBlock
                  lang="javascript"
                  title="Code node: Format tin nhắn đơn hàng cho Telegram"
                  code={`// n8n Code node — chạy bằng JavaScript
const order = $input.first().json;

// Format tiền Việt Nam
const formatVND = (amount) =>
  new Intl.NumberFormat("vi-VN").format(amount) + "đ";

// Format danh sách sản phẩm
const itemsList = order.line_items
  .map((item) => \`  • \${item.name} x\${item.quantity} — \${formatVND(item.price * item.quantity)}\`)
  .join("\\n");

// Xác định badge ưu tiên
const total = order.total_price;
const badge =
  total >= 5000000 ? "🔴 PREMIUM" :
  order.note ? "🟡 CHUYÊN BIỆT" : "🟢 THƯỜNG";

// Tạo nội dung tin nhắn Telegram (MarkdownV2)
const message = \`\${badge} ĐƠN HÀNG MỚI #\${order.order_number}

👤 Khách: \${order.customer.first_name} \${order.customer.last_name}
📞 SĐT: \${order.shipping_address.phone}
📍 Địa chỉ: \${order.shipping_address.address1}, \${order.shipping_address.city}

🛍️ Sản phẩm:
\${itemsList}

💰 Tổng tiền: \${formatVND(total)}
💳 Thanh toán: \${order.payment_gateway}
⏰ Lúc: \${new Date(order.created_at).toLocaleString("vi-VN")}\`;

return [{ json: { message, order_id: order.id, total } }];`}
                />

                <CalloutBox type="success" title="Tác động thực tế">
                  Thay vì nhân viên kiểm tra trang quản lý mỗi 15–30 phút, đơn
                  hàng mới được thông báo trong vòng{" "}
                  <strong>dưới 10 giây</strong>. Với shop online xử lý 50–200
                  đơn/ngày, đây là chênh lệch lớn trong khả năng phản ứng —
                  đặc biệt với đơn cần xử lý nhanh (grab, flash sale, đơn VIP).
                </CalloutBox>

                {/* Section 5 — Workflow 2 */}
                <h2 id="workflow-2">Workflow 2: Bot Cảnh Báo Tồn Kho Xuống Thấp</h2>

                <p>
                  Hết hàng giữa chiến dịch marketing là thảm họa. Workflow này
                  theo dõi tồn kho và gửi cảnh báo Telegram trước khi hết —
                  đủ thời gian để nhập hàng hoặc tạm ngừng bán.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Cron trigger: Kiểm tra tồn kho định kỳ",
                      desc: "n8n Schedule node chạy mỗi 4 giờ (hoặc mỗi sáng 7h và chiều 5h). Hoặc trigger real-time nếu nền tảng bán hàng gửi webhook khi inventory thay đổi.",
                    },
                    {
                      title: "Lấy danh sách tồn kho từ nguồn dữ liệu",
                      desc: "HTTP Request đến API Shopify/Haravan/WooCommerce để lấy inventory levels. Hoặc đọc từ Google Sheet nếu bạn quản lý tồn kho thủ công. Lọc chỉ lấy sản phẩm đang bán (status: active).",
                    },
                    {
                      title: "So sánh với ngưỡng cảnh báo",
                      desc: "Filter node lọc sản phẩm có số lượng <= threshold. Threshold tùy loại: sản phẩm bán nhanh (> 10/ngày) → cảnh báo khi còn 30, sản phẩm thường → cảnh báo khi còn 10, sản phẩm hết hàng → alert khẩn cấp.",
                    },
                    {
                      title: "Gửi cảnh báo theo mức độ khẩn cấp",
                      desc: "Còn > 5: cảnh báo thường — gửi vào group kho. Còn 1–5: cảnh báo khẩn — gửi cho chủ + nhân viên mua hàng. Còn 0: alert đỏ — gửi tất cả + tự động tạo draft đơn nhập hàng trong hệ thống.",
                    },
                    {
                      title: "Tránh gửi trùng lặp",
                      desc: "Lưu danh sách sản phẩm đã cảnh báo vào n8n Static Data hoặc Redis. Chỉ gửi lại khi: hàng được nhập thêm rồi hết lại, hoặc sau 24 giờ nếu chưa được xử lý.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "Cron mỗi 4 giờ",
                      sub: "Schedule trigger",
                    },
                    {
                      icon: <span className="text-lg">📦</span>,
                      label: "Lấy tồn kho",
                      sub: "API / Google Sheet",
                    },
                    {
                      icon: <span className="text-lg">🔍</span>,
                      label: "Lọc hàng sắp hết",
                      sub: "Filter node",
                    },
                    {
                      icon: <span className="text-lg">🚨</span>,
                      label: "Phân loại mức độ",
                      sub: "Thường / Khẩn / Khẩn cấp",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Alert Telegram",
                      sub: "Group kho / chủ shop",
                    },
                  ]}
                />

                <CodeBlock
                  lang="json"
                  title="Ví dụ tin nhắn cảnh báo tồn kho gửi qua Telegram"
                  code={`{
  "chat_id": "-100123456789",
  "text": "🚨 CẢNH BÁO TỒN KHO — 14:00 ngày 29/03/2026\\n\\nSản phẩm sắp hết hàng:\\n\\n🔴 HẾT HÀNG (cần nhập ngay):\\n  • Áo thun nam trắng size L — 0 cái\\n  • Quần short xanh size M — 0 cái\\n\\n🟡 SẮP HẾT (còn 1–5):\\n  • Áo polo đen size XL — còn 3 cái\\n  • Đầm hoa size S — còn 2 cái\\n\\n🟢 CẦN THEO DÕI (còn 6–15):\\n  • Áo khoác dù nữ size M — còn 8 cái\\n\\n👉 Truy cập trang quản lý để tạo đơn nhập hàng:\\nhttps://admin.yourshop.com/inventory",
  "parse_mode": "HTML",
  "reply_markup": {
    "inline_keyboard": [[
      { "text": "Xem danh sách đầy đủ", "url": "https://admin.yourshop.com/inventory" },
      { "text": "Đã xử lý", "callback_data": "inventory_ack_1711692000" }
    ]]
  }
}`}
                />

                {/* Section 6 — Workflow 3 */}
                <h2 id="workflow-3">Workflow 3: Báo Cáo Tóm Tắt Cuối Ngày Tự Động</h2>

                <p>
                  Thay vì chờ nhân viên tổng hợp báo cáo hay tự mở file Excel
                  mỗi tối, workflow này tự động gom dữ liệu từ nhiều nguồn và
                  gửi bản tóm tắt vào Telegram lúc 8 giờ tối mỗi ngày.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Cron trigger lúc 20:00 mỗi ngày",
                      desc: "n8n Schedule node kích hoạt lúc 20:00 (hoặc giờ bạn muốn review — nhiều chủ shop thích 21:00 sau giờ cao điểm). Có thể thêm lịch báo cáo tuần vào sáng thứ Hai.",
                    },
                    {
                      title: "Thu thập dữ liệu từ nhiều nguồn song song",
                      desc: "Dùng n8n Split In Batches + parallel execution: đồng thời query Google Sheet đơn hàng (Workflow 1), API doanh thu nền tảng, Google Analytics sessions, số lượng ticket support chưa xử lý.",
                    },
                    {
                      title: "Tính toán và so sánh với ngày hôm qua",
                      desc: "Code node tổng hợp: tổng đơn hàng, doanh thu, đơn trung bình, sản phẩm bán chạy nhất, so sánh % với hôm qua và cùng ngày tuần trước. Tô màu xanh/đỏ tùy tăng/giảm.",
                    },
                    {
                      title: "Tạo báo cáo dạng text có format đẹp",
                      desc: "Template node ghép dữ liệu vào template tin nhắn Telegram với emoji, số liệu nổi bật, và phần highlight: điều tốt nhất ngày hôm nay, điểm cần chú ý. Telegram hỗ trợ HTML formatting — dùng <b>, <i>, <code>.",
                    },
                    {
                      title: "Gửi báo cáo và lưu archive",
                      desc: "Telegram node gửi báo cáo vào chat cá nhân của chủ shop và channel nội bộ team. Đồng thời ghi vào Google Sheet archive — 30 ngày sau nhìn lại trend dễ dàng.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "20:00 hàng ngày",
                      sub: "Schedule trigger",
                    },
                    {
                      icon: <span className="text-lg">🔄</span>,
                      label: "Thu thập dữ liệu",
                      sub: "Song song nhiều nguồn",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Tính toán & so sánh",
                      sub: "So với hôm qua",
                    },
                    {
                      icon: <span className="text-lg">📝</span>,
                      label: "Render báo cáo",
                      sub: "Template có format đẹp",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Gửi Telegram + lưu archive",
                      sub: "Chat + Google Sheet",
                    },
                  ]}
                />

                <CodeBlock
                  lang="javascript"
                  title="Code node: Tạo nội dung báo cáo cuối ngày"
                  code={`// n8n Code node — tổng hợp báo cáo cuối ngày
const orders = $('Lấy dữ liệu đơn hàng').all();
const yesterday = $('Dữ liệu hôm qua').first().json;

const today = {
  totalOrders: orders.length,
  revenue: orders.reduce((sum, o) => sum + o.json.total, 0),
  avgOrder: 0,
};
today.avgOrder = today.revenue / today.totalOrders || 0;

// Tính % thay đổi so với hôm qua
const pctOrders = ((today.totalOrders - yesterday.totalOrders) / yesterday.totalOrders * 100).toFixed(1);
const pctRevenue = ((today.revenue - yesterday.revenue) / yesterday.revenue * 100).toFixed(1);
const arrowOrders = pctOrders >= 0 ? "▲" : "▼";
const arrowRevenue = pctRevenue >= 0 ? "▲" : "▼";

// Tìm sản phẩm bán chạy
const productMap = {};
orders.forEach((o) => {
  o.json.items?.forEach((item) => {
    productMap[item.name] = (productMap[item.name] || 0) + item.qty;
  });
});
const topProduct = Object.entries(productMap).sort((a, b) => b[1] - a[1])[0];

const formatVND = (n) => new Intl.NumberFormat("vi-VN").format(n) + "đ";
const dateStr = new Date().toLocaleDateString("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });

const report = \`📊 <b>BÁO CÁO NGÀY — \${dateStr}</b>

📦 Đơn hàng: <b>\${today.totalOrders}</b> \${arrowOrders}\${Math.abs(pctOrders)}% so với hôm qua
💰 Doanh thu: <b>\${formatVND(today.revenue)}</b> \${arrowRevenue}\${Math.abs(pctRevenue)}%
🧾 Đơn trung bình: <b>\${formatVND(today.avgOrder)}</b>

🏆 Sản phẩm bán chạy: <b>\${topProduct?.[0] ?? "—"}</b> (\${topProduct?.[1] ?? 0} cái)

\${today.revenue >= yesterday.revenue ? "✅ Hôm nay tốt hơn hôm qua!" : "⚠️ Doanh thu giảm — cần theo dõi."}\`;

return [{ json: { report } }];`}
                />

                <CalloutBox type="tip" title="Nhận báo cáo theo yêu cầu">
                  Bên cạnh lịch cố định, thêm command{" "}
                  <code>/baocao</code> để nhận báo cáo ngay lập tức bất cứ khi
                  nào bạn muốn. Webhook nhận lệnh từ Telegram → kiểm tra
                  message.text == &quot;/baocao&quot; → chạy cùng workflow tổng
                  hợp → gửi kết quả. Không cần chờ đến 8 giờ tối.
                </CalloutBox>

                {/* Section 7 — Workflow 4 */}
                <h2 id="workflow-4">Workflow 4: Bot Quản Lý Task Nhóm Qua Telegram</h2>

                <p>
                  Workflow này biến Telegram group thành công cụ quản lý công
                  việc nhẹ nhàng cho team nhỏ — giao việc, cập nhật tiến độ,
                  và nhắc nhở deadline ngay trong chat, không cần mở thêm app
                  nào khác.
                </p>

                <StepList
                  steps={[
                    {
                      title: "Nhận lệnh giao việc từ Telegram",
                      desc: "Thành viên nhắn /task @ten_nhan_vien mô_tả_công_việc deadline:2026-04-05. Webhook n8n nhận, parse lệnh để lấy: người nhận, nội dung, deadline.",
                    },
                    {
                      title: "Lưu task vào Google Sheet",
                      desc: "Google Sheets node ghi task mới: task_id (auto), người giao, người nhận, mô tả, deadline, trạng thái (pending), ngày tạo. Sheet này là source of truth cho mọi task.",
                    },
                    {
                      title: "Thông báo cho người được giao việc",
                      desc: "Bot nhắn private message cho người nhận task (cần có chat_id của họ trong database). Kèm nút inline: [Đã nhận] và [Hoàn thành] để cập nhật trạng thái bằng 1 click.",
                    },
                    {
                      title: "Nhắc nhở deadline tự động",
                      desc: "Cron job chạy mỗi sáng 8:00: query Sheet lấy task có deadline = hôm nay hoặc ngày mai với trạng thái chưa xong → gửi reminder Telegram cho người thực hiện và người giao.",
                    },
                    {
                      title: "Báo cáo task tuần cho manager",
                      desc: "Mỗi chiều thứ Sáu 17:00: tổng hợp task tuần — đã hoàn thành, đang làm, quá hạn. Gửi vào group manager. Trực quan hóa bằng thanh tiến độ ASCII hoặc danh sách có emoji.",
                    },
                  ]}
                />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    {
                      icon: <span className="text-lg">💬</span>,
                      label: "/task lệnh giao việc",
                      sub: "Telegram webhook",
                    },
                    {
                      icon: <span className="text-lg">📋</span>,
                      label: "Lưu vào Sheet",
                      sub: "Google Sheets",
                    },
                    {
                      icon: <span className="text-lg">📱</span>,
                      label: "Thông báo người nhận",
                      sub: "Private message",
                    },
                    {
                      icon: <span className="text-lg">⏰</span>,
                      label: "Nhắc deadline",
                      sub: "Cron 8:00 sáng",
                    },
                    {
                      icon: <span className="text-lg">📊</span>,
                      label: "Báo cáo tuần",
                      sub: "Thứ Sáu 17:00",
                    },
                  ]}
                />

                <CodeBlock
                  lang="javascript"
                  title="Code node: Parse lệnh /task từ Telegram"
                  code={`// n8n Code node — xử lý lệnh /task từ Telegram
const msg = $input.first().json.message;
const text = msg.text || "";
const fromUser = msg.from.username || msg.from.first_name;
const chatId = msg.chat.id;

// Ví dụ lệnh: /task @nguyen mua nguyên liệu tháng 4 deadline:2026-04-05
const taskRegex = /^\\/task\\s+@?(\\S+)\\s+(.+?)(?:\\s+deadline:(\\d{4}-\\d{2}-\\d{2}))?$/i;
const match = text.match(taskRegex);

if (!match) {
  return [{
    json: {
      reply: "❌ Cú pháp không đúng.\\nDùng: /task @tên nội_dung deadline:YYYY-MM-DD\\nVí dụ: /task @nam mua nguyên liệu deadline:2026-04-05",
      chat_id: chatId,
      valid: false,
    }
  }];
}

const [, assignee, description, deadline] = match;
const taskId = \`TASK-\${Date.now().toString(36).toUpperCase()}\`;

return [{
  json: {
    task_id: taskId,
    assignee: assignee.replace("@", ""),
    description: description.trim(),
    deadline: deadline || null,
    created_by: fromUser,
    created_at: new Date().toISOString(),
    status: "pending",
    chat_id: chatId,
    valid: true,
    reply: \`✅ Task đã tạo!\\n\\n📋 <b>\${taskId}</b>\\n👤 Giao cho: @\${assignee.replace("@", "")}\\n📝 Nội dung: \${description.trim()}\${deadline ? \`\\n⏰ Deadline: \${deadline}\` : ""}\\n\\nBạn @\${assignee.replace("@", "")} sẽ được thông báo ngay.\`,
  }
}];`}
                />

                <CalloutBox type="info" title="Tích hợp với Notion hoặc Jira">
                  Nếu team bạn đã dùng Notion hay Jira, thay Google Sheet bằng
                  HTTP Request đến Notion API hoặc Jira REST API. n8n có node
                  Notion sẵn — tạo database entry mới chỉ cần vài click. Task
                  được tạo trong Telegram nhưng lưu và quản lý trong Notion,
                  hai công cụ hoạt động liền mạch.
                </CalloutBox>

                {/* Section 8 — Before/After */}
                <h2 id="ket-qua">Kết Quả Trước và Sau Khi Dùng Telegram Bot + n8n</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Quản lý thủ công",
                    items: [
                      "Chủ shop phải chủ động hỏi nhân viên tình trạng",
                      "Biết đơn hàng mới sau 15–60 phút",
                      "Hết hàng phát hiện khi khách hàng phàn nàn",
                      "Báo cáo cuối ngày nhân viên tổng hợp mất 30–60 phút",
                      "Giao việc qua chat thường — dễ quên, không ai theo dõi",
                      "Quyết định dựa trên thông tin không đầy đủ hoặc trễ",
                    ],
                  }}
                  after={{
                    title: "Sau — Telegram Bot + n8n",
                    items: [
                      "Thông tin chủ động tìm đến — không cần hỏi ai",
                      "Đơn hàng mới thông báo trong vòng 10 giây",
                      "Cảnh báo tồn kho trước khi hết 24–48 giờ",
                      "Báo cáo tự động gửi lúc 20:00, sẵn sàng review",
                      "Task có hệ thống, có deadline, có nhắc nhở tự động",
                      "Quyết định dựa trên dữ liệu real-time mọi lúc mọi nơi",
                    ],
                  }}
                />

                <StatCard
                  stats={[
                    {
                      value: "< 10s",
                      label: "thông báo đơn hàng",
                      sub: "từ 15–60 phút xuống dưới 10 giây",
                      color: "text-sky-500",
                    },
                    {
                      value: "0đ",
                      label: "phí mỗi thông báo",
                      sub: "Telegram Bot API hoàn toàn miễn phí",
                      color: "text-emerald-500",
                    },
                    {
                      value: "-45ph",
                      label: "tiết kiệm mỗi ngày",
                      sub: "báo cáo tự động thay thế tổng hợp thủ công",
                    },
                    {
                      value: "24/7",
                      label: "giám sát liên tục",
                      sub: "kể cả cuối tuần và ngày lễ",
                      color: "text-violet-500",
                    },
                  ]}
                />

                {/* Section 9 — Comparison */}
                <h2 id="so-sanh">So Sánh Kênh Thông Báo Kinh Doanh: Email vs Zalo vs Telegram</h2>

                <p>
                  Không phải kênh nào cũng phù hợp cho tất cả loại thông báo.
                  Bảng so sánh này giúp bạn chọn đúng kênh cho từng tình huống:
                </p>

                <ComparisonTable
                  headers={[
                    "Tiêu chí",
                    "Email",
                    "Zalo OA",
                    "Telegram Bot",
                  ]}
                  highlightCol={3}
                  rows={[
                    [
                      "Chi phí mỗi tin",
                      "0đ (nhưng cần email server)",
                      "Miễn phí (phản hồi) / Tốn phí (ZNS chủ động)",
                      "Hoàn toàn miễn phí, không giới hạn",
                    ],
                    [
                      "Tốc độ nhận thông báo",
                      "1–15 phút (delay server)",
                      "Real-time",
                      "Real-time (< 1 giây)",
                    ],
                    [
                      "Tỷ lệ đọc ngay (open rate)",
                      "5–20% trong 1 giờ đầu",
                      "Cao (Zalo luôn bật notification)",
                      "Rất cao (Telegram ít spam, notification rõ)",
                    ],
                    [
                      "Phù hợp cho thông báo nội bộ",
                      "Kém (quá formal, dễ bị bỏ qua)",
                      "Trung bình (trộn lẫn với tin cá nhân)",
                      "Tốt nhất — group riêng, ít nhiễu",
                    ],
                    [
                      "Phù hợp cho khách hàng VN",
                      "Thấp",
                      "Rất cao (79.6M MAU Việt Nam)",
                      "Trung bình (~35M VN, tập trung tech/doanh nghiệp)",
                    ],
                    [
                      "Bot tương tác 2 chiều",
                      "Không thực tế",
                      "Có (nhưng phức tạp hơn)",
                      "Rất dễ — command, inline keyboard, callback",
                    ],
                    [
                      "API dành cho developer",
                      "SMTP/IMAP đơn giản",
                      "Zalo OA API — cần app review",
                      "Telegram Bot API — không cần review, tức thì",
                    ],
                    [
                      "Thích hợp nhất cho",
                      "Báo cáo định kỳ formal, external communication",
                      "Thông báo đến khách hàng, marketing automation",
                      "Thông báo nội bộ, alert hệ thống, quản lý team",
                    ],
                  ]}
                />

                <p>
                  Kết luận thực tế:{" "}
                  <strong>
                    dùng Zalo OA cho tương tác với khách hàng, Telegram Bot cho
                    vận hành nội bộ
                  </strong>
                  . Hai kênh bổ sung nhau, không thay thế nhau. n8n cho phép
                  bạn kết nối cả hai trong cùng một hệ thống tự động hóa.
                </p>

                <CalloutBox type="tip" title="Chiến lược kết hợp">
                  Setup cả hai song song: Zalo OA chatbot phục vụ khách hàng
                  24/7 (xem bài{" "}
                  <a href="/blog/chatbot-zalo-oa-n8n">
                    Chatbot Zalo OA bằng n8n
                  </a>
                  ), Telegram Bot theo dõi vận hành nội bộ và alert team. Cùng
                  chạy trên một instance n8n — tiết kiệm chi phí, quản lý tập
                  trung.
                </CalloutBox>

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>

                <FAQ items={faqItems} />

                <CalloutBox type="info" title="Sẵn sàng xây Telegram Bot cho doanh nghiệp?">
                  <p className="mb-2">
                    Đặt lịch{" "}
                    <strong>tư vấn miễn phí 30 phút</strong> — mình sẽ phân
                    tích luồng thông tin hiện tại của doanh nghiệp bạn và đề
                    xuất bộ Telegram Bot phù hợp nhất: từ alert đơn hàng cơ
                    bản đến hệ thống báo cáo và quản lý task đầy đủ.
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
            title="Telegram Bot + n8n"
            slug="telegram-bot-n8n"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
