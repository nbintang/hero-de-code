import Image from "next/image";
import { Separator } from "../ui/separator";

const AbtSection = () => {
  return (
    <section className="w-full bg-tertiary">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-8 items-center md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-video md:aspect-square lg:aspect-video  rounded-lg overflow-hidden">
              <Image
                src={"/img/psyco.jpg"}
                alt="Therapy session at Serenity Haven Wellness"
                className="object-cover w-full h-full"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
            <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl   font-medium  text-gray-900 mb-4 leading-snug">
              Discover the Transformative Benefits of Choosing Serenity Haven
              Wellness for Your Care
            </h2>
            <Separator orientation="horizontal"className="bg-black/70 my-2" />
            <p className="text-muted-foreground text-sm md:text-base ">
              At HeartCare, we prioritize your emotional health
              with personalized, compassionate care. Our diverse range of
              services ensures that you receive the support you need to thrive
              and achieve lasting inner peace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbtSection;
