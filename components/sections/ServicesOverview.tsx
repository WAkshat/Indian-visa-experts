"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Heart,
  ClipboardList,
  CalendarDays,
  Globe,
  Building2,
  FileCheck,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/media/AnimatedSection";
import { media } from "@/data/media";
import { blurUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Users,
  Heart,
  ClipboardList,
  CalendarDays,
  Globe,
  Building2,
  FileCheck,
  Stethoscope,
};

const services = [
  {
    slug: "business-visa-india",
    title: "Business Visa",
    description:
      "For executives, investors, and entrepreneurs visiting India for meetings, conferences, and business exploration.",
    icon: "Briefcase",
    color: "from-blue-500 to-blue-600",
  },
  {
    slug: "employment-visa-india",
    title: "Employment Visa",
    description:
      "For foreign nationals taking up paid employment with an Indian company, including inter-company transfers.",
    icon: "Users",
    color: "from-navy-700 to-navy-900",
  },
  {
    slug: "x-visa-india",
    title: "X Visa (Dependent)",
    description:
      "For spouses and dependent children of foreign nationals holding qualifying Indian visas.",
    icon: "Heart",
    color: "from-rose-500 to-rose-600",
  },
  {
    slug: "frro-registration-india",
    title: "FRRO Registration",
    description:
      "Mandatory registration for foreign nationals staying beyond 180 days. We handle the complete process.",
    icon: "ClipboardList",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    slug: "visa-extension-india",
    title: "Visa Extension",
    description:
      "Extend your authorized stay in India through the FRRO when your visa validity needs to be prolonged.",
    icon: "CalendarDays",
    color: "from-amber-500 to-amber-600",
  },
  {
    slug: "oci-services-india",
    title: "OCI & Entry Visa",
    description:
      "OCI card applications and Entry Visa services for persons of Indian origin and their families.",
    icon: "Globe",
    color: "from-purple-500 to-purple-600",
  },
  {
    slug: "foreign-company-india-advisory",
    title: "Foreign Company Advisory",
    description:
      "Holistic immigration and compliance support for foreign companies and their HR teams in India.",
    icon: "Building2",
    color: "from-teal-500 to-teal-600",
  },
  {
    slug: "contact",
    title: "Document Review",
    description:
      "Professional review of all visa and immigration documents before submission to minimize rejection risk.",
    icon: "FileCheck",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    slug: "medical-visa-india",
    title: "Medical Tourism",
    description:
      "e-Medical, Medical Attendant, and AYUSH visa support for international patients seeking treatment at India's accredited hospitals.",
    icon: "Stethoscope",
    color: "from-red-500 to-rose-600",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
            Our Services
          </span>
          <h2 className="section-heading mb-4">
            Comprehensive India Immigration Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From first-time Business Visa applicants to multinational corporations managing large teams —
            we cover every dimension of India immigration and compliance.
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Briefcase;
            const imageSrc = media.unsplash.services[service.slug];

            return (
              <motion.div
                key={`${service.slug}-${service.title}`}
                variants={blurUp}
                transition={defaultTransition}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/${service.slug}`}
                  className="group relative block bg-white rounded-2xl overflow-hidden border border-gray-100 transition-[box-shadow,border-color] duration-300 hover:border-gold-200 hover:shadow-navy h-full"
                >
                  {imageSrc && (
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={`${service.title} — India immigration consulting`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                      {/* Sheen sweep on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out-expo bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div
                        className={`absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {!imageSrc && (
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    )}

                    <h3 className="font-display font-bold text-navy-900 text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                    <div className="flex items-center gap-1 text-gold-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatedSection delay={0.15} className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Not sure which service you need?{" "}
            <Link href="/contact" className="text-navy-700 font-semibold hover:text-gold-600 transition-colors">
              Book a free consultation
            </Link>{" "}
            and our experts will guide you.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
