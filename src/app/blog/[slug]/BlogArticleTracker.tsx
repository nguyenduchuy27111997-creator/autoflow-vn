"use client";

import { usePathname } from "next/navigation";
import BlogTracker from "@/components/analytics/BlogTracker";

export default function BlogArticleTracker() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() || "unknown";

  // Only track on article pages, not the blog index
  if (!pathname || pathname === "/blog") return null;

  return <BlogTracker article={slug} />;
}
