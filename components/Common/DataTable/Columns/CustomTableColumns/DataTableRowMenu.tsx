"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
const DataTableRowMenu = <T extends { _id: string }>({
  row,
  label,
  children,
}: {
  row: Row<T>;
  label: string;
  children?: React.ReactNode;
}) => {
  const paths = usePathname();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none border-none" asChild>
        <button className=" flex items-center justify-center h-8 w-8 p-0 bg-success-900 bg-opacity-5 shadow-[0_0_2px] shadow-grayscale-600 rounded-md">
          <span className="sr-only">Open menu</span>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="h-4 w-4 text-customBlue-800 text-opacity-80"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(row.original._id)}
          className=" cursor-pointer">
          Copy {label} ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href={`${paths}/edit-${label}/${row.original._id}`}>
          <DropdownMenuItem className=" cursor-pointer">
            Edit {label}
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className=" cursor-pointer"
          onClick={(e) => e.preventDefault()}>
          {children}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowMenu;
