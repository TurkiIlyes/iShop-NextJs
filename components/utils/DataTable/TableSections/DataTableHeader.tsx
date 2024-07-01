import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Table } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

const DataTableHeader = <TData,>({ table }: { table: Table<TData> }) => {
  return (
    <TableHeader className=" bg-success-900 bg-opacity-10">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead className="text-grayscale-900" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default DataTableHeader;
