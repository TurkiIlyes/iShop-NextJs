import Image from "next/image";
import React from "react";
import FullRoundedBox from "../Common/FullRoundedBox";
import SecondaryButton from "../Common/SecondaryButton";

const CategorySection = () => {
  return (
    <div className="container ">
      <div className=" flex max-lg:flex-col-reverse px-8 lg:px-14 py-6 lg:py-14 my-8 bg-darkGrey-900 text-white rounded-md">
        <div className=" w-full lg:w-1/2">
          <span className="text-sm font-semibold text-success-700">
            Categories
          </span>
          <h2 className=" max-lg:text-3xl lg:text-[44px] font-semibold my-6">
            Enhance Your Music Experience
          </h2>
          <div className="flex gap-3 lg:gap-6 text-grayscale-900 mb-10">
            <FullRoundedBox time="05" title="days" />
            <FullRoundedBox time="09" title="houres" />
            <FullRoundedBox time="54" title="minutes" />
            <FullRoundedBox time="18" title="seconds" />
          </div>
          <SecondaryButton title="Buy Now!" />
        </div>
        <div className="flex justify-center w-full lg:w-1/2   relative ">
          <Image
            src="/imgs/jbl.png"
            width={600}
            height={420}
            objectFit="cover"
            alt="jbl"
            className=" max-sm:w-[300px] max-lg:w-[500px] drop-shadow-customGreen"
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
