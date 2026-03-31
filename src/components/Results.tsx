"use client";

import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import { caseStudies } from "@/lib/case-studies";

export default function Results() {
  return (
    <section id="ket-qua" className="py-20 md:py-28 bg-slate-50 relative noise-bg">
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeader
          badge="Kết quả thực tế"
          title="Không phải lời hứa."
          gradientText="Đây là số liệu."
          subtitle="Mỗi case study là một doanh nghiệp thật, vấn đề thật, kết quả đo được."
          className="mb-16"
        />

        {/* Case studies */}
        <div className="space-y-8">
          {caseStudies.map((cs, idx) => (
            <Link
              key={idx}
              href={`/ket-qua/${cs.slug}`}
              className="block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Header bar */}
              <div className="px-8 py-4 bg-slate-900 flex flex-wrap items-center gap-4">
                <span className={`text-xs font-bold ${cs.badgeText} ${cs.badgeBg} px-3 py-1 rounded-full`}>
                  {cs.industry}
                </span>
                <span className="text-sm font-semibold text-white">
                  {cs.company}
                </span>
                <span className="text-xs text-slate-400">
                  {cs.employees}
                </span>
                <span className="text-xs text-slate-400 ml-auto">
                  {cs.homepagePackage}
                </span>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Before */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-500 text-xs">✕</span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-red-600 uppercase tracking-wide">
                      Trước AutoFlow
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {Object.values(cs.homepageBefore).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-red-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent text-xs">✓</span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-accent uppercase tracking-wide">
                      Sau AutoFlow
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {Object.values(cs.homepageAfter).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              <div className="px-8 py-4 border-t border-slate-100">
                <p className="text-sm text-slate-500 italic">
                  &ldquo;{cs.testimonial.quote}&rdquo;
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  — {cs.testimonial.name}, {cs.testimonial.role}
                </p>
              </div>

              {/* Result highlight */}
              <div className="px-8 py-4 bg-accent/5 border-t border-accent/10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-semibold text-accent">
                  📈 {cs.homepageResult}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400">
                    ⏱ {cs.homepageTimeline}
                  </span>
                  <span className="text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">
                    Xem chi tiết →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/ket-qua"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            Xem tất cả case studies
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 8h6M8 5l3 3-3 3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
