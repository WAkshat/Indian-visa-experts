import type { Metadata } from "next";
import Link from "next/link";
import VisaFinder from "@/components/tools/VisaFinder";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { finderOptions } from "@/data/visa-facts";

export const metadata: Metadata = {
  title: "Which India Visa Do I Need? Free Visa Finder",
  description:
    "Answer one question and find the right India visa — Business, Employment, X (Dependent), Medical, OCI, extension or FRRO. Free, instant, and links to expert help.",
  alternates: { canonical: "/india-visa-finder" },
  openGraph: {
    title: "Which India Visa Do I Need? — Free Visa Finder",
    description:
      "Tell us why you're coming to India and we'll point you to the right visa, instantly.",
  },
};

export default function VisaFinderPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "India Visa Finder", path: "/india-visa-finder" },
          ]),
          itemListSchema(
            "India visa types",
            finderOptions.map((o) => ({ name: o.visaName, path: `/${o.slug}` }))
          ),
        ]}
      />

      <section className="pt-32 pb-12 gradient-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Free Tool
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Which India Visa Do I Need?
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            India has a different visa for every purpose. Tell us why you&apos;re
            coming and we&apos;ll point you to the right one — then connect you with
            expert help to apply.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisaFinder />
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Want to compare every option side by side?{" "}
            <Link href="/india-visa-types" className="text-navy-700 font-semibold hover:text-gold-600">
              See the India visa types comparison
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
