import { useReducedMotion } from "motion/react";
import { gymPhotos } from "../../../assets/images/gym";
import { gymVideos } from "../../../assets/video";
import { usePageCopy } from "../V1Kit";
import Portfolio from "../../shadcn-space/blocks/portfolio-04/portfolio";
import {
  HubCopyText,
  V1Display,
  V1Heading,
  V1Hero,
  V1InteriorShell,
  V1MediaImg,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const OFFERING_MEDIA = [
  { slot: "byDesignLeft" as const, src: gymPhotos.spaceAtmosphere },
  { slot: "byDesignRight" as const, src: gymPhotos.architectureRaw },
] as const;

export default function V1ByDesignPage({ onBack, onNav }: PageProps) {
  const reduceMotion = useReducedMotion();
  const c = usePageCopy()["by-design"];
  const [space, equipment, materials, hospitality] = c.principles.rows;
  const [manifestoLead, ...manifestoRest] = c.manifesto.body;
  const offerings = [
    { principle: materials, media: OFFERING_MEDIA[0], rowIndex: 2 },
    { principle: hospitality, media: OFFERING_MEDIA[1], rowIndex: 3 },
  ];

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.architectureRaw}
        imageAlt=""
        onBack={onBack}
        mediaSlot="byDesignHero"
        position="center 35%"
      >
        <V1Display copyPath="by-design.headline">{c.headline}</V1Display>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.22em] text-[#F3EEE7]/75">
          // <HubCopyText path="by-design.lede">{c.lede}</HubCopyText>
        </p>
      </V1Hero>

      <section className="border-b border-neutral-200/60 bg-[#F3EEE7] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl md:ml-[12%] md:max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            <HubCopyText path="by-design.manifesto.n">{c.manifesto.n}</HubCopyText>
            {" // "}
            <HubCopyText path="by-design.manifesto.title">{c.manifesto.title}</HubCopyText>
          </p>
          <h2
            className="mt-6 text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-[#181818] md:text-[44px]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <HubCopyText path="by-design.manifesto.headline">{c.manifesto.headline}</HubCopyText>
          </h2>
          {manifestoLead ? (
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#5C5C5C]">
              <HubCopyText path="by-design.manifesto.body.0">{manifestoLead}</HubCopyText>
            </p>
          ) : null}
          {manifestoRest.map((paragraph, index) => (
            <p key={paragraph} className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#5C5C5C]">
              <HubCopyText path={`by-design.manifesto.body.${index + 1}`}>{paragraph}</HubCopyText>
            </p>
          ))}
        </div>
      </section>

      <Portfolio
        slides={[
          {
            image: gymPhotos.floorColumbus,
            title: `01 // ${space?.title ?? ""}`,
            description: space?.body ?? "",
            slot: "byDesignFrame1",
          },
          {
            image: gymPhotos.equipmentClose,
            title: `02 // ${equipment?.title ?? ""}`,
            description: equipment?.body ?? "",
            slot: "byDesignFrame2",
          },
        ]}
      />

      <section
        className="border-b border-white/10 bg-[#181818] py-14 md:py-24"
        aria-label="By Design film"
      >
        <div className="overflow-hidden border-y border-white/10">
          {reduceMotion ? (
            <V1MediaImg
              slot="byDesignWide"
              src={gymPhotos.galleryCinematic}
              alt=""
              className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
            />
          ) : (
            <video
              className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
              autoPlay
              loop
              muted
              playsInline
              poster={gymPhotos.galleryCinematic}
              src={gymVideos.opening01}
              onLoadedMetadata={(event) => {
                event.currentTarget.playbackRate = 0.5;
              }}
            />
          )}
        </div>
      </section>

      <section
        className="border-b border-neutral-200/60 bg-[#F3EEE7] px-5 py-14 md:px-10 md:py-20"
        aria-label={`${c.principles.n} ${c.principles.title}`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            <HubCopyText path="by-design.principles.n">{c.principles.n}</HubCopyText>
            {" // "}
            <HubCopyText path="by-design.principles.title">{c.principles.title}</HubCopyText>
          </p>

          <ul className="flex flex-col border-t border-neutral-200">
            {offerings.map(({ principle, media, rowIndex }) => (
              <li
                key={principle.n}
                className="grid grid-cols-12 gap-3 border-b border-neutral-200 py-7 md:gap-6 md:py-10"
              >
                <span className="col-span-2 pt-1 font-mono text-[10px] tracking-widest text-[#5C5C5C] sm:col-span-1">
                  <HubCopyText path={`by-design.principles.rows.${rowIndex}.n`}>{principle.n}</HubCopyText>
                </span>
                <div className="col-span-10 flex flex-col gap-3 sm:col-span-11 md:grid md:grid-cols-12 md:items-start md:gap-6">
                  <h3
                    className="text-[15px] font-bold uppercase tracking-tight text-[#181818] md:col-span-3"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    <HubCopyText path={`by-design.principles.rows.${rowIndex}.title`}>
                      {principle.title}
                    </HubCopyText>
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5C5C5C] md:col-span-6">
                    <HubCopyText path={`by-design.principles.rows.${rowIndex}.body`}>
                      {principle.body}
                    </HubCopyText>
                  </p>
                  <div className="hidden md:col-span-3 md:block">
                    <V1MediaImg
                      slot={media.slot}
                      src={media.src}
                      alt=""
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-neutral-200/60 bg-[#F3EEE7] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl md:ml-[28%] md:max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            <HubCopyText path="by-design.quote.n">{c.quote.n}</HubCopyText>
            {" // "}
            <HubCopyText path="by-design.quote.title">{c.quote.title}</HubCopyText>
          </p>
          <p
            className="mt-8 text-[28px] font-normal leading-[1.15] tracking-[-0.02em] text-[#181818] md:text-[40px]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <HubCopyText path="by-design.quote.text">{c.quote.text}</HubCopyText>
          </p>
        </div>
      </section>

      <section className="relative min-h-[80vh] border-b border-white/10">
        <V1MediaImg
          slot="byDesignClose"
          src={gymPhotos.heroFullBleed}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111111]/45" />
        <div className="relative flex min-h-[80vh] flex-col justify-end px-5 py-16 md:px-10 md:py-24">
          <V1Heading copyPath="by-design.manifesto.headline">{c.manifesto.headline}</V1Heading>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.22em] text-[#F3EEE7]/80">
            // By Design
          </p>
        </div>
      </section>
    </V1InteriorShell>
  );
}
