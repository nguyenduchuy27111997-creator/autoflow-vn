"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "./ui/SectionHeader";

const advantages = [
  {
    title: "Giá SME, chất lượng enterprise",
    description:
      "Công ty IT lớn charge 200–500 triệu cho 1 project. AutoFlow làm tương tự với 20–80 triệu vì dùng n8n — nền tảng mã nguồn mở, không phí license.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: "Hiểu 100% ecosystem Việt Nam",
    description:
      "Không phải consultant nước ngoài cố gắng tích hợp Zapier với Zalo. AutoFlow native với Zalo OA, MISA, KiotViet, Shopee — vì chúng tôi dùng chúng hàng ngày.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Data ở trong nước",
    description:
      "n8n self-hosted trên VPS Việt Nam. Dữ liệu khách hàng, đơn hàng, tài chính — tất cả ở trong nước. Không gửi ra server nước ngoài.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "2–4 tuần là xong, không phải 6 tháng",
    description:
      "Quy trình delivery chuẩn hóa: Audit → Build → Training → Bàn giao. Gói Starter chạy trong 1 tuần. Growth trong 3 tuần. Không kéo dài, không phát sinh.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const workflowSteps = [
  { label: "Đơn Shopee mới", color: "#EE4D2D", delay: 0 },
  { label: "Lưu vào Google Sheet", color: "#0F9D58", delay: 800 },
  { label: "Đồng bộ MISA", color: "#E31937", delay: 1600 },
  { label: "Gửi xác nhận Zalo", color: "#0068FF", delay: 2400 },
  { label: "Nhắc follow-up 3 ngày", color: "#F59E0B", delay: 3200 },
];

export default function WhyUs() {
  const [activeStep, setActiveStep] = useState(-1);
  const [playCount, setPlayCount] = useState(0);
  const hasAutoPlayed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAutoPlayed.current) {
          hasAutoPlayed.current = true;
          setPlayCount((c) => c + 1);
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("workflow-demo");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (playCount === 0) return;
    setActiveStep(-1);

    const timers = workflowSteps.map((step, i) =>
      setTimeout(() => setActiveStep(i), step.delay + 500)
    );

    const resetTimer = setTimeout(() => {
      // animation complete, keep final state
    }, 5000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(resetTimer);
    };
  }, [playCount]);

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative noise-bg">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <SectionHeader
          badge="Tại sao chọn AutoFlow?"
          title="Không phải lý thuyết."
          gradientText="Kết quả thực."
          subtitle="AutoFlow kết hợp chuyên môn n8n sâu với hiểu biết thực tế về doanh nghiệp Việt Nam."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Advantages */}
          <div className="space-y-5">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded-xl border border-slate-200 p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 mb-1.5">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow Demo */}
          <div
            id="workflow-demo"
            className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display font-bold text-slate-900">
                  Workflow demo
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Đồng bộ đơn Shopee → MISA → Zalo tự động
                </p>
              </div>
              <button
                onClick={() => { setActiveStep(-1); setPlayCount((c) => c + 1); }}
                className="text-xs font-semibold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Chạy lại
              </button>
            </div>

            {/* Steps */}
            <div className="space-y-0">
              {workflowSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  {/* Connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-500 ${
                        activeStep >= i
                          ? "scale-100 opacity-100"
                          : "scale-75 opacity-30"
                      }`}
                      style={{
                        backgroundColor:
                          activeStep >= i ? step.color : "#CBD5E1",
                      }}
                    >
                      {activeStep > i ? (
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M2 8l4 4 8-8" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div
                        className={`w-0.5 h-8 transition-all duration-500 ${
                          activeStep > i ? "bg-slate-300" : "bg-slate-200"
                        }`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`pt-2 pb-4 transition-all duration-500 ${
                      activeStep >= i
                        ? "opacity-100 translate-x-0"
                        : "opacity-40 translate-x-2"
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold transition-colors ${
                        activeStep >= i ? "text-slate-900" : "text-slate-500"
                      }`}
                    >
                      {step.label}
                    </p>
                    {activeStep === i && (
                      <span className="inline-flex items-center gap-1 text-xs text-accent font-medium mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Đang xử lý...
                      </span>
                    )}
                    {activeStep > i && (
                      <span className="text-xs text-slate-500 mt-1">
                        Hoàn thành ✓
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Result */}
            <div
              className={`mt-6 p-4 rounded-xl border transition-all duration-500 ${
                activeStep >= workflowSteps.length - 1
                  ? "bg-accent/5 border-accent/20 opacity-100"
                  : "bg-slate-50 border-slate-200 opacity-50"
              }`}
            >
              <p className="text-sm font-semibold text-accent flex items-center gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 8l4 4 8-8" />
                </svg>
                Toàn bộ quy trình: 10 giây thay vì 45 phút
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Không cần nhập tay. Không sai sót. Chạy 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
