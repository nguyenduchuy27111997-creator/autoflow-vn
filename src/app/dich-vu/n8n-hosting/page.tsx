import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Server Riêng, Tôi Quản Lý Hết — Managed Hosting",
  description:
    "Dịch vụ managed hosting cho SME: server riêng tại Việt Nam, backup tự động, monitoring 24/7, SLA 99.9%. Từ 3 triệu/tháng. Bạn tập trung kinh doanh, AutoFlow lo hạ tầng.",
};

const valueProps = [
  {
    title: "Data 100% tại Việt Nam",
    desc: "Server đặt tại Viettel IDC / VNG Cloud. Dữ liệu đơn hàng, khách hàng, tài chính — không gửi ra nước ngoài. Tuân thủ quy định bảo mật dữ liệu Việt Nam.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#0066FF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Backup tự động mỗi ngày",
    desc: "Backup toàn bộ dữ liệu + workflows lúc 2h sáng. Lưu 30 bản backup gần nhất. Khôi phục trong 15 phút nếu có sự cố.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#0066FF" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Monitoring 24/7 + cảnh báo",
    desc: "AutoFlow theo dõi server liên tục. CPU, RAM, disk quá ngưỡng → cảnh báo Zalo cho bạn + tự động xử lý. Uptime cam kết 99.9%.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#0066FF" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Update + bảo trì tôi lo",
    desc: "Mỗi khi có phiên bản mới, AutoFlow test trước trên staging — update giờ thấp điểm — không gián đoạn kinh doanh. Bạn không cần làm gì.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#0066FF" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const includedFeatures = [
  "VPS riêng (không share) tại Việt Nam",
  "SSL certificate miễn phí",
  "Backup tự động hàng ngày (30 bản)",
  "Monitoring 24/7 + cảnh báo Zalo",
  "Update bảo mật + phiên bản mới",
  "Support qua Zalo trong giờ hành chính",
  "SLA uptime 99.9%",
];

const comparisonRows = [
  {
    label: "Chi phí/tháng",
    self: "~500K VPS + thời gian bạn",
    autoflow: "3–10 triệu (trọn gói)",
    dev: "15–30 triệu/người",
  },
  {
    label: "Setup",
    self: "Tự cài đặt (3–5 ngày nếu biết Linux)",
    autoflow: "AutoFlow setup trong 24h",
    dev: "1–2 tuần",
  },
  {
    label: "Backup",
    self: "Tự setup backup script",
    autoflow: "Tự động, 30 bản, khôi phục 15 phút",
    dev: "Tùy developer",
  },
  {
    label: "Monitoring",
    self: "Tự cài Uptime Kuma/Grafana",
    autoflow: "24/7, cảnh báo Zalo tự động",
    dev: "Tùy developer",
  },
  {
    label: "Update bảo mật",
    self: "Bạn tự update (hoặc quên)",
    autoflow: "AutoFlow update giờ thấp điểm",
    dev: "Theo hợp đồng",
  },
  {
    label: "Khi sự cố",
    self: "Tự fix hoặc Google",
    autoflow: "AutoFlow xử lý, thông báo Zalo",
    dev: "Gọi developer (nếu còn hợp đồng)",
  },
  {
    label: "Phù hợp cho",
    self: "Developer muốn tự quản lý",
    autoflow: "Chủ DN muốn tập trung kinh doanh",
    dev: "Công ty có budget IT lớn",
  },
];

const faqItems = [
  {
    q: "n8n là gì?",
    a: "n8n là nền tảng tự động hóa workflow mã nguồn mở. Thay vì dùng Zapier (đắt, giới hạn, data ở nước ngoài), n8n chạy trên server riêng của bạn — không giới hạn tasks, data 100% trong nước.",
  },
  {
    q: "Tại sao cần server riêng?",
    a: "Server riêng = bạn sở hữu hoàn toàn dữ liệu. Không share với ai, không phụ thuộc cloud nước ngoài. Phù hợp cho doanh nghiệp có data nhạy cảm: đơn hàng, khách hàng, tài chính.",
  },
  {
    q: "Nếu tôi muốn chuyển đi thì sao?",
    a: "Data và workflows hoàn toàn thuộc về bạn. AutoFlow export toàn bộ, hướng dẫn chuyển sang server mới. Không lock-in.",
  },
  {
    q: "SLA 99.9% nghĩa là gì?",
    a: "Server hoạt động ít nhất 99.9% thời gian trong tháng (tối đa 43 phút downtime/tháng). Nếu không đạt, bạn được giảm phí tháng tiếp theo.",
  },
];

export default function N8nHostingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Managed Hosting — AutoFlow VN",
          description:
            "Dịch vụ managed hosting cho SME: server riêng tại Việt Nam, backup tự động, monitoring 24/7, SLA 99.9%.",
          provider: {
            "@type": "Organization",
            name: "AutoFlow VN",
            url: "https://autoflowvn.net",
          },
          areaServed: { "@type": "Country", name: "Vietnam" },
          serviceType: "Managed Hosting",
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "3000000",
            highPrice: "10000000",
            priceCurrency: "VND",
            offerCount: 3,
          },
        }}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
              Managed Hosting
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Server riêng.{" "}
              <span className="gradient-text">Tôi quản lý hết.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl mx-auto">
              Bạn không cần biết Linux, Docker, hay cách backup database.
              AutoFlow setup server riêng tại Việt Nam cho bạn, monitor 24/7,
              backup hàng ngày, update bảo mật — bạn chỉ cần tập trung bán
              hàng.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/bang-gia#managed-hosting"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                Xem bảng giá hosting
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
              <a
                href="/audit"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-semibold px-8 py-4 rounded-xl border border-slate-200 hover:border-primary/30 transition-all"
              >
                Liên hệ tư vấn
              </a>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg hover:border-slate-300 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  {prop.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: checklist */}
            <div>
              <h2 className="font-display font-bold text-2xl text-slate-900 mb-6">
                Mỗi gói hosting bao gồm:
              </h2>
              <ul className="space-y-4">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="shrink-0 mt-0.5 text-accent"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M3 10l5 5 9-9" />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: pricing summary card */}
            <div className="bg-slate-900 text-white rounded-2xl p-8">
              <p className="font-display font-extrabold text-4xl mb-3">
                Từ 3 triệu/tháng
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Rẻ hơn thuê 1 IT intern. Nhưng không bao giờ nghỉ phép.
              </p>
              <a
                href="/bang-gia#managed-hosting"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg"
              >
                Xem chi tiết bảng giá
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

        {/* Comparison Table */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 mb-3">
              Bạn có 3 lựa chọn
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
                    AutoFlow host (tôi quản lý)
                  </th>
                  <th className="text-left py-4 px-4 font-display font-bold text-slate-500 border-b-2 border-slate-200">
                    Thuê developer
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
                    <td className="py-3.5 px-4 text-slate-500">{row.dev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-8 text-center">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-display font-semibold text-slate-900 select-none">
                  {item.q}
                  <svg
                    className="shrink-0 ml-4 text-slate-400 group-open:rotate-180 transition-transform"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              Muốn server riêng nhưng không muốn quản lý?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Xem bảng giá hoặc liên hệ tư vấn — AutoFlow setup trong 24 giờ.
            </p>
            <a
              href="/bang-gia#managed-hosting"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Xem bảng giá
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
        </section>
      </main>
      <Footer />
    </>
  );
}
