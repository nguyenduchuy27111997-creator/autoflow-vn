import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tài Liệu Bất Động Sản Automation | AutoFlow VN",
  description:
    "Hướng dẫn tự động hóa quy trình cho agency và sàn bất động sản: quản lý lead, follow-up tự động qua Zalo, báo cáo giao dịch. Tài liệu miễn phí.",
  alternates: { canonical: "https://autoflowvn.net/tai-lieu/bat-dong-san" },
  openGraph: {
    title: "Tài Liệu Bất Động Sản Automation | AutoFlow VN",
    description:
      "Tự động hóa quản lý lead và follow-up cho agency, sàn bất động sản Việt Nam.",
    url: "https://autoflowvn.net/tai-lieu/bat-dong-san",
  },
};

export default function BatDongSanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
