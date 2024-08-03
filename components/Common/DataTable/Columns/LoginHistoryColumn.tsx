// "use client";

// import { ColumnDef } from "@tanstack/react-table";

// import { DataTableColumnHeader } from "./CustomTableColumns/DataTableColumnHeader";
// import DataTableRowMenu from "./CustomTableColumns/DataTableRowMenu";
// import DataTableHeaderCheckBox from "./CustomTableColumns/DataTableHeaderCheckBox";
// import DataTableContentCheckBox from "./CustomTableColumns/DataTableContentCheckBox";
// export type LoginHistory = {
//   id: string;
//   date: string;
//   ip: string;
//   client: string;
// };

// export const columns: ColumnDef<LoginHistory>[] = [
//   {
//     id: "select",
//     header: ({ table }) => <DataTableHeaderCheckBox table={table} />,
//     cell: ({ row }) => <DataTableContentCheckBox row={row} />,
//   },
//   {
//     accessorKey: "date",
//     header: ({ column }) => (
//       <DataTableColumnHeader
//         column={column}
//         title="Date"
//         options={{ up: true, down: true, hide: true }}
//       />
//     ),
//   },
//   {
//     accessorKey: "ip",
//     header: ({ column }) => (
//       <DataTableColumnHeader
//         column={column}
//         title="IP"
//         options={{ up: true, down: true, hide: true }}
//       />
//     ),
//   },
//   {
//     accessorKey: "client",
//     header: ({ column }) => (
//       <DataTableColumnHeader
//         column={column}
//         title="Client"
//         options={{ up: true, down: true, hide: true }}
//       />
//     ),
//   },
//   {
//     accessorKey: "actions",
//     header: ({ column }) => (
//       <DataTableColumnHeader
//         column={column}
//         title="Actions"
//         options={{ hide: true }}
//       />
//     ),
//     cell: ({ row }) => <DataTableRowMenu row={row} />,
//   },
// ];
