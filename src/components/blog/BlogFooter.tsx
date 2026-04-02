import ShareButtons from "./ShareButtons";
import RelatedPosts from "./RelatedPosts";
import BlogCTA from "./BlogCTA";
import BlogSchema from "./BlogSchema";

export default function BlogFooter({
  title,
  slug,
  date,
}: {
  title: string;
  slug: string;
  date: string;
}) {
  return (
    <div className="not-prose">
      <BlogSchema slug={slug} />
      {/* Share + Date row */}
      <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
        <ShareButtons title={title} />
        <div className="text-xs text-slate-500">
          Cập nhật: {new Date(date).toLocaleDateString("vi-VN", { year: "numeric", month: "long", day: "numeric" })}
        </div>
      </div>

      {/* CTA Banner */}
      <BlogCTA />

      {/* Related Posts */}
      <RelatedPosts currentSlug={slug} />
    </div>
  );
}
