import Image from "next/image";

interface ItemProps {
  icon: string;
  content: string;
}
const Item = ({ icon, content }: ItemProps) => {
  return (
    <div className="grid grid-cols-6 items-center gap-x-4">
      <div className="relative col-span-1">
        <Image src={icon} alt="icon" />
      </div>{" "}
      <p className="col-start-2 col-end-7">{content}</p>
    </div>
  );
};

export default Item;
