"use client";

import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceRange = ({
  onChange,
}: {
  onChange: (value: { min: number; max: number }) => void;
}) => {
  const [values, setValues] = useState([0, 1000]);
  const MIN = 0;
  const MAX = 1000;

  const handleChange = (values: number[]) => {
    setValues(values);
    onChange({ min: values[0], max: values[1] });
  };
  return (
    <Range
      values={values}
      step={1}
      min={MIN}
      max={MAX}
      onChange={(values) => handleChange(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          className=" w-full h-2.5 rounded-sm"
          style={{
            background: getTrackBackground({
              values,
              colors: ["#EFF0F6", "#202C46", "#EFF0F6"],
              min: MIN,
              max: MAX,
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className="w-5 h-5 bg-customRed-900 rounded-full shadow-[0_0_2px] shadow-grayscale-400 border-none outline-none"
        ></div>
      )}
    />
  );
};

export default PriceRange;
