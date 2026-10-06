import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { MediaSlot } from "@/hub/brand-kit";
import { V1MediaImg } from "@/components/direction-v1/pages/V1Interior";

export type PortfolioSlide = {
  image: string;
  title: string;
  description: string;
  slot?: MediaSlot;
};

/** Portfolio 04 showcase: the active frame opens wide; neighbors stay a sliver. */
export default function Portfolio({ slides }: { slides: readonly PortfolioSlide[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!api) return;
    const snap = api.selectedScrollSnap();
    setSelectedIndex(snap);
    setCurrent(snap % slides.length);
  }, [api, slides.length]);

  React.useEffect(() => {
    if (!api) return;

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  React.useEffect(() => {
    if (api) {
      const timer = setTimeout(() => {
        api.reInit();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [api, selectedIndex]);

  const activeData = slides[current];
  const duplicatedData = [...slides, ...slides, ...slides];

  if (!activeData) return null;

  return (
    <section aria-label="Space and equipment" className="overflow-x-hidden border-b border-white/10 bg-[#111111]">
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            containScroll: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-3">
            {duplicatedData.map((item, index) => {
              const isActive = index === selectedIndex;
              return (
                <CarouselItem
                  key={`${item.title}-${index}`}
                  className={cn(
                    "pl-2 transition-all duration-700 ease-in-out motion-reduce:transition-none md:pl-3",
                    isActive ? "basis-[82%] md:basis-[75%]" : "basis-[18%] md:basis-[12.5%]",
                  )}
                >
                  <div className="relative overflow-hidden">
                    {item.slot ? (
                      <V1MediaImg
                        slot={item.slot}
                        pencil={index < slides.length}
                        src={item.image}
                        alt=""
                        className={cn(
                          "h-[56vh] w-full object-cover transition-all duration-700 motion-reduce:transition-none md:h-[72vh]",
                          !isActive && "brightness-75",
                        )}
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt=""
                        className={cn(
                          "h-[56vh] w-full object-cover transition-all duration-700 motion-reduce:transition-none md:h-[72vh]",
                          !isActive && "brightness-75",
                        )}
                      />
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end gap-1 px-4 pb-4 md:px-8 md:pb-6">
          <button
            type="button"
            className="pointer-events-auto inline-flex min-h-11 min-w-11 items-center justify-center px-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7] transition-colors hover:text-[#C4A35A]"
            onClick={() => api?.scrollPrev()}
          >
            Prev
            <span className="sr-only">Previous frame</span>
          </button>
          <span className="pointer-events-none inline-flex min-h-11 items-center font-mono text-[11px] text-[#F3EEE7]/35" aria-hidden>
            /
          </span>
          <button
            type="button"
            className="pointer-events-auto inline-flex min-h-11 min-w-11 items-center justify-center px-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7] transition-colors hover:text-[#C4A35A]"
            onClick={() => api?.scrollNext()}
          >
            Next
            <span className="sr-only">Next frame</span>
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-6xl md:ml-[8%] md:max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/60">
            {activeData.title}
          </p>
          <p
            className="mt-4 text-[18px] leading-snug tracking-[-0.02em] text-[#F3EEE7] md:text-[22px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {activeData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
