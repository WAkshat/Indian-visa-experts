"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs, faqCategories, type FAQ } from "@/data/faqs";

interface FAQSectionProps {
  selectedFaqs?: FAQ[];
  showCategories?: boolean;
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  selectedFaqs,
  showCategories = true,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to the most common questions about India visas, immigration, and compliance.",
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const displayFaqs = selectedFaqs ?? faqs;

  const filteredFaqs =
    activeCategory === "All"
      ? displayFaqs
      : displayFaqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-600 uppercase mb-3">
            FAQ
          </span>
          <h2 className="section-heading mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        {/* Category filters */}
        {showCategories && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-navy-300 hover:text-navy-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "bg-white rounded-xl border overflow-hidden transition-colors duration-300",
                  isOpen ? "border-gold-200 shadow-soft" : "border-gray-100 hover:border-navy-200"
                )}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-gold-600 block mb-1">{faq.category}</span>
                    <span className="font-semibold text-navy-900">{faq.question}</span>
                  </div>
                  <span
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                      isOpen ? "bg-navy-900 rotate-180" : "bg-navy-50"
                    )}
                  >
                    <ChevronDown
                      className={cn("w-4 h-4 transition-colors", isOpen ? "text-gold-400" : "text-navy-500")}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t border-gray-50">
                        <p className="text-gray-600 leading-relaxed pt-4 text-sm">{faq.answer}</p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don&apos;t see your question here?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
          >
            Ask Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}
