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
      <div className="container pt-[3rem] md:px-[2.5rem]">
        <div className="flex items-center justify-between text-[#ffffff]">
          <Link href="/" className="">
            <Image src={logo} alt="my-team logo" />
          </Link>
          <nav className="hidden text-lg font-semibold text-[#ffffff] md:mr-auto md:block md:pl-[3rem]">
            <ul className="flex gap-[2.5rem]">
              <li className="cursor-pointer hover:text-[#f67e7e]">
                <Link href="/">home</Link>
              </li>
              <li className="cursor-pointer hover:text-[#f67e7e]">
                <Link href="/about">about</Link>
              </li>
            </ul>
          </nav>
          <div className="hidden h-[3rem] w-[9.9375rem] cursor-pointer items-center justify-center rounded-full border-2 border-[#ffffff] font-semibold hover:border-transparent hover:bg-[#ffffff] hover:text-[#002529] md:flex ">
            <Button href="/contact" title="contact us" />
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="z-[10000] h-[1.0625rem] w-4 cursor-pointer border-[0] outline-0 md:hidden"
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
              className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-[#979797] opacity-40"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
