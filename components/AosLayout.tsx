"use client";
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return <div>{children}</div>;
}
