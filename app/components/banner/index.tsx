import bgpattern from "../../../public/images/bg-pattern-home-1.svg";
import bgpattern2 from "../../../public/images/bg-pattern-home-2.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="pt-[5rem] px-6 text-[#ffffff]">
        <div className="flex flex-col gap-[1.125rem]">
          <h1 className="font-bold text-[2.5rem] leading-[2.5rem] text-center">
            Find the <br /> best <span className="text-[#f67e7e]">talent</span>
          </h1>
          <div>
            <div />
            <p className="font-semibold text-center text-[0.9375rem] leading-[1.75rem]">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="px-[8px]">
        <Image src={bgpattern} alt="background-pattern-home-1" />
      </div> */}
      <div className="px-[8px] pt-[6.0625rem]">
        <div>
          <Image src={bgpattern2} alt="background-pattern-home-2" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
