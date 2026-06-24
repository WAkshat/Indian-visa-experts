"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import VideoBackground from "@/components/media/VideoBackground";
import AnimatedCounter from "@/components/media/AnimatedCounter";

// Lottie pulls in a sizeable client-only animation library — defer it out of
// the initial bundle since it's just a small decorative icon, not LCP content.
const LottieAnimation = dynamic(() => import("@/components/media/LottieAnimation"), {
  ssr: false,
});
import { media } from "@/data/media";
import {
  fadeUp,
  staggerContainer,
  slideInRight,
  defaultTransition,
  expoTransition,
} from "@/lib/motion";

const stats = [
  { label: "Cases Handled", value: "2,500+" },
  { label: "Nationalities Served", value: "60+" },
  { label: "Success Rate", value: "98%" },
  { label: "Years Experience", value: "10+" },
];

const trustBadges = [
  { icon: Shield, label: "Compliance Focused" },
  { icon: Award, label: "Expert Team" },
  { icon: Clock, label: "Fast Response" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  // The scroll-driven fade/parallax is a desktop-only flourish. On mobile the
  // hero must render as plain, always-visible content: Google crawls mobile-first
  // and a scroll-linked opacity can otherwise resolve to 0 in the crawler's
  // snapshot, blanking the entire hero. Defaults to false so SSR + mobile are safe.
  const [enableParallax, setEnableParallax] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setEnableParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Scroll-driven parallax: background drifts down, content lifts and fades.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Cursor-following glow — raw motion values track the pointer with zero lag.
  const glowX = useMotionValue(700);
  const glowY = useMotionValue(300);

  // Cache the rect on enter instead of reading it on every mousemove — querying
  // getBoundingClientRect() on a high-frequency event forces a synchronous
  // reflow whenever the animations above have invalidated layout.
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = rectRef.current ?? e.currentTarget.getBoundingClientRect();
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden grain"
    >
      <motion.div style={enableParallax ? { y: bgY } : undefined} className="absolute inset-0">
        <VideoBackground
          src={media.hero.video}
          webmSrc={media.hero.videoWebm}
          poster={media.hero.poster}
          overlayOpacity={media.hero.overlayOpacity}
        />
      </motion.div>

      {/* Decorative layers on top of video */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Aurora color fields */}
        <div className="aurora-blob top-[-10%] right-[5%] w-[42rem] h-[42rem] bg-gold-500/10 animate-aurora" />
        <div
          className="aurora-blob bottom-[-15%] left-[-5%] w-[38rem] h-[38rem] bg-navy-600/25 animate-aurora"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="aurora-blob top-[30%] left-[40%] w-[24rem] h-[24rem] bg-gold-400/[0.07] animate-float-slow"
        />

        {/* Fine grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-grid-fade [background-size:60px_60px]" />

        {/* Cursor glow — centered on origin, translated to the pointer */}
        <motion.div
          className="absolute top-0 left-0 -ml-[300px] -mt-[300px] w-[600px] h-[600px] rounded-full"
          style={{
            x: glowX,
            y: glowY,
            background: "radial-gradient(circle, rgba(245,158,11,0.12), transparent 60%)",
          }}
        />
      </div>

      <motion.div
        style={enableParallax ? { y: contentY, opacity: contentOpacity } : undefined}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              variants={fadeUp}
              transition={defaultTransition}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gold-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
              </span>
              Trusted India Immigration Consulting
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6 text-balance">
              Navigate India&apos;s Visa &amp; Immigration Process with{" "}
              <span className="text-gradient-gold-animated">Confidence</span>
            </h1>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.16 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-xl text-pretty"
            >
              Expert guidance for Business Visas, Employment Visas, X Visas, FRRO Registration,
              Visa Extensions, and Foreign National Compliance in India.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.24 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-white/60 text-sm transition-colors hover:text-white/90"
                >
                  <badge.icon className="w-4 h-4 text-gold-500" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.32 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl overflow-hidden transition-all duration-300 ease-out-expo shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out-expo" />
                <span className="relative">Book Consultation</span>
                <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/business-visa-india"
                className="inline-flex items-center gap-2 px-7 py-3.5 glass text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Get Expert Guidance
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.4 }}
              className="text-xs text-white/40"
            >
              Independent consulting service. Not affiliated with the Government of India or any government agency.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ ...expoTransition, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...expoTransition, delay: 0.35 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative glass rounded-2xl p-6 text-center overflow-hidden transition-colors duration-300 hover:bg-white/10"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
                  <div className="text-3xl md:text-4xl font-bold text-gold-400 font-display mb-1 tabular-nums">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...expoTransition, delay: 0.7 }}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <LottieAnimation
                    src={media.lottie.documents}
                    className="w-12 h-12"
                    ariaLabel="Document checklist animation"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-navy-900 text-lg mb-1">
                    Free Business Visa Checklist
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    Download our comprehensive document checklist for India Business Visa applications.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors link-underline"
                  >
                    Download Free PDF
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue (desktop only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={enableParallax ? { opacity: contentOpacity } : undefined}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40 text-xs"
      >
        <span className="tracking-wide">Scroll to explore</span>
        <div className="relative w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-gold-400"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
