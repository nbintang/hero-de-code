import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "1,000+",
      label: `Lives \nTransformed`,
    },
    {
      number: "95%",
      label: `Client \nSatisfaction`,
    },
    {
      number: "Top 10",
      label: "Mental Health \nCenter",
    },
  ];

  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center md:flex-row md:space-x-4"
          >
            <h2 className="text-5xl font-medium text-gray-900">{stat.number}</h2>
            <p className="mt-2 text-sm text-gray-600 md:whitespace-pre-line whitespace-normal md:mt-0">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
