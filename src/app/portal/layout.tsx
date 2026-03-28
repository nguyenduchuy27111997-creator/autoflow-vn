import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal | AutoFlow VN",
  robots: { index: false, follow: false },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
