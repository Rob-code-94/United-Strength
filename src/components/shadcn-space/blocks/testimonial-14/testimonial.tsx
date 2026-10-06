import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { HubCopyText } from "@/components/direction-v1/pages/V1Interior";

export type TestimonialQuote = {
  name: string;
  content: string;
};

export type TestimonialQuoteCopyPaths = {
  contentPath: string;
  namePath: string;
};

const Quotesvg = () => {
  return (
    <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity=".6" clipPath="url(#quote-mark)">
        <path d="m34.11 3.272-5.069 9.945-.27.528h8.239v14.983H21.72v-15.26l5.198-10.196zm-21.356 0-5.07 9.945-.269.528h8.238v14.983H.363V13.47l5.2-10.198z" stroke="#F3EEE7"/>
      </g>
      <defs>
        <clipPath id="quote-mark">
          <path fill="#F3EEE7" d="M0 2.91h37.818v26.182H0z"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default function Testimonial({
  quotes,
  quoteCopyPaths,
}: {
  quotes: readonly TestimonialQuote[];
  /** Hub copy pencils — parallel to `quotes`. */
  quoteCopyPaths?: readonly TestimonialQuoteCopyPaths[];
}) {
  const items = quotes.filter((quote) => quote.content.trim() && quote.name.trim());
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const sync = () => {
      const snaps = api.scrollSnapList().length;
      setCount(snaps);
      setCurrent(api.selectedScrollSnap());
      // Loop mode: Embla can report false until reInit — enable when >1 snap.
      setCanPrev(snaps > 1 ? true : api.canScrollPrev());
      setCanNext(snaps > 1 ? true : api.canScrollNext());
    };

    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const progress = count > 0 ? ((current + 1) / count) * 100 : 0;

  const itemVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  if (items.length === 0) return null;

  const active = items[current] ?? items[0];

  return (
    <section
      ref={ref}
      aria-label="Member quotes"
      className="overflow-x-hidden border-b border-white/10 bg-[#111111] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="relative flex flex-col gap-10"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {items.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.name}
                  className="basis-[88%] md:basis-[72%]"
                  aria-hidden={index !== current}
                >
                  <div className="flex h-full flex-col justify-between gap-8 border border-white/15 p-6 md:p-10">
                    <div className="flex flex-col gap-6">
                      <Quotesvg />
                      {quoteCopyPaths?.[index]?.contentPath ? (
                        <HubCopyText
                          path={quoteCopyPaths[index]!.contentPath}
                          as="p"
                          className="text-[18px] leading-snug text-[#F3EEE7] md:text-[20px]"
                        >
                          {testimonial.content}
                        </HubCopyText>
                      ) : (
                        <p className="text-[18px] leading-snug text-[#F3EEE7] md:text-[20px]">
                          {testimonial.content}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="size-11 border-none">
                        <AvatarFallback className="bg-white/10 font-mono text-[11px] uppercase tracking-[0.12em] text-[#F3EEE7]">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {quoteCopyPaths?.[index]?.namePath ? (
                        <HubCopyText
                          path={quoteCopyPaths[index]!.namePath}
                          as="p"
                          className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/55"
                        >
                          {testimonial.name}
                        </HubCopyText>
                      ) : (
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/55">
                          {testimonial.name}
                        </p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="sr-only" aria-live="polite">
            {active ? `${active.name}. ${active.content}` : ""}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="flex items-center justify-between gap-6"
        >
          <div className="h-px max-w-239 flex-1 overflow-hidden bg-white/15">
            <motion.div
              className="h-full bg-[#F3EEE7]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-11 min-h-11 min-w-11 rounded-none border-white/30 bg-transparent text-[#F3EEE7] hover:bg-white/10 disabled:opacity-40"
              onClick={scrollPrev}
              disabled={!canPrev}
            >
              <ChevronLeft className="size-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-11 min-h-11 min-w-11 rounded-none border-white/30 bg-transparent text-[#F3EEE7] hover:bg-white/10 disabled:opacity-40"
              onClick={scrollNext}
              disabled={!canNext}
            >
              <ChevronRight className="size-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
