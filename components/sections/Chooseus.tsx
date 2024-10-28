import React from "react";
import HumanMind from "../svg/HumanMind";
import { FaLock as Lock } from "react-icons/fa";
import { FaBriefcaseMedical as BriefcaseMedical } from "react-icons/fa6";
import { TbLayoutGridFilled as LayoutGrid  } from "react-icons/tb";
export default function Chooseus() {
  return (
    <div className="max-w-6xl mx-auto py-14" id="about">
      <div className="flex flex-col  mx-5  ">
        <div className="flex md:flex-row flex-col justify-between items-center text-center md:text-start gap-5">
          <div className="md:w-1/2">
            <p className="text-primary text-sm">Why Choose Us</p>
            <h1 className="text-2xl md:text-3xl font-semibold lg:text-5xl">
              Your Unique Journey to Healing
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-muted-foreground">
              We embrace a holistic approach to mental health, focusing on your
              journey towards emotional well-being. Our team is here to support
              you every step of the way.
            </p>
          </div>
        </div>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-0">
          <div className="flex flex-col ">
            <div className=" flex flex-col items-center md:items-start mb-3 md:mb-5">
              <LayoutGrid className="text-primary w-10 h-10" />
              <h1 className="text-lg md:text-xl  text-center">
                Tailored to You
              </h1>
            </div>
            <p className="text-center md:text-start text-muted-foreground text-sm md:text-base">
              We don’t just treat symptoms, we focus on understanding and
              healing the root causes of mental health challenges.
            </p>
          </div>

          <div className="flex flex-col  ">
            <div className="flex flex-col items-center md:items-start mb-3 md:mb-5">
              <BriefcaseMedical className="text-primary w-10 h-10" />
              <h1 className="text-lg md:text-xl  text-center">
                Flexible Consultation Options
              </h1>
            </div>
            <p className="text-center md:text-start text-muted-foreground text-sm md:text-base">
              Online, in-person, or hybrid. Our flexible consultation options
              make it easier than ever to get the support you need on your
              terms.
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col items-center md:items-start mb-3 md:mb-5">
              <HumanMind className="text-primary w-10 h-10" />
              <h1 className="text-lg md:text-xl text-center">
                Modern, Calming Environment
              </h1>
            </div>
            <p className="text-center text-sm md:text-base text-muted-foreground md:text-start">
              Designed with your comfort in mind, our serene atmosphere promotes
              relaxation and emotional safety from the moment you walk in.
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col items-center md:items-start mb-3 md:mb-5">
              <Lock className="text-primary w-10 h-10" />
              <h1 className="text-lg md:text-xl  text-center">
                MConfidential & Safe
              </h1>
            </div>
            <p className="text-center text-muted-foreground md:text-start text-sm md:text-base">
              our privacy and safety are our utmost priority. All consultations
              are held with the highest standard of confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
