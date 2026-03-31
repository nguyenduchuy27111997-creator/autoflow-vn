import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Về AutoFlow VN";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage({
    title: "Về AutoFlow VN",
    subtitle: "Đối tác tự động hóa đáng tin cậy cho doanh nghiệp vừa và nhỏ Việt Nam",
    badge: "VỀ CHÚNG TÔI",
  });
}
