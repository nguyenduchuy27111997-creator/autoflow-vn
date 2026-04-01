import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tự Động Hóa Bất Động Sản: Lead, CSKH, Báo Cáo | AutoFlow VN",
  description:
    "Phản hồi lead Facebook Ads trong 30 giây. Chăm sóc khách hàng, báo cáo tự động.",
  alternates: { canonical: "https://autoflowvn.net/dich-vu/bat-dong-san" },
  openGraph: {
    title: "Tự Động Hóa Bất Động Sản: Lead, CSKH, Báo Cáo | AutoFlow VN",
    description:
      "Phản hồi lead Facebook Ads trong 30 giây. Chăm sóc khách hàng, báo cáo tự động.",
    url: "https://autoflowvn.net/dich-vu/bat-dong-san",
  },
};

export default function BatDongSanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
