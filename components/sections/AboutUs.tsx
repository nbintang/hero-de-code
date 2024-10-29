import React from "react";
import { fetchPhoto } from "@/data/getPhoto";
import CarouselImg from "../CarouselImg";

export default async function AboutUs() {
  const images = [
    await fetchPhoto("Q_Sei-TqSlc"),
    await fetchPhoto("j9jZSqfH5YI"),
    await fetchPhoto("7FC-84Ap_IU"),
    await fetchPhoto("9VpI3gQ1iUo"),
    await fetchPhoto("zwzSESZXb6M"),
  ];
  return (
    <div className="container md:max-w-6xl mx-auto px-4 py-10">
      <div className="text-center md:text-start ">
        <p className="text-primary text-sm">Who We Are</p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          Explore Our Comprehensive
          <br />
          Wellness Services
        </h1>
        <p className="font-medium mt-2 text-base lg:text-lg  text-muted-foreground text-[#4F4F4F]">
          According to research, around 50% of teenagers feel embarrassed to
          <br className="hidden md:block" />
          admit that they experience mental health problems.
        </p>
      </div>

      <div>
        <CarouselImg images={images} />

        <div>
          <p className="text-base lg:text-lg  text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            repudiandae culpa pariatur quae, ad neque consequatur aut odit amet
            fuga? Fugit corporis aliquid aperiam natus placeat illo non fugiat
            autem beatae officiis.
          </p>
        </div>
      </div>
    </div>
  );
}
