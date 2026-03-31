import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Dịch Vụ Tự Động Hóa — AutoFlow VN";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage({
    title: "Dịch Vụ Tự Động Hóa",
    subtitle: "E-Commerce · Giáo dục · Bất động sản · F&B — Kết quả trong 2–4 tuần",
    badge: "DỊCH VỤ",
  });
}
