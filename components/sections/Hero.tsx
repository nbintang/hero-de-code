import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-between items-center">
      <div className="max-w-lg h-full  space-y-12">
        <h1 className="text-5xl font-medium">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          dignissimos a facere, voluptates optio sequi?
        </p>
        <Button className="px-5 text-white">Book Appointment</Button>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="relative w-64 h-80 rounded-2xl overflow-hidden"
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
    </div>
  );
}
