import React from "react";
import AvatarPersonCard from "../AvatarPersonCard";
import createData from "@/data/createData";
import { BlurFade } from "../ui/blur-fade";
export default async function Team() {
  const people = await createData();
  return (
    <section className="mx-auto max-w-6xl py-9">
      <div className="lg:grid-cols-2 grid gap-4 items-center grid-cols-1 mx-5">
        <div>
          <h5 className="text-primary text-sm text-center lg:text-start">
            Meet Our Team
          </h5>
          <h1 className="text-2xl md:text-3xl font-semibold  lg:text-5xl text-center lg:text-start    ">
            Compassionate, Experienced, and Ready to Support You
          </h1>
        </div>
        <p className=":text-base ml-5 lg:text-lg  text-black/60 text-center lg:text-start   ">
          Our team of licensed therapists and mental health professionals bring
          a wealth of knowledge and empathy to guide you on your wellness
          journey.
        </p>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-y-9 gap-x-5 mt-10">
        {people.map((person, i) => (
          <BlurFade key={i} delay={i * 0.1} inView>
            <AvatarPersonCard {...person} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
