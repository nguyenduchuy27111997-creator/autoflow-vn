interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  // JSON-LD structured data for SEO
  // type="application/ld+json" is non-executable (safe)
  // suppressHydrationWarning prevents Next.js 16 script tag warning
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
