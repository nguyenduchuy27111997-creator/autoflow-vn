import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ Tự Động Hóa | AutoFlow VN",
  description:
    "3 gói dịch vụ: Starter từ 8 triệu, Growth từ 20 triệu, Scale từ 50 triệu. Báo giá chi tiết, so sánh tính năng.",
  alternates: { canonical: "https://autoflowvn.net/bang-gia" },
  openGraph: {
    title: "Bảng Giá Dịch Vụ Tự Động Hóa | AutoFlow VN",
    description:
      "3 gói dịch vụ: Starter từ 8 triệu, Growth từ 20 triệu, Scale từ 50 triệu. Báo giá chi tiết, so sánh tính năng.",
    url: "https://autoflowvn.net/bang-gia",
  },
};

export default function BangGiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
