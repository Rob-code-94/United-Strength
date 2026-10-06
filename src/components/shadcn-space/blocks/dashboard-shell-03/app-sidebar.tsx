import type { CSSProperties, ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/shadcn-space/blocks/dashboard-shell-03/site-header";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Donor: @shadcn-space/dashboard-shell-03 (Pro).
 * Demo nav, charts, and the premium card are removed. The sidebar stays fixed
 * at 20% and the main column scrolls on its own.
 */
const AppSidebar = ({
  sidebar,
  children,
  headerActions,
}: {
  sidebar: ReactNode;
  children: ReactNode;
  headerActions?: ReactNode;
}) => {
  return (
    <TooltipProvider>
      <SidebarProvider style={{ "--sidebar-width": "20vw" } as CSSProperties}>
        <Sidebar className="bg-background">
          <SidebarHeader className="gap-1 px-4 py-4">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.18em]">United Strength</p>
            <p className="text-sm text-muted-foreground">Settings</p>
          </SidebarHeader>
          <SidebarContent className="overflow-y-auto px-4 pb-6">{sidebar}</SidebarContent>
        </Sidebar>
        <div className="flex h-dvh min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden">
          <header className="flex h-14 shrink-0 items-center border-b bg-background px-4">
            <SiteHeader actions={headerActions} />
          </header>
          <main className="min-h-0 flex-1 overflow-hidden">{children}</main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default AppSidebar;
