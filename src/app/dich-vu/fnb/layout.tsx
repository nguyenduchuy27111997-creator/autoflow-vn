import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tự Động Hóa Nhà Hàng, Quán Cafe | F&B Automation | AutoFlow VN",
  description:
    "Zalo OA cho F&B: loyalty, nhắc hẹn, feedback tự động. Tăng 40% khách quay lại.",
  alternates: { canonical: "https://autoflowvn.net/dich-vu/fnb" },
  openGraph: {
    title: "Tự Động Hóa Nhà Hàng, Quán Cafe | F&B Automation | AutoFlow VN",
    description:
      "Zalo OA cho F&B: loyalty, nhắc hẹn, feedback tự động. Tăng 40% khách quay lại.",
    url: "https://autoflowvn.net/dich-vu/fnb",
  },
};

export default function FnbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
