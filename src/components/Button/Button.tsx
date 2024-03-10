import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-red-800 text-white p-2 rounded-xl w-full mt-4"
      {...rest}
    >
      {children}
    </button>
  );
};
