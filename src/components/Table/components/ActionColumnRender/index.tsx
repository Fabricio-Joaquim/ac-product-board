import { Cell } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { RouterEnum } from "@/router/enum/routerEnum";

export const ActionColumnRender = (cell: Cell<unknown, unknown>) => {
  const tailwindMerge =
    "text-white border py-1 rounded-xl font-bold text-xs px-2";
  console.log(cell.row.original);
  return (
    <div className="flex">
      <Link
        to={`${RouterEnum.UPDATE_PRODUCT}/${cell.row.original.id}`}
        state={cell.row.original}
        className={twMerge(tailwindMerge, "bg-blue-600")}
      >
        Editar
      </Link>
      <button
        className={twMerge(tailwindMerge, "bg-red-600")}
        onClick={() => console.log(cell.row.original)}
      >
        Excluir
      </button>
    </div>
  );
};
