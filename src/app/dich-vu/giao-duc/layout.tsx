import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tự Động Hóa Trung Tâm Giáo Dục & Đào Tạo | AutoFlow VN",
  description:
    "Nhắc lịch học viên qua Zalo OA, quản lý điểm danh, thu học phí tự động. Giảm 80% miss.",
  alternates: { canonical: "https://autoflowvn.net/dich-vu/giao-duc" },
  openGraph: {
    title: "Tự Động Hóa Trung Tâm Giáo Dục & Đào Tạo | AutoFlow VN",
    description:
      "Nhắc lịch học viên qua Zalo OA, quản lý điểm danh, thu học phí tự động. Giảm 80% miss.",
    url: "https://autoflowvn.net/dich-vu/giao-duc",
  },
};

export default function GiaoDucLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
