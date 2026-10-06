import { motion, useReducedMotion } from "motion/react";
import { useHubCopyPencil } from "@/components/direction-v1/pages/V1Interior";
import { LOOKBOOK_EASE } from "./constants";

interface LookbookStaggerBodyProps {
  paragraphs: readonly string[];
  onDark?: boolean;
  className?: string;
  /** Brand-kit copy paths aligned to `paragraphs` (hub pencils). */
  copyPaths?: readonly string[];
}

function StaggerParagraph({
  paragraph,
  index,
  textClass,
  copyPath,
  reduceMotion,
}: {
  paragraph: string;
  index: number;
  textClass: string;
  copyPath?: string;
  reduceMotion: boolean | null;
}) {
  const pencil = useHubCopyPencil(copyPath ?? "");
  const attrs = copyPath ? pencil : {};
  return (
    <motion.p
      key={`${index}-${paragraph.slice(0, 24)}`}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: LOOKBOOK_EASE,
      }}
      className={`text-sm leading-relaxed ${textClass}`}
      {...attrs}
    >
      {paragraph}
    </motion.p>
  );
}

/** Staggered manifesto body copy — index/headline loads first, body follows. */
export default function LookbookStaggerBody({
  paragraphs,
  onDark = false,
  className = "",
  copyPaths,
}: LookbookStaggerBodyProps) {
  const reduceMotion = useReducedMotion();
  const textClass = onDark ? "text-white/75" : "text-[#5C5C5C]";

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {paragraphs.map((paragraph, i) => (
        <StaggerParagraph
          key={`${i}-${paragraph.slice(0, 24)}`}
          paragraph={paragraph}
          index={i}
          textClass={textClass}
          copyPath={copyPaths?.[i]}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  );
}
