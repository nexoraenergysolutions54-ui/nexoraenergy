import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  amount?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Reveal({ children, delay = 0, className, y, amount = 0.18 }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reducedMotion ? undefined : variants}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "show"}
      viewport={{ once: true, amount }}
      custom={delay}
      style={y !== undefined ? { transform: `translateY(${y}px)` } : undefined}
    >
      {children}
    </motion.div>
  );
}
