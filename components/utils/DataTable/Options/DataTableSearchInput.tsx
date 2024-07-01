import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "@tanstack/react-table";

const DataTableSearchInput = <TData,>({ table }: { table: Table<TData> }) => {
  return (
    <div className=" flex items-center relative flex-1 bg-slate-50 border-[1px] border-slate-100 shadow-[0px_0px_2px] shadow-slate-100 rounded-sm">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-4 w-4 h-4 text-slate-400"
      />
      <input
        type="text"
        placeholder="Search Customers..."
        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
        className=" w-full h-full px-10 py-2.5 text-sm font-normal placeholder-slate-400 bg-transparent outline-none rounded-sm"
      />
    </div>
  );
};

export default DataTableSearchInput;
