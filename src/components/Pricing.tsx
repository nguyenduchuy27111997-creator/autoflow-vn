"use client";

import SectionHeader from "./ui/SectionHeader";
import Container from "./ui/Container";

const serviceTiers = [
  {
    name: "Starter",
    monthly: "1.5",
    setup: "2",
    target: "Doanh nghiệp nhỏ, bắt đầu tự động hóa",
    included: [
      "1 quy trình tự động",
      "Kết nối 2 hệ thống",
      "Server riêng tại Việt Nam",
      "Giám sát 24/7 + cảnh báo Zalo",
      "Hỗ trợ 2 giờ/tháng qua Zalo",
      "Backup dữ liệu hàng ngày",
    ],
    example: "Có đơn mới trên Shopee → tự ghi vào bảng tính + gửi tin xác nhận cho khách qua Zalo",
    popular: false,
  },
  {
    name: "Growth",
    monthly: "2.5",
    setup: "3",
    target: "Doanh nghiệp đang phát triển, cần nhiều quy trình",
    included: [
      "2-3 quy trình tự động",
      "Kết nối 3-4 hệ thống",
      "Tất cả tính năng Starter",
      "Báo cáo tối ưu hàng tháng",
      "Hỗ trợ ưu tiên 4 giờ/tháng",
      "Review hiệu suất hàng quý",
    ],
    example: "Đơn mới → tạo hóa đơn kế toán + cập nhật tồn kho + gửi xác nhận khách + báo cáo doanh thu tự động",
    popular: true,
  },
  {
    name: "Scale",
    monthly: "4",
    setup: "5",
    target: "Doanh nghiệp cần tự động hóa toàn diện",
    included: [
      "4+ quy trình tự động",
      "Kết nối 5+ hệ thống",
      "Tất cả tính năng Growth",
      "Thêm 1 quy trình mới mỗi quý",
      "Audit & tối ưu quy trình hàng quý",
      "Đường dây hỗ trợ riêng",
    ],
    example: "Khách để lại SĐT qua Facebook → AI phân loại → CRM → Zalo follow-up → nhắc sales → báo cáo conversion",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <Container id="bang-gia" className="py-20 md:py-28">
      <SectionHeader
        badge="Bảng giá"
        title={
          <>
            Chúng tôi vận hành,{" "}
            <span className="gradient-text">bạn tập trung kinh doanh</span>
          </>
        }
        subtitle="Quy trình tự động + server + giám sát + hỗ trợ — tất cả trong 1 gói hàng tháng."
        className="mb-16"
      />

      {/* Service tier cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {serviceTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg flex flex-col ${
              tier.popular
                ? "border-primary bg-white shadow-md shadow-primary/5 ring-1 ring-primary/20"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                Phổ biến nhất
              </span>
            )}

            <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
              {tier.name}
            </h3>
            <p className="text-xs text-slate-500 mb-4">{tier.target}</p>

            <div className="mb-2">
              <span className="font-display font-extrabold text-4xl text-slate-900">
                {tier.monthly}
              </span>
              <span className="text-sm text-slate-500 ml-1">
                triệu/tháng
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              + {tier.setup} triệu phí xây dựng ban đầu (trả 1 lần)
            </p>

            <ul className="space-y-2 mb-5">
              {tier.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <svg className="shrink-0 mt-0.5 text-accent" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 8l4 4 8-8" /></svg>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-slate-50 rounded-xl mb-6 flex-1">
              <p className="text-xs font-semibold text-primary mb-1.5">Ví dụ thực tế:</p>
              <p className="text-sm text-slate-600 leading-relaxed">{tier.example}</p>
            </div>

            <a
              href="/audit"
              className={`block text-center font-semibold py-3 rounded-xl transition-all ${
                tier.popular
                  ? "bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/25"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Tư vấn miễn phí
            </a>
          </div>
        ))}
      </div>

    </Container>
  );
}
