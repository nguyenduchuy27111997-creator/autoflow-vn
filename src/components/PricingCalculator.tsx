"use client";

import { useState } from "react";

const AUTOMATIONS = [
  { id: "orders", label: "Đồng bộ đơn hàng / tồn kho", icon: "📦", workflows: 1.5 },
  { id: "customer", label: "Chăm sóc khách hàng (Zalo, email)", icon: "💬", workflows: 1.5 },
  { id: "leads", label: "Lead capture & follow-up", icon: "🎯", workflows: 1 },
  { id: "reports", label: "Báo cáo tự động", icon: "📊", workflows: 1 },
  { id: "invoice", label: "Hóa đơn / kế toán", icon: "🧾", workflows: 1 },
  { id: "social", label: "Social media / content", icon: "📱", workflows: 1 },
  { id: "onboarding", label: "Onboarding nhân viên / khách", icon: "👋", workflows: 1 },
  { id: "ai", label: "AI chatbot / trợ lý", icon: "🤖", workflows: 2 },
];

const TEAM_SIZES = [
  { id: "small", label: "1-5 người", sub: "< 100 đơn/ngày", factor: 1.0 },
  { id: "medium", label: "5-20 người", sub: "100-500 đơn/ngày", factor: 1.3 },
  { id: "large", label: "20+ người", sub: "500+ đơn/ngày", factor: 1.6 },
];

const TIMELINES = [
  { id: "flexible", label: "Linh hoạt", sub: "1-2 tháng", factor: 1.0 },
  { id: "normal", label: "Trong 1 tháng", sub: "Ưu tiên", factor: 1.0 },
  { id: "urgent", label: "Gấp — trong 2 tuần", sub: "+20% phí", factor: 1.2 },
];

const TIERS = [
  { name: "Starter", min: 8, max: 15, workflows: "1", timeline: "1-2 tuần" },
  { name: "Growth", min: 20, max: 35, workflows: "3-5", timeline: "3-4 tuần" },
  { name: "Scale", min: 50, max: 80, workflows: "8-12", timeline: "6-8 tuần" },
];

function formatVND(m: number) {
  return Math.round(m * 2) / 2; // round to 0.5
}

export default function PricingCalculator() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState("");
  const [timeline, setTimeline] = useState("");
  const [retainer, setRetainer] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const toggleAutomation = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  // Calculate estimate
  const workflowCount = selected.reduce((sum, id) => {
    const a = AUTOMATIONS.find((a) => a.id === id);
    return sum + (a?.workflows || 1);
  }, 0);

  const team = TEAM_SIZES.find((t) => t.id === teamSize);
  const tl = TIMELINES.find((t) => t.id === timeline);
  const complexityFactor = team?.factor || 1;
  const urgencyFactor = tl?.factor || 1;
  const basePerWorkflow = 7;
  const rawEstimate = workflowCount * basePerWorkflow * complexityFactor * urgencyFactor;

  const tier = rawEstimate <= 15 ? TIERS[0] : rawEstimate <= 40 ? TIERS[1] : TIERS[2];
  const rangeLow = formatVND(Math.max(tier.min, rawEstimate * 0.85));
  const rangeHigh = formatVND(Math.min(tier.max, rawEstimate * 1.15));
  const monthlySavings = Math.round(workflowCount * 15); // ~15 giờ/workflow/tháng
  const monthlyEquivalent = formatVND((rangeLow + rangeHigh) / 2 / 10);
  const paybackMonths = Math.max(1, Math.ceil(((rangeLow + rangeHigh) / 2) / (monthlySavings * 0.08))); // rough

  const canProceed = step === 1 ? selected.length > 0 : step === 2 ? !!teamSize : step === 3 ? !!timeline : true;

  // GA4 tracking
  const trackStep = (s: number) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", s === 4 ? "pricing_calculator_complete" : "pricing_calculator_step", {
        step: s,
        ...(s === 4 && { tier: tier.name, range_low: rangeLow, range_high: rangeHigh }),
      });
    }
  };

  const handleNext = () => {
    const next = step + 1;
    setStep(next);
    trackStep(next);
  };

  const handleEmailSubmit = async () => {
    if (!email.includes("@")) return;
    setEmailSent(true);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "pricing_calculator_cta_click", { action: "email", tier: tier.name });
    }
  };

  if (step === 4) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
        {/* Result */}
        <div className="text-center mb-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Ước tính chi phí</p>
          <div className="font-display font-extrabold text-4xl md:text-5xl text-slate-900">
            {rangeLow} — {rangeHigh} <span className="text-lg font-bold text-slate-500">triệu VND</span>
          </div>
          <p className="text-sm text-slate-500 mt-2">
            Gói <strong className="text-slate-700">{tier.name}</strong> · {Math.round(workflowCount)} workflows · {tier.timeline}
          </p>
        </div>

        {/* Value comparison */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <ValueCard icon="👤" label="Thuê NV" value="10-15 tr/tháng" sub="+ BHXH + quản lý" muted />
          <ValueCard icon="⚡" label="AutoFlow" value={`~${monthlyEquivalent} tr/tháng`} sub="tính trên 10 tháng" accent />
          <ValueCard icon="⏱" label="Tiết kiệm" value={`~${monthlySavings} giờ/tháng`} sub={`= ${Math.round(monthlySavings / 8)} ngày`} />
          <ValueCard icon="📈" label="Hoàn vốn" value={`~${paybackMonths} tháng`} sub="ROI từ tháng tiếp" />
        </div>

        {retainer && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-sm text-amber-800">
            <strong>+ Retainer:</strong> 8-15 triệu/tháng — monitor, fix lỗi 24h, thêm workflow mới hàng tháng.
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <a
            href={`/audit?estimated=${rangeLow}-${rangeHigh}&tier=${tier.name}&workflows=${Math.round(workflowCount)}`}
            onClick={() => {
              if (typeof window !== "undefined" && typeof window.gtag === "function")
                window.gtag("event", "pricing_calculator_cta_click", { action: "audit", tier: tier.name });
            }}
            className="flex-1 text-center px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Nhận Tư Vấn Miễn Phí →
          </a>
          <a
            href="/mau-workflow"
            className="flex-1 text-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            Xem Mẫu Workflow
          </a>
        </div>

        {/* Soft gate email */}
        {!emailSent ? (
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-slate-700 mb-2">📧 Nhận bản phân tích chi tiết qua email?</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none"
              />
              <button
                onClick={handleEmailSubmit}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shrink-0"
              >
                Gửi
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50 rounded-xl p-4 text-center">
            <p className="text-sm text-emerald-700 font-semibold">✓ Đã nhận! Kiểm tra email nhé.</p>
          </div>
        )}

        {/* Redo */}
        <button
          onClick={() => { setStep(1); setSelected([]); setTeamSize(""); setTimeline(""); setRetainer(false); }}
          className="block w-full mt-4 text-xs text-slate-400 hover:text-slate-500 transition-colors text-center"
        >
          Tính lại từ đầu
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
              s < step ? "bg-accent text-white" : s === step ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
            }`}>
              {s < step ? "✓" : s}
            </div>
            {s < 3 && <div className={`flex-1 h-0.5 mx-1.5 rounded ${s < step ? "bg-accent" : "bg-slate-200"}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: What to automate */}
      {step === 1 && (
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Bạn muốn tự động hóa gì?</h3>
          <p className="text-sm text-slate-500 mb-5">Chọn tất cả quy trình phù hợp</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {AUTOMATIONS.map((a) => (
              <button
                key={a.id}
                onClick={() => toggleAutomation(a.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all border ${
                  selected.includes(a.id)
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="text-lg">{a.icon}</span>
                <span className="text-sm font-medium">{a.label}</span>
                {selected.includes(a.id) && (
                  <svg className="w-4 h-4 ml-auto text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Team size */}
      {step === 2 && (
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Quy mô doanh nghiệp?</h3>
          <p className="text-sm text-slate-500 mb-5">Giúp mình ước tính độ phức tạp</p>
          <div className="space-y-2">
            {TEAM_SIZES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTeamSize(t.id)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all border ${
                  teamSize === t.id
                    ? "border-primary bg-primary/5"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div>
                  <span className={`text-sm font-semibold ${teamSize === t.id ? "text-primary" : "text-slate-700"}`}>{t.label}</span>
                  <span className="text-xs text-slate-500 ml-2">{t.sub}</span>
                </div>
                {teamSize === t.id && (
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Timeline + retainer */}
      {step === 3 && (
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900 mb-1">Timeline triển khai?</h3>
          <p className="text-sm text-slate-500 mb-5">Chọn tốc độ phù hợp</p>
          <div className="space-y-2 mb-6">
            {TIMELINES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTimeline(t.id)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all border ${
                  timeline === t.id
                    ? "border-primary bg-primary/5"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div>
                  <span className={`text-sm font-semibold ${timeline === t.id ? "text-primary" : "text-slate-700"}`}>{t.label}</span>
                  <span className="text-xs text-slate-500 ml-2">{t.sub}</span>
                </div>
                {timeline === t.id && (
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Retainer toggle */}
          <div
            onClick={() => setRetainer(!retainer)}
            className={`flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer transition-all border ${
              retainer ? "border-amber-300 bg-amber-50" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div>
              <span className={`text-sm font-semibold ${retainer ? "text-amber-700" : "text-slate-700"}`}>
                Cần bảo trì hàng tháng?
              </span>
              <span className="text-xs text-slate-500 ml-2">8-15 triệu/tháng</span>
            </div>
            <div className={`w-10 h-6 rounded-full transition-colors flex items-center ${retainer ? "bg-amber-400 justify-end" : "bg-slate-200 justify-start"}`}>
              <div className="w-4 h-4 rounded-full bg-white shadow mx-1" />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
        {step > 1 ? (
          <button onClick={() => setStep(step - 1)} className="text-sm text-slate-500 hover:text-slate-700 font-medium transition-colors">
            ← Quay lại
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {step === 3 ? "Xem kết quả" : "Tiếp tục →"}
        </button>
      </div>
    </div>
  );
}

function ValueCard({ icon, label, value, sub, accent, muted }: { icon: string; label: string; value: string; sub: string; accent?: boolean; muted?: boolean }) {
  return (
    <div className={`rounded-xl p-3 text-center ${accent ? "bg-primary/5 border border-primary/10" : muted ? "bg-red-50 border border-red-100" : "bg-slate-50 border border-slate-200"}`}>
      <div className="text-lg mb-0.5">{icon}</div>
      <div className={`font-display font-bold text-sm ${accent ? "text-primary" : muted ? "text-red-500 line-through" : "text-slate-900"}`}>{value}</div>
      <div className="text-[10px] text-slate-500">{sub}</div>
    </div>
  );
}
