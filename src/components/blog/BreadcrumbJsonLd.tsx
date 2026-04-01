import JsonLd from "@/components/JsonLd";

interface BreadcrumbJsonLdProps {
  slug: string;
  title: string;
}

export default function BreadcrumbJsonLd({ slug, title }: BreadcrumbJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: "https://autoflowvn.net",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://autoflowvn.net/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: `https://autoflowvn.net/blog/${slug}`,
          },
        ],
      }}
    />
  );
}
