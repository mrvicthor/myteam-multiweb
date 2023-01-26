import Link from "next/link";
import logo from "./images/logo.svg";
import facebookLogo from "./images/icon-facebook.svg";
import linkedInLogo from "./images/icon-icon-linkedin.svg";
import twitterLogo from "./images/icon-icon-twitter.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#002529] pt-[4.125rem] pb-[4rem] text-[#ffffff]">
      <section className="container space-y-[1.5rem]">
        <div className="flex flex-col items-center space-y-[1.5rem]">
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
            <Link href="/" className="font-bold text-[0.9375rem]">
              home
            </Link>
            <Link
              href="/about"
              className="font-bold text-[0.9375rem] leading-[1.5625rem]"
            >
              about
            </Link>
          </div>
        </div>
        <div className="text-center opacity-60 font-bold text-[0.9375rem] leading-[1.5625rem]">
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </div>
        <div className="pt-[1rem]">
          <div className="flex space-x-4 items-center justify-center">
            <a
              href="https://www.facebook.com/outtaspace1"
              target="_blank"
              className="h-[1.5rem] w-[1.5rem] rounded hover:text-[#f67e7e] block relative rounded-md"
            >
              <Image
                src={`/images/icon-facebook.svg`}
                alt="Facebook logo"
                className="object-cover"
                width="24"
                height="24"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-eleanya-87a06543/"
              target="_blank"
              className="h-[1.5rem] w-[1.5rem] hover:text-[#f67e7e] block relative rounded-md"
            >
              <Image
                src={`/images/icon-linkedin.svg`}
                alt="LinkedIn logo"
                className="object-cover"
                width="24"
                height="24"
              />
            </a>
            <a
              href="https://twitter.com/eva_skillz"
              target="_blank"
              className="h-[1.5rem] w-[1.5rem] hover:text-[#f67e7e] block relative rounded-md"
            >
              <Image
                src={`/images/icon-twitter.svg`}
                alt="Twitter logo"
                className="object-cover"
                width="24"
                height="24"
              />
            </a>
          </div>
          <p className="text-center mt-4 opacity-60 text-[0.9375rem] leading-[1.5625rem]">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
