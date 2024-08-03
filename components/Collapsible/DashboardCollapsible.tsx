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
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardCollapsible = ({
  icon,
  title,
  content,
}: {
  icon: IconProp;
  title: string;
  content: { title: string; link: string; icon?: IconProp }[];
}) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <Collapsible>
      <CollapsibleTrigger
        onClick={() => setOpen(!open)}
        className=" flex justify-between items-center w-full py-3 px-4 text-grayscale-900  hover:bg-grayscale-300 rounded-lg "
      >
        <div className=" flex items-center gap-4 ">
          <FontAwesomeIcon
            icon={icon}
            className=" w-5 h-5  text-grayscale-900"
          />
          <span className=" text-base font-medium ">{title}</span>
        </div>

        {content.length ? (
          open ? (
            <FontAwesomeIcon
              icon={faAngleDown}
              className=" w-3 h-3 text-grayscale-900 "
            />
          ) : (
            <FontAwesomeIcon
              icon={faAngleRight}
              className=" w-3 h-3 text-grayscale-900 "
            />
          )
        ) : null}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {content.map((e, i) => {
          return (
            <Link
              href={e.link}
              key={i}
              className={` w-full flex gap-3 items-center mt-2 py-3 px-7  text-grayscale-900 bg-grayscale-200 hover:bg-grayscale-300 rounded-lg shadow-[0_0_3px] shadow-grayscale-200
              ${path === e.link && " border-[1px] border-grayscale-400 "} `}
            >
              {e.icon && (
                <FontAwesomeIcon icon={e.icon} className=" w-4 h-4 " />
              )}
              <span
                className={` text-xs font-medium ${
                  path === e.link && " font-medium "
                } `}
              >
                {e.title}
              </span>
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DashboardCollapsible;
