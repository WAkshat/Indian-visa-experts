import type { Metadata } from "next";
import { services } from "@/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

const service = services.find((s) => s.slug === "foreign-company-india-advisory")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
  },
};

export default function ForeignCompanyAdvisoryPage() {
  return <ServicePageTemplate service={service} />;
}
