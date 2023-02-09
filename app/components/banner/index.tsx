import bgpattern from "../../../public/images/bg-pattern-home-1.svg";
import bgpattern2 from "../../../public/images/bg-pattern-home-2.svg";

import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="container pt-[5rem] text-[#ffffff] md:pt-[7rem] lg:pt-[8.0625rem]">
        <div className="flex flex-col space-y-[1.125rem] lg:flex-row lg:space-y-0 lg:space-x-[1.875rem] lg:px-2">
          <h1 className="text-center text-[2.5rem] font-bold leading-[2.5rem] md:text-[4rem] md:leading-[3.5rem] lg:w-[39.6875rem] lg:text-left lg:text-[6.25rem] lg:leading-[6.25rem]">
            Find the <br /> best <span className="text-[#f67e7e]">talent</span>
          </h1>
          <div className="lg:grid lg:w-[27.8125rem] lg:gap-[4.9375rem]">
            <div className="hidden h-[0.25rem] w-[3.125rem] bg-[#79C8C7] lg:block" />
            <p className="text-center text-[0.9375rem] font-semibold leading-[1.75rem] lg:text-justify lg:text-[1.125rem]">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
        <div className="px-[8px] pt-[6.1rem] md:grid md:justify-items-center md:pt-[9.75rem] lg:justify-items-end lg:pt-[9.375rem]">
          <div className="md:w-[22.375rem]">
            <Image
              src={bgpattern2}
              alt="background-pattern-home-2"
              className="w-[100%] object-cover "
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[13.625rem] -left-[6.3rem] hidden lg:block">
        <Image src={bgpattern} alt="background-pattern-home-1" />
      </div>
    </section>
  );
};

export default Banner;
