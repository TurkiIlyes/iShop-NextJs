import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DownloadAppBox = ({ title, icon }: { title: string; icon: IconProp }) => {
  return (
    <div className=" flex gap-2 items-center bg-primary py-2 px-2.5 rounded-sm">
      <FontAwesomeIcon icon={icon} className="w-7 h-7 text-white" />
      <div className=" flex flex-col text-xs text-white font-normal ">
        <span className=" text-xs font-normal">Available on the </span>
        <span className=" text-base font-bold">{title}</span>
      </div>
    </div>
  );
};

export default DownloadAppBox;
