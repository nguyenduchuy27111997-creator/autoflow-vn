"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PainPoints from "@/components/PainPoints";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const services = [
  { label: "E-commerce", href: "/dich-vu/e-commerce", desc: "Shopee, Tiki, TikTok Shop — tự động đơn hàng, tồn kho, báo cáo.", slug: "e-commerce" },
  { label: "Giáo dục & Đào tạo", href: "/dich-vu/giao-duc", desc: "Trung tâm, chuỗi trường học — tự động enroll, nhắc lịch, báo cáo.", slug: "giao-duc" },
  { label: "Bất động sản", href: "/dich-vu/bat-dong-san", desc: "Agency, sàn giao dịch — tự động qualify lead, follow-up, hợp đồng.", slug: "bat-dong-san" },
  { label: "F&B / Nhà hàng", href: "/dich-vu/fnb", desc: "Quán cafe, chuỗi nhà hàng — tự động đặt bàn, tồn kho, loyalty.", slug: "fnb" },
];

export default function DichVuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
              Dịch vụ AutoFlow
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight mb-5">
              Automation cho từng ngành
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Chọn ngành của bạn để xem workflow cụ thể, vấn đề phổ biến và ROI thực tế.
            </p>
          </div>
        </section>

        {/* PainPoints component */}
        <PainPoints />

        {/* Industry cards */}
        <Container className="py-16">
          <SectionHeader
            badge="Giải pháp theo ngành"
            title="Chọn ngành của bạn"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <a key={service.slug} href={service.href} className="block group">
                <Card className="h-full flex flex-col">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
                    {service.desc}
                  </p>
                  <span className="text-primary text-sm font-semibold">
                    Xem chi tiết →
                  </span>
                </Card>
              </a>
            ))}
          </div>
        </Container>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
              Chưa biết ngành mình thuộc nhóm nào?
            </h2>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25"
            >
              Đặt audit miễn phí — 30 phút
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
