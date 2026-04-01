import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tự Động Hóa E-commerce: Shopee, TikTok Shop, KiotViet | AutoFlow VN",
  description:
    "Đồng bộ đơn hàng, tồn kho, khách hàng tự động. Tích hợp Shopee, TikTok Shop, KiotViet, MISA.",
  alternates: { canonical: "https://autoflowvn.net/dich-vu/e-commerce" },
  openGraph: {
    title: "Tự Động Hóa E-commerce: Shopee, TikTok Shop, KiotViet | AutoFlow VN",
    description:
      "Đồng bộ đơn hàng, tồn kho, khách hàng tự động. Tích hợp Shopee, TikTok Shop, KiotViet, MISA.",
    url: "https://autoflowvn.net/dich-vu/e-commerce",
  },
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
