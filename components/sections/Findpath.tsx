import React from "react";
import { Card, CardContent } from "../ui/card";
import Therapy from "../svg/Therapy";

export default function Findpath() {
  return (
    <section className="w-full bg-tertiary">
      <div className=" max-w-6xl mx-auto grid grid-cols-3 ">
        <div className=" grid grid-cols-2 col-span-2 ">
          <div className="col-span-2">
            <h1 className="font-medium text-3xl">
              Find Your Path to Inner Peace
            </h1>
            <p className="text-[#4F4F4F]">
              At Serenity Haven Wellness, we offer a variety of therapeutic
              services designed to support your journey towards emotional
              well-being. Our experienced professionals are dedicated to helping
              you find the right path for your unique needs.
            </p>
          </div>

          <div className="flex col-span-1 flex-col items-start gap-3">
            <h1 className="text-xl">Individual Therapy</h1>
            <p>
              Personalized sessions to address your emotional challenges and
              promote self-discovery.
            </p>
            <button className="text-primary">Read More</button>
          </div>
          <div className="flex flex-col col-span-1 items-start gap-3">
            <h1 className="text-xl">Individual Therapy</h1>
            <p>
              Personalized sessions to address your emotional challenges and
              promote self-discovery.
            </p>
            <button className="text-primary">Read More</button>
          </div>
        </div>

        <Card className="bg-primary/70 col-span-1 relative h-96 w-96">
          <CardContent>
            <Therapy className="absolute w-full left-0 translate-y-8 -bottom-3 h-full " />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
