"use client"
import React from "react";
import { BlurFade } from "./ui/blur-fade";
import { Button } from "./ui/button";
import { useActionFloatButtonContext } from "@/context/useActionFloatButtonContext";

export default function HeroBtn() {
  const { setIsDrawerOpen } = useActionFloatButtonContext();
  return (
    <BlurFade delay={0.2 * 4} inView>
      <Button className="px-5 text-white" onClick={() => setIsDrawerOpen(true)}>
        Book a Consultation Today
      </Button>
    </BlurFade>
  );
}
