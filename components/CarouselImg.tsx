"use client";
import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AboutItem } from "@/data/aboutData";
import useCarousel from "@/hooks/useCarousel";
export default function CarouselImg({ images }: { images: AboutItem[] }) {
  const { plugin, api, setApi, current,  } = useCarousel();
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="p-0">
                  <div className="relative pt-[72.25%] md:pt-[49.25%] lg:pt-[50.25%]  overflow-hidden rounded-3xl">
                    <div className="absolute inset-0">
                      <Image
                        src={src.img}
                        alt={`Slide ${index + 1}`}
                        width={200}
                        height={200}
                        className=" object-cover object-center w-full h-full"
                      />
                    </div>
                    <div className="bg-black/60 absolute inset-0 w-full h-full z-10 flex flex-col justify-end p-4">
                      <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">
                        {src.title}
                      </h1>
                      <p className="text-xs md:text-sm lg:text-base text-white/80 w-full md:w-3/4 overflow-hidden ">
                        {src.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-3 h-3 mx-1 p-0 rounded-full ${
              index === current ? "bg-primary" : "bg-tertiary"
            }`}
            onClick={() => api?.scrollTo(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </>
  );
}
