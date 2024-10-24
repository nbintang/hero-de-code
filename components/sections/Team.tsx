import React from "react";
import AvatarPersonCard from "../AvatarPersonCard";
export default function Team() {
  return (
    <section>
      <h5 className="text-primary text-sm">Meet Our Team</h5>
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-medium flex-[0_0_45%]">
          Compassionate, Experienced, and Ready to Support You
        </h1>
        <p className="text-xl text-black/60 flex-[0_0_40%]">
          Our team of licensed therapists and mental health professionals bring
          a wealth of knowledge and empathy to guide you on your wellness
          journey.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <AvatarPersonCard key={i} />
        ))}
      </div>
    </section>
  );
}
