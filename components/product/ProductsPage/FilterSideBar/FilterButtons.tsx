import React from "react";

const FilterButtons = () => {
  return (
    <div className=" flex gap-4">
      <button className=" py-2 px-6 bg-customRed-900 rounded-md text-base font-medium text-white ">
        Filter
      </button>
      <button className=" py-2 px-6 bg-transparent rounded-md text-base font-medium text-customRed-900 ">
        Reset
      </button>
    </div>
  );
};

export default FilterButtons;
