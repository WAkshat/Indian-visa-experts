"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  ariaLabel?: string;
}

export default function LottieAnimation({
  src,
  className = "",
  loop = true,
  ariaLabel = "Animated illustration",
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setAnimationData(null));
  }, [src]);

  if (!animationData || prefersReducedMotion) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        role="img"
        aria-label={ariaLabel}
      >
        <div className="w-full h-full rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
          <span className="text-2xl" aria-hidden="true">
            📋
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={className} role="img" aria-label={ariaLabel}>
      <Lottie animationData={animationData} loop={loop} className="w-full h-full" />
    </div>
  );
}
