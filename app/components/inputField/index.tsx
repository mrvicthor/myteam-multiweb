import { Path, UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormValues } from "../../model";
type InputProps = {
  label: Path<IFormValues>;
  errors: FieldErrors<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
};
const InputField = ({ label, register, required, errors }: InputProps) => {
  return (
    <input
      type="text"
      {...register(label, { required })}
      placeholder={label}
      className={`${
        errors ? "placeholder:text-[#f67e7e]" : ""
      } placeholder:text-semibold w-full cursor-pointer border-b border-[#FFFFFF] bg-transparent px-[0.875rem] pb-4 outline-0 placeholder:text-[0.9375rem] placeholder:leading-[1.5625rem] placeholder:text-[#ffffff] placeholder:opacity-60 hover:border-[#79C8C7] focus:text-[#ffffff]`}
    />
  );
};

export default InputField;
