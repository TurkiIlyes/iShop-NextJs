import React from "react";
import DataTable from "../../utils/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import PanelHeader from "./PanelHeader";

const DisplayPanel = <TData, TValue>({
  title,
  columns,
  data,
}: {
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}) => {
  return (
    <div className=" flex flex-col gap-8 py-6">
      <PanelHeader title={title} />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DisplayPanel;
