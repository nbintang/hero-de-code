import React from "react";
import { Button } from "../ui/button";
import MentalHealth from "../svg/MentalHealthPlan";
import DoctorMeet from "../svg/DoctorMeet";
import Meditation from "../svg/Meditation";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function Explore() {
  return (
    <div className="container md:max-w-6xl mx-auto px-4 py-10" id={"services"}>
      <div className="text-center md:text-start ">
        <p className="text-primary text-sm">What We Offer</p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          Try Exploring
          <br />
          Some of our Services
        </h1>
        <p className="font-medium mt-2 text-base lg:text-lg  text-muted-foreground text-[#4F4F4F]">
          We provide number 1 service to provide comfort and experience for you
          in
          <br className="hidden md:block" />
          dealing with your mental health problems
        </p>
      </div>

      <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <Card data-aos="fade-up" data-aos-duration="800" className="bg-tertiary relative h-full flex flex-col min-w-[335px]">
          <CardHeader>
            <h1 className="text-xl md:text-2xl">
              Mindfulness & Stress
              <br />
              Management Workshops
            </h1>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="absolute -bottom-7 right-0 w-1/2 translate-x-3">
              <MentalHealth />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="text-primary">
              Read More
            </Button>
          </CardFooter>
        </Card>

        <Card data-aos="fade-up" data-aos-duration="700" className="bg-primary/50 relative h-full flex flex-col min-w-[335px]">
          <CardHeader>
            <h1 className="text-xl md:text-2xl">
              Personalized Mental
              <br />
              Health Plans
            </h1>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="absolute bottom-0 right-0 w-1/2">
              <DoctorMeet />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="text-primary">
              Read More
            </Button>
          </CardFooter>
        </Card>

        <Card data-aos="fade-up" data-aos-duration="600" className="bg-secondary/50 relative h-full flex flex-col min-w-[335px]">
          <CardHeader>
            <h1 className="text-xl md:text-2xl">
              Holistic Healing
              <br />
              Approach
            </h1>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="absolute bottom-0 right-0 w-1/2 translate-y-3">
              <Meditation />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="text-primary">
              Read More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
