import {
  ColumnDef,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useCallback, useMemo, useState } from "react";

import { Table } from ".";
import { ITableGenericHeader } from "./model/tableHeader";

interface ITableGenericProps {
  readonly headers: ITableGenericHeader[];
  readonly data: unknown[];
}

function TableGeneric({ headers, data }: ITableGenericProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const sizeOptions = useMemo(() => [10, 20, 30, 40, 50], []);
  const columns = useMemo<ColumnDef<unknown>[]>(
    () =>
      headers.map(header => ({
        accessorKey: header.accessorKey,
        header: header.header,
        cell: info => info.getValue(),
        footer: props => props.column.id,
        ...headers,
      })),
    [headers],
  );

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const [search, setSearch] = useState<string>("");

  const table = useReactTable({
    data: data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
    columns,
    pageCount: Math.ceil(data.length / pageSize),
    state: {
      sorting,
      pagination,
      globalFilter: search,
    },
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    manualPagination: true,
    onGlobalFilterChange: setSearch,
    debugTable: false,
  });

  const resetSearch = useCallback(() => {
    setSearch("");
  }, []);

  const handlerChangeSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setSearch(event.target.value);
    },
    [],
  );

  return (
    <div className="p-2 w-full">
      <Table.Search
        resetSearch={resetSearch}
        search={search}
        handlerChangeSearch={handlerChangeSearch}
      />
      <table className="table-fixed w-full rounded-lg mt-7">
        <Table.Header table={table} />
        <Table.Body table={table} />
      </table>
      <div className="bg-gray-100 flex justify-center gap-x-3 mt-5">
        <Table.Footer table={table} />
        <Table.LimitSize table={table} sizeOptions={sizeOptions} />
      </div>
    </div>
  );
}

export default TableGeneric;
