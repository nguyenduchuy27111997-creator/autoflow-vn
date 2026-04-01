import { blogPosts } from "@/data/blog-posts";

export default function BlogSchema({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "AutoFlow VN",
      url: "https://autoflowvn.net",
    },
    publisher: {
      "@type": "Organization",
      name: "AutoFlow VN",
      url: "https://autoflowvn.net",
      logo: {
        "@type": "ImageObject",
        url: "https://autoflowvn.net/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://autoflowvn.net/blog/${post.slug}`,
    },
    image: `https://autoflowvn.net/blog/${post.slug}/opengraph-image`,
    articleSection: post.category,
    wordCount: 2000,
    inLanguage: "vi",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
