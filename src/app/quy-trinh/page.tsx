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
      "Gọi video hoặc gặp trực tiếp. Mình nghe bạn kể về quy trình hàng ngày, tìm ra đâu đang mất thời gian nhất, và đề xuất giải pháp cụ thể.",
    deliverables: [
      "Audit Report chi tiết (gửi trong 24h)",
      "Sơ đồ quy trình hiện tại vs. đề xuất",
      "Ước tính ROI: tiết kiệm bao nhiêu giờ/tháng, hoàn vốn bao lâu",
    ],
    note: "Miễn phí, không ràng buộc. Bạn nhận report dù có tiếp tục hay không.",
    color: "#6366F1",
  },
  {
    number: "02",
    title: "Chọn gói & Ký hợp đồng",
    duration: "48 giờ",
    description:
      "Dựa trên audit, mình đề xuất gói phù hợp. Tất cả gói hàng tháng đã bao gồm: xây dựng + hosting + monitoring tự động 24/7 + hỗ trợ Zalo giờ hành chính + tối ưu.",
    deliverables: [
      "Gói Starter 1.5M, Growth 2.5M, hoặc Scale 4M/tháng",
      "Hợp đồng rõ ràng + cam kết hoàn tiền 100% nếu không đạt KPI",
      "Phí xây dựng ban đầu (50% trước, 50% khi bàn giao)",
    ],
    note: "Trả hàng tháng, hủy bất cứ lúc nào. Không ràng buộc dài hạn.",
    color: "#0EA5E9",
  },
  {
    number: "03",
    title: "Build & Deploy",
    duration: "1–3 tuần",
    description:
      "Mình xây workflows, test với data thật, deploy lên server riêng của bạn tại Việt Nam. Mỗi workflow có tài liệu hướng dẫn.",
    deliverables: [
      "Workflows chạy thật trên server riêng tại VN",
      "Tài liệu hướng dẫn cho từng workflow",
      "Giám sát tự động + cảnh báo qua Zalo/Telegram",
    ],
    note: "Bạn không cần biết code — chỉ cần kiểm tra kết quả.",
    color: "#10B981",
  },
  {
    number: "04",
    title: "Vận hành & Tối ưu",
    duration: "Ongoing hàng tháng",
    description:
      "AutoFlow vận hành, giám sát, tối ưu liên tục. Mỗi tháng gửi báo cáo hiệu suất: bao nhiêu lần chạy, giờ tiết kiệm, ROI.",
    deliverables: [
      "Monitoring tự động 24/7 — hệ thống tự khôi phục lỗi tạm thời + cảnh báo Zalo, AutoFlow xử lý sự cố trong giờ hành chính",
      "Báo cáo hiệu suất hàng tháng (executions, ROI, uptime)",
      "Tối ưu workflow liên tục — quy trình ngày càng tốt hơn",
    ],
    note: "Bạn tập trung kinh doanh — AutoFlow lo phần còn lại.",
    color: "#F59E0B",
  },
];

const faqs = [
  {
    q: "Mình có phải chuẩn bị gì trước buổi audit không?",
    a: "Không cần chuẩn bị kỹ. Cứ kể lại quy trình hàng ngày — mình sẽ hỏi để hiểu rõ hơn. Nếu có sẵn SOP hoặc danh sách công cụ đang dùng thì càng tốt.",
  },
  {
    q: "Từ audit đến lúc workflow chạy mất bao lâu?",
    a: "Gói Starter: 1 tuần. Growth: 1-2 tuần. Scale: 2-3 tuần. Workflow đầu tiên thường chạy trong 3-5 ngày.",
  },
  {
    q: "Gói hàng tháng bao gồm gì?",
    a: "Tất cả: server riêng tại VN + monitoring tự động 24/7 + cảnh báo Zalo khi sự cố + backup hàng ngày + hỗ trợ Zalo giờ hành chính (T2–T6, 8:00–18:00) + tối ưu hàng tháng + báo cáo hiệu suất. Không phí ẩn. Hủy bất cứ lúc nào.",
  },
  {
    q: "Nếu workflow lỗi thì sao?",
    a: "Monitoring tự động 24/7 phát hiện sự cố — hệ thống tự restart và alert qua Telegram + Zalo. AutoFlow xử lý sự cố trong giờ hành chính (T2–T6, 8:00–18:00); ngoài giờ thì hệ thống đã có cơ chế tự khôi phục cho phần lớn lỗi tạm thời. Cam kết hoàn tiền 100% phí setup nếu không đạt KPI sau 30 ngày (theo điều kiện hợp đồng).",
  },
  {
    q: "Team mình không biết kỹ thuật, có dùng được không?",
    a: "100% được. AutoFlow vận hành tất cả — bạn chỉ cần kiểm tra kết quả. Mỗi workflow có tài liệu hướng dẫn. Team không cần biết code.",
  },
];

const commitments = [
  {
    title: "Scope rõ ràng trong hợp đồng",
    desc: "Mỗi workflow, timeline, deliverable — tất cả ghi rõ trước khi bắt đầu.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#6366F1" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    color: "#6366F1",
  },
  {
    title: "Cam kết 100% hoàn tiền",
    desc: "Không đạt KPI sau 30 ngày = hoàn 100% phí xây dựng (theo điều khoản hợp đồng).",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "#10B981",
  },
  {
    title: "Trả hàng tháng, hủy bất cứ lúc nào",
    desc: "Không ràng buộc dài hạn. Phí xây dựng 50/50, gói hàng tháng thanh toán đầu tháng.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="#0EA5E9" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    color: "#0EA5E9",
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
              Chỉ 4 bước.{" "}
              <span className="gradient-text">Bạn biết trước tất cả.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8">
              Audit miễn phí → chọn gói → build & deploy → AutoFlow vận hành liên tục. Tất cả trong 1 gói hàng tháng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Đặt lịch audit miễn phí
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
              { value: "1–3", label: "Tuần triển khai" },
              { value: "24/7", label: "Giám sát ongoing" },
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
                          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
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
                className="rounded-2xl p-7 text-center"
                style={{ backgroundColor: `${c.color}08`, borderWidth: 1, borderColor: `${c.color}30` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${c.color}15` }}
                >
                  {c.icon}
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
                    className={`shrink-0 w-5 h-5 text-slate-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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
              Sẵn sàng bắt đầu?
            </h2>
            <p className="text-slate-400 mb-6">
              30 phút audit miễn phí — mình chỉ ra cụ thể quy trình nào nên tự động hóa trước.
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
