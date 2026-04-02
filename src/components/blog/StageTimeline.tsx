"use client";

import { useEffect, useRef, useState } from "react";

interface Stage {
  number: number;
  title: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
  items: string[];
  tools?: string[];
  timeframe?: string;
}

export default function StageTimeline({ stages }: { stages: Stage[] }) {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="my-10 not-prose">
      {/* Desktop: horizontal overview */}
      <div className="hidden md:flex items-stretch gap-0 mb-10">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-stretch flex-1">
            <div
              className="flex-1 text-center transition-all duration-600"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 text-white font-display font-bold text-lg"
                style={{ background: stage.color }}
              >
                {stage.number}
              </div>
              <div className="text-xs font-bold text-slate-800">{stage.title}</div>
              <div className="text-[10px] text-slate-500">{stage.subtitle}</div>
            </div>
            {i < stages.length - 1 && (
              <div className="flex items-center px-1 pt-0">
                <div className="relative w-8 h-[2px]">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${stage.color}, ${stages[i + 1].color})`,
                      transform: visible ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: `transform 0.5s ease-out ${(i + 1) * 120}ms`,
                    }}
                  />
                </div>
                <svg
                  width="6" height="10" viewBox="0 0 6 10" fill="none"
                  className="shrink-0 -ml-0.5"
                  style={{ opacity: visible ? 1 : 0, transition: `opacity 0.3s ease-out ${(i + 1) * 120 + 300}ms` }}
                >
                  <path d="M1 1l3.5 4L1 9" stroke={stages[i + 1].color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cards for each stage */}
      <div className="space-y-6">
        {stages.map((stage, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 100 + 400}ms`,
            }}
          >
            <div className="flex items-center gap-3 px-6 py-4" style={{ background: `${stage.color}10` }}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: stage.color }}
              >
                {stage.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-slate-900">
                  Giai đoạn {stage.number}: {stage.title}
                </div>
                <div className="text-xs text-slate-500">{stage.subtitle}</div>
              </div>
              {stage.timeframe && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${stage.color}15`, color: stage.color }}>
                  {stage.timeframe}
                </span>
              )}
            </div>
            <div className="px-6 py-4">
              <ul className="grid sm:grid-cols-2 gap-2">
                {stage.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke={stage.color} strokeWidth="2">
                      <path d="M2 8l4 4 8-8" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {stage.tools && stage.tools.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mr-1 pt-0.5">Tools:</span>
                  {stage.tools.map((tool, j) => (
                    <span key={j} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">{tool}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
