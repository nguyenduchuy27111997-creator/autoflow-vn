import type { Metadata } from "next";
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google";
import ScriptLoader from "@/components/analytics/ScriptLoader";
import { PostHogSessionGate } from "@/components/analytics/PostHogSessionGate";
import JsonLd from "@/components/JsonLd";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import FacebookPixel from "@/components/analytics/FacebookPixel";
import ConsentBannerWrapper from "@/components/analytics/ConsentBannerWrapper";
import UTMCapture from "@/components/analytics/UTMCapture";
import ZaloTracker from "@/components/analytics/ZaloTracker";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SocialProof from "@/components/SocialProof";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const ZALO_OA_ID = process.env.NEXT_PUBLIC_ZALO_OA_ID;

export const metadata: Metadata = {
  title: {
    default: "AutoFlow VN — Tự Động Hóa Quy Trình Cho SME Việt Nam",
    template: "%s | AutoFlow VN",
  },
  description:
    "Giúp doanh nghiệp vừa và nhỏ Việt Nam tự động hóa quy trình lặp lại — tích hợp Zalo, MISA, Shopee, KiotViet — kết quả trong 2–4 tuần.",
  keywords: [
    "tự động hóa",
    "automation",
    "SME Việt Nam",
    "tự động hóa quy trình",
    "Zalo OA",
    "MISA",
    "KiotViet",
    "Shopee",
    "zalo oa automation",
    "tự động hóa Shopee",
    "tiết kiệm thời gian doanh nghiệp",
  ],
  metadataBase: new URL("https://autoflowvn.net"),
  openGraph: {
    title: "AutoFlow VN — Tự Động Hóa Quy Trình Cho SME Việt Nam",
    description:
      "Tiết kiệm 10–20 giờ/tuần. Loại bỏ lỗi nhập tay. ROI trong 5 tháng.",
    locale: "vi_VN",
    type: "website",
    siteName: "AutoFlow VN",
    url: "https://autoflowvn.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoFlow VN — Tự Động Hóa Quy Trình Cho SME Việt Nam",
    description:
      "Tiết kiệm 10–20 giờ/tuần. Loại bỏ lỗi nhập tay. ROI trong 5 tháng.",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
    // Tell Wayback Machine + similar archivers not to snapshot — historical
    // versions of educational blog posts referencing n8n could surface in
    // archives even after we remove them from live site.
    noarchive: true,
  },
  other: {
    "geo.region": "VN-SG",
    "geo.placename": "Ho Chi Minh City",
    "geo.position": "10.762622;106.660172",
    ICBM: "10.762622, 106.660172",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        {children}
        {ZALO_OA_ID && (
          <div
            className="zalo-chat-widget"
            data-oaid={ZALO_OA_ID}
            data-welcome-message="Chào bạn! Mình là AutoFlow. Bạn cần tư vấn về tự động hóa không?"
            data-autopopup="0"
            data-width="350"
            data-height="420"
          />
        )}
        <GoogleAnalytics />
        <ScriptLoader />
        <PostHogSessionGate />
        <FacebookPixel />
        <ConsentBannerWrapper />
        <Suspense fallback={null}>
          <UTMCapture />
        </Suspense>
        <ZaloTracker />
        <ExitIntentPopup />
        <SocialProof />
        <ChatWidget />
      </body>
    </html>
  );
}
