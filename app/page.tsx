import Explore from "@/components/sections/explore";
import Chooseus from "@/components/sections/chooseus";
import Findpath from "@/components/sections/findpath";
export default function Home() {
  return (
 <>
      <div className="bg-primary text-white">Primary</div>
      <div className="bg-secondary text-white">Secondary</div>
      <div className="bg-tertiary text-black">Tertiary</div>

      <div className="bg-primary/50 text-white"> primary softed</div>
      <Explore/>
      <Chooseus/>
      <Findpath/>
      </>
  );
}
