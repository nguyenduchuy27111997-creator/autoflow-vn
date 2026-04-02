import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Chương Trình Pilot — Giảm 40-50% | AutoFlow VN",
  description:
    "Tự động hóa 1 workflow trong 7 ngày với giá pilot 5-8 triệu. Chỉ 3 slot. Audit chuyên sâu, workflow n8n production-ready, SOP & video hướng dẫn.",
  openGraph: {
    title: "Chương Trình Pilot — Giảm 40-50% | AutoFlow VN",
    description:
      "Tự động hóa 1 workflow trong 7 ngày với giá pilot 5-8 triệu. Chỉ 3 slot.",
    url: "https://autoflowvn.net/pilot",
  },
};

const deliverables = [
  {
    icon: "🔍",
    title: "Audit chuyên sâu (2 giờ online)",
    desc: "Phân tích quy trình hiện tại, mapping các điểm nghẽn, tính ROI cụ thể cho từng workflow.",
  },
  {
    icon: "⚙️",
    title: "1 workflow n8n production-ready",
    desc: "Workflow tự động hóa hoàn chỉnh, đã test với dữ liệu thật, chạy trên n8n cloud hoặc self-hosted.",
  },
  {
    icon: "🎥",
    title: "Video Loom hướng dẫn",
    desc: "Video step-by-step để team xem lại bất cứ lúc nào, không cần nhớ hết từ buổi bàn giao.",
  },
  {
    icon: "📋",
    title: "SOP trên Notion",
    desc: "Tài liệu bước-bước rõ ràng: ai chạy, khi nào chạy, lỗi thì xử lý sao. Ai cũng làm được.",
  },
  {
    icon: "💬",
    title: "Hỗ trợ 7 ngày sau bàn giao",
    desc: "Fix lỗi, trả lời thắc mắc qua Zalo. Đảm bảo workflow chạy ổn định trước khi kết thúc.",
  },
];

const timeline = [
  {
    day: "Ngày 1–2",
    phase: "Audit & Planning",
    tasks: [
      "Discovery call 2 giờ, mapping quy trình",
      "Xác định workflow ưu tiên, tính ROI",
      "Thiết kế giải pháp & confirm scope",
    ],
  },
  {
    day: "Ngày 3–5",
    phase: "Build & Test",
    tasks: [
      "Xây dựng workflow trên n8n",
      "Kết nối API (Shopee/Tiki/MISA/KiotViet/Zalo OA)",
      "Test với dữ liệu thật, handle edge cases",
    ],
  },
  {
    day: "Ngày 6–7",
    phase: "Bàn Giao & Training",
    tasks: [
      "Training cho team (video Loom + live)",
      "Giao SOP trên Notion",
      "Bật workflow production, monitor ngày đầu",
    ],
  },
];

const industryExamples = [
  {
    industry: "E-commerce",
    color: "border-[#EE4D2D]",
    bg: "bg-[#EE4D2D]/5",
    badge: "bg-[#EE4D2D]/10 text-[#EE4D2D]",
    workflow: "Đơn Shopee → MISA + Zalo OA",
    detail:
      "Đơn hàng mới trên Shopee/Tiki tự động tạo hóa đơn trong MISA/KiotViet và gửi xác nhận qua Zalo OA cho khách.",
    saves: "4-5 giờ/ngày nhập liệu",
  },
  {
    industry: "Giáo dục",
    color: "border-blue-500",
    bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    workflow: "Form đăng ký → CRM + Zalo nhắc lịch",
    detail:
      "Học viên đăng ký trên website tự động vào CRM, gán lớp, gửi lịch học và nhắc nhở qua Zalo OA.",
    saves: "3-4 giờ/ngày quản lý học viên",
  },
  {
    industry: "Bất động sản",
    color: "border-emerald-500",
    bg: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    workflow: "Lead Ads → CRM + phân bổ sales",
    detail:
      "Lead từ Facebook Ads tự động vào CRM, phân bổ cho sales, gửi tài liệu dự án qua Zalo và nhắc follow-up.",
    saves: "Lead response time từ 6h → 5 phút",
  },
  {
    industry: "F&B",
    color: "border-orange-500",
    bg: "bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
    workflow: "Đơn GrabFood → POS + báo cáo",
    detail:
      "Đơn từ GrabFood/ShopeeFood tự động sync vào POS, cập nhật tồn kho, gửi báo cáo doanh thu cuối ngày.",
    saves: "2-3 giờ/ngày đối soát đơn",
  },
];

const successCriteria = [
  "Workflow chạy ổn định trên n8n production trong 7 ngày liên tục",
  "Giảm thời gian xử lý thủ công tối thiểu 50%",
  "Không phát sinh lỗi nghiêm trọng ảnh hưởng kinh doanh",
  "Khách hàng xác nhận hài lòng với kết quả",
];

const conditions = [
  {
    icon: "📸",
    title: "Cho phép dùng kết quả làm case study",
    desc: "Số liệu trước/sau, mô tả quy trình (ẩn danh nếu muốn)",
  },
  {
    icon: "💬",
    title: "Cho 1 testimonial ngắn",
    desc: "Text hoặc video 30-60 giây, trong vòng 7 ngày sau bàn giao",
  },
  {
    icon: "🤝",
    title: "Giới thiệu 2 người quen",
    desc: "Nếu hài lòng, giới thiệu 2 người có nhu cầu tương tự",
  },
];

export default function PilotPage() {
  // Pick testimonials from case studies
  const testimonials = caseStudies.slice(0, 3).map((cs) => ({
    quote: cs.testimonial.quote,
    name: cs.testimonial.name,
    role: cs.testimonial.role,
    industry: cs.industry,
  }));

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* ── Hero ── */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Chỉ 3 slot · Giảm 40-50% · 7 ngày triển khai
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Chương Trình Pilot:{" "}
              <span className="gradient-text">
                Tự Động Hóa Trong 1 Tuần
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              Thử tự động hóa 1 workflow thật với giá ưu đãi. Nếu hài lòng —
              mở rộng. Nếu không — bạn vẫn có workflow chạy thật, SOP, và video
              hướng dẫn.
            </p>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl">
            {[
              { value: "5-8 triệu", label: "Chi phí pilot (1 lần)", color: "text-accent" },
              { value: "1 tuần", label: "Thời gian triển khai", color: "text-primary" },
              { value: "4-5 giờ/ngày", label: "Tiết kiệm thời gian", color: "text-secondary" },
              { value: "12-15x", label: "ROI năm đầu", color: "text-orange-600" },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-5 text-center"
              >
                <p className={`font-display font-extrabold text-2xl ${m.color}`}>
                  {m.value}
                </p>
                <p className="text-xs text-slate-500 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-8">
            Bạn nhận được gì?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span className="text-2xl mb-3 block">{d.icon}</span>
                <h3 className="font-display font-bold text-slate-900 mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Industry Examples ── */}
        <section className="bg-slate-50 py-16 mb-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3">
              Pilot phù hợp với ngành nào?
            </h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              Mỗi ngành có workflow phổ biến nhất riêng. Chọn 1 để bắt đầu — mở
              rộng thêm sau.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {industryExamples.map((ex, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border-l-4 ${ex.color} p-6`}
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${ex.badge} mb-3`}
                  >
                    {ex.industry}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 mb-2">
                    {ex.workflow}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {ex.detail}
                  </p>
                  <p className="text-sm font-semibold text-accent">
                    Tiết kiệm: {ex.saves}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-8">
            Timeline 7 ngày
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{t.day}</p>
                      <p className="font-display font-bold text-slate-900">
                        {t.phase}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {t.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <svg
                          className="shrink-0 mt-0.5 text-accent"
                          width="14"
                          height="14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M2 7l3 3 7-7" />
                        </svg>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 text-slate-300">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── ROI Comparison ── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-8">
            Tại sao đây là quyết định đúng?
          </h2>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="p-8 text-center">
                <p className="text-xs text-slate-500 mb-2">
                  Thuê nhân viên nhập liệu
                </p>
                <p className="font-display font-extrabold text-2xl text-red-500 mb-1">
                  8-12 triệu/tháng
                </p>
                <p className="text-sm text-slate-500">= 96-144 triệu/năm</p>
                <p className="text-xs text-red-400 mt-2">
                  + Sai sót, nghỉ phép, training
                </p>
              </div>
              <div className="p-8 text-center bg-accent/5">
                <p className="text-xs text-slate-500 mb-2">Gói Pilot AutoFlow</p>
                <p className="font-display font-extrabold text-2xl text-accent mb-1">
                  5-8 triệu (1 lần)
                </p>
                <p className="text-sm text-slate-500">Hoàn vốn sau 1 tháng</p>
                <p className="text-xs text-accent mt-2">
                  Chạy 24/7, không sai sót
                </p>
              </div>
              <div className="p-8 text-center">
                <p className="text-xs text-slate-500 mb-2">ROI năm đầu</p>
                <p className="font-display font-extrabold text-2xl text-primary mb-1">
                  Tiết kiệm 80-130 triệu
                </p>
                <p className="text-sm text-slate-500">ROI 12-15x</p>
                <p className="text-xs text-primary mt-2">
                  Chưa tính tăng doanh thu
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Success Criteria ── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Success criteria */}
            <div>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-6">
                Tiêu chí thành công
              </h2>
              <p className="text-sm text-slate-500 mb-5">
                Pilot được coi là thành công khi đạt tất cả tiêu chí sau:
              </p>
              <div className="space-y-3">
                {successCriteria.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4"
                  >
                    <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-700">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Win-win conditions */}
            <div>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-6">
                Điều kiện tham gia (Win-Win)
              </h2>
              <p className="text-sm text-slate-500 mb-5">
                Để được hưởng mức giá pilot ưu đãi 40-50%, bạn đồng ý:
              </p>
              <div className="space-y-4">
                {conditions.map((c, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl shrink-0">{c.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-slate-900">
                        {c.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-700 leading-relaxed">
                  Đây là thỏa thuận win-win: bạn được giá tốt, mình có case
                  study thật để phát triển. Nếu không hài lòng — không cần
                  testimonial hay giới thiệu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-slate-50 py-16 mb-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-8 text-center">
              Khách hàng nói gì?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6"
                >
                  <svg
                    className="text-primary/20 mb-3"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-slate-100 pt-3">
                    <p className="font-semibold text-sm text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── After Pilot / Upsell ── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3">
            Sau pilot — mở rộng thêm
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Pilot thành công? Nâng cấp lên gói lớn hơn với ưu đãi 10% dành
            riêng cho khách pilot.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                workflows: "1-3 workflows",
                price: "8-15 triệu",
                timeline: "1-2 tuần",
                highlight: false,
              },
              {
                name: "Growth",
                workflows: "3-5 workflows",
                price: "20-35 triệu",
                timeline: "3-4 tuần",
                highlight: true,
              },
              {
                name: "Scale",
                workflows: "5-10 workflows",
                price: "40-60 triệu",
                timeline: "4-6 tuần",
                highlight: false,
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-6 ${
                  pkg.highlight
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                    : "border-slate-200 bg-white"
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Phổ biến nhất
                  </span>
                )}
                <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{pkg.workflows}</p>
                <p className="font-display font-extrabold text-2xl text-primary mb-1">
                  {pkg.price}
                </p>
                <p className="text-xs text-slate-500 mb-4">
                  Timeline: {pkg.timeline}
                </p>
                <p className="text-xs text-accent font-semibold">
                  Khách pilot giảm thêm 10%
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Refund Policy ── */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-4 text-center">
              Chính sách hoàn tiền minh bạch
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-display font-bold text-green-600 text-lg">
                  100%
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Trước khi bắt đầu build
                </p>
                <p className="text-xs text-slate-500">(Ngày 1-2)</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4">
                <p className="font-display font-bold text-yellow-600 text-lg">
                  50%
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Trong quá trình build
                </p>
                <p className="text-xs text-slate-500">(Ngày 3-5)</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="font-display font-bold text-slate-500 text-lg">
                  0%
                </p>
                <p className="text-xs text-slate-500 mt-1">Sau bàn giao</p>
                <p className="text-xs text-slate-500">(Ngày 6+)</p>
              </div>
            </div>
            <p className="text-xs text-center text-slate-500 mt-4">
              Mỗi bên có thể chấm dứt thỏa thuận bằng email thông báo trước 3
              ngày.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-10 md:p-14 text-center text-white">
            <h2 className="font-display font-extrabold text-2xl md:text-4xl mb-4">
              Sẵn sàng thử?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Đặt lịch audit miễn phí 30 phút. Mình sẽ phân tích quy trình và
              gửi đề xuất pilot cụ thể cho doanh nghiệp của bạn.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold text-lg px-10 py-4 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Đặt lịch audit miễn phí
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <p className="text-xs text-white/50 mt-4">
              30 phút · Miễn phí · Không cam kết · Qua Zoom hoặc Google Meet
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
