"use client";

import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "autoflow_cookie_consent";
type ConsentState = "granted" | "denied" | null;

function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "granted" || stored === "denied") return stored;
  return null;
}

function setStoredConsent(state: "granted" | "denied") {
  localStorage.setItem(CONSENT_KEY, state);
}

function updateGtag(state: "granted" | "denied") {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: state,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function clearAnalyticsCookies() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const name = cookie.split("=")[0].trim();
    if (name.startsWith("_ga") || name === "_gid") {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      updateGtag(stored);
    } else {
      // Small delay for smoother UX — don't flash banner immediately
      const timer = setTimeout(() => {
        setVisible(true);
        requestAnimationFrame(() => setAnimating(true));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = useCallback(() => {
    setStoredConsent("granted");
    updateGtag("granted");
    window.dispatchEvent(new Event('consent:granted'));
    setAnimating(false);
    setTimeout(() => setVisible(false), 300);
  }, []);

  const handleReject = useCallback(() => {
    setStoredConsent("denied");
    updateGtag("denied");
    clearAnalyticsCookies();
    setAnimating(false);
    setTimeout(() => setVisible(false), 300);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-300 ease-out ${
        animating
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="flex justify-end px-4 pb-4">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-lg shadow-black/5 p-3.5 w-72">
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            Website dùng cookies để phân tích traffic và cải thiện trải nghiệm.{" "}
            <a href="/chinh-sach-bao-mat" className="text-primary hover:underline">
              Chi tiết
            </a>
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReject}
              className="flex-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              Từ chối
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-900 transition-all"
            >
              Chấp nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
