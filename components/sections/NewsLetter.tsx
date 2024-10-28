import { Button } from "../ui/button";

const NewsLetter = () => {
  return (
  <section >
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center justify-between py-16 md:flex-row md:py-24">
     
      <div className="md:space-y-6">
        <h2 className="max-w-sm text-4xl mb-4 font-medium text-gray-800 md:text-4xl ">
          Start Your Healing Today
        </h2>
        <p className="max-w-md text-gray-600">
          It’s never too early or too late to seek help. Our specialists are
          here to guide you every step of the way.
        </p>
      </div>

     
      <div className="mr-0 mt-8 md:mt-0">
        <Button variant={"secondary"} className="px-20 py-2 text-white shadow-lg">
          Schedule
        </Button>
      </div>
    </div>
  </section>
  );
};

export default NewsLetter;
