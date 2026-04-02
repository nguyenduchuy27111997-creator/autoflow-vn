"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { getStoredUTM } from "@/lib/utm";

const DISMISSED_KEY = "autoflow_blog_exit_dismissed";
const CONVERTED_KEY = "autoflow_lead_converted";

/** Category-aware offers for exit intent */
const CATEGORY_OFFERS: Record<string, { title: string; desc: string; resource: string }> = {
  "E-commerce": { title: "Checklist Automation E-commerce", desc: "12 quy trình Shopee, TikTok Shop, KiotViet nên tự động hóa ngay.", resource: "ecommerce-checklist" },
  "Bất động sản": { title: "Checklist Automation BĐS", desc: "8 workflow lead BĐS: phân loại, nhắc, nurture tự động.", resource: "bds-checklist" },
  "Giáo dục": { title: "Checklist Automation Giáo Dục", desc: "10 quy trình trung tâm đào tạo nên tự động.", resource: "giaoduc-checklist" },
  "F&B": { title: "Checklist Automation F&B", desc: "7 workflow cho nhà hàng/quán cafe.", resource: "fnb-checklist" },
  "AI": { title: "Mini Guide: AI Agent Cho SME", desc: "5 use cases AI Agent thực tế + chi phí ước tính.", resource: "ai-agent-guide" },
};

const DEFAULT_OFFER = {
  title: "10 Quy Trình SME Nên Tự Động Hóa",
  desc: "Tài liệu miễn phí kèm bảng tự đánh giá và ROI ước tính.",
  resource: "10-quy-trinh",
};

export default function BlogExitCapture({
  category,
  slug,
}: {
  category?: string;
  slug?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const pathname = usePathname();

  const offer = (category && CATEGORY_OFFERS[category]) || DEFAULT_OFFER;

  const dismiss = useCallback(() => {
    setAnimating(false);
    setTimeout(() => setVisible(false), 300);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }, []);

  // Exit intent triggers (only on blog pages)
  useEffect(() => {
    if (!pathname.startsWith("/blog/")) return;
    if (sessionStorage.getItem(DISMISSED_KEY)) return;
    if (localStorage.getItem(CONVERTED_KEY)) return;

    let triggered = false;

    // Only trigger after 30% scroll depth (engaged reader)
    const getScrollPercent = () => {
      const h = document.documentElement;
      return ((h.scrollTop || document.body.scrollTop) / ((h.scrollHeight || document.body.scrollHeight) - h.clientHeight)) * 100;
    };

    // Desktop: mouse leaves top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered && getScrollPercent() > 30) {
        triggered = true;
        setVisible(true);
        requestAnimationFrame(() => setAnimating(true));
        gtag("blog_exit_capture_shown", { blog_slug: slug, category });
      }
    };

    // Mobile: rapid scroll up
    let lastY = window.scrollY;
    let upCount = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < lastY && y < 200 && getScrollPercent() > 30) {
        upCount++;
        if (upCount > 3 && !triggered) {
          triggered = true;
          setVisible(true);
          requestAnimationFrame(() => setAnimating(true));
          gtag("blog_exit_capture_shown", { blog_slug: slug, category });
        }
      } else {
        upCount = 0;
      }
      lastY = y;
    };

    // Delay 10s for blog (longer than general exit — let them read)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, slug, category]);

  // Close on Escape
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible, dismiss]);

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
        body: JSON.stringify({ email, resource: offer.resource, blog_referrer: slug, ...utm }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
      localStorage.setItem(CONVERTED_KEY, "1");
      gtag("generate_lead", { form_type: "blog_exit", resource: offer.resource, blog_slug: slug, currency: "VND" });
    } catch {
      setError("Có lỗi. Thử lại nhé.");
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
      <div
        className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${animating ? "opacity-100" : "opacity-0"}`}
        onClick={dismiss}
      />
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transition-all duration-300 ${
          animating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-600 hover:bg-slate-200 transition-colors z-10"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="h-1 bg-gradient-to-r from-primary to-blue-400" />

        <div className="p-6 md:p-8">
          {done ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <p className="font-display font-bold text-lg text-slate-900 mb-1">Đã gửi vào email!</p>
              <p className="text-sm text-slate-500 mb-4">Kiểm tra inbox nhé. Chúc anh/chị triển khai thành công!</p>
              <button onClick={dismiss} className="px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
                Đóng
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <svg width="28" height="28" fill="none" stroke="#0066FF" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display font-extrabold text-lg text-slate-900 mb-1.5">
                  Trước khi đi — nhận tài liệu miễn phí!
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  <strong className="text-slate-700">{offer.title}</strong> — {offer.desc}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email của bạn"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark disabled:opacity-50 hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  {loading ? "Đang gửi..." : "Nhận Tài Liệu Miễn Phí →"}
                </button>
                {error && <p className="text-xs text-red-500 text-center">{error}</p>}
              </form>

              <button onClick={dismiss} className="block w-full mt-2 text-xs text-slate-400 hover:text-slate-500 transition-colors text-center">
                Không, cảm ơn
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function gtag(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
