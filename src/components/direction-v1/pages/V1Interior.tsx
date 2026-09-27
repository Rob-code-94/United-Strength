import { createContext, useContext, type ImgHTMLAttributes, type ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { useV1Kit } from "../V1Kit";
import type { MediaSlot } from "@/hub/brand-kit";
import V1SiteIndexFooter from "../V1SiteIndexFooter";

const HubMarkContext = createContext(false);

/** Hub preview only. Public pages leave this off, so they get no pencils. */
export function HubMarkProvider({ children }: { children: ReactNode }) {
  return <HubMarkContext.Provider value={true}>{children}</HubMarkContext.Provider>;
}

function pencilAttr(id: string): { "data-hub-pencil": string } | Record<string, never> {
  return { "data-hub-pencil": id };
}

export function useHubPencil(id: string): { "data-hub-pencil": string } | Record<string, never> {
  const marks = useContext(HubMarkContext);
  return marks ? pencilAttr(id) : {};
}

interface ShellProps {
  onNav: (href: string, label: string) => void;
  children: ReactNode;
}

const SATOSHI = { fontFamily: "'Satoshi', sans-serif" } as const;

/** Dark V1 interior frame. Footer matches the homepage. */
export function V1InteriorShell({ onNav, children }: ShellProps) {
  return (
    <div className="bg-[#111111] text-[#F3EEE7] selection:bg-white/15 selection:text-[#F3EEE7]">
      {children}
      <V1SiteIndexFooter onNav={onNav} />
    </div>
  );
}

export function V1BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="absolute left-4 top-4 z-10 flex min-h-[44px] min-w-[44px] items-center gap-1 text-[#F3EEE7] md:left-8 md:top-6"
      aria-label="Back to home"
    >
      <ChevronLeft className="h-5 w-5 shrink-0" />
      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#F3EEE7]/70">
        Back
      </span>
    </button>
  );
}

export function V1MediaImg({
  slot,
  pencil = true,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & { slot: MediaSlot; pencil?: boolean }) {
  const marks = useContext(HubMarkContext);
  const kit = useV1Kit();
  const uploaded = kit.media[slot];
  return (
    <img
      {...props}
      src={uploaded || props.src}
      {...(marks && pencil ? pencilAttr(`media-${slot}`) : {})}
    />
  );
}

export function V1Hero({
  image,
  imageAlt,
  onBack,
  children,
  position = "center 40%",
  mediaSlot,
}: {
  image: string;
  imageAlt: string;
  onBack: () => void;
  children: ReactNode;
  position?: string;
  mediaSlot?: MediaSlot;
}) {
  const marks = useContext(HubMarkContext);
  const kit = useV1Kit();
  const uploaded = mediaSlot ? kit.media[mediaSlot] : "";
  return (
    <section className="v1-hero relative h-[100cqh] min-h-[520px] w-full overflow-hidden bg-[#111111]">
      <img
        src={uploaded || image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
        {...(marks && mediaSlot ? pencilAttr(`media-${mediaSlot}`) : {})}
      />
      <div className="absolute inset-0 bg-[#111111]/50" />
      <V1BackButton onBack={onBack} />
      <div className="absolute bottom-16 left-5 right-5 z-10 md:bottom-20 md:left-10 md:right-10">
        {children}
      </div>
    </section>
  );
}

export function V1Display({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const marks = useContext(HubMarkContext);
  return (
    <h1
      id={id}
      {...(marks ? pencilAttr("type-display") : {})}
      className={`font-sans text-[40px] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#F3EEE7] md:text-[64px] ${className}`}
      style={SATOSHI}
    >
      {children}
    </h1>
  );
}

export function V1Heading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  const marks = useContext(HubMarkContext);
  return (
    <Tag
      {...(marks ? pencilAttr("type-display") : {})}
      className={`font-sans text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.04em] text-[#F3EEE7] md:text-[40px] ${className}`}
      style={SATOSHI}
    >
      {children}
    </Tag>
  );
}

export function V1Kicker({ children }: { children: ReactNode }) {
  const marks = useContext(HubMarkContext);
  return (
    <p
      {...(marks ? pencilAttr("type-mono") : {})}
      className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/60"
    >
      {children}
    </p>
  );
}

export function V1Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  const marks = useContext(HubMarkContext);
  return (
    <div {...(marks ? pencilAttr("type-body") : {})} className="mt-6 flex max-w-xl flex-col gap-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-[16px] leading-relaxed text-[#F3EEE7]/85">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function V1Section({
  children,
  className = "",
  id,
  label,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`border-b border-white/10 bg-[#111111] px-5 py-16 md:px-10 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/** Todd's label only. The destination is not announced until a URL exists. */
export function V1HoldControl({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]"
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {label}
    </button>
  );
}

export function V1NavButton({
  label,
  href,
  onNav,
  forest = false,
}: {
  label: string;
  href: string;
  onNav: (href: string, label: string) => void;
  forest?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onNav(href, label)}
      className={
        forest
          ? "inline-flex min-h-[44px] items-center bg-[#0A3C2E] px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]"
          : "inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]"
      }
    >
      {label}
    </button>
  );
}
