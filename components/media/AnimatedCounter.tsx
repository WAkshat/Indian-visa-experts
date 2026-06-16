"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

// Splits e.g. "2,500+" into { numeric: 2500, prefix: "", suffix: "+" }
function parse(raw: string): { numeric: number; prefix: string; suffix: string } | null {
  const m = raw.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], numeric: parseInt(m[2].replace(/,/g, ""), 10), suffix: m[3] };
}

// Formats 2500 → "2,500"
function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) {
      setDisplay(value.replace(/[0-9,]+/, "0"));
      return;
    }

    const parsed = parse(value);
    if (!parsed) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const duration = 2500;
    const startTime = performance.now();
    const target = parsed.numeric;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out: starts fast, slows near the end
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${parsed.prefix}${fmt(current)}${parsed.suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref} className={className}>{display}</span>;
}
