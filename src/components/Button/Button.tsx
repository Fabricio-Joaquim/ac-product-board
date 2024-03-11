import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Button = ({
  title,
  className,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-red-800 text-white p-2 rounded-xl w-full flex text-xl items-center justify-center",
        className,
      )}
      {...rest}
    >
      {iconLeft && iconLeft}
      {title}
      {iconRight && iconRight}
    </button>
  );
};
