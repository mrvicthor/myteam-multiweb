import Image from "next/image";
import quoteIcon from "../../../public/images/icon-quotes.svg";

export interface IProps {
  description: string;
  role: string;
  name: string;
  icon: string;
}
const Testimony = ({ description, role, name, icon }: IProps) => {
  return (
    <div className="mt-[3rem] relative flex flex-col gap-4 items-center">
      <div className="absolute -top-[5%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[10]">
        <Image src={quoteIcon} alt="quote icon" />
      </div>
      <p className="text-center relative z-[100] font-semibold text-[0.9375rem] leading-[1.5625rem]">
        {description}
      </p>
      <div className="flex flex-col items-center gap-[0.125rem]">
        <h4 className="text-[1.125rem] text-[#79C8C7] leading-[1.75rem]">
          {name}
        </h4>
        <p className="text-[0.8125rem] leading-[1.125rem] font-medium italic">
          {role}
        </p>
      </div>
      <div className="relative h-[3.875rem] w-[3.875rem] rounded-full">
        <Image
          src={icon}
          alt={name}
          className="rounded-full"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
    </div>
  );
};
export default Testimony;
