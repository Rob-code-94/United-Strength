import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";

interface Props {
  onNav: (href: string, label: string) => void;
}

const OFFERS = [
  {
    n: "01",
    label: "Build",
    href: "/training/classes/build",
    image: gymPhotos.equipmentClose,
    objectPosition: "center 40%",
  },
  {
    n: "02",
    label: "Burn",
    href: "/training/classes/burn",
    image: gymPhotos.heroFullBleed,
    objectPosition: "center 45%",
  },
  {
    n: "03",
    label: "The Space",
    href: "/about/the-space",
    image: gymPhotos.architectureRaw,
    objectPosition: "center center",
  },
] as const;

/**
 * Horizontal lookbook lanes — services-02 DNA adapted.
 * Filmstrip gateways: photo plane + caption type only (no card chrome / lede).
 */
export default function WhatWeOffer({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#181818] px-5 py-16 text-[#F3EEE7] md:px-10 md:py-24">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="border-b border-[#F3EEE7]/15 pb-6"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/50">
          05 // What We Offer
        </p>
        <h2
          className="mt-3 max-w-[16ch] font-sans text-[28px] font-bold uppercase tracking-[-0.04em] md:text-[36px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Pathways into the club
        </h2>
      </motion.div>

      <div className="mt-8 flex flex-col gap-px bg-[#F3EEE7]/10 md:mt-12">
        {OFFERS.map((offer, i) => (
          <motion.button
            key={offer.href}
            type="button"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : i * 0.08,
              ease: LOOKBOOK_EASE,
            }}
            onClick={() => onNav(offer.href, offer.label)}
            className="group relative block w-full overflow-hidden bg-[#181818] text-left aspect-[21/9] md:aspect-[2.6/1] min-h-[44px]"
          >
            <img
              src={offer.image}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-[1.03] group-active:scale-[1.02]"
              style={{ objectPosition: offer.objectPosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between p-4 md:p-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-[#F3EEE7]/55">
                {offer.n}
              </span>
              <div className="flex items-end justify-between gap-4">
                <span
                  className="font-sans text-[18px] font-bold uppercase tracking-[-0.03em] md:text-[22px]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {offer.label}
                </span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-[#F3EEE7]/80">
                  →
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
