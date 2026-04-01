"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "Mình có phải chuẩn bị gì trước buổi audit không?",
    a: "Không cần chuẩn bị kỹ. Cứ kể lại quy trình hàng ngày — mình sẽ hỏi để hiểu rõ hơn.",
  },
  {
    q: "Từ audit đến lúc workflow chạy mất bao lâu?",
    a: "Nhanh nhất 1 tuần (gói Starter 1 workflow). Phức tạp nhất 8 tuần (gói Scale). Mình luôn cam kết timeline trước khi bắt đầu.",
  },
  {
    q: "Nếu workflow không chạy đúng sau bàn giao thì sao?",
    a: "Mình support 7–30 ngày sau bàn giao (tùy gói). Nếu lỗi do mình build thì fix miễn phí.",
  },
  {
    q: "Mình có thể thay đổi yêu cầu giữa chừng không?",
    a: "Được — với điều kiện change request nhỏ. Thay đổi lớn sẽ có addendum scope rõ ràng trước khi làm.",
  },
];

export default function QuyTrinhPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
              Quy trình làm việc
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900 mb-5">
              Minh bạch từ bước đầu.
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Bạn biết trước mọi thứ sẽ diễn ra — từ cuộc gọi đầu tiên đến lúc workflow chạy thật.
            </p>
          </div>
        </section>

        {/* Process component */}
        <Process />

        {/* FAQ */}
        <Container className="py-16">
          <SectionHeader
            title="Câu hỏi về quy trình"
            className="mb-12"
          />
          <div className="max-w-2xl mx-auto divide-y divide-slate-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
              Sẵn sàng bắt đầu bước 1?
            </h2>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Đặt lịch audit miễn phí
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
