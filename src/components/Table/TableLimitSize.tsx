import { Table } from "@tanstack/react-table";

export const TableLimitSize = ({
  table,
  sizeOptions,
}: {
  table: Table<unknown>;
  sizeOptions: number[];
}) => (
  <td className="flex md:flex-row flex-col">
    <select
      id="limit"
      className="bg-gray-200 border-gray-300 px-4 py-2 text-gray-700 border-2 rounded"
      value={table.getState().pagination.pageSize}
      onChange={e => {
        table.setPageSize(Number(e.target.value));
      }}
    >
      {sizeOptions.map(pageSize => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
  </td>
);
