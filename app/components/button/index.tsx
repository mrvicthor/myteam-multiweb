import Link from "next/link";

type ButtonProps = {
  title: string;
  href: string;
};

const Button = ({ title, href }: ButtonProps) => {
  return <Link href={href}>{title}</Link>;
};

export default Button;
