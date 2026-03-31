import type { Metadata } from "next";
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { Suspense } from "react";
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import ConsentBannerWrapper from '@/components/analytics/ConsentBannerWrapper';
import UTMCapture from '@/components/analytics/UTMCapture';
import ZaloTracker from '@/components/analytics/ZaloTracker';
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
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
    "Giúp doanh nghiệp vừa và nhỏ Việt Nam tự động hóa quy trình lặp lại bằng n8n — tích hợp Zalo, MISA, Shopee, KiotViet — kết quả trong 2–4 tuần.",
  keywords: [
    "tự động hóa",
    "automation",
    "SME Việt Nam",
    "n8n",
    "Zalo OA",
    "MISA",
    "KiotViet",
    "Shopee",
    "zalo oa automation",
    "tự động hóa Shopee",
    "n8n tiếng Việt",
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
  icons: {
    icon: "/icon.svg",
    apple: "/icon-192.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://autoflowvn.net",
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
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Organization schema */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AutoFlow VN",
            url: "https://autoflowvn.net",
            logo: "https://autoflowvn.net/icon.svg",
            email: "hello@autoflowvn.net",
            description:
              "Giúp doanh nghiệp vừa và nhỏ Việt Nam tự động hóa quy trình lặp lại bằng n8n — tích hợp Zalo, MISA, Shopee, KiotViet.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "TP. Hồ Chí Minh",
              addressCountry: "VN",
            },
            sameAs: [
              "https://facebook.com/autoflowvn",
            ],
          }}
        />
        {/* LocalBusiness schema */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AutoFlow VN",
            description:
              "Giúp doanh nghiệp vừa và nhỏ Việt Nam tự động hóa quy trình lặp lại bằng n8n — tích hợp Zalo, MISA, Shopee, KiotViet.",
            url: "https://autoflowvn.net",
            email: "hello@autoflowvn.net",
            address: {
              "@type": "PostalAddress",
              addressLocality: "TP. Hồ Chí Minh",
              addressCountry: "VN",
            },
            priceRange: "$$",
            serviceType: [
              "Automation Consulting",
              "n8n Workflow Development",
              "Business Process Automation",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Gói dịch vụ tự động hóa",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Starter — 1 workflow",
                    description: "Tự động hóa 1 quy trình, hoàn thành trong 1-2 tuần",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "8000000",
                    priceCurrency: "VND",
                    minPrice: "8000000",
                    maxPrice: "15000000",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Growth — 3-5 workflows",
                    description: "Tự động hóa đa quy trình, hoàn thành trong 3-4 tuần",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "20000000",
                    priceCurrency: "VND",
                    minPrice: "20000000",
                    maxPrice: "35000000",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Scale — 8-12 workflows",
                    description: "Tự động hóa toàn bộ vận hành, hoàn thành trong 6-8 tuần",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "50000000",
                    priceCurrency: "VND",
                    minPrice: "50000000",
                    maxPrice: "80000000",
                  },
                },
              ],
            },
          }}
        />
        {children}
        {ZALO_OA_ID && (
          <Script
            src="https://sp.zalo.me/plugins/sdk.js"
            strategy="lazyOnload"
          />
        )}
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
        <ConsentBannerWrapper />
        <Suspense fallback={null}><UTMCapture /></Suspense>
        <ZaloTracker />
      </body>
    </html>
  );
}
