import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputDefaultProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string;
}

export const InputDefault = ({
  name,
  label,
  className,
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
          <input
            id={name}
            {...field}
            {...rest}
            className="border-2 border-gray-300 rounded-xl mt-2 p-4 px-8 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out bg-blue-50"
          />
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
