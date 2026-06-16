"use client";

import { motion } from "framer-motion";
import { Shield, Users, FileCheck, TrendingUp, Zap, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/media/AnimatedSection";
import { blurUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";

const features = [
  {
    icon: Shield,
    title: "Compliance Focus",
    description:
      "We prioritize full legal compliance in every case. Our guidance keeps you on the right side of India's immigration laws — always.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our consultants bring years of hands-on experience with Indian visa and immigration processes across all visa categories.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Support",
    description:
      "Every case is unique. We provide tailored advice specific to your situation — not generic, one-size-fits-all guidance.",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description:
      "No surprises. We clearly explain every step, every requirement, and every cost before you commit to anything.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description:
      "We understand that immigration matters are often time-sensitive. Our team responds quickly and works efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Track Record",
    description:
      "A proven record of successful visa applications, FRRO registrations, and compliance management for individuals and companies.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
            Why India Visa Advisory
          </span>
          <h2 className="section-heading mb-4">
            Professional Guidance You Can Trust
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We combine deep expertise in Indian immigration law with a genuine commitment to your success.
            Here is what sets us apart from the rest.
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={blurUp}
              transition={defaultTransition}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 transition-[box-shadow,border-color] duration-300 hover:border-gold-200 hover:shadow-soft"
            >
              {/* Soft radial glow on hover */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(420px circle at 50% 0%, rgba(245,158,11,0.08), transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-navy-900 group-hover:shadow-glow">
                <feature.icon className="w-6 h-6 text-navy-700 transition-all duration-300 group-hover:text-gold-400 group-hover:scale-110" />
              </div>

              <h3 className="relative font-display font-bold text-navy-900 text-lg mb-2">{feature.title}</h3>
              <p className="relative text-gray-600 text-sm leading-relaxed">{feature.description}</p>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out-expo origin-left" />
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.2} className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-navy-50 rounded-2xl px-8 py-6">
            <div className="text-left">
              <div className="font-semibold text-navy-900">Ready to get started?</div>
              <div className="text-sm text-gray-600">Schedule a free initial consultation with our team.</div>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 px-6 py-3 bg-navy-900 text-white font-semibold text-sm rounded-xl hover:bg-navy-800 transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
