"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * - LazyMotion + the `domAnimation` feature bundle ships only the animation
 *   features actually used (animations, variants, gestures, whileInView, exit),
 *   replacing the full `motion` component to cut the framer-motion JS payload.
 *   All animated components use the lightweight `m` component; `strict` enforces
 *   that so a stray full `motion` import can't silently re-bloat the bundle.
 * - MotionConfig makes every animation honor the user's "prefers-reduced-motion"
 *   OS setting (transforms collapse to opacity/instant).
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
