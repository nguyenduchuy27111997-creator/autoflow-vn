import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz: Doanh Nghiệp Bạn Cần Tự Động Hóa Gì? | AutoFlow VN",
  description:
    "Trả lời 5 câu hỏi để nhận gợi ý tự động hóa phù hợp với doanh nghiệp của bạn. Miễn phí.",
  alternates: { canonical: "https://autoflowvn.net/quiz" },
  openGraph: {
    title: "Quiz: Doanh Nghiệp Bạn Cần Tự Động Hóa Gì? | AutoFlow VN",
    description:
      "Trả lời 5 câu hỏi để nhận gợi ý tự động hóa phù hợp với doanh nghiệp của bạn. Miễn phí.",
    url: "https://autoflowvn.net/quiz",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
