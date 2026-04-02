"use client";

import { useState } from "react";
import { industries, teamSizes } from "@/data/constants";
import { getStoredUTM } from "@/lib/utm";
import { trackGenerateLead } from "@/lib/analytics";
import Logo from "@/components/ui/Logo";

/* ───────── Data ───────── */
const stats = [
  { value: "4.5h", label: "mỗi ngày nhập liệu thủ công", icon: "⏱️" },
  { value: "67%", label: "lead mất vì không follow-up kịp", icon: "📉" },
  { value: "3 ngày", label: "để ra 1 báo cáo cuối tháng", icon: "📊" },
  { value: "8–12tr", label: "lương admin / tháng", icon: "💰" },
];

const steps = [
  {
    num: "01",
    title: "Đặt lịch audit miễn phí",
    desc: "30 phút — mình phân tích quy trình của bạn",
  },
  {
    num: "02",
    title: "Nhận đề xuất trong 48h",
    desc: "Workflow cụ thể, timeline, ROI dự kiến",
  },
  {
    num: "03",
    title: "Go live trong 1–2 tuần",
    desc: "Bắt đầu tiết kiệm ngay từ tuần đầu",
  },
];

const platforms = ["n8n", "Zalo OA", "MISA", "Shopee", "KiotViet"];

/* ───────── Component ───────── */
export default function FbAdsLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    industry: "",
    teamSize: "",
  });

  const canSubmit = form.name && form.phone;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      const utm = getStoredUTM();
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          painPoints: [],
          details: "",
          company: "",
          source: "fb-ads",
          ...utm,
        }),
      });
      if (res.ok) trackGenerateLead({ form_type: "fb-ads" });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Topbar ── */}
      <div className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Logo />
          <button
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all"
          >
            Nhận audit miễn phí
          </button>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Copy */}
            <div className="lg:pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Miễn phí · 30 phút · Không ràng buộc
              </div>

              <h1 className="font-display font-extrabold text-3xl md:text-[2.6rem] text-slate-900 leading-[1.15] tracking-tight mb-5">
                Nhân viên bạn đang tốn{" "}
                <span className="gradient-text">4+ giờ/ngày</span> nhập liệu
                thủ công?
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                AutoFlow tự động hóa quy trình cho SME Việt Nam — tiết kiệm
                10–20 giờ/tuần, ROI trong 5 tháng. Rẻ hơn 1 nhân viên admin.
              </p>

              {/* Trust row — mobile only */}
              <div className="flex flex-wrap gap-2 mb-6 lg:hidden">
                {["100% miễn phí", "Không spam", "100% hoàn tiền"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium"
                  >
                    <svg
                      className="text-accent shrink-0"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M2 7l3 3 7-7" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>

              {/* Stats — desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.value}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <p className="font-display font-extrabold text-slate-900 text-lg leading-none">
                        {s.value}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Audit Form */}
            <div id="audit-form" className="scroll-mt-20">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 p-8 md:p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <svg
                      width="32"
                      height="32"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                    >
                      <path d="M6 16l8 8 12-12" />
                    </svg>
                  </div>
                  <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
                    Cảm ơn bạn!
                  </h2>
                  <p className="text-sm text-slate-500 mb-6">
                    Mình sẽ liên hệ qua Zalo/SĐT trong 24h để sắp xếp cuộc gọi
                    audit.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl text-left">
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Bạn sẽ nhận được:
                    </p>
                    {[
                      "Cuộc gọi audit 30 phút",
                      "Audit Report chi tiết trong 24h",
                      "Proposal 3 gói trong 48h",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 mt-1.5">
                        <span className="text-accent text-sm">✓</span>
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 p-7 md:p-8"
                >
                  <h2 className="font-display font-bold text-lg text-slate-900 mb-1">
                    Nhận audit quy trình miễn phí
                  </h2>
                  <p className="text-sm text-slate-500 mb-6">
                    Điền form dưới đây — mình liên hệ trong 24h
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                        Tên của bạn *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                        Số điện thoại / Zalo *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="0912 345 678"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                        Ngành nghề
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {industries.map((ind) => (
                          <button
                            key={ind.value}
                            type="button"
                            onClick={() =>
                              setForm({ ...form, industry: ind.value })
                            }
                            className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all text-left ${
                              form.industry === ind.value
                                ? "border-primary bg-primary-light text-primary"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            {ind.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                        Quy mô team
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {teamSizes.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() =>
                              setForm({ ...form, teamSize: size })
                            }
                            className={`px-3 py-2 rounded-xl border text-sm font-medium transition-all ${
                              form.teamSize === size
                                ? "border-primary bg-primary-light text-primary"
                                : "border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <button
                    type="submit"
                    disabled={!canSubmit || submitting}
                    className="mt-6 w-full bg-primary hover:bg-primary-dark disabled:bg-slate-200 disabled:text-slate-500 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      "Đang gửi..."
                    ) : (
                      <>
                        Nhận audit miễn phí
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 8h6M8 5l3 3-3 3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    {["Miễn phí 100%", "Không spam", "Bảo mật"].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-xs text-slate-500"
                      >
                        <svg
                          className="text-accent"
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M2 6l2.5 2.5L10 3" />
                        </svg>
                        {t}
                      </span>
                    ))}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain Points — mobile stats ── */}
      <section className="py-12 bg-slate-50 border-y border-slate-100 lg:hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.value}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100"
              >
                <span className="text-xl">{s.icon}</span>
                <div>
                  <p className="font-display font-extrabold text-slate-900 text-lg leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="py-14 bg-slate-50 border-b border-slate-100 max-lg:pt-0 max-lg:border-t-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Platforms */}
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">
              Tích hợp với
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-600"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: "40%+", label: "tỉ lệ chốt sau audit" },
                { value: "100%", label: "hoàn tiền nếu không đạt scope" },
                { value: "< 2 tuần", label: "go live từ ngày bắt đầu" },
              ].map((b) => (
                <div key={b.value} className="text-center">
                  <p className="font-display font-extrabold text-xl text-primary">
                    {b.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 text-center mb-10">
            Quy trình <span className="gradient-text">đơn giản</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.num} className="relative text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-display font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  {s.num}
                </div>
                <h3 className="font-display font-bold text-sm text-slate-900 mb-1">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500">{s.desc}</p>

                {/* Connector arrow */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-5 -right-3 text-slate-300">
                    <svg width="20" height="12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M0 6h16M12 2l4 4-4 4" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-12 bg-primary">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl text-white mb-3">
            Sẵn sàng tiết kiệm 10–20 giờ/tuần?
          </h2>
          <p className="text-sm text-white/70 mb-6">
            Đặt lịch audit miễn phí — không ràng buộc, không spam.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-all shadow-lg shadow-primary-dark/20"
          >
            Nhận audit miễn phí →
          </button>
        </div>
      </section>

      {/* ── Footer minimal ── */}
      <footer className="py-6 text-center border-t border-slate-100">
        <p className="text-xs text-slate-500">
          © 2025 AutoFlow.vn — Tự động hóa quy trình cho SME Việt Nam
        </p>
      </footer>
    </div>
  );
}
