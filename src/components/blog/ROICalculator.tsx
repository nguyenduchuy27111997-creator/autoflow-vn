"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(5);
  const [hoursManual, setHoursManual] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(80000); // VND per hour

  const monthlyCostManual = employees * hoursManual * 4 * hourlyCost;
  const monthlyCostAuto = monthlyCostManual * 0.15; // 85% savings
  const monthlySavings = monthlyCostManual - monthlyCostAuto;
  const yearlySavings = monthlySavings * 12;
  const automationCost = 15000000; // average project cost
  const paybackMonths = Math.ceil(automationCost / monthlySavings);
  const roi = Math.round(((yearlySavings - automationCost) / automationCost) * 100);

  const formatVND = (n: number) =>
    new Intl.NumberFormat("vi-VN").format(Math.round(n)) + "đ";

  return (
    <div className="my-10 not-prose bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h4 className="font-display font-bold text-slate-900">ROI Calculator</h4>
          <p className="text-xs text-slate-500">Tính tiết kiệm khi tự động hóa</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-5">
          <SliderInput
            label="Số nhân viên liên quan"
            value={employees}
            onChange={setEmployees}
            min={1}
            max={30}
            suffix=" người"
          />
          <SliderInput
            label="Giờ thủ công / tuần / người"
            value={hoursManual}
            onChange={setHoursManual}
            min={2}
            max={40}
            suffix=" giờ"
          />
          <SliderInput
            label="Chi phí / giờ nhân viên"
            value={hourlyCost}
            onChange={setHourlyCost}
            min={30000}
            max={200000}
            step={5000}
            suffix="đ"
            format={(v) => new Intl.NumberFormat("vi-VN").format(v)}
          />
        </div>

        {/* Results */}
        <div className="space-y-3">
          <ResultRow label="Chi phí thủ công / tháng" value={formatVND(monthlyCostManual)} color="text-red-600" />
          <ResultRow label="Chi phí sau automation / tháng" value={formatVND(monthlyCostAuto)} color="text-emerald-600" />
          <div className="h-px bg-slate-200 my-1" />
          <ResultRow label="Tiết kiệm / tháng" value={formatVND(monthlySavings)} color="text-primary" large />
          <ResultRow label="Tiết kiệm / năm" value={formatVND(yearlySavings)} color="text-primary" />
          <div className="h-px bg-slate-200 my-1" />
          <ResultRow label="Hoàn vốn sau" value={`~${paybackMonths} tháng`} color="text-amber-600" />
          <ResultRow label="ROI năm đầu" value={`${roi > 0 ? "+" : ""}${roi}%`} color="text-emerald-600" large />
        </div>
      </div>

      <p className="text-[10px] text-slate-400 mt-4 text-center">
        * Ước tính dựa trên tiết kiệm 85% thời gian thủ công. Chi phí triển khai trung bình 15 triệu VNĐ. Kết quả thực tế có thể khác.
      </p>
    </div>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix = "",
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  format?: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <span className="text-sm font-bold text-primary tabular-nums">
          {format ? format(value) : value}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200 accent-primary"
      />
    </div>
  );
}

function ResultRow({
  label,
  value,
  color,
  large,
}: {
  label: string;
  value: string;
  color: string;
  large?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-600">{label}</span>
      <span className={`font-display font-bold tabular-nums ${color} ${large ? "text-xl" : "text-sm"}`}>
        {value}
      </span>
    </div>
  );
}
