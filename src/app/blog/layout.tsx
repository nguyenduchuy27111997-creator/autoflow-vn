import BlogArticleTracker from "@/components/analytics/BlogArticleTracker";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BlogArticleTracker />
    </>
  );
}
