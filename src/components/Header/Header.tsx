import {
  FaBell,
  FaQuestionCircle,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

export const Header = () => {
  const iconProps = {
    className: "text-trueGray-500",
    size: 28,
  };

  return (
    <header className="bg-white shadow border-b-2 border-gray-200 flex justify-between items-center h-20 px-20">
      <div className="min-w-80 px-4 border-gray-200 bg-trueGray-50 flex items-center focus-within:border-2 focus-within:border-gray-300 rounded-lg">
        <FaSearch />
        <input
          type="search"
          className="w-full h-10 border-2 border-none bg-transparent rounded-md p-2 focus:outline-none"
          placeholder="Procurar"
        />
      </div>
      <div className="flex justify-around gap-x-6 mr-10 items-center">
        <FaQuestionCircle {...iconProps} />
        <FaBell {...iconProps} />
        <p className="flex items-center gap-2 ml-3">
          <FaUserCircle size={38} />
          Usuario
        </p>
      </div>
    </header>
  );
};
