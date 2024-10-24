import React from "react";
import windows from "@/public/logo/windows.png";
import head from "@/public/logo/head.png";
import medicine from "@/public/logo/medecine.png";
import protect from "@/public/logo/protect.png";
import Image from "next/image";

export default function Chooseus() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-16 py-10">
      <div className="flex md:flex-row flex-col justify-between items-center text-center md:text-start gap-10">
        <div className="md:w-1/2">
          <p className="text-primary">Why Choose Us</p>
          <h1 className="text-5xl">Your Unique Journey to Healing</h1>
        </div>
        <div className="md:w-1/2">
          <p className="text-[#4F4F4F]">
            We embrace a holistic approach to mental health, focusing on your
            journey towards emotional well-being. Our team is here to support
            you every step of the way.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        <div className=" md:w-1/2 flex flex-col gap-10 text-center md:text-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center md:items-start">
              <Image src={windows} alt="logo" />
              <h1 className="text-xl">Tailored to You</h1>
            </div>
            <p className="text-[#4F4F4F]">
              We don’t just treat symptoms, we focus on understanding and
              healing the root causes of mental health challenges.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center md:items-start">
              <Image src={head} alt="logo" />
              <h1 className="text-xl">Modern, Calming Environment</h1>
            </div>
            <p className="text-[#4F4F4F]">
              Designed with your comfort in mind, our serene atmosphere promotes
              relaxation and emotional safety from the moment you walk in.
            </p>
          </div>
        </div>
        <div className=" md:w-1/2 flex flex-col gap-10 text-center md:text-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center md:items-start">
              <Image src={medicine} alt="logo" />
              <h1 className="text-xl">Flexible Consultation Options</h1>
            </div>
            <p className="text-[#4F4F4F]">
              Online, in-person, or hybrid. Our flexible consultation options
              make it easier than ever to get the support you need on your
              terms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center md:items-start">
              <Image src={protect} alt="logo" />
              <h1 className="text-xl">MConfidential & Safe</h1>
            </div>
            <p className="text-[#4F4F4F]">
              Your privacy and safety are our utmost priority. All consultations
              are held with the highest standard of confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
