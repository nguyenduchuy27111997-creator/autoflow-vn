import type { Metadata } from "next";
import BlogArticleTracker from "@/components/analytics/BlogArticleTracker";
import ReadingProgress from "@/components/blog/ReadingProgress";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog Tự Động Hóa Cho SME | AutoFlow VN",
  description:
    "Kiến thức, hướng dẫn, case study về tự động hóa quy trình bằng n8n cho doanh nghiệp Việt Nam.",
  alternates: { canonical: "https://autoflowvn.net/blog" },
  openGraph: {
    title: "Blog Tự Động Hóa Cho SME | AutoFlow VN",
    description:
      "Kiến thức, hướng dẫn, case study về tự động hóa quy trình bằng n8n cho doanh nghiệp Việt Nam.",
    url: "https://autoflowvn.net/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "AutoFlow VN Blog",
          url: "https://autoflowvn.net/blog",
          description:
            "Kiến thức, hướng dẫn, case study về tự động hóa quy trình bằng n8n cho doanh nghiệp Việt Nam.",
          inLanguage: "vi",
          publisher: {
            "@type": "Organization",
            name: "AutoFlow VN",
            url: "https://autoflowvn.net",
          },
        }}
      />
      <ReadingProgress />
      {children}
      <BlogArticleTracker />
    </>
  );
}
