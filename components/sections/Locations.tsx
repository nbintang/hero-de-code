import React, { Suspense } from "react";
import Maps from "../Maps";
import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export default function Locations() {
  return (
    <div className="w-full">
      <div className="max-w-6xl flex flex-col items-center py-9 mx-auto mt-5">
        <div className="lg:grid-cols-2 mx-3 md:mx-0 grid gap-4 items-center grid-cols-1 ">
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
          <Suspense
            fallback={<Skeleton className="w-full h-full object-cover" />}
          >
            <Maps className="w-full h-full  object-cover" />
          </Suspense>
        </div>
        <Link
          href="https://www.google.com/maps/place/MargoCity/@-6.3727938,106.8412985,15z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link">View Locations</Button>
        </Link>
      </div>
    </div>
  );
}
