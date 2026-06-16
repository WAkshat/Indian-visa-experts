export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleInSpring = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const blurUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const defaultTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

// Snappier, premium "out-expo" timing for hero & headline reveals
export const expoTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

// Gentle spring for interactive elements (cards, buttons)
export const springTransition = { type: "spring", stiffness: 260, damping: 24 } as const;

export const viewportOnce = { once: true, margin: "-80px" as const };

// Re-triggers each time the element scrolls back into view
export const viewportRepeat = { once: false, margin: "-100px" as const };
