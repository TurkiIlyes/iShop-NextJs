import React from "react";
// lg:w-[72px] lg:h-[72px]
const FullRoundedBox = ({ time, title }: { time: string; title: string }) => {
  return (
    <div className="flex flex-col bg-grayscale-200 w-14 h-14 items-center justify-center rounded-full animate-shadowPulse ">
      <span className="text-base font-semibold ">{time}</span>
      <span className="text-[8px] font-semibold text-primary capitalize">
        {title}
      </span>
    </div>
  );
};

export default FullRoundedBox;
