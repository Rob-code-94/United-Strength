import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";
import PassportDigitReel from "./PassportDigitReel";

interface Props {
  onNav: (href: string, label: string) => void;
}

const PERFORATION = {
  backgroundImage:
    "radial-gradient(circle, rgba(243,238,231,0.35) 1.25px, transparent 1.35px)",
  backgroundSize: "10px 8px",
  backgroundPosition: "center",
  backgroundRepeat: "repeat-x",
} as const;

const PERFORATION_SOFT = {
  ...PERFORATION,
  backgroundImage:
    "radial-gradient(circle, rgba(243,238,231,0.28) 1.25px, transparent 1.35px)",
} as const;

type LedgerRow =
  | {
      kind: "text";
      label: string;
      value: string;
      delay: number;
    }
  | {
      kind: "digits";
      label: string;
      value: string;
      delay: number;
      reelDelay?: number;
    };

const LEDGER_ROWS: LedgerRow[] = [
  { kind: "text", label: "Issued", value: "Columbus", delay: 0.06 },
  { kind: "digits", label: "Serial", value: "0147", delay: 0.1, reelDelay: 0 },
  {
    kind: "digits",
    label: "Chapter",
    value: "01",
    delay: 0.16,
    reelDelay: 0.28,
  },
  { kind: "text", label: "Status", value: "By application", delay: 0.22 },
  { kind: "text", label: "Access", value: "By invitation", delay: 0.28 },
  { kind: "text", label: "Review", value: "Team", delay: 0.34 },
];

/**
 * Archival passport / ledger credential — homepage preview only.
 * Desktop: about-us-09/13 split (editorial left · full-width ledger right).
 * Mechanical digit reels; no pricing cards. CTA: EXPLORE MEMBERSHIP →
 */
export default function MembershipPassport({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  const explore = () => onNav("/membership", "Explore Membership");

  return (
    <section className="relative overflow-hidden bg-[#111111] px-5 py-20 text-[#F3EEE7] md:px-10 md:py-28">
      <motion.div
        className="relative z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
      >
        <div className="md:grid md:grid-cols-12 md:items-start md:gap-12 lg:gap-16">
          {/* Left — chapter chrome + lede + desktop CTA */}
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/50">
              07 // Membership
            </p>
            <h2
              className="mt-3 max-w-[14ch] font-sans text-[28px] font-bold uppercase tracking-[-0.04em] md:text-[36px] lg:text-[40px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Club credential
            </h2>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed tracking-[-0.01em] text-[#F3EEE7]/75 md:mt-6 md:text-[16px]">
              Selective membership — reviewed by the team. Belonging over
              volume.
            </p>
            <button
              type="button"
              onClick={explore}
              className="mt-10 hidden min-h-[44px] items-center gap-2 border-b border-[#F3EEE7]/50 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7] transition-opacity hover:opacity-60 md:inline-flex"
            >
              Explore Membership →
            </button>
          </div>

          {/* Right — full-width archival ledger */}
          <div className="relative mt-12 md:col-span-7 md:mt-0">
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center md:justify-end"
              aria-hidden
            >
              <span
                className="font-sans text-[120px] font-bold leading-none tracking-[-0.06em] text-[#F3EEE7]/[0.04] md:text-[160px] lg:text-[180px]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                US
              </span>
            </div>

            <div className="relative z-10 w-full">
              <div className="h-2 w-full" style={PERFORATION} aria-hidden />

              <div className="border-t border-[#F3EEE7]/20 pt-6">
                <div className="flex items-start justify-between gap-4 pb-5">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#F3EEE7]/45">
                      United Strength Club
                    </p>
                    <p
                      className="mt-2 font-sans text-[18px] font-bold uppercase tracking-[-0.03em] md:text-[22px]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      Membership record
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-[10px] tracking-[0.14em] text-[#F3EEE7]/40">
                    COL · OH
                  </p>
                </div>

                <div className="h-px w-full bg-[#F3EEE7]/15" aria-hidden />

                <dl className="mt-0">
                  {LEDGER_ROWS.map((row, i) => {
                    const isLast = i === LEDGER_ROWS.length - 1;
                    return (
                      <motion.div
                        key={row.label}
                        className={`flex items-baseline justify-between gap-4 py-4 md:py-5 ${
                          isLast ? "" : "border-b border-[#F3EEE7]/10"
                        }`}
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.6,
                          delay: row.delay,
                          ease: LOOKBOOK_EASE,
                        }}
                      >
                        <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F3EEE7]/45">
                          {row.label}
                        </dt>
                        <dd
                          className={
                            row.kind === "digits"
                              ? "font-mono text-[22px] tracking-[0.08em] md:text-[28px] lg:text-[32px]"
                              : "text-right font-mono text-[12px] uppercase tracking-[0.16em] text-[#F3EEE7]/85 md:text-[13px]"
                          }
                        >
                          {row.kind === "digits" ? (
                            <PassportDigitReel
                              value={row.value}
                              delay={row.reelDelay ?? 0}
                            />
                          ) : (
                            row.value
                          )}
                        </dd>
                      </motion.div>
                    );
                  })}
                </dl>

                <div
                  className="mt-2 h-2 w-full"
                  style={PERFORATION_SOFT}
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {/* Mobile CTA — after ledger */}
          <div className="mt-10 md:hidden">
            <button
              type="button"
              onClick={explore}
              className="inline-flex min-h-[44px] items-center gap-2 border-b border-[#F3EEE7]/50 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7] transition-opacity hover:opacity-60"
            >
              Explore Membership →
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
