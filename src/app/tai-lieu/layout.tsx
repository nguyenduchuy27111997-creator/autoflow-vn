import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tài Liệu & Công Cụ Miễn Phí | AutoFlow VN",
  description:
    "Quiz tự đánh giá, checklist tự động hóa, case study, và hướng dẫn thực tế — tất cả miễn phí. Giúp SME Việt Nam hiểu rõ nhu cầu tự động hóa và bắt đầu đúng cách.",
  openGraph: {
    title: "Tài Liệu & Công Cụ Miễn Phí | AutoFlow VN",
    description:
      "Quiz, checklist, case study miễn phí về tự động hóa cho SME Việt Nam.",
    url: "https://autoflowvn.net/tai-lieu",
  },
};

export default function TaiLieuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
