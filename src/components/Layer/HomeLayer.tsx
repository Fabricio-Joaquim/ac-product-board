import Background from "@assets/card.png";
import React from "react";

export const HomeLayer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-around items-center">
      {children}
      <img alt="background" src={Background} className="max-h-[55rem]" />
    </main>
  );
};
