"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedSection from "@/components/media/AnimatedSection";
import { slideInLeft, slideInRight, defaultTransition, viewportOnce } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a thorough consultation to understand your specific situation, travel purpose, and immigration goals. This allows us to identify the most appropriate visa category and strategy.",
  },
  {
    number: "02",
    title: "Document Assessment",
    description:
      "Our team reviews your existing documents and provides a tailored checklist of everything you need. We identify gaps early and advise on how to address them before submission.",
  },
  {
    number: "03",
    title: "Application Preparation",
    description:
      "We prepare your complete application package — accurately completing all forms, drafting supporting letters, and organizing documents to the precise requirements of the consulate or FRRO.",
  },
  {
    number: "04",
    title: "Submission Guidance",
    description:
      "We guide you through the submission process — whether through an Indian consulate, the e-Visa portal, or the FRRO online system — tracking your application at every stage.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Our service doesn't end when your visa arrives. We provide post-arrival support including FRRO registration, compliance guidance, and help with renewals and extensions as needed.",
  },
];

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 26, restDelta: 0.001 });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
            How We Work
          </span>
          <h2 className="section-heading mb-4">
            A Clear, Transparent Process
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We take the complexity out of India immigration. Here is exactly how we work with you,
            from first contact to ongoing compliance.
          </p>
        </AnimatedSection>

        <div className="relative" ref={timelineRef}>
          {/* Track */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy-100 -translate-x-1/2" />
          {/* Animated progress line that draws as you scroll */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-gold-400 via-gold-500 to-navy-400 -translate-x-1/2"
          />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const contentVariant = isEven ? slideInLeft : slideInRight;

              return (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className={`relative lg:flex items-center gap-12 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } mb-12 lg:mb-16`}
                >
                  <motion.div
                    variants={contentVariant}
                    transition={{ ...defaultTransition, delay: 0.05 }}
                    className="flex-1 lg:text-right"
                  >
                    <div
                      className={`bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${
                        !isEven ? "lg:text-left" : ""
                      }`}
                    >
                      <div className="text-5xl font-bold text-gray-100 font-display mb-3">{step.number}</div>
                      <h3 className="font-display font-bold text-navy-900 text-xl mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ ...defaultTransition, delay: 0.15 }}
                    className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-navy-900 text-white font-bold text-lg flex-shrink-0 shadow-xl z-10 ring-4 ring-white"
                  >
                    {index + 1}
                  </motion.div>

                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
