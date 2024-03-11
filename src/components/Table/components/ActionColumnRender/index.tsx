import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Cell } from "@tanstack/react-table";
import React from "react"; // Importe o React
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { KeyServiceEnum } from "@/enums/KeyServiceEnum";
import { useToast } from "@/hooks/toast/useToast";
import { RouterEnum } from "@/router/enum/routerEnum";
import { apiService } from "@/service/base";

const ActionColumnRender = (cell: Cell<unknown, unknown>) => {
  const tailwindMerge =
    "text-white border py-1 rounded-xl font-bold text-xs px-2";
  const { toastDialog, toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => apiService.delete("/products/" + id),
    onSuccess: () => {
      toast("Produto excluído com sucesso", "success");
      queryClient.invalidateQueries({ queryKey: [KeyServiceEnum.PRODUCTS] });
    },
  });

  return (
    <div className="flex gap-x-2">
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
