"use client";
import toast, { Toaster } from "react-hot-toast";
import { Item, InputField, TextArea } from "../components";
import personIcon from "../../public/images/icon-person.svg";
import cogIcon from "../../public/images/icon-cog.svg";
import chartIcon from "../../public/images/icon-chart.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../model";
import { useState, useEffect } from "react";
import Image from "next/image";
import contactPattern from "../../public/images/bg-pattern-contact-2.svg";
import bgPattern from "../../public/images/bg-pattern-about-2-contact-1.svg";

const notify = () => toast("Success! Message sent...");

const Contact = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    notify();
    reset();
    console.log(data);
  };
  const items = [
    { id: 1, icon: personIcon, content: "The quality of our talent network" },
    { id: 2, icon: cogIcon, content: "Usage & implementation of our software" },
    { id: 3, icon: chartIcon, content: "How we help drive innovation" },
  ];

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (hasMounted == false) {
    return null;
  }

  return (
    <section className="relative overflow-hidden pt-[5rem]  pb-[5.5rem] text-[#ffffff] md:py-[7rem] lg:pt-[4.5rem]">
      <Toaster
        toastOptions={{
          style: {
            background: "#6CC494",
            color: "white",
          },
        }}
      />
      <div className="absolute hidden md:top-[6.25rem] md:-left-[6.25rem] md:block">
        <Image src={bgPattern} alt="contact-background-image-1" className="" />
      </div>
      <div className=" container grid gap-y-[3.5rem] md:px-[7.9375rem] lg:grid-cols-2 lg:gap-x-[1.875rem] lg:gap-y-0 lg:px-8">
        <article className=" ">
          <h1 className="text-center text-[2.5rem] font-bold leading-[2.5rem] md:text-[4rem] md:leading-[3.5rem] lg:w-[39.6875rem] lg:pt-4 lg:text-left lg:leading-[6.25rem]">
            Contact
          </h1>
          <p className="mt-4 text-center text-[2rem] font-bold leading-[3rem] text-[#f67e7e] lg:text-left">
            Ask us about
          </p>
          <div className="mt-[2.5rem] space-y-8 lg:space-y-2">
            {items.map((item) => (
              <Item key={item.id} content={item.content} icon={item.icon} />
            ))}
          </div>
        </article>
        <div className="lg:mt-8">
          <form className="space-y-[1.5rem]" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <InputField
                label="Name"
                register={register}
                required
                errors={errors}
              />
              {errors?.Name && (
                <p className="text-[#f67e7e]">This field is required</p>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("Email Address", {
                  required: true,
                  pattern: {
                    value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                    message: "Please use a valid email address",
                  },
                })}
                placeholder="Email Address"
                className={`${
                  errors ? "placeholder:text-[#f67e7e]" : ""
                } placeholder:text-semibold w-full cursor-pointer border-b border-[#FFFFFF] bg-transparent px-[0.875rem] pb-4 outline-0 placeholder:text-[0.9375rem] placeholder:leading-[1.5625rem] placeholder:text-[#ffffff] placeholder:opacity-60 hover:border-[#79C8C7] focus:text-[#ffffff]`}
              />

              {errors?.["Email Address"] &&
                errors["Email Address"].type == "required" && (
                  <p className="text-[#f67e7e]" role="alert">
                    This field is required
                  </p>
                )}
              {errors?.["Email Address"] &&
                errors["Email Address"].type == "pattern" && (
                  <p className="text-[#f67e7e]" role="alert">
                    {errors["Email Address"].message}
                  </p>
                )}
            </div>
            <div>
              <InputField
                label="Company Name"
                register={register}
                errors={errors}
              />
            </div>
            <div>
              <InputField label="Title" register={register} errors={errors} />
            </div>
            <div>
              <TextArea
                label="Message"
                register={register}
                required
                errors={errors}
              />
              {errors?.Message && (
                <p className="text-[#f67e7e]">This field is required</p>
              )}
            </div>
            <button className="flex h-[3rem] w-[7.6875rem] items-center justify-center rounded-full bg-[#ffffff] text-[1.125rem] font-semibold leading-[1.75rem] text-[#004047] hover:bg-[#002529] hover:text-[#ffffff]">
              submit
            </button>
          </form>
        </div>
      </div>
      <div className="relative">
        <Image
          src={contactPattern}
          alt="contact background image"
          className="absolute -right-[6.375rem] -top-[1.5625rem] md:-top-[6.8rem]"
        />
      </div>
    </section>
  );
};

export default Contact;
