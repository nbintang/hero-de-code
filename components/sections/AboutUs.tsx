import React from "react";
import CarouselImg from "../CarouselImg";
import dataAbout from "@/data/aboutData";

export default async function AboutUs() {
  const images = await dataAbout();
  return (
    <div className="container md:max-w-6xl mx-auto px-4 py-10" id="about">
      <div className="text-center md:text-start ">
        <p className="text-primary text-sm">Who We Are</p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          Know About Us
          <br />
          HeartCare Team
        </h1>
      </div>

      <div className="mt-4">
        <CarouselImg images={images} />
      </div>
    </div>
  );
}
