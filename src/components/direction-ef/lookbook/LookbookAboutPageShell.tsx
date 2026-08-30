import type { ReactNode } from "react";
import SiteIndexFooter from "../SiteIndexFooter";

interface LookbookAboutPageShellProps {
  children: ReactNode;
  onNav: (href: string, label: string) => void;
}

/** Standard EF About page wrapper — editorial foundation (no DirectionEPageShell). */
export default function LookbookAboutPageShell({ children, onNav }: LookbookAboutPageShellProps) {
  return (
    <div className="flex flex-col bg-white text-[#181818] animate-fade-in font-sans selection:bg-neutral-100 selection:text-neutral-900">
      {children}
      <SiteIndexFooter onNav={onNav} />
    </div>
  );
}
