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
    },
    {
      id: 2,
      name: "Cristian Duncan",
      title: "Co-founder & COO",
      image: "/images/avatar-christian.jpg",
    },
    {
      id: 3,
      name: "Cruz Hamer",
      title: "Co-founder & CTO",
      image: "/images/avatar-cruz.jpg",
    },
    {
      id: 4,
      name: "Drake Heaton",
      title: "Business Development Lead",
      image: "/images/avatar-drake.jpg",
    },
    {
      id: 5,
      name: "Griffin Wise",
      title: "Lead Marketing",
      image: "/images/avatar-griffin.jpg",
    },
    {
      id: 6,
      name: "Aden Allan",
      title: "Founder & CEO",
      image: "/images/avatar-aden.jpg",
    },
  ];
  return (
    <section className="bg-[#004047] text-[#ffffff] overflow-hidden">
      <div className="relative -top-[6.25rem] -left-[6.25rem]">
        <Image src={bgPattern} alt="background pattern" />
      </div>
      <div className="container relative z-[10]">
        <h2 className="font-bold text-[2rem] leading-[2rem] text-center">
          Meet the directors
        </h2>
        <div className="grid mt-12 space-y-[3.25rem] pb-[1.75rem]">
          {directors.map((director) => (
            <Director
              key={director.id}
              name={director.name}
              icon={director.image}
              title={director.title}
            />
          ))}
        </div>
      </div>
      <div className="absolute z-[1] top-[150rem] -right-[0.5rem]">
        <Image src={bgPattern3} alt="background pattern" />
      </div>
    </section>
  );
};

export default Directors;
