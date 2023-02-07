import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../model";

type MessageProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
const TextArea = ({ label, register, required }: MessageProps) => {
  return (
    <textarea
      placeholder={label}
      {...register(label, { required })}
      rows={3}
      className="placeholder:text-semibold w-full border-b border-[#FFFFFF] cursor-pointer hover:border-[#79C8C7] bg-transparent px-[0.875rem] pb-4 outline-0 placeholder:text-[0.9375rem] placeholder:leading-[1.5625rem] placeholder:text-[#ffffff] placeholder:opacity-60"
    />
  );
};

export default TextArea;
