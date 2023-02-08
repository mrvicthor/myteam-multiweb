import { Path, UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormValues } from "../../model";

type MessageProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: FieldErrors<IFormValues>;
};
const TextArea = ({ label, register, required, errors }: MessageProps) => {
  return (
    <textarea
      placeholder={label}
      {...register(label, { required })}
      rows={3}
      className={`${
        errors ? "placeholder:text-[#f67e7e]" : ""
      } placeholder:text-semibold w-full cursor-pointer border-b border-[#FFFFFF] bg-transparent px-[0.875rem] pb-4 outline-0 placeholder:text-[0.9375rem] placeholder:leading-[1.5625rem] placeholder:text-[#ffffff] placeholder:opacity-60 hover:border-[#79C8C7]`}
    />
  );
};

export default TextArea;
