import { FaBell, FaQuestionCircle, FaUserCircle } from "react-icons/fa";

export const Header = () => {
  const iconProps = {
    className: "text-trueGray-500",
    size: 28,
  };

  return (
    <header className="bg-white shadow border-b-2 border-gray-200 flex justify-between items-center h-20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <input
          type="search"
          className="w-1/2 h-10 border-2 border-gray-200 rounded-md p-2"
        />
      </div>
      <div className="flex justify-around gap-x-6 mr-10">
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
