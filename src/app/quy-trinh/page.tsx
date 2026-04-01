"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Audit miễn phí",
    duration: "30 phút",
    description:
      "Gọi video hoặc gặp trực tiếp. Mình nghe bạn kể về quy trình hàng ngày, tìm ra đâu là chỗ đang mất thời gian nhất.",
    deliverables: [
      "Audit Report chi tiết (gửi trong 24h)",
      "Sơ đồ quy trình hiện tại vs. đề xuất",
      "Danh sách pain points ưu tiên",
    ],
    note: "Miễn phí, không ràng buộc. Bạn nhận report dù có tiếp tục hay không.",
    color: "#6366F1",
  },
  {
    number: "02",
    title: "Đề xuất giải pháp",
    duration: "48 giờ",
    description:
      "Dựa trên audit, mình gửi proposal cụ thể: workflow nào nên tự động, timeline bao lâu, chi phí bao nhiêu, ROI dự kiến.",
    deliverables: [
      "Proposal 3 gói (Starter / Growth / Scale)",
      "ROI Calculator cho doanh nghiệp bạn",
      "Timeline chi tiết từng workflow",
    ],
    note: "Không jargon, toàn số liệu. Bạn duyệt xong mới bắt đầu.",
    color: "#0EA5E9",
  },
  {
    number: "03",
    title: "Build & Training",
    duration: "1–8 tuần tùy gói",
    description:
      "Bạn duyệt, mình build. Mỗi workflow hoàn thành đều có video Loom hướng dẫn. Training team trực tiếp.",
    deliverables: [
      "Workflows chạy thật trên n8n",
      "Video SOP cho từng workflow",
      "Training session cho team (1–2 buổi)",
    ],
    note: "Bạn không cần biết code — chỉ cần biết bấm nút.",
    color: "#10B981",
  },
  {
    number: "04",
    title: "Bàn giao & Support",
    duration: "7–30 ngày support",
    description:
      "Test kỹ, bàn giao full tài liệu. Support sau bàn giao để đảm bảo mọi thứ chạy trơn tru.",
    deliverables: [
      "Tài liệu vận hành chi tiết",
      "Monitoring dashboard",
      "Support 7–30 ngày (tùy gói)",
    ],
    note: "Tháng đầu retainer giảm 20% nếu bạn muốn mình tiếp tục hỗ trợ.",
    color: "#F59E0B",
  },
];

const faqs = [
  {
    q: "Mình có phải chuẩn bị gì trước buổi audit không?",
    a: "Không cần chuẩn bị kỹ. Cứ kể lại quy trình hàng ngày — mình sẽ hỏi để hiểu rõ hơn. Nếu có sẵn SOP hoặc danh sách công cụ đang dùng thì càng tốt, nhưng không bắt buộc.",
  },
  {
    q: "Từ audit đến lúc workflow chạy mất bao lâu?",
    a: "Nhanh nhất 1 tuần (gói Starter, 1 workflow). Phức tạp nhất 8 tuần (gói Scale, 8–12 workflows). Mình luôn cam kết timeline cụ thể trước khi bắt đầu build.",
  },
  {
    q: "Nếu workflow không chạy đúng sau bàn giao thì sao?",
    a: "Mình support 7–30 ngày sau bàn giao (tùy gói). Nếu lỗi do mình build thì fix miễn phí. Ngoài ra có gói retainer 8–15 triệu/tháng nếu cần hỗ trợ dài hạn.",
  },
  {
    q: "Mình có thể thay đổi yêu cầu giữa chừng không?",
    a: "Được — với điều kiện change request nhỏ và trong scope. Thay đổi lớn sẽ có addendum rõ ràng với chi phí và timeline cụ thể trước khi làm.",
  },
  {
    q: "Team mình không biết kỹ thuật, có dùng được không?",
    a: "100% được. Mỗi workflow đều có video hướng dẫn và SOP. Team chỉ cần biết bấm nút và kiểm tra kết quả — không cần biết code.",
  },
];

const commitments = [
  {
    title: "Scope rõ ràng trong hợp đồng",
    desc: "Mỗi workflow, timeline, deliverable — tất cả ghi rõ trước khi bắt đầu.",
  },
  {
    title: "Cam kết 100% hoàn tiền",
    desc: "Không deliver đúng scope = hoàn 100%. Không điều kiện ẩn.",
  },
  {
    title: "Thanh toán 50/50",
    desc: "50% trước khi bắt đầu, 50% khi bàn giao hoàn tất. Giảm rủi ro cho cả hai bên.",
  },
];

export default function QuyTrinhPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              Quy trình làm việc
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              4 bước.{" "}
              <span className="gradient-text">Không bất ngờ.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8">
              Bạn biết trước mọi thứ sẽ diễn ra — từ cuộc gọi đầu tiên đến lúc workflow chạy thật. Minh bạch từ scope, timeline đến chi phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Bắt đầu bước 1 — Audit miễn phí
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

        {/* Timeline stats */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "30'", label: "Audit miễn phí" },
              { value: "48h", label: "Nhận proposal" },
              { value: "1–8", label: "Tuần build" },
              { value: "30", label: "Ngày support" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-5 text-center"
              >
                <p className="font-display font-extrabold text-2xl text-primary">
                  {s.value}
                </p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps detail */}
        <section className="py-20 bg-slate-50 relative noise-bg">
          <div className="max-w-4xl mx-auto px-6 relative">
            <div className="text-center mb-14">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
                Chi tiết từng bước
              </h2>
              <p className="text-slate-500">
                Mỗi bước có deliverable rõ ràng — bạn biết mình sẽ nhận được gì
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute left-[2.35rem] top-full w-0.5 h-6 bg-slate-200 z-0" />
                  )}

                  <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-all">
                    <div className="flex items-start gap-5">
                      {/* Number */}
                      <div
                        className="shrink-0 w-[3rem] h-[3rem] rounded-xl flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="font-display font-bold text-xl text-slate-900">
                            {step.title}
                          </h3>
                          <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed mb-5">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div className="bg-slate-50 rounded-xl p-5 mb-4">
                          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">
                            Bạn nhận được
                          </p>
                          <ul className="space-y-2">
                            {step.deliverables.map((d, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                <svg className="shrink-0 mt-0.5 text-accent" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M2 7l3 3 6-6" />
                                </svg>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Note */}
                        <p className="text-xs text-primary font-medium">
                          {step.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight mb-3">
              Cam kết của AutoFlow
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {commitments.map((c, i) => (
              <div
                key={i}
                className="bg-accent/5 border border-accent/20 rounded-2xl p-7 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" fill="none" stroke="#10B981" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 text-center mb-10">
            Câu hỏi về quy trình
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-sm text-slate-900">{faq.q}</span>
                  <svg
                    className={`shrink-0 w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Sẵn sàng bắt đầu bước 1?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — mình chỉ ra cụ thể workflow nào nên tự động hóa trước.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Đặt lịch audit miễn phí
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
