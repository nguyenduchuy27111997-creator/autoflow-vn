import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ Tự Động Hóa | AutoFlow VN",
  description:
    "Workflow tự động hóa: Starter 1.5 triệu, Growth 2.5 triệu, Scale 4 triệu mỗi tháng. Bao gồm hosting, monitoring tự động 24/7, hỗ trợ Zalo giờ hành chính (T2–T6).",
  alternates: { canonical: "https://autoflowvn.net/bang-gia" },
  openGraph: {
    title: "Bảng Giá Dịch Vụ Tự Động Hóa | AutoFlow VN",
    description:
      "Workflow tự động hóa: Starter 1.5 triệu, Growth 2.5 triệu, Scale 4 triệu mỗi tháng. Bao gồm hosting, monitoring tự động 24/7, hỗ trợ Zalo giờ hành chính (T2–T6).",
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
