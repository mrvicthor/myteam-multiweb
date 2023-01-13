import Image from "next/image";

export interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => {
  return (
    <div className="flex flex-col gap-4 items-center md:flex-row md:gap-[1.4375rem]">
      <div className="relative md:col-span-1 h-[4.5rem] w-[4.5rem]">
        <Image src={icon} alt="person icon" />
      </div>
      <div className="">
        <h2 className="font-bold text-[#f67e7e] text-[1.125rem] leading-[1.75rem] text-center md:text-left">
          {title}
        </h2>
        <p
          className="pt-[0.5rem] text-[#FFFFFF] opacity-80 font-semibold text-[0.9375rem] leading-[1.5625rem] text-center md:text-left
"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Service;
