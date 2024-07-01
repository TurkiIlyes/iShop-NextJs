"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./CustomTableColumns/DataTableColumnHeader";
import DataTableRowMenu from "./CustomTableColumns/DataTableRowMenu";
import DataTableHeaderCheckBox from "./CustomTableColumns/DataTableHeaderCheckBox";
import DataTableContentCheckBox from "./CustomTableColumns/DataTableContentCheckBox";
export type Orders = {
  id: string;
  customerName: string;
  date: string;
  status: "DELIVERED" | "CANCELED";
  products: number;
  amount: number;
};

export const columns: ColumnDef<Orders>[] = [
  {
    id: "select",
    header: ({ table }) => <DataTableHeaderCheckBox table={table} />,
    cell: ({ row }) => <DataTableContentCheckBox row={row} />,
  },
  {
    accessorKey: "customerName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Customer Name"
        options={{ hide: true }}
      />
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Date"
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
    accessorKey: "products",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Products"
        options={{ up: true, down: true, hide: true }}
      />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Amount"
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
