import React from "react";
import { Card, CardContent } from "../ui/card";
import Therapy from "../svg/Therapy";
import { MoveRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Findpath() {
  return (
    <section className="w-full bg-tertiary py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="grid m-3 items-center space-y-4 lg:  order-last mr-4 md:order-first grid-cols-2 col-span-2">
          <div className="col-span-2 ">
            <h1 className="font-medium text-2xl lg:text-3xl ">
              Find Your Path to Inner Peace
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg my-5 ">
              At HeartCare, we offer a variety of therapeutic services designed
              to support your journey towards emotional well-being. Our
              experienced professionals are dedicated to helping you find the
              right path for your unique needs.
            </p>
          </div>

          <div className="flex flex-col col-span-2 mr-7 md:col-span-1 items-start gap-2">
            <h1 className="text-lg md:text-xl">Individual Therapy</h1>
            <Separator orientation="horizontal" className=" bg-black/70" />
            <p className="text-sm lg:text-base text-ellipsis">
              Personalized sessions to address your emotional challenges and
              promote self-discovery.
            </p>
            <button className="text-primary border border-primary px-2 rounded-full hover:underline flex gap-3 py-2 items-center text-xs md:text-sm">
              <p>Read More</p>
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col col-span-2 mr-7 md:col-span-1 items-start gap-2">
            <h1 className="text-lg md:text-xl">Couple Consultation</h1>
            <Separator orientation="horizontal" className="bg-black/70" />
            <p className="text-sm lg:text-base text-ellipsis">
              Strengthen your relationship with effective communication and
              conflict resolution strategies.
            </p>
            <button className="text-primary border border-primary px-2 rounded-full hover:underline flex gap-3 py-2 items-center text-xs md:text-sm">
              <p>Read More</p>
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <Card className="bg-primary/70 order-first m-3 lg:order-last col-span-3 md:col-span-1 relative overflow-hidden md:overflow-auto aspect-video md:aspect-video lg:aspect-square  ">
          <CardContent>
            <div className="absolute w-full left-0 bottom-0 ">
              <Therapy className="" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
