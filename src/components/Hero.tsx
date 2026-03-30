"use client";

import { useEffect, useRef } from "react";
import Button from "./ui/Button";

const metrics = [
  { value: "3×", unit: "đơn hàng", label: "xử lý mỗi ngày" },
  { value: "0", unit: "sai sót", label: "nhập liệu thủ công" },
  { value: "2", unit: "tuần", label: "triển khai xong" },
  { value: "3", unit: "tháng", label: "hoàn vốn đầu tư" },
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) el.classList.add("animate-fade-up");
  }, []);

  // Ensure video plays on mount (some browsers block autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — that's OK, poster will show
      });
    }
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

      <div className="max-w-5xl mx-auto px-6">
        {/* Vertical layout: text centered on top */}
        <div className="text-center mb-12 md:mb-16">
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
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up delay-200">
            AutoFlow giúp SME Việt Nam tự động hóa quy trình lặp lại — tích hợp{" "}
            <strong className="text-slate-700">
              Zalo, MISA, Shopee, KiotViet
            </strong>{" "}
            — kết quả trong 2 tuần, dữ liệu ở trong nước, giá phù hợp SME.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-300">
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

        {/* Video below — browser-style frame */}
        <div className="relative opacity-0 animate-fade-up delay-400 mb-16">
          {/* Decorative glow behind */}
          <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/5 rounded-[2rem] blur-3xl" />

          {/* Browser frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] border border-slate-200/80 bg-white">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200/80">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-400 max-w-xs w-full justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-slate-300"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  autoflowvn.net
                </div>
              </div>
              <div className="w-[52px]" />
            </div>

            {/* Video content */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/videos/hero-poster.jpg"
              className="w-full h-auto block"
              preload="auto"
            >
              <source src="/videos/hero-loop.webm" type="video/webm" />
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-slate-200 bg-white rounded-2xl border border-slate-200 p-6 md:p-0 shadow-sm opacity-0 animate-fade-up delay-500">
          {metrics.map((m, i) => (
            <div key={i} className="md:px-8 md:py-6 text-center">
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
