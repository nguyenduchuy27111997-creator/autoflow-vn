import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-lg text-slate-500">
              Hướng dẫn, case study, và tips tự động hóa cho SME Việt Nam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      fill="none"
                      stroke="#0066FF"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-4">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400">Chưa có bài viết nào. Quay lại sau nhé!</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
