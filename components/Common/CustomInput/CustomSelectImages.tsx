"use client";
import { useState } from "react";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomSelectImages = ({
  label,
  imageCover,
  images,
  handleImageChange,
}: {
  label: string;
  imageCover: string;
  images: string[];
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => void;
}) => {
  return (
    <div className="w-full flex gap-4 items-center">
      <div className="flex flex-col gap-2 w-full pt-2 pb-4 px-4 shadow-[0px_0px_2px] shadow-customBlue-800 rounded-md">
        <span className="text-[10px] font-semibold text-customBlue-800 opacity-70">
          {label}
        </span>

        <div className="w-full grid gap-3">
          <div className="relative flex flex-col gap-4 justify-center items-center w-full aspect-1 bg-grayscale-300 border-grayscale-700 border-dashed border-[1px] shadow-[0px_0px_1px] shadow-customBlue-800 rounded-sm">
            <input
              type="file"
              className="absolute w-full h-full z-10 opacity-0 cursor-pointer"
              onChange={(e) => handleImageChange(e)}
            />
            {imageCover ? (
              <img
                src={imageCover}
                alt="Cover"
                className="w-full h-full object-cover rounded-sm"
              />
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faImage}
                  className="h-14 w-14 text-grayscale-700 opacity-50"
                />
                <p className="text-sm font-medium text-grayscale-700 opacity-50">
                  Drop your image here, or browse
                </p>
              </>
            )}
          </div>
          <div className="w-full grid grid-cols-5 gap-3">
            {new Array(5).fill("").map((_, i) => (
              <div
                key={i}
                className="relative flex justify-center items-center w-full aspect-1 bg-grayscale-300 border-grayscale-700 border-dashed border-[1px] shadow-[0px_0px_1px] shadow-customBlue-800 rounded-sm">
                <input
                  type="file"
                  className="absolute w-full h-full z-10 opacity-0 cursor-pointer"
                  onChange={(e) => handleImageChange(e, i)}
                />
                {images[i] ? (
                  <img
                    src={images[i]}
                    alt={`Image ${i}`}
                    className="w-full h-full object-cover rounded-sm"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faImage}
                    className="h-6 w-6 text-grayscale-700 opacity-50"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSelectImages;
