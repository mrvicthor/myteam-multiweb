import { Button } from "../";
import bgimage from "../../../public/images/bg-pattern-about-1-mobile-nav-1.svg";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: IProps) => {
  return (
    <section
      className={`${
        sidebarOpen ? "active" : ""
      } sidebar text-[#ffffff] bg-[#2C6269] z-[999] h-screen fixed md:hidden`}
    >
      <div className="pt-[7rem] pl-[3rem]">
        <ul className="flex flex-col gap-[1.5rem]">
          <li
            className=" text-lg font-semibold cursor-pointer "
            onClick={() => setSidebarOpen(false)}
          >
            <Link href="/">home</Link>
          </li>
          <li
            className=" text-lg font-semibold cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <Link href="/about">about</Link>
          </li>
          <li
            onClick={() => setSidebarOpen(false)}
            className="mt-[0.75rem] border-2 border-[#ffffff] w-[9.9375rem] h-[3rem] flex items-center justify-center rounded-full hover:bg-[#ffffff] hover:text-[#002529] hover:border-transparent cursor-pointer"
          >
            <Button title="contact us" href="/contact" />
          </li>
        </ul>
      </div>
      <div className="fixed top-[32.5rem] right-0 translate-x-[99px]">
        <Image src={bgimage} alt="background image" />
      </div>
    </section>
  );
};

export default Sidebar;
