"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { templates, TEMPLATE_CATEGORIES, TEMPLATE_INDUSTRIES, COMPLEXITY_MAP, PRICING_MAP } from "@/data/templates";

export default function TemplateGalleryPage() {
  const [category, setCategory] = useState("all");
  const [industry, setIndustry] = useState("all");

  const filtered = templates.filter((t) => {
    if (category !== "all" && t.category !== category) return false;
    if (industry !== "all" && !t.industries.includes(industry)) return false;
    return true;
  });

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              ⚡ {templates.length} mẫu workflow
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 mb-4">
              Thư Viện Mẫu Workflow{" "}
              <span className="gradient-text">n8n Cho SME Việt Nam</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {templates.length} workflow template đã được kiểm chứng với doanh nghiệp Việt Nam.
              Chọn mẫu phù hợp — AutoFlow xây dựng và bàn giao trong 1-4 tuần.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-3">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {TEMPLATE_CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    category === cat.value
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            {/* Industry pills */}
            <div className="flex flex-wrap gap-2">
              {TEMPLATE_INDUSTRIES.map((ind) => (
                <button
                  key={ind.value}
                  onClick={() => setIndustry(ind.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    industry === ind.value
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              Hiển thị {filtered.length}/{templates.length} mẫu workflow
            </p>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 mb-4">Không tìm thấy mẫu workflow phù hợp.</p>
              <button onClick={() => { setCategory("all"); setIndustry("all"); }} className="text-primary text-sm font-semibold hover:underline">
                Xem tất cả →
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((t) => {
                const complexity = COMPLEXITY_MAP[t.complexity];
                const pricing = PRICING_MAP[t.pricingTier];

                return (
                  <Link
                    key={t.slug}
                    href={`/mau-workflow/${t.slug}`}
                    className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5 transition-all group flex flex-col"
                  >
                    {/* Integration icons */}
                    <div className="flex items-center gap-1.5 mb-3">
                      {t.integrations.slice(0, 4).map((int, i) => (
                        <span
                          key={i}
                          className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-sm"
                          title={int.name}
                        >
                          {int.icon}
                        </span>
                      ))}
                      {t.integrations.length > 4 && (
                        <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[10px] text-slate-400 font-semibold">
                          +{t.integrations.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Name + desc */}
                    <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-primary transition-colors mb-1.5">
                      {t.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                      {t.shortDesc}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center flex-wrap gap-2 pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-semibold text-primary bg-primary/5 px-2 py-0.5 rounded-full">
                        ⏱ {t.timeSaved}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${complexity.color}`}>
                        {complexity.label}
                      </span>
                      <span className="text-[10px] text-slate-400 ml-auto">
                        {pricing.label} · {pricing.range}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display font-extrabold text-xl text-white mb-2">
              Không tìm thấy mẫu phù hợp?
            </h2>
            <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
              AutoFlow xây dựng workflow tùy chỉnh cho mọi quy trình. Đặt audit miễn phí 30 phút để mình phân tích và đưa ra giải pháp.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              Đặt Audit Miễn Phí →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
