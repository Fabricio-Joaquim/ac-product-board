import Logo from "@assets/logo.png";
import { Link } from "react-router-dom";

import { sidebarLink } from "./mock/sidebarLink";

export const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-full border-r-2 border-gray-200">
      <div className="flex justify-center items-center ">
        <img src={Logo} alt="Logo" className="w-32 h-9 mt-6" />
      </div>
      <div className="flex flex-col items-center p-4 mt-6">
        {sidebarLink.map(Dashboard => (
          <Link
            key={Dashboard.title}
            to={Dashboard.link}
            className="w-full h-14 bg-trueGray-200 font-poppins text-base text-black font-medium rounded-xl mb-4 items-baseline pt-4 px-5 flex gap-x-2"
          >
            <Dashboard.Icon className="text-red-900 text-base" size={20} />
            {Dashboard.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
