"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./CustomTableColumns/DataTableColumnHeader";
import DataTableRowMenu from "./CustomTableColumns/DataTableRowMenu";
import DataTableHeaderCheckBox from "./CustomTableColumns/DataTableHeaderCheckBox";
import DataTableContentCheckBox from "./CustomTableColumns/DataTableContentCheckBox";
import IconAndLabelColumn from "./CustomTableColumns/IconAndLabelColumn";
import DeleteProductDialog from "../../Dialog/DeleteProductDialog";
export type Products = {
  _id: string;
  imageCover?: string;
  title: string;
  price: number;
  quantity: number;
  status: "InStock" | "OutOfStock" | "Discontinued";
};

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "select",
    id: "select",
    header: ({ table }) => <DataTableHeaderCheckBox table={table} />,
    cell: ({ row }) => <DataTableContentCheckBox row={row} />,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="flex justify-center"
        column={column}
        title="Title"
        options={{ hide: true }}
      />
    ),
    cell: ({ row }) => <IconAndLabelColumn row={row} />,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Price"
        options={{ up: true, down: true, hide: true }}
      />
    ),
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Quantity"
        options={{ up: true, down: true, hide: true }}
      />
    ),
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
      <DataTableRowMenu<Products> row={row} label={"product"}>
        <DeleteProductDialog id={row.original._id} />
      </DataTableRowMenu>
    ),
  },
];
