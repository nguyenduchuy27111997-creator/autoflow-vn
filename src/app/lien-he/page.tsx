import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Liên hệ AutoFlow VN",
  description:
    "Liên hệ AutoFlow VN qua Zalo 0935.115.248 hoặc email hello@autoflowvn.net. Tư vấn tự động hóa quy trình cho SME Việt Nam — miễn phí, không ràng buộc.",
  alternates: { canonical: "https://autoflowvn.net/lien-he" },
  openGraph: {
    title: "Liên hệ AutoFlow VN",
    description:
      "Liên hệ qua Zalo 0935.115.248 hoặc email hello@autoflowvn.net. Tư vấn miễn phí.",
    url: "https://autoflowvn.net/lien-he",
  },
};

const contactItems = [
  {
    icon: "📱",
    label: "Zalo / SĐT",
    value: "0935.115.248",
    href: "tel:0935115248",
    sub: "Phản hồi trong giờ hành chính",
  },
  {
    icon: "💬",
    label: "Chat Zalo",
    value: "Chat ngay trên Zalo",
    href: "https://zalo.me/0935115248",
    sub: "Nhanh nhất — thường trả lời trong 1 giờ",
    external: true,
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@autoflowvn.net",
    href: "mailto:hello@autoflowvn.net",
    sub: "Phản hồi trong 24 giờ làm việc",
  },
  {
    icon: "🏢",
    label: "Địa chỉ",
    value: "TP. Hồ Chí Minh, Việt Nam",
    href: null,
    sub: "Làm việc trực tuyến toàn quốc",
  },
  {
    icon: "🕐",
    label: "Giờ làm việc",
    value: "T2–T6, 8:00–18:00",
    href: null,
    sub: "Múi giờ GMT+7 (Việt Nam)",
  },
];

export default function LienHePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              Liên hệ
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Nói chuyện{" "}
              <span className="gradient-text">trực tiếp với Huy</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Không qua trung gian. Người tư vấn cũng là người build workflow cho bạn.
            </p>
          </div>
        </section>

        {/* 2-column layout */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: contact info */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-xl text-slate-900 mb-6">
                Thông tin liên hệ
              </h2>
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="font-semibold text-slate-900 hover:text-primary transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-slate-900 text-sm">
                        {item.value}
                      </p>
                    )}
                    <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: CTA card */}
            <div className="flex flex-col gap-6">
              {/* Audit CTA */}
              <div className="bg-slate-900 rounded-2xl p-8 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Muốn tư vấn cụ thể?
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Điền audit form để Huy phân tích quy trình của bạn. 30 phút —
                    bạn nhận Audit Report chi tiết, miễn phí, không ràng buộc.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <svg className="text-emerald-400 shrink-0" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 8l4 4 8-8" />
                    </svg>
                    Audit Report gửi trong 24h
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="text-emerald-400 shrink-0" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 8l4 4 8-8" />
                    </svg>
                    Đề xuất workflow phù hợp ngành của bạn
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="text-emerald-400 shrink-0" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 8l4 4 8-8" />
                    </svg>
                    Miễn phí, dù có tiếp tục hay không
                  </div>
                </div>
                <a
                  href="/audit"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Điền audit form
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 8h6M8 5l3 3-3 3" />
                  </svg>
                </a>
              </div>

              {/* Quick Zalo */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                  Z
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm">
                    Hoặc nhắn Zalo ngay
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Cách nhanh nhất để đặt câu hỏi
                  </p>
                </div>
                <a
                  href="https://zalo.me/0935115248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-white border border-blue-200 px-4 py-2 rounded-lg transition-colors"
                >
                  Chat Zalo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
