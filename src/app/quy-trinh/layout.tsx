import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Quy Trình Làm Việc 4 Bước | AutoFlow VN",
  description:
    "Audit miễn phí, thiết kế workflow, build & test, bàn giao và training. Hoàn thành trong 2–4 tuần.",
  alternates: { canonical: "https://autoflowvn.net/quy-trinh" },
  openGraph: {
    title: "Quy Trình Làm Việc 4 Bước | AutoFlow VN",
    description:
      "Audit miễn phí, thiết kế workflow, build & test, bàn giao và training. Hoàn thành trong 2–4 tuần.",
    url: "https://autoflowvn.net/quy-trinh",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Quy Trình Tự Động Hóa 4 Bước của AutoFlow VN",
  description:
    "Quy trình từ audit đến bàn giao workflow tự động hóa cho doanh nghiệp SME Việt Nam.",
  totalTime: "P4W",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Miễn Phí",
      text: "Đánh giá quy trình hiện tại, xác định điểm nghẽn và cơ hội tự động hóa",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Thiết Kế Workflow",
      text: "Thiết kế luồng tự động hóa phù hợp với quy trình và công cụ hiện có",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Build & Test",
      text: "Xây dựng workflow trên n8n, test kỹ lưỡng với dữ liệu thực",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Bàn Giao & Training",
      text: "Bàn giao, hướng dẫn sử dụng, hỗ trợ 30 ngày sau go-live",
    },
  ],
};

export default function QuyTrinhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={howToJsonLd} />
      {children}
    </>
  );
}
