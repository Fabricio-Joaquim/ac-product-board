import { Sidebar } from "@components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";

export const BoardLayer = () => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="w-full h-full">
        <Header />
        <div className="w-full h-full bg-trueGray-100 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
