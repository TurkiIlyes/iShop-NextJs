"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const opationsData: string[] = ["test", "test2"];

const OrderBy = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className=" hidden lg:flex items-center ml-auto px-6 py-2
         text-sm text-white font-medium placeholder-grayscale-700 outline-none bg-success-900 rounded-full 
        "
        >
          <FontAwesomeIcon icon={faSliders} className="mr-2 h-4 w-4" />
          View
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {opationsData.map((item, i) => {
          return (
            <DropdownMenuCheckboxItem
              key={i}
              className="capitalize"
              //   checked={column.getIsVisible()}
              //   onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {item}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderBy;
