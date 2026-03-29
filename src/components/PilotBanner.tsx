"use client";

import { useState, useEffect } from "react";
import Container from "./ui/Container";

export default function PilotBanner() {
  const [slotsLeft, setSlotsLeft] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in after mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container id="pilot" className="py-16 md:py-20">
      <div
        className={`relative overflow-hidden rounded-3xl border-2 border-orange-300 bg-gradient-to-br from-orange-50 via-white to-blue-50 p-8 md:p-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Decorative corner badge */}
        <div className="absolute -top-px -right-px">
          <div className="bg-orange-500 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl">
            Còn {slotsLeft}/3 slot
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            🔥 CHƯƠNG TRÌNH PILOT — GIẢM 40-50%
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 mb-3">
            Tự Động Hóa E-commerce Trong{" "}
            <span className="gradient-text">1 Tuần</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Sync đơn hàng Shopee/Tiki → MISA/KiotViet → Zalo OA tự động.
            Hết nhập tay. Chỉ dành cho 3 khách hàng đầu tiên.
          </p>
        </div>

        {/* 3 Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          {[
            {
              value: "4-5 giờ/ngày",
              label: "Tiết kiệm thời gian",
              color: "text-primary",
              bg: "bg-primary/5",
              border: "border-primary/10",
            },
            {
              value: "5-8 triệu đ",
              label: "Chi phí pilot (1 lần)",
              color: "text-accent",
              bg: "bg-accent/5",
              border: "border-accent/10",
            },
            {
              value: "1 tuần",
              label: "Thời gian triển khai",
              color: "text-secondary",
              bg: "bg-secondary/5",
              border: "border-secondary/10",
            },
          ].map((metric, i) => (
            <div
              key={i}
              className={`${metric.bg} border ${metric.border} rounded-2xl p-5 text-center`}
            >
              <p className={`font-display font-extrabold text-2xl ${metric.color}`}>
                {metric.value}
              </p>
              <p className="text-xs text-slate-500 mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Left: What you get */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </span>
              Bạn nhận được gì?
            </h3>
            <ul className="space-y-3">
              {[
                { title: "Audit chuyên sâu (2 giờ online)", desc: "Phân tích quy trình, chỉ ra điểm nghẽn, tính ROI cụ thể" },
                { title: "1 workflow n8n chạy thật", desc: "VD: Đơn Shopee → tự động vào MISA + thông báo Zalo OA" },
                { title: "Video Loom hướng dẫn", desc: "Team xem lại bất cứ lúc nào" },
                { title: "Tài liệu SOP trên Notion", desc: "Bước-bước rõ ràng, ai cũng làm được" },
                { title: "Hỗ trợ 7 ngày sau bàn giao", desc: "Fix lỗi, trả lời thắc mắc qua Zalo" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="shrink-0 mt-0.5 text-accent" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M2 9l5 5L16 4" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Workflow preview */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Workflow phổ biến nhất
            </h3>
            <div className="space-y-0">
              {[
                "Đơn hàng mới trên Shopee/Tiki",
                "Tự động lấy thông tin đơn + khách hàng",
                "Tạo hóa đơn trong MISA/KiotViet",
                "Gửi xác nhận qua Zalo OA cho khách",
                "Cập nhật báo cáo Google Sheet",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    {i < 4 && (
                      <div className="w-0.5 h-4 bg-slate-200" />
                    )}
                  </div>
                  <p className="text-sm text-slate-700 py-2">{step}</p>
                </div>
              ))}
            </div>

            {/* Integrations */}
            <div className="mt-4 bg-primary/5 rounded-xl p-3 text-center">
              <p className="text-xs font-semibold text-primary">
                Tích hợp: Shopee · Tiki · MISA · KiotViet · Zalo OA · Google Sheets
              </p>
            </div>
          </div>
        </div>

        {/* ROI comparison */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-slate-900 mb-4 text-center">
            Tại sao đây là quyết định đúng?
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-slate-400 mb-1">Nhân viên nhập liệu</p>
              <p className="font-display font-bold text-red-500">8-12 tr/tháng</p>
              <p className="text-xs text-slate-400">= 96-144 tr/năm</p>
            </div>
            <div className="border-x border-slate-100">
              <p className="text-xs text-slate-400 mb-1">Gói Pilot AutoFlow</p>
              <p className="font-display font-bold text-accent">5-8 tr (1 lần)</p>
              <p className="text-xs text-slate-400">Hoàn vốn sau 1 tháng</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">ROI năm đầu</p>
              <p className="font-display font-bold text-primary">Tiết kiệm 80-130 tr</p>
              <p className="text-xs text-slate-400">= ROI 12-15x</p>
            </div>
          </div>
        </div>

        {/* Conditions */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 max-w-3xl mx-auto">
          <p className="font-semibold text-amber-800 text-sm mb-2">
            Điều kiện tham gia (Win-Win):
          </p>
          <div className="grid sm:grid-cols-3 gap-2 text-xs text-amber-700">
            <p>★ Cho phép dùng kết quả làm case study</p>
            <p>★ Cho 1 testimonial ngắn (text/video)</p>
            <p>★ Giới thiệu 2 người quen nếu hài lòng</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            Đặt lịch audit miễn phí
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-xs text-slate-400 mt-3">
            30 phút · Miễn phí · Không cam kết · Qua Zoom hoặc Google Meet
          </p>
        </div>
      </div>
    </Container>
  );
}
