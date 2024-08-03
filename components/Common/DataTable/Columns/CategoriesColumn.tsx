"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./CustomTableColumns/DataTableColumnHeader";
import DataTableRowMenu from "./CustomTableColumns/DataTableRowMenu";
import DataTableHeaderCheckBox from "./CustomTableColumns/DataTableHeaderCheckBox";
import DataTableContentCheckBox from "./CustomTableColumns/DataTableContentCheckBox";
import DeleteCategoryDialog from "../../Dialog/DeleteCategoryDialog";
import CategoryIconAndNameColumn from "./CustomTableColumns/CategoryIconAndNameColumn";
export type Categories = {
  _id: string;
  image?: string;
  name: string;
  status: "Active" | "Inactive" | "Archived";
};

export const columns: ColumnDef<Categories>[] = [
  {
    accessorKey: "select",
    id: "select",
    header: ({ table }) => <DataTableHeaderCheckBox table={table} />,
    cell: ({ row }) => <DataTableContentCheckBox row={row} />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="flex justify-center"
        column={column}
        title="Name"
        options={{ hide: true }}
      />
    ),
    cell: ({ row }) => <CategoryIconAndNameColumn row={row} />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status"
        options={{ up: true, down: true, hide: true }}
      />
    ),
  },
  {
    accessorKey: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        options={{ hide: true }}
      />
    ),
    cell: ({ row }) => (
      <DataTableRowMenu<Categories> row={row} label={"category"}>
        <DeleteCategoryDialog id={row.original._id} />
      </DataTableRowMenu>
    ),
  },
];
