import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonPaginationProps extends HTMLAttributes<HTMLButtonElement> {
  readonly disabled: boolean;
  readonly onClick: () => void;
  readonly icon: ReactNode;
  readonly className?: string;
}

export const ButtonPagination = ({
  disabled,
  onClick,
  icon,
  className,
  ...rest
}: IButtonPaginationProps) => (
  <button
    className={twMerge(
      "border rounded-xl px-2 py-3 bg-red-200 cursor-pointer hover:bg-red-50 duration-300 hover:border-1 hover:border-black",
      className,
    )}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
    {icon}
  </button>
);
