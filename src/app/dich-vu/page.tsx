"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    label: "E-commerce",
    href: "/dich-vu/e-commerce",
    color: "#EE4D2D",
    desc: "Shopee, Tiki, TikTok Shop, Lazada",
    pain: "Nhập đơn tay 4–5 giờ/ngày, sai tồn kho, lead rơi",
    workflows: ["Đồng bộ đơn hàng đa kênh", "Auto-reply review", "Lead capture → CRM", "Báo cáo tồn kho tự động"],
    result: "Giảm 65% thời gian vận hành",
  },
  {
    label: "Giáo dục & Đào tạo",
    href: "/dich-vu/giao-duc",
    color: "#6366F1",
    desc: "Trung tâm, chuỗi trường học",
    pain: "Nhắc lịch bằng tay, lead mất, báo cáo chậm",
    workflows: ["Nhắc lịch học qua Zalo OA", "Lead nurturing tự động", "Nhắc học phí tự động", "Báo cáo đa cơ sở"],
    result: "Miss lịch giảm từ 15% xuống 3%",
  },
  {
    label: "Bất động sản",
    href: "/dich-vu/bat-dong-san",
    color: "#0EA5E9",
    desc: "Agency, sàn giao dịch",
    pain: "Lead lẫn lộn, follow-up thủ công, mất deal",
    workflows: ["Lead scoring tự động", "Follow-up sequence", "Matching BĐS phù hợp", "Báo cáo pipeline"],
    result: "Tăng 40% tỉ lệ chốt deal",
  },
  {
    label: "F&B / Nhà hàng",
    href: "/dich-vu/fnb",
    color: "#F59E0B",
    desc: "Quán cafe, chuỗi nhà hàng",
    pain: "Đặt bàn loạn, tồn kho sai, loyalty thủ công",
    workflows: ["Đặt bàn tự động", "Quản lý tồn kho", "Loyalty program", "Review management"],
    result: "Tăng 25% repeat customer",
  },
];

const stats = [
  { value: "4", label: "Ngành chuyên sâu" },
  { value: "20+", label: "Workflows tự động" },
  { value: "65%", label: "Giảm thời gian vận hành" },
  { value: "< 5", label: "Tháng hoàn vốn" },
];

const advantages = [
  {
    title: "Workflow thiết kế riêng cho từng ngành",
    desc: "Không phải template chung chung. Mỗi ngành có pain point và quy trình khác nhau — AutoFlow hiểu và build workflow phù hợp.",
  },
  {
    title: "Tích hợp native hệ sinh thái Việt Nam",
    desc: "Zalo OA, MISA, KiotViet, Shopee, Haravan — tất cả tích hợp trực tiếp qua API, không qua bên thứ ba.",
  },
  {
    title: "Data 100% trong nước",
    desc: "n8n self-hosted trên VPS Việt Nam. Dữ liệu khách hàng, đơn hàng, tài chính — không gửi ra server nước ngoài.",
  },
  {
    title: "Kết quả đo được, cam kết bằng hợp đồng",
    desc: "Mỗi workflow có KPI rõ ràng: giảm X giờ nhập tay, tăng Y% response rate. Không đạt = hoàn tiền.",
  },
];

export default function DichVuPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              Dịch vụ AutoFlow
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Tự động hóa{" "}
              <span className="gradient-text">đúng ngành, đúng vấn đề</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8">
              Mỗi ngành có pain point riêng. AutoFlow không bán template — mình hiểu quy trình thực tế của bạn và build workflow giải quyết đúng chỗ đang mất thời gian nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Nhận audit miễn phí
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 8h6M8 5l3 3-3 3" />
                </svg>
              </a>
              <a
                href="/ket-qua"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200"
              >
                Xem case studies
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-5 text-center"
              >
                <p className="font-display font-extrabold text-2xl text-primary">
                  {s.value}
                </p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Explorer */}
        <section className="py-20 bg-slate-50 relative noise-bg">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
                Chọn ngành của bạn
              </h2>
              <p className="text-slate-500">
                Mỗi ngành có workflow và kết quả khác nhau — xem preview trước khi đọc chi tiết
              </p>
            </div>

            {/* Industry tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {industries.map((ind, i) => (
                <button
                  key={ind.label}
                  onClick={() => setActiveIndustry(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeIndustry === i
                      ? "bg-white shadow-md border border-slate-200 text-slate-900"
                      : "bg-transparent text-slate-500 hover:text-slate-700 hover:bg-white/50"
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: ind.color }}
                  />
                  {ind.label}
                </button>
              ))}
            </div>

            {/* Active industry detail */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              {/* Header */}
              <div
                className="px-8 py-6 flex flex-wrap items-center justify-between gap-4"
                style={{ backgroundColor: `${industries[activeIndustry].color}10` }}
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {industries[activeIndustry].label}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {industries[activeIndustry].desc}
                  </p>
                </div>
                <a
                  href={industries[activeIndustry].href}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all"
                >
                  Xem chi tiết
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 7h6M7 4l3 3-3 3" />
                  </svg>
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-px bg-slate-100">
                {/* Pain point */}
                <div className="bg-white p-7">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-3">
                    Vấn đề phổ biến
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {industries[activeIndustry].pain}
                  </p>
                </div>

                {/* Workflows */}
                <div className="bg-white p-7">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                    Workflows tự động
                  </p>
                  <ul className="space-y-2">
                    {industries[activeIndustry].workflows.map((wf, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="shrink-0 mt-0.5 text-accent" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 7l3 3 6-6" />
                        </svg>
                        {wf}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="bg-white p-7">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">
                    Kết quả đo được
                  </p>
                  <p className="font-display font-bold text-lg text-slate-900">
                    {industries[activeIndustry].result}
                  </p>
                  <a
                    href={`/ket-qua/${industries[activeIndustry].href.split("/").pop()}`}
                    className="text-sm text-primary font-semibold mt-3 inline-block hover:underline"
                  >
                    Xem case study →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why AutoFlow */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Tại sao chọn AutoFlow?
            </h2>
            <p className="text-slate-500">
              Không phải công ty IT lớn charge 200–500 triệu. AutoFlow giá SME, chất lượng enterprise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <h3 className="font-display font-bold text-slate-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* All industries grid */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Xem chi tiết từng ngành
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <a
                key={ind.label}
                href={ind.href}
                className="group bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4"
                  style={{ backgroundColor: ind.color }}
                >
                  {ind.label.charAt(0)}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1 group-hover:text-primary transition-colors">
                  {ind.label}
                </h3>
                <p className="text-xs text-slate-400 mb-3">{ind.desc}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {ind.pain}
                </p>
                <span className="text-primary text-sm font-semibold group-hover:translate-x-1 inline-block transition-transform">
                  Xem workflow & ROI →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Chưa biết nên bắt đầu từ đâu?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — mình phân tích quy trình và chỉ ra chính xác workflow nào nên tự động hóa trước.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Nhận audit miễn phí
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
