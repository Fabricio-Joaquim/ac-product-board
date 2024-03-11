import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BiX } from "react-icons/bi";

interface TableSearchProps {
  resetSearch: () => void;
  search: string;
  handlerChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TableSearch = ({
  resetSearch,
  search,
  handlerChangeSearch,
}: TableSearchProps) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-0 md:gap-2 justify-center w-56 bg-white rounded-lg h-11 md:h-auto">
      <input
        name="search"
        value={search}
        className="border-none rounded py-0 md:py-3 pl-2 bg-white focus:border-none w-full
            focus:ring-0 focus:outline-none
          "
        type="text"
        placeholder="Search"
        onChange={handlerChangeSearch}
      />
      {search && (
        <button
          type="button"
          className="py-3 bg-red-400 px-4 rounded-r-lg hover:bg-red-500 focus:outline-none duration-300"
          onClick={resetSearch}
        >
          <BiX size={25} />
        </button>
      )}
    </div>
    <p className="text-trueGray-500 font-inter text-[10px]">
      Última atualização:{" "}
      {format(new Date(), "dd MMM yyyy hh:mm a", {
        locale: ptBR,
      })}
    </p>
  </div>
);
