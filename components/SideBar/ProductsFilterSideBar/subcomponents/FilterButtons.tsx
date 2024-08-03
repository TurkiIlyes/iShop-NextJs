import React from "react";

const FilterButtons = ({
  handleSubmit,
  handleReset,
}: {
  handleSubmit: () => void;
  handleReset: () => void;
}) => {
  return (
    <div className=" flex gap-4">
      <button
        onClick={handleSubmit}
        className=" py-2 px-6 bg-customRed-900 rounded-md text-base font-medium text-white "
      >
        Filter
      </button>
      <button
        onClick={handleReset}
        className=" py-2 px-6 bg-transparent rounded-md text-base font-medium text-customRed-900 "
      >
        Reset
      </button>
    </div>
  );
};

export default FilterButtons;
