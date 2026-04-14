"use client";

import SectionHeader from "./ui/SectionHeader";
import Container from "./ui/Container";

const workflowTiers = [
  {
    name: "Đơn giản",
    tagline: "≤5 nodes",
    price: "3",
    unit: "triệu VND",
    desc: "Workflow cơ bản, kết nối 2-3 hệ thống",
    example: "Đơn Shopee mới → Google Sheet + thông báo Zalo OA",
    popular: false,
  },
  {
    name: "Trung bình",
    tagline: "6-15 nodes",
    price: "5",
    unit: "triệu VND",
    desc: "Logic phức tạp hơn, nhiều nhánh xử lý",
    example:
      "Đơn Shopee → hóa đơn MISA + tồn kho KiotViet + Zalo OA + Google Sheet",
    popular: true,
  },
  {
    name: "Phức tạp",
    tagline: "15+ nodes",
    price: "8",
    unit: "triệu VND",
    desc: "Multi-step, nhiều điều kiện, tích hợp sâu",
    example:
      "Lead Facebook → AI phân loại → CRM → nurture sequence → alert hot lead",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <Container id="bang-gia" className="py-20 md:py-28">
      <SectionHeader
        badge="Bảng giá đơn giản"
        title={
          <>
            Server riêng{" "}
            <span className="gradient-text">990K/tháng</span>. Workflow tính
            riêng.
          </>
        }
        subtitle="Hosting 1 giá duy nhất. Workflow trả 1 lần theo độ phức tạp. Không phí ẩn."
        className="mb-16"
      />

      {/* Hosting card */}
      <div className="max-w-2xl mx-auto mb-16 rounded-2xl border-2 border-primary bg-white shadow-md shadow-primary/5 p-8 text-center">
        <h3 className="font-display font-bold text-slate-900 mb-1">
          Managed Hosting
        </h3>
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="font-display font-extrabold text-5xl text-slate-900">
            990K
          </span>
          <span className="text-lg text-slate-500">/tháng</span>
        </div>
        <p className="text-sm text-slate-500 mb-5 max-w-md mx-auto">
          Server riêng Bizfly Cloud HCM, backup hàng ngày, monitoring 24/7, SSL
          tự động, support Zalo, unlimited executions.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-5 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Unlimited executions
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Backup encrypted hàng ngày
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            1 workflow miễn phí khi ký 3 tháng
          </span>
        </div>
        <a
          href="/bang-gia#hosting"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/20 text-sm"
        >
          Xem chi tiết hosting
        </a>
      </div>

      {/* Workflow pricing cards */}
      <div className="text-center mb-8">
        <h3 className="font-display font-bold text-xl text-slate-900">
          Xây dựng workflow — trả 1 lần
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Giá theo độ phức tạp. Workflow chạy mãi, không phí hàng tháng.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {workflowTiers.map((pkg) => (
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
            <p className="text-sm text-slate-500 mt-1 mb-1">{pkg.desc}</p>
            <p className="text-xs text-primary font-medium mb-5">
              {pkg.tagline}
            </p>

            <div className="mb-1">
              <span className="font-display font-extrabold text-3xl text-slate-900">
                {pkg.price}
              </span>
              <span className="text-sm text-slate-500 ml-1">
                {pkg.unit} / workflow
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-6">Trả 1 lần duy nhất</p>

            {/* Example workflow */}
            <div className="p-4 bg-slate-50 rounded-xl mb-6">
              <p className="text-xs font-semibold text-slate-500 mb-1">
                Ví dụ:
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
              Liên hệ báo giá
            </a>
          </div>
        ))}
      </div>

      {/* Free pilot note */}
      <div className="text-center mt-10 p-6 bg-accent/5 rounded-xl border border-accent/10 max-w-2xl mx-auto">
        <p className="font-display font-bold text-slate-900">
          Pilot miễn phí: 1 workflow khi ký hosting 3 tháng
        </p>
        <p className="text-sm text-slate-500 mt-1">
          Ký hosting 3 tháng (990K x 3) — nhận 1 workflow đơn giản miễn phí (trị
          giá 3 triệu).
        </p>
      </div>
    </Container>
  );
}
