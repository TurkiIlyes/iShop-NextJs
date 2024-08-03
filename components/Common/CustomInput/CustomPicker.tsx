"use client";

import { useState } from "react";
import CustomComboBox from "../CustomComboBox";
import CustomInputPicker from "./CustomSelectedPicker";
import CustomSelectedPicker from "./CustomSelectedPicker";

const CustomPicker = ({
  label,
  selectedData,
  handleChange,
  data,
}: {
  label: string;
  selectedData: { el: string; quantity: number }[];
  handleChange: (data: { el: string; quantity: number }, i?: number) => void;
  data: { value: string; label: string }[];
}) => {
  const handlePickerOpen = (s: string) => {
    if (selectedData?.every((e) => e.el !== s)) {
      handleChange({ el: s, quantity: 0 });
    }
  };

  console.log(data);

  return (
    <div className=" w-full px-4 pb-2 shadow-[0px_0px_2px] shadow-customBlue-800  rounded-md">
      <span className=" text-[10px] font-semibold text-customBlue-800 opacity-70 ">
        {label}
      </span>
      <div className="relative grid grid-cols-7 gap-2">
        {selectedData?.map((e, i) => (
          <CustomSelectedPicker
            label={label}
            key={i}
            data={data}
            quantity={e.quantity}
            i={i}
            handleChange={handleChange}
            el={e.el}
          />
        ))}
        <div className="w-full">
          <CustomComboBox
            label={label}
            data={data}
            onChange={(s) => handlePickerOpen(s)}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomPicker;
