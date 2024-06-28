import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const links = [
  {
    title: "Dashboard",
  },
  {
    title: "Dashboard",
  },
  {
    title: "Dashboard",
  },
  {
    title: "Dashboard",
  },
  {
    title: "Dashboard",
  },
  {
    title: "Dashboard",
  },
  {
    title: "Dashboard",
  },
  {
    title: "Dashboard",
  },
  {
    title: "Dashboard",
  },
];

const DashboardSideBar = () => {
  return (
    <div className="hidden lg:flex flex-col gap-2 h-full py-8 border-r-[1px] border-grayscale-500  text-grayscale-900">
      {links.map((l, i) => {
        return (
          <div
            key={i}
            className="flex items-center gap-4 w-full py-3 pl-2 pr-4 text-left text-base font-medium cursor-pointer">
            <FontAwesomeIcon icon={faHouse} className=" w-6 h-6 " />
            <span className="">{l.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardSideBar;
