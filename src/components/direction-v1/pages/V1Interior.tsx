import {
  createContext,
  useContext,
  type CSSProperties,
  type ImgHTMLAttributes,
  type ReactNode,
} from "react";
import { ChevronLeft } from "lucide-react";
import { useV1Kit } from "../V1Kit";
import type { MediaSlot } from "@/hub/brand-kit";
import V1SiteIndexFooter from "../V1SiteIndexFooter";

const HubMarkContext = createContext(false);

export type HubTypeRole = "display" | "body" | "mono";

/** Hub preview only. Public pages leave this off, so they get no pencils. */
export function HubMarkProvider({ children }: { children: ReactNode }) {
  return <HubMarkContext.Provider value={true}>{children}</HubMarkContext.Provider>;
}

function pencilAttr(
  id: string,
  typeRole?: HubTypeRole,
): { "data-hub-pencil": string; "data-hub-type-role"?: string } | Record<string, never> {
  if (!id) return {};
  return typeRole
    ? { "data-hub-pencil": id, "data-hub-type-role": typeRole }
    : { "data-hub-pencil": id };
}

export function useHubPencil(
  id: string,
  typeRole?: HubTypeRole,
): { "data-hub-pencil": string; "data-hub-type-role"?: string } | Record<string, never> {
  const marks = useContext(HubMarkContext);
  return marks ? pencilAttr(id, typeRole) : {};
}

/** Hub copy pencil for a page-copy path (e.g. `philosophy.place.headline`). */
export function useHubCopyPencil(
  path: string,
  typeRole?: HubTypeRole,
): { "data-hub-pencil": string; "data-hub-type-role"?: string } | Record<string, never> {
  return useHubPencil(`copy:${path}`, typeRole);
}

/** One pencil for a whole copy cluster — opens Copy tab scoped to `prefix.*`. */
export function useHubCopySectionPencil(prefix: string): { "data-hub-pencil": string } | Record<string, never> {
  return useHubPencil(`copy-section:${prefix}`);
}

/** Wrapper that places a single section pencil on a dense editorial block. */
export function HubCopySection({
  prefix,
  className,
  style,
  children,
}: {
  prefix: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const pencil = useHubCopySectionPencil(prefix);
  return (
    <div className={className} style={style} {...pencil}>
      {children}
    </div>
  );
}

/** Infer global type role from a copy path when the node omitted data-hub-type-role. */
export function inferTypeRoleFromPath(path: string): HubTypeRole {
  const leaf = path.split(".").pop()?.toLowerCase() ?? "";
  if (leaf === "n" || leaf.endsWith("number") || leaf === "eyebrow") return "mono";
  if (
    leaf === "title" ||
    leaf === "headline" ||
    leaf === "name" ||
    leaf.endsWith("headline") ||
    leaf.endsWith("title")
  ) {
    return "display";
  }
  return "body";
}

/** Render editable editorial text when hub marks are on; plain text on the public site. */
export function HubCopyText({
  path,
  as: Tag = "span",
  className,
  style,
  children,
  pencil = true,
  typeRole,
}: {
  path: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "li";
  className?: string;
  style?: CSSProperties;
  children: string;
  /** When false, text still comes from the kit but no hub pencil mark (use with HubCopySection). */
  pencil?: boolean;
  /** Global type role this text uses — shown in the copy sidebar. */
  typeRole?: HubTypeRole;
}) {
  const marks = useContext(HubMarkContext);
  const role = typeRole ?? inferTypeRoleFromPath(path);
  const attrs = marks && pencil ? pencilAttr(`copy:${path}`, role) : {};
  return (
    <Tag className={className} style={style} {...attrs}>
      {children}
    </Tag>
  );
}

interface ShellProps {
  onNav: (href: string, label: string) => void;
  children: ReactNode;
}

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
  copyPath,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  /** When set, hub pencil edits this page-copy path (words). Otherwise type-display. */
  copyPath?: string;
}) {
  const marks = useContext(HubMarkContext);
  return (
    <h1
      id={id}
      {...(marks ? pencilAttr(copyPath ? `copy:${copyPath}` : "type-display", "display") : {})}
      className={`font-bold uppercase leading-[0.95] tracking-[-0.04em] ${className}`}
      style={{
        fontFamily: "var(--v1-display-family)",
        fontSize: "var(--v1-display-size)",
        color: "var(--v1-display-color, var(--v1-cream, #F3EEE7))",
      }}
    >
      {children}
    </h1>
  );
}

export function V1Heading({
  children,
  className = "",
  as: Tag = "h2",
  copyPath,
  pencil = true,
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
  copyPath?: string;
  /** When false, no hub pencil (use inside HubCopySection). */
  pencil?: boolean;
}) {
  const marks = useContext(HubMarkContext);
  const attrs =
    marks && pencil ? pencilAttr(copyPath ? `copy:${copyPath}` : "type-display", "display") : {};
  return (
    <Tag
      {...attrs}
      className={`font-bold uppercase leading-[1.05] tracking-[-0.04em] ${className}`}
      style={{
        fontFamily: "var(--v1-display-family)",
        fontSize: "calc(var(--v1-display-size) * 0.7)",
        color: "var(--v1-display-color, var(--v1-cream, #F3EEE7))",
      }}
    >
      {children}
    </Tag>
  );
}

export function V1Kicker({
  children,
  copyPath,
  pencil = true,
}: {
  children: ReactNode;
  copyPath?: string;
  /** When false, no hub pencil (use inside HubCopySection). */
  pencil?: boolean;
}) {
  const marks = useContext(HubMarkContext);
  const attrs =
    marks && pencil ? pencilAttr(copyPath ? `copy:${copyPath}` : "type-mono", "mono") : {};
  return (
    <p
      {...attrs}
      className="uppercase tracking-[0.28em] opacity-60"
      style={{
        fontFamily: "var(--v1-mono-family)",
        fontSize: "var(--v1-mono-size)",
        color: "var(--v1-mono-color, var(--v1-cream, #F3EEE7))",
      }}
    >
      {children}
    </p>
  );
}

export function V1Prose({
  paragraphs,
  copyPaths,
  pencil = true,
}: {
  paragraphs: readonly string[];
  /** Per-paragraph copy paths; when set, each paragraph gets its own copy pencil. */
  copyPaths?: readonly string[];
  /** When false, no hub pencils (use inside HubCopySection). */
  pencil?: boolean;
}) {
  const marks = useContext(HubMarkContext);
  const bodyStyle = {
    fontFamily: "var(--v1-body-family)",
    fontSize: "var(--v1-body-size)",
    color: "var(--v1-body-color, var(--v1-cream, #F3EEE7))",
  } as const;
  if (copyPaths && copyPaths.length > 0) {
    return (
      <div className="mt-6 flex max-w-xl flex-col gap-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={`${index}-${paragraph.slice(0, 24)}`}
            className="leading-relaxed opacity-85"
            style={bodyStyle}
            {...(marks && pencil && copyPaths[index]
              ? pencilAttr(`copy:${copyPaths[index]}`, "body")
              : {})}
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  }
  return (
    <div
      {...(marks && pencil ? pencilAttr("type-body", "body") : {})}
      className="mt-6 flex max-w-xl flex-col gap-4"
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="leading-relaxed opacity-85" style={bodyStyle}>
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
  copyPath,
}: {
  label: string;
  href: string;
  onNav: (href: string, label: string) => void;
  forest?: boolean;
  copyPath?: string;
}) {
  const marks = useContext(HubMarkContext);
  return (
    <button
      type="button"
      onClick={() => onNav(href, label)}
      {...(marks && copyPath ? pencilAttr(`copy:${copyPath}`, "body") : {})}
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
