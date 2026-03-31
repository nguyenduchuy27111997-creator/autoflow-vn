import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Bảng Giá Dịch Vụ — AutoFlow VN";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage({
    title: "Bảng Giá Dịch Vụ",
    subtitle: "Gói triển khai từ Starter đến Enterprise — ROI trong 5 tháng",
    badge: "BẢNG GIÁ",
  });
}
