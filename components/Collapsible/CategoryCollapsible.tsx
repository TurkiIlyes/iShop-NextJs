"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const CategoryCollapsible = ({
  title,
  content,
}: {
  title: string;
  content: string[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible>
      <CollapsibleTrigger
        onClick={() => setOpen(!open)}
        className=" flex justify-between items-center w-full py-3 pl-2 pr-4 text-left text-base font-medium"
      >
        {title}{" "}
        {content.length ? (
          open ? (
            <FontAwesomeIcon icon={faAngleDown} className=" w-3 h-3 " />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} className=" w-3 h-3 " />
          )
        ) : null}{" "}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {content.map((s, i) => {
          return (
            <div key={i} className=" w-full py-3 px-7 text-base font-normal ">
              {s}
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CategoryCollapsible;
