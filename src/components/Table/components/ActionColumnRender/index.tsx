/* eslint-disable */
//@ts-nocheck
import { UseMutationResult } from "@tanstack/react-query";
import { Cell } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { useToast } from "@/hooks/toast/useToast";
import { RouterEnum } from "@/router/enum/routerEnum";

const ActionColumnRender = (
  cell: Cell<unknown, unknown>,
  mutation: UseMutationResult<unknown>,
) => {
  const tailwindMerge =
    "text-white border text-center py-1 rounded-xl font-bold text-xs px-2";
  const { toastDialog } = useToast();
  return (
    <div className="flex gap-x-2 gap-y-2 md:flex-col lg:flex-row">
      <Link
        to={`${RouterEnum.UPDATE_PRODUCT}/${cell.row.original.id}`}
        state={cell.row.original}
        className={twMerge(tailwindMerge, "bg-blue-600")}
      >
        Editar
      </Link>
      <button
        className={twMerge(tailwindMerge, "bg-red-600")}
        onClick={() =>
          toastDialog({
            title: "Deseja realmente excluir este produto ?",
            icon: "warning",
            onConfirm: () => mutation.mutate(cell.row.original.id),
          })
        }
      >
        Excluir
      </button>
    </div>
  );
};

export { ActionColumnRender };
