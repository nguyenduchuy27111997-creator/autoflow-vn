"use client";

import { useState, useEffect, useRef } from "react";

export default function WorkflowDiagram({
  steps,
  accentColor,
}: {
  steps: { icon: React.ReactNode; label: string; sub: string }[];
  accentColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-4">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start justify-between gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start flex-1">
            {/* Node */}
            <div
              className="flex flex-col items-center text-center flex-shrink-0"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease-out ${i * 150}ms`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg mb-3"
                style={{ background: accentColor }}
              >
                {step.icon}
              </div>
              <p className="text-sm font-semibold text-slate-800 mb-0.5 max-w-[120px]">{step.label}</p>
              <p className="text-xs text-slate-500 max-w-[130px]">{step.sub}</p>
            </div>
            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <div className="flex-1 flex items-center pt-7 px-1">
                <div
                  className="h-0.5 flex-1 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${accentColor}40, ${accentColor}20)`,
                    transform: visible ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: `transform 0.6s ease-out ${i * 150 + 200}ms`,
                  }}
                />
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.3s ease-out ${i * 150 + 600}ms`,
                  }}
                >
                  <path d="M2 6h8M7 3l3 3-3 3" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile: vertical */}
      <div className="md:hidden space-y-4">
        {steps.map((step, i) => (
          <div key={i}>
            <div
              className="flex items-center gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.5s ease-out ${i * 120}ms`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0"
                style={{ background: accentColor }}
              >
                {step.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{step.label}</p>
                <p className="text-xs text-slate-500">{step.sub}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-6 h-6 flex items-center">
                <div
                  className="w-0.5 h-full rounded-full"
                  style={{
                    background: `${accentColor}30`,
                    transform: visible ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                    transition: `transform 0.4s ease-out ${i * 120 + 200}ms`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
