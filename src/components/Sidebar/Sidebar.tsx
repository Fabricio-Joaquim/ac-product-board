import Logo from "@assets/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useUser } from "@/store/hook/useUser";

import { sidebarLink } from "./mock/sidebarLink";

export const Sidebar = () => {
  const {
    user: { sidebarActive },
    updateSidebar,
  } = useUser();

  return (
    <div
      className={`bg-white w-64 h-full min-h-full border-r-2 border-gray-200 ${
        sidebarActive === true ? "absolute z-10" : "hidden md:block"
      }`}
    >
      <div className="flex justify-center items-center flex-row">
        <img src={Logo} alt="Logo" className="w-32 h-9 mt-6" />{" "}
        <IoCloseSharp
          className="text-trueGray-500 text-3xl mt-3 ml-10 md:hidden"
          onClick={() => updateSidebar()}
        />
      </div>
      <div className="flex flex-col items-center p-2 lg:p-4 mt-6">
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
