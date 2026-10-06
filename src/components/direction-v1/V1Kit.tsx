import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { mergeFaq, mergePages, seedFields, type BrandKitFields, type MediaSlot, type PageCopyKit } from "@/hub/brand-kit";

const KitContext = createContext<BrandKitFields>(seedFields());

function mergePublished(published: BrandKitFields): BrandKitFields {
  const seed = seedFields();
  return {
    ...seed,
    ...published,
    footer: {
      ...seed.footer,
      ...published.footer,
      phone: published.footer?.phone?.trim() || seed.footer.phone,
    },
    media: { ...seed.media, ...published.media },
    faq: mergeFaq(published.faq),
    pages: mergePages(published.pages),
  };
}

export function V1KitProvider({ children }: { children: ReactNode }) {
  const [kit, setKit] = useState<BrandKitFields>(seedFields);

  useEffect(() => {
    let cancel = false;
    fetch("/api/brand-kit")
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: { published?: BrandKitFields } | null) => {
        if (cancel || !payload?.published) return;
        setKit(mergePublished(payload.published));
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
  return <KitContext.Provider value={mergePublished(value)}>{children}</KitContext.Provider>;
}

export function useV1Kit(): BrandKitFields {
  return useContext(KitContext);
}

export function useSlot(slot: MediaSlot, fallback: string): string {
  const kit = useV1Kit();
  const url = kit.media[slot];
  return url ? url : fallback;
}

/** Merged page editorial copy from the active kit (draft in hub, published on site). */
export function usePageCopy(): PageCopyKit {
  return useV1Kit().pages;
}
