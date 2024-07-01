"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./CustomTableColumns/DataTableColumnHeader";
import DataTableRowMenu from "./CustomTableColumns/DataTableRowMenu";
import DataTableHeaderCheckBox from "./CustomTableColumns/DataTableHeaderCheckBox";
import DataTableContentCheckBox from "./CustomTableColumns/DataTableContentCheckBox";
export type Customers = {
  id: string;
  name: string;
  email: string;
  orders: number;
  spent: number;
};

export const columns: ColumnDef<Customers>[] = [
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
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Email"
        options={{ up: true, down: true, hide: true }}
      />
    ),
  },
  {
    accessorKey: "orders",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Orders"
        options={{ up: true, down: true, hide: true }}
      />
    ),
  },
  {
    accessorKey: "spent",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Spent"
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
