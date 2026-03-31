"use client";

import { usePathname } from "next/navigation";
import BlogTracker from "@/components/analytics/BlogTracker";

/** Auto-detects blog article slug from pathname and tracks scroll depth. */
export default function BlogArticleTracker() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() || "unknown";
  if (!pathname || pathname === "/blog") return null;
  return <BlogTracker article={slug} />;
}
