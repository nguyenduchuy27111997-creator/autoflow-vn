import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tài Liệu E-commerce Automation | AutoFlow VN",
  description:
    "Hướng dẫn tự động hóa quy trình e-commerce: đồng bộ đơn hàng Shopee/Tiki/TikTok Shop, tự động cập nhật kho, gửi thông báo Zalo. Tài liệu miễn phí cho SME Việt Nam.",
  alternates: { canonical: "https://autoflowvn.net/tai-lieu/e-commerce" },
  openGraph: {
    title: "Tài Liệu E-commerce Automation | AutoFlow VN",
    description:
      "Tự động hóa đơn hàng Shopee, Tiki, TikTok Shop — hướng dẫn thực tế miễn phí.",
    url: "https://autoflowvn.net/tai-lieu/e-commerce",
  },
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
