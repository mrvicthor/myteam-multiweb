"use client";
import Link from "next/link";
import { Sidebar, Button } from "../index";
import { useState } from "react";
import Image from "next/image";
import hamburger from "../../../public/images/icon-hamburger.svg";
import logo from "../../../public/images/logo.svg";
import close from "../../../public/images/icon-close.svg";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="px-6 pt-[3rem] md:px-[2.5rem] lg:max-w-[69.375rem] lg:mx-auto">
        <div className="flex justify-between items-center text-[#ffffff]">
          <Link href="/" className="">
            <Image src={logo} alt="my-team logo" />
          </Link>
          <nav className="hidden md:block md:mr-auto md:pl-[3rem] font-semibold text-lg text-[#ffffff]">
            <ul className="flex gap-[2.5rem]">
              <li>home</li>
              <li>about</li>
            </ul>
          </nav>
          <div className="hidden md:flex border-2 border-[#ffffff] w-[9.9375rem] h-[3rem] items-center justify-center rounded-full hover:bg-[#ffffff] hover:text-[#002529] hover:border-transparent cursor-pointer">
            <Button href="/contact" title="contact us" />
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-4 h-[1.0625rem] cursor-pointer border-[0] outline-0 z-[10000] md:hidden"
            aria-controls="primary__nav"
          >
            <span className="sr-only" aria-expanded="false">
              Menu
            </span>
            <Image
              src={sidebarOpen ? close : hamburger}
              alt={sidebarOpen ? "close" : "hamburger"}
            />
          </button>
          {sidebarOpen && (
            <div
              className="fixed top-0 bottom-0 left-0 right-0 bg-[#979797] z-10 opacity-40"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <Sidebar sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
