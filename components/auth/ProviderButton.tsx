import Image from "next/image";
import React from "react";

const ProviderButton = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="flex gap-2 pl-[30%] mb-4 pr-4 py-2 bg-grayscale-300 rounded-md cursor-pointer items-center shadow-[0px_0px_3px] shadow-grayscale-600 ">
      <div className=" relative">
        <Image src={icon} alt="" width={32} height={32} objectFit="cover" />
      </div>
      <span className="text-base font-medium text-grayscale-700 ">{title}</span>
    </div>
  );
};

export default ProviderButton;
