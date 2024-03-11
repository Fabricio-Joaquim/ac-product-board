/* eslint-disable */
//@ts-nocheck
import { flexRender, Table } from "@tanstack/react-table";

import { columnsRender } from "./components";
import { Row } from "./Row";

export const TableBody = ({ table }: { table: Table<unknown> }) => {
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
                      ? cellRenderer(cell)
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
