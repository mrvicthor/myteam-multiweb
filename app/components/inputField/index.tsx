import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../../model";
type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
const InputField = ({ label, register, required }: InputProps) => {
  return (
    <input
      type="text"
      {...register(label, { required })}
      placeholder={label}
      className="placeholder:text-semibold w-full border-b border-[#FFFFFF] bg-transparent px-[0.875rem] pb-4 placeholder:text-[0.9375rem] placeholder:leading-[1.5625rem] placeholder:text-[#ffffff] placeholder:opacity-60"
    />
  );
};

export default InputField;
