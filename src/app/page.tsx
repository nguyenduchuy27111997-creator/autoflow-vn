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
            url: "https://autoflowvn.com",
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
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
