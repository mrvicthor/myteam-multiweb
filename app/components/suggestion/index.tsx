import { Button } from "../";
import bgpattern7 from "../../../public/images/bg-pattern-home-6-about-5.svg";
import Image from "next/image";

const Suggestion = () => {
  return (
    <section className="bg-[#F67E7E] h-[18.875rem] md:h-[12.5rem] relative overflow-hidden">
      <div className="absolute top-[11.25rem] md:top-[4.875rem]">
        <Image src={bgpattern7} alt="background pattern 7" />
      </div>
      <div className="pt-[5.1875rem] md:pt-[4.75rem] container lg:px-0">
        <div className=" flex flex-col items-center justify-center gap-[1.5rem] md:flex-row md:gap-[5.25rem] lg:gap-[16.25rem]">
          <p className="text-[#012F34] font-bold text-[2rem] leading-[2rem] text-center lg:text-[3rem] lg:leading-[3rem]">
            Ready to get <br className="md:hidden" />
            started?
          </p>
          <div className="flex border-2 border-[#012F34] w-[9.9375rem] h-[3rem] text-[#012f34] items-center justify-center rounded-full hover:bg-[#002529] hover:text-[#ffffff] hover:border-transparent cursor-pointer font-semibold text-[1.125rem] leading-[1.75rem]">
            <Button href="/contact" title="contact us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
