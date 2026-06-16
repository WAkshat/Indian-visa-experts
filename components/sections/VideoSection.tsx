"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import YouTubeEmbed from "@/components/media/YouTubeEmbed";
import AnimatedSection from "@/components/media/AnimatedSection";
import { media } from "@/data/media";
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";

export default function VideoSection() {
  const { consultationVideoId } = media.youtube;
  const hasYouTube = Boolean(consultationVideoId);

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-3">
              See How We Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Expert Guidance, Explained Clearly
            </h2>
            <p className="text-white/65 leading-relaxed mb-6">
              Watch how India Visa Experts helps foreign nationals and companies navigate
              visa applications, FRRO registration, and ongoing compliance — with transparency
              at every step.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Free initial consultation to assess your case",
                "Document checklist tailored to your visa category",
                "End-to-end support from application to post-arrival compliance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {hasYouTube ? (
              <motion.div variants={fadeUp} transition={defaultTransition}>
                <YouTubeEmbed
                  videoId={consultationVideoId}
                  title="India Visa Experts consultation overview"
                />
              </motion.div>
            ) : (
              <motion.div
                variants={fadeUp}
                transition={defaultTransition}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-navy-900 ring-1 ring-white/10 group"
              >
                <Image
                  src={media.consultation.image}
                  alt="India Visa Experts consultant explaining the visa process to a client"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/10 to-transparent" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
