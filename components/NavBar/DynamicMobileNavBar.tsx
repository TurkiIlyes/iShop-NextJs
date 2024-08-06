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

const DynamicMobileNavBar = () => {
  const path = usePathname();
  const isDashboard = path.includes("/dashboard");
  return (
    <div className=" md:hidden">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faList} className=" w-5 h-5" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] ">
          {isDashboard ? <DashboardSideBar /> : <CategorySideBar />}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DynamicMobileNavBar;
