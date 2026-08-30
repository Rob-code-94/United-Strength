import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "./constants";

interface LookbookStaggerBodyProps {
  paragraphs: readonly string[];
  onDark?: boolean;
  className?: string;
}

/** Staggered manifesto body copy — index/headline loads first, body follows. */
export default function LookbookStaggerBody({
  paragraphs,
  onDark = false,
  className = "",
}: LookbookStaggerBodyProps) {
  const reduceMotion = useReducedMotion();
  const textClass = onDark ? "text-white/75" : "text-[#5C5C5C]";

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {paragraphs.map((paragraph, i) => (
        <motion.p
          key={paragraph.slice(0, 40)}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: reduceMotion ? 0 : i * 0.08,
            ease: LOOKBOOK_EASE,
          }}
          className={`text-sm leading-relaxed ${textClass}`}
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );
}
