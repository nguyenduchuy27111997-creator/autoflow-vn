"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/data/constants";
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

interface AuditFormState {
  name: string;
  phone: string;
  company: string;
  industry: string;
  teamSizeNumeric: number | "";
  monthlyVolume: VolumeValue | "";
  painPrimary: PainPrimaryValue | "";
  painFrequency: FrequencyValue | "";
  painHoursPerWeek: number;
  details: string;
}

export default function AuditPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [auditId, setAuditId] = useState<string | null>(null);
  const [showTier2, setShowTier2] = useState(false);
  const [form, setForm] = useState<AuditFormState>({
    name: "",
    phone: "",
    company: "",
    industry: "",
    teamSizeNumeric: "",
    monthlyVolume: "",
    painPrimary: "",
    painFrequency: "",
    painHoursPerWeek: 5,
    details: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const utm = getStoredUTM();
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          company: form.company,
          industry: form.industry,
          teamSize: form.teamSizeNumeric !== "" ? Number(form.teamSizeNumeric) : null,
          monthlyVolume: form.monthlyVolume || null,
          painPrimary: form.painPrimary || null,
          painFrequency: form.painPrimary !== "other" ? (form.painFrequency || null) : null,
          painHoursPerWeek: form.painPrimary !== "other" ? form.painHoursPerWeek : null,
          details: form.details || null,
          ...utm,
        }),
      });
      if (res.ok) {
        trackGenerateLead({ form_type: "audit" });
        fbqTrackLead({ content_name: "audit" });
        const data = await res.json();
        if (data.id) {
          setAuditId(data.id);
          setShowTier2(true);
        }
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const canProceed1 = form.name && form.phone;
  const canProceed2 = form.industry && form.teamSizeNumeric !== "";

  // Step 3 validation: painPrimary required; frequency + hours required unless "other"
  const isPainOther = form.painPrimary === "other";
  const canSubmit3 =
    form.painPrimary !== "" &&
    (isPainOther || (form.painFrequency !== "" && form.painHoursPerWeek > 0));

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
              Mình sẽ phân tích quy trình vận hành của bạn trong 30 phút và gửi
              Audit Report chi tiết trong 24h — chỉ ra chính xác đâu có thể tự
              động hóa và tiết kiệm bao nhiêu.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
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
                  <p className="text-slate-500 max-w-md mx-auto mb-8">
                    Mình đã nhận thông tin và sẽ liên hệ qua Zalo/SĐT trong
                    vòng 24h để sắp xếp cuộc gọi audit. Hẹn gặp bạn sớm!
                  </p>
                  <div className="p-5 bg-slate-50 rounded-xl max-w-sm mx-auto">
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Bạn sẽ nhận được:
                    </p>
                    <ul className="text-sm text-slate-500 space-y-1.5">
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span> Cuộc gọi audit
                        30 phút
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span> Audit Report
                        chi tiết trong 24h
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span> Proposal 3 gói
                        trong 48h
                      </li>
                    </ul>
                  </div>

                  {/* Tier 2 upgrade CTA */}
                  {showTier2 && (
                    <div className="mt-8 p-6 rounded-2xl border-2 border-primary bg-primary/5 text-left">
                      <div className="text-sm font-bold text-primary mb-1">
                        UPGRADE
                      </div>
                      <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                        Nhận audit report cá nhân hóa trong 2 giờ
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Hoàn thành deep profile (10 phút) → team Huy có đủ
                        context để tư vấn chính xác, không-hỏi-thừa trong call.
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setShowTier2(false)}
                          className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all"
                        >
                          Bỏ qua, nhận 24h
                        </button>
                        <Link
                          href={`/audit/deep-profile?id=${auditId}`}
                          className="px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all"
                        >
                          Làm ngay →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10"
                >
                  {/* Progress bar */}
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

                  {/* Step 1: Contact */}
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

                  {/* Step 2: Business Info */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
                        Về doanh nghiệp của bạn
                      </h2>
                      <p className="text-sm text-slate-500 mb-6">
                        Giúp mình chuẩn bị tốt hơn cho cuộc gọi audit
                      </p>

                      <div className="space-y-5">
                        {/* Industry */}
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Ngành nghề *
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {industries.map((ind) => (
                              <button
                                key={ind.value}
                                type="button"
                                onClick={() =>
                                  setForm({ ...form, industry: ind.value })
                                }
                                className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
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

                        {/* Team size — numeric input */}
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Quy mô team *
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={500}
                            value={form.teamSizeNumeric}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                teamSizeNumeric:
                                  e.target.value === ""
                                    ? ""
                                    : Number(e.target.value),
                              })
                            }
                            placeholder="Ví dụ: 8"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                          <p className="text-xs text-slate-400 mt-1">
                            Số người trong team sẽ dùng automation
                          </p>
                        </div>

                        {/* Monthly volume — new field */}
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Giao dịch/đơn/lead trung bình mỗi tháng?
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {VOLUME_OPTIONS.map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() =>
                                  setForm({ ...form, monthlyVolume: opt.value })
                                }
                                className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                                  form.monthlyVolume === opt.value
                                    ? "border-primary bg-primary-light text-primary"
                                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
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

                  {/* Step 3: Pain Points — redesigned */}
                  {step === 3 && (
                    <div>
                      <h2 className="font-display font-bold text-xl text-slate-900 mb-1">
                        Vấn đề bạn đang gặp
                      </h2>
                      <p className="text-sm text-slate-500 mb-6">
                        Chọn vấn đề chính ảnh hưởng nhiều nhất
                      </p>

                      <div className="space-y-5">
                        {/* Pain primary — single-select dropdown */}
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Vấn đề chính *
                          </label>
                          <select
                            value={form.painPrimary}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                painPrimary: e.target.value as PainPrimaryValue | "",
                                // reset frequency/hours when switching
                                painFrequency: "",
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                          >
                            <option value="">-- Chọn vấn đề chính --</option>
                            {PAIN_PRIMARY_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Frequency + hours — shown unless "other" */}
                        {form.painPrimary !== "" && !isPainOther && (
                          <>
                            {/* Frequency radio */}
                            <div>
                              <label className="text-sm font-medium text-slate-700 mb-2 block">
                                Tần suất xảy ra *
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

                            {/* Hours per week — slider */}
                            <div>
                              <label className="text-sm font-medium text-slate-700 mb-2 block">
                                Ước tính số giờ bị mất mỗi tuần *
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
                                <span className="text-sm font-semibold text-primary w-28 text-right shrink-0">
                                  {form.painHoursPerWeek} giờ/tuần bị mất
                                </span>
                              </div>
                            </div>
                          </>
                        )}

                        {/* Details textarea */}
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                            Chi tiết thêm (không bắt buộc)
                          </label>
                          <textarea
                            rows={3}
                            value={form.details}
                            onChange={(e) =>
                              setForm({ ...form, details: e.target.value })
                            }
                            placeholder="Ví dụ: Mỗi ngày 3 nhân viên mất 4 giờ nhập đơn từ Shopee sang MISA..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
                          />
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

                      <div className="flex gap-3 mt-6">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-3.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                        >
                          ← Quay lại
                        </button>
                        <button
                          type="submit"
                          disabled={submitting || !canSubmit3}
                          className="flex-1 bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                        >
                          {submitting ? "Đang gửi..." : "Gửi & Nhận audit miễn phí"}
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
                      </div>

                      <p className="text-xs text-center text-slate-500 mt-4">
                        Không spam. Không chia sẻ thông tin cho bên thứ ba.
                      </p>
                    </div>
                  )}
                </form>
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
                      title: "Cuộc gọi audit 30 phút",
                      desc: "Mình nghe bạn kể về quy trình hàng ngày, tìm ra chỗ đang mất thời gian nhất.",
                    },
                    {
                      icon: "📊",
                      title: "Audit Report trong 24h",
                      desc: "Báo cáo chi tiết: quy trình nào nên tự động, tiết kiệm bao nhiêu giờ/tháng, ROI dự kiến.",
                    },
                    {
                      icon: "📋",
                      title: "Proposal 3 gói trong 48h",
                      desc: "Đề xuất cụ thể: workflow nào, timeline bao lâu, chi phí bao nhiêu. Không jargon.",
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
