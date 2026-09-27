import { gymPhotos } from "../../../assets/images/gym";
import { PERSONAL_TRAINING_HUB, TRAINING_CTA } from "../../../data/training-copy";
import { V1_PT_COACHES, V1_PT_STATS } from "../../../data/v1-interior-copy";
import {
  V1Display,
  V1Heading,
  V1Hero,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1NavButton,
  V1Prose,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

export default function V1PersonalTrainingPage({ onBack, onNav }: PageProps) {
  const c = PERSONAL_TRAINING_HUB;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.floorColumbus}
        imageAlt="Coaching on the training floor"
        onBack={onBack}
        mediaSlot="ptHero"
      >
        <V1Display className="max-w-[14ch]">
          Personal Training
          <span className="mt-3 block text-[18px] tracking-[-0.03em] md:text-[28px]">{c.lede}</span>
        </V1Display>
      </V1Hero>

      <V1Section>
        <V1Kicker>
          {c.approach.n} // {c.approach.title}
        </V1Kicker>
        <V1Heading className="mt-6">{c.approach.headline}</V1Heading>
        <V1Prose paragraphs={c.approach.body} />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          {c.experience.n} // {c.experience.title}
        </V1Kicker>
        <V1Heading className="mt-6">{c.experience.headline}</V1Heading>
        <ul className="mt-8 flex flex-col gap-3">
          {V1_PT_STATS.map((stat) => (
            <li key={stat} className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em] md:text-[40px]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              {stat}
            </li>
          ))}
        </ul>
        <V1Prose paragraphs={c.experience.body} />
      </V1Section>

      <section className="grid border-b border-white/10 md:grid-cols-2">
        <V1MediaImg slot="ptPhoto1" src={gymPhotos.equipmentClose} alt="" className="aspect-[4/3] h-full w-full object-cover" />
        <V1MediaImg slot="ptPhoto2" src={gymPhotos.rackWeights} alt="" className="aspect-[4/3] h-full w-full object-cover" />
      </section>

      <V1Section label="03 // Two Ways to Train">
        <V1Kicker>03 // Two Ways to Train</V1Kicker>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <article>
            <h3 className="font-sans text-[22px] font-bold uppercase tracking-[-0.03em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              {c.oneOnOne.title}
            </h3>
            <p className="mt-3 text-[16px] text-[#F3EEE7]/85">{c.oneOnOne.headline}</p>
            <V1Prose paragraphs={c.oneOnOne.body} />
          </article>
          <article>
            <h3 className="font-sans text-[22px] font-bold uppercase tracking-[-0.03em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              {c.privateGroup.title}
            </h3>
            <p className="mt-3 text-[16px] text-[#F3EEE7]/85">{c.privateGroup.headline}</p>
            <V1Prose paragraphs={c.privateGroup.body} />
          </article>
        </div>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          {c.programming.n} // {c.programming.title}
        </V1Kicker>
        <V1Heading className="mt-6">{c.programming.headline}</V1Heading>
        <V1Prose paragraphs={c.programming.body} />
      </V1Section>

      <V1Section label="05 // Find the Right Coach">
        <V1Kicker>05 // Find the Right Coach</V1Kicker>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">
          Finding a coach shouldn't just be about picking a name from a list. You don't need to know exactly who you want to work with before you start. Tell us what you're looking for and we'll help you figure out the right next step.
        </p>
        <ul className="mt-6 border-t border-white/10">
          {V1_PT_COACHES.map((name) => (
            <li key={name} className="border-b border-white/10 py-4 font-sans text-[18px] font-bold uppercase tracking-[-0.03em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              {name} →
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <V1NavButton label="Meet the Team →" href={TRAINING_CTA.teamHref} onNav={onNav} />
        </div>
      </V1Section>

      <V1Section>
        <V1MediaImg slot="ptBand" src={gymPhotos.galleryCinematic} alt="" className="mb-10 aspect-[16/7] w-full object-cover" />
        <V1Heading className="max-w-[14ch]">{c.ctaSection.headline}</V1Heading>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">{c.ctaSection.body}</p>
        <a
          href={TRAINING_CTA.inquireHref}
          className="mt-6 inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em]"
        >
          Inquire about Training →
        </a>
      </V1Section>
    </V1InteriorShell>
  );
}
