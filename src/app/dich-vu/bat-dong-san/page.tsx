import ServicePageTemplate from "@/components/ServicePageTemplate";
import { batDongSanService } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = batDongSanService.metadata;

export default function BatDongSanPage() {
  return <ServicePageTemplate config={batDongSanService} />;
}
