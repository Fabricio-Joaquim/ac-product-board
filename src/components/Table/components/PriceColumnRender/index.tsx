import { Cell } from "@tanstack/react-table";

export const PriceColumnRender = (cell: Cell<unknown, unknown>) => (
  <span className="text-right">
    {new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(cell.getValue() as number)}
  </span>
);
