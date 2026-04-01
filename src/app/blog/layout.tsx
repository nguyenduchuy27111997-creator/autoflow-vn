import BlogArticleTracker from "@/components/analytics/BlogArticleTracker";
import ReadingProgress from "@/components/blog/ReadingProgress";
import BackToTop from "@/components/blog/BackToTop";

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
