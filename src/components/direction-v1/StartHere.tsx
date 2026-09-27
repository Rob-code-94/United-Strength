import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";
import NumberTicker from "./NumberTicker";

interface Props {
  onNav: (href: string, label: string) => void;
}

const ledeClass =
  "flex flex-col gap-3 text-[26px] font-bold leading-none tracking-[-0.04em] text-[#F3EEE7] sm:gap-4 sm:text-[32px] lg:gap-5 lg:text-[44px]";

const pathways = [
  {
    title: "Experience United",
    lede: "5 classes · 14 days · try the practice.",
    href: "/start-here/experience",
    label: "Experience United",
    image: gymPhotos.experienceBroll,
    objectPosition: "center 40%",
    circleClass: "bg-white text-[#111111]",
  },
  {
    title: "Apply for Membership",
    lede: "Selective membership — reviewed by the team.",
    href: "/start-here/apply",
    label: "Apply for Membership",
    image: gymPhotos.runClub,
    objectPosition: "center 35%",
    circleClass: "bg-[#0A3C2E] text-[#F3EEE7]",
  },
] as const;

/**
 * 07 // START HERE — Apple card strip adapted from Space carousel-08.
 * Two pathways only. Native scroll-snap; no Embla install.
 */
export default function StartHere({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative z-[60] -mt-8 overflow-hidden bg-[#181818] px-5 pb-16 pt-16 text-[#F3EEE7] md:-mt-14 md:px-10 md:pb-24 md:pt-24"
      aria-labelledby="v1-start-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/50">
          07 // Start Here
        </p>
        <h2
          id="v1-start-heading"
          className="mt-3 font-sans text-[28px] font-bold uppercase leading-[1.1] tracking-[-0.04em] md:text-[40px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Two ways to begin.
        </h2>
      </motion.div>

      <div className="mx-auto mt-10 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scrollbar-none lg:justify-center">
        {pathways.map((path) => (
          <button
            key={path.href}
            type="button"
            data-start-card
            onClick={() => onNav(path.href, path.label)}
            aria-label={`${path.title}. ${path.lede}`}
            className="group relative h-[460px] w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl text-left sm:h-[520px] sm:w-[320px] lg:h-[600px] lg:w-[calc((100%-1.5rem)/2)] lg:max-w-[640px] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.02]"
          >
            <img
              src={path.image}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: path.objectPosition }}
            />
            <span className="absolute inset-0 bg-gradient-to-b from-[#111111]/75 via-[#111111]/20 to-[#111111]/55" />
            <span className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
              <span className="flex flex-col gap-3">
                <span className="text-[15px] font-medium text-[#F3EEE7]">{path.title}</span>
                {path.href === "/start-here/experience" ? (
                  <span className={ledeClass} style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    <span>
                      <NumberTicker
                        end={5}
                        loop
                        pauseMs={12000}
                        duration={1.2}
                        className="tabular-nums"
                      />
                      {" classes"}
                    </span>
                    <span>
                      <NumberTicker
                        end={14}
                        loop
                        pauseMs={12000}
                        duration={1.4}
                        className="tabular-nums"
                      />
                      {" days"}
                    </span>
                    <span>try the practice.</span>
                  </span>
                ) : (
                  <span className={ledeClass} style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    <span>Selective</span>
                    <span>membership —</span>
                    <span>reviewed by</span>
                    <span>the team.</span>
                  </span>
                )}
              </span>
              <span className="flex justify-end">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${path.circleClass}`}
                >
                  <ArrowUpRight
                    className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:rotate-45"
                    aria-hidden
                  />
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
