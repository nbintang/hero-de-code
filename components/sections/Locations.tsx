import React from "react";
import Maps from "../Maps";

export default function Locations() {
  return (
    <div className="w-full">
      <div className="max-w-6xl flex flex-col items-center py-9 mx-auto mt-5">
        <div className="lg:grid-cols-2 grid gap-4 items-center grid-cols-1 ">
          <div>
            <h5 className="text-primary text-sm text-center lg:text-start ">
              Locations
            </h5>
            <h2 className="text-2xl md:text-3xl font-semibold lg:text-5xl text-center lg:text-start">
              You Can Find Us in this locations
            </h2>
          </div>
          <p className="text-base ml-5 lg:text-lg  text-muted-foreground text-center lg:text-start ">
            Meet us whenever you need us, we serve 24/7 the problems you face
            and we will provide the best solution.
          </p>
        </div>
        <div className="overflow-hidden  mt-9 rounded-2xl shadow sm:aspect-video lg:w-full aspect-square h-96 ">
          <Maps className="w-full h-full  object-cover" />
        </div>
      </div>
    </div>
  );
}
