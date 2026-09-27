import { useReducedMotion } from "motion/react";
import { gymPhotos } from "../../../assets/images/gym";
import { gymVideos } from "../../../assets/video";
import { BY_DESIGN } from "../../../data/culture-copy";
import Portfolio from "../../shadcn-space/blocks/portfolio-04/portfolio";
import { V1BackButton, V1Heading, V1InteriorShell, V1MediaImg, useHubPencil } from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const SATOSHI = { fontFamily: "'Satoshi', sans-serif" } as const;

const BEAT = "border-b border-white/10 bg-[#111111] px-5 py-[12vw] md:px-[6vw]";

export default function V1ByDesignPage({ onBack, onNav }: PageProps) {
  const reduceMotion = useReducedMotion();
  const displayPencil = useHubPencil("type-display");
  const bodyPencil = useHubPencil("type-body");
  const [space, equipment, materials, hospitality] = BY_DESIGN.principles.rows;
  const marginLine = `${BY_DESIGN.manifesto.body[1].split(". ")[0]}.`;

  return (
    <V1InteriorShell onNav={onNav}>
      <section className="relative h-[100cqh] min-h-[520px] w-full overflow-hidden bg-[#111111]">
        <V1MediaImg
          slot="byDesignHero"
          src={gymPhotos.architectureRaw}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111111]/40" />
        <V1BackButton onBack={onBack} />
        <div className="absolute bottom-16 left-5 right-5 z-10 md:bottom-20 md:left-10 md:right-10">
          <h1
            {...displayPencil}
            className="font-sans text-[40px] font-medium uppercase leading-[0.95] tracking-[0.12em] text-[#F3EEE7] md:text-[64px]"
            style={SATOSHI}
          >
            {BY_DESIGN.headline}
          </h1>
          <p {...bodyPencil} className="mt-4 text-[16px] text-[#F3EEE7]/85">{BY_DESIGN.lede}</p>
        </div>
      </section>

      <Portfolio
        slides={[
          {
            image: gymPhotos.floorColumbus,
            title: `01 / ${space.title}`,
            description: space.body,
            slot: "byDesignFrame1",
          },
          {
            image: gymPhotos.equipmentClose,
            title: `02 / ${equipment.title}`,
            description: equipment.body,
            slot: "byDesignFrame2",
          },
        ]}
      />

      <section className={BEAT}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-6 md:col-start-4">
            {BY_DESIGN.manifesto.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[22px] font-normal leading-snug tracking-[-0.02em] text-[#F3EEE7] md:text-[28px]"
                style={SATOSHI}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-white/10 bg-[#111111]" aria-label="Morning light">
        {reduceMotion ? (
          <V1MediaImg
            slot="byDesignWide"
            src={gymPhotos.galleryCinematic}
            alt=""
            className="aspect-[21/9] w-full object-cover"
          />
        ) : (
          <video
            className="aspect-[21/9] w-full object-cover"
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
      </section>

      <section className={BEAT} aria-label="Detail crops">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-[1fr_0.8fr_1.2fr] md:gap-10">
          <V1MediaImg
            slot="byDesignTall"
            src={gymPhotos.spaceAtmosphere}
            alt=""
            className="aspect-[3/5] w-full object-cover"
          />
          <V1MediaImg
            slot="byDesignSquare"
            src={gymPhotos.rackWeights}
            alt=""
            className="aspect-square w-full object-cover md:mt-[25%]"
          />
          <V1MediaImg
            slot="byDesignRest"
            src={gymPhotos.galleryCinematic}
            alt=""
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </section>

      <section className={BEAT} aria-label="Materials and hospitality">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          <figure>
            <V1MediaImg
              slot="byDesignLeft"
              src={gymPhotos.equipmentClose}
              alt=""
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7]/55">
                03 / {materials.title}
              </p>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#F3EEE7]/85">
                {materials.body}
              </p>
            </figcaption>
          </figure>
          <figure>
            <V1MediaImg
              slot="byDesignRight"
              src={gymPhotos.floorColumbus}
              alt=""
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7]/55">
                04 / {hospitality.title}
              </p>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#F3EEE7]/85">
                {hospitality.body}
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={BEAT}>
        <p
          className="mx-auto max-w-6xl text-[22px] leading-snug tracking-[-0.02em] text-[#F3EEE7] md:ml-[28%] md:max-w-xl md:text-[28px]"
          style={SATOSHI}
        >
          {marginLine}
        </p>
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
          <V1Heading>Built with intention.</V1Heading>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.22em] text-[#F3EEE7]/80">
            // By Design
          </p>
        </div>
      </section>
    </V1InteriorShell>
  );
}
