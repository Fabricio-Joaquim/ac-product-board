import { ReactNode } from "react";

export const CardRoot = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex justify-between items-center">{children}</div>
      <hr className="my-8" />
    </>
  );
};
