import { Cell } from "@tanstack/react-table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const DataColumnRender = (cell: Cell<unknown, unknown>) => {
  return (
    <div className="flex justify-center">
      <p>
        {format(cell.getValue() as string, "MMM dd, yyyy", {
          locale: ptBR,
        })}
      </p>
    </div>
  );
};
