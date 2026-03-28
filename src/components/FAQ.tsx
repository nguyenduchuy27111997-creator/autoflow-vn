"use client";

import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import JsonLd from "./JsonLd";

const faqs = [
  {
    q: "n8n là gì? Tôi chưa nghe bao giờ.",
    a: "n8n là nền tảng tự động hóa mã nguồn mở, giống như Zapier nhưng mạnh hơn và miễn phí khi self-host. AutoFlow dùng n8n vì nó tích hợp được với Zalo OA, MISA, KiotViet — những thứ Zapier và Make.com không làm được. Bạn không cần biết n8n là gì — mình lo phần kỹ thuật, bạn chỉ cần thấy kết quả.",
  },
  {
    q: "Tôi không biết code. Có dùng được không?",
    a: "Hoàn toàn được. Mình build xong, bàn giao kèm video hướng dẫn từng bước. Team bạn chỉ cần biết bấm nút và đọc kết quả. Nếu có vấn đề, mình fix trong 24h qua retainer.",
  },
  {
    q: "Data của tôi có an toàn không?",
    a: "Rất an toàn. n8n được self-host trên VPS ở Việt Nam — dữ liệu đơn hàng, khách hàng, tài chính đều nằm trong nước, trên server riêng của bạn. Không gửi ra nước ngoài, không phụ thuộc bên thứ ba.",
  },
  {
    q: "Nếu workflow bị lỗi thì sao?",
    a: "Gói retainer cam kết fix lỗi trong 24h làm việc (SLA). Ngoài ra, mỗi workflow đều có error handling và thông báo tự động — nếu có lỗi, bạn biết ngay, không cần đợi khách phàn nàn.",
  },
  {
    q: "Mất bao lâu để thấy kết quả?",
    a: "Gói Starter: 1–2 tuần là workflow đầu tiên chạy thật. Gói Growth: 3–4 tuần toàn bộ xong. Bạn thấy kết quả ngay từ workflow đầu tiên — không phải đợi hết project.",
  },
  {
    q: "Tại sao không dùng Zapier cho rẻ?",
    a: "Zapier $20/tháng, giới hạn tasks, và không tích hợp được Zalo OA, MISA, KiotViet. n8n self-host $5/tháng (chỉ phí VPS), không giới hạn, và tích hợp native với ecosystem Việt Nam. Với SME dùng nhiều, n8n tiết kiệm hơn nhiều.",
  },
  {
    q: "Thanh toán như thế nào?",
    a: "50% upfront trước khi bắt đầu, 50% khi bàn giao. Chuyển khoản ngân hàng. Có hợp đồng dịch vụ rõ ràng với scope, timeline, và deliverables cụ thể.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <JsonLd data={faqSchema} />
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          badge="Câu hỏi thường gặp"
          title="Bạn hỏi."
          gradientText="Mình trả lời."
          className="mb-12"
        />

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === i
                  ? "border-primary/20 bg-primary-light/30 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start gap-4 p-5 text-left"
              >
                <span
                  className={`shrink-0 mt-0.5 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                    openIndex === i
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {openIndex === i ? "−" : "+"}
                </span>
                <span
                  className={`font-semibold text-sm transition-colors ${
                    openIndex === i ? "text-primary" : "text-slate-900"
                  }`}
                >
                  {faq.q}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-500 leading-relaxed ml-10">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
