"use client";

import { useState, useEffect } from "react";
import Container from "./ui/Container";

export default function PilotBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container id="pilot" className="py-16 md:py-20">
      <div
        className={`relative overflow-hidden rounded-3xl border-2 border-accent bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-8 md:p-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Decorative corner badge */}
        <div className="absolute -top-px -right-px">
          <div className="bg-accent text-white text-xs font-bold px-6 py-2 rounded-bl-2xl">
            Miễn phí
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            PILOT MIỄN PHÍ — KÝ HOSTING 3 THÁNG
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 mb-3">
            1 Workflow Miễn Phí Khi Ký{" "}
            <span className="gradient-text">Hosting 3 Tháng</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Ký hosting 990K/tháng x 3 tháng — nhận miễn phí 1 workflow đơn giản
            (trị giá 3 triệu). Trải nghiệm tự động hóa trước khi đầu tư thêm.
          </p>
        </div>

        {/* 3 Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          {[
            {
              value: "0 đồng",
              label: "Phí workflow đầu tiên",
              color: "text-accent",
              bg: "bg-accent/5",
              border: "border-accent/10",
            },
            {
              value: "990K/tháng",
              label: "Hosting (1 giá duy nhất)",
              color: "text-primary",
              bg: "bg-primary/5",
              border: "border-primary/10",
            },
            {
              value: "7 ngày",
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
              <p
                className={`font-display font-extrabold text-2xl ${metric.color}`}
              >
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
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              </span>
              Pilot bao gồm gì?
            </h3>
            <ul className="space-y-3">
              {[
                {
                  title: "Hosting 990K/tháng (3 tháng minimum)",
                  desc: "Server riêng Bizfly Cloud HCM, backup, monitoring, SSL, unlimited executions",
                },
                {
                  title: "1 workflow đơn giản miễn phí (≤5 nodes)",
                  desc: "VD: Đơn Shopee → tự động vào Google Sheet + thông báo Zalo OA",
                },
                {
                  title: "Video Loom hướng dẫn",
                  desc: "Team xem lại bất cứ lúc nào",
                },
                {
                  title: "Hỗ trợ 7 ngày sau bàn giao",
                  desc: "Fix lỗi, trả lời thắc mắc qua Zalo",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="shrink-0 mt-0.5 text-accent"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M2 9l5 5L16 4" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Workflow preview */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              Workflow mẫu (miễn phí)
            </h3>
            <div className="space-y-0">
              {[
                "Đơn hàng mới trên Shopee/Tiki",
                "Tự động lấy thông tin đơn + khách hàng",
                "Tạo dòng trong Google Sheet",
                "Gửi thông báo qua Zalo OA cho khách",
                "Cập nhật báo cáo tự động",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    {i < 4 && <div className="w-0.5 h-4 bg-slate-200" />}
                  </div>
                  <p className="text-sm text-slate-700 py-2">{step}</p>
                </div>
              ))}
            </div>

            {/* Integrations */}
            <div className="mt-4 bg-primary/5 rounded-xl p-3 text-center">
              <p className="text-xs font-semibold text-primary">
                Tích hợp: Shopee · Tiki · MISA · KiotViet · Zalo OA · Google
                Sheets
              </p>
            </div>
          </div>
        </div>

        {/* ROI comparison */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-slate-900 mb-4 text-center">
            So sánh chi phí
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-slate-500 mb-1">Nhân viên nhập liệu</p>
              <p className="font-display font-bold text-red-500">
                8-12 tr/tháng
              </p>
              <p className="text-xs text-slate-500">= 96-144 tr/năm</p>
            </div>
            <div className="border-x border-slate-100">
              <p className="text-xs text-slate-500 mb-1">
                AutoFlow Hosting + Pilot
              </p>
              <p className="font-display font-bold text-accent">
                2.970K (3 tháng)
              </p>
              <p className="text-xs text-slate-500">
                + 1 workflow miễn phí
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">n8n Cloud</p>
              <p className="font-display font-bold text-slate-500">
                ~730K/tháng
              </p>
              <p className="text-xs text-slate-500">
                Giới hạn 2,500 lần chạy
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/bang-gia#pilot"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              Đăng ký pilot miễn phí
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-all"
            >
              Hoặc đặt lịch tư vấn miễn phí
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Điều kiện: ký hosting 3 tháng minimum (990K/tháng)
          </p>
        </div>
      </div>
    </Container>
  );
}
