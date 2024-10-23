const NewsLetter = () => {
  return (
    <section className="max-w-6xl px-4 flex flex-col items-center justify-between py-16 md:flex-row md:py-24">
      {/* Left Side (Text) */}
      <div className="md:space-y-6">
        <h2 className="max-w-sm text-3xl mb-4 font-semibold text-gray-800 md:text-4xl ">
          Start Your Healing Today
        </h2>
        <p className="max-w-md text-gray-600">
          It’s never too early or too late to seek help. Our specialists are
          here to guide you every step of the way.
        </p>
      </div>

      {/* Right Side (Button) */}
      <div className="mr-0 mt-8 md:mt-0">
        <button className="px-20 py-2 bg-[#629D8C] text-white rounded-md hover:bg-teal-600 shadow-lg">
          Schedule
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
