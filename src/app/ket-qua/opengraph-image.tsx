import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Kết Quả Triển Khai — AutoFlow VN";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage({
    title: "Kết Quả Triển Khai",
    subtitle: "Case studies thực tế — Tiết kiệm 300+ triệu/năm cho doanh nghiệp Việt",
    badge: "CASE STUDY",
  });
}
