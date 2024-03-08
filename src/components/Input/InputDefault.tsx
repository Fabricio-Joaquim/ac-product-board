import { Controller, useFormContext } from "react-hook-form";

interface InputDefaultProps {
  name: string;
  label: string;
}

export const InputDefault = ({ name, label, ...rest }: InputDefaultProps) => {
  const { control } = useFormContext();
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input id={name} {...field} {...rest} />}
      />
    </div>
  );
};
