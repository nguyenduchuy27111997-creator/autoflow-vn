"use client";

import SectionHeader from "./ui/SectionHeader";

const caseStudies = [
  {
    industry: "E-commerce",
    company: "Shop thời trang online",
    employees: "15 nhân viên",
    before: {
      hours: "5 giờ/ngày nhập đơn từ 3 sàn",
      errors: "8–10 lỗi sai tồn kho/tuần",
      cost: "2 nhân viên chỉ làm việc nhập liệu",
    },
    after: {
      hours: "0 giờ — tự động 100%",
      errors: "0 lỗi — đồng bộ real-time",
      cost: "2 nhân viên chuyển sang chăm khách",
    },
    result: "Tiết kiệm 18 giờ/tuần, tăng 23% doanh thu nhờ chăm khách tốt hơn",
    timeline: "3 tuần triển khai",
    package: "Growth — 28 triệu đồng",
  },
  {
    industry: "Giáo dục",
    company: "Chuỗi trung tâm tiếng Anh",
    employees: "45 nhân viên · 8 chi nhánh",
    before: {
      hours: "3 giờ/ngày gọi nhắc lịch học viên",
      errors: "15% học viên miss lịch học/tháng",
      cost: "1 người chỉ để tổng hợp báo cáo 8 chi nhánh",
    },
    after: {
      hours: "Zalo OA tự nhắc lịch 24h trước",
      errors: "Miss lịch giảm còn 3%",
      cost: "Báo cáo 8 chi nhánh tự động mỗi sáng thứ 2",
    },
    result: "Giảm 80% miss lịch, tiết kiệm 1 nhân sự full-time",
    timeline: "4 tuần triển khai",
    package: "Scale — 65 triệu đồng",
  },
];

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
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Header bar */}
              <div className="px-8 py-4 bg-slate-900 flex flex-wrap items-center gap-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {cs.industry}
                </span>
                <span className="text-sm font-semibold text-white">
                  {cs.company}
                </span>
                <span className="text-xs text-slate-400">
                  {cs.employees}
                </span>
                <span className="text-xs text-slate-400 ml-auto">
                  {cs.package}
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
                    {Object.values(cs.before).map((item, i) => (
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
                    {Object.values(cs.after).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Result highlight */}
              <div className="px-8 py-4 bg-accent/5 border-t border-accent/10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-semibold text-accent">
                  📈 {cs.result}
                </p>
                <span className="text-xs text-slate-400">
                  ⏱ {cs.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
