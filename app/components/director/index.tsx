"use client";

import Image from "next/image";
import crossIcon from "../../../public/images/icon-cross.svg";
import closeIcon from "../../../public/images/icon-close.svg";
import { useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export interface IProps {
  title: string;
  name: string;
  icon: string;
  content: string;
}

const Director = ({ title, name, icon, content }: IProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div
      className={`bg-[#012F34] ${
        showMore ? "pt-[2.1875rem]" : "pt-8"
      } flex flex-col items-center`}
    >
      {showMore ? (
        <article className="px-[2.8856rem]">
          <h3 className="font-bold text-center text-[#79c8c7] leading-[1.75rem] text-[1.125rem]">
            {name}
          </h3>
          <p className="pt-2 text-[0.9375rem] leading-[1.5625rem] font-semibold text-center">
            {content}
          </p>
          <div className="pt-6 flex items-center justify-center space-x-4">
            <a
              href="#"
              className="h-[1.25rem] w-[1.25rem] hover:text-[#f67e7e]"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="h-[1.25rem] w-[1.25rem] hover:text-[#f67e7e]"
            >
              <FaLinkedin />
            </a>
          </div>
        </article>
      ) : (
        <>
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
            <h3 className="text-[#79C8C7] font-bold text-lg text-center">
              {name}
            </h3>
            <p className="italic font-medium text-[0.9375rem]">{title}</p>
          </header>
        </>
      )}
      <button
        onClick={() => setShowMore(!showMore)}
        className={`relative ${
          showMore ? "bg-[#79C8C7]" : "bg-[#f67e7e]"
        } h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center top-[1.75rem]`}
      >
        {showMore ? (
          <Image src={closeIcon} alt="close icon" className="rounded-full" />
        ) : (
          <Image src={crossIcon} alt="cross icon" className="rounded-full" />
        )}
      </button>
    </div>
  );
};

export default Director;
