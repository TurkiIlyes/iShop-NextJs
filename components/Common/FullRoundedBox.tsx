import React from "react";

const FullRoundedBox = ({ time, title }: { time: string; title: string }) => {
  return (
    <div className="flex flex-col bg-grayscale-200 w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] items-center justify-center rounded-full">
      <span className="text-base lg:text-lg font-semibold">{time}</span>
      <span className="text-[10px] lg:text-xs font-semibold text-success-900 capitalize">
        {title}
      </span>
    </div>
  );
};

export default FullRoundedBox;
