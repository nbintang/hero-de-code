import Team from "@/components/sections/Team";

import AbtSection from "@/components/sections/AbtSection";
import Chooseus from "@/components/sections/Chooseus";
import Explore from "@/components/sections/Explore";
import Findpath from "@/components/sections/Findpath";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/sections/NewsLetter";
import Stats from "@/components/sections/Stats";

import Hero from "@/components/sections/Hero";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Explore />
      <AbtSection />
      <Chooseus />
      <Findpath />
      <Team />
      <NewsLetter />
      <Footer/>
    </>
  );
}
