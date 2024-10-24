import React from "react";
import Image from "next/image";
import { StarsIcon } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-6xl mx-auto ">
        <div>
          <h5 className="text-primary text-sm">Meet Our Team</h5>
          <h1 className="text-5xl font-medium flex-[0_0_45%]">
            Compassionate, Experienced, and Ready to Support You
          </h1>
        </div>
        <div>
          <div className="w-96 h-52 overflow-hidden rounded-md">
            <Image
              src={"/img/testimonial.jpg"}
              alt="people"
              width={200}
              height={133}
            />
          </div>
          <div className="flex flex-col gap-y-5">
          <div className="space-y-1">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <StarsIcon key={i} />
                ))}
              </div>
              <p>
                &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
                &quot;
              </p>
            </div>
            <div>
                <h5>Sarah Michael</h5>
                <p>client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
