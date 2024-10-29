import React from "react";
import NumberTicker from "../ui/number-ticker";
import { Percent, PlusIcon } from "lucide-react";

const Stats = () => {
  return (
    <section className="w-full  md:h-[300px] h-auto bg-tertiary flex items-center justify-center">
      <div className="container max-w-6xl lg:mx-auto mx-5 flex justify-between items-center md:flex-row flex-col gap-8 py-10">
        <div className="flex items-center flex-col md:flex-row gap-2">
          <div className="flex items-start">
            <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold text-gray-900">
              <NumberTicker value={1000} />
            </h2>
            <PlusIcon className="mt-2 h-4 w-4 md:w-7 md:h-7 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">
            Lives<br className="hidden md:block" /> Transformed
          </p>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-2">
          <div className="flex items-start">
            <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold text-gray-900">
              <NumberTicker value={95} />
            </h2>
            <Percent className="mt-2 h-4 w-4 md:w-7 md:h-7 text-muted-foreground"  />
          </div>
          <p className="text-sm text-muted-foreground">
            Client<br className="hidden md:block" /> Satisfaction
          </p>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-2">
          <div className="flex items-start">
            <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold text-gray-900">
              <NumberTicker value={10} />
            </h2>
            <span className="mt-2 text-sm md:text-lg text-muted-foreground">Th</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Mental Health<br className="hidden md:block" /> Center
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
