import { ImageIcon, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";

export type HubMode = "home" | "brand" | "website";

interface HubHomeProps {
  onSelect: (mode: "brand" | "website") => void;
  onLogout: () => void;
}

/**
 * Post-login landing — Brand kit vs Website editor.
 */
export default function HubHome({ onSelect, onLogout }: HubHomeProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col gap-8 px-4 py-10 md:py-16">
      <div className="space-y-2">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          United Strength
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Hub</h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Choose Brand kit for logos, photos, fonts, and colors — or edit website copy and page images.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <button
          type="button"
          onClick={() => onSelect("brand")}
          className="flex min-h-[160px] flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-11 items-center justify-center rounded-full border border-border bg-background">
            <ImageIcon className="size-5" aria-hidden />
          </span>
          <span className="text-xl font-semibold">Brand kit</span>
          <span className="text-sm text-muted-foreground">
            Logos, photo library, fonts, sizes, and club colors.
          </span>
        </button>

        <button
          type="button"
          onClick={() => onSelect("website")}
          className="flex min-h-[160px] flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-11 items-center justify-center rounded-full border border-border bg-background">
            <LayoutTemplate className="size-5" aria-hidden />
          </span>
          <span className="text-xl font-semibold">Edit website</span>
          <span className="text-sm text-muted-foreground">
            Preview pages and edit copy, footer, FAQ, and image slots.
          </span>
        </button>
      </div>

      <Button type="button" variant="ghost" className="min-h-[44px] self-start" onClick={() => void onLogout()}>
        Log out
      </Button>
    </div>
  );
}
