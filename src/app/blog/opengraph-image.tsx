import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Blog Tự Động Hóa — AutoFlow VN";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage({
    title: "Blog Tự Động Hóa",
    subtitle: "Hướng dẫn n8n, Zalo OA, Shopee, MISA — Kiến thức thực chiến cho SME",
    badge: "BLOG",
  });
}
