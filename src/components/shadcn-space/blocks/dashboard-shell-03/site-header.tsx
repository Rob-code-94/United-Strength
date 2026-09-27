import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
  return (
    <div className="flex w-full items-center gap-3">
      <SidebarTrigger className="size-11 cursor-pointer" aria-label="Open settings" />
      <p className="text-sm font-medium">Page preview</p>
    </div>
  );
}
