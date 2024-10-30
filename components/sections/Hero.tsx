import React, { Suspense } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { fetchPhoto } from "@/data/getPhoto";
import { Skeleton } from "../ui/skeleton";
import { BlurFade } from "../ui/blur-fade";

export default async function Hero() {
  const images = {
    1: await fetchPhoto("AhfrA5VQNpM"),
    2: await fetchPhoto("FpdoHOjzaOM"),
    3: await fetchPhoto("GM5Yn5XRVqA"),
    4: await fetchPhoto("0QP2i5QzGBk"),
  };

  return (
    <div className="grid place-items-center min-h-screen" id="hero">
      <section className="grid max-w-6xl mx-5 grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-5 md:gap-10 mx-auto order-last md:order-first items-center md:items-start">
          <div className="space-y-2 text-center mt-4 md:mt-0 md:text-start mx-5 md:mx-0">
            <BlurFade delay={0.2 * 2} inView>
              <h1 className="text-3xl md:text-5xl font-semibold">
                Empowering Minds, Healing Hearts
              </h1>
            </BlurFade>

            <BlurFade delay={0.2 * 3} inView>
              <p className="text-sm md:text-lg text-muted-foreground">
                Professional mental health support for every stage of life and
                from children to adults, and for parents striving to nurture
                emotionally strong families
              </p>
            </BlurFade>
          </div>
          <div>
            <BlurFade delay={0.2 * 4} inView>
              <Button className="px-5 text-white">Book a Consultation Today</Button>
            </BlurFade>
          </div>
        </div>

        <div className="grid grid-cols-12 mx-5 grid-rows-2 order-first md:order-last gap-1 h-[300px] md:h-[500px]">
          {/* Top Row */}
          <div className="col-span-7 h-full">
            <Suspense
              fallback={
                <Skeleton className="w-full h-full relative rounded-2xl" />
              }
            >
              <BlurFade delay={0.2 * 1} inView>
                <div className="w-full h-full relative">
                  <Image
                    src={images[1]}
                    alt="hero"
                    width={200}
                    height={200}
                    className="object-cover shadow w-full h-full rounded-2xl"
                  />
                </div>
              </BlurFade>
            </Suspense>
          </div>
          <div className="col-span-5 h-full">
            <Suspense
              fallback={
                <Skeleton className="w-full h-full relative rounded-2xl" />
              }
            >
              <BlurFade delay={0.2 * 2} inView>
                <div className="w-full h-full relative">
                  <Image
                    src={images[4]}
                    alt="hero"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full shadow rounded-2xl"
                  />
                </div>
              </BlurFade>
            </Suspense>
          </div>

          {/* Bottom Row */}
          <div className="col-span-5 h-full">
            <Suspense
              fallback={
                <Skeleton className="w-full h-full rounded-2xl relative" />
              }
            >
              <BlurFade delay={0.2 * 3} inView>
                <div className="w-full h-full  relative">
                  <Image
                    src={images[2]}
                    alt="hero"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full  shadow rounded-2xl"
                  />
                </div>
              </BlurFade>
            </Suspense>
          </div>
          <div className="col-span-7 h-full">
            <Suspense
              fallback={
                <Skeleton className="w-full h-full rounded-2xl relative" />
              }
            >
              <BlurFade delay={0.2 * 4} inView>
                <div className="w-full h-full relative">
                  <Image
                    src={images[3]}
                    alt="hero"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full shadow rounded-2xl"
                  />
                </div>
              </BlurFade>
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
