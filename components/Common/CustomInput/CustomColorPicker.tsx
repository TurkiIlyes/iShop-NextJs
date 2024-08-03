"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import ColorPicker from "react-pick-color";

const CustomColorPicker = ({
  label,
  colors,
  handleColorChange,
}: {
  label: string;
  colors: { color: string; quantity: number }[];
  handleColorChange: (
    color: { color: string; quantity: number },
    i?: number
  ) => void;
}) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [color, setColor] = useState<{ color: string; quantity: number }>({
    color: "",
    quantity: 0,
  });

  const colorPickerRef = useRef<HTMLDivElement>(null);

  const handleColorSelect = (i: number) => {
    setOpenPicker(false);
    handleColorChange(colors[i], i);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        if (color.color) {
          handleColorChange(color);
          setColor({
            color: "",
            quantity: 0,
          });
        }
        setOpenPicker(false);
      }
    };

    if (openPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPicker, color]);

  return (
    <div className=" w-full px-4 pb-2 shadow-[0px_0px_2px] shadow-customBlue-800  rounded-md">
      <span className=" text-[10px] font-semibold text-customBlue-800 opacity-70 ">
        {label}
      </span>
      <div className="relative grid grid-cols-8 gap-2">
        {colors.map((c, i) => {
          return (
            <button
              className=" w-full aspect-1 shadow-[0_0_3px] shadow-grayscale-400 rounded-full "
              key={i}
              style={{ backgroundColor: c.color, outlineColor: c.color }}
              onClick={() => handleColorSelect(i)}></button>
          );
        })}
        <button
          className=" flex items-center justify-center w-full aspect-1 bg-gradientSecondary-700 shadow-[0_0_3px] shadow-gradientSecondary-700 rounded-full border-[3px] border-white outline outline-gradientSecondary-700 outline-1 "
          onClick={() => setOpenPicker(true)}>
          <FontAwesomeIcon icon={faPlus} className=" w-5 h-5 text-white " />
        </button>
        {openPicker && (
          <div ref={colorPickerRef} className="absolute left-0 bottom-0 z-20">
            <ColorPicker
              onChange={(color) => setColor({ color: color.hex, quantity: 2 })}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomColorPicker;
