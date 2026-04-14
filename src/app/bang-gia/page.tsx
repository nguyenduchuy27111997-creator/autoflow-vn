"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hostingFeatures = [
  "Server riêng tại Việt Nam (Bizfly Cloud HCM)",
  "Backup tự động hàng ngày (encrypted, Backblaze B2)",
  "Monitoring 24/7 (Uptime Kuma + UptimeRobot)",
  "SSL wildcard tự động (Let's Encrypt)",
  "Support qua Zalo (giờ hành chính)",
  "Unlimited workflow executions",
  "SLA uptime 99.9%",
];

const workflowTiers = [
  {
    name: "Đơn giản",
    desc: "Workflow cơ bản, kết nối 2-3 hệ thống",
    nodes: "≤5 nodes",
    price: "3",
    example:
      "Đơn hàng Shopee mới → tự động tạo dòng trong Google Sheet + gửi thông báo Zalo OA",
    popular: false,
  },
  {
    name: "Trung bình",
    desc: "Logic phức tạp hơn, nhiều nhánh xử lý",
    nodes: "6-15 nodes",
    price: "5",
    example:
      "Đơn hàng Shopee → tạo hóa đơn MISA + cập nhật tồn kho KiotViet + gửi xác nhận Zalo OA + báo cáo Google Sheet",
    popular: true,
  },
  {
    name: "Phức tạp",
    desc: "Multi-step, nhiều điều kiện, tích hợp sâu",
    nodes: "15+ nodes",
    price: "8",
    example:
      "Full pipeline: Lead từ Facebook → phân loại AI → CRM → nurture sequence → báo cáo → alert khi hot lead",
    popular: false,
  },
];

const comparisonRows = [
  {
    label: "Chi phí/tháng",
    self: "~500K VPS + thời gian bạn",
    autoflow: "990K (trọn gói)",
    cloud: "~730K (n8n Cloud Starter)",
  },
  {
    label: "Giới hạn chạy",
    self: "Không giới hạn",
    autoflow: "Không giới hạn",
    cloud: "2,500 lần/tháng",
  },
  {
    label: "Data",
    self: "VPS bạn chọn",
    autoflow: "Server Việt Nam (Bizfly HCM)",
    cloud: "Server nước ngoài (EU)",
  },
  {
    label: "Backup",
    self: "Tự setup backup script",
    autoflow: "Tự động, encrypted, hàng ngày",
    cloud: "Có (managed bởi n8n)",
  },
  {
    label: "Monitoring",
    self: "Tự cài Uptime Kuma/Grafana",
    autoflow: "24/7, cảnh báo Zalo tự động",
    cloud: "Dashboard cơ bản",
  },
  {
    label: "Support tiếng Việt",
    self: "Không",
    autoflow: "Zalo giờ hành chính",
    cloud: "Không (tiếng Anh)",
  },
  {
    label: "Setup",
    self: "Tự cài (3-5 ngày nếu biết Linux)",
    autoflow: "AutoFlow setup trong 24h",
    cloud: "Tự động (cloud)",
  },
  {
    label: "Phù hợp cho",
    self: "Developer muốn tự quản lý",
    autoflow: "Chủ DN muốn tập trung kinh doanh",
    cloud: "Người dùng cá nhân, ít workflow",
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
              Server riêng, unlimited workflow.{" "}
              <span className="gradient-text">Chỉ 990K/tháng.</span>
            </h1>
            <p className="text-lg text-slate-500">
              Rẻ hơn n8n Cloud (730K nhưng giới hạn 2,500 lần chạy). AutoFlow
              unlimited, data tại Việt Nam, support tiếng Việt.
            </p>
          </div>
        </section>

        {/* Section 1: Hosting 990K */}
        <section id="hosting" className="max-w-4xl mx-auto px-6 mb-20">
          <div className="relative rounded-2xl border-2 border-primary bg-white shadow-lg shadow-primary/5 p-8 md:p-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-5 py-1.5 rounded-full">
              1 giá duy nhất
            </span>

            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                Managed Hosting
              </h2>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-display font-extrabold text-5xl md:text-6xl text-slate-900">
                  990K
                </span>
                <span className="text-lg text-slate-500">/tháng</span>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                990K/tháng = chưa bằng 1 bữa ăn team building. Tiết kiệm
                4h/ngày nhập tay.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {hostingFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
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

            <div className="text-center">
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                Đăng ký hosting
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
            </div>
          </div>
        </section>

        {/* Section 2: Workflow Build */}
        <section id="workflow-build" className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              Xây dựng workflow
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-3">
              Giá theo độ phức tạp của workflow
            </h2>
            <p className="text-slate-500">
              Trả 1 lần. Workflow chạy mãi. Không phát sinh phí ẩn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workflowTiers.map((tier) => (
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

                <h3 className="font-display font-bold text-xl text-slate-900">
                  {tier.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{tier.desc}</p>
                <p className="text-xs text-primary font-medium mt-1 mb-4">
                  {tier.nodes}
                </p>

                <div className="mb-6">
                  <span className="font-display font-extrabold text-4xl text-slate-900">
                    {tier.price}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">
                    triệu VND / workflow
                  </span>
                </div>

                {/* Example */}
                <div className="p-4 bg-slate-50 rounded-xl mb-6 flex-1">
                  <p className="text-xs font-semibold text-slate-700 mb-1.5">
                    Ví dụ:
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tier.example}
                  </p>
                </div>

                <a
                  href="/audit"
                  className={`block text-center font-semibold py-3.5 rounded-xl transition-all ${
                    tier.popular
                      ? "bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/25"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  Liên hệ báo giá
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Free Pilot */}
        <section id="pilot" className="max-w-4xl mx-auto px-6 mb-20">
          <div className="relative overflow-hidden rounded-2xl border-2 border-accent bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-8 md:p-10">
            <div className="absolute -top-px -right-px">
              <div className="bg-accent text-white text-xs font-bold px-6 py-2 rounded-bl-2xl">
                Miễn phí
              </div>
            </div>

            <div className="text-center mb-8">
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                PILOT MIỄN PHÍ
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3">
                1 workflow miễn phí khi ký hosting 3 tháng
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Ký hosting 3 tháng (990K x 3 = 2.970K) — nhận miễn phí 1
                workflow đơn giản (trị giá 3 triệu). Trải nghiệm trước khi
                đầu tư thêm.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              {[
                {
                  value: "0 đồng",
                  label: "Phí workflow đầu tiên",
                  color: "text-accent",
                  bg: "bg-accent/5",
                  border: "border-accent/10",
                },
                {
                  value: "7 ngày",
                  label: "Thời gian triển khai",
                  color: "text-primary",
                  bg: "bg-primary/5",
                  border: "border-primary/10",
                },
                {
                  value: "2.970K",
                  label: "Tổng chi phí 3 tháng hosting",
                  color: "text-slate-900",
                  bg: "bg-slate-50",
                  border: "border-slate-200",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`${m.bg} border ${m.border} rounded-2xl p-5 text-center`}
                >
                  <p
                    className={`font-display font-extrabold text-2xl ${m.color}`}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 mb-8 max-w-2xl mx-auto">
              <h3 className="font-display font-bold text-sm text-slate-900 mb-3">
                Pilot bao gồm:
              </h3>
              <ul className="space-y-2">
                {[
                  "Audit quy trình chuyên sâu (30 phút online)",
                  "1 workflow đơn giản (≤5 nodes) chạy thật",
                  "Video Loom hướng dẫn vận hành",
                  "Hỗ trợ 7 ngày sau bàn giao qua Zalo",
                ].map((item, i) => (
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
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-accent/25"
              >
                Đăng ký pilot miễn phí
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
              <p className="text-xs text-slate-500 mt-3">
                Điều kiện: ký hosting 3 tháng minimum (990K/tháng)
              </p>
            </div>
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
                Chi phí hosting 990K/tháng + 1 workflow 3-5 triệu. Hoàn vốn sau{" "}
                {Math.max(1, Math.round((4.99 / savedCost) * 12))} tháng.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-3">
              So sánh: AutoFlow vs Tự host vs n8n Cloud
            </h2>
            <p className="text-slate-500">
              So sánh chi phí và công sức thực tế
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-700 border-b-2 border-slate-200">
                    Tiêu chí
                  </th>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-500 border-b-2 border-slate-200">
                    Tự host (bạn quản lý)
                  </th>
                  <th className="text-left py-4 px-4 font-display font-bold text-primary border-b-2 border-primary bg-primary/5 rounded-t-xl">
                    AutoFlow (990K/tháng)
                  </th>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-500 border-b-2 border-slate-200">
                    n8n Cloud (~730K/tháng)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-slate-50/50" : ""}
                  >
                    <td className="py-3.5 px-4 font-medium text-slate-700">
                      {row.label}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">{row.self}</td>
                    <td className="py-3.5 px-4 text-slate-900 font-medium bg-primary/5 border-x border-primary/10">
                      {row.autoflow}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Payment & Why n8n */}
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
                    Hosting
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      990K/tháng, thanh toán hàng tháng
                    </p>
                    <p className="text-xs text-slate-500">
                      Hoặc trả trước 3 tháng được 1 workflow miễn phí
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <span className="font-display font-bold text-2xl text-primary">
                    Build
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      50% trước khi bắt đầu, 50% khi bàn giao
                    </p>
                    <p className="text-xs text-slate-500">
                      Chuyển khoản ngân hàng, có hợp đồng dịch vụ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why n8n */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-5">
                Tại sao n8n, không phải Zapier?
              </h3>
              <div className="space-y-3">
                {[
                  {
                    label: "Phí hàng tháng",
                    n8n: "990K (AutoFlow)",
                    zapier: "$20/mo (~500K) nhưng giới hạn",
                  },
                  {
                    label: "Tích hợp Zalo OA",
                    n8n: "Native",
                    zapier: "Không",
                  },
                  {
                    label: "Data trong nước",
                    n8n: "VPS VN (Bizfly HCM)",
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
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Cam kết 100% hoàn tiền
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
              Nếu AutoFlow không deliver đúng scope đã thỏa thuận trong hợp đồng
              — bạn được hoàn 100% chi phí. Không điều kiện ẩn, không kéo dài.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-4">
            Sẵn sàng tự động hóa?
          </h2>
          <p className="text-slate-500 mb-6">
            Liên hệ tư vấn miễn phí — mình sẽ chỉ ra chính xác workflow nào phù
            hợp với doanh nghiệp bạn.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Liên hệ tư vấn miễn phí
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
