"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hostingFeatures = [
  "Server riêng đặt tại Việt Nam",
  "Backup tự động mỗi ngày, mã hóa an toàn",
  "Giám sát 24/7, cảnh báo tự động qua Zalo",
  "Chứng chỉ bảo mật SSL tự động",
  "Hỗ trợ tiếng Việt qua Zalo trong giờ hành chính",
  "Chạy không giới hạn số lần — không bị tính phí theo lượt",
  "Cam kết uptime 99.9%",
];

const workflowTiers = [
  {
    name: "Cơ bản",
    desc: "Kết nối 2 hệ thống, xử lý tự động 1 bước",
    price: "3",
    example:
      "Có đơn hàng mới trên Shopee → tự động ghi vào bảng tính + gửi tin nhắn xác nhận cho khách qua Zalo",
    icon: "⚡",
    popular: false,
  },
  {
    name: "Nâng cao",
    desc: "Nhiều bước xử lý, kết nối 3-4 hệ thống",
    price: "5",
    example:
      "Có đơn hàng mới → tự tạo hóa đơn kế toán + cập nhật tồn kho + gửi tin xác nhận cho khách + ghi báo cáo doanh thu",
    icon: "🔗",
    popular: true,
  },
  {
    name: "Toàn diện",
    desc: "Quy trình phức tạp, nhiều điều kiện, tích hợp sâu",
    price: "8",
    example:
      "Khách để lại thông tin trên Facebook → AI tự phân loại → ghi vào CRM → gửi email chào hàng → nhắc nhở sales khi khách 'nóng'",
    icon: "🚀",
    popular: false,
  },
];

const comparisonRows = [
  {
    label: "Số lần chạy",
    self: "Không giới hạn",
    autoflow: "Không giới hạn",
    cloud: "Giới hạn 2,500 lần/tháng",
  },
  {
    label: "Dữ liệu lưu ở đâu",
    self: "Tùy bạn chọn",
    autoflow: "Server tại Việt Nam",
    cloud: "Server nước ngoài (châu Âu)",
  },
  {
    label: "Sao lưu dữ liệu",
    self: "Phải tự cài đặt",
    autoflow: "Tự động, mã hóa, mỗi ngày",
    cloud: "Có sẵn",
  },
  {
    label: "Giám sát & cảnh báo",
    self: "Phải tự cài đặt thêm",
    autoflow: "24/7, cảnh báo qua Zalo tự động",
    cloud: "Bảng theo dõi cơ bản",
  },
  {
    label: "Hỗ trợ tiếng Việt",
    self: "Không có",
    autoflow: "Có — Zalo, giờ hành chính",
    cloud: "Không (chỉ tiếng Anh)",
  },
  {
    label: "Thời gian cài đặt",
    self: "3-5 ngày (cần biết kỹ thuật)",
    autoflow: "Trong vòng 24 giờ",
    cloud: "Ngay lập tức",
  },
  {
    label: "Phù hợp cho",
    self: "Lập trình viên muốn tự quản lý",
    autoflow: "Chủ doanh nghiệp muốn tập trung bán hàng",
    cloud: "Cá nhân, ít quy trình đơn giản",
  },
];

export default function BangGiaPage() {
  const [employees, setEmployees] = useState(2);
  const [hours, setHours] = useState(4);
  const monthlySalary = 11; // triệu VND
  const monthlyWaste = Math.round(employees * monthlySalary * (hours / 8));
  const yearlyWaste = monthlyWaste * 12;
  const savedHoursMonth = hours * employees * 22;
  const autoflowCost = 0.99 + 5; // hosting + 1 workflow trung bình
  const roiMonths = Math.max(1, Math.round(autoflowCost / monthlyWaste * 12));

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Đơn giản, minh bạch.{" "}
              <span className="gradient-text">Không phí ẩn.</span>
            </h1>
            <p className="text-lg text-slate-500">
              Server riêng cho doanh nghiệp bạn, chạy không giới hạn, dữ liệu
              lưu tại Việt Nam. Chỉ 990K/tháng.
            </p>
          </div>
        </section>

        {/* Section 1: Hosting 990K */}
        <section id="hosting" className="max-w-4xl mx-auto px-6 mb-20">
          <div className="relative rounded-2xl border-2 border-primary bg-white shadow-lg shadow-primary/5 p-8 md:p-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-5 py-1.5 rounded-full">
              1 gói duy nhất — không cần chọn
            </span>

            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                Server riêng, tôi quản lý hết
              </h2>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-display font-extrabold text-5xl md:text-6xl text-slate-900">
                  990K
                </span>
                <span className="text-lg text-slate-500">/tháng</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Thanh toán hàng tháng. Không cam kết dài hạn.
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
                Bắt đầu dùng thử
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
              Xây dựng quy trình tự động
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-3">
              Trả 1 lần. Chạy mãi mãi.
            </h2>
            <p className="text-slate-500">
              Mỗi quy trình được xây riêng cho doanh nghiệp bạn. Không phí ẩn,
              không phát sinh.
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

                <div className="text-3xl mb-3">{tier.icon}</div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {tier.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1 mb-4">{tier.desc}</p>

                <div className="mb-6">
                  <span className="font-display font-extrabold text-4xl text-slate-900">
                    {tier.price}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">
                    triệu / quy trình
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl mb-6 flex-1">
                  <p className="text-xs font-semibold text-primary mb-1.5">
                    💡 Ví dụ thực tế:
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
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
                  Tư vấn miễn phí
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Free Pilot — 5 khách đầu tiên */}
        <section id="pilot" className="max-w-4xl mx-auto px-6 mb-20">
          <div className="relative overflow-hidden rounded-2xl border-2 border-accent bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-8 md:p-10">
            <div className="absolute -top-px -right-px">
              <div className="bg-accent text-white text-xs font-bold px-6 py-2 rounded-bl-2xl">
                Miễn phí
              </div>
            </div>

            <div className="text-center mb-8">
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                CHỈ CÒN 5 SUẤT
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3">
                Tặng miễn phí 1 quy trình tự động
                <br />
                <span className="text-accent">cho 5 doanh nghiệp đầu tiên</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Bạn chỉ trả phí hosting hàng tháng — AutoFlow xây miễn phí 1 quy
                trình tự động đầu tiên để bạn trải nghiệm kết quả thật.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              {[
                {
                  value: "0đ",
                  label: "Chi phí xây quy trình",
                  sub: "trị giá 3 triệu",
                  color: "text-accent",
                  bg: "bg-accent/5",
                  border: "border-accent/10",
                },
                {
                  value: "7 ngày",
                  label: "Từ đăng ký đến chạy thật",
                  sub: "nhanh gọn, rõ ràng",
                  color: "text-primary",
                  bg: "bg-primary/5",
                  border: "border-primary/10",
                },
                {
                  value: "990K",
                  label: "Chi phí duy nhất mỗi tháng",
                  sub: "hosting, thanh toán theo tháng",
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
                  <p className="text-xs text-slate-600 font-medium mt-1">{m.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 mb-8 max-w-2xl mx-auto">
              <h3 className="font-display font-bold text-sm text-slate-900 mb-3">
                Bạn sẽ nhận được:
              </h3>
              <ul className="space-y-2">
                {[
                  "Tư vấn chuyên sâu quy trình doanh nghiệp bạn (30 phút)",
                  "1 quy trình tự động hoạt động thật trên server riêng",
                  "Video hướng dẫn sử dụng chi tiết",
                  "Hỗ trợ 7 ngày sau khi bàn giao qua Zalo",
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
                Nhận suất miễn phí
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
              <p className="text-xs text-slate-400 mt-3">
                Chỉ dành cho 5 doanh nghiệp đăng ký sớm nhất. Không ràng buộc.
              </p>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="bg-gradient-to-br from-primary/5 via-white to-accent/5 rounded-2xl border border-primary/10 p-8 md:p-10">
            <div className="text-center mb-8">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-3">
                TÍNH THỬ
              </span>
              <h2 className="font-display font-bold text-2xl text-slate-900 mb-1">
                Bạn đang mất bao nhiêu tiền mỗi tháng cho việc nhập tay?
              </h2>
              <p className="text-sm text-slate-500">
                Kéo thanh trượt — con số có thể khiến bạn bất ngờ
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-3 block">
                  Số nhân viên đang làm thủ công
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
                  Mỗi người mất bao nhiêu giờ/ngày cho việc nhập tay
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
                  <span>1 giờ</span>
                  <span className="font-bold text-primary text-lg">
                    {hours} giờ
                  </span>
                  <span>8 giờ</span>
                </div>
              </div>
            </div>

            {/* Results — WOW numbers */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
              <p className="text-center text-sm text-slate-500 mb-4">Mỗi tháng, doanh nghiệp bạn đang lãng phí:</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="font-display font-extrabold text-5xl text-red-500">
                    {savedHoursMonth}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    giờ làm việc
                  </p>
                  <p className="text-xs text-slate-400">
                    = {Math.round(savedHoursMonth / 8)} ngày công
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display font-extrabold text-5xl text-red-500">
                    {monthlyWaste}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    triệu đồng tiền lương
                  </p>
                  <p className="text-xs text-slate-400">
                    = {yearlyWaste} triệu/năm
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/10 rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-600 mb-2">
                Với AutoFlow, phần lớn công việc này được tự động hóa.
              </p>
              <p className="font-display font-bold text-xl text-accent">
                Bạn tiết kiệm ~{monthlyWaste} triệu/tháng — chỉ với hosting 990K + 1 quy trình từ 3 triệu.
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Hoàn vốn ngay tháng đầu tiên.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table — NO prices */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-3">
              Tự làm, thuê AutoFlow, hay dùng nước ngoài?
            </h2>
            <p className="text-slate-500">
              So sánh công sức và tính năng — không chỉ là chuyện tiền
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-700 border-b-2 border-slate-200" />
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-500 border-b-2 border-slate-200">
                    Tự cài đặt
                  </th>
                  <th className="text-left py-4 px-4 font-display font-bold text-primary border-b-2 border-primary bg-primary/5 rounded-t-xl">
                    AutoFlow VN ⭐
                  </th>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-500 border-b-2 border-slate-200">
                    Dịch vụ nước ngoài
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

        {/* Payment */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-5 text-center">
              Thanh toán đơn giản
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                <span className="text-3xl">🏠</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Hosting: 990K/tháng
                  </p>
                  <p className="text-xs text-slate-500">
                    Thanh toán hàng tháng. Hủy bất cứ lúc nào.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                <span className="text-3xl">⚙️</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Quy trình: 50% trước, 50% khi bàn giao
                  </p>
                  <p className="text-xs text-slate-500">
                    Chuyển khoản ngân hàng, có hợp đồng rõ ràng
                  </p>
                </div>
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
              Cam kết hoàn tiền 100%
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
              Nếu AutoFlow không giao đúng những gì đã cam kết trong hợp đồng
              — bạn được hoàn toàn bộ chi phí. Không điều kiện ẩn.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-4">
            Sẵn sàng tiết kiệm hàng trăm giờ mỗi tháng?
          </h2>
          <p className="text-slate-500 mb-6">
            Đăng ký tư vấn miễn phí — mình sẽ chỉ ra chính xác quy trình nào
            trong doanh nghiệp bạn nên tự động hóa trước.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Tư vấn miễn phí — chỉ 30 phút
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
