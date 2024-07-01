"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./CustomTableColumns/DataTableColumnHeader";
import DataTableRowMenu from "./CustomTableColumns/DataTableRowMenu";
import DataTableHeaderCheckBox from "./CustomTableColumns/DataTableHeaderCheckBox";
import DataTableContentCheckBox from "./CustomTableColumns/DataTableContentCheckBox";
export type Products = {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  status: "PUBLISHED" | "DRAFT";
  sku: string;
};

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => <DataTableHeaderCheckBox table={table} />,
    cell: ({ row }) => <DataTableContentCheckBox row={row} />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
        options={{ hide: true }}
      />
    ),
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
    accessorKey: "stock",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Stock"
        options={{ up: true, down: true, hide: true }}
      />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Category"
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
    accessorKey: "sku",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Sku"
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
    cell: ({ row }) => <DataTableRowMenu row={row} />,
  },
];
