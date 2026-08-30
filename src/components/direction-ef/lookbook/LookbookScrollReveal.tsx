import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "./constants";

interface LookbookScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

/** Gentle scroll-triggered fade-up — Odd Ritual editorial rhythm. */
export default function LookbookScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
}: LookbookScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay: reduceMotion ? 0 : delay, ease: LOOKBOOK_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
