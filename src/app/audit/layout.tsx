import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Quy Trình Miễn Phí | AutoFlow VN",
  description:
    "Đánh giá quy trình vận hành doanh nghiệp miễn phí. Nhận báo cáo chi tiết và lộ trình tự động hóa trong 48 giờ.",
  alternates: { canonical: "https://autoflowvn.net/audit" },
  openGraph: {
    title: "Audit Quy Trình Miễn Phí | AutoFlow VN",
    description:
      "Đánh giá quy trình vận hành doanh nghiệp miễn phí. Nhận báo cáo chi tiết và lộ trình tự động hóa trong 48 giờ.",
    url: "https://autoflowvn.net/audit",
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
