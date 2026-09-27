import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type PortfolioSlide = {
  image: string;
  title: string;
  description: string;
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
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-10">
        <div className="flex items-end justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            className="size-11 min-h-11 min-w-11 rounded-none border-white/30 bg-transparent text-[#F3EEE7] hover:bg-white/10"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="size-5" />
            <span className="sr-only">Previous frame</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-11 min-h-11 min-w-11 rounded-none border-white/30 bg-transparent text-[#F3EEE7] hover:bg-white/10"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="size-5" />
            <span className="sr-only">Next frame</span>
          </Button>
        </div>
      </div>
      <div className="overflow-hidden border-y border-white/10">
        <div className="mx-auto max-w-6xl space-y-8 px-5 py-8 md:px-10">
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
            <CarouselContent className="-ml-4">
              {duplicatedData.map((item, index) => {
                const isActive = index === selectedIndex;
                return (
                  <CarouselItem
                    key={`${item.title}-${index}`}
                    className={cn(
                      "pl-4 transition-all duration-700 ease-in-out motion-reduce:transition-none",
                      isActive ? "basis-[75%]" : "basis-[12.5%]"
                    )}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className={cn(
                          "h-[52vh] w-full object-cover transition-all duration-700 motion-reduce:transition-none md:h-[70vh]",
                          !isActive && "brightness-75"
                        )}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <div className="max-w-2xl">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7]/70">
              {activeData.title}
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#F3EEE7]/85">
              {activeData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
