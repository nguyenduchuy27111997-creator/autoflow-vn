"use client";

import { useState } from "react";

interface InlineContactFormProps {
  source: string;
  title?: string;
  subtitle?: string;
  accentColor?: string;
}

export default function InlineContactForm({
  source,
  title = "Đăng ký tư vấn",
  subtitle = "Điền thông tin — mình liên hệ trong 2 giờ làm việc.",
  accentColor = "#0066FF",
}: InlineContactFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", company: "", email: "" });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || loading) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          company: form.company,
          email: form.email,
          details: `Đăng ký từ trang: ${source}`,
          website: honeypot, // honeypot
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Có lỗi xảy ra");
      }

      setDone(true);

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          form_type: "inline",
          source,
          currency: "VND",
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border-2 p-8 text-center" style={{ borderColor: accentColor, background: `${accentColor}08` }}>
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Đã nhận thông tin!</h3>
        <p className="text-sm text-slate-500">Mình sẽ liên hệ qua Zalo trong 2 giờ làm việc. Cảm ơn bạn!</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8" id="dang-ky">
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-lg text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        {/* Honeypot */}
        <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 mb-1 block">Họ tên *</label>
            <input
              type="text" required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700 mb-1 block">SĐT / Zalo *</label>
            <input
              type="tel" required value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
              placeholder="0912 345 678"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 mb-1 block">Công ty</label>
            <input
              type="text" value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
              placeholder="Tên công ty (nếu có)"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700 mb-1 block">Email</label>
            <input
              type="email" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
              placeholder="email@company.com"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <button
          type="submit" disabled={loading}
          className="w-full px-6 py-3 rounded-xl text-white font-semibold text-sm disabled:opacity-50 hover:shadow-lg transition-all"
          style={{ background: accentColor }}
        >
          {loading ? "Đang gửi..." : "Gửi Thông Tin →"}
        </button>

        <p className="text-[10px] text-slate-400 text-center">Mình phản hồi trong 2 giờ qua Zalo. Không spam.</p>
      </form>
    </div>
  );
}
