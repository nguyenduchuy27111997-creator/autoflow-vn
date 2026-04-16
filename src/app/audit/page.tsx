"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getStoredUTM } from "@/lib/utm";
import { trackGenerateLead } from "@/lib/analytics";
import { fbqTrackLead } from "@/lib/fbpixel";

// ── Enum constants (reused in API handler + client-ops types) ──
export const PAIN_PRIMARY_OPTIONS = [
  { value: "manual_entry", label: "Nhập liệu thủ công quá nhiều" },
  { value: "lead_drop", label: "Lead rơi vì không follow-up kịp" },
  { value: "monthly_report", label: "Báo cáo cuối tháng mất nhiều ngày" },
  { value: "data_sync", label: "Đồng bộ dữ liệu giữa các hệ thống" },
  { value: "slow_cs", label: "Chăm sóc khách hàng chậm" },
  { value: "other", label: "Khác (mô tả ở details)" },
] as const;

export const FREQUENCY_OPTIONS = [
  { value: "daily", label: "Hàng ngày" },
  { value: "weekly", label: "Hàng tuần" },
  { value: "monthly", label: "Hàng tháng" },
] as const;

export const VOLUME_OPTIONS = [
  { value: "lt_100", label: "< 100" },
  { value: "100_1k", label: "100 – 1.000" },
  { value: "1k_10k", label: "1.000 – 10.000" },
  { value: "10k_plus", label: "> 10.000" },
] as const;

export type PainPrimaryValue = (typeof PAIN_PRIMARY_OPTIONS)[number]["value"];
export type FrequencyValue = (typeof FREQUENCY_OPTIONS)[number]["value"];
export type VolumeValue = (typeof VOLUME_OPTIONS)[number]["value"];

// ── Lean form industries (Phase 98 — separate from legacy constants) ──
const LEAN_INDUSTRIES = [
  { value: "fnb", label: "F&B" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "hr", label: "HR" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "other", label: "Khác" },
] as const;

const NARRATIVE_PLACEHOLDERS: Record<string, string> = {
  fnb: "VD: Mỗi ngày tôi mất 3 giờ tổng hợp đơn Grab Food + Shopee Food vào MISA, vẫn có sai sót. Cuối tháng mất 2 ngày làm báo cáo 5 chi nhánh...",
  ecommerce:
    "VD: Shop 200 đơn/ngày, 2 nhân viên nhập MISA suốt, hay sai. Không biết tồn kho real-time...",
  hr: "VD: Mỗi tháng 50 CV, sàng lọc thủ công, hay miss ứng viên tốt. Schedule phỏng vấn qua Zalo rời rạc...",
  healthcare:
    "VD: Phòng khám 30 lịch/ngày, gọi điện nhắc từng bệnh nhân, no-show 20%. Hồ sơ bệnh án paper...",
  education:
    "VD: 200 học viên active, nhắc lịch học qua Zalo rời rạc. Học phí miss, không có alert...",
  other:
    "Mô tả 3 điều khiến business mất nhiều thời gian nhất hoặc làm bạn burnout...",
};

function getNarrativePlaceholder(industry: string): string {
  return (
    NARRATIVE_PLACEHOLDERS[industry] ??
    NARRATIVE_PLACEHOLDERS["other"]
  );
}

interface AuditFormState {
  // Step 1
  name: string;
  phone: string;
  company: string;
  industry: string;
  // Step 2
  painNarrative: string;
  // Step 3 (optional)
  painFrequency: FrequencyValue | "";
  painHoursPerWeek: number;
  // Kept for backward compat (not shown in lean form)
  painPrimary: PainPrimaryValue | "";
  teamSizeNumeric: number | "";
  monthlyVolume: VolumeValue | "";
  details: string;
}

export default function AuditPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<AuditFormState>({
    name: "",
    phone: "",
    company: "",
    industry: "",
    painNarrative: "",
    painFrequency: "",
    painHoursPerWeek: 10,
    painPrimary: "",
    teamSizeNumeric: "",
    monthlyVolume: "",
    details: "",
  });

  const submitForm = async (skipQuantify = false) => {
    setSubmitting(true);
    try {
      const utm = getStoredUTM();
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          company: form.company || null,
          industry: form.industry || null,
          painNarrative: form.painNarrative,
          painFrequency: skipQuantify ? null : (form.painFrequency || null),
          painHoursPerWeek: skipQuantify ? null : (form.painHoursPerWeek || null),
          // Backward compat fields — null for lean form
          painPrimary: null,
          teamSize: null,
          monthlyVolume: null,
          details: null,
          ...utm,
        }),
      });
      if (res.ok) {
        trackGenerateLead({ form_type: "audit" });
        fbqTrackLead({ content_name: "audit" });
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  // Validation
  const canProceed1 =
    form.name.trim().length > 0 &&
    form.phone.trim().length > 0 &&
    form.industry.length > 0;

  const canProceed2 = form.painNarrative.trim().length >= 30;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Miễn phí · Không ràng buộc · 30 phút
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Nhận audit quy trình{" "}
              <span className="gradient-text">miễn phí</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              Discovery call 30 phút + Audit Report cá nhân hóa trong 48h —
              chỉ ra chính xác đâu có thể tự động hóa và tiết kiệm bao nhiêu.
              Không pitch bán hàng, bạn quyết định bước tiếp theo.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* ─── Step 4: Success — quy trình 3 bước ─── */
                <div className="bg-white rounded-2xl border border-slate-200 p-10 md:p-12">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                      <svg
                        width="40"
                        height="40"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                      >
                        <path d="M6 20l10 10 18-18" />
                      </svg>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
                      Cảm ơn bạn!
                    </h2>
                    <p className="text-slate-500 max-w-md mx-auto">
                      Mình đã nhận thông tin. Đây là quy trình 3 bước sắp tới — hoàn toàn miễn phí, không cam kết.
                    </p>
                  </div>

                  {/* Timeline 3 bước */}
                  <div className="max-w-lg mx-auto space-y-4">
                    {/* Step 1 */}
                    <div className="flex gap-4 items-start p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Discovery Call — 30 phút (trong 24h)
                        </div>
                        <p className="text-sm text-slate-500">
                          Mình liên hệ qua Zalo/SĐT để sắp xếp cuộc gọi. Tập trung hỏi rõ pain points, không pitch bán hàng.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4 items-start p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Audit Report cá nhân hóa (trong 48h sau call)
                        </div>
                        <p className="text-sm text-slate-500">
                          PDF chi tiết: phân tích pain, ROI ước tính, workflow đề xuất. Bạn giữ report — không phụ thuộc AutoFlow.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4 items-start p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          Bạn quyết định — proposal chỉ gửi khi bạn confirm
                        </div>
                        <p className="text-sm text-slate-500">
                          Sau khi đọc audit, nếu bạn muốn triển khai, mình sẽ gửi proposal với pricing cụ thể. Không confirm = không gửi proposal, không làm phiền.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 text-center mt-6 max-w-md mx-auto">
                    💬 Không spam, không áp lực. Nếu thấy không fit, mình sẽ nói rõ và refer bạn tới người khác phù hợp hơn.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
                  {/* Progress bar — 3 active steps (contact, pain, quantify) */}
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex-1 flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            step >= s
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {step > s ? (
                            <svg
                              width="14"
                              height="14"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M2 7l3 3 7-7" />
                            </svg>
                          ) : (
                            s
                          )}
                        </div>
                        {s < 3 && (
                          <div
                            className={`flex-1 h-0.5 rounded ${
                              step > s ? "bg-primary" : "bg-slate-200"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* ─── Step 1: Contact + Industry ─── */}
                  {step === 1 && (
                    <div>
                      <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
                        Thông tin liên hệ
                      </h2>
                      <p className="text-sm text-slate-500 mb-6">
                        Để mình liên hệ sắp xếp cuộc gọi audit
                      </p>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Tên của bạn *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            placeholder="Nguyễn Văn A"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Số điện thoại / Zalo *
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            placeholder="0912 345 678"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Tên công ty (không bắt buộc)
                          </label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) =>
                              setForm({ ...form, company: e.target.value })
                            }
                            placeholder="Công ty ABC"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Ngành nghề *
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {LEAN_INDUSTRIES.map((ind) => (
                              <button
                                key={ind.value}
                                type="button"
                                onClick={() =>
                                  setForm({ ...form, industry: ind.value })
                                }
                                className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all text-center ${
                                  form.industry === ind.value
                                    ? "border-primary bg-primary-light text-primary"
                                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                                }`}
                              >
                                {ind.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!canProceed1}
                        className="mt-6 w-full bg-primary hover:bg-primary-dark disabled:bg-slate-200 disabled:text-slate-500 text-white font-semibold py-3.5 rounded-xl transition-all"
                      >
                        Tiếp tục →
                      </button>
                    </div>
                  )}

                  {/* ─── Step 2: Pain Story (narrative primary) ─── */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
                        Pain story của bạn
                      </h2>
                      <p className="text-sm text-slate-500 mb-6">
                        Kể cho mình nghe — không cần hoàn hảo
                      </p>

                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                          Mô tả điều khiến anh/chị đau đầu nhất (3-5 câu) *
                        </label>
                        <textarea
                          rows={6}
                          value={form.painNarrative}
                          onChange={(e) =>
                            setForm({ ...form, painNarrative: e.target.value })
                          }
                          placeholder={getNarrativePlaceholder(form.industry)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
                          maxLength={2000}
                        />
                        <div className="flex justify-between items-center mt-1">
                          {form.painNarrative.length < 30 && form.painNarrative.length > 0 ? (
                            <p className="text-xs text-amber-500">
                              Cần thêm {30 - form.painNarrative.length} ký tự nữa
                            </p>
                          ) : (
                            <span />
                          )}
                          <p className="text-xs text-slate-400 ml-auto">
                            {form.painNarrative.length}/2000
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-6 py-3.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                        >
                          ← Quay lại
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          disabled={!canProceed2}
                          className="flex-1 bg-primary hover:bg-primary-dark disabled:bg-slate-200 disabled:text-slate-500 text-white font-semibold py-3.5 rounded-xl transition-all"
                        >
                          Tiếp tục →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ─── Step 3: Quick Quantify (optional) ─── */}
                  {step === 3 && (
                    <div>
                      <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
                        Tuỳ chọn: Giúp Huy hiểu rõ hơn
                      </h2>
                      <p className="text-sm text-slate-500 mb-6">
                        30 giây — hoàn toàn không bắt buộc
                      </p>

                      <div className="space-y-6">
                        {/* Frequency radio */}
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-2 block">
                            Pain này xảy ra:
                          </label>
                          <div className="flex gap-3">
                            {FREQUENCY_OPTIONS.map((opt) => (
                              <label
                                key={opt.value}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium cursor-pointer transition-all ${
                                  form.painFrequency === opt.value
                                    ? "border-primary bg-primary-light text-primary"
                                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="painFrequency"
                                  value={opt.value}
                                  checked={form.painFrequency === opt.value}
                                  onChange={() =>
                                    setForm({
                                      ...form,
                                      painFrequency: opt.value,
                                    })
                                  }
                                  className="sr-only"
                                />
                                {opt.label}
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Hours per week slider */}
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-2 block">
                            Ước tính giờ bị mất mỗi tuần
                          </label>
                          <div className="flex items-center gap-4">
                            <input
                              type="range"
                              min={1}
                              max={40}
                              value={form.painHoursPerWeek}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  painHoursPerWeek: Number(e.target.value),
                                })
                              }
                              className="flex-1 accent-primary"
                            />
                            <span className="text-sm font-semibold text-primary w-36 text-right shrink-0">
                              {form.painHoursPerWeek} giờ/tuần bị mất
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Honeypot */}
                      <input
                        type="text"
                        name="website"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="flex flex-col gap-3 mt-8">
                        <button
                          type="button"
                          onClick={() => submitForm(false)}
                          disabled={submitting}
                          className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                        >
                          {submitting ? "Đang gửi..." : "Điền rồi gửi"}
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M5 8h6M8 5l3 3-3 3" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => submitForm(true)}
                          disabled={submitting}
                          className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold py-3.5 rounded-xl transition-all text-sm"
                        >
                          Bỏ qua, gửi audit ngay
                        </button>
                      </div>

                      <p className="text-xs text-center text-slate-500 mt-4">
                        Không spam. Không chia sẻ thông tin cho bên thứ ba.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* What you get */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7">
                <h3 className="font-display font-bold text-slate-900 mb-5">
                  Bạn sẽ nhận được gì?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "📞",
                      title: "Discovery Call 30 phút",
                      desc: "Mình nghe bạn kể về quy trình hàng ngày, focus vào pain points. Không pitch bán hàng.",
                    },
                    {
                      icon: "📊",
                      title: "Audit Report cá nhân hóa",
                      desc: "PDF chi tiết trong 48h sau call: phân tích pain, ROI ước tính, workflow đề xuất. Bạn giữ report — không phụ thuộc AutoFlow.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-xl shrink-0 mt-0.5">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-semibold text-sm text-slate-900">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-white rounded-2xl border border-slate-200 p-7">
                <h3 className="font-display font-bold text-sm text-slate-900 mb-4">
                  Cam kết
                </h3>
                <div className="space-y-3">
                  {[
                    "100% miễn phí — không phí ẩn",
                    "Không spam, không gọi điện liên tục",
                    "Nếu không phù hợp, mình nói thẳng",
                    "Data của bạn không chia sẻ bên thứ ba",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <svg
                        className="text-accent shrink-0"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M2 8l4 4 8-8" />
                      </svg>
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick stat */}
              <div className="bg-primary text-white rounded-2xl p-7">
                <p className="font-display font-extrabold text-3xl mb-1">
                  40%+
                </p>
                <p className="text-sm text-white/70">
                  tỉ lệ chốt deal sau audit call. Vì audit cho thấy con số thật
                  — không phải lời hứa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
