import React from "react";
import { Marquee } from "../ui/marquee";
import TestimonialCard from "../TestimonialCard";
import dataTestimonial from "@/data/dataTestimonial";

export default async function Testimonial() {
  const data = await dataTestimonial();
  return (
    <section className="w-full ">
      <div className="max-w-6xl mx-auto mt-5">
        <div>
          <h5 className="text-primary text-sm text-center lg:text-start ">
            Testimonial
          </h5>
          <h2 className="text-2xl md:text-3xl font-semibold lg:text-5xl text-center lg:text-start">
            What Our Patients Say
          </h2>
        </div>
        <div className="relative flex  my-5 w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {data.map((item, i) => (
              <TestimonialCard
                key={i}
                quote={item.quote}
                author={item.author}
                role={item.role}
                avatarSrc={item.img}
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:20s]">
            {data.map((item, i) => (
              <TestimonialCard
                key={i}
                quote={item.quote}
                author={item.author}
                role={item.role}
                avatarSrc={item.img}
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {data.map((item, i) => (
              <TestimonialCard
                key={i}
                quote={item.quote}
                author={item.author}
                role={item.role}
                avatarSrc={item.img}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
