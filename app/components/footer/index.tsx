import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#002529] pt-[4.125rem] pb-[4rem] text-[#ffffff] md:pt-[3.5rem]">
      <section className="container space-y-[1.5rem] md:px-[2.5rem] md:grid md:grid-cols-2 md:space-y-0 md:gap-[2.125rem] lg:grid-cols-5">
        <div className="flex flex-col items-center space-y-[1.5rem] md:items-start md:space-y-[3rem]">
          <div className="h-[1.5rem] w-[6rem] relative">
            <Link href="/" className="h-[1.5rem] w-[1.5rem]">
              <Image
                src={`/images/logo.svg`}
                alt="my-team logo"
                className="object-cover"
                width="300"
                height="500"
              />
            </Link>
          </div>
          <div className="flex space-x-[1.5rem] leading-[1.5625rem]">
            <Link
              href="/"
              className="font-bold text-[0.9375rem] hover:text-[#f67e7e] cursor-pointer"
            >
              home
            </Link>
            <Link
              href="/about"
              className="font-bold text-[0.9375rem] leading-[1.5625rem] hover:text-[#f67e7e] cursor-pointer"
            >
              about
            </Link>
          </div>
        </div>
        <div className="text-center opacity-60 font-bold text-[0.9375rem] leading-[1.5625rem] md:text-right lg:text-left">
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </div>
        <div className="pt-[1rem] md:flex md:justify-between md:col-span-2 md:items-center md:pt-0 lg:col-start-3 lg:col-end-6 lg:flex-col lg:items-end">
          <div className="flex space-x-4 items-center justify-center">
            <a
              href="https://www.facebook.com/outtaspace1"
              target="_blank"
              className="h-[1.5rem] w-[1.5rem] rounded hover:text-[#f67e7e] block relative rounded-md footer-social-icons"
            >
              <FaFacebookSquare size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-eleanya-87a06543/"
              target="_blank"
              className="h-[1.5rem] w-[1.5rem] hover:text-[#f67e7e] block relative rounded-md footer-social-icons"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/eva_skillz"
              target="_blank"
              className="h-[1.5rem] w-[1.5rem] hover:text-[#f67e7e] block relative rounded-md footer-social-icons"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-center mt-4 opacity-60 text-[0.9375rem] leading-[1.5625rem] md:mt-0">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
