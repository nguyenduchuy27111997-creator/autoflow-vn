import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ Tự Động Hóa | AutoFlow VN",
  description:
    "Workflow tự động hóa: Cơ bản 2 triệu, Nâng cao 4 triệu, Toàn diện 7 triệu. Trả 1 lần, chạy mãi mãi. Hosting tùy chọn 499K/tháng.",
  alternates: { canonical: "https://autoflowvn.net/bang-gia" },
  openGraph: {
    title: "Bảng Giá Dịch Vụ Tự Động Hóa | AutoFlow VN",
    description:
      "Workflow tự động hóa: Cơ bản 2 triệu, Nâng cao 4 triệu, Toàn diện 7 triệu. Trả 1 lần, chạy mãi mãi. Hosting tùy chọn 499K/tháng.",
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
