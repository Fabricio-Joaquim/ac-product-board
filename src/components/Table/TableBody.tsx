import { useMutation, useQueryClient } from "@tanstack/react-query";
import { flexRender, Table } from "@tanstack/react-table";

import { KeyServiceEnum } from "@/enums/KeyServiceEnum";
import { useToast } from "@/hooks/toast/useToast";
import { apiService } from "@/service/base";

import { columnsRender } from "./components";
import { Row } from "./Row";

export const TableBody = ({ table }: { table: Table<unknown> }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => apiService.delete("/products/" + id),
    onSuccess: () => {
      toast("Produto excluído com sucesso", "success");
      queryClient.invalidateQueries({ queryKey: [KeyServiceEnum.PRODUCTS] });
    },
  });

  return (
    <tbody>
      {table.getRowModel().rows.map(row => {
        return (
          <tr key={row.id} className="relative">
            {row.getVisibleCells().map(cell => {
              const accessorKey = cell.column.columnDef.accessorKey;
              const cellRenderer = columnsRender[accessorKey];
              return (
                <Row key={accessorKey} cell={cell}>
                  {cell.getIsPlaceholder()
                    ? null
                    : cellRenderer
                      ? cellRenderer(cell, mutation)
                      : flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                </Row>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
