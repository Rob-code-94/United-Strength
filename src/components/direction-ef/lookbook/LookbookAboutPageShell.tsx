import type { ReactNode } from "react";
import SiteIndexFooter from "../SiteIndexFooter";

interface LookbookAboutPageShellProps {
  children: ReactNode;
  onNav: (href: string, label: string) => void;
  /** Replaces the cream site index. Philosophy passes the V1 home footer. */
  footer?: ReactNode;
  className?: string;
}

/** Standard EF About page wrapper — editorial foundation (no DirectionEPageShell). */
export default function LookbookAboutPageShell({
  children,
  onNav,
  footer,
  className,
}: LookbookAboutPageShellProps) {
  return (
    <div
      className={`flex flex-col animate-fade-in font-sans ${
        className ??
        "bg-white text-[#181818] selection:bg-neutral-100 selection:text-neutral-900"
      }`}
    >
      {children}
      {footer ?? <SiteIndexFooter onNav={onNav} />}
    </div>
  );
}
