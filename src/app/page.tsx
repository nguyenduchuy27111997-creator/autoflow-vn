import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import PainPoints from "@/components/PainPoints";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import PilotBanner from "@/components/PilotBanner";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Business Process Automation",
          provider: {
            "@type": "LocalBusiness",
            name: "AutoFlow VN",
            url: "https://autoflowvn.net",
          },
          areaServed: { "@type": "Country", name: "Vietnam" },
          description:
            "Tự động hóa quy trình cho SME Việt Nam bằng n8n — tích hợp Zalo, MISA, Shopee, KiotViet. Kết quả trong 2–4 tuần.",
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "8000000",
            highPrice: "80000000",
            priceCurrency: "VND",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <PainPoints />
        <WhyUs />
        <PilotBanner />
        <Process />
        <Pricing />
        <Results />

        {/* Quiz CTA */}
        <section className="py-16 bg-gradient-to-r from-violet-50 to-blue-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-xs font-semibold mb-4">
              📝 Quiz 2 phút
            </span>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
              Doanh nghiệp bạn sẵn sàng tự động hóa chưa?
            </h2>
            <p className="text-slate-500 mb-6 max-w-lg mx-auto">
              Trả lời 10 câu hỏi — nhận đánh giá mức độ sẵn sàng + gợi ý gói phù hợp. Miễn phí, không ràng buộc.
            </p>
            <a
              href="/quiz"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/25 transition-all"
            >
              Làm Quiz Ngay →
            </a>
          </div>
        </section>

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
