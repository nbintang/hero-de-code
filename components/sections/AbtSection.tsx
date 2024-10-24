import Image from "next/image";
import abtPhoto from "../../public/img/org.png";

const AbtSection = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-8 items-center md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={abtPhoto}
                alt="Therapy session at Serenity Haven Wellness"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 gap-4 w-full space-y-8 md:w-1/2">
            <h2 className="text-4xl font-medium  text-gray-900 mb-4 leading-snug">
              Discover the Transformative Benefits of Choosing Serenity Haven
              Wellness for Your Care
            </h2>

            <p className="text-gray-600 ">
              At Serenity Haven Wellness, we prioritize your emotional health
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
