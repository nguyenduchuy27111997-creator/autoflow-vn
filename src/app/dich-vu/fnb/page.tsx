import ServicePageTemplate from "@/components/ServicePageTemplate";
import { fnbService } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = fnbService.metadata;

export default function FnBPage() {
  return <ServicePageTemplate config={fnbService} />;
}
