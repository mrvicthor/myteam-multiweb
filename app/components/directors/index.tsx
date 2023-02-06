import Image from "next/image";
import bgPattern from "../../../public/images/bg-pattern-about-2-contact-1.svg";
import bgPattern2 from "../../../public/images/bg-pattern-about-4.svg";
import bgPattern3 from "../../../public/images/bg-pattern-home-4-about-3.svg";

import { Director } from "../";
const Directors = () => {
  const directors = [
    {
      id: 1,
      name: "Nikita Marks",
      title: "Founder & CEO",
      image: "/images/avatar-nikita.jpg",
      content:
        "“It always amazes me how much talent there is in every corner of the globe.”",
    },
    {
      id: 2,
      name: "Cristian Duncan",
      title: "Co-founder & COO",
      image: "/images/avatar-christian.jpg",
      content:
        "“Distributed teams required unique processes. You need to approach work in a new way.”",
    },
    {
      id: 3,
      name: "Cruz Hamer",
      title: "Co-founder & CTO",
      image: "/images/avatar-cruz.jpg",
      content:
        "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
    },
    {
      id: 4,
      name: "Drake Heaton",
      title: "Business Development Lead",
      image: "/images/avatar-drake.jpg",
      content:
        "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
    },
    {
      id: 5,
      name: "Griffin Wise",
      title: "Lead Marketing",
      image: "/images/avatar-griffin.jpg",
      content:
        "“Unique perspectives shape unique products, which is what you need to survive these days.”",
    },
    {
      id: 6,
      name: "Aden Allan",
      title: "Head of Talent",
      image: "/images/avatar-aden.jpg",
      content:
        "“Empowered teams create truly amazing products. Set the north star and let them follow it.” ",
    },
  ];
  return (
    <section className="overflow-hidden bg-[#004047] text-[#ffffff]">
      <div className="relative -top-[6.25rem] -left-[6.25rem] md:top-0">
        <Image src={bgPattern} alt="background pattern" />
      </div>
      <div className="container relative z-[10] md:-top-[6rem] lg:-top-[4.75rem]">
        <h2 className="text-center text-[2rem] font-bold leading-[2rem] lg:text-[3rem] lg:leading-[3rem]">
          Meet the directors
        </h2>
        <div className="mt-12 grid gap-[3.25rem] pb-[1.75rem] md:grid-cols-2 md:gap-x-[0.6875rem] md:gap-y-[3rem] md:px-[4.625rem] lg:grid-cols-3 lg:gap-x-[1.875rem] lg:px-6 lg:pb-16">
          {directors.map((director) => (
            <Director
              key={director.id}
              name={director.name}
              icon={director.image}
              title={director.title}
              content={director.content}
            />
          ))}
        </div>
      </div>
      <div className="relative -top-[6rem] z-[1] ">
        <Image
          src={bgPattern3}
          alt="background pattern"
          className="absolute right-[0]"
        />
      </div>
    </section>
  );
};

export default Directors;
