import React from "react";
import Maps from "../Maps";
import { Button } from "../ui/button";
import Link from "next/link";

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
          <Maps className="w-full h-full  object-cover" />
        </div>
        <Link href={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.656731070383!2d106.84129850094595!3d-6.372793799026745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec093dabf58d:0xd3365350a2ebe2f!2sMargoCity!5e0!3m2!1sid!2sid!4v1730163401341!5m2!1sid!2sid"}>
          <Button variant={
            "link"
          }>
            View Locations
          </Button>
        </Link>
      </div>
    </div>
  );
}
