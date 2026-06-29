import type { Metadata } from "next";
import Link from "next/link";
import FrroDeadlineCalculator from "@/components/tools/FrroDeadlineCalculator";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, howToSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FRRO Registration Deadline Calculator (India)",
  description:
    "Enter your India arrival date to instantly find your FRRO registration deadline. Foreign nationals who must register do so within 14 days of arrival.",
  alternates: { canonical: "/frro-registration-deadline-calculator" },
  openGraph: {
    title: "FRRO Registration Deadline Calculator (India)",
    description:
      "Find your FRRO registration deadline in seconds — 14 days from arrival for those who must register.",
  },
};

const faqs = [
  {
    question: "What is the FRRO registration deadline in India?",
    answer:
      "Foreign nationals who are required to register must do so within 14 days of arriving in India. This calculator adds 14 days to your arrival date to show your deadline.",
  },
  {
    question: "Who has to register with the FRRO?",
    answer:
      "Generally, foreign nationals staying in India beyond 180 days, and certain visa categories regardless of stay length, must register. OCI cardholders are usually exempt. We can confirm whether you need to register.",
  },
  {
    question: "What happens if I miss the FRRO deadline?",
    answer:
      "Late registration can attract penalties at the FRRO's discretion and complicate later extensions or exit. If your deadline has passed, contact us immediately to regularise your status.",
  },
];

export default function FrroCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FRRO Deadline Calculator", path: "/frro-registration-deadline-calculator" },
          ]),
          howToSchema(
            "Calculate your FRRO registration deadline",
            "Find the date by which you must register with the FRRO after arriving in India.",
            [
              "Enter your date of arrival in India.",
              "The tool adds the 14-day registration window.",
              "Note your deadline and register (or contact us) before it.",
            ]
          ),
          faqSchema(faqs),
        ]}
      />

      <section className="pt-32 pb-12 gradient-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Free Tool
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            FRRO Registration Deadline Calculator
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            If you must register with the FRRO, the clock starts the day you land.
            Enter your arrival date to see your deadline.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FrroDeadlineCalculator />
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">
            FRRO deadline — common questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-navy-900 mb-2">{f.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600">
            Need it handled for you?{" "}
            <Link href="/frro-registration-india" className="text-navy-700 font-semibold hover:text-gold-600">
              See our FRRO registration service
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
