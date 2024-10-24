import AbtSection from "@/components/sections/AbtSection";
import Chooseus from "@/components/sections/Chooseus";
import Explore from "@/components/sections/explore";
import Findpath from "@/components/sections/findpath";
import Navbar from "@/components/sections/Navbar";
import NewsLetter from "@/components/sections/NewsLetter";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Stats />
      <AbtSection />
      <NewsLetter />
      <Explore />
      <Chooseus />
      <Findpath />
    </>
  );
}
