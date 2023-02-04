"use client";
import Image from "next/image";
import bgPattern3 from "../../../public/images/bg-pattern-about-4.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

const Customers = () => {
  const customers = [
    { id: 1, logo: "/images/logo-the-verge.png", name: "the verge" },
    { id: 2, logo: "/images/logo-jakarta-post.png", name: "jakarta" },
    { id: 3, logo: "/images/logo-the-guardian.png", name: "the Guardian" },
    { id: 4, logo: "/images/logo-tech-radar.png", name: "tech-radar" },
    { id: 5, logo: "/images/logo-gadgets-now.png", name: "gadgets-now" },
  ];
  return (
    <section className="bg-[#012F34] overflow-hidden">
      <div className="relative -top-[6.25rem] -left-[6.25rem] md:left-0 lg:top-0">
        <Image src={bgPattern3} alt="background pattern" />
      </div>
      <div className="space-y-16 container relative -top-[8rem] md:-top-[6rem] lg:-top-[4rem] lg:pb-10 overflow-hidden">
        <h4 className="font-bold text-[2rem] leading-[2rem] text-center text-[#ffffff] lg:text-[3rem] lg:leading-[3rem]">
          Some of our clients
        </h4>
        <div className="hidden md:block md:px-6 lg:gap-x-12">
          <Swiper
            spaceBetween={80}
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={10000}
            slidesPerView={4}
          >
            {customers.map((customer) => (
              <SwiperSlide key={customer.id}>
                <div className="relative h-8 w-full md:h-6">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ul className="flex flex-col gap-y-12 px-[5.125rem] md:hidden">
          {customers.map((customer) => (
            <li key={customer.id} className="relative h-8 w-full md:h-6">
              <Image
                src={customer.logo}
                alt={customer.name}
                fill
                sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Customers;
