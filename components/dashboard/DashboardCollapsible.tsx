"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const DashboardCollapsible = ({
  icon,
  title,
  content,
}: {
  icon: IconProp;
  title: string;
  content: string[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible>
      <CollapsibleTrigger
        onClick={() => setOpen(!open)}
        className=" flex justify-between items-center w-full py-3 px-4 text-grayscale-800 hover:bg-grayscale-500 rounded-lg">
        <div className=" flex items-center gap-4 ">
          <FontAwesomeIcon icon={icon} className=" w-5 h-5 " />
          <span className=" text-sm font-medium">{title}</span>
        </div>

        {content.length ? (
          open ? (
            <FontAwesomeIcon icon={faAngleDown} className=" w-3 h-3 " />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} className=" w-3 h-3 " />
          )
        ) : null}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {content.map((s, i) => {
          return (
            <div
              key={i}
              className=" w-full py-3 px-7 text-base font-normal text-grayscale-800">
              {s}
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DashboardCollapsible;
