import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import PixelViewContent from "@/components/analytics/PixelViewContent";

const cs = getCaseStudyBySlug("giao-duc")!;

export const metadata: Metadata = {
  title: `${cs.company} — ${cs.headline} | AutoFlow VN`,
  description: `Case study: ${cs.homepageResult}. ${cs.subtitle}. Xem trước/sau chi tiết và ROI thực tế.`,
  openGraph: {
    title: cs.headline,
    description: `${cs.homepageResult}. Xem before/after 5 workflows và ROI chi tiết.`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: cs.headline,
  description: cs.homepageResult,
  author: {
    "@type": "Organization",
    name: "AutoFlow VN",
    url: "https://autoflowvn.net",
  },
  publisher: {
    "@type": "Organization",
    name: "AutoFlow VN",
    url: "https://autoflowvn.net",
  },
  about: {
    "@type": "Service",
    name: "n8n Automation Consulting",
    provider: { "@type": "Organization", name: "AutoFlow VN" },
  },
};

export default function GiaoDucResultPage() {
  if (!cs) notFound();
  return (
    <>
      <PixelViewContent contentName="Kết quả Giáo dục" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <CaseStudyDetail cs={cs} />
      <Footer />
    </>
  );
}
