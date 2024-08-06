"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CategorySideBar from "../SideBar/CategorySideBar/CategorySideBar";
import { usePathname } from "next/navigation";
import DashboardSideBar from "../SideBar/DashboardSideBar";
import CustomSearchInput from "../Common/CustomInput/CustomSearchInput";

const DynamicMobileNavBar = () => {
  const path = usePathname();
  const isDashboard = path.includes("/dashboard");
  const isHome = path === "/";

  return (
    <div className=" md:hidden">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faList} className=" w-5 h-5" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] px-4 pt-14">
          {isDashboard ? (
            <DashboardSideBar />
          ) : (
            <div className=" flex flex-col gap-4">
              <CustomSearchInput />
              <CategorySideBar />
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DynamicMobileNavBar;
