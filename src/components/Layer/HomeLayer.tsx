import Background from "@assets/card.png";
import React from "react";

export const HomeLayer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-around items-center">
      {children}
      <img
        alt="background"
        src={Background}
        className="w-auto absolute md:relative -z-10 max-h-[55rem] h-full lg:w-auto md:w-72 md:h-[45rem] lg:h-full"
      />
    </main>
  );
};
