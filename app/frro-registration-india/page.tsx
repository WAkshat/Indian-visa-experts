import type { Metadata } from "next";
import { services } from "@/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

const service = services.find((s) => s.slug === "frro-registration-india")!;

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

export default function FRRORegistrationPage() {
  return <ServicePageTemplate service={service} />;
}
