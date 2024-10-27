import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { fetchPhoto } from "@/data/getPhoto";
import { Skeleton } from "../ui/skeleton";

export default async function Hero() {
  const images = {
    1: await fetchPhoto("1bP7z_UOwl4"),
    2: await fetchPhoto("FpdoHOjzaOM"),
    3: await fetchPhoto("seUxMX-DhAQ"),
    4: await fetchPhoto("5XVw43ET01s"),
  };

  return (
    <div className="grid place-items-center min-h-screen">
      <section className="grid max-w-6xl mx-5 grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-5 md:gap-10 mx-auto order-last md:order-first items-center md:items-start">
          <div className="space-y-2 text-center mt-4 md:mt-0 md:text-start mx-5 md:mx-0">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              dignissimos a facere, voluptates optio sequi?
            </p>
          </div>
          <Button className="px-5 text-white">Book Appointment</Button>
        </div>

        <div className="grid grid-cols-12 mx-5 grid-rows-2 order-first md:order-last gap-1 h-[300px] md:h-[500px]">
          {/* Top Row */}
          <div className="col-span-7 h-full">
            {images[1] ? (
              <Image
                src={images[1].urls.regular}
                alt={images[1].alt_description || "hero"}
                width={400}
                height={240}
                className="object-cover shadow w-full h-full rounded-2xl"
              />
            ) : (
              <Skeleton className="w-full h-full rounded-2xl" />
            )}
          </div>
          <div className="col-span-5 h-full">
            {images[4] ? (
              <Image
                src={images[4].urls.regular}
                alt={images[4].alt_description || "hero"}
                width={300}
                height={240}
                className="object-cover shadow w-full h-full rounded-2xl"
              />
            ) : (
              <Skeleton className="w-full h-full rounded-2xl" />
            )}
          </div>

          {/* Bottom Row */}
          <div className="col-span-5 h-full">
            {images[2] ? (
              <Image
                src={images[2].urls.regular}
                alt={images[2].alt_description || "hero"}
                width={300}
                height={240}
                className="object-cover shadow w-full h-full rounded-2xl"
              />
            ) : (
              <Skeleton className="w-full h-full rounded-2xl" />
            )}
          </div>
          <div className="col-span-7 h-full">
            {images[3] ? (
              <Image
                src={images[3].urls.regular}
                alt={images[3].alt_description || "hero"}
                width={400}
                height={240}
                className="object-cover shadow w-full h-full rounded-2xl"
              />
            ) : (
              <Skeleton className="w-full h-full rounded-2xl" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}