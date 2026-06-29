"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Heart,
  Stethoscope,
  Globe,
  CalendarDays,
  ClipboardList,
  Building2,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { finderOptions, type FinderOption } from "@/data/visa-facts";
import { whatsappLink } from "@/data/contact";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Users,
  Heart,
  Stethoscope,
  Globe,
  CalendarDays,
  ClipboardList,
  Building2,
};

export default function VisaFinder() {
  const [selected, setSelected] = useState<FinderOption | null>(null);

  if (selected) {
    const waMsg = `Hello India Visa Experts, based on your finder I think I need the ${selected.visaName}. Can you confirm and guide me?`;
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6 sm:p-8">
        <div className="flex items-center gap-2 text-gold-600 text-xs font-semibold uppercase tracking-widest mb-4">
          <CheckCircle2 className="w-4 h-4" />
          Suggested visa
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
          {selected.visaName}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">{selected.why}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/${selected.slug}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
          >
            See the {selected.visaName} page
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={whatsappLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors"
          >
            Confirm on WhatsApp
          </a>
        </div>

        <button
          onClick={() => setSelected(null)}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Start over
        </button>

        <p className="mt-6 text-xs text-gray-400 leading-relaxed">
          This is general guidance, not legal advice. The right visa depends on your
          nationality and circumstances — we&apos;ll confirm the correct category for you.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-navy-900 mb-1">
        What brings you to India?
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Pick the option that fits best — we&apos;ll point you to the right visa.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {finderOptions.map((opt) => {
          const Icon = icons[opt.icon] || Briefcase;
          return (
            <button
              key={opt.id}
              onClick={() => setSelected(opt)}
              className="group flex items-start gap-3 text-left p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-gold-300 hover:shadow-soft transition-all"
            >
              <span className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
                <Icon className="w-4 h-4 text-gold-400 group-hover:text-navy-900 transition-colors" />
              </span>
              <span className="text-sm text-navy-800 leading-snug pt-1">{opt.label}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-gray-400">
        Not sure? <Link href="/contact" className="text-navy-700 font-medium hover:text-gold-600">Ask our team</Link> — a quick chat settles it.
      </p>
    </div>
  );
}
