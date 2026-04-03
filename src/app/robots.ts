import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/portal/", "/go/"],
    },
    sitemap: "https://autoflowvn.net/sitemap.xml",
  };
}
