import { useEffect } from "react";
import { FaBell, FaListUl, FaQuestionCircle, FaSearch } from "react-icons/fa";

import { useUser } from "@/store/hook/useUser";

import { Profile } from "./components/profile";

export const Header = () => {
  const iconProps = {
    className: "text-trueGray-500",
    size: 28,
  };

  const { updateSidebar } = useUser();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        updateSidebar(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateSidebar]);

  return (
    <header className="bg-white shadow border-b-2 border-gray-200 flex justify-between items-center h-20 px-2 lg:px-20">
      <div className="md:min-w-80 px-4 border-gray-200 bg-trueGray-50 flex items-center focus-within:border-2 focus-within:border-gray-300 rounded-lg">
        <FaListUl className="sm:hidden mr-2" />
        <FaSearch onClick={() => updateSidebar()} />
        <input
          type="search"
          className="w-36 md:w-full h-10 border-2 border-none bg-transparent rounded-md p-2 focus:outline-none"
          placeholder="Procurar"
        />
      </div>
      <div className="flex justify-around gap-x-2 lg:gap-x-6 md:mr-3 lg:mr-10 items-center">
        <FaQuestionCircle {...iconProps} />
        <div className="relative lg:m-6 inline-flex w-fit">
          <span className="absolute h-2 w-2 right-0 top-0 p-1 rounded-full bg-red-400 border-white border-2"></span>
          <FaBell {...iconProps} />
        </div>
        <Profile />
      </div>
    </header>
  );
};
