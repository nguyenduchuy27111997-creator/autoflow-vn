import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Tài Liệu Hướng Dẫn — AutoFlow VN";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage({
    title: "Tài Liệu Hướng Dẫn",
    subtitle: "Use cases chi tiết cho E-Commerce, Giáo dục, Bất động sản",
    badge: "TÀI LIỆU",
  });
}
