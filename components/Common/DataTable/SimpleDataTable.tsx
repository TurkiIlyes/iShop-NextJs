"use client";

import { ColumnDef, flexRender } from "@tanstack/react-table";

import { Table } from "@/components/ui/table";

import Pagination from "./Options/Pagination/Pagination";
import useDataTable from "./Hooks/useDataTable";
import DataTableHeader from "./TableSections/DataTableHeader";
import DataTableBody from "./TableSections/DataTableBody";

const LoginHistoryDataTable = <TData, TValue>({
  columns,
  data,
}: {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}) => {
  const [table] = useDataTable({ columns, data });

  return (
    <div className="flex flex-col gap-4">
      <div className="border rounded-sm">
        <Table className="">
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} />
        </Table>
      </div>
      <Pagination table={table} />
    </div>
  );
};

export default LoginHistoryDataTable;
