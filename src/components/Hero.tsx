"use client";

import { useEffect, useRef } from "react";
import Button from "./ui/Button";

const metrics = [
  { value: "10–20", unit: "giờ/tuần", label: "tiết kiệm cho team" },
  { value: "0", unit: "lỗi", label: "nhập tay sai sót" },
  { value: "2–4", unit: "tuần", label: "triển khai xong" },
  { value: "5×", unit: "ROI", label: "hoàn vốn trong 5 tháng" },
];

function AnimatedCounter({ value }: { value: string }) {
  return (
    <span className="font-display font-extrabold text-3xl md:text-4xl text-primary tabular-nums">
      {value}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) el.classList.add("animate-fade-up");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--slate-400) 1px, transparent 1px), linear-gradient(90deg, var(--slate-400) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold mb-6 opacity-0 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Chuyên gia #1 về n8n automation tại Việt Nam
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up delay-100">
            Doanh nghiệp bạn đang{" "}
            <span className="gradient-text">mất bao nhiêu giờ</span> cho việc
            nhập tay mỗi ngày?
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl opacity-0 animate-fade-up delay-200">
            AutoFlow giúp SME Việt Nam tự động hóa quy trình lặp lại — tích hợp{" "}
            <strong className="text-slate-700">
              Zalo, MISA, Shopee, KiotViet
            </strong>{" "}
            — kết quả trong 2–4 tuần, dữ liệu ở trong nước, giá phù hợp SME.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-up delay-300">
            <a
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Nhận audit miễn phí
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <Button href="#quy-trinh" variant="secondary">
              Xem cách hoạt động
            </Button>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-slate-200 bg-white rounded-2xl border border-slate-200 p-6 md:p-0 shadow-sm opacity-0 animate-fade-up delay-500">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="md:px-8 md:py-6 text-center"
            >
              <AnimatedCounter value={m.value} />
              <span className="text-sm font-medium text-slate-400 ml-1">
                {m.unit}
              </span>
              <p className="text-xs text-slate-500 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
