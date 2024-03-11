import { flexRender, Table } from "@tanstack/react-table";
import { HiOutlineSwitchVertical } from "react-icons/hi";

export const TableHeader = ({ table }: { table: Table<unknown> }) => (
  <thead className="text-xs text-trueGray-500 bg-white text-left">
    {table.getHeaderGroups().map(headerGroup => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map(header => {
          return (
            <th
              key={header.id}
              scope="col"
              className="py-3"
              colSpan={header.colSpan}
            >
              {header.isPlaceholder ? null : (
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? "cursor-pointer hover:bg-slate-50 duration-300 hover:border-1 hover:border-black select-none flex items-center gap-1"
                      : " flex items-center gap-1",
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {!header.column.getIsSorted() && header.id !== "actions" && (
                    <HiOutlineSwitchVertical size={14} />
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              )}
            </th>
          );
        })}
      </tr>
    ))}
  </thead>
);
