import { Button } from "../";

type IProps = {
  sidebarOpen: boolean;
};

const Sidebar = ({ sidebarOpen }: IProps) => {
  return (
    <section
      className={`${
        sidebarOpen ? "active" : ""
      } sidebar text-[#ffffff] bg-[#2C6269] h-screen fixed`}
    >
      <div className="pt-[7rem] pl-[3rem]">
        <ul className="flex flex-col gap-[1.5rem]">
          <li className=" text-lg font-semibold">home</li>
          <li className=" text-lg font-semibold">about</li>
          <li className="mt-[0.75rem] border-2 border-[#ffffff] w-[9.9375rem] h-[3rem] flex items-center justify-center rounded-full hover:bg-[#ffffff] hover:text-[#002529] hover:border-transparent cursor-pointer">
            <Button title="contact us" href="/contact" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
