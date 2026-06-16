import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  dark?: boolean;
}

export default function CTASection({
  title = "Speak with an Immigration Consultant Today",
  subtitle = "Get expert guidance tailored to your specific situation. Book a free initial consultation with our team.",
  primaryCTA = { label: "Book Free Consultation", href: "/contact" },
  secondaryCTA,
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`relative overflow-hidden py-20 grain ${dark ? "gradient-navy" : "bg-gold-500"}`}>
      {/* Decorative animated backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {dark && (
          <>
            <div className="aurora-blob top-[-30%] left-[10%] w-[34rem] h-[34rem] bg-gold-500/10 animate-aurora" />
            <div
              className="aurora-blob bottom-[-30%] right-[5%] w-[30rem] h-[30rem] bg-navy-500/30 animate-aurora"
              style={{ animationDelay: "-7s" }}
            />
          </>
        )}
        <div className="absolute inset-0 opacity-[0.05] bg-grid-fade [background-size:50px_50px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className={`group w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform duration-300 hover:scale-105 ${dark ? "bg-gold-500 shadow-glow" : "bg-navy-900"}`}>
          <Phone className={`w-8 h-8 ${dark ? "text-navy-900" : "text-gold-400"}`} />
        </div>

        <h2
          className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>

        <p
          className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${
            dark ? "text-white/70" : "text-navy-800/80"
          }`}
        >
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className={`inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
              dark
                ? "bg-gold-500 text-navy-900 hover:bg-gold-400"
                : "bg-navy-900 text-white hover:bg-navy-800"
            }`}
          >
            {primaryCTA.label}
            <ArrowRight className="w-4 h-4" />
          </Link>

          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-200 ${
                dark
                  ? "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  : "border-navy-900/30 text-navy-900 hover:bg-navy-900/10"
              }`}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>

        {dark && (
          <p className="mt-6 text-xs text-white/40">
            Independent consulting service. Not affiliated with the Government of India or any government agency.
          </p>
        )}
      </div>
    </section>
  );
}
