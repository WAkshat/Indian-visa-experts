import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/sections/FAQSection";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "India Visa & Immigration FAQ",
  description:
    "Answers to the most common questions about India visas, FRRO registration, extensions, employment, dependents and compliance — searchable by category.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "India Visa & Immigration FAQ",
    description:
      "Clear answers on India Business, Employment, X, Medical and OCI visas, FRRO registration, extensions and compliance.",
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section className="pt-32 pb-12 gradient-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Knowledge Base
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            India Visa &amp; Immigration FAQ
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Straight answers to the questions we hear most — filter by category, or{" "}
            <Link href="/india-visa-finder" className="text-gold-400 font-semibold hover:underline">
              find the right visa
            </Link>{" "}
            for your situation.
          </p>
        </div>
      </section>

      <FAQSection
        showCategories
        title="Browse questions by category"
        subtitle="Business, Employment, X (Dependent), Medical and OCI visas, FRRO registration, extensions and compliance."
      />
    </>
  );
}
