import { blogPosts } from "@/data/blog-posts";
import { generateBlogOGImage } from "@/lib/blog-og";

export const runtime = "edge";
export const alt = "AutoFlow VN Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return generateBlogOGImage("AutoFlow VN Blog", "Kiến thức", "");
  }

  return generateBlogOGImage(post.title, post.category, post.readTime);
}
