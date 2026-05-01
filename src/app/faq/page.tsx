"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Note: Metadata export cannot be used in a Client Component.
// SEO metadata is provided via generateMetadata pattern — see faq/layout.tsx for static metadata.

const faqs = [
  // Original 7 from FAQ.tsx
  {
    q: "Hệ thống AutoFlow là gì? Có gì khác Zapier?",
    a: "Hệ thống AutoFlow là hạ tầng tự động hóa quy trình chuyên dụng tại Việt Nam, do AutoFlow VN xây dựng và vận hành. Khác Zapier: tích hợp được Zalo OA, MISA, KiotViet, GrabFood, ShopeeFood — những thứ Zapier không làm được. Khác Make.com: dữ liệu ở Việt Nam (tuân thủ NĐ 13/2023), không giới hạn lượt chạy, chi phí cố định mỗi tháng. Bạn không cần biết kỹ thuật — AutoFlow lo toàn bộ phần vận hành, bạn chỉ cần xem báo cáo.",
  },
  {
    q: "Tôi không biết code. Có dùng được không?",
    a: "Hoàn toàn được. Mình build xong, bàn giao kèm tài liệu hướng dẫn từng bước. Team bạn chỉ cần biết bấm nút và đọc kết quả. Nếu có vấn đề, mình fix trong 24h qua gói gói hàng tháng từ 1.5 triệu.",
  },
  {
    q: "Data của tôi có an toàn không?",
    a: "Rất an toàn. Hệ thống chạy trên VPS Bizfly tại TP. Hồ Chí Minh — data được mã hóa, backup hàng ngày, và tuân thủ Nghị định 13/2023 về bảo vệ dữ liệu cá nhân (PDPL). Dữ liệu đơn hàng, khách hàng, tài chính đều nằm trong nước, không gửi ra server nước ngoài.",
  },
  {
    q: "Nếu workflow bị lỗi thì sao?",
    a: "Gói gói hàng tháng từ 1.5 triệu cam kết fix lỗi trong 24h làm việc (SLA). Mỗi workflow đều có error handling và thông báo tự động — nếu có lỗi, bạn biết ngay qua Zalo, không cần đợi khách phàn nàn. Trong 30 ngày đầu sau bàn giao, support hoàn toàn miễn phí.",
  },
  {
    q: "Mất bao lâu để thấy kết quả?",
    a: "Starter (1.5M/tháng): 1–2 tuần là workflow đầu tiên chạy thật. Growth (2.5M/tháng): 2–3 tuần toàn bộ xong. Scale (4M/tháng): 3–4 tuần. Bạn thấy kết quả ngay từ workflow đầu tiên — không phải đợi hết project.",
  },
  {
    q: "Tại sao không dùng Zapier cho rẻ?",
    a: "Zapier $20/tháng (~500K VND/tháng) chỉ là khởi điểm — vượt 750 lượt chạy/tháng giá tăng nhanh, lại không tích hợp được Zalo OA, MISA, KiotViet. Hệ thống AutoFlow dedicated tại Việt Nam: chỉ 1 phí cố định 1.5M/tháng, không giới hạn lượt chạy, tích hợp sâu với hệ sinh thái Việt Nam. Xem so sánh chi tiết tại /so-sanh.",
  },
  {
    q: "Thanh toán như thế nào?",
    a: "50% upfront trước khi bắt đầu, 50% khi bàn giao. Chuyển khoản ngân hàng. Có hợp đồng dịch vụ rõ ràng với scope, timeline, và deliverables cụ thể.",
  },
  // 8 new FAQs
  {
    q: "AutoFlow có phù hợp với ngành của tôi không?",
    a: "AutoFlow chuyên sâu 5 ngành: E-commerce (Shopee, TikTok Shop, Haravan), Giáo dục & Đào tạo, Bất động sản, F&B/Nhà hàng, và Healthcare/Phòng khám. Nếu bạn thuộc ngành khác, hãy liên hệ — nhiều quy trình như gửi báo cáo tự động, onboarding nhân viên, quản lý lead đều áp dụng được cho mọi ngành.",
  },
  {
    q: "Sau pilot miễn phí thì sao?",
    a: "Sau khi pilot chạy thành công, bạn có 3 lựa chọn: (1) Mua thêm workflow mới (gói Starter/Growth/Scale tùy độ phức tạp), (2) Đăng ký gói gói hàng tháng từ 1.5 triệu để AutoFlow vận hành và bảo trì, hoặc (3) Dừng lại — workflow đã build vẫn thuộc về bạn hoàn toàn.",
  },
  {
    q: "Tôi không biết kỹ thuật, có dùng được không?",
    a: "Hoàn toàn có. AutoFlow là dịch vụ tự động hóa quản lý trọn gói — bạn không cần hiểu code hay đăng nhập vào hệ thống. AutoFlow xây và vận hành workflows giúp bạn, định kỳ gửi báo cáo hiệu suất qua email và Zalo. Mọi thay đổi gửi qua yêu cầu thay đổi, AutoFlow lo toàn bộ phần kỹ thuật.",
  },
  {
    q: "Workflow bị lỗi thì AutoFlow có fix không?",
    a: "Có. 30 ngày đầu sau bàn giao: support và fix miễn phí hoàn toàn. Từ tháng thứ 2 trở đi: nếu dùng gói gói hàng tháng từ 1.5 triệu, AutoFlow cam kết SLA fix trong 24h giờ hành chính. Ngoài hosting: fix theo giờ với rate thỏa thuận.",
  },
  {
    q: "AutoFlow khác gì so với thuê freelancer?",
    a: "Freelancer không có SLA, không monitoring, không backup, và có thể biến mất sau khi bàn giao. AutoFlow cung cấp: hợp đồng dịch vụ rõ ràng, monitoring & cảnh báo tự động 24/7, backup hàng ngày, support Zalo giờ hành chính (T2–T6, 8:00–18:00), và cam kết hoàn tiền 100% nếu không đạt scope. Bạn làm việc với cùng một người từ đầu đến cuối.",
  },
  {
    q: "Có hoàn tiền không?",
    a: "Có. AutoFlow cam kết hoàn tiền 100% nếu không deliver đúng scope đã ký trong hợp đồng. Điều kiện: workflow không chạy đúng theo yêu cầu đã thống nhất sau quá trình build và test. Không có điều kiện ẩn hay phí xử lý.",
  },
  {
    q: "Gói gói hàng tháng từ 1.5 triệu bao gồm những gì?",
    a: "Gói hàng tháng từ 1.5 triệu bao gồm: VPS Bizfly tại TP.HCM (không phụ thuộc server nước ngoài), backup data hàng ngày, monitoring uptime tự động 24/7 + cảnh báo Zalo khi có sự cố, SSL certificate, support qua Zalo trong giờ hành chính (T2–T6, 8:00–18:00), fix lỗi trong 24h (SLA giờ hành chính), và quota execution theo gói. Không bao gồm: build workflow mới (tính riêng).",
  },
  {
    q: "AutoFlow vận hành workflow như thế nào? Tôi có truy cập engine không?",
    a: "AutoFlow là dịch vụ tự động hóa quản lý trọn gói — AutoFlow xây, triển khai, và vận hành workflows trên Hệ thống AutoFlow. Bạn nhận: (1) báo cáo hiệu suất hàng tháng, (2) cảnh báo Zalo khi có vấn đề, (3) yêu cầu thay đổi khi cần điều chỉnh. Bạn không cần đăng nhập trực tiếp vào hệ thống — đó là điểm khác biệt giữa dịch vụ trọn gói và tự vận hành. Toàn bộ phần kỹ thuật do AutoFlow lo.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              Câu hỏi thường gặp
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-5">
              Bạn hỏi.{" "}
              <span className="gradient-text">Mình trả lời.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              {faqs.length} câu hỏi thường gặp nhất về AutoFlow VN — giá cả,
              quy trình, bảo mật, và hỗ trợ.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
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
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={`shrink-0 mt-0.5 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                      openIndex === i
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-500"
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
        </section>

        {/* Still have questions */}
        <section className="max-w-3xl mx-auto px-6 mb-16">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
              Vẫn còn câu hỏi?
            </h2>
            <p className="text-sm text-slate-500 mb-5">
              Nhắn Zalo 0935.115.248 — Huy sẽ trả lời trực tiếp trong giờ làm việc.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://zalo.me/0935115248"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Chat Zalo ngay
              </a>
              <a
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 transition-colors text-sm"
              >
                Xem thông tin liên hệ
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-900 rounded-2xl p-10">
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Sẵn sàng tự động hóa?
            </h2>
            <p className="text-slate-400 mb-6">
              Điền audit form — 30 phút để Huy phân tích quy trình và đề xuất
              workflow phù hợp nhất cho bạn.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Điền audit form miễn phí
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
