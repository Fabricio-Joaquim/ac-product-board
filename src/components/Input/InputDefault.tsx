import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputDefaultProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const InputDefault = ({
  name,
  label,
  className,
  leftIcon,
  rightIcon,
  ...rest
}: InputDefaultProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={twMerge("flex flex-col font-roboto", className)}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <div className="border-2 flex border-gray-300 rounded-xl mt-2 p-4 px-8 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out bg-blue-50">
            {leftIcon}
            <input
              id={name}
              {...field}
              {...rest}
              className="border-none onfocus:outline-none w-full bg-transparent outline-none"
            />
            {rightIcon}
          </div>
        )}
      />
      {errors && errors[name] && (
        <small className="text-red-500 ml-2" data-testid={`${name}-error`}>
          {errors[name]?.message as string}
        </small>
      )}
    </div>
  );
};
