import React from "react";
import { BlurFade } from "../ui/blur-fade";
import HeroImg from "../HeroImg";
import HeroBtn from "../HeroBtn";

export default function Hero() {
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
            <HeroBtn />
          </div>
        </div>
        <HeroImg />
      </section>
    </div>
  );
}
