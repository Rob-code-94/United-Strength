import type { ReactNode } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader({ actions }: { actions?: ReactNode }) {
  return (
    <div className="flex w-full items-center gap-3">
      <SidebarTrigger className="size-11 cursor-pointer" aria-label="Open settings" />
      <p className="text-sm font-medium">Page preview</p>
      {actions ? <div className="ml-auto flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}
