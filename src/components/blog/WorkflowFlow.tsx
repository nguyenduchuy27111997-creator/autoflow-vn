"use client";

import { useEffect, useRef, useState } from "react";

interface FlowStep {
  icon: React.ReactNode;
  label: string;
  sub?: string;
}

const defaultIcons = {
  trigger: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  process: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  action: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  result: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function WorkflowFlow({
  steps,
  accentColor = "#0066FF",
  title,
  subtitle,
}: {
  steps: FlowStep[];
  accentColor?: string;
  title?: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="my-8 not-prose">
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h4 className="font-display font-bold text-base text-slate-900">{title}</h4>
          )}
          {subtitle && (
            <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>
          )}
        </div>
      )}

      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start flex-1">
              {/* Node */}
              <div
                className="flex flex-col items-center text-center transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                  style={{ background: `${accentColor}15`, color: accentColor }}
                >
                  {step.icon}
                </div>
                <div className="text-xs font-semibold text-slate-800 leading-tight max-w-[120px]">
                  {step.label}
                </div>
                {step.sub && (
                  <div className="text-[10px] text-slate-400 mt-0.5 max-w-[120px]">
                    {step.sub}
                  </div>
                )}
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="flex-1 flex items-center justify-center pt-5 px-1">
                  <div className="relative w-full h-[2px] overflow-hidden">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${accentColor}40, ${accentColor})`,
                        transform: visible ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: `transform 0.6s ease-out ${(i + 1) * 150}ms`,
                      }}
                    />
                  </div>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    className="shrink-0 -ml-1"
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: `opacity 0.3s ease-out ${(i + 1) * 150 + 400}ms`,
                    }}
                  >
                    <path d="M1 1l5 5-5 5" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={i}>
              <div
                className="flex items-start gap-3 transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-16px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div
                  className="w-10 h-10 min-w-[40px] rounded-xl flex items-center justify-center"
                  style={{ background: `${accentColor}15`, color: accentColor }}
                >
                  {step.icon}
                </div>
                <div className="pt-1">
                  <div className="text-sm font-semibold text-slate-800">{step.label}</div>
                  {step.sub && (
                    <div className="text-xs text-slate-400 mt-0.5">{step.sub}</div>
                  )}
                </div>
              </div>

              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div className="ml-5 pl-[1px] py-1">
                  <div
                    className="w-[2px] h-6 rounded-full"
                    style={{
                      background: `linear-gradient(180deg, ${accentColor}, ${accentColor}30)`,
                      opacity: visible ? 1 : 0,
                      transition: `opacity 0.4s ease-out ${(i + 1) * 120}ms`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Pre-built icons for common workflow steps */
WorkflowFlow.icons = defaultIcons;
