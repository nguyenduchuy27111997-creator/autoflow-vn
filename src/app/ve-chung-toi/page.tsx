import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Về Chúng Tôi — Đội ngũ AutoFlow VN",
  description:
    "Đội ngũ AutoFlow VN — chuyên gia tự động hóa quy trình cho SME Việt Nam bằng n8n. Tích hợp Zalo, MISA, Shopee, KiotViet. Kết quả trong 2–4 tuần.",
  alternates: { canonical: "https://autoflowvn.net/ve-chung-toi" },
  openGraph: {
    title: "Về Chúng Tôi — Đội ngũ AutoFlow VN",
    description:
      "Đội ngũ AutoFlow VN — chuyên gia tự động hóa quy trình cho SME Việt Nam bằng n8n.",
    url: "https://autoflowvn.net/ve-chung-toi",
  },
};

const team = [
  {
    name: "Huy Nguyen",
    role: "Founder & Lead Automation Engineer",
    initial: "H",
    color: "#0066FF",
    desc: "Kinh nghiệm phát triển phần mềm, tích hợp hệ thống và tư vấn công nghệ. Focus 100% vào giúp SME VN tự động hóa quy trình bằng n8n.",
    skills: ["n8n", "Zalo OA API", "MISA Integration", "AI Workflows"],
  },
];

const techStack = [
  { name: "n8n", desc: "Nền tảng automation chính — mã nguồn mở, self-hosted", color: "#EA4B71" },
  { name: "Zalo OA", desc: "Kênh giao tiếp #1 cho SME Việt Nam", color: "#0068FF" },
  { name: "MISA", desc: "Kế toán & ERP phổ biến nhất VN", color: "#E31937" },
  { name: "KiotViet", desc: "POS & quản lý bán hàng", color: "#00A651" },
  { name: "Shopee API", desc: "Đồng bộ đơn hàng đa kênh real-time", color: "#EE4D2D" },
  { name: "OpenAI / Claude", desc: "AI brain cho workflow thông minh", color: "#6366F1" },
  { name: "Google Sheets", desc: "CRM nhẹ & báo cáo tự động", color: "#0F9D58" },
  { name: "Haravan", desc: "E-commerce platform Việt Nam", color: "#2962FF" },
];

const stats = [
  { value: "50+", label: "Workflows đã build" },
  { value: "4", label: "Ngành chuyên sâu" },
  { value: "2–4", label: "Tuần triển khai" },
  { value: "100%", label: "Hoàn tiền nếu không deliver" },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Nói thẳng, không vòng vo",
    desc: "Nếu quy trình của bạn chưa cần automation — chúng tôi sẽ nói thẳng. Không bán thứ bạn không cần.",
    color: "#10B981",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
    title: "Kết quả trong tuần, không phải tháng",
    desc: "Gói Starter chạy trong 1 tuần. Growth 3 tuần. Không kéo dài, không phát sinh chi phí.",
    color: "#0066FF",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Hiểu sâu ecosystem Việt Nam",
    desc: "Zalo OA, MISA, KiotViet, Shopee — chúng tôi tích hợp hàng ngày, không phải consultant nước ngoài cố gắng hiểu thị trường VN.",
    color: "#F59E0B",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Bàn giao toàn bộ, không giữ lại",
    desc: "Workflows, video hướng dẫn, SOP, source code — tất cả thuộc về bạn. Không lock-in, không phụ thuộc.",
    color: "#6366F1",
  },
];

const approach = [
  {
    number: "01",
    title: "Nghe trước, build sau",
    desc: "Chúng tôi không bán solution có sẵn. Mỗi doanh nghiệp có quy trình riêng — chúng tôi lắng nghe, phân tích, rồi mới đề xuất.",
  },
  {
    number: "02",
    title: "Làm đúng việc, không làm nhiều việc",
    desc: "Focus vào những quy trình tốn thời gian nhất. 1 workflow đúng chỗ > 10 workflows không ai dùng.",
  },
  {
    number: "03",
    title: "Training team, không chỉ bàn giao code",
    desc: "Mỗi workflow có video Loom hướng dẫn và SOP. Team bạn tự vận hành được mà không cần hiểu code.",
  },
];

export default function VeChungToiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              Về AutoFlow VN
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Đội ngũ đứng sau{" "}
              <span className="gradient-text">50+ workflows tự động</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8">
              AutoFlow giúp SME Việt Nam tự động hóa quy trình lặp lại — để team bạn tập trung vào việc tạo ra giá trị thực, thay vì copy-paste cả ngày.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Nói chuyện với chúng tôi
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 8h6M8 5l3 3-3 3" />
                </svg>
              </a>
              <a
                href="/ket-qua"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200"
              >
                Xem case studies
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                <p className="font-display font-extrabold text-2xl text-primary">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-slate-50 relative noise-bg">
          <div className="max-w-3xl mx-auto px-6 relative">
            <div className="text-center mb-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
                Sứ mệnh của chúng tôi
              </h2>
            </div>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                93% SME Việt Nam biết họ cần tự động hóa. Nhưng chưa tới 20% có người giúp triển khai — với giá phù hợp, trong thời gian hợp lý, và hiểu đúng ecosystem Việt Nam.
              </p>
              <p>
                Các công ty IT lớn charge 200–500 triệu cho 1 project và mất 3–6 tháng. Các tool nước ngoài (Zapier, Make) không tích hợp native với Zalo OA, MISA, hay KiotViet.
              </p>
              <p className="font-semibold text-slate-900">
                AutoFlow ra đời để lấp khoảng trống đó — automation chất lượng enterprise, giá SME, delivery trong tuần chứ không phải tháng.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Đội ngũ
            </h2>
            <p className="text-slate-500">
              Lean team, deep expertise — bạn nói chuyện trực tiếp với người build workflow
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6">
                  <div
                    className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-white font-display font-bold text-3xl"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initial}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-slate-900">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{member.role}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mt-3">{member.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50 relative noise-bg">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
                Giá trị cốt lõi
              </h2>
              <p className="text-slate-500">
                Những nguyên tắc định hướng mọi quyết định của chúng tôi
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-2xl border border-slate-200 p-7 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${v.color}15`, color: v.color }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 mb-1.5">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Cách chúng tôi làm việc
            </h2>
          </div>
          <div className="space-y-6">
            {approach.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-md transition-all"
              >
                <span className="font-display font-extrabold text-3xl text-primary/15 shrink-0">
                  {a.number}
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-slate-50 relative noise-bg">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
                Tech Stack
              </h2>
              <p className="text-slate-500">
                Công cụ chúng tôi dùng hàng ngày để build automation cho clients
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">{tech.name}</p>
                    <p className="text-xs text-slate-500">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why not big agency */}
        <section className="py-16 max-w-3xl mx-auto px-6">
          <div className="bg-primary-light/50 border border-primary/10 rounded-2xl p-8 md:p-10">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-4">
              Tại sao không phải agency IT lớn?
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Agency IT lớn có 5–10 người nhưng bạn chỉ nói chuyện với 1 account manager — người không build sản phẩm. Project chuyển qua team dev mà bạn không bao giờ gặp. Hiểu sai requirement → sửa → delay → phát sinh chi phí.
              </p>
              <p>
                Với AutoFlow, <strong>bạn nói chuyện trực tiếp với người build</strong>. Chúng tôi nghe bạn kể vấn đề, viết workflow, test, training cho team bạn. Không tam sao thất bản.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/10 grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-display font-extrabold text-2xl text-primary">2–4 tuần</p>
                <p className="text-xs text-slate-500">thay vì 3–6 tháng</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl text-primary">20–80 triệu</p>
                <p className="text-xs text-slate-500">thay vì 200–500 triệu</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl text-primary">24h SLA</p>
                <p className="text-xs text-slate-500">fix lỗi (retainer)</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Muốn biết chúng tôi có thể giúp gì cho doanh nghiệp bạn?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — chúng tôi sẽ chỉ ra chính xác đâu có thể tự động hóa.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Đặt lịch audit miễn phí
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 8h6M8 5l3 3-3 3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
