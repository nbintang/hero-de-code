import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex max-w-6xl mx-auto justify-between flex-wrap-reverse items-center ">
      <div className="flex-[0_0_45%] flex flex-col gap-12  items-start">
        <div className="space-y-9">
          <h1 className="text-6xl font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            dignissimos a facere, voluptates optio sequi?
          </p>
        </div>
        <Button className="px-5 text-white">Book Appointment</Button>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="relative w-52 h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src="/img/hero.jpg"
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
