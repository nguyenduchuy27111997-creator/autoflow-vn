"use client";

import { useState } from "react";
import { getStoredUTM } from "@/lib/utm";

/** Category → resource mapping for content upgrades */
const CATEGORY_OFFERS: Record<string, { resource: string; title: string; desc: string; emoji: string }> = {
  "E-commerce": {
    resource: "ecommerce-checklist",
    title: "Checklist Automation E-commerce",
    desc: "12 quy trình e-commerce nên tự động hóa ngay — Shopee, TikTok Shop, KiotViet.",
    emoji: "🛒",
  },
  "Bất động sản": {
    resource: "bds-checklist",
    title: "Checklist Automation Bất Động Sản",
    desc: "8 workflow lead BĐS: phân loại, nhắc, nurture, báo cáo tự động.",
    emoji: "🏠",
  },
  "Giáo dục": {
    resource: "giaoduc-checklist",
    title: "Checklist Automation Giáo Dục",
    desc: "10 quy trình trung tâm đào tạo nên tự động: nhắc lịch, feedback, báo cáo.",
    emoji: "🎓",
  },
  "F&B": {
    resource: "fnb-checklist",
    title: "Checklist Automation F&B",
    desc: "7 workflow cho nhà hàng/quán cafe: đặt bàn, loyalty, review, báo cáo.",
    emoji: "🍜",
  },
  "AI": {
    resource: "ai-agent-guide",
    title: "Mini Guide: AI Agent Cho SME",
    desc: "5 use cases AI Agent thực tế cho doanh nghiệp Việt Nam + chi phí ước tính.",
    emoji: "🤖",
  },
};

const DEFAULT_OFFER = {
  resource: "10-quy-trinh",
  title: "10 Quy Trình SME Nên Tự Động Hóa",
  desc: "Tài liệu miễn phí kèm bảng tự đánh giá và ROI ước tính cho từng quy trình.",
  emoji: "📋",
};

export default function BlogInlineCTA({
  category,
  slug,
  variant = "default",
}: {
  category?: string;
  slug?: string;
  variant?: "default" | "compact";
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const offer = (category && CATEGORY_OFFERS[category]) || DEFAULT_OFFER;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || loading) return;
    setLoading(true);
    setError("");

    try {
      const utm = getStoredUTM();
      const res = await fetch("/api/tai-lieu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          resource: offer.resource,
          blog_referrer: slug,
          ...utm,
        }),
      });

      if (!res.ok) throw new Error();
      setDone(true);

      // Mark converted
      localStorage.setItem("autoflow_lead_converted", "1");

      // GA4 event
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          form_type: "blog_inline",
          resource: offer.resource,
          blog_slug: slug,
          currency: "VND",
        });
      }
    } catch {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="my-8 not-prose bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">🎉</div>
        <p className="font-display font-bold text-emerald-800 mb-1">Đã gửi vào email của bạn!</p>
        <p className="text-sm text-emerald-600">Kiểm tra inbox (và spam) nhé. Nếu chưa nhận được, liên hệ mình qua Zalo.</p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="my-8 not-prose bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">{offer.emoji}</span>
          <div>
            <p className="font-display font-bold text-sm text-slate-900">{offer.title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{offer.desc}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
            className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-50 transition-colors shrink-0"
          >
            {loading ? "..." : "Nhận free"}
          </button>
        </form>
        {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
      </div>
    );
  }

  return (
    <div className="my-10 not-prose bg-gradient-to-br from-primary/5 to-blue-50 border border-primary/15 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
          {offer.emoji}
        </div>
        <div>
          <p className="font-display font-bold text-slate-900">{offer.title}</p>
          <p className="text-sm text-slate-500">{offer.desc}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tên (không bắt buộc)"
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark disabled:opacity-50 hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          {loading ? "Đang gửi..." : `Nhận ${offer.title} Miễn Phí →`}
        </button>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <p className="text-[10px] text-slate-400 text-center">Không spam. Hủy đăng ký bất cứ lúc nào.</p>
      </form>
    </div>
  );
}
