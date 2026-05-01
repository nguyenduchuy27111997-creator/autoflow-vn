import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/go/"],
      },
      // Block Internet Archive crawler — old "n8n"-positioned blog posts could
      // surface in Wayback even after live-site cleanup. See .planning/n8n-license-risk.md.
      { userAgent: "ia_archiver", disallow: "/" },
      { userAgent: "archive.org_bot", disallow: "/" },
    ],
    sitemap: "https://autoflowvn.net/sitemap.xml",
  };
}
