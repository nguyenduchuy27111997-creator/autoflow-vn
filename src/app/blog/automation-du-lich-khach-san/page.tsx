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
  title: "Automation Cho Du Lịch & Khách Sạn — Booking, Check-in, Review Tự Động 2026",
  description:
    "Hướng dẫn tự động hóa toàn bộ quy trình khách sạn: xác nhận booking qua Zalo, gửi thông tin trước check-in, thu thập feedback sau check-out, quản lý review OTA. Tiết kiệm 60% thời gian vận hành.",
  keywords: [
    "automation khách sạn",
    "tự động hóa du lịch",
    "n8n khách sạn",
    "booking automation",
    "review management khách sạn",
    "check-in tự động",
  ],
};

const tocItems = [
  { id: "thi-truong", text: "Thị trường du lịch Việt Nam 2025", level: 2 },
  { id: "van-de", text: "Vấn đề vận hành khách sạn", level: 2 },
  { id: "4-workflow", text: "4 workflow cốt lõi", level: 2 },
  { id: "workflow-1", text: "Xác nhận booking qua Zalo", level: 3 },
  { id: "workflow-2", text: "Thông tin trước check-in", level: 3 },
  { id: "workflow-3", text: "Feedback sau check-out", level: 3 },
  { id: "workflow-4", text: "Quản lý review OTA", level: 3 },
  { id: "so-sanh", text: "Thủ công vs Tự động", level: 2 },
  { id: "faq", text: "Câu hỏi thường gặp", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

const faqItems = [
  {
    q: "Khách sạn nhỏ (dưới 20 phòng) có cần automation không?",
    a: "Có — thậm chí còn cần hơn. Khách sạn nhỏ thường thiếu nhân sự, nên mỗi giờ tiết kiệm được đều quan trọng. Booking.com và Agoda đều có API miễn phí. Chi phí setup n8n chỉ từ 3-5 triệu một lần.",
  },
  {
    q: "OTA nào hỗ trợ API để tích hợp automation?",
    a: "Booking.com (Connectivity API), Agoda (YCS API), Airbnb (Messaging API), Expedia (Partner API) đều có API chính thức. Bạn cần đăng ký tài khoản partner hoặc dùng channel manager như Cloudbeds, Rentals United làm cầu nối.",
  },
  {
    q: "Workflow có xử lý được overbooking không?",
    a: "Có. n8n có thể kiểm tra real-time availability trước khi xác nhận, và tự động gửi cảnh báo cho manager nếu phát hiện conflict. Bạn cũng có thể set rule tự động hủy booking thấp nhất priority khi xảy ra overbooking.",
  },
  {
    q: "Gửi Zalo cho khách quốc tế thì sao?",
    a: "Với khách quốc tế, dùng WhatsApp Business API hoặc email thay Zalo. n8n hỗ trợ cả hai. Bạn có thể set điều kiện: nếu số điện thoại Việt Nam → Zalo; nếu số quốc tế → WhatsApp/email.",
  },
  {
    q: "Review tự động trên Booking.com có vi phạm điều khoản không?",
    a: "Nhắc khách để lại review là hợp lệ. Tuy nhiên không được cung cấp incentive (giảm giá, quà tặng) để đổi lấy review tốt — đây vi phạm điều khoản của hầu hết OTA. Workflow chỉ nên gửi link và lời cảm ơn.",
  },
];

export default function AutomationDuLichKhachSanBlog() {
  return (
    <>
      <BreadcrumbJsonLd slug="automation-du-lich-khach-san" title="Automation Cho Du Lịch & Khách Sạn" />
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
              <span className="text-slate-600 truncate max-w-[300px]">Du lịch</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold">
                Du lịch
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                Khách sạn
              </span>
              <span className="text-xs text-slate-500">14 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Automation Cho Du Lịch &amp; Khách Sạn —{" "}
              <span className="gradient-text">Booking, Check-in, Review Tự Động 2026</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              21 triệu lượt khách quốc tế, 58% đặt phòng qua OTA, 65% dùng điện thoại. Khách sạn
              của bạn đang xử lý tất cả bằng tay — xác nhận email, gọi điện nhắc check-in, nhờ
              khách để lại review. 4 workflow n8n giải phóng toàn bộ quy trình đó.
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "21M+", label: "khách quốc tế 2025", sub: "tăng 18% so với 2024", color: "text-sky-500" },
                  { value: "$25.67B", label: "quy mô thị trường hospitality", sub: "dự báo đến 2028" },
                  { value: "58.85%", label: "đặt phòng qua OTA", sub: "Booking.com, Agoda, Airbnb" },
                  { value: "65%", label: "dùng điện thoại để đặt", sub: "mobile-first traveler" },
                ]} />

                {/* Section 1 */}
                <h2 id="thi-truong">Du Lịch Việt Nam 2025: Cơ Hội và Áp Lực</h2>

                <p>
                  Việt Nam đón hơn 21 triệu lượt khách quốc tế năm 2025 — con số kỷ lục. Thị trường
                  hospitality đạt $25.67 tỷ USD và đang tăng trưởng mạnh. Đây là tin tốt.
                </p>

                <p>
                  Tin xấu: 58.85% booking đến từ OTA. Mỗi kênh có hệ thống riêng, chính sách riêng,
                  format thông báo riêng. Một khách sạn trung bình đang quản lý 3-5 kênh OTA
                  cùng lúc — Booking.com, Agoda, Airbnb, Expedia, website riêng — và xử lý tất cả
                  bằng tay.
                </p>

                <CalloutBox type="warning" title="Hậu quả của quản lý thủ công">
                  Front desk mất 3-4 giờ mỗi ngày chỉ để: copy thông tin booking sang spreadsheet,
                  gửi email xác nhận, gọi điện nhắc check-in, reply câu hỏi lặp đi lặp lại. Và vẫn
                  bỏ sót — dẫn đến overbooking, khách đến không có phòng, review 1 sao.
                </CalloutBox>

                {/* Section 2 */}
                <h2 id="van-de">Vấn Đề Vận Hành Khách Sạn Không Ai Nói Thẳng</h2>

                <p>
                  Hãy nhìn vào một ngày điển hình của front desk khách sạn 30 phòng:
                </p>

                <StepList steps={[
                  { title: "7:00 — Check email OTA", desc: "5 booking mới từ đêm qua. Copy từng cái vào Google Sheet. Gửi email xác nhận thủ công." },
                  { title: "9:00 — Gọi điện nhắc check-in", desc: "10 khách check-in hôm nay. Gọi từng người, nhiều máy bận, ghi chú lại để gọi lại." },
                  { title: "14:00 — Xử lý câu hỏi trước check-in", desc: '"Wifi password là gì?", "Có đón sân bay không?", "Giờ check-in là mấy giờ?" — trả lời 20+ tin nhắn giống nhau.' },
                  { title: "17:00 — Theo dõi check-out", desc: "Nhắc khách trả phòng, xử lý phát sinh, kiểm tra phòng, nhập kho." },
                  { title: "21:00 — Tổng kết ngày", desc: "Update availability trên tất cả OTA, gửi báo cáo doanh thu. Hết giờ làm nhưng vẫn còn việc." },
                ]} />

                <p>
                  Đây không phải vận hành — đây là <strong>chạy bộ mà không đến đích</strong>.
                  Automation không thay thế con người trong việc đón tiếp và chăm sóc khách — nhưng
                  nó hoàn toàn có thể xử lý tất cả những tác vụ lặp đi lặp lại kể trên.
                </p>

                {/* Section 3 */}
                <h2 id="4-workflow">4 Workflow Cốt Lõi Cho Khách Sạn</h2>

                <h3 id="workflow-1">Workflow 1: Xác Nhận Booking Qua Zalo Tự Động</h3>

                <p>
                  Mỗi booking OTA là một webhook. n8n bắt webhook đó và xử lý toàn bộ — trong
                  vòng 60 giây, khách đã nhận được xác nhận đầy đủ thông tin qua Zalo (hoặc
                  WhatsApp/email với khách quốc tế).
                </p>

                <StepList steps={[
                  { title: "Booking mới từ Booking.com / Agoda / website", desc: "n8n nhận webhook real-time, parse thông tin: tên, phòng, check-in/out, yêu cầu đặc biệt" },
                  { title: "Kiểm tra availability và overbooking", desc: "Query property management system hoặc Google Sheet để xác nhận phòng thực sự còn trống" },
                  { title: "Lưu vào hệ thống trung tâm", desc: "Google Sheet / Notion / PMS với đầy đủ thông tin, tag trạng thái, nguồn booking" },
                  { title: "Gửi xác nhận qua Zalo OA", desc: '"Kính chào anh/chị [Tên]! Khách sạn ABC xác nhận booking #[ID]: phòng Deluxe, 3 đêm, check-in 15/04..."' },
                  { title: "Thông báo nội bộ", desc: "Telegram/Slack cho manager: booking mới, loại phòng, nguồn, giá trị" },
                ]} />

                <WorkflowFlow
                  accentColor="#0EA5E9"
                  steps={[
                    { icon: <span className="text-lg">🏨</span>, label: "OTA Booking", sub: "Booking.com / Agoda" },
                    { icon: <span className="text-lg">⚡</span>, label: "n8n xử lý", sub: "Parse + validate" },
                    { icon: <span className="text-lg">📊</span>, label: "Lưu hệ thống", sub: "Sheet / PMS" },
                    { icon: <span className="text-lg">💬</span>, label: "Zalo → Khách", sub: "Xác nhận 60 giây" },
                    { icon: <span className="text-lg">🔔</span>, label: "Alert Manager", sub: "Telegram nội bộ" },
                  ]}
                />

                <CalloutBox type="tip">
                  Với khách quốc tế (số điện thoại +84 không bắt đầu), n8n tự động chuyển sang
                  WhatsApp Business API hoặc email. Một workflow, nhiều kênh, không cần setup riêng.
                </CalloutBox>

                <h3 id="workflow-2">Workflow 2: Gói Thông Tin Trước Check-in</h3>

                <p>
                  Khách hỏi cùng những câu hỏi mỗi ngày: Wifi password? Địa chỉ chính xác? Đón
                  sân bay không? Nhận phòng sớm được không? Thay vì trả lời 20 lần — gửi một lần,
                  đúng lúc, đúng người.
                </p>

                <StepList steps={[
                  { title: "48h trước check-in: gửi gói thông tin", desc: "Địa chỉ + Google Maps link, số điện thoại lễ tân, giờ check-in/out, dịch vụ đón sân bay, Wifi password, parking" },
                  { title: "24h trước: hỏi yêu cầu đặc biệt", desc: '"Bạn có yêu cầu gì đặc biệt không? Cần thêm gối, crib cho trẻ em, hay đặt bữa sáng trước?"' },
                  { title: "3h trước: xác nhận phòng đã sẵn sàng", desc: '"Phòng của bạn đã được dọn sạch và sẵn sàng đón bạn! Chúng tôi mong gặp bạn chiều nay."' },
                  { title: "Trigger sớm check-in nếu khách yêu cầu", desc: "Nếu khách reply muốn check-in sớm → n8n kiểm tra phòng trống và báo lễ tân" },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">📅</span>, label: "T-48h", sub: "Gói thông tin đầy đủ" },
                    { icon: <span className="text-lg">🙋</span>, label: "T-24h", sub: "Hỏi yêu cầu đặc biệt" },
                    { icon: <span className="text-lg">✅</span>, label: "T-3h", sub: "Phòng đã sẵn sàng" },
                    { icon: <span className="text-lg">🏨</span>, label: "Check-in", sub: "Khách đã biết tất cả" },
                  ]}
                />

                <StatCard stats={[
                  { value: "-70%", label: "câu hỏi lặp lại", sub: "nhờ pre-arrival info automation", color: "text-emerald-500" },
                  { value: "4.8/5", label: "satisfaction score", sub: "khách được thông báo đầy đủ trước khi đến" },
                ]} />

                <h3 id="workflow-3">Workflow 3: Thu Thập Feedback Sau Check-out</h3>

                <p>
                  Thời điểm vàng để hỏi feedback là <strong>2-4 giờ sau check-out</strong> — khách
                  đã về đến nơi, cảm xúc vẫn còn tươi, chưa bị phân tâm bởi công việc. Đây là
                  window hẹp nhất và hiệu quả nhất.
                </p>

                <StepList steps={[
                  { title: "Trigger khi khách check-out", desc: "PMS hoặc manual update Google Sheet với timestamp check-out" },
                  { title: "Đợi 3 giờ, gửi tin cảm ơn + khảo sát", desc: '"Cảm ơn anh/chị đã ở tại [Khách sạn]! Chúng tôi rất trân trọng kỳ nghỉ của bạn. Bạn có thể dành 2 phút cho chúng tôi không?" + link 5-question form' },
                  { title: "Phân loại feedback tự động", desc: "Rating 4-5: pipeline sang workflow review. Rating 1-3: alert manager ngay lập tức để xử lý." },
                  { title: "Lưu insights vào dashboard", desc: "Google Sheet tổng hợp: điểm mạnh, điểm yếu, trending issues theo tháng" },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">🧳</span>, label: "Check-out", sub: "Timestamp ghi nhận" },
                    { icon: <span className="text-lg">⏰</span>, label: "Đợi 3 giờ", sub: "Timing tự nhiên" },
                    { icon: <span className="text-lg">💬</span>, label: "Cảm ơn + Form", sub: "Zalo / WhatsApp" },
                    { icon: <span className="text-lg">⭐</span>, label: "Rating ≥ 4", sub: "→ Workflow review" },
                    { icon: <span className="text-lg">🚨</span>, label: "Rating < 4", sub: "→ Alert manager" },
                  ]}
                />

                <h3 id="workflow-4">Workflow 4: Quản Lý Review OTA Tự Động</h3>

                <p>
                  Review score trên Booking.com ảnh hưởng trực tiếp đến ranking và tỷ lệ chuyển
                  đổi. 1 điểm tăng = +10% doanh thu theo nghiên cứu của Cornell Hotel School. Nhưng
                  90% khách hài lòng không tự để lại review — họ cần được nhắc.
                </p>

                <StepList steps={[
                  { title: "Lọc khách hài lòng từ internal feedback", desc: "Chỉ mời những khách đã cho rating 4-5 sao trong internal survey — không spam, không vi phạm OTA terms" },
                  { title: "Gửi link review cụ thể cho từng OTA", desc: "Nếu khách đến từ Booking.com → link review Booking.com. Agoda → Agoda. Website → Google Maps." },
                  { title: "Nhắc nhở sau 48h nếu chưa review", desc: "Gửi nhắc nhở 1 lần duy nhất — không spam, giữ tỉ lệ unsubscribe thấp" },
                  { title: "Monitor và báo cáo tuần", desc: "Google Sheet tổng hợp: số review mới, điểm trung bình theo OTA, so sánh tuần trước" },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">✅</span>, label: "Internal 4-5★", sub: "Lọc khách hài lòng" },
                    { icon: <span className="text-lg">🎯</span>, label: "Match nguồn", sub: "Booking / Agoda / GG" },
                    { icon: <span className="text-lg">💌</span>, label: "Gửi link review", sub: "Đúng OTA" },
                    { icon: <span className="text-lg">🔔</span>, label: "Nhắc T+48h", sub: "Nếu chưa review" },
                    { icon: <span className="text-lg">📊</span>, label: "Báo cáo tuần", sub: "Dashboard tự động" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả sau 3 tháng tại một resort Đà Nẵng">
                  Booking.com score tăng từ 8.2 → 8.9. Số review mới tăng 3.2x. Ranking category
                  tăng từ top 15 → top 6. Tỷ lệ chuyển đổi tăng 22%.
                </CalloutBox>

                {/* Section 4 */}
                <h2 id="so-sanh">So Sánh: Vận Hành Thủ Công vs Có Automation</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Thủ công 100%",
                    items: [
                      "Copy booking từ 5 OTA vào spreadsheet mỗi sáng",
                      "Gọi điện hoặc email nhắc check-in từng khách",
                      "Trả lời 20+ câu hỏi giống nhau mỗi ngày",
                      "Quên nhờ review — score tụt dần",
                      "Feedback xấu phát hiện muộn, đã lên mạng rồi",
                      "Front desk không còn thời gian chăm sóc khách tại chỗ",
                    ],
                  }}
                  after={{
                    title: "Sau — n8n Automation",
                    items: [
                      "Booking tự vào hệ thống, xác nhận trong 60 giây",
                      "Gói pre-arrival info tự gửi 48h trước",
                      "Câu hỏi thường gặp được trả lời tự động 24/7",
                      "Review pipeline tự động cho khách hài lòng",
                      "Alert ngay khi có feedback dưới 4 sao",
                      "Front desk tập trung 100% vào trải nghiệm thực",
                    ],
                  }}
                />

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "Automation (n8n)"]}
                  highlightCol={2}
                  rows={[
                    ["Xác nhận booking", "Email thủ công, 1-4 giờ", "Zalo tự động, dưới 60 giây"],
                    ["Pre-arrival info", "Trả lời từng khách", "Tự gửi 48h + 24h + 3h trước"],
                    ["Thu thập feedback", "Không có quy trình", "Tự động 3h sau check-out"],
                    ["Quản lý review OTA", "Nhờ vả ngẫu hứng", "Pipeline có hệ thống"],
                    ["Xử lý feedback xấu", "Phát hiện trễ khi đã online", "Alert manager ngay lập tức"],
                    ["Thời gian vận hành front desk", "3-4 giờ/ngày cho task lặp lại", "30 phút/ngày cho exception"],
                    ["Overbooking", "Xảy ra do nhập tay sai", "Kiểm tra tự động trước confirm"],
                  ]}
                />

                {/* FAQ */}
                <h2 id="faq">Câu Hỏi Thường Gặp</h2>
                <FAQ items={faqItems} />

                {/* Section 5 */}
                <h2 id="bat-dau">Bắt Đầu Ở Đâu Với Ngân Sách Hạn Chế?</h2>

                <p>
                  Bạn không cần implement 4 workflow cùng lúc. Thứ tự ưu tiên theo ROI:
                </p>

                <StepList steps={[
                  { title: "Tuần 1: Workflow xác nhận booking", desc: "ROI rõ ràng nhất, dễ đo lường. Tiết kiệm ngay 2 giờ/ngày cho front desk." },
                  { title: "Tuần 2-3: Pre-arrival info", desc: "Giảm 70% câu hỏi lặp lại. Khách hài lòng hơn ngay từ trước khi đến." },
                  { title: "Tuần 4: Feedback + review pipeline", desc: "Score OTA tăng dần, ảnh hưởng doanh thu dài hạn nhất." },
                  { title: "Tháng 2+: Tối ưu và mở rộng", desc: "Thêm báo cáo tự động, sync inventory, upsell automation (spa, airport transfer)." },
                ]} />

                <CalloutBox type="info" title="Cần hỗ trợ setup?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — mình sẽ xem quy trình
                    hiện tại của khách sạn bạn và đề xuất workflow phù hợp nhất để bắt đầu.
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
            title="Automation Du Lịch Khách Sạn"
            slug="automation-du-lich-khach-san"
            date="2026-04-01"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
