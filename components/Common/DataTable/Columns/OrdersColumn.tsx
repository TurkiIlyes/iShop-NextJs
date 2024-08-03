"use client";
import { memo, useEffect, useState } from "react";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./CustomTableColumns/DataTableColumnHeader";
import DataTableRowMenu from "./CustomTableColumns/DataTableRowMenu";
import DataTableHeaderCheckBox from "./CustomTableColumns/DataTableHeaderCheckBox";
import DataTableContentCheckBox from "./CustomTableColumns/DataTableContentCheckBox";
import formatDate from "@/utils/formatDate";
export type Orders = {
  _id: string;
  email: string;
  createdAt: Date;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  totalPrice: number;
};

const FormattedDate = memo(({ dateString }: { dateString: string }) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(formatDate(dateString));
  }, [dateString]);

  return <span>{formattedDate}</span>;
});

FormattedDate.displayName = "FormattedDate";

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "select",
    id: "select",
    header: ({ table }) => <DataTableHeaderCheckBox table={table} />,
    cell: ({ row }) => <DataTableContentCheckBox row={row} />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Customer Email"
        options={{ hide: true }}
      />
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Date"
        options={{ up: true, down: true, hide: true }}
      />
    ),
    cell: ({ row }) => (
      <FormattedDate dateString={row.original.createdAt.toString()} />
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
    accessorKey: "totalPrice",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="TotalPrice"
        options={{ up: true, down: true, hide: true }}
      />
    ),
    cell: ({ row }) => (
      <span className="">{row.original.totalPrice.toFixed(2)}</span>
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
      <DataTableRowMenu<Orders> row={row} label={"order"}>
        {/* <DeleteCustomerDialog id={row.original._id} /> */}
      </DataTableRowMenu>
    ),
  },
];
