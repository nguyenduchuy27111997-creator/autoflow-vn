import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "So sánh AutoFlow VN vs Zapier vs Make vs IT Agency",
  description:
    "So sánh chi tiết AutoFlow VN, Zapier, Make và IT Agency Việt Nam về giá, tốc độ, hỗ trợ tiếng Việt, và tích hợp MISA, KiotViet, Zalo OA.",
  alternates: { canonical: "https://autoflowvn.net/so-sanh" },
  openGraph: {
    title: "So sánh AutoFlow VN vs Zapier vs Make vs IT Agency",
    description:
      "Giá, tốc độ, hỗ trợ tiếng Việt, tích hợp VN — so sánh đầy đủ để chọn đúng công cụ automation.",
    url: "https://autoflowvn.net/so-sanh",
  },
};

type CellValue = string | { yes: true } | { no: true } | { note: string };

interface ComparisonRow {
  feature: string;
  autoflow: CellValue;
  zapier: CellValue;
  make: CellValue;
  agency: CellValue;
}

const rows: ComparisonRow[] = [
  {
    feature: "Giá",
    autoflow: "2–7M/workflow (1 lần)",
    zapier: "$20–70/tháng (~500K–1.7M)",
    make: "$9–16/tháng (~220K–400K)",
    agency: "50–200M/project",
  },
  {
    feature: "Thời gian setup",
    autoflow: "5–10 ngày",
    zapier: "Tự setup",
    make: "Tự setup",
    agency: "2–6 tháng",
  },
  {
    feature: "Hỗ trợ tiếng Việt",
    autoflow: { yes: true },
    zapier: { no: true },
    make: { no: true },
    agency: { yes: true },
  },
  {
    feature: "Data lưu tại VN",
    autoflow: "VPS Bizfly HCM",
    zapier: { no: true },
    make: { no: true },
    agency: { note: "Tùy nhà cung cấp" },
  },
  {
    feature: "Tích hợp MISA, KiotViet, Zalo OA",
    autoflow: { yes: true },
    zapier: { no: true },
    make: { no: true },
    agency: { yes: true },
  },
  {
    feature: "Phí hàng tháng",
    autoflow: "499K hosting (tùy chọn)",
    zapier: "Bắt buộc subscription",
    make: "Bắt buộc subscription",
    agency: { note: "Không (nhưng maintain riêng)" },
  },
  {
    feature: "Giới hạn số lần chạy",
    autoflow: "Unlimited",
    zapier: "750–50K tasks/tháng",
    make: "10K–unlimited ops",
    agency: "Không giới hạn",
  },
  {
    feature: "Bảo trì & monitoring",
    autoflow: "AutoFlow lo (gói hosting)",
    zapier: "Tự bảo trì",
    make: "Tự bảo trì",
    agency: "Tự bảo trì",
  },
];

function Cell({ value }: { value: CellValue }) {
  if (typeof value === "string") {
    return <span className="text-sm text-slate-700">{value}</span>;
  }
  if ("yes" in value) {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M2 8l4 4 8-8" />
        </svg>
        Có
      </span>
    );
  }
  if ("no" in value) {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-500">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
        Không
      </span>
    );
  }
  return <span className="text-sm text-slate-500 italic">{value.note}</span>;
}

const highlights = [
  {
    icon: "🇻🇳",
    title: "Made for Vietnam",
    desc: "Tích hợp native với MISA, KiotViet, Zalo OA — không phải hack workaround.",
  },
  {
    icon: "⚡",
    title: "Bàn giao trong tuần",
    desc: "5–10 ngày thay vì 2–6 tháng của IT agency.",
  },
  {
    icon: "💰",
    title: "Trả một lần, dùng mãi",
    desc: "Không subscription hàng tháng bắt buộc như Zapier và Make.",
  },
  {
    icon: "🔒",
    title: "Data ở Việt Nam",
    desc: "VPS Bizfly tại TP.HCM — tuân thủ Nghị định 13 về dữ liệu cá nhân.",
  },
];

export default function SoSanhPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              So sánh công cụ
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Chọn đúng công cụ{" "}
              <span className="gradient-text">cho automation</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              AutoFlow VN, Zapier, Make, hay IT Agency? So sánh thực tế để bạn
              ra quyết định đúng cho doanh nghiệp.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1.5">
                  {h.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-8 text-center">
            Bảng so sánh chi tiết
          </h2>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5">
                    Tiêu chí
                  </th>
                  <th className="px-6 py-4 text-center w-1/5">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                        AutoFlow VN
                      </span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5">
                    Zapier
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5">
                    Make
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5">
                    IT Agency VN
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5">
                      <Cell value={row.autoflow} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Cell value={row.zapier} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Cell value={row.make} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Cell value={row.agency} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-4">
            {rows.map((row, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-5"
              >
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  {row.feature}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      { label: "AutoFlow VN", value: row.autoflow, highlight: true },
                      { label: "Zapier", value: row.zapier, highlight: false },
                      { label: "Make", value: row.make, highlight: false },
                      { label: "IT Agency", value: row.agency, highlight: false },
                    ] as { label: string; value: CellValue; highlight: boolean }[]
                  ).map((col) => (
                    <div
                      key={col.label}
                      className={`rounded-lg p-3 ${col.highlight ? "bg-primary/10 border border-primary/20" : "bg-slate-50"}`}
                    >
                      <p
                        className={`text-[10px] font-semibold mb-1 ${col.highlight ? "text-primary" : "text-slate-400"}`}
                      >
                        {col.label}
                      </p>
                      <Cell value={col.value} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Context callout */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <h3 className="font-display font-bold text-slate-900 mb-3">
              Khi nào nên dùng cái gì?
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="shrink-0 font-bold text-primary">AutoFlow VN:</span>
                SME Việt Nam cần tích hợp Zalo OA, MISA, KiotViet — muốn bàn giao
                nhanh, data ở VN, không tự quản lý server.
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 font-bold text-slate-500">Zapier / Make:</span>
                Startup global, team kỹ thuật, chủ yếu dùng công cụ nước ngoài
                (Salesforce, HubSpot, Slack). Sẵn sàng tự setup và maintain.
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 font-bold text-slate-500">IT Agency lớn:</span>
                Doanh nghiệp lớn, cần ERP tùy chỉnh, có ngân sách 100M+, timeline
                không gấp.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Muốn biết AutoFlow fit với business bạn không?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — Huy phân tích quy trình, đề xuất giải pháp
              cụ thể, và cho bạn biết có nên dùng AutoFlow hay không.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Điền audit form miễn phí
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
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
