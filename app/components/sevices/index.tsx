import bgpattern3 from "../../../public/images/bg-pattern-home-3.svg";
import personIcon from "../../../public/images/icon-person.svg";
import Image from "next/image";

const Services = () => {
  return (
    <section
      className="bg-[#012F34] overflow-hidden
        "
    >
      <div className="h-[15.25rem] w-[12.5rem] absolute -right-[6.25rem]">
        <Image src={bgpattern3} alt="background-pattern-home-3" className="" />
      </div>
      <div className="pt-[4rem] px-[1.5rem] ">
        <div className="w-[15rem]">
          <div className="bg-[#F67E7E] h-[0.25rem] w-[3.125rem]" />
          <article className="mt-[2rem]">
            <p className="font-bold text-[#ffffff] text-[2rem]">
              Build & manage distributed teams like no one else.
            </p>
          </article>
        </div>
        <div className="mt-[3.5rem] grid gap-[3rem]">
          <div className=" grid gap-4 justify-items-center">
            <div className="relative">
              <Image src={personIcon} alt="person icon" />
            </div>
            <div>
              <h2 className="font-bold text-[#f67e7e] text-[1.125rem] leading-[1.75rem] text-center">
                Experienced Individuals
              </h2>
              <p
                className="pt-[0.5rem] text-[#FFFFFF] opacity-80 font-semibold text-[0.9375rem] leading-[1.5625rem] text-center
"
              >
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
