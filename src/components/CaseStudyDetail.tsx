"use client";

import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyDetail({ cs }: { cs: CaseStudy }) {
  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="max-w-3xl">
          <Link
            href="/ket-qua"
            className="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block"
          >
            ← Tất cả case studies
          </Link>
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${cs.badgeBg} ${cs.badgeText} text-xs font-semibold mb-5 ml-4`}
          >
            {cs.industry}
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight mb-4">
            {cs.headline}
          </h1>
          <p className="text-slate-500 text-lg">{cs.subtitle}</p>
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cs.metrics.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 p-6 text-center"
            >
              <p className="font-display font-extrabold text-3xl text-primary">
                {m.value}
                <span className="text-sm font-medium text-slate-400 ml-1">
                  {m.unit}
                </span>
              </p>
              <p className="text-xs text-slate-500 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Background */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-5">
          Bối cảnh
        </h2>
        <div className="prose prose-slate max-w-none">
          {cs.backgroundParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
          <svg
            className="w-8 h-8 text-primary/30 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-base text-slate-700 italic leading-relaxed mb-4">
            {cs.testimonial.quote}
          </p>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {cs.testimonial.name}
            </p>
            <p className="text-xs text-slate-500">{cs.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 bg-slate-50 relative noise-bg">
        <div className="max-w-6xl mx-auto px-6 relative">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-8 text-center">
            5 Workflows — Before & After
          </h2>
          <div className="space-y-4">
            {cs.workflows.map((wf, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <div className="px-6 py-3 bg-slate-900">
                  <span className="text-sm font-semibold text-white">
                    {i + 1}. {wf.name}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs">
                        ✕
                      </span>
                      <span className="text-xs font-bold text-red-600 uppercase">
                        Trước
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{wf.before}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs">
                        ✓
                      </span>
                      <span className="text-xs font-bold text-accent uppercase">
                        Sau
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{wf.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-8 text-center">
          Timeline triển khai: {cs.metrics.find((m) => m.label.includes("triển khai"))?.value ?? ""}{" "}
          {cs.metrics.find((m) => m.label.includes("triển khai"))?.unit ?? "tuần"}
        </h2>
        <div className="space-y-6">
          {cs.timeline.map((t, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                {i < cs.timeline.length - 1 && (
                  <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <span className="text-xs font-semibold text-primary">
                  {t.week}
                </span>
                <h3 className="font-display font-bold text-slate-900 mt-1">
                  {t.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <div className="bg-accent/5 border border-accent/10 rounded-2xl p-8">
          <h2 className="font-display font-bold text-xl text-slate-900 mb-6">
            ROI thực tế
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-slate-500 mb-1">Chi phí project</p>
              <p className="font-display font-extrabold text-2xl text-slate-900">
                {cs.roi.cost}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">
                {cs.roi.savingsLabel}
              </p>
              <p className="font-display font-extrabold text-2xl text-accent">
                {cs.roi.savings}
              </p>
              <p className="text-xs text-slate-400">
                {cs.roi.savingsDetail}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">
                {cs.roi.paybackLabel}
              </p>
              <p className="font-display font-extrabold text-2xl text-primary">
                {cs.roi.payback}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-3">
          {cs.ctaTitle}
        </h2>
        <p className="text-slate-500 mb-6">{cs.ctaDescription}</p>
        <Link
          href="/audit"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
        >
          {cs.ctaButtonText}
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
  );
}
