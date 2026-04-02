"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedMetric({
  value,
  suffix,
  label,
  sub,
  color,
}: {
  value: string;
  suffix?: string;
  label: string;
  sub: string;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.6s ease-out",
      }}
    >
      <div className="font-display font-extrabold text-3xl md:text-4xl" style={{ color }}>
        {value}
        {suffix && <span className="text-base font-medium text-slate-500 ml-1">{suffix}</span>}
      </div>
      <div className="text-sm font-semibold text-slate-700 mt-1">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
    </div>
  );
}
