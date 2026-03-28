"use client";

import { useState } from "react";
import FormField from "./ui/FormField";
import CheckItem from "./ui/CheckItem";
import { industries } from "@/data/constants";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          industry: formData.get("industry"),
          details: formData.get("details"),
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="lien-he"
      className="py-20 md:py-28 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
              Bắt đầu ngay hôm nay
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight mb-6">
              30 phút audit miễn phí.
              <br />
              <span className="text-primary">0 đồng. 0 ràng buộc.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Mình sẽ nghe bạn kể về quy trình hàng ngày, tìm ra 3–5 chỗ có
              thể tự động hóa ngay, và gửi Audit Report chi tiết trong 24h.
              Không bán hàng, không áp lực.
            </p>

            {/* Trust signals */}
            <div className="space-y-3">
              {[
                "Audit Report gửi trong 24h — miễn phí",
                "Không spam, không gọi điện liên tục",
                "Nếu không phù hợp, mình nói thẳng",
              ].map((item, i) => (
                <CheckItem key={i} dark>{item}</CheckItem>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                  >
                    <path d="M4 16l8 8 16-16" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  Cảm ơn bạn!
                </h3>
                <p className="text-sm text-slate-500">
                  Mình sẽ liên hệ qua Zalo/Email trong vòng 24h để sắp xếp cuộc
                  gọi audit. Hẹn gặp bạn sớm!
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                  Đặt lịch audit miễn phí
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  Điền thông tin, mình liên hệ trong 24h.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                  <FormField label="Tên của bạn" name="name" required placeholder="Nguyễn Văn A" />

                  <FormField label="Số điện thoại / Zalo" name="phone" type="tel" required placeholder="0912 345 678" />

                  <FormField
                    label="Ngành nghề"
                    name="industry"
                    type="select"
                    placeholder="Chọn ngành"
                    options={industries}
                  />

                  <FormField label="Vấn đề lớn nhất bạn đang gặp?" name="details" type="textarea" rows={3} placeholder="Ví dụ: Nhân viên mất 4 giờ/ngày nhập đơn từ Shopee sang MISA..." />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                  >
                    {submitting ? "Đang gửi..." : "Nhận audit miễn phí"}
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 8h6M8 5l3 3-3 3" />
                    </svg>
                  </button>

                  <p className="text-xs text-center text-slate-400">
                    Không spam. Không chia sẻ thông tin cho bên thứ ba.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
