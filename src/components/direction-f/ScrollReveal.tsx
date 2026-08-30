import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

/**
 * Gentle scroll-triggered vertical offset for Direction F sections.
 * Ease matches Odd Ritual / Culture Club motion tokens.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay: reduceMotion ? 0 : delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
