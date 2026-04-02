import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tài Liệu Giáo Dục & Đào Tạo Automation | AutoFlow VN",
  description:
    "Hướng dẫn tự động hóa quy trình cho trung tâm đào tạo và chuỗi trường học: quản lý học viên, thông báo lịch học, báo cáo tự động. Tài liệu miễn phí.",
  alternates: { canonical: "https://autoflowvn.net/tai-lieu/giao-duc" },
  openGraph: {
    title: "Tài Liệu Giáo Dục & Đào Tạo Automation | AutoFlow VN",
    description:
      "Tự động hóa quản lý học viên, thông báo lịch học cho trung tâm và chuỗi trường học.",
    url: "https://autoflowvn.net/tai-lieu/giao-duc",
  },
};

export default function GiaoDucLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
