import { useState, type FormEvent } from "react";
import { gymPhotos } from "../../../assets/images/gym";
import { usePageCopy } from "../V1Kit";
import {
  HubCopyText,
  V1Display,
  V1Heading,
  V1Hero,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1Prose,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const PEOPLE = [
  gymPhotos.runClub,
  gymPhotos.experienceBroll,
  gymPhotos.galleryCinematic,
  gymPhotos.floorColumbus,
] as const;

const PEOPLE_SLOTS = ["movePeople1", "movePeople2", "movePeople3", "movePeople4"] as const;

const ROUTE_MEDIA = [
  {
    day: "Monday",
    src: gymPhotos.runRouteMonday,
    alt: "Monday long-run route map",
    slot: "runRouteMonday" as const,
    rowIndex: 0,
  },
  {
    day: "Thursday",
    src: gymPhotos.runRouteThursday,
    alt: "Thursday 3.1 mile route map",
    slot: "runRouteThursday" as const,
    rowIndex: 1,
  },
] as const;

/** Move the City is the Run Club. Stand-in stills until Todd sends the run footage. */
export default function V1MoveTheCityPage({ onBack, onNav }: PageProps) {
  const c = usePageCopy()["move-the-city"];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/run-club", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, mobile }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(payload.error ?? "Signup could not be sent. Try again.");
        return;
      }
      setDone(true);
      setName("");
      setEmail("");
      setMobile("");
    } catch {
      setError("Signup could not be sent. Try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.runClub} imageAlt="Run club on a city street" onBack={onBack} mediaSlot="moveHero">
        <V1Display copyPath="move-the-city.headline">
          {c.headline}
          <HubCopyText
            path="move-the-city.subhead"
            as="span"
            className="mt-3 block font-mono text-[14px] font-medium tracking-[0.22em] text-[#F3EEE7]/80 md:text-[16px]"
          >
            {c.subhead}
          </HubCopyText>
        </V1Display>
      </V1Hero>

      <V1Section>
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <V1Kicker>
              <HubCopyText path="move-the-city.story.n">{c.story.n}</HubCopyText>
              {" // "}
              <HubCopyText path="move-the-city.story.title">{c.story.title}</HubCopyText>
            </V1Kicker>
            <V1Heading className="mt-6" copyPath="move-the-city.story.headline">
              {c.story.headline}
            </V1Heading>
            <V1Prose
              paragraphs={c.story.body}
              copyPaths={c.story.body.map((_, index) => `move-the-city.story.body.${index}`)}
            />
          </div>
          <div className="md:col-span-7">
            <V1MediaImg
              slot="moveRun"
              src={gymPhotos.runClub}
              alt=""
              className="aspect-[4/5] w-full object-cover md:aspect-[5/4]"
            />
          </div>
        </div>
      </V1Section>

      <section className="relative min-h-[70vh] overflow-hidden border-b border-white/10">
        <V1MediaImg
          slot="moveWide"
          src={gymPhotos.experienceBroll}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111111]/55" />
        <div className="relative flex min-h-[70vh] items-end px-5 py-16 md:px-10 md:py-24">
          <V1Heading className="max-w-[12ch]" copyPath="move-the-city.paceStatement">
            {c.paceStatement}
          </V1Heading>
        </div>
      </section>

      <V1Section>
        <V1Kicker>
          <HubCopyText path="move-the-city.runs.n">{c.runs.n}</HubCopyText>
          {" // "}
          <HubCopyText path="move-the-city.runs.title">{c.runs.title}</HubCopyText>
        </V1Kicker>
        <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {c.runs.rows.map((row, index) => (
            <li key={`${row.day}-${index}`} className="flex min-h-[44px] items-baseline justify-between gap-4 py-5">
              <span
                className="font-sans text-[22px] font-bold uppercase tracking-[-0.03em]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                <HubCopyText path={`move-the-city.runs.rows.${index}.day`}>{row.day}</HubCopyText>
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#F3EEE7]/70">
                <HubCopyText path={`move-the-city.runs.rows.${index}.detail`}>{row.detail}</HubCopyText>
              </span>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          <HubCopyText path="move-the-city.route.n">{c.route.n}</HubCopyText>
          {" // "}
          <HubCopyText path="move-the-city.route.title">{c.route.title}</HubCopyText>
        </V1Kicker>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.22em] text-[#F3EEE7]/70">
          <HubCopyText path="move-the-city.route.start">{c.route.start}</HubCopyText>
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ROUTE_MEDIA.map((route, mapIndex) => {
            const row = c.runs.rows[route.rowIndex];
            const detail = row?.detail ?? "";
            return (
              <figure key={route.day} className="border border-white/10">
                <V1MediaImg
                  slot={route.slot}
                  src={route.src}
                  alt={route.alt}
                  className="aspect-[16/9] w-full object-cover object-center"
                  draggable={false}
                />
                <figcaption className="flex items-baseline justify-between gap-3 border-t border-white/10 px-4 py-4">
                  <span className="font-mono text-[22px] leading-none tracking-tight text-[#F3EEE7]/90">
                    {String(mapIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-right">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/85">
                      // {route.day}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-[#C4A35A]">
                      <HubCopyText path={`move-the-city.runs.rows.${route.rowIndex}.detail`}>
                        {detail}
                      </HubCopyText>
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </V1Section>

      <section className="border-b border-white/10" aria-label="04 // People">
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 py-10 md:px-10">
          {PEOPLE.map((src, index) => (
            <V1MediaImg
              key={PEOPLE_SLOTS[index]}
              slot={PEOPLE_SLOTS[index]}
              src={src}
              alt=""
              className="h-[280px] w-[78%] max-w-[420px] shrink-0 snap-start object-cover md:h-[420px] md:w-[42%]"
              style={{ objectPosition: index % 2 === 0 ? "center 40%" : "center 60%" }}
            />
          ))}
        </div>
      </section>

      <V1Section>
        <V1Heading copyPath="move-the-city.closing.headline">{c.closing.headline}</V1Heading>
        <V1Prose
          paragraphs={c.closing.body}
          copyPaths={c.closing.body.map((_, index) => `move-the-city.closing.body.${index}`)}
        />
        {done ? (
          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85" role="status">
            You're on the list. We'll be in touch about the next run.
          </p>
        ) : (
          <form className="mt-8 max-w-xl space-y-4" onSubmit={(event) => void submit(event)} noValidate>
            <div className="grid gap-2">
              <label htmlFor="run-club-name" className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]/55">
                Name
              </label>
              <input
                id="run-club-name"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="min-h-[44px] w-full border border-white/15 bg-transparent px-3 text-[16px] text-[#F3EEE7] outline-none focus-visible:border-[#C4A35A]"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="run-club-email" className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]/55">
                Email
              </label>
              <input
                id="run-club-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-h-[44px] w-full border border-white/15 bg-transparent px-3 text-[16px] text-[#F3EEE7] outline-none focus-visible:border-[#C4A35A]"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="run-club-mobile" className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]/55">
                Mobile Number
              </label>
              <input
                id="run-club-mobile"
                name="mobile"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                className="min-h-[44px] w-full border border-white/15 bg-transparent px-3 text-[16px] text-[#F3EEE7] outline-none focus-visible:border-[#C4A35A]"
              />
            </div>
            {error ? (
              <p className="text-[14px] text-red-300" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={pending}
              className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7] disabled:opacity-50"
            >
              {pending ? "Sending…" : (
                <>
                  <HubCopyText path="move-the-city.closing.ctaLabel">{c.closing.ctaLabel}</HubCopyText> →
                </>
              )}
            </button>
          </form>
        )}
      </V1Section>
    </V1InteriorShell>
  );
}
