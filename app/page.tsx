
import Team from "@/components/sections/Team";

import AbtSection from "@/components/sections/AbtSection";
import Chooseus from "@/components/sections/Chooseus";
import Explore from "@/components/sections/Explore";
import Findpath from "@/components/sections/Findpath";
import Navbar from "@/components/sections/Navbar";
import NewsLetter from "@/components/sections/NewsLetter";
import Stats from "@/components/sections/Stats";

import Hero from "@/components/sections/Hero";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AbtSection />
      <NewsLetter />
      <Explore />
      <Team/>
      <Chooseus />
      <Findpath />
</>

  );
}
