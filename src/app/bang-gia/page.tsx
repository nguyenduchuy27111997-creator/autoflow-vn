"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "Starter",
    tagline: "Bắt đầu tự động hóa",
    price: "8–15",
    timeline: "1–2 tuần",
    ideal: "Doanh nghiệp muốn thử automation với 1 quy trình cụ thể",
    features: [
      "Audit quy trình chuyên sâu (2h call)",
      "1 workflow n8n chạy thật",
      "Video Loom hướng dẫn vận hành",
      "SOP document trên Notion",
      "Support 7 ngày sau bàn giao",
    ],
    notIncluded: ["Training team", "n8n self-hosted", "Warranty dài hạn"],
    example: {
      title: "Lead Capture Automation",
      flow: "Lead từ Facebook/Zalo → Lưu tự động vào Google Sheet → Zalo OA gửi tin nhắn chào hàng → Nhắc follow-up sau 3 ngày nếu không reply",
    },
    popular: false,
  },
  {
    name: "Growth",
    tagline: "Cho doanh nghiệp nghiêm túc",
    price: "20–35",
    timeline: "3–4 tuần",
    ideal: "Doanh nghiệp muốn tự động hóa nhiều quy trình cùng lúc",
    features: [
      "Audit toàn bộ quy trình vận hành",
      "3–5 workflows n8n",
      "Training session 2h cho team",
      "Video library hướng dẫn từng workflow",
      "Support 14 ngày sau bàn giao",
    ],
    notIncluded: ["n8n self-hosted riêng", "Warranty 30 ngày"],
    example: {
      title: "E-commerce Full Automation",
      flow: "Đồng bộ đơn hàng Shopee/Tiki → MISA · Auto-reply review + escalate · Lead capture → CRM + Zalo OA · Báo cáo tồn kho tự động thứ 2 sáng · Upsell sequence cho khách đã mua",
    },
    popular: true,
  },
  {
    name: "Scale",
    tagline: "Tự động hóa toàn diện",
    price: "50–80",
    timeline: "6–8 tuần",
    ideal: "Doanh nghiệp muốn tự động hóa toàn bộ vận hành",
    features: [
      "Full process mapping → automation blueprint",
      "8–12 workflows n8n",
      "n8n self-hosted trên VPS riêng (data trong nước)",
      "Team training 2 buổi",
      "30-day warranty + monitoring",
    ],
    notIncluded: [],
    example: {
      title: "Operations Complete",
      flow: "Toàn bộ vận hành: đơn hàng, kho, tài chính, marketing, chăm sóc khách, báo cáo — tự động hết. n8n chạy trên server riêng của bạn, data 100% trong nước.",
    },
    popular: false,
  },
];

export default function BangGiaPage() {
  const [employees, setEmployees] = useState(2);
  const [hours, setHours] = useState(4);
  const salary = 11;
  const costPerYear = employees * salary * 12;
  const savedHours = hours * employees * 22;
  const savedCost = Math.round(costPerYear * 0.6);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Đầu tư một lần.{" "}
              <span className="gradient-text">Tiết kiệm mỗi tháng.</span>
            </h1>
            <p className="text-lg text-slate-500">
              Rẻ hơn lương 1 nhân viên. Nhưng làm việc 24/7, không nghỉ phép,
              không sai sót. Hoàn vốn sau 5–7 tháng.
            </p>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="bg-primary-light/50 rounded-2xl border border-primary/10 p-8 md:p-10">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
              Tính ROI cho doanh nghiệp của bạn
            </h2>
            <p className="text-sm text-slate-500 mb-8">
              Kéo thanh trượt để thấy con số thật — bạn đang mất bao nhiêu cho
              việc nhập tay?
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-3 block">
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
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1</span>
                  <span className="font-bold text-primary text-lg">
                    {employees} người
                  </span>
                  <span>10</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-3 block">
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
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1</span>
                  <span className="font-bold text-primary text-lg">
                    {hours} giờ
                  </span>
                  <span>8</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-red-500">
                  {costPerYear}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  triệu đ/năm
                  <br />
                  chi phí lương nhập tay
                </p>
              </div>
              <div className="text-center border-x border-slate-100">
                <p className="font-display font-extrabold text-3xl text-primary">
                  {savedHours}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  giờ/tháng
                  <br />
                  có thể tiết kiệm
                </p>
              </div>
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-accent">
                  {savedCost}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  triệu đ/năm
                  <br />
                  tiết kiệm được
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/5 border border-accent/10 rounded-xl">
              <p className="text-sm text-accent font-semibold text-center">
                Với gói Growth (20–35 triệu), bạn hoàn vốn sau{" "}
                {Math.max(2, Math.round((28 / savedCost) * 12))} tháng và tiết
                kiệm {savedCost - 28} triệu/năm từ năm 2 trở đi.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg flex flex-col ${
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
                <p className="text-sm text-slate-500 mt-1">{pkg.tagline}</p>

                <div className="my-5">
                  <span className="font-display font-extrabold text-4xl text-slate-900">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">
                    triệu đồng
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-1">
                  Timeline: {pkg.timeline}
                </p>
                <p className="text-xs text-primary font-medium mb-6">
                  {pkg.ideal}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
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
                  {pkg.notIncluded.map((f, i) => (
                    <li
                      key={`no-${i}`}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <svg
                        className="shrink-0 mt-0.5 text-slate-300"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 8h8" />
                      </svg>
                      <span className="text-slate-500">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Example */}
                <div className="p-4 bg-slate-50 rounded-xl mb-6">
                  <p className="text-xs font-semibold text-slate-700 mb-1.5">
                    Ví dụ: {pkg.example.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pkg.example.flow}
                  </p>
                </div>

                <a
                  href="/audit"
                  className={`block text-center font-semibold py-3.5 rounded-xl transition-all ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/25"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  Nhận audit miễn phí
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Retainer */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-display font-bold text-2xl">
                  Retainer hàng tháng
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Cho doanh nghiệp đã dùng AutoFlow và muốn hỗ trợ liên tục
                </p>
              </div>
              <div className="text-right">
                <span className="font-display font-extrabold text-3xl">
                  8–15
                </span>
                <span className="text-sm text-slate-400 ml-1">
                  triệu đ/tháng
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Monitor workflows hàng tuần",
                "Fix lỗi trong 24h (SLA)",
                "1–2 workflow nhỏ mới mỗi tháng",
                "Monthly automation report tự động",
                "Tư vấn AI tools mới phù hợp",
                "Check-in 30/60/90 ngày",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <svg
                    className="text-accent shrink-0"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M2 8l4 4 8-8" />
                  </svg>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-slate-300">
                <strong className="text-white">Commitment:</strong> 3 tháng tối
                thiểu · Tháng đầu giảm 20% nếu ký ngay sau project ·{" "}
                <strong className="text-accent">Tỉ lệ chốt retainer: 70%+</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Payment & Comparison */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Payment */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-5">
                Thanh toán
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <span className="font-display font-bold text-2xl text-primary">
                    50%
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Upfront trước khi bắt đầu
                    </p>
                    <p className="text-xs text-slate-500">
                      Chuyển khoản ngân hàng
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <span className="font-display font-bold text-2xl text-primary">
                    50%
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Khi bàn giao hoàn tất
                    </p>
                    <p className="text-xs text-slate-500">
                      Có hợp đồng dịch vụ rõ ràng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why not Zapier */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-5">
                Tại sao n8n, không phải Zapier?
              </h3>
              <div className="space-y-3">
                {[
                  {
                    label: "Phí hàng tháng",
                    n8n: "~125K đ (self-host)",
                    zapier: "$20/mo",
                  },
                  {
                    label: "Tích hợp Zalo OA",
                    n8n: "Native ✓",
                    zapier: "Không ✕",
                  },
                  {
                    label: "Data trong nước",
                    n8n: "VPS VN ✓",
                    zapier: "Server nước ngoài",
                  },
                  {
                    label: "Giới hạn tasks",
                    n8n: "Không giới hạn",
                    zapier: "Giới hạn theo plan",
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 text-sm py-2 border-b border-slate-100 last:border-0"
                  >
                    <span className="text-slate-500">{row.label}</span>
                    <span className="font-semibold text-accent">{row.n8n}</span>
                    <span className="text-slate-500">{row.zapier}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" fill="none" stroke="#10B981" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Cam kết 100% hoàn tiền
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
              Nếu AutoFlow không deliver đúng scope đã thỏa thuận trong hợp đồng —
              bạn được hoàn 100% chi phí. Không điều kiện ẩn, không kéo dài.
              Mình cam kết vì mình tin vào chất lượng công việc.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Scope rõ ràng trong hợp đồng
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Bảo hành 7–30 ngày
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Thanh toán 50/50 giảm rủi ro
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-4">
            Vẫn chưa chắc chắn?
          </h2>
          <p className="text-slate-500 mb-6">
            Audit miễn phí 30 phút — mình sẽ chỉ ra chính xác bạn nên chọn gói
            nào dựa trên quy trình thực tế.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Nhận audit miễn phí
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 8h6M8 5l3 3-3 3" />
            </svg>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
