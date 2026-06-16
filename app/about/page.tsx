import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Target, Eye, Award, Building2, Users, Globe } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About India Visa Advisory | Independent Immigration Consulting",
  description:
    "Learn about India Visa Advisory — an independent immigration consulting firm providing expert guidance on India visas, FRRO compliance, and foreign national immigration services.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About India Visa Advisory | Independent Immigration Consulting",
    description:
      "An independent consulting firm providing expert India visa and immigration guidance to foreign nationals, companies, and families.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We provide honest, transparent guidance. We never make promises we cannot keep and always disclose the real risks and requirements of every case.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Immigration documents require exactness. We review every detail of every application to minimize errors and maximize approval chances.",
  },
  {
    icon: Users,
    title: "Client-Centricity",
    description:
      "Every client has a unique situation. We tailor our approach to your specific needs, not a generic template.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We understand the international context our clients come from and bridge that with India's specific regulatory requirements.",
  },
];

const industries = [
  "Technology & Software",
  "Manufacturing & Engineering",
  "Financial Services",
  "Consulting & Professional Services",
  "Healthcare & Pharmaceuticals",
  "Trading & Commerce",
  "Education & Research",
  "Media & Entertainment",
  "Hospitality & Tourism",
  "Energy & Infrastructure",
  "Retail & Consumer Goods",
  "Legal & Compliance",
];

const whyUs = [
  {
    stat: "10+",
    label: "Years of Experience",
    detail: "Over a decade of focused India immigration consulting expertise.",
  },
  {
    stat: "2,500+",
    label: "Successful Cases",
    detail: "Thousands of visa applications, FRRO registrations, and extensions handled successfully.",
  },
  {
    stat: "60+",
    label: "Nationalities Served",
    detail: "Clients from across the globe trust us with their India immigration needs.",
  },
  {
    stat: "98%",
    label: "Client Satisfaction",
    detail: "Our commitment to quality is reflected in our outstanding client satisfaction rate.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Your Trusted Partner for India Immigration
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            India Visa Advisory is an independent consulting firm providing expert, personalized guidance
            on Indian visa and immigration matters to foreign nationals, international companies, and their
            families.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/60 text-sm">
            <Shield className="w-4 h-4 text-gold-400" />
            Independent service — not affiliated with the Government of India or any government agency
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-consultation.jpg"
                  alt="Immigration consultation desk with documents and laptop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gold-500/20 blur-2xl -z-10" aria-hidden="true" />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Specialists in India Immigration
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  India Visa Advisory was founded with a single purpose: to make India&apos;s complex visa
                  and immigration process accessible, transparent, and manageable for foreign nationals
                  and the companies that employ them.
                </p>
                <p>
                  We are an independent private consulting firm. We are not a government agency, law firm,
                  or official representative of any government authority. Our role is to provide expert
                  advice, prepare documentation, and guide clients through the processes managed by
                  India&apos;s immigration authorities — consulates, embassies, and the FRRO.
                </p>
                <p>
                  Our team combines deep knowledge of India&apos;s immigration regulations with practical,
                  hands-on experience in supporting hundreds of clients across every visa category. We
                  stay up-to-date with regulatory changes and translate complex official requirements
                  into clear, actionable guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="bg-navy-50 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold-500 font-display mb-1">
                  {item.stat}
                </div>
                <div className="font-semibold text-navy-900 text-sm mb-2">{item.label}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-900 rounded-3xl p-8 text-white">
              <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-navy-900" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To empower foreign nationals and international companies with the expert guidance they
                need to navigate India&apos;s immigration system confidently and compliantly — removing
                uncertainty, reducing risk, and enabling people to focus on their careers and businesses
                rather than paperwork.
              </p>
            </div>

            <div className="bg-gold-50 rounded-3xl p-8 border border-gold-200">
              <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted independent immigration advisory firm for India — recognized
                internationally for our expertise, transparency, and commitment to client success. We
                aim to be the firm that international professionals and companies turn to first when
                they think of India immigration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-navy-700" />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-3">
                For Companies
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Why Businesses Choose India Visa Advisory
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Managing foreign national employees in India requires expertise that most HR teams
                  do not have in-house. India&apos;s immigration rules are detailed, employer-specific,
                  and subject to change. Non-compliance can have serious consequences for both the
                  employee and the company.
                </p>
                <p>
                  We serve as the immigration compliance partner for companies across industries —
                  handling everything from initial visa applications to ongoing FRRO management,
                  address reporting, employer reporting obligations, and visa renewal calendars.
                </p>
                <p>
                  Our clients include multinational corporations, startups, SMEs, and foreign
                  companies of all sizes — all of whom rely on us to keep their India operations
                  immigration-compliant.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/foreign-company-india-advisory"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors"
                >
                  <Building2 className="w-4 h-4" />
                  Foreign Company Advisory
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 text-white/60 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-navy-900 mb-1 text-sm">Important Disclaimer</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  India Visa Advisory is an independent private consulting firm. We are not affiliated
                  with the Government of India, Ministry of External Affairs (MEA), Foreigners Regional
                  Registration Office (FRRO), or any government agency. We are not a law firm and do not
                  provide legal advice. All visa and immigration decisions are made solely by the
                  relevant government authorities. Our role is to provide professional consulting guidance
                  and document preparation assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        subtitle="Contact our team today for a free initial consultation. Let us help you navigate India's immigration process."
      />
    </>
  );
}
