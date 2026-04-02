"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const DISMISSED_KEY = "autoflow_exit_popup_dismissed";
const CONVERTED_KEY = "autoflow_lead_converted";

// Pages where popup should NOT show (already have forms)
const EXCLUDED_PATHS = ["/audit", "/quiz", "/portal"];

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const pathname = usePathname();

  const dismiss = useCallback(() => {
    setAnimating(false);
    setTimeout(() => setVisible(false), 300);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }, []);

  useEffect(() => {
    // Don't show on excluded pages
    if (EXCLUDED_PATHS.some((p) => pathname.startsWith(p))) return;

    // Don't show if already dismissed this session
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    // Don't show if user already converted (downloaded PDF, submitted form)
    if (localStorage.getItem(CONVERTED_KEY)) return;

    let triggered = false;

    // Desktop: mouse leaves viewport (top edge)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        setVisible(true);
        requestAnimationFrame(() => setAnimating(true));
        trackPopupShown();
      }
    };

    // Mobile: rapid scroll up (intent to leave)
    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY && currentY < 200) {
        scrollUpCount++;
        if (scrollUpCount > 3 && !triggered) {
          triggered = true;
          setVisible(true);
          requestAnimationFrame(() => setAnimating(true));
          trackPopupShown();
        }
      } else {
        scrollUpCount = 0;
      }
      lastScrollY = currentY;
    };

    // Delay before enabling (don't trigger immediately)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 5000); // Wait 5 seconds before enabling

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          animating ? "opacity-100" : "opacity-0"
        }`}
        onClick={dismiss}
      />

      {/* Popup */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transition-all duration-300 ${
          animating
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-600 hover:bg-slate-200 transition-colors z-10"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Green accent top bar */}
        <div className="h-1 bg-gradient-to-r from-accent to-emerald-400" />

        <div className="p-8 text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg width="32" height="32" fill="none" stroke="#10B981" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          {/* Copy */}
          <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2">
            Chờ đã — đừng bỏ lỡ!
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs mx-auto">
            Tải miễn phí <strong className="text-slate-700">10 Quy Trình SME Nên Tự Động Hóa Ngay</strong> — kèm bảng tự đánh giá và ROI ước tính.
          </p>

          {/* CTA */}
          <a
            href="/tai-lieu"
            onClick={() => {
              trackPopupClicked();
              dismiss();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 transition-all"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Tải PDF Miễn Phí
          </a>

          {/* Secondary */}
          <button
            onClick={dismiss}
            className="block w-full mt-3 text-xs text-slate-500 hover:text-slate-500 transition-colors"
          >
            Không, cảm ơn
          </button>
        </div>
      </div>
    </div>
  );
}

function trackPopupShown() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "exit_popup_shown");
  }
}

function trackPopupClicked() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "exit_popup_clicked");
  }
}
