"use client";

import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import Container from "./ui/Container";

const packages = [
  {
    name: "Starter",
    tagline: "Bắt đầu tự động hóa",
    price: "8–15",
    unit: "triệu đồng",
    timeline: "1–2 tuần",
    features: [
      "Audit quy trình chuyên sâu (2h)",
      "1 workflow n8n chạy thật",
      "Video Loom hướng dẫn vận hành",
      "SOP document trên Notion",
      "Hỗ trợ 7 ngày sau bàn giao",
    ],
    example: "Lead Facebook → Google Sheet → Zalo OA chào hàng → Nhắc follow-up 3 ngày",
    popular: false,
  },
  {
    name: "Growth",
    tagline: "Cho doanh nghiệp nghiêm túc",
    price: "20–35",
    unit: "triệu đồng",
    timeline: "3–4 tuần",
    features: [
      "Audit toàn bộ quy trình vận hành",
      "3–5 workflows n8n",
      "Đào tạo team 2 giờ",
      "Thư viện video hướng dẫn từng quy trình",
      "Hỗ trợ 14 ngày sau bàn giao",
    ],
    example:
      "Đồng bộ đơn Shopee → MISA · Auto-reply review · Lead capture → CRM · Báo cáo tồn kho tự động",
    popular: true,
  },
  {
    name: "Scale",
    tagline: "Tự động hóa toàn diện",
    price: "50–80",
    unit: "triệu đồng",
    timeline: "6–8 tuần",
    features: [
      "Phân tích toàn bộ quy trình → bản thiết kế tự động hóa",
      "8–12 workflows n8n",
      "n8n self-hosted trên VPS riêng (data trong nước)",
      "Đào tạo team 2 buổi",
      "Bảo hành 30 ngày + theo dõi hệ thống",
    ],
    example:
      "Toàn bộ vận hành: đơn hàng, kho, tài chính, marketing, báo cáo — tự động hết",
    popular: false,
  },
];

export default function Pricing() {
  const [employees, setEmployees] = useState(2);
  const [hours, setHours] = useState(4);
  const salary = 11; // triệu/tháng
  const costPerYear = employees * salary * 12;
  const savedHours = hours * employees * 22; // 22 ngày/tháng
  const savedCost = Math.round(costPerYear * 0.6); // giả sử tiết kiệm 60%

  return (
    <Container id="bang-gia" className="py-20 md:py-28">
        <SectionHeader
          badge="Đầu tư thông minh"
          title={<>Rẻ hơn lương <span className="gradient-text">1 nhân viên</span>. Nhưng làm việc 24/7.</>}
          subtitle="Một lần đầu tư, tiết kiệm mỗi tháng. Hoàn vốn sau 5–7 tháng."
          className="mb-16"
        />

        {/* ROI Calculator */}
        <div className="max-w-2xl mx-auto mb-16 bg-primary-light/50 rounded-2xl border border-primary/10 p-8">
          <h3 className="font-display font-bold text-slate-900 mb-1">
            💡 Tính ngay: bạn đang mất bao nhiêu?
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Nhập số liệu của doanh nghiệp bạn để thấy con số thật.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Số nhân viên đang nhập tay
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1 người</span>
                <span className="font-semibold text-primary text-sm">
                  {employees} người
                </span>
                <span>10 người</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Số giờ nhập tay mỗi ngày/người
              </label>
              <input
                type="range"
                min="1"
                max="8"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1 giờ</span>
                <span className="font-semibold text-primary text-sm">
                  {hours} giờ
                </span>
                <span>8 giờ</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4 p-5 bg-white rounded-xl border border-slate-200">
            <div className="text-center">
              <p className="font-display font-extrabold text-2xl text-red-500">
                {costPerYear}
              </p>
              <p className="text-xs text-slate-500">triệu đ/năm chi phí lương</p>
            </div>
            <div className="text-center border-x border-slate-100">
              <p className="font-display font-extrabold text-2xl text-primary">
                {savedHours}
              </p>
              <p className="text-xs text-slate-500">giờ/tháng có thể tiết kiệm</p>
            </div>
            <div className="text-center">
              <p className="font-display font-extrabold text-2xl text-accent">
                {savedCost}
              </p>
              <p className="text-xs text-slate-500">
                triệu đ/năm tiết kiệm được
              </p>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg ${
                pkg.popular
                  ? "border-primary bg-white shadow-md shadow-primary/5 ring-1 ring-primary/20"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  Phổ biến nhất
                </span>
              )}

              <h3 className="font-display font-bold text-xl text-slate-900">
                {pkg.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1 mb-5">{pkg.tagline}</p>

              <div className="mb-1">
                <span className="font-display font-extrabold text-3xl text-slate-900">
                  {pkg.price}
                </span>
                <span className="text-sm text-slate-500 ml-1">{pkg.unit}</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Timeline: {pkg.timeline}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="shrink-0 mt-0.5 text-accent"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 8l4 4 8-8" />
                    </svg>
                    <span className="text-slate-600">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Example workflow */}
              <div className="p-4 bg-slate-50 rounded-xl mb-6">
                <p className="text-xs font-semibold text-slate-500 mb-1">
                  Ví dụ workflow:
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pkg.example}
                </p>
              </div>

              <a
                href="/audit"
                className={`block text-center font-semibold py-3 rounded-xl transition-all ${
                  pkg.popular
                    ? "bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                Bắt đầu ngay
              </a>
            </div>
          ))}
        </div>

        {/* Retainer note */}
        <div className="text-center mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200 max-w-2xl mx-auto">
          <p className="font-display font-bold text-slate-900">
            + Retainer hàng tháng: 8–15 triệu đ
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Monitor 24/7 · Fix lỗi trong 24h · 1–2 workflow mới/tháng · Báo cáo
            tự động cuối tháng
          </p>
        </div>
    </Container>
  );
}
