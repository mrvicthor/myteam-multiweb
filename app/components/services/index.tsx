import bgpattern3 from "../../../public/images/bg-pattern-home-3.svg";
import personIcon from "../../../public/images/icon-person.svg";
import cogIcon from "../../../public/images/icon-cog.svg";
import chartIcon from "../../../public/images/icon-chart.svg";
import { Service } from "..";
import Image from "next/image";

const Services = () => {
  const data = [
    {
      id: 1,
      icon: personIcon,
      title: "Experienced Individuals",
      description:
        "Our network is made up of highly experienced professionals who are passionate about what they do.",
    },
    {
      id: 2,
      icon: cogIcon,
      title: "Easy to Implement",
      description:
        "Our processes have been refined over years of implementation meaning our teams always deliver.",
    },
    {
      id: 1,
      icon: chartIcon,
      title: "Enhanced Productivity",
      description:
        "Our customized platform with in-built analytics helps you manage your distributed teams.",
    },
  ];
  return (
    <section
      className="bg-[#012F34] overflow-hidden relative
        "
    >
      <div className="h-[15.25rem] w-[12.5rem] absolute -right-[6.25rem] overflow-hidden lg:bottom-0">
        <Image src={bgpattern3} alt="background-pattern-home-3" className="" />
      </div>
      <div className="py-[4rem] px-[1.5rem] md:px-[6.125rem] md:py-[6.25rem] lg:py-[8.75rem] lg:max-w-[69.375rem] lg:mx-auto lg:flex lg:gap-[6.8125rem] lg:px-8">
        <div className="w-[15rem] md:w-[27.8125rem] lg:w-[30rem]">
          <div className="bg-[#F67E7E] h-[0.25rem] w-[3.125rem]" />
          <article className="mt-[2rem] lg:h-[9rem] lg:mt-[3.375rem]">
            <p className="font-bold text-[#ffffff] text-[2rem] lg:text-[3rem] lg:leading-[3rem] ">
              Build & manage distributed teams like no one else.
            </p>
          </article>
        </div>
        <div className="mt-[3.5rem] grid gap-[3rem] lg:w-[33.75rem] lg:gap-[2rem]">
          {data.map((service) => (
            <Service
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
