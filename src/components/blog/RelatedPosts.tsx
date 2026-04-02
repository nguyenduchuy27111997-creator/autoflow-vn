import { blogPosts, type BlogPost } from "@/data/blog-posts";

export default function RelatedPosts({
  currentSlug,
  maxPosts = 3,
}: {
  currentSlug: string;
  maxPosts?: number;
}) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  if (!current) return null;

  // Score related posts by category match + recency
  const related = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      score: p.category === current.category ? 2 : 1,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, maxPosts);

  if (related.length === 0) return null;

  const categoryColors: Record<string, string> = {
    "Pillar": "bg-primary/10 text-primary",
    "E-commerce": "bg-orange-50 text-orange-600",
    "Bất động sản": "bg-purple-50 text-purple-600",
    "Giáo dục": "bg-blue-50 text-blue-600",
    "F&B": "bg-amber-50 text-amber-600",
    "AI": "bg-violet-50 text-violet-600",
    "Kiến thức": "bg-teal-50 text-teal-600",
    "So sánh": "bg-indigo-50 text-indigo-600",
  };

  return (
    <div className="mt-16 pt-12 border-t border-slate-200 not-prose">
      <h3 className="font-display font-bold text-lg text-slate-900 mb-6">
        Bài viết liên quan
      </h3>
      <div className="grid md:grid-cols-3 gap-5">
        {related.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white rounded-xl border border-slate-200 p-5 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold mb-3 ${categoryColors[post.category] || "bg-slate-100 text-slate-600"}`}>
              {post.category}
            </span>
            <h4 className="font-display font-bold text-sm text-slate-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h4>
            <p className="text-xs text-slate-500 line-clamp-2">{post.description}</p>
            <div className="flex items-center gap-2 mt-3 text-[10px] text-slate-500">
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
