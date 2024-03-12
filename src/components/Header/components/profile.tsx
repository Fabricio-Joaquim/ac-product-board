import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useUser } from "@/store/hook/useUser";

export const Profile = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => setShow(!show);
  const { logout } = useUser();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-dropdown]")) return;
      setShow(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const list = [
    { label: "Perfil", icon: <FaGear />, to: "" },
    { label: "Sair", icon: <IoExitOutline />, to: "", onClick: logout },
  ];

  return (
    <div data-dropdown className="relative">
      <button
        className="flex items-center rounded font-medium text-black transition duration-500 ease-in-out motion-reduce:transition-none gap-2 font-inter text-sm hover:text-gray-700 hover:outline-1"
        type="button"
        id="dropdownMenuButton1"
        aria-expanded="false"
        data-twe-ripple-color="light"
        onClick={toggle}
      >
        <FaUserCircle size={38} />
        Usuário
      </button>
      <ul
        className={`absolute top-12 right-0 z-10 w-40 py-2 duration-500 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none ${show ? "block" : "hidden"} px-4  divide-y divide-gray-200 gap-y-2 motion-reduce:transition-none`}
      >
        {list.map(item => (
          <li key={item.label}>
            <Link
              className="flex items-center gap-x-3 my-1"
              to={item.to}
              onClick={item.onClick}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
