import { Table } from "@tanstack/react-table";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import { ButtonPagination } from "./components/ButtonPagination/ButtonPagination";

export const TableFooter = ({ table }: { table: Table<unknown> }) => (
  <div className="flex items-center gap-1 mt-2 justify-center">
    <ButtonPagination
      aria-label="First page"
      disabled={!table.getCanPreviousPage()}
      icon={<MdOutlineKeyboardDoubleArrowLeft size={20} />}
      className="bg-red-400"
      onClick={() => table.setPageIndex(0)}
    />
    <ButtonPagination
      aria-label="Previous page"
      disabled={!table.getCanPreviousPage()}
      icon={<MdOutlineKeyboardArrowLeft size={20} />}
      onClick={() => table.previousPage()}
    />
    <strong className="flex items-center gap-1 text-sm md:text-base">
      {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
    </strong>
    <ButtonPagination
      aria-label="Next page"
      disabled={!table.getCanNextPage()}
      icon={<MdOutlineKeyboardArrowRight size={20} />}
      onClick={() => table.nextPage()}
    />
    <ButtonPagination
      aria-label="Last page"
      disabled={!table.getCanNextPage()}
      className="bg-red-400"
      icon={<MdOutlineKeyboardDoubleArrowRight size={20} />}
      onClick={() => table.setPageIndex(table.getPageCount() - 1)}
    />
  </div>
);
