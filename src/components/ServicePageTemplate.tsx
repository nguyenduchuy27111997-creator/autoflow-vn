"use client";

import { useState, useEffect } from "react";
import { fbpixelEvent } from "@/lib/fbpixel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import type { ServiceConfig } from "@/data/services";

export default function ServicePageTemplate({ config }: { config: ServiceConfig }) {
  useEffect(() => {
    fbpixelEvent("ViewContent", { content_name: config.fbPixelContentName });
  }, [config.fbPixelContentName]);

  const [sliderA, setSliderA] = useState(config.roi.sliderA.default);
  const [sliderB, setSliderB] = useState(config.roi.sliderB.default);
  const [openFaq, setOpenFaq] = useState(-1);
  const costPerYear = sliderA * config.roi.salary * 12;
  const savedCost = Math.round(costPerYear * config.roi.savingsRate);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${config.badge.bgClass} ${config.badge.textClass} text-xs font-semibold mb-5`}
            >
              {config.badge.text}
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              {config.hero.titlePrefix}
              <span className="gradient-text">{config.hero.titleHighlight}</span>
              {config.hero.titleSuffix}
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
              {config.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {config.hero.ctaText}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 8h6M8 5l3 3-3 3" />
                </svg>
              </a>
              <a
                href="/bang-gia"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200"
              >
                Xem bảng giá
              </a>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-10 border-y border-slate-100 bg-slate-50/50 mb-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-sm font-medium text-slate-500 mb-6">
              {config.integrationsLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {config.integrations.map((item) => (
                <div key={item.name} className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg bg-slate-100">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              {config.painPointsSection.title}
            </h2>
            <p className="text-slate-500">
              {config.painPointsSection.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {config.painPoints.map((pain, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-slate-200 p-7 ${config.painPointHoverBorder} hover:shadow-md transition-all`}
              >
                <span className="font-display font-extrabold text-2xl text-red-500">
                  {pain.stat}
                </span>
                <h3 className="font-display font-bold text-slate-900 mt-2 mb-2">
                  {pain.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pain.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflows */}
        <section className="py-20 bg-slate-50 relative noise-bg">
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
                {config.workflowsSection.title}
                <span className="gradient-text">{config.workflowsSection.highlight}</span>
              </h2>
              <p className="text-slate-500">
                {config.workflowsSection.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {config.workflows.map((wf, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ backgroundColor: wf.color }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-slate-900 mb-1">
                        {wf.name}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-3">
                        {wf.flow}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/5 px-3 py-1 rounded-full">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                        {wf.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 max-w-3xl mx-auto px-6">
          <div className="bg-primary-light/50 rounded-2xl border border-primary/10 p-8">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
              {config.roi.title}
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              {config.roi.subtitle}
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  {config.roi.sliderA.label}
                </label>
                <input
                  type="range"
                  min={config.roi.sliderA.min}
                  max={config.roi.sliderA.max}
                  value={sliderA}
                  onChange={(e) => setSliderA(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>{config.roi.sliderA.min}</span>
                  <span className="font-bold text-primary text-lg">
                    {sliderA} người
                  </span>
                  <span>{config.roi.sliderA.max}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  {config.roi.sliderB.label}
                </label>
                <input
                  type="range"
                  min={config.roi.sliderB.min}
                  max={config.roi.sliderB.max}
                  value={sliderB}
                  onChange={(e) => setSliderB(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>{config.roi.sliderB.min}</span>
                  <span className="font-bold text-primary text-lg">
                    {sliderB} giờ
                  </span>
                  <span>{config.roi.sliderB.max}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5 bg-white rounded-xl border border-slate-200">
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-red-500">
                  {costPerYear}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {config.roi.costLabel}
                </p>
              </div>
              <div className="text-center">
                <p className="font-display font-extrabold text-3xl text-accent">
                  {savedCost}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  triệu đ/năm tiết kiệm được
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              {config.pricingTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {config.pricing.map((tier, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl ${
                  tier.badge ? "border-2 border-primary relative" : "border border-slate-200"
                } p-7`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-4 bg-primary text-white text-[11px] font-bold px-3 py-0.5 rounded-full">
                    {tier.badge}
                  </div>
                )}
                <h3 className={`font-display font-bold text-lg text-slate-900${tier.badge ? " mt-1" : ""}`}>
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-3">{tier.desc}</p>
                <p className="font-display font-extrabold text-2xl text-slate-900 mb-3">
                  {tier.price}
                  <span className="text-sm font-normal text-slate-500 ml-1">triệu</span>
                </p>
                <ul className="space-y-1.5 mb-5">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/audit"
                  className={`block text-center font-semibold py-2.5 rounded-xl transition-all text-sm ${
                    tier.isPrimary
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {tier.ctaText}
                </a>
              </div>
            ))}
          </div>
          {/* Compliance callout */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-4xl mx-auto">
            {config.complianceBadges.map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 text-center mb-10">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-3">
            {config.faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-sm text-slate-900">{faq.q}</span>
                  <svg
                    className={`shrink-0 w-5 h-5 text-slate-500 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: config.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              {config.cta.title}
            </h2>
            <p className="text-slate-400 mb-6">{config.cta.subtitle}</p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              {config.cta.buttonText}
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
