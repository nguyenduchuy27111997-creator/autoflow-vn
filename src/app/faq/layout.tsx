import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp — AutoFlow VN",
  description:
    "15 câu hỏi thường gặp về AutoFlow VN — giá cả, quy trình, bảo mật data, gói hosting, và cam kết hoàn tiền. Tự động hóa quy trình cho SME Việt Nam.",
  alternates: { canonical: "https://autoflowvn.net/faq" },
  openGraph: {
    title: "Câu hỏi thường gặp — AutoFlow VN",
    description:
      "15 câu hỏi thường gặp về AutoFlow VN — giá, quy trình, bảo mật, hosting.",
    url: "https://autoflowvn.net/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
