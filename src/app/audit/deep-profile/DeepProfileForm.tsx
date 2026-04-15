"use client";

import { useState } from "react";
import Link from "next/link";

// ── Constants ──────────────────────────────────────────────────────────────

const TOOLS = {
  ecommerce: [
    "Shopee",
    "TikTok Shop",
    "Sapo",
    "Haravan",
    "Lazada",
    "WooCommerce/Shopify",
    "Website custom",
  ],
  erp: ["MISA", "SAP", "Bravo", "Excel only", "Custom"],
  pos: ["KiotViet", "iPOS", "MISA CukCuk", "Shopee Food", "Custom"],
  communication: ["Zalo OA", "Facebook Messenger", "Email", "Telegram", "Viber"],
  crm: ["HubSpot", "Salesforce", "Notion", "Airtable", "Google Sheets", "None"],
} as const;

const PAIN_OPTIONS = [
  { value: "manual_entry", label: "Nhập liệu thủ công quá nhiều" },
  { value: "lead_drop", label: "Lead rơi vì không follow-up kịp" },
  { value: "monthly_report", label: "Báo cáo cuối tháng mất nhiều ngày" },
  { value: "data_sync", label: "Đồng bộ dữ liệu giữa các hệ thống" },
  { value: "slow_cs", label: "Chăm sóc khách hàng chậm" },
  { value: "other", label: "Khác" },
] as const;

type PainValue = (typeof PAIN_OPTIONS)[number]["value"];

const BUDGET_OPTIONS = [
  { value: "lt_5m", label: "< 5 triệu/tháng" },
  { value: "5_15m", label: "5–15 triệu/tháng" },
  { value: "15_30m", label: "15–30 triệu/tháng" },
  { value: "30m_plus", label: "30 triệu+/tháng" },
  { value: "unclear", label: "Chưa rõ" },
] as const;

const TIMELINE_OPTIONS = [
  { value: "asap", label: "ASAP (< 1 tháng)" },
  { value: "1_3_months", label: "1–3 tháng" },
  { value: "3_6_months", label: "3–6 tháng" },
  { value: "exploring", label: "Đang tìm hiểu" },
] as const;

const AUTHORITY_OPTIONS = [
  { value: "self", label: "Tự quyết" },
  { value: "need_approval", label: "Cần approve sếp" },
  { value: "multi_level", label: "Multi-level approval" },
] as const;

const ATTEMPTED_OPTIONS = [
  { value: "none", label: "Chưa thử gì" },
  { value: "zapier", label: "Zapier / Make" },
  { value: "freelancer", label: "Freelancer" },
  { value: "manual", label: "Tự làm tay" },
  { value: "other", label: "Khác" },
] as const;

const SUCCESS_CRITERIA_PLACEHOLDERS: Record<string, string> = {
  ecommerce:
    "VD: 0 lỗi nhập đơn, report tồn kho real-time, tiết kiệm 20h/tuần nhập liệu",
  fnb: "VD: giảm no-show từ 20% xuống 5%, báo cáo doanh thu chi nhánh tự động mỗi tối",
  hr: "VD: giảm 50% thời gian onboarding, JD publish tự động, tracking ứng viên không cần Excel",
  healthcare:
    "VD: nhắc nhở tái khám tự động, giảm no-show 30%, báo cáo lịch hẹn hàng tuần",
  education:
    "VD: 0 học viên bỏ lỡ lịch học, tự động gửi tài liệu, báo cáo điểm danh real-time",
  other:
    "Mô tả 2–3 chỉ số cụ thể bạn muốn cải thiện trong 3 tháng đầu triển khai",
};

// ── Industry Drilldown sub-components ─────────────────────────────────────

function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
      >
        <option value="">-- Chọn --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function EcommerceFields({
  details,
  setDetails,
}: {
  details: Record<string, string>;
  setDetails: (d: Record<string, string>) => void;
}) {
  return (
    <div className="space-y-4">
      <InputField
        label="Đơn/ngày trung bình?"
        type="number"
        value={details.orders_per_day ?? ""}
        onChange={(v) => setDetails({ ...details, orders_per_day: v })}
        placeholder="VD: 150"
      />
      <SelectField
        label="SKU count?"
        value={details.sku_count ?? ""}
        onChange={(v) => setDetails({ ...details, sku_count: v })}
        options={[
          { value: "lt_50", label: "< 50 SKU" },
          { value: "50_500", label: "50–500 SKU" },
          { value: "500_5k", label: "500–5.000 SKU" },
          { value: "5k_plus", label: "5.000+ SKU" },
        ]}
      />
      <SelectField
        label="Return rate?"
        value={details.return_rate ?? ""}
        onChange={(v) => setDetails({ ...details, return_rate: v })}
        options={[
          { value: "lt_5", label: "< 5%" },
          { value: "5_15", label: "5–15%" },
          { value: "gt_15", label: "15%+" },
          { value: "unknown", label: "Không biết" },
        ]}
      />
    </div>
  );
}

function FnbFields({
  details,
  setDetails,
}: {
  details: Record<string, string>;
  setDetails: (d: Record<string, string>) => void;
}) {
  return (
    <div className="space-y-4">
      <InputField
        label="Số chi nhánh?"
        type="number"
        value={details.branch_count ?? ""}
        onChange={(v) => setDetails({ ...details, branch_count: v })}
        placeholder="VD: 3"
      />
      <InputField
        label="Booking/ngày trung bình?"
        type="number"
        value={details.bookings_per_day ?? ""}
        onChange={(v) => setDetails({ ...details, bookings_per_day: v })}
        placeholder="VD: 80"
      />
      <SelectField
        label="No-show rate?"
        value={details.no_show_rate ?? ""}
        onChange={(v) => setDetails({ ...details, no_show_rate: v })}
        options={[
          { value: "lt_5", label: "< 5%" },
          { value: "5_15", label: "5–15%" },
          { value: "gt_15", label: "15%+" },
          { value: "dont_track", label: "Không theo dõi" },
        ]}
      />
    </div>
  );
}

function HrFields({
  details,
  setDetails,
}: {
  details: Record<string, string>;
  setDetails: (d: Record<string, string>) => void;
}) {
  return (
    <div className="space-y-4">
      <InputField
        label="Ứng viên/tháng?"
        type="number"
        value={details.candidates_per_month ?? ""}
        onChange={(v) => setDetails({ ...details, candidates_per_month: v })}
        placeholder="VD: 30"
      />
      <SelectField
        label="Kênh tuyển chính?"
        value={details.main_channel ?? ""}
        onChange={(v) => setDetails({ ...details, main_channel: v })}
        options={[
          { value: "topcv", label: "TopCV" },
          { value: "linkedin", label: "LinkedIn" },
          { value: "facebook", label: "Facebook" },
          { value: "referral", label: "Referral" },
          { value: "mixed", label: "Mixed" },
        ]}
      />
      <InputField
        label="Onboarding mất bao nhiêu ngày?"
        type="number"
        value={details.onboarding_days ?? ""}
        onChange={(v) => setDetails({ ...details, onboarding_days: v })}
        placeholder="VD: 14"
      />
    </div>
  );
}

function HealthcareFields({
  details,
  setDetails,
}: {
  details: Record<string, string>;
  setDetails: (d: Record<string, string>) => void;
}) {
  return (
    <div className="space-y-4">
      <InputField
        label="Lịch hẹn/tuần?"
        type="number"
        value={details.appointments_per_week ?? ""}
        onChange={(v) =>
          setDetails({ ...details, appointments_per_week: v })
        }
        placeholder="VD: 120"
      />
      <SelectField
        label="No-show rate?"
        value={details.no_show_rate ?? ""}
        onChange={(v) => setDetails({ ...details, no_show_rate: v })}
        options={[
          { value: "lt_5", label: "< 5%" },
          { value: "5_15", label: "5–15%" },
          { value: "gt_15", label: "15%+" },
          { value: "dont_track", label: "Không theo dõi" },
        ]}
      />
      <div>
        <label className="text-sm font-medium text-slate-700 mb-1.5 block">
          Kênh nhắc nhở hiện tại? (chọn tất cả)
        </label>
        <div className="space-y-2">
          {["Zalo", "SMS", "Call", "None"].map((ch) => {
            const key = "reminder_channels";
            const current = (details[key] ?? "").split(",").filter(Boolean);
            const checked = current.includes(ch);
            return (
              <label key={ch} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    const next = checked
                      ? current.filter((x) => x !== ch)
                      : [...current, ch];
                    setDetails({ ...details, [key]: next.join(",") });
                  }}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm text-slate-700">{ch}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function EducationFields({
  details,
  setDetails,
}: {
  details: Record<string, string>;
  setDetails: (d: Record<string, string>) => void;
}) {
  return (
    <div className="space-y-4">
      <InputField
        label="Học viên active hiện tại?"
        type="number"
        value={details.active_students ?? ""}
        onChange={(v) => setDetails({ ...details, active_students: v })}
        placeholder="VD: 200"
      />
      <SelectField
        label="Kênh lead chính?"
        value={details.main_channel ?? ""}
        onChange={(v) => setDetails({ ...details, main_channel: v })}
        options={[
          { value: "fb_ads", label: "FB Ads" },
          { value: "referral", label: "Referral" },
          { value: "walk_in", label: "Walk-in" },
          { value: "google", label: "Google" },
          { value: "mixed", label: "Mixed" },
        ]}
      />
      <SelectField
        label="Miss-class rate?"
        value={details.miss_class_rate ?? ""}
        onChange={(v) => setDetails({ ...details, miss_class_rate: v })}
        options={[
          { value: "lt_10", label: "< 10%" },
          { value: "10_25", label: "10–25%" },
          { value: "gt_25", label: "25%+" },
          { value: "dont_track", label: "Không theo dõi" },
        ]}
      />
    </div>
  );
}

function OtherFields({
  details,
  setDetails,
}: {
  details: Record<string, string>;
  setDetails: (d: Record<string, string>) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
        Mô tả 3 metrics quan trọng nhất của business anh/chị
      </label>
      <textarea
        rows={4}
        value={details.key_metrics ?? ""}
        onChange={(e) =>
          setDetails({ ...details, key_metrics: e.target.value })
        }
        placeholder="VD: 1. Số đơn/ngày 2. Tỉ lệ hoàn hàng 3. Thời gian xử lý đơn..."
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
      />
    </div>
  );
}

// ── Section wrapper ────────────────────────────────────────────────────────

function Section({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
          {number}
        </div>
        <div>
          <h2 className="font-display font-bold text-lg text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

// ── Checkbox group ─────────────────────────────────────────────────────────

function CheckboxGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: readonly string[];
  selected: string[];
  onToggle: (val: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border cursor-pointer transition-all text-sm ${
              selected.includes(opt)
                ? "border-primary bg-primary-light text-primary font-medium"
                : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => onToggle(opt)}
              className="sr-only"
            />
            <span
              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                selected.includes(opt)
                  ? "bg-primary border-primary"
                  : "border-slate-300"
              }`}
            >
              {selected.includes(opt) && (
                <svg
                  width="10"
                  height="10"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                </svg>
              )}
            </span>
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

// ── Radio group ────────────────────────────────────────────────────────────

function RadioGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-2 block">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border cursor-pointer transition-all text-sm ${
              value === opt.value
                ? "border-primary bg-primary-light text-primary font-medium"
                : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            <input
              type="radio"
              name={label}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

interface Props {
  auditId: string;
  industry: string;
  painPrimary: string | null;
}

export default function DeepProfileForm({
  auditId,
  industry,
  painPrimary,
}: Props) {
  // Section A — Tools
  const [toolsEcommerce, setToolsEcommerce] = useState<string[]>([]);
  const [toolsErp, setToolsErp] = useState<string[]>([]);
  const [toolsPos, setToolsPos] = useState<string[]>([]);
  const [toolsCommunication, setToolsCommunication] = useState<string[]>([]);
  const [toolsCrm, setToolsCrm] = useState<string[]>([]);

  // Section B — Secondary pains
  const [secondaryPains, setSecondaryPains] = useState<
    Record<PainValue, number | null>
  >({} as Record<PainValue, number | null>);

  // Section C — Readiness
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [decisionAuthority, setDecisionAuthority] = useState("");
  const [attemptedSolutions, setAttemptedSolutions] = useState<string[]>([]);
  const [priorBlockers, setPriorBlockers] = useState("");

  // Section D — Industry drilldown
  const [industryDetails, setIndustryDetails] = useState<
    Record<string, string>
  >({});

  // Section E — Success criteria
  const [successCriteria, setSuccessCriteria] = useState("");

  // Submit state
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helpers
  const toggleTool = (
    list: string[],
    setList: (v: string[]) => void,
    val: string
  ) =>
    setList(
      list.includes(val) ? list.filter((x) => x !== val) : [...list, val]
    );

  const togglePain = (pain: PainValue) => {
    setSecondaryPains((prev) => {
      const next = { ...prev };
      if (pain in next) {
        delete next[pain];
      } else {
        next[pain] = null;
      }
      return next;
    });
  };

  const setPainHours = (pain: PainValue, hours: number) => {
    setSecondaryPains((prev) => ({ ...prev, [pain]: hours }));
  };

  const toggleAttempted = (val: string) =>
    setAttemptedSolutions((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );

  // Show prior_blockers textarea if user has tried something
  const showPriorBlockers = attemptedSolutions.some((v) =>
    ["zapier", "freelancer", "manual"].includes(v)
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const secondaryPainsArray = Object.entries(secondaryPains).map(
      ([pain, hours]) => ({ pain, hours_per_week: hours })
    );

    try {
      const res = await fetch(`/api/audit/${auditId}/tier2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tools_ecommerce: toolsEcommerce,
          tools_erp: toolsErp,
          tools_pos: toolsPos,
          tools_communication: toolsCommunication,
          tools_crm: toolsCrm,
          secondary_pains: secondaryPainsArray,
          budget_range: budgetRange || null,
          timeline: timeline || null,
          decision_authority: decisionAuthority || null,
          attempted_solutions: attemptedSolutions,
          prior_blockers: priorBlockers || null,
          industry_details: industryDetails,
          success_criteria: successCriteria || null,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(
          (data as { error?: string }).error ??
            "Có lỗi xảy ra. Vui lòng thử lại."
        );
      }
    } catch {
      setError("Không thể kết nối. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Success state ────────────────────────────────────────────────────────
  if (submitted) {
    return (
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
          Cảm ơn! Huy sẽ gọi anh/chị trong 2 giờ.
        </h2>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          Với thông tin chi tiết này, audit report sẽ được cá nhân hóa chính
          xác cho business của bạn.
        </p>

        <div className="p-5 bg-slate-50 rounded-xl max-w-sm mx-auto mb-8 text-left">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Timeline tiếp theo:
          </p>
          <div className="space-y-2.5">
            {[
              {
                icon: "📊",
                text: "Nhận audit report cá nhân hóa (trong 2h)",
              },
              { icon: "📞", text: "30-min discovery call với Huy" },
              { icon: "📋", text: "Đề xuất workflow cụ thể" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-lg shrink-0">{item.icon}</span>
                <span className="text-sm text-slate-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
        >
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit}>
      {/* Section A — Tools Fingerprint */}
      <Section
        number="A"
        title="Tools hiện tại"
        subtitle="Anh/chị đang dùng công cụ nào? (chọn tất cả phù hợp)"
      >
        <div className="space-y-6">
          {/* E-commerce — hide for F&B */}
          {industry !== "fnb" && (
            <CheckboxGroup
              label="E-commerce platforms"
              options={TOOLS.ecommerce}
              selected={toolsEcommerce}
              onToggle={(v) => toggleTool(toolsEcommerce, setToolsEcommerce, v)}
            />
          )}
          <CheckboxGroup
            label="ERP / Kế toán"
            options={TOOLS.erp}
            selected={toolsErp}
            onToggle={(v) => toggleTool(toolsErp, setToolsErp, v)}
          />
          {/* POS — show for F&B and retail */}
          {(industry === "fnb" || industry === "ecommerce") && (
            <CheckboxGroup
              label="POS / F&B"
              options={TOOLS.pos}
              selected={toolsPos}
              onToggle={(v) => toggleTool(toolsPos, setToolsPos, v)}
            />
          )}
          <CheckboxGroup
            label="Kênh giao tiếp"
            options={TOOLS.communication}
            selected={toolsCommunication}
            onToggle={(v) =>
              toggleTool(toolsCommunication, setToolsCommunication, v)
            }
          />
          <CheckboxGroup
            label="CRM"
            options={TOOLS.crm}
            selected={toolsCrm}
            onToggle={(v) => toggleTool(toolsCrm, setToolsCrm, v)}
          />
        </div>
      </Section>

      {/* Section B — Secondary Pains */}
      <Section
        number="B"
        title="Pains khác"
        subtitle="Ngoài pain chính, còn vấn đề nào khác?"
      >
        {painPrimary && (
          <div className="mb-4 p-3 bg-slate-50 rounded-xl text-sm text-slate-600">
            Pain chính đã captured:{" "}
            <span className="font-semibold text-slate-900">
              {PAIN_OPTIONS.find((p) => p.value === painPrimary)?.label ??
                painPrimary}
            </span>
          </div>
        )}
        <div className="space-y-4">
          {PAIN_OPTIONS.filter((p) => p.value !== painPrimary).map((opt) => {
            const checked = opt.value in secondaryPains;
            const hours = secondaryPains[opt.value as PainValue];
            return (
              <div key={opt.value}>
                <label className="flex items-center gap-3 cursor-pointer">
                  <span
                    onClick={() => togglePain(opt.value as PainValue)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 cursor-pointer ${
                      checked ? "bg-primary border-primary" : "border-slate-300"
                    }`}
                  >
                    {checked && (
                      <svg
                        width="11"
                        height="11"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      >
                        <path d="M1.5 5.5l2.5 2.5 5-5" />
                      </svg>
                    )}
                  </span>
                  <span
                    className="text-sm text-slate-700 cursor-pointer"
                    onClick={() => togglePain(opt.value as PainValue)}
                  >
                    {opt.label}
                  </span>
                </label>
                {checked && (
                  <div className="mt-3 ml-8 flex items-center gap-4">
                    <input
                      type="range"
                      min={1}
                      max={40}
                      value={hours ?? 5}
                      onChange={(e) =>
                        setPainHours(
                          opt.value as PainValue,
                          Number(e.target.value)
                        )
                      }
                      className="flex-1 accent-primary"
                    />
                    <span className="text-sm font-semibold text-primary w-28 text-right shrink-0">
                      {hours ?? 5} giờ/tuần
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Section C — Readiness Signals */}
      <Section
        number="C"
        title="Sẵn sàng triển khai"
        subtitle="Để tư vấn phù hợp với ngân sách và timeline"
      >
        <div className="space-y-6">
          <RadioGroup
            label="Ngân sách dự kiến cho automation?"
            options={BUDGET_OPTIONS}
            value={budgetRange}
            onChange={setBudgetRange}
          />
          <RadioGroup
            label="Timeline mong muốn?"
            options={TIMELINE_OPTIONS}
            value={timeline}
            onChange={setTimeline}
          />
          <RadioGroup
            label="Ai quyết định ngân sách?"
            options={AUTHORITY_OPTIONS}
            value={decisionAuthority}
            onChange={setDecisionAuthority}
          />

          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">
              Đã từng thử giải pháp nào chưa? (chọn tất cả)
            </label>
            <div className="space-y-2">
              {ATTEMPTED_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={attemptedSolutions.includes(opt.value)}
                    onChange={() => toggleAttempted(opt.value)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-sm text-slate-700">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {showPriorBlockers && (
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Tại sao giải pháp cũ không work?
              </label>
              <textarea
                rows={3}
                value={priorBlockers}
                onChange={(e) => setPriorBlockers(e.target.value)}
                placeholder="VD: Zapier không handle được logic phức tạp, freelancer làm xong không maintain được..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
              />
            </div>
          )}
        </div>
      </Section>

      {/* Section D — Industry Drilldown */}
      <Section
        number="D"
        title="Chi tiết ngành"
        subtitle="3 câu hỏi về metrics quan trọng của business"
      >
        {industry === "ecommerce" && (
          <EcommerceFields
            details={industryDetails}
            setDetails={setIndustryDetails}
          />
        )}
        {industry === "fnb" && (
          <FnbFields
            details={industryDetails}
            setDetails={setIndustryDetails}
          />
        )}
        {industry === "hr" && (
          <HrFields
            details={industryDetails}
            setDetails={setIndustryDetails}
          />
        )}
        {industry === "healthcare" && (
          <HealthcareFields
            details={industryDetails}
            setDetails={setIndustryDetails}
          />
        )}
        {industry === "education" && (
          <EducationFields
            details={industryDetails}
            setDetails={setIndustryDetails}
          />
        )}
        {(industry === "other" ||
          !["ecommerce", "fnb", "hr", "healthcare", "education"].includes(
            industry
          )) && (
          <OtherFields
            details={industryDetails}
            setDetails={setIndustryDetails}
          />
        )}
      </Section>

      {/* Section E — Success Criteria */}
      <Section
        number="E"
        title="Tiêu chí thành công"
        subtitle="Nếu workflow chạy ngon trong 3 tháng, anh/chị nhìn vào đâu để biết thành công?"
      >
        <textarea
          rows={4}
          value={successCriteria}
          onChange={(e) => setSuccessCriteria(e.target.value)}
          placeholder={
            SUCCESS_CRITERIA_PLACEHOLDERS[industry] ??
            SUCCESS_CRITERIA_PLACEHOLDERS.other
          }
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
        />
      </Section>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Submit */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 text-base"
        >
          {submitting ? "Đang gửi..." : "Gửi deep profile"}
          {!submitting && (
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 9h8M9 5l4 4-4 4" />
            </svg>
          )}
        </button>
      </div>
      <p className="text-xs text-center text-slate-400 mt-4">
        Tất cả trường không bắt buộc. Bạn có thể submit với thông tin hiện tại.
      </p>
    </form>
  );
}
