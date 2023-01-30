import Image from "next/image";
import crossIcon from "../../../public/images/icon-cross.svg";

export interface IProps {
  title: string;
  name: string;
  icon: string;
}

const Director = ({ title, name, icon }: IProps) => {
  return (
    <div className="bg-[#012F34] pt-8 flex flex-col items-center">
      <div className="relative w-[6rem] h-[6rem] rounded-full">
        <Image
          src={icon}
          alt={name}
          fill
          className="rounded-full"
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </div>
      <header className="pt-4 flex flex-col items-center">
        <h3 className="text-[#79C8C7] font-bold text-lg text-center">{name}</h3>
        <p className="italic font-medium text-[0.9375rem]">{title}</p>
      </header>
      <button className="relative bg-[#f67e7e] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center top-[1.75rem]">
        <Image src={crossIcon} alt="cross icon" className="rounded-full" />
      </button>
    </div>
  );
};

export default Director;
