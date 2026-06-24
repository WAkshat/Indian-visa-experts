"use client";

import { m, useScroll, useSpring } from "framer-motion";

/**
 * Slim gradient progress bar pinned to the very top of the viewport.
 * Driven by scroll position and smoothed with a spring for a premium feel.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300"
    />
  );
}
