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

export const metadata: Metadata = {
  title: "Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe — Hướng Dẫn Chi Tiết",
  description:
    "Hướng dẫn chi tiết cách tự động hóa Zalo OA cho F&B: xác nhận đơn hàng, nhắc lịch đặt bàn, chăm sóc khách hàng, thu thập feedback. Tăng 40% khách quay lại.",
  keywords: [
    "zalo oa automation",
    "tự động hóa nhà hàng",
    "zalo oa fnb",
    "n8n zalo",
    "automation f&b",
  ],
};

const tocItems = [
  { id: "van-de", text: "Vấn đề F&B đang gặp", level: 2 },
  { id: "giai-phap", text: "4 workflow Zalo OA", level: 2 },
  { id: "workflow-1", text: "Xác nhận đơn hàng", level: 3 },
  { id: "workflow-2", text: "Nhắc lịch đặt bàn", level: 3 },
  { id: "workflow-3", text: "Chăm sóc sau bữa ăn", level: 3 },
  { id: "workflow-4", text: "Khuyến mãi cá nhân hóa", level: 3 },
  { id: "ket-qua", text: "Kết quả thực tế", level: 2 },
  { id: "so-sanh", text: "So sánh: thủ công vs tự động", level: 2 },
  { id: "bat-dau", text: "Bắt đầu như thế nào?", level: 2 },
];

export default function ZaloOAFnBBlog() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <a href="/blog" className="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block">
              ← Blog
            </a>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                F&B
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Zalo OA
              </span>
              <span className="text-xs text-slate-400">12 phút đọc</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Tự Động Hóa Zalo OA Cho Nhà Hàng, Quán Cafe —{" "}
              <span className="gradient-text">Hướng Dẫn Chi Tiết 2026</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Khách đặt bàn qua Zalo nhưng không ai xác nhận. Đơn GrabFood về nhưng chưa cập nhật.
              Khách ăn xong không bao giờ quay lại. 4 workflow Zalo OA giải quyết tất cả — chạy 24/7, không cần thêm nhân viên.
            </p>
          </div>

          {/* Workflow banner — cropped center, full image for OG/share */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/blog/zalo-oa-fnb-workflow.svg"
              alt="4 Workflow Zalo OA cho F&B: Xác nhận đơn, Nhắc đặt bàn, Chăm sóc, Khuyến mãi — kết nối qua Zalo OA"
              width={1200}
              height={630}
              className="w-full h-48 md:h-64 object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Content + TOC */}
          <div className="flex gap-12 items-start relative">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

                <StatCard stats={[
                  { value: "67%", label: "khách không quay lại", sub: "vì không được chăm sóc sau bữa ăn", color: "text-red-500" },
                  { value: "3 giờ", label: "nhân viên mất mỗi ngày", sub: "gọi điện xác nhận, trả lời tin nhắn" },
                  { value: "40%", label: "tăng khách quay lại", sub: "nhờ automation Zalo OA" },
                  { value: "0 đồng", label: "chi phí thêm", sub: "Zalo OA miễn phí cho business" },
                ]} />

                {/* Section 1 */}
                <h2 id="van-de">🔥 Vấn đề F&B đang gặp với Zalo</h2>

                <p>
                  Bạn có cửa hàng trên GrabFood, ShopeeFood. Khách nhắn tin đặt bàn qua Zalo.
                  Review trên Google Maps. Khuyến mãi gửi qua group Zalo. Tất cả đều thủ công.
                </p>

                <CalloutBox type="warning" title="Bạn có nhận ra?">
                  Mỗi ngày nhân viên dành 2-3 giờ chỉ để: xác nhận đơn từ app delivery,
                  reply tin nhắn Zalo, gọi điện nhắc khách đã đặt bàn. Nếu quên 1 tin nhắn = mất 1 khách.
                </CalloutBox>

                <p>
                  Vấn đề lớn nhất? <strong>Khách ăn xong và biến mất.</strong> Không ai gửi tin cảm ơn.
                  Không ai hỏi feedback. Không ai nhắc chương trình khuyến mãi tuần sau.
                  67% khách F&B không quay lại — không phải vì đồ ăn dở, mà vì <em>họ quên bạn tồn tại</em>.
                </p>

                {/* Section 2 */}
                <h2 id="giai-phap">⚡ 4 Workflow Zalo OA Giải Quyết Tất Cả</h2>

                <p>
                  Dùng n8n kết hợp Zalo OA, bạn có thể tự động hóa toàn bộ quy trình chăm khách —
                  từ xác nhận đơn đến nhắc quay lại. Đây là 4 workflow cốt lõi:
                </p>

                <h3 id="workflow-1">Workflow 1: Xác nhận đơn hàng tự động</h3>

                <StepList steps={[
                  { title: "Đơn mới từ GrabFood/ShopeeFood", desc: "n8n webhook nhận thông tin đơn hàng real-time" },
                  { title: "Tự động lưu vào Google Sheet", desc: "Ghi nhận: tên khách, món, số lượng, thời gian, nguồn đơn" },
                  { title: "Zalo OA gửi tin xác nhận cho khách", desc: '"Cảm ơn bạn! Đơn #123 đang được chuẩn bị, dự kiến 25 phút."' },
                  { title: "Thông báo bếp qua Telegram", desc: "Chef nhận order ngay lập tức, không cần check app" },
                ]} />

                <WorkflowFlow
                  accentColor="#F59E0B"
                  steps={[
                    { icon: <span className="text-lg">📱</span>, label: "Đơn từ GrabFood", sub: "Webhook real-time" },
                    { icon: <span className="text-lg">⚡</span>, label: "n8n xử lý", sub: "Validate + format" },
                    { icon: <span className="text-lg">📊</span>, label: "Lưu Google Sheet", sub: "Log đơn hàng" },
                    { icon: <span className="text-lg">💬</span>, label: "Zalo OA → Khách", sub: "Xác nhận 30 giây" },
                    { icon: <span className="text-lg">👨‍🍳</span>, label: "Telegram → Bếp", sub: "Order ngay lập tức" },
                  ]}
                />

                <CalloutBox type="tip">
                  Zalo OA gửi tin nhắn miễn phí cho người đã follow. Nếu khách chưa follow,
                  dùng QR code trên bàn hoặc bill để khuyến khích follow — đổi lại voucher 10%.
                </CalloutBox>

                <h3 id="workflow-2">Workflow 2: Nhắc lịch đặt bàn</h3>

                <StepList steps={[
                  { title: "Khách đặt bàn qua form/Zalo", desc: "Data lưu vào Google Calendar + Sheet" },
                  { title: "24h trước: Zalo nhắc lịch", desc: '"Nhắc bạn: bàn cho 4 người vào 19:00 tối mai tại chi nhánh Quận 1"' },
                  { title: "2h trước: nhắc lần 2", desc: '"Chúng tôi đang chuẩn bị bàn cho bạn! Có thay đổi gì không?"' },
                  { title: "Không xác nhận → thông báo quản lý", desc: "Nếu khách không reply sau 2 lần nhắc → manager được thông báo để gọi xác nhận" },
                ]} />

                <WorkflowFlow
                  accentColor="#3B82F6"
                  steps={[
                    { icon: <span className="text-lg">📅</span>, label: "Khách đặt bàn", sub: "Form / Zalo / Điện thoại" },
                    { icon: <span className="text-lg">🕐</span>, label: "24h trước", sub: "Zalo nhắc lần 1" },
                    { icon: <span className="text-lg">🕑</span>, label: "2h trước", sub: "Zalo nhắc lần 2" },
                    { icon: <span className="text-lg">✅</span>, label: "Xác nhận", sub: "Hoặc alert quản lý" },
                  ]}
                />

                <h3 id="workflow-3">Workflow 3: Chăm sóc sau bữa ăn</h3>

                <p>
                  Đây là workflow <strong>quan trọng nhất</strong> mà 90% nhà hàng bỏ qua.
                </p>

                <StepList steps={[
                  { title: "2h sau khi khách ăn xong", desc: "n8n trigger dựa trên thời gian đặt bàn" },
                  { title: "Zalo gửi tin cảm ơn + khảo sát", desc: '"Cảm ơn bạn đã ghé! Bạn cho mình xin 1 phút feedback nhé?" + link Google Form' },
                  { title: "Feedback tốt → mời đánh giá Google", desc: "Nếu rating ≥ 4 sao → gửi link Google Maps review" },
                  { title: "Feedback chưa tốt → thông báo quản lý", desc: "Rating < 4 → manager nhận alert để xử lý ngay" },
                ]} />

                <WorkflowFlow
                  accentColor="#10B981"
                  steps={[
                    { icon: <span className="text-lg">🍽️</span>, label: "Khách ăn xong", sub: "Trigger theo giờ đặt bàn" },
                    { icon: <span className="text-lg">⏰</span>, label: "Đợi 2 giờ", sub: "Timing tự nhiên" },
                    { icon: <span className="text-lg">💬</span>, label: "Zalo cảm ơn", sub: "+ link khảo sát" },
                    { icon: <span className="text-lg">⭐</span>, label: "Rating ≥ 4", sub: "→ Mời review Google" },
                    { icon: <span className="text-lg">🔔</span>, label: "Rating < 4", sub: "→ Alert quản lý" },
                  ]}
                />

                <CalloutBox type="success" title="Kết quả thực tế">
                  Một chuỗi cafe ở TP.HCM dùng workflow này trong 2 tháng: Google Maps review tăng từ 4.1 → 4.6 sao,
                  và 35% khách nhận tin nhắn đã quay lại trong 30 ngày.
                </CalloutBox>

                <h3 id="workflow-4">Workflow 4: Khuyến mãi cá nhân hóa</h3>

                <StepList steps={[
                  { title: "Tag khách theo hành vi", desc: "Khách order cà phê > 3 lần/tháng = tag 'Coffee Lover'" },
                  { title: "Gửi khuyến mãi phù hợp", desc: "Coffee Lover nhận voucher cappuccino. Gia đình nhận combo weekend." },
                  { title: "Khách chưa quay lại 14 ngày", desc: "Tự động gửi: 'Lâu rồi chưa thấy bạn ghé! Tặng 20% cho lần tới nhé'" },
                ]} />

                <WorkflowFlow
                  accentColor="#8B5CF6"
                  steps={[
                    { icon: <span className="text-lg">🏷️</span>, label: "Tag hành vi", sub: "Coffee Lover, Gia đình..." },
                    { icon: <span className="text-lg">🎯</span>, label: "Phân nhóm", sub: "Theo sở thích" },
                    { icon: <span className="text-lg">🎁</span>, label: "Voucher phù hợp", sub: "Cá nhân hóa" },
                    { icon: <span className="text-lg">💌</span>, label: "Zalo OA gửi", sub: "Đúng người, đúng lúc" },
                  ]}
                />

                {/* Section 3 */}
                <h2 id="ket-qua">📊 Kết Quả Thực Tế</h2>

                <StatCard stats={[
                  { value: "0 giờ", label: "nhân viên xác nhận đơn", sub: "100% tự động", color: "text-accent" },
                  { value: "-80%", label: "miss lịch đặt bàn", sub: "từ 20% xuống 4%" },
                  { value: "+40%", label: "khách quay lại", sub: "nhờ chăm sóc tự động" },
                  { value: "4.6⭐", label: "Google Maps rating", sub: "từ 4.1 sau 2 tháng" },
                ]} />

                {/* Section 4 */}
                <h2 id="so-sanh">⚖️ So sánh: Thủ công vs Tự động</h2>

                <BeforeAfter
                  before={{
                    title: "Trước — Thủ công 100%",
                    items: [
                      "Nhân viên check app delivery mỗi 5 phút",
                      "Gọi điện từng khách nhắc đặt bàn",
                      "Khách ăn xong = biến mất, không feedback",
                      "Khuyến mãi gửi đại, không phân loại",
                      "Mất 2-3 FTE cho việc lặp lại",
                    ],
                  }}
                  after={{
                    title: "Sau — Zalo OA + n8n",
                    items: [
                      "Đơn xác nhận tự động trong 30 giây",
                      "Zalo nhắc lịch 24h + 2h trước tự động",
                      "Feedback + Google review tự thu thập",
                      "Khuyến mãi theo hành vi (Coffee Lover, Gia đình...)",
                      "0 nhân viên thêm, chạy 24/7",
                    ],
                  }}
                />

                <ComparisonTable
                  headers={["Tiêu chí", "Thủ công", "Tự động (n8n + Zalo OA)"]}
                  highlightCol={2}
                  rows={[
                    ["Xác nhận đơn", "Nhân viên check app → reply thủ công", "Tự động trong 30 giây"],
                    ["Nhắc đặt bàn", "Gọi điện từng khách", "Zalo tự gửi 24h + 2h trước"],
                    ["Chăm sóc sau ăn", "Không ai làm", "Zalo gửi 2h sau, tự phân loại feedback"],
                    ["Khuyến mãi", "Gửi đại cho tất cả", "Cá nhân hóa theo hành vi"],
                    ["Chi phí nhân sự", "1-2 FTE (15-20 triệu/tháng)", "0 đồng thêm"],
                    ["Hoạt động", "8:00 - 22:00", "24/7"],
                    ["Sai sót", "Quên reply, nhầm đơn", "0 sai sót"],
                  ]}
                />

                {/* Section 5 */}
                <h2 id="bat-dau">🚀 Bắt Đầu Như Thế Nào?</h2>

                <StepList steps={[
                  { title: "Đăng ký Zalo OA (miễn phí)", desc: "Vào oa.zalo.me → tạo OA cho nhà hàng/cafe. Mất 5 phút." },
                  { title: "Chọn workflow ưu tiên", desc: "Bắt đầu với Workflow 1 (xác nhận đơn) — dễ nhất, thấy kết quả ngay." },
                  { title: "Cài n8n và kết nối", desc: "Tự cài nếu biết code, hoặc thuê chuyên gia setup trong 1-2 tuần." },
                  { title: "Mở rộng dần", desc: "Chạy ổn → thêm Workflow 2, 3, 4. Mỗi workflow thêm 1 lớp automation." },
                ]} />

                <CalloutBox type="info" title="Không biết bắt đầu từ đâu?">
                  <p className="mb-2">
                    Đặt lịch <strong>audit miễn phí 30 phút</strong> — mình sẽ phân tích quy trình
                    nhà hàng/cafe của bạn và đưa ra lộ trình cụ thể.
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
        </article>
      </main>
      <Footer />
    </>
  );
}
