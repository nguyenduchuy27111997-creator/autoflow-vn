import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ Tự Động Hóa Theo Ngành | AutoFlow VN",
  description:
    "Giải pháp tự động hóa chuyên biệt cho E-commerce, Giáo dục, Bất động sản, F&B. Kết quả trong 2–4 tuần.",
  alternates: { canonical: "https://autoflowvn.net/dich-vu" },
  openGraph: {
    title: "Dịch Vụ Tự Động Hóa Theo Ngành | AutoFlow VN",
    description:
      "Giải pháp tự động hóa chuyên biệt cho E-commerce, Giáo dục, Bất động sản, F&B. Kết quả trong 2–4 tuần.",
    url: "https://autoflowvn.net/dich-vu",
  },
};

export default function DichVuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
