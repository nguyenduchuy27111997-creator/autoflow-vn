"use client";

import SectionHeader from "./ui/SectionHeader";
import Container from "./ui/Container";
import Card from "./ui/Card";

const steps = [
  {
    number: "01",
    title: "Audit miễn phí",
    duration: "30 phút",
    description:
      "Gọi video hoặc gặp trực tiếp. Mình nghe bạn kể về quy trình hàng ngày, tìm ra đâu là chỗ đang mất thời gian nhất. Bạn nhận được Audit Report trong 24h — miễn phí, không ràng buộc.",
    deliverable: "Audit Report chi tiết",
  },
  {
    number: "02",
    title: "Đề xuất giải pháp",
    duration: "48 giờ",
    description:
      "Dựa trên audit, mình gửi proposal cụ thể: workflow nào nên tự động, timeline bao lâu, chi phí bao nhiêu, ROI dự kiến. Không jargon, toàn số liệu.",
    deliverable: "Proposal 3 gói + ROI Calculator",
  },
  {
    number: "03",
    title: "Build & Training",
    duration: "1–8 tuần tùy gói",
    description:
      "Bạn duyệt, mình build. Mỗi workflow hoàn thành đều có video Loom hướng dẫn. Training team trực tiếp. Bạn không cần biết code — chỉ cần biết bấm nút.",
    deliverable: "Workflows chạy thật + Video SOP",
  },
  {
    number: "04",
    title: "Bàn giao & Support",
    duration: "7–30 ngày",
    description:
      "Test kỹ, bàn giao full tài liệu. Support sau bàn giao để đảm bảo mọi thứ chạy trơn tru. Tháng đầu retainer giảm 20% nếu bạn muốn mình tiếp tục hỗ trợ.",
    deliverable: "Tài liệu vận hành + Retainer option",
  },
];

export default function Process() {
  return (
    <Container id="quy-trinh" className="py-20 md:py-28">
        {/* Header */}
        <SectionHeader
          badge="Quy trình rõ ràng"
          title="4 bước."
          gradientText="Không bất ngờ."
          subtitle="Bạn biết trước mọi thứ sẽ diễn ra như thế nào — từ cuộc gọi đầu tiên đến lúc bàn giao."
          className="mb-16"
        />

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 border-t-2 border-dashed border-slate-200 z-10" />
              )}

              <Card className="p-7 h-full">
                {/* Number */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display font-extrabold text-3xl text-primary/15 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Deliverable */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-primary flex items-center gap-1.5">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 7l3 3 6-6" />
                    </svg>
                    {step.deliverable}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
    </Container>
  );
}
