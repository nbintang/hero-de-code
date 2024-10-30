"use client";
import { useActionFloatButtonContext } from "@/context/useActionFloatButtonContext";
import { Button } from "../ui/button";

const NewsLetter = () => {
  const { openDrawer } = useActionFloatButtonContext();
  return (
    <section id="appointments">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center justify-between py-16 md:flex-row md:py-24">
        <div className="md:space-y-6" data-aos="fade-right">
          <h2 className="max-w-sm text-4xl mb-4 font-medium  md:text-4xl ">
            Start Your Healing Today
          </h2>
          <p className="max-w-md text-muted-foreground">
            It’s never too early or too late to seek help. Our specialists are
            here to guide you every step of the way.
          </p>
        </div>

        <div className="mr-0 mt-8 md:mt-0">
          <Button
          data-aos="fade-left"
            onClick={openDrawer}
            variant={"secondary"}
            className="px-20 py-2 text-white shadow-lg"
          >
            Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
