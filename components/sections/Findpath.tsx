import React from "react";
import people from "@/public/img/people.png";
import Image from "next/image";

export default function Findpath() {
  return (
    <div className="flex md:flex-row flex-col items-center gap-10">
      <div className="md:w-2/3 flex flex-col gap-10">
        <h1 className="font-medium text-3xl">Find Your Path to Inner Peace</h1>
        <p className="text-[#4F4F4F]">
          At Serenity Haven Wellness, we offer a variety of therapeutic services
          designed to support your journey towards emotional well-being. Our
          experienced professionals are dedicated to helping you find the right
          path for your unique needs.
        </p>
        <div className="flex">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-xl">Individual Therapy</h1>
            <p>
              Personalized sessions to address your emotional challenges and
              promote self-discovery.
            </p>
            <button className="text-primary">Read More</button>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-xl">Individual Therapy</h1>
            <p>
              Personalized sessions to address your emotional challenges and
              promote self-discovery.
            </p>
            <button className="text-primary">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <Image src={people} alt="" className="bg-primary/50 pt-28 rounded-xl" />
      </div>
    </div>
  );
}
