import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { seedFields, type BrandKitFields, type MediaSlot } from "@/hub/brand-kit";

const KitContext = createContext<BrandKitFields>(seedFields());

export function V1KitProvider({ children }: { children: ReactNode }) {
  const [kit, setKit] = useState<BrandKitFields>(seedFields);

  useEffect(() => {
    let cancel = false;
    fetch("/api/brand-kit")
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: { published?: BrandKitFields } | null) => {
        if (!cancel && payload?.published) setKit(payload.published);
      })
      .catch(() => {
        /* Seed stays so the homepage still renders. */
      });
    return () => {
      cancel = true;
    };
  }, []);

  return <KitContext.Provider value={kit}>{children}</KitContext.Provider>;
}

export function V1KitValue({ value, children }: { value: BrandKitFields; children: ReactNode }) {
  return <KitContext.Provider value={value}>{children}</KitContext.Provider>;
}

export function useV1Kit(): BrandKitFields {
  return useContext(KitContext);
}

export function useSlot(slot: MediaSlot, fallback: string): string {
  const kit = useV1Kit();
  const url = kit.media[slot];
  return url ? url : fallback;
}
