"use client";
import Link from "next/link";
import { Sidebar } from "../index";
import { useState } from "react";
import Image from "next/image";
import hamburger from "../../../public/images/icon-hamburger.svg";
import logo from "../../../public/images/logo.svg";
import close from "../../../public/images/icon-close.svg";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="px-6 pt-[3rem]">
        <div className="flex justify-between items-center text-[#ffffff]">
          <Link href="/" className="">
            <Image src={logo} alt="my-team logo" />
          </Link>
          <nav className="hidden">
            <ul>
              <li>home</li>
              <li>about</li>
            </ul>
          </nav>
          <button className="hidden">contact us</button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-4 h-[1.0625rem] cursor-pointer border-[0] outline-0 z-[10000]"
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
          <Sidebar sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
