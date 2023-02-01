import bgPattern from "../../public/images/bg-pattern-about-4.svg";
import bgPattern2 from "../../public/images/bg-pattern-about-2-contact-1.svg";
import aboutPattern from "../../public/images/bg-pattern-about-1-mobile-nav-1.svg";
// import bgPattern3 from "../../public/images/bg-pattern-home-3.svg";

import Image from "next/image";
import { Directors, Customers } from "../components";

const About = () => {
  return (
    <>
      <section className="text-[#ffffff] pt-[5rem] pb-[1.25rem]  md:py-[7rem] lg:pt-[8.0625rem] relative overflow-hidden">
        <div className=" container">
          <article className="flex flex-col space-y-[1.125rem] md:items-center md:px-[6.875rem]  lg:space-y-0 lg:flex-row lg:px-8 lg:space-x-[1.875rem] lg:items-start">
            <h1 className="font-bold text-[2.5rem] leading-[2.5rem] text-center md:text-[4rem] leading-[3.5rem] lg:w-[39.6875rem] lg:text-[6.25rem] lg:leading-[6.25rem] lg:text-left lg:pt-4">
              About
            </h1>
            <div className="lg:w-[27.8125rem] lg:grid lg:gap-[4.9375rem]">
              <div className="hidden lg:block bg-[#f67e7e] h-[0.25rem] w-[3.125rem]" />
              <p className="font-semibold text-center text-[0.9375rem] leading-[1.75rem] lg:text-justify lg:text-[1.125rem]">
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
              </p>
            </div>
          </article>
        </div>

        <div className="absolute -right-[6.375rem] top-[20.5rem] h-[12.75rem] w-[12.75rem] md:top-[14.8rem]">
          <Image src={aboutPattern} alt="background pattern" />
        </div>
      </section>
      <Directors />
      <div className="h-[5.5rem] bg-[#F2F2F2] md:hidden" />
      <Customers />
    </>
  );
};
export default About;
