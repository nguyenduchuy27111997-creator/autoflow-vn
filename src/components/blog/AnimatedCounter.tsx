"use client";

import { useEffect, useRef, useState } from "react";

interface CounterStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
  color?: string;
}

export default function AnimatedCounter({ stats }: { stats: CounterStat[] }) {
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8 not-prose">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-slate-50 rounded-xl p-3 sm:p-5 text-center transition-all duration-600"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${i * 100}ms`,
          }}
        >
          <div className={`font-display font-extrabold text-xl sm:text-3xl ${s.color || "text-primary"}`}>
            {s.prefix}
            <CountUp target={s.value} active={visible} delay={i * 100} />
            {s.suffix}
          </div>
          <div className="text-xs font-semibold text-slate-700 mt-1">{s.label}</div>
          {s.sub && <div className="text-[11px] text-slate-500 mt-0.5">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}

function CountUp({ target, active, delay }: { target: number; active: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const duration = 1200;
      const steps = 40;
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.round(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, target, delay]);

  return <>{count.toLocaleString("vi-VN")}</>;
}
