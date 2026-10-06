"use client";
import { Play, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const masterclasses = [
  {
    id: 1,
    title: "Framer Masterclass",
    handle: "@frameabotkins",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-6.jpg",
    category: "Design",
  },
  {
    id: 2,
    title: "Growth Masterclass",
    handle: "@novascaflow",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-7.jpg",
    category: "Marketing",
  },
  {
    id: 3,
    title: "Data Visualisation Masterclass",
    handle: "@viziongraphic",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-8.jpg",
    category: "Data",
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    handle: "@lucaycrafton",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-9.jpg",
    category: "Design",
  },
  {
    id: 5,
    title: "UI/UX Design Masterclass",
    handle: "@lucaycrafton",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-10.jpg",
    category: "Design",
  },
  {
    id: 6,
    title: "Data Visualisation Masterclass",
    handle: "@viziongraphic",
    duration: "7 hr",
    rating: 4.6,
    image: "https://images.shadcnspace.com/assets/hero-img/hero-team-img-5.jpg",
    category: "Data",
  },
];

const Gallery02 = () => {
  return (
    <>
      <div className="lg:py-20 sm:py-16 py-8 w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {masterclasses.map((masterclass) => (
              <CarouselItem
                key={masterclass.id}
                className="group pl-6 basis-auto flex-none"
              >
                <a
                  href="#"
                  className="relative block w-sm aspect-368/420 max-w-[calc(100vw-3rem)] rounded-3xl overflow-hidden"
                >
                  <img
                    src={masterclass.image}
                    alt={masterclass.title}
                    className="rounded-3xl w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />

                  <div className="absolute top-0 left-0 right-0 px-6 py-5 w-full h-full flex flex-col items-end justify-between">
                    <div className="flex items-start justify-between gap-3 w-full">
                      <div className="text-left">
                        <p className="text-white font-medium">
                          {masterclass.title}
                        </p>
                        <span className="text-white/50">
                          {masterclass.handle}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="p-1 rounded-full bg-white/20">
                          <Play size={8} className="fill-white stroke-white" />
                        </div>
                        <span className="text-white text-sm">
                          {masterclass.duration}
                        </span>
                      </div>
                    </div>
                    <div className="w-fit flex items-center gap-1.5 py-0.5 px-2 bg-white rounded-full">
                      <Star
                        size={16}
                        className="fill-orange-400 stroke-orange-400"
                      />
                      <span className="text-sm font-medium text-gray-950">
                        {masterclass.rating}
                      </span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Gallery02;
