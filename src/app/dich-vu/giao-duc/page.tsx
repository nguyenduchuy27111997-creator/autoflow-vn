import ServicePageTemplate from "@/components/ServicePageTemplate";
import { giaoDucService } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = giaoDucService.metadata;

export default function GiaoDucPage() {
  return <ServicePageTemplate config={giaoDucService} />;
}
