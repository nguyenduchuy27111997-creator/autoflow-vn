import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const techStack = [
  { name: "n8n", desc: "Nền tảng automation chính", color: "#EA4B71" },
  { name: "Zalo OA", desc: "Kênh giao tiếp SME VN", color: "#0068FF" },
  { name: "MISA", desc: "Kế toán & ERP phổ biến nhất VN", color: "#E31937" },
  { name: "KiotViet", desc: "POS & quản lý bán hàng", color: "#00A651" },
  { name: "Shopee API", desc: "Đồng bộ đơn hàng real-time", color: "#EE4D2D" },
  {
    name: "OpenAI / Claude",
    desc: "AI brain cho workflow thông minh",
    color: "#6366F1",
  },
];

const milestones = [
  {
    year: "Hiện tại",
    title: "Chuyên gia n8n automation",
    desc: "Focus 100% vào giúp SME VN tự động hóa quy trình bằng n8n — tích hợp sâu với ecosystem Việt Nam.",
  },
  {
    year: "Trước đó",
    title: "Background kỹ thuật",
    desc: "Kinh nghiệm trong phát triển phần mềm, tích hợp hệ thống, và tư vấn công nghệ cho doanh nghiệp.",
  },
];

const values = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Nói thẳng, không vòng vo",
    desc: "Nếu quy trình của bạn chưa cần automation — mình sẽ nói thẳng. Không bán thứ bạn không cần.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
    title: "Kết quả trong tuần, không phải tháng",
    desc: "Gói Starter chạy trong 1 tuần. Growth 3 tuần. Không kéo dài, không phát sinh chi phí.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Hiểu doanh nghiệp VN",
    desc: "Mình dùng Zalo, MISA, KiotViet hàng ngày — không phải consultant nước ngoài cố gắng hiểu thị trường VN.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Bàn giao toàn bộ, không giữ lại",
    desc: "Workflows, video hướng dẫn, SOP, source code — tất cả thuộc về bạn. Không lock-in.",
  },
];

export default function VeToiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold mb-5">
                Solo-founder · Chuyên gia n8n
              </div>
              <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
                Xin chào, mình là{" "}
                <span className="gradient-text">Huy Nguyen</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Mình giúp doanh nghiệp vừa và nhỏ Việt Nam tự động hóa những
                việc lặp lại — để team bạn tập trung vào việc tạo ra giá trị
                thực, thay vì copy-paste cả ngày.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/audit"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Nói chuyện với mình
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 8h6M8 5l3 3-3 3" />
                  </svg>
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span>📱 Zalo: 0912 345 678</span>
                  <span className="text-slate-300">|</span>
                  <span>✉️ hello@autoflowvn.net</span>
                </div>
              </div>
            </div>

            {/* Profile visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-60 md:h-60 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-3xl mb-3">
                      H
                    </div>
                    <p className="font-display font-bold text-slate-900">
                      Huy Nguyen
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      AutoFlow.vn Founder
                    </p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
                  <p className="text-xs font-bold text-primary">n8n Expert</p>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
                  <p className="text-xs font-bold text-accent">VN Native</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-slate-50 py-20 relative noise-bg">
          <div className="max-w-3xl mx-auto px-6 relative">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-8">
              Tại sao mình làm việc này?
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-5">
                Mình thấy quá nhiều doanh nghiệp VN đang trả lương cho nhân viên
                để làm những việc mà máy tính có thể làm trong vài giây — nhập
                đơn hàng, gửi tin nhắn, tổng hợp báo cáo. Những việc lặp đi lặp
                lại, tốn thời gian, dễ sai sót.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Vấn đề không phải SME không biết họ cần automation — 93% đã
                biết. Vấn đề là <strong>không có ai giúp họ triển khai</strong>{" "}
                với giá phù hợp, trong thời gian hợp lý, và hiểu đúng ecosystem
                Việt Nam (Zalo, MISA, KiotViet — không phải Slack, Salesforce,
                HubSpot).
              </p>
              <p className="text-slate-600 leading-relaxed">
                Đó là lý do mình tạo AutoFlow — giúp SME VN tự động hóa quy
                trình lặp lại bằng n8n, với giá phù hợp, kết quả trong 2–4 tuần,
                và dữ liệu 100% ở trong nước.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 max-w-6xl mx-auto px-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-12 text-center">
            Cách mình làm việc
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded-2xl border border-slate-200 p-7 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {v.desc}
                  </p>
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
                Công cụ mình dùng hàng ngày để build automation cho clients
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    <p className="font-semibold text-sm text-slate-900">
                      {tech.name}
                    </p>
                    <p className="text-xs text-slate-400">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 max-w-3xl mx-auto px-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-10 text-center">
            Hành trình
          </h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-semibold text-primary">
                    {m.year}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 mt-1">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Solo */}
        <section className="py-16 max-w-3xl mx-auto px-6">
          <div className="bg-primary-light/50 border border-primary/10 rounded-2xl p-8 md:p-10">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-4">
              &quot;Tại sao chỉ 1 người?&quot; — Câu hỏi mình hay được hỏi nhất
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Hầu hết agency IT có 5-10 người nhưng bạn vẫn chỉ nói chuyện với
                1 account manager — người không build sản phẩm. Rồi project
                chuyển qua team dev mà bạn không bao giờ gặp. Lỡ hiểu sai
                requirement → sửa → delay → phát sinh chi phí.
              </p>
              <p>
                Với AutoFlow,{" "}
                <strong>bạn nói chuyện trực tiếp với người build</strong>. Mình
                nghe bạn kể vấn đề, mình viết workflow, mình test, mình training
                cho team bạn. Không tam sao thất bản. Không &quot;để em hỏi lại
                team dev&quot;.
              </p>
              <p>
                Đó là lý do mình deliver nhanh hơn (2-4 tuần thay vì 3-6 tháng)
                và rẻ hơn (không overhead cho sales team, office, management
                layers).
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/10 grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-display font-extrabold text-2xl text-primary">
                  50+
                </p>
                <p className="text-xs text-slate-500">workflows đã build</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl text-primary">
                  100%
                </p>
                <p className="text-xs text-slate-500">
                  hoàn tiền nếu không deliver
                </p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl text-primary">
                  24h
                </p>
                <p className="text-xs text-slate-500">SLA fix lỗi (retainer)</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Muốn biết mình có thể giúp gì cho doanh nghiệp bạn?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — mình sẽ chỉ ra chính xác đâu có thể tự
              động hóa.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Đặt lịch audit miễn phí
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
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
