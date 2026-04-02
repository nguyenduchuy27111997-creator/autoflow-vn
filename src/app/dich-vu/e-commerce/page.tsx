import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ecommerceService } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = ecommerceService.metadata;

export default function EcommercePage() {
  return <ServicePageTemplate config={ecommerceService} />;
}
