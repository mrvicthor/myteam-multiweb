import Image from "next/image";

interface ItemProps {
  icon: string;
  content: string;
}
const Item = ({ icon, content }: ItemProps) => {
  return (
    <div className="flex items-center space-x-[1.4375rem]">
      <div className="relative">
        <Image src={icon} alt="icon" />
      </div>{" "}
      <p className="flex-1">{content}</p>
    </div>
  );
};

export default Item;
