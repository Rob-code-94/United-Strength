import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "./constants";

type CanvasTone = "white" | "alabaster" | "dark";

const CANVAS: Record<CanvasTone, string> = {
  white: "bg-white text-[#181818]",
  alabaster: "bg-[#F3EEE7] text-[#181818]",
  dark: "bg-[#181818] text-white",
};

interface EditorialSectionWrapperProps {
  children: ReactNode;
  tone?: CanvasTone;
  snap?: boolean;
  snapEnd?: boolean;
  className?: string;
}

/** Snap chapter shell with fade-up — Odd Ritual editorial rhythm. */
export default function EditorialSectionWrapper({
  children,
  tone = "white",
  snap = true,
  snapEnd = false,
  className = "",
}: EditorialSectionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
      className={`w-full min-h-[100cqh] shrink-0 px-6 py-14 flex flex-col justify-between ${
        snap ? "snap-start" : ""
      } ${snapEnd ? "snap-end" : ""} ${CANVAS[tone]} ${className}`}
    >
      {children}
    </motion.section>
  );
}
