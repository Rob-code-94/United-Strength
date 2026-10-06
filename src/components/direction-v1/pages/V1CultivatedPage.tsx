import { useReducedMotion } from "motion/react";
import { gymPhotos } from "../../../assets/images/gym";
import { gymVideos } from "../../../assets/video";
import { usePageCopy, useV1Kit } from "../V1Kit";
import {
  HubCopyText,
  V1BackButton,
  V1InteriorShell,
  V1MediaImg,
  useHubPencil,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const SATOSHI = { fontFamily: "'Satoshi', sans-serif" } as const;
const SERIF = { fontFamily: "'Instrument Serif', serif" } as const;

export default function V1CultivatedPage({ onBack, onNav }: PageProps) {
  const reduceMotion = useReducedMotion();
  const kit = useV1Kit();
  const typeArtPencil = useHubPencil("media-cultivatedTypeArt");
  const c = usePageCopy().cultivated;
  const principles = c.principles.rows.slice(0, 3);
  const definition = c.manifesto.body[0] ?? "";
  const [, ...manifestoRest] = c.manifesto.body;
  const heroPoster = kit.media.cultivatedHero || gymPhotos.experienceBroll;
  const typeArt = kit.media.cultivatedTypeArt;
  const [people, room, conversations] = principles;

  return (
    <V1InteriorShell onNav={onNav}>
      <section
        className="relative h-[100cqh] min-h-[520px] w-full overflow-hidden bg-[#111111]"
        aria-label="Cultivated film"
      >
        {reduceMotion ? (
          <V1MediaImg
            slot="cultivatedHero"
            src={heroPoster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={heroPoster}
            src={gymVideos.opening01}
          />
        )}
        <V1BackButton onBack={onBack} />
        <div className="absolute bottom-8 left-5 right-5 z-10 md:bottom-12 md:left-10 md:right-10">
          <h1
            className="font-sans text-[40px] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#F3EEE7] md:text-[56px]"
            style={SATOSHI}
          >
            <HubCopyText path="cultivated.headline">{c.headline}</HubCopyText>
          </h1>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.22em] text-[#F3EEE7]/75">
            <HubCopyText path="cultivated.lede">{c.lede}</HubCopyText>
          </p>
        </div>
      </section>

      <section
        {...typeArtPencil}
        className="relative flex min-h-[75vh] items-center justify-center border-b border-white/10 bg-[#111111] px-5 py-16 md:px-10"
        aria-label="Cultivated type artwork"
      >
        {typeArt ? (
          <V1MediaImg
            slot="cultivatedTypeArt"
            src={typeArt}
            alt="Cultivated type artwork"
            className="max-h-[70vh] w-full max-w-5xl object-contain"
          />
        ) : null}
      </section>

      <section className="border-b border-neutral-200/60 bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            <HubCopyText path="cultivated.manifesto.n">{c.manifesto.n}</HubCopyText>
            {" // "}
            <HubCopyText path="cultivated.manifesto.title">{c.manifesto.title}</HubCopyText>
          </p>
          <h2
            className="mt-6 text-[28px] font-normal leading-[1.05] tracking-[-0.02em] text-[#181818] md:text-[40px]"
            style={SERIF}
          >
            <HubCopyText path="cultivated.manifesto.headline">{c.manifesto.headline}</HubCopyText>
          </h2>
          <p
            className="mt-6 text-[18px] leading-relaxed text-[#181818] md:text-[22px]"
            style={SATOSHI}
          >
            <HubCopyText path="cultivated.manifesto.body.0">{definition}</HubCopyText>
          </p>
          {manifestoRest.map((paragraph, index) => (
            <p
              key={paragraph}
              className="mt-4 text-[16px] leading-relaxed text-[#5C5C5C]"
              style={SATOSHI}
            >
              <HubCopyText path={`cultivated.manifesto.body.${index + 1}`}>{paragraph}</HubCopyText>
            </p>
          ))}
        </div>
      </section>

      {/* 01 — THE RIGHT PEOPLE: cream after white definition (canvas shift) */}
      {people ? (
        <section
          className="border-b border-neutral-200/60 bg-[#F3EEE7] px-5 py-20 md:px-10 md:py-28"
          aria-label={people.title}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              <HubCopyText path="cultivated.principles.rows.0.n">{people.n}</HubCopyText> // Principle
            </p>
            <h2
              className="mt-6 text-[36px] font-normal uppercase leading-[1.05] tracking-[-0.02em] text-[#181818] md:text-[56px]"
              style={SERIF}
            >
              <HubCopyText path="cultivated.principles.rows.0.title">{people.title}</HubCopyText>
            </h2>
            <div className="mt-10 w-full max-w-[220px] md:max-w-[260px]">
              <V1MediaImg
                slot="cultivated1"
                src={gymPhotos.galleryCinematic}
                alt=""
                className="aspect-square w-full object-cover"
              />
            </div>
            <p
              className="mt-10 max-w-md text-[16px] leading-relaxed text-[#5C5C5C] md:text-[17px]"
              style={SATOSHI}
            >
              <HubCopyText path="cultivated.principles.rows.0.body">{people.body}</HubCopyText>
            </p>
          </div>
        </section>
      ) : null}

      {/* 02 — THE RIGHT ROOM: white off-center 7/5 split */}
      {room ? (
        <section
          className="border-b border-neutral-200/60 bg-white px-5 py-16 md:px-10 md:py-24"
          aria-label={room.title}
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8">
            <div className="md:col-span-7">
              <V1MediaImg
                slot="cultivated2"
                src={gymPhotos.experienceBroll}
                alt=""
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              />
            </div>
            <div className="flex flex-col gap-4 md:col-span-5 md:pl-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
                <HubCopyText path="cultivated.principles.rows.1.n">{room.n}</HubCopyText> // Principle
              </p>
              <h2
                className="text-[32px] font-normal uppercase leading-[1.05] tracking-[-0.02em] text-[#181818] md:text-[44px]"
                style={SERIF}
              >
                <HubCopyText path="cultivated.principles.rows.1.title">{room.title}</HubCopyText>
              </h2>
              <p className="text-[16px] leading-relaxed text-[#5C5C5C]" style={SATOSHI}>
                <HubCopyText path="cultivated.principles.rows.1.body">{room.body}</HubCopyText>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {/* 03 — THE RIGHT CONVERSATIONS: centered manifesto + inset media */}
      {conversations ? (
        <section
          className="border-b border-neutral-200/60 bg-[#F3EEE7] px-5 py-16 md:px-10 md:py-28"
          aria-label={conversations.title}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              <HubCopyText path="cultivated.principles.n">{c.principles.n}</HubCopyText>
              {" // "}
              <HubCopyText path="cultivated.principles.title">{c.principles.title}</HubCopyText>
            </p>
            <h2
              className="mt-6 text-[32px] font-normal uppercase leading-[1.05] tracking-[-0.02em] text-[#181818] md:text-[48px]"
              style={SERIF}
            >
              <HubCopyText path="cultivated.principles.rows.2.title">{conversations.title}</HubCopyText>
            </h2>
            <p
              className="mt-8 max-w-xl text-[18px] font-bold leading-snug tracking-[-0.02em] text-[#181818] md:text-[22px]"
              style={SATOSHI}
            >
              <HubCopyText path="cultivated.principles.rows.2.body">{conversations.body}</HubCopyText>
            </p>
            <div className="mt-12 w-full max-w-lg overflow-hidden">
              {reduceMotion || kit.media.cultivated3 ? (
                <V1MediaImg
                  slot="cultivated3"
                  src={gymPhotos.floorColumbus}
                  alt=""
                  className="aspect-[16/10] w-full object-cover"
                />
              ) : (
                <video
                  className="aspect-[16/10] w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={gymPhotos.floorColumbus}
                  src={gymVideos.opening01}
                />
              )}
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[#5C5C5C]">
              <HubCopyText path="cultivated.principles.rows.2.n">{conversations.n}</HubCopyText> // Cultivated
            </p>
          </div>
        </section>
      ) : null}

      <section className="border-b border-neutral-200/60 bg-white px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-xl md:ml-[20%]">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            <HubCopyText path="cultivated.quote.n">{c.quote.n}</HubCopyText>
            {" // "}
            <HubCopyText path="cultivated.quote.title">{c.quote.title}</HubCopyText>
          </p>
          <p
            className="mt-8 text-[28px] font-normal leading-[1.15] tracking-[-0.02em] text-[#181818] md:text-[40px]"
            style={SERIF}
          >
            <HubCopyText path="cultivated.quote.text">{c.quote.text}</HubCopyText>
          </p>
        </div>
      </section>
    </V1InteriorShell>
  );
}
