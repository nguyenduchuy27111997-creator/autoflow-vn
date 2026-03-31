import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Kết quả thực tế — Case Studies | AutoFlow VN",
  description:
    "Xem case studies thực tế: doanh nghiệp Việt tiết kiệm 18+ giờ/tuần, tăng 23% doanh thu nhờ tự động hóa n8n. Before/after rõ ràng, ROI đo được.",
  openGraph: {
    title: "Kết quả thực tế — Case Studies | AutoFlow VN",
    description:
      "Case studies thực tế từ E-commerce, Giáo dục, BĐS, F&B. Số liệu before/after rõ ràng, ROI đo được.",
  },
};

export default function KetQuaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-6">
            Case Studies
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-4">
            Không phải lời hứa.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Đây là số liệu.
            </span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Mỗi case study là một doanh nghiệp thật, vấn đề thật, kết quả đo
            được. Xem cách AutoFlow giúp SME Việt tiết kiệm thời gian và tăng
            doanh thu.
          </p>
        </section>

        {/* Stats summary */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "4", label: "Ngành đã triển khai" },
              { value: "18+", label: "Giờ/tuần tiết kiệm" },
              { value: "< 5", label: "Tháng hoàn vốn" },
              { value: "20+", label: "Workflows tự động" },
            ].map((s, i) => (
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

        {/* Case study cards */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/ket-qua/${cs.slug}`}
                className="block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Header */}
                <div className="px-8 py-5 bg-slate-900 flex flex-wrap items-center gap-4">
                  <span
                    className={`text-xs font-bold ${cs.badgeText} ${cs.badgeBg} px-3 py-1 rounded-full`}
                  >
                    {cs.industry}
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-white">
                      {cs.company}
                    </h2>
                    <p className="text-xs text-slate-400">{cs.employees}</p>
                  </div>
                  <span className="text-xs text-slate-400 ml-auto">
                    {cs.homepagePackage}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100">
                  {cs.metrics.map((m, i) => (
                    <div key={i} className="bg-white p-5 text-center">
                      <p className="font-display font-extrabold text-2xl text-primary">
                        {m.value}
                        {m.unit && (
                          <span className="text-sm font-medium text-slate-400 ml-1">
                            {m.unit}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="px-8 py-5 border-t border-slate-100">
                  <p className="text-sm text-slate-500 italic">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    — {cs.testimonial.name}, {cs.testimonial.role}
                  </p>
                </div>

                {/* ROI bar */}
                <div className="px-8 py-4 bg-accent/5 border-t border-accent/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-xs text-slate-400">Chi phí</span>
                      <p className="text-sm font-bold text-slate-900">
                        {cs.roi.cost}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400">
                        {cs.roi.savingsLabel}
                      </span>
                      <p className="text-sm font-bold text-accent">
                        {cs.roi.savings}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400">
                        {cs.roi.paybackLabel}
                      </span>
                      <p className="text-sm font-bold text-primary">
                        {cs.roi.payback}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center mt-16">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-3">
            Doanh nghiệp bạn có vấn đề tương tự?
          </h2>
          <p className="text-slate-500 mb-6">
            Audit miễn phí 30 phút — mình phân tích quy trình và chỉ ra chính
            xác đâu nên tự động hóa trước.
          </p>
          <Link
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
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
