import type { ScheduleRow } from "../../../data/training-copy";
import LookbookScrollReveal from "../lookbook/LookbookScrollReveal";

interface TrainingScheduleIndexProps {
  rows: readonly ScheduleRow[];
  note?: string;
  tone?: "white" | "alabaster";
  title?: string;
}

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const DAY_ABBR: Record<(typeof WEEK_DAYS)[number], string> = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

function parseTimes(times: string): string[] {
  return times
    .split("·")
    .map((t) => t.trim())
    .filter(Boolean);
}

/**
 * Week-strip schedule — gallery-01 swipe DNA + about-us-13 cells.
 * Editorial only (not Triib / not calendar-application SaaS).
 */
export default function TrainingScheduleIndex({
  rows,
  note,
  tone = "white",
  title = "Schedule",
}: TrainingScheduleIndexProps) {
  const canvas = tone === "alabaster" ? "bg-[#F3EEE7]" : "bg-white";
  const byDay = new Map(rows.map((r) => [r.day, parseTimes(r.times)]));

  return (
    <section
      className={`box-border w-full border-b border-neutral-200/60 ${canvas}`}
      aria-label={title}
    >
      <LookbookScrollReveal className="px-5 pt-14 pb-4 md:px-8 md:pt-20 md:pb-6 mx-auto max-w-6xl flex flex-col gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
          // {title}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]/70">
          ( Week )
        </p>
      </LookbookScrollReveal>

      {/* Mobile: horizontal snap · Desktop: 7-col week board */}
      <div
        className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-none md:overflow-visible px-5 md:px-8 pb-10 md:pb-16 mx-auto max-w-6xl md:grid md:grid-cols-7 md:gap-0"
        style={{ WebkitOverflowScrolling: "touch" }}
        role="list"
      >
        {WEEK_DAYS.map((day, i) => {
          const slots = byDay.get(day) ?? [];
          const hasSessions = slots.length > 0;
          const n = String(i + 1).padStart(2, "0");

          return (
            <div
              key={day}
              role="listitem"
              className={`shrink-0 snap-start w-[42vw] max-w-[140px] md:w-auto md:max-w-none flex flex-col border-t border-neutral-200 md:border-t-0 md:border-l md:border-neutral-200 md:first:border-l-0 min-h-[200px] ${
                hasSessions ? "" : "opacity-45"
              }`}
            >
              <div className="px-3 py-4 md:px-2.5 md:py-5 flex flex-col gap-1 border-b border-neutral-200/80">
                <span
                  className="font-mono text-[9px] tracking-widest text-[#5C5C5C]/60"
                  aria-hidden
                >
                  {n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#181818]">
                  {DAY_ABBR[day]}
                </span>
                <span className="sr-only">{day}</span>
              </div>

              <ul className="flex flex-col gap-2 px-3 py-4 md:px-2.5 md:py-5 flex-1">
                {hasSessions ? (
                  slots.map((time) => (
                    <li key={`${day}-${time}`}>
                      <span
                        className="inline-flex w-full items-center justify-center min-h-[40px] md:min-h-[44px] px-1.5 border border-neutral-200/90 text-[11px] md:text-[12px] tracking-[-0.01em] text-[#181818] bg-transparent"
                        style={{ fontFamily: "'Satoshi', sans-serif" }}
                      >
                        {time}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="flex-1 flex items-start pt-1">
                    <span
                      className="font-mono text-[12px] text-[#5C5C5C]/50"
                      aria-label="No sessions published"
                    >
                      —
                    </span>
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>

      {note ? (
        <p className="px-5 md:px-8 pb-10 md:pb-14 mx-auto max-w-6xl font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]/80">
          {note}
        </p>
      ) : null}
    </section>
  );
}
