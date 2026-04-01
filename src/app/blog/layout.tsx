import type { Metadata } from "next";
import BlogArticleTracker from "@/components/analytics/BlogArticleTracker";
import ReadingProgress from "@/components/blog/ReadingProgress";
import BackToTop from "@/components/blog/BackToTop";

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
      <ReadingProgress />
      {children}
      <BackToTop />
      <BlogArticleTracker />
    </>
  );
}
