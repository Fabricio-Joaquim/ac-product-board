import { Table } from "@tanstack/react-table";

export const TableLimitSize = ({
  table,
  sizeOptions,
}: {
  table: Table<unknown>;
  sizeOptions: number[];
}) => (
  <div className="flex md:flex-row flex-col items-center mt-2">
    <select
      id="limit"
      className="bg-red-500 border-gray-300 text-white border-2 px-2 py-[10px] rounded-lg appearance-none "
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
  </div>
);
