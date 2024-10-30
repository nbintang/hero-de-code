import React, { Suspense } from "react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { fetchPhoto } from "@/data/getPhoto";
import { BlurFade } from "./ui/blur-fade";

export default async function HeroImg() {
  const photoIds = ["AhfrA5VQNpM", "FpdoHOjzaOM", "GM5Yn5XRVqA", "0QP2i5QzGBk"];
  const images = await Promise.all(photoIds.map((id) => fetchPhoto(id)));

  return (
    <div className="grid grid-cols-12 mx-5 grid-rows-2 order-first md:order-last gap-1 h-[300px] md:h-[500px]">
      {/* Top Row */}
      <div className="col-span-7 h-full">
        <Suspense
          fallback={<Skeleton className="w-full h-full relative rounded-2xl" />}
        >
          <BlurFade delay={0.2 * 1} inView>
            <div className="w-full h-full relative">
              <Image
                src={images[0]}
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
          fallback={<Skeleton className="w-full h-full relative rounded-2xl" />}
        >
          <BlurFade delay={0.2 * 2} inView>
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

      {/* Bottom Row */}
      <div className="col-span-5 h-full">
        <Suspense
          fallback={<Skeleton className="w-full h-full rounded-2xl relative" />}
        >
          <BlurFade delay={0.2 * 3} inView>
            <div className="w-full h-full relative">
              <Image
                src={images[1]}
                alt="hero"
                width={200}
                height={200}
                className="object-cover w-full h-full shadow rounded-2xl"
              />
            </div>
          </BlurFade>
        </Suspense>
      </div>
      <div className="col-span-7 h-full">
        <Suspense
          fallback={<Skeleton className="w-full h-full rounded-2xl relative" />}
        >
          <BlurFade delay={0.2 * 4} inView>
            <div className="w-full h-full relative">
              <Image
                src={images[2]}
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
  );
}
