"use client";

import { Item, InputField } from "../components";
import personIcon from "../../public/images/icon-person.svg";
import cogIcon from "../../public/images/icon-cog.svg";
import chartIcon from "../../public/images/icon-chart.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../model";
import { useState, useEffect } from "react";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
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
    return <p>loading...</p>;
  }

  return (
    <section className="relative overflow-hidden pt-[5rem]  pb-[1.25rem] text-[#ffffff] md:py-[7rem] lg:pt-[8.0625rem]">
      <div className=" container grid gap-y-[3.5rem]">
        <article className="">
          <h1 className="text-center text-[2.5rem] font-bold leading-[2.5rem] md:text-[4rem] md:leading-[3.5rem] lg:w-[39.6875rem] lg:pt-4 lg:text-left lg:text-[6.25rem] lg:leading-[6.25rem]">
            Contact
          </h1>
          <p className="mt-4 text-center text-[2rem] font-bold leading-[3rem] text-[#f67e7e]">
            Ask us about
          </p>
          <div className="mt-[2.5rem] space-y-8">
            {items.map((item) => (
              <Item key={item.id} content={item.content} icon={item.icon} />
            ))}
          </div>
        </article>
        <div>
          <form className='space-y-[1.5rem]'>
            <div>
              <InputField label="Name" register={register} required />
            </div>
            <div>
              <InputField label="Email Address" register={register} required />
            </div>
            <div>
              <InputField label="Company Name" register={register} required />
            </div>
            <div>
              <InputField label="Title" register={register} required />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
