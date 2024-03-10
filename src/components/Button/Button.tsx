import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export const Button = ({ title, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-red-800 text-white p-2 rounded-xl w-full mt-4 flex items-center justify-center",
        className,
      )}
      {...rest}
    >
      {title}
    </button>
  );
};
