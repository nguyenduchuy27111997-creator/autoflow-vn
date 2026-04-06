import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "./TableOfContents";
import BlogFooter from "./BlogFooter";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";

const BADGE_COLORS: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  slate: "bg-slate-100 text-slate-600",
  violet: "bg-violet-50 text-violet-600",
  blue: "bg-blue-50 text-blue-600",
  orange: "bg-orange-50 text-orange-600",
  emerald: "bg-emerald-50 text-emerald-600",
  red: "bg-red-50 text-red-600",
  pink: "bg-pink-50 text-pink-600",
  purple: "bg-purple-50 text-purple-600",
  sky: "bg-sky-50 text-sky-600",
  green: "bg-green-50 text-green-600",
  amber: "bg-amber-50 text-amber-600",
};

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface Badge {
  text: string;
  color: string;
}

interface BlogLayoutProps {
  slug: string;
  title: ReactNode;
  description: string;
  breadcrumbLabel: string;
  badges: Badge[];
  readTime: string;
  tocItems: TocItem[];
  date: string;
  children: ReactNode;
  extraHead?: ReactNode;
}

export default function BlogLayout({
  slug,
  title,
  description,
  breadcrumbLabel,
  badges,
  readTime,
  tocItems,
  date,
  children,
  extraHead,
}: BlogLayoutProps) {
  const titleText = typeof title === "string" ? title : slug;

  return (
    <>
      <BreadcrumbJsonLd slug={slug} title={titleText} />
      {extraHead}
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <nav className="flex items-center gap-2 text-xs text-slate-500 mb-5">
              <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
              <span>/</span>
              <span className="text-slate-600 truncate max-w-[300px]">{breadcrumbLabel}</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              {badges.map((badge) => (
                <span
                  key={badge.text}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    BADGE_COLORS[badge.color] || BADGE_COLORS.slate
                  }`}
                >
                  {badge.text}
                </span>
              ))}
              <span className="text-xs text-slate-500">{readTime}</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Content + TOC */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:items-start relative">
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                {children}
              </div>
              <BlogFooter title={titleText} slug={slug} date={date} />
            </div>

            <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
