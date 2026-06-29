import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "India Visa & Tourism Statistics (Official Data)",
  description:
    "Key India foreign-arrival and e-Visa figures from official sources (Ministry of Tourism, PIB, Bureau of Immigration), with links to the primary datasets. Real data, attributed.",
  alternates: { canonical: "/india-immigration-statistics" },
  openGraph: {
    title: "India Visa & Tourism Statistics (Official Data)",
    description:
      "Foreign tourist arrivals, e-Visa reach and tourism earnings — sourced from official Government of India data.",
  },
};

// Every figure is attributed to an official source. Tourism figures are the
// Government of India's published numbers; they update annually — the source
// links go to the primary datasets for the latest.
const stats = [
  {
    value: "9.95 million",
    label: "Foreign tourist arrivals in India, 2024",
    source: "Ministry of Tourism / PIB",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2087824",
  },
  {
    value: "9.52 million",
    label: "Foreign tourist arrivals in India, 2023",
    source: "India Tourism Statistics 2023",
    href: "https://tourism.gov.in/sites/default/files/2024-02/India%20Tourism%20Statistics%202023-English.pdf",
  },
  {
    value: "18.89 million",
    label: "International tourist arrivals (incl. NRIs), 2023",
    source: "India Tourism Statistics 2023",
    href: "https://tourism.gov.in/sites/default/files/2024-02/India%20Tourism%20Statistics%202023-English.pdf",
  },
  {
    value: "₹2,31,927 crore",
    label: "Foreign exchange earnings from tourism, 2023",
    source: "India Tourism Statistics 2023",
    href: "https://tourism.gov.in/sites/default/files/2024-02/India%20Tourism%20Statistics%202023-English.pdf",
  },
  {
    value: "160+ countries",
    label: "Eligible for India's e-Visa, across 9 categories",
    source: "Ministry of Tourism",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2087824",
  },
  {
    value: "+47.9%",
    label: "Growth in foreign tourist arrivals, 2023 vs 2022",
    source: "DD News / Ministry of Tourism",
    href: "https://ddnews.gov.in/en/india-records-47-90-surge-in-foreign-tourist-arrivals-in-2023/",
  },
];

const eVisaCategories = [
  { name: "e-Tourist", href: "/india-visa-finder" },
  { name: "e-Business", href: "/business-visa-india" },
  { name: "e-Medical & e-Medical Attendant", href: "/medical-visa-india" },
  { name: "e-Conference", href: "/business-visa-india" },
];

const sources = [
  {
    name: "Ministry of Tourism — India Tourism Statistics",
    desc: "Annual flagship report: foreign tourist arrivals, e-Visa arrivals, source countries, and earnings.",
    href: "https://tourism.gov.in/tourism-statistics",
  },
  {
    name: "Press Information Bureau (PIB)",
    desc: "Official government press releases, including the Ministry of Tourism year-end reviews.",
    href: "https://www.pib.gov.in",
  },
  {
    name: "Bureau of Immigration, India",
    desc: "The authority for immigration, FRRO/FRO registration and foreigner regulations.",
    href: "https://boi.gov.in",
  },
  {
    name: "Indian Visa Online (official e-Visa portal)",
    desc: "Government portal for e-Visa applications and category eligibility.",
    href: "https://indianvisaonline.gov.in",
  },
];

export default function StatisticsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "India Visa & Tourism Statistics", path: "/india-immigration-statistics" },
        ])}
      />

      <section className="pt-32 pb-12 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Data & Sources
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            India Visa &amp; Tourism Statistics
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Key figures on foreign arrivals and India&apos;s e-Visa programme, drawn
            entirely from official Government of India sources — with links to the
            primary datasets so you can cite them yourself.
          </p>
        </div>
      </section>

      {/* Key figures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-soft">
                <div className="font-display text-3xl font-bold text-navy-900 mb-2">{s.value}</div>
                <p className="text-gray-600 text-sm leading-snug mb-3">{s.label}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-gold-600 hover:text-gold-700"
                >
                  {s.source}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-400">
            Figures are Government of India published data for the years shown and
            update annually — follow each source link for the latest numbers.
          </p>
        </div>
      </section>

      {/* e-Visa categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-3">
            What India&apos;s e-Visa covers
          </h2>
          <p className="text-gray-600 mb-6">
            India&apos;s electronic visa spans nine sub-categories. The most common:
          </p>
          <div className="flex flex-wrap gap-3">
            {eVisaCategories.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy-50 text-navy-800 text-sm font-medium hover:bg-navy-900 hover:text-white transition-colors"
              >
                {c.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Official sources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-6">
            Official data sources
          </h2>
          <div className="space-y-4">
            {sources.map((src) => (
              <a
                key={src.name}
                href={src.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl border border-gray-100 p-5 hover:border-gold-200 hover:shadow-soft transition-all"
              >
                <div className="flex items-center gap-2 font-semibold text-navy-900 group-hover:text-gold-600">
                  {src.name}
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </div>
                <p className="text-gray-600 text-sm mt-1">{src.desc}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-navy-900 text-white p-8 text-center">
            <h2 className="font-display text-xl font-bold mb-2">Planning a trip or move to India?</h2>
            <p className="text-white/70 text-sm mb-5">
              Find the right visa in seconds, then get expert help to apply.
            </p>
            <Link
              href="/india-visa-finder"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors"
            >
              Use the visa finder
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-gray-400 leading-relaxed">
            India Visa Experts is an independent consultancy and is not affiliated
            with the Government of India or any government agency. Statistics are
            reproduced from the cited official sources for reference.
          </p>
        </div>
      </section>
    </>
  );
}
