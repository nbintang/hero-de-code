import AbtSection from "@/components/sections/AbtSection";
import Navbar from "@/components/sections/Navbar";
import NewsLetter from "@/components/sections/NewsLetter";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
      <main className="border-2">
        <Navbar />
        <Stats />
        <AbtSection />
        <NewsLetter />
      </main>
    </>
  );
}
