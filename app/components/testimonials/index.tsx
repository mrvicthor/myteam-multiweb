import Image from "next/image";
import bgpattern5 from "../../../public/images/bg-pattern-home-5.svg";
import bgpattern6 from "../../../public/images/bg-pattern-home-4-about-3.svg";
import { Testimonial } from "../";
import kadyImg from "../../../public/images/avatar-kady.jpg";
import aiyshaImg from "../../../public/images/avatar-aiysha.jpg";
import arthurImg from "../../../public/images/avatar-arthur.jpg";

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      description:
        "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
      name: "Kady Baker",
      role: "Product Manager at Bookmark",
      icon: "/images/avatar-kady.jpg",
    },
    {
      id: 2,
      description:
        "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
      name: "Aiysha Reese",
      role: "Founder of Manage",
      icon: "/images/avatar-aiysha.jpg",
    },
    {
      id: 3,
      description:
        "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
      name: "Arthur Clarke",
      role: "Co-founder of MyPhysio",
      icon: "/images/avatar-arthur.jpg",
    },
  ];
  return (
    <section className="relative text-[#ffffff]">
      <div className="relative">
        <Image src={bgpattern6} alt="background pattern" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={bgpattern5} alt="background pattern" />
      </div>
      <div className="px-6 pt-[2.5rem] pb-[10.25rem]">
        <div>
          <h3 className="font-bold text-[2rem] leading-[2rem] text-center">
            Delivering real results for top companies. Some of our
            <span className="text-[#79C8C7]"> success stories.</span>
          </h3>
          <div className="mt-[3rem] flex flex-col items-center gap-[3rem]">
            {testimonies.map((item) => (
              <Testimonial
                name={item.name}
                key={item.id}
                description={item.description}
                role={item.role}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
