import bgpattern from "../../../public/images/bg-pattern-home-1.svg";
import bgpattern2 from "../../../public/images/bg-pattern-home-2.svg";

import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="pt-[5rem] text-[#ffffff] md:pt-[7rem] lg:pt-[8.0625rem] container">
        <div className="flex flex-col gap-[1.125rem] lg:flex-row lg:px-8 lg:gap-[1.875rem]">
          <h1 className="font-bold text-[2.5rem] leading-[2.5rem] text-center md:text-[4rem] leading-[3.5rem] lg:w-[39.6875rem] lg:text-[6.25rem] lg:leading-[6.25rem] lg:text-left">
            Find the <br /> best <span className="text-[#f67e7e]">talent</span>
          </h1>
          <div className="px-2 lg:w-[27.8125rem] lg:px-0 lg:grid lg:gap-[4.9375rem]">
            <div className="hidden lg:block bg-[#79C8C7] h-[0.25rem] w-[3.125rem]" />
            <p className="font-semibold text-center text-[0.9375rem] leading-[1.75rem] lg:text-justify lg:text-[1.125rem]">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
        <div className="px-[8px] pt-[6.1rem] md:pt-[9.75rem] md:grid md:justify-items-center lg:justify-items-end lg:pt-[9.375rem]">
          <div className="md:w-[22.375rem]">
            <Image
              src={bgpattern2}
              alt="background-pattern-home-2"
              className="object-cover w-[100%] "
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-[15.625rem] -left-[6.3rem]">
        <Image src={bgpattern} alt="background-pattern-home-1" />
      </div>
    </section>
  );
};

export default Banner;
