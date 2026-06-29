import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { visaComparison } from "@/data/visa-facts";

export const metadata: Metadata = {
  title: "India Visa Types Compared (2026 Guide)",
  description:
    "Compare India's main visa types side by side — Business, Employment, X (Dependent), Medical, OCI & Entry — by who it's for, stay length, entries, extendability and e-Visa availability.",
  alternates: { canonical: "/india-visa-types" },
  openGraph: {
    title: "India Visa Types Compared",
    description:
      "A clear side-by-side comparison of India's main visa categories, with expert help for each.",
  },
};

const cols: { key: keyof (typeof visaComparison)[number]; label: string }[] = [
  { key: "bestFor", label: "Best for" },
  { key: "typicalStay", label: "Typical stay" },
  { key: "multipleEntry", label: "Entries" },
  { key: "extendableInIndia", label: "Extend in India?" },
  { key: "eVisa", label: "e-Visa?" },
];

export default function VisaTypesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "India Visa Types", path: "/india-visa-types" },
          ]),
          itemListSchema(
            "India visa types compared",
            visaComparison.map((v) => ({ name: v.name, path: `/${v.slug}` }))
          ),
        ]}
      />

      <section className="pt-32 pb-12 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Reference Guide
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            India Visa Types, Compared
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            India issues a different visa for each purpose. Here&apos;s how the main
            categories compare — and where to get expert help with each.{" "}
            <Link href="/india-visa-finder" className="text-gold-400 font-semibold hover:underline">
              Not sure which you need?
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900 text-white text-left">
                  <th className="px-5 py-4 font-semibold">Visa</th>
                  {cols.map((c) => (
                    <th key={c.key} className="px-5 py-4 font-semibold">{c.label}</th>
                  ))}
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody>
                {visaComparison.map((v, i) => (
                  <tr key={v.slug} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <th scope="row" className="px-5 py-4 text-left align-top">
                      <Link href={`/${v.slug}`} className="font-display font-bold text-navy-900 hover:text-gold-600">
                        {v.name}
                      </Link>
                    </th>
                    {cols.map((c) => (
                      <td key={c.key} className="px-5 py-4 align-top text-gray-600">{v[c.key]}</td>
                    ))}
                    <td className="px-5 py-4 align-top">
                      <Link href={`/${v.slug}`} aria-label={`${v.name} details`} className="text-gold-600 hover:text-gold-700">
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {visaComparison.map((v) => (
              <div key={v.slug} className="rounded-2xl border border-gray-200 overflow-hidden">
                <Link href={`/${v.slug}`} className="block bg-navy-900 text-white px-5 py-3 font-display font-bold flex items-center justify-between">
                  {v.name}
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
                <dl className="divide-y divide-gray-100">
                  {cols.map((c) => (
                    <div key={c.key} className="px-5 py-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gold-600">{c.label}</dt>
                      <dd className="text-sm text-gray-700 mt-0.5">{v[c.key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-400 leading-relaxed max-w-3xl">
            General guidance only, not legal advice. Exact stay, entries, fees and
            extendability depend on your nationality, visa sub-category and current
            government rules — we&apos;ll confirm the right category and requirements
            for your case.
          </p>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors"
            >
              Talk to a visa expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
