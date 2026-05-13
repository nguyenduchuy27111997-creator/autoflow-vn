"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    example:
      "Có đơn mới trên Shopee → tự ghi vào bảng tính + gửi tin xác nhận cho khách qua Zalo",
    popular: false,
    color: "slate",
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
    example:
      "Đơn mới → tạo hóa đơn kế toán + cập nhật tồn kho + gửi xác nhận khách + báo cáo doanh thu tự động",
    popular: true,
    color: "primary",
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
    example:
      "Khách để lại SĐT qua Facebook → AI phân loại → CRM → Zalo follow-up → nhắc sales → báo cáo conversion",
    popular: false,
    color: "slate",
  },
];

const whatYouGet = [
  {
    icon: "🔧",
    title: "Xây dựng quy trình",
    desc: "Thiết kế + build + test riêng cho doanh nghiệp bạn",
  },
  {
    icon: "🖥️",
    title: "Server riêng tại VN",
    desc: "Dữ liệu của bạn ở trong nước, không qua nước ngoài",
  },
  {
    icon: "📊",
    title: "Giám sát & cảnh báo",
    desc: "24/7 theo dõi, phát hiện lỗi trước khi bạn biết",
  },
  {
    icon: "🔄",
    title: "Tối ưu liên tục",
    desc: "Hàng tháng review, cải thiện để quy trình chạy tốt hơn",
  },
  {
    icon: "💬",
    title: "Hỗ trợ qua Zalo",
    desc: "Tiếng Việt, phản hồi nhanh trong giờ hành chính",
  },
  {
    icon: "🔒",
    title: "Bảo mật dữ liệu",
    desc: "Mã hóa AES-256, backup hàng ngày, chỉ bạn truy cập",
  },
];

const comparisonRows = [
  {
    label: "Số lần chạy",
    autoflow: "Không giới hạn",
    freelancer: "Không giới hạn",
    cloud: "Giới hạn 2,500/tháng",
  },
  {
    label: "Ai vận hành?",
    autoflow: "AutoFlow lo tất cả",
    freelancer: "Bạn tự quản lý",
    cloud: "Bạn tự quản lý",
  },
  {
    label: "Khi quy trình lỗi?",
    autoflow: "Phát hiện + fix tự động",
    freelancer: "Phải liên hệ lại freelancer",
    cloud: "Tự debug",
  },
  {
    label: "Dữ liệu lưu ở đâu",
    autoflow: "Server tại Việt Nam",
    freelancer: "Tùy setup",
    cloud: "Server nước ngoài",
  },
  {
    label: "Tối ưu hiệu suất",
    autoflow: "Hàng tháng (có báo cáo)",
    freelancer: "Không có",
    cloud: "Không có",
  },
  {
    label: "Hỗ trợ tiếng Việt",
    autoflow: "Có — qua Zalo",
    freelancer: "Tùy người",
    cloud: "Không",
  },
  {
    label: "Phù hợp cho",
    autoflow: "Chủ DN muốn tập trung kinh doanh",
    freelancer: "Có team IT nội bộ",
    cloud: "Cá nhân, ít quy trình",
  },
];

export default function BangGiaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              Automation-as-a-Service
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Chúng tôi vận hành.
              <br />
              <span className="gradient-text">Bạn tập trung kinh doanh.</span>
            </h1>
            <p className="text-lg text-slate-500">
              Quy trình tự động chạy 24/7 trên server riêng tại Việt Nam.
              Giám sát, tối ưu, hỗ trợ — tất cả trong 1 gói hàng tháng.
            </p>
          </div>
        </section>

        {/* Service Tiers */}
        <section id="pricing" className="max-w-6xl mx-auto px-6 mb-20">
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

                {/* Monthly price */}
                <div className="mb-2">
                  <span className="font-display font-extrabold text-4xl text-slate-900">
                    {tier.monthly}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">
                    triệu/tháng
                  </span>
                </div>

                {/* Setup fee */}
                <p className="text-xs text-slate-400 mb-5">
                  + {tier.setup} triệu phí xây dựng ban đầu (trả 1 lần)
                </p>

                <ul className="space-y-2.5 mb-5">
                  {tier.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
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

                <div className="p-4 bg-slate-50 rounded-xl mb-6 flex-1">
                  <p className="text-xs font-semibold text-primary mb-1.5">
                    Ví dụ thực tế:
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

          {/* Self-host option */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              Bạn có team IT và muốn tự vận hành?{" "}
              <a href="/audit" className="text-primary hover:underline">
                Liên hệ để nhận báo giá xây quy trình riêng
              </a>
              {" "}— chúng tôi bàn giao file, bạn tự deploy.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-3">
              Tất cả trong 1 gói hàng tháng
            </h2>
            <p className="text-slate-500">
              Không phí ẩn. Không cần biết kỹ thuật. Không cần tuyển thêm người.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatYouGet.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-display font-bold text-sm text-slate-900 mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Free Pilot */}
        <section id="pilot" className="max-w-4xl mx-auto px-6 mb-20">
          <div className="relative overflow-hidden rounded-2xl border-2 border-accent bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-8 md:p-10">
            <div className="absolute -top-px -right-px">
              <div className="bg-accent text-white text-xs font-bold px-6 py-2 rounded-bl-2xl">
                Miễn phí
              </div>
            </div>

            <div className="text-center mb-8">
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                DÙNG THỬ TRƯỚC KHI QUYẾT ĐỊNH
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-3">
                Tặng miễn phí 1 quy trình tự động
                <br />
                <span className="text-accent">để bạn thấy kết quả thật</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                AutoFlow xây miễn phí 1 quy trình, chạy thật trên server riêng.
                Thấy hiệu quả rồi hãy quyết định.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              {[
                {
                  value: "0đ",
                  label: "Chi phí trải nghiệm",
                  sub: "trị giá ~3.5 triệu (build + 30 ngày hỗ trợ)",
                  color: "text-accent",
                  bg: "bg-accent/5",
                  border: "border-accent/10",
                },
                {
                  value: "5 ngày",
                  label: "Từ đăng ký đến chạy thật",
                  sub: "nhanh gọn, rõ ràng",
                  color: "text-primary",
                  bg: "bg-primary/5",
                  border: "border-primary/10",
                },
                {
                  value: "30 ngày",
                  label: "Hỗ trợ miễn phí sau bàn giao",
                  sub: "đủ thời gian đánh giá",
                  color: "text-slate-900",
                  bg: "bg-slate-50",
                  border: "border-slate-200",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`${m.bg} border ${m.border} rounded-2xl p-5 text-center`}
                >
                  <p className={`font-display font-extrabold text-2xl ${m.color}`}>
                    {m.value}
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-1">{m.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-accent/25"
              >
                Nhận bản dùng thử miễn phí
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 8h6M8 5l3 3-3 3" />
                </svg>
              </a>
              <p className="text-xs text-slate-400 mt-3">
                Không ràng buộc. Thấy kết quả rồi hãy chọn gói phù hợp.
              </p>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <div className="bg-gradient-to-br from-red-50/50 via-white to-accent/5 rounded-2xl border border-slate-200 p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">
                Con số thật: bạn đang mất bao nhiêu?
              </h2>
              <p className="text-sm text-slate-500">
                Ví dụ: 1 shop Shopee, 2 nhân viên nhập đơn thủ công, mỗi người 4 giờ/ngày
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
                <p className="text-sm text-red-400 mb-2">Đang lãng phí mỗi tháng</p>
                <p className="font-display font-extrabold text-5xl text-red-500">176</p>
                <p className="text-sm text-red-400 mt-1">giờ làm việc</p>
                <p className="text-xs text-red-300 mt-1">= 22 ngày công = ~11 triệu tiền lương</p>
              </div>
              <div className="bg-accent/5 border border-accent/10 rounded-2xl p-6 text-center">
                <p className="text-sm text-accent/70 mb-2">Với gói Growth (2.5 triệu/tháng)</p>
                <p className="font-display font-extrabold text-5xl text-accent">80%</p>
                <p className="text-sm text-accent/70 mt-1">công việc được tự động hóa</p>
                <p className="text-xs text-accent/50 mt-1">Tiết kiệm ~9 triệu/tháng → ROI 3.6x</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 text-center">
              <p className="text-sm text-slate-600">
                Chi phí: <strong>từ 1.5 triệu/tháng</strong> bao gồm xây dựng + vận hành + hỗ trợ.
              </p>
              <p className="font-display font-bold text-lg text-accent mt-2">
                → Hoàn vốn ngay tháng đầu tiên.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-3">
              AutoFlow vs. thuê freelancer vs. dịch vụ nước ngoài?
            </h2>
            <p className="text-slate-500">
              Không chỉ là chuyện giá — mà ai lo cho bạn khi quy trình gặp sự cố
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-700 border-b-2 border-slate-200" />
                  <th className="text-left py-4 px-4 font-display font-bold text-primary border-b-2 border-primary bg-primary/5 rounded-t-xl">AutoFlow VN ⭐</th>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-500 border-b-2 border-slate-200">Thuê freelancer</th>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-500 border-b-2 border-slate-200">Dịch vụ nước ngoài</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-slate-50/50" : ""}>
                    <td className="py-3.5 px-4 font-medium text-slate-700">{row.label}</td>
                    <td className="py-3.5 px-4 text-slate-900 font-medium bg-primary/5 border-x border-primary/10">{row.autoflow}</td>
                    <td className="py-3.5 px-4 text-slate-500">{row.freelancer}</td>
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
              Thanh toán đơn giản, minh bạch
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <span className="text-2xl shrink-0">⚙️</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phí xây dựng: 50% trước, 50% khi bàn giao</p>
                  <p className="text-xs text-slate-500">Trả 1 lần. Có hợp đồng + hóa đơn rõ ràng.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                <span className="text-2xl shrink-0">📅</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Gói hàng tháng: thanh toán đầu tháng</p>
                  <p className="text-xs text-slate-500">Bao gồm hosting + giám sát + hỗ trợ + tối ưu. Hủy bất cứ lúc nào.</p>
                </div>
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
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Cam kết hoàn tiền 100%</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
              Nếu workflow không đạt KPI đã ký sau 30 ngày — hoàn 100% phí xây dựng theo điều khoản hợp đồng (có liệt kê rõ các trường hợp loại trừ, gửi mẫu trước khi ký).
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-4">
            Sẵn sàng tiết kiệm hàng trăm giờ mỗi tháng?
          </h2>
          <p className="text-slate-500 mb-6">
            Đăng ký tư vấn miễn phí — mình sẽ chỉ ra chính xác quy trình nào nên tự động hóa trước.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
          >
            Tư vấn miễn phí
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 8h6M8 5l3 3-3 3" />
            </svg>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
