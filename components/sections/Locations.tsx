"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { MoveRight } from "lucide-react";
export default function Locations() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("@/components/Maps"), {
        loading: () => (
          <div>
            <Skeleton className="w-full h-full absolute inset-0" />
            <div className="flex items-center gap-2 absolute inset-0 justify-center w-full">
              <p className="text-secondary ">Loading</p>
              <div className="w-5 h-5 border-2 border-secondary rounded-full animate-spin border-t-transparent"></div>
            </div>
          </div>
        ),
        ssr: false,
      }),
    []
  );
  return (
    <div className="w-full" id={"locations"}>
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

        <div className="overflow-hidden relative  mt-9 rounded-2xl shadow sm:aspect-video lg:w-full aspect-square h-96 ">
          <Map />
        </div>
        <Button variant={"link"}>
          <Link
            href="https://www.google.com/maps?q=loc:-6.3727938,106.8412985"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Locations
          </Link>
          <MoveRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
