"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PARTNER_TYPES = [
  { value: "agency", label: "Marketing / Digital Agency", icon: "📣" },
  { value: "it-consultant", label: "IT Consultant / Integrator", icon: "💻" },
  { value: "coach", label: "Business Coach / Mentor", icon: "🎓" },
  { value: "freelancer", label: "Freelancer / Developer", icon: "⚡" },
  { value: "accountant", label: "Kế toán / Bookkeeper", icon: "📊" },
  { value: "other", label: "Khác", icon: "🤝" },
];

const COMMISSION_TABLE = [
  { pkg: "Starter", range: "8-15 triệu", commission: "800K - 1.5 triệu", promo: "1.2 - 2.25 triệu" },
  { pkg: "Growth", range: "20-35 triệu", commission: "2 - 3.5 triệu", promo: "3 - 5.25 triệu" },
  { pkg: "Scale", range: "50-80 triệu", commission: "5 - 8 triệu", promo: "7.5 - 12 triệu" },
  { pkg: "Retainer", range: "8-15 triệu/tháng", commission: "10% × 3 tháng", promo: "15% × 3 tháng" },
];

const FAQ_ITEMS = [
  { q: "Khi nào tôi nhận commission?", a: "Sau khi khách hàng thanh toán đợt 1. AutoFlow chuyển khoản trong 7 ngày làm việc." },
  { q: "Có giới hạn số lượng referral không?", a: "Không giới hạn. Giới thiệu càng nhiều, kiếm càng nhiều." },
  { q: "Tôi cần làm gì sau khi được duyệt?", a: "Bạn nhận mã giới thiệu (VD: AF-TECHVN). Khi giới thiệu khách, họ nhắc mã này hoặc bạn kết nối trực tiếp qua Zalo." },
  { q: "Retainer commission tính thế nào?", a: "10% giá trị 3 tháng retainer đầu tiên. Nếu khách gia hạn, commission kết thúc sau tháng 3." },
  { q: "Tôi không phải agency/IT, có đăng ký được không?", a: "Hoàn toàn được! Bất kỳ ai có mạng lưới SME đều có thể tham gia — kế toán, business coach, freelancer." },
  { q: "Ưu đãi 15% kéo dài bao lâu?", a: "3 tháng đầu kể từ ngày ra mắt chương trình. Đăng ký sớm để nhận rate cao nhất." },
];

export default function PartnerPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", partner_type: "", clients_per_year: "", website: "" });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; code?: string; error?: string } | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website_url: honeypot }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ success: true, code: data.referral_code });
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "partner_apply", { partner_type: form.partner_type });
        }
      } else {
        setResult({ success: false, error: data.error });
      }
    } catch {
      setResult({ success: false, error: "Có lỗi xảy ra. Vui lòng thử lại." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
              🤝 Chương trình đối tác
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              Giới thiệu khách hàng.{" "}
              <span className="gradient-text">Nhận 10-15% giá trị dự án.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Bạn có khách hàng cần tự động hóa? Giới thiệu cho AutoFlow VN — mình xây dựng, bạn nhận hoa hồng.
              Đơn giản, minh bạch, trả nhanh.
            </p>
          </div>

          {/* 3 Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { step: "1", title: "Đăng ký", desc: "Điền form bên dưới. Nhận mã giới thiệu riêng trong 24h.", icon: "📝" },
              { step: "2", title: "Giới thiệu", desc: "Kết nối khách hàng với AutoFlow qua Zalo, email, hoặc nhắc mã giới thiệu.", icon: "🔗" },
              { step: "3", title: "Nhận thưởng", desc: "Khi dự án ký hợp đồng và khách thanh toán đợt 1 → nhận commission trong 7 ngày.", icon: "💰" },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mx-auto mb-3">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-primary mb-1">Bước {s.step}</div>
                <h3 className="font-display font-bold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Commission Table */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-xl text-slate-900 text-center mb-2">Bảng hoa hồng</h2>
            <p className="text-sm text-slate-500 text-center mb-6">
              Đăng ký trong 3 tháng đầu nhận rate <strong className="text-accent">15%</strong> thay vì 10%
            </p>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-5 py-3 font-semibold text-slate-700">Gói dịch vụ</th>
                      <th className="text-left px-5 py-3 font-semibold text-slate-700">Giá trị</th>
                      <th className="text-left px-5 py-3 font-semibold text-slate-700">Commission 10%</th>
                      <th className="text-left px-5 py-3 font-semibold text-accent">🔥 Promo 15%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMMISSION_TABLE.map((row) => (
                      <tr key={row.pkg} className="border-t border-slate-100">
                        <td className="px-5 py-3 font-semibold text-slate-900">{row.pkg}</td>
                        <td className="px-5 py-3 text-slate-600">{row.range}</td>
                        <td className="px-5 py-3 text-slate-600">{row.commission}</td>
                        <td className="px-5 py-3 font-semibold text-accent">{row.promo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Who is it for */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-xl text-slate-900 text-center mb-6">Ai phù hợp tham gia?</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PARTNER_TYPES.map((p) => (
                <div key={p.value} className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-sm font-medium text-slate-700">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="mb-16" id="dang-ky">
            <h2 className="font-display font-bold text-xl text-slate-900 text-center mb-2">Đăng ký đối tác</h2>
            <p className="text-sm text-slate-500 text-center mb-6">Điền form — nhận mã giới thiệu trong 24h</p>

            {result?.success ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center max-w-lg mx-auto">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-display font-bold text-lg text-emerald-800 mb-2">Đăng ký thành công!</h3>
                <p className="text-sm text-emerald-700 mb-4">
                  Mã giới thiệu tạm thời của bạn: <strong className="text-lg">{result.code}</strong>
                </p>
                <p className="text-xs text-emerald-600">
                  Team AutoFlow sẽ liên hệ qua Zalo trong 24h để xác nhận và gửi tài liệu hỗ trợ.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                {/* Honeypot */}
                <input type="text" name="website_url" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Họ tên *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none" placeholder="Nguyễn Văn A" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Công ty</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none" placeholder="Tên công ty (nếu có)" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none" placeholder="email@company.com" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">SĐT / Zalo *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none" placeholder="0912 345 678" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-1 block">Bạn là *</label>
                  <select required value={form.partner_type} onChange={(e) => setForm({ ...form, partner_type: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none bg-white">
                    <option value="">Chọn loại hình...</option>
                    {PARTNER_TYPES.map((p) => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Số khách hàng/năm</label>
                    <select value={form.clients_per_year} onChange={(e) => setForm({ ...form, clients_per_year: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none bg-white">
                      <option value="">Chọn...</option>
                      <option value="1-10">1-10 khách</option>
                      <option value="10-50">10-50 khách</option>
                      <option value="50+">50+ khách</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">Website</label>
                    <input type="url" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none" placeholder="https://..." />
                  </div>
                </div>

                {result?.error && <p className="text-sm text-red-600">{result.error}</p>}

                <button type="submit" disabled={loading} className="w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark disabled:opacity-50 hover:shadow-lg hover:shadow-primary/20 transition-all">
                  {loading ? "Đang gửi..." : "Đăng Ký Đối Tác →"}
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-xl text-slate-900 text-center mb-6">Câu hỏi thường gặp</h2>
            <div className="max-w-2xl mx-auto space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900">{item.q}</span>
                    <svg
                      width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                      className={`text-slate-400 shrink-0 transition-transform ${faqOpen === i ? "rotate-180" : ""}`}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all ${faqOpen === i ? "max-h-40" : "max-h-0"}`}>
                    <p className="px-5 pb-4 text-sm text-slate-500">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display font-extrabold text-xl text-white mb-2">
              Sẵn sàng kiếm thêm thu nhập?
            </h2>
            <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
              Đăng ký miễn phí. Không cam kết. Giới thiệu khi nào có khách phù hợp — AutoFlow lo phần còn lại.
            </p>
            <a href="#dang-ky" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-colors">
              Đăng Ký Ngay →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
