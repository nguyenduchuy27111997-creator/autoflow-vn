import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ Quảng Cáo Facebook Ads | AutoFlow VN",
  description:
    "Chạy Facebook Ads kết hợp tự động hóa lead nurturing. Tăng chuyển đổi, giảm chi phí.",
  alternates: { canonical: "https://autoflowvn.net/fb-ads" },
  openGraph: {
    title: "Dịch Vụ Quảng Cáo Facebook Ads | AutoFlow VN",
    description:
      "Chạy Facebook Ads kết hợp tự động hóa lead nurturing. Tăng chuyển đổi, giảm chi phí.",
    url: "https://autoflowvn.net/fb-ads",
  },
};

export default function FbAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
