"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";

const categoryConfig: Record<string, { gradient: string; emoji: string; color: string }> = {
  Pillar: { gradient: "from-primary/10 to-secondary/10", emoji: "📘", color: "text-primary bg-primary/10" },
  "E-commerce": { gradient: "from-orange-50 to-amber-50", emoji: "🛒", color: "text-orange-600 bg-orange-50" },
  "Bất động sản": { gradient: "from-purple-50 to-violet-50", emoji: "🏠", color: "text-purple-600 bg-purple-50" },
  "Giáo dục": { gradient: "from-blue-50 to-cyan-50", emoji: "🎓", color: "text-blue-600 bg-blue-50" },
  "Y tế": { gradient: "from-red-50 to-rose-50", emoji: "🏥", color: "text-red-600 bg-red-50" },
  "Làm đẹp": { gradient: "from-pink-50 to-fuchsia-50", emoji: "💅", color: "text-pink-600 bg-pink-50" },
  "F&B": { gradient: "from-amber-50 to-yellow-50", emoji: "🍽️", color: "text-amber-600 bg-amber-50" },
  Startup: { gradient: "from-violet-50 to-indigo-50", emoji: "🚀", color: "text-violet-600 bg-violet-50" },
  Retail: { gradient: "from-emerald-50 to-green-50", emoji: "🏪", color: "text-emerald-600 bg-emerald-50" },
  HR: { gradient: "from-sky-50 to-blue-50", emoji: "👥", color: "text-sky-600 bg-sky-50" },
  "Kế toán": { gradient: "from-teal-50 to-emerald-50", emoji: "📊", color: "text-teal-600 bg-teal-50" },
  AI: { gradient: "from-violet-50 to-purple-50", emoji: "🤖", color: "text-violet-600 bg-violet-50" },
  "Kiến thức": { gradient: "from-slate-50 to-gray-50", emoji: "💡", color: "text-slate-600 bg-slate-100" },
  "So sánh": { gradient: "from-indigo-50 to-blue-50", emoji: "⚖️", color: "text-indigo-600 bg-indigo-50" },
  "Hướng dẫn": { gradient: "from-cyan-50 to-sky-50", emoji: "📖", color: "text-cyan-600 bg-cyan-50" },
  Marketing: { gradient: "from-rose-50 to-pink-50", emoji: "📣", color: "text-rose-600 bg-rose-50" },
};

const defaultConfig = { gradient: "from-slate-50 to-gray-50", emoji: "📝", color: "text-slate-600 bg-slate-100" };

const allCategories = [...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? blogPosts : blogPosts.filter((p) => p.category === filter);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-8">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-3">
              Blog
            </h1>
            <p className="text-lg text-slate-500">
              Hướng dẫn, case study, và tips tự động hóa cho SME Việt Nam — {blogPosts.length} bài viết.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              Tất cả ({blogPosts.length})
            </button>
            {allCategories.map((cat) => {
              const cfg = categoryConfig[cat] || defaultConfig;
              const count = blogPosts.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    filter === cat
                      ? "bg-slate-900 text-white"
                      : `${cfg.color} hover:opacity-80`
                  }`}
                >
                  {cfg.emoji} {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Featured Card */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-10 bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-2xl border border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 md:p-10 md:flex md:items-center md:gap-10">
                <div className="flex-1 mb-6 md:mb-0">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      ⭐ Bài nổi bật
                    </span>
                    <span className="text-xs text-slate-500">{featured.readTime}</span>
                  </div>
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 group-hover:text-primary transition-colors mb-3 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-4 max-w-xl">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Đọc bài viết
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-2xl bg-white/60 border border-slate-200/50">
                  <span className="text-6xl">{(categoryConfig[featured.category] || defaultConfig).emoji}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => {
              const cfg = categoryConfig[post.category] || defaultConfig;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200"
                >
                  {/* Color bar top */}
                  <div className={`h-1.5 bg-gradient-to-r ${cfg.gradient}`} />

                  <div className="p-5">
                    {/* Category + emoji + time */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{cfg.emoji}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${cfg.color}`}>
                          {post.category}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-bold text-sm text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                      {post.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <span className="text-[10px] text-slate-300">{post.date}</span>
                      <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Đọc →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500">Không có bài viết nào trong danh mục này.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
