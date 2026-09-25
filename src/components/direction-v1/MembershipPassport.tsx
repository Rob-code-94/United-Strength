import { motion, useReducedMotion } from "motion/react";
import { MEMBERSHIP_PAGE } from "../../data/journey-copy";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";
import NumberTicker from "./NumberTicker";

interface Props {
  onNav: (href: string, label: string) => void;
}

const RULE = "1px solid rgba(0,0,0,0.15)";

/** Desktop notches punch the seam at 70% so the page shows through. */
const TICKET_MASK = {
  WebkitMaskImage:
    "radial-gradient(circle at 70% 0, transparent 12px, black 13px), radial-gradient(circle at 70% 100%, transparent 12px, black 13px)",
  WebkitMaskComposite: "destination-in",
  maskImage:
    "radial-gradient(circle at 70% 0, transparent 12px, black 13px), radial-gradient(circle at 70% 100%, transparent 12px, black 13px)",
  maskComposite: "intersect",
} as const;

/**
 * 06 // MEMBERSHIP — cream ticket stub.
 * Hub fields, tier indexes, and the 2 in 2X / Week loop while in view.
 * Prices stay on /membership only.
 */
export default function MembershipPassport({ onNav }: Props) {
  const reduceMotion = useReducedMotion();
  const explore = () => onNav("/membership", "Explore Membership");

  return (
    <section
      className="relative z-50 -mt-8 overflow-hidden bg-[#111111] px-5 pb-20 pt-16 text-[#F3EEE7] md:-mt-14 md:px-10 md:pb-28 md:pt-24"
      aria-labelledby="v1-membership-heading"
    >
      <motion.div
        className="relative z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
      >
        <div className="md:grid md:grid-cols-12 md:items-start md:gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/50">
              // Membership
            </p>
            <h2
              id="v1-membership-heading"
              className="mt-4 max-w-[16ch] font-sans text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.04em] md:text-[36px] lg:text-[40px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Four memberships.
              <br />
              Different ways to train.
              <br />
              One United.
            </h2>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed tracking-[-0.01em] text-[#F3EEE7]/75 md:mt-6 md:text-[16px]">
              Choose the level of coaching and access that works for you.
            </p>
            <button
              type="button"
              onClick={explore}
              className="mt-8 inline-flex min-h-[44px] items-center gap-2 border-b border-[#F3EEE7]/50 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7] transition-opacity hover:opacity-60 md:mt-10"
            >
              Explore Membership →
            </button>
          </div>

          <div className="mt-12 md:col-span-7 md:mt-0">
            <style>{`
              @media (min-width: 768px) {
                .v1-ticket-stub {
                  -webkit-mask-image: ${TICKET_MASK.WebkitMaskImage};
                  mask-image: ${TICKET_MASK.maskImage};
                  -webkit-mask-composite: destination-in;
                  mask-composite: intersect;
                }
              }
            `}</style>
            <article
              className="v1-ticket-stub flex w-full max-w-[720px] flex-col rounded-[12px] border border-[#111111]/25 bg-[#F3EEE7] text-[#111111] shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:flex-row md:items-stretch"
              aria-label="Membership record"
            >
              <div className="min-w-0 flex-1 px-5 py-5 md:px-6 md:py-5">
                <header className="pb-3" style={{ borderBottom: RULE }}>
                  <p
                    className="font-sans text-[16px] font-bold uppercase tracking-[-0.02em] md:text-[18px]"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    United Strength Club
                  </p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.05em] text-[#666660]">
                    // Membership record
                  </p>
                </header>

                <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-[0.05em] text-[#666660] md:grid-cols-3">
                  <div>
                    <dt>Issued</dt>
                    <dd className="mt-0.5 text-[#111111]">Columbus</dd>
                  </div>
                  <div>
                    <dt>Serial</dt>
                    <dd className="mt-0.5 text-[#111111]">
                      <NumberTicker end={147} pad={4} loop duration={1.6} />
                    </dd>
                  </div>
                  <div>
                    <dt>Chapter</dt>
                    <dd className="mt-0.5 text-[#111111]">
                      <NumberTicker end={1} pad={2} loop duration={1.1} />
                    </dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd className="mt-0.5 text-[#111111]">By application</dd>
                  </div>
                  <div>
                    <dt>Access</dt>
                    <dd className="mt-0.5 text-[#111111]">By invitation</dd>
                  </div>
                  <div>
                    <dt>Review</dt>
                    <dd className="mt-0.5 text-[#111111]">Team</dd>
                  </div>
                </dl>

                <ol className="mt-3">
                  {MEMBERSHIP_PAGE.tiers.map((tier, index) => {
                    const weekCount = tier.subtitle.match(/^(\d+)/);
                    return (
                      <li
                        key={`${tier.n}-${tier.subtitle}`}
                        className="flex items-baseline justify-between gap-3 py-2.5"
                        style={{ borderBottom: RULE }}
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.05em] md:text-[12px]">
                          <NumberTicker
                            end={Number(tier.n)}
                            pad={2}
                            loop
                            pauseMs={12000}
                            duration={1.05 + index * 0.15}
                            className="tabular-nums"
                          />
                          {" // "}
                          {tier.name}
                        </span>
                        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.05em] text-[#666660] md:text-[11px]">
                          {weekCount ? (
                            <>
                              <NumberTicker
                                end={Number(weekCount[1])}
                                loop
                                pauseMs={12000}
                                duration={1.2}
                                className="tabular-nums"
                              />
                              {tier.subtitle.slice(weekCount[1].length)}
                            </>
                          ) : (
                            tier.subtitle
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div
                className="w-full border-t-2 border-dotted border-[#111111]/40 md:hidden"
                aria-hidden
              />
              <div
                className="hidden w-0 shrink-0 self-stretch border-l-2 border-dotted border-[#111111]/40 md:block"
                aria-hidden
              />

              <div className="flex flex-col items-center justify-center gap-4 px-5 py-5 md:w-[30%] md:max-w-[13rem] md:px-4">
                <p className="text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.05em] text-[#666660]">
                  237 Cleveland Ave / Columbus
                </p>
                <div className="flex size-[6.25rem] items-center justify-center rounded-full border border-[#111111]/35 p-3 text-center">
                  <p className="font-mono text-[8px] uppercase leading-[1.35] tracking-[0.04em] text-[#666660]">
                    Strength • People • A healthier city
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
