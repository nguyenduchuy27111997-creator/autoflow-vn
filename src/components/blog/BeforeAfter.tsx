"use client";

import { useEffect, useRef, useState } from "react";

interface BeforeAfterProps {
  before: { title?: string; items: string[] };
  after: { title?: string; items: string[] };
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-4 my-8 not-prose overflow-hidden">
      {/* Before */}
      <div
        className="bg-red-50/50 border border-red-100 rounded-xl p-5 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-20px)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
            <svg width="12" height="12" fill="none" stroke="#EF4444" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
          <span className="font-display font-bold text-sm text-red-600">
            {before.title || "Trước"}
          </span>
        </div>
        <ul className="space-y-2">
          {before.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-red-400 mt-0.5 shrink-0">✗</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* After */}
      <div
        className="bg-green-50/50 border border-green-100 rounded-xl p-5 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(20px)",
          transitionDelay: "150ms",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg width="12" height="12" fill="none" stroke="#10B981" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="font-display font-bold text-sm text-green-600">
            {after.title || "Sau khi tự động hóa"}
          </span>
        </div>
        <ul className="space-y-2">
          {after.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-green-500 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
