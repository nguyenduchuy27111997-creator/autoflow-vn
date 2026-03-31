import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Quiz Đánh Giá Automation — AutoFlow VN";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateOgImage({
    title: "Doanh Nghiệp Bạn Đã Sẵn Sàng Tự Động Hóa?",
    subtitle: "Làm quiz 2 phút — nhận đánh giá miễn phí & lộ trình automation phù hợp",
    badge: "QUIZ",
  });
}
