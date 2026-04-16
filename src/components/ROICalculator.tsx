"use client";

import { useState, useMemo } from "react";

const HOURLY_COSTS = [
  { label: "50.000 ₫/giờ", value: 50000 },
  { label: "80.000 ₫/giờ", value: 80000 },
  { label: "100.000 ₫/giờ", value: 100000 },
  { label: "150.000 ₫/giờ", value: 150000 },
];

const WORKFLOW_TIERS = [
  { label: "Đơn giản — 2 triệu/workflow", value: 2000000 },
  { label: "Trung bình — 4 triệu/workflow", value: 4000000 },
  { label: "Phức tạp — 7 triệu/workflow", value: 7000000 },
];

function formatTrieu(amount: number): string {
  const trieu = amount / 1000000;
  return trieu % 1 === 0 ? `${trieu}` : trieu.toFixed(1);
}

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyIndex, setHourlyIndex] = useState(1); // 80K default
  const [tierIndex, setTierIndex] = useState(1); // Trung bình default

  const hourlyCost = HOURLY_COSTS[hourlyIndex].value;
  const workflowCost = WORKFLOW_TIERS[tierIndex].value;

  const results = useMemo(() => {
    const monthlySavings = hoursPerWeek * 4 * hourlyCost;
    const yearlySavings = monthlySavings * 12;
    const paybackMonths =
      monthlySavings > 0
        ? Math.ceil(workflowCost / monthlySavings)
        : null;
    const roi =
      yearlySavings > 0
        ? Math.round(((yearlySavings - workflowCost) / workflowCost) * 100)
        : 0;
    return { monthlySavings, yearlySavings, paybackMonths, roi };
  }, [hoursPerWeek, hourlyCost, workflowCost]);

  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4">
            Tính toán ROI
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-3">
            Bạn tiết kiệm được bao nhiêu?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Nhập thông số thực tế của doanh nghiệp — xem ngay kết quả tiết kiệm khi tự động hóa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Inputs */}
          <div className="space-y-8">
            {/* Slider */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Số giờ thủ công mỗi tuần
                <span className="ml-2 text-primary font-bold text-base">
                  {hoursPerWeek} giờ
                </span>
              </label>
              <input
                type="range"
                min={1}
                max={40}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-primary"
                aria-label="Số giờ thủ công mỗi tuần"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1 giờ</span>
                <span>40 giờ</span>
              </div>
            </div>

            {/* Hourly cost select */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Chi phí 1 giờ nhân viên
              </label>
              <div className="grid grid-cols-2 gap-2">
                {HOURLY_COSTS.map((opt, i) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setHourlyIndex(i)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all border ${
                      hourlyIndex === i
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/25"
                        : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Workflow tier radio */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Gói workflow
              </label>
              <div className="space-y-2">
                {WORKFLOW_TIERS.map((tier, i) => (
                  <label
                    key={tier.value}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                      tierIndex === i
                        ? "bg-primary/10 border-primary text-white"
                        : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <input
                      type="radio"
                      name="workflow-tier"
                      checked={tierIndex === i}
                      onChange={() => setTierIndex(i)}
                      className="accent-primary"
                    />
                    <span className="text-sm font-medium">{tier.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 space-y-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
              Kết quả ước tính
            </h3>

            <div className="space-y-5">
              {/* Monthly savings */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Tiết kiệm mỗi tháng</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {hoursPerWeek} giờ × 4 tuần × {(hourlyCost / 1000).toFixed(0)}K
                  </p>
                </div>
                <span className="font-display font-extrabold text-2xl text-white whitespace-nowrap">
                  {formatTrieu(results.monthlySavings)} tr
                </span>
              </div>

              <div className="border-t border-slate-700" />

              {/* Yearly savings */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Tiết kiệm mỗi năm</p>
                </div>
                <span className="font-display font-extrabold text-2xl text-primary whitespace-nowrap">
                  {formatTrieu(results.yearlySavings)} tr
                </span>
              </div>

              <div className="border-t border-slate-700" />

              {/* Payback */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Hoàn vốn trong</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Đầu tư {formatTrieu(workflowCost)} tr / workflow
                  </p>
                </div>
                <span className="font-display font-extrabold text-2xl text-white whitespace-nowrap">
                  {results.paybackMonths !== null
                    ? `${results.paybackMonths} tháng`
                    : "—"}
                </span>
              </div>

              <div className="border-t border-slate-700" />

              {/* ROI */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">ROI sau 1 năm</p>
                </div>
                <span
                  className={`font-display font-extrabold text-2xl whitespace-nowrap ${
                    results.roi >= 0 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {results.roi >= 0 ? "+" : ""}
                  {results.roi}%
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/audit"
              className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 text-sm mt-2"
            >
              Muốn audit cụ thể hơn? Nhận tư vấn miễn phí
            </a>
            <p className="text-xs text-slate-500 text-center -mt-3">
              Ước tính mang tính tham khảo. Kết quả thực tế phụ thuộc vào quy trình cụ thể.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
