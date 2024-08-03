"use client";
import { ProductType } from "@/redux/slices/productsSlice";

const colors = ["purple", "green", "blue", "pink"];

const ProductColorOptions = ({
  product,
  checkedColors,
  onClick,
}: {
  product?: ProductType | null;
  checkedColors?: string[];
  onClick?: (value: string) => void;
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-2 text-base font-medium text-grayscale-900 my-3">
        <span className=" ">Colors :</span>
        {/* <span className=" ">Green</span> */}
      </div>

      <div className=" flex gap-2">
        {colors?.map((c, i) => {
          return (
            <button
              onClick={() => {
                onClick?.(c);
              }}
              className={` w-6 h-6 shadow-[0_0_3px] shadow-grayscale-400 rounded-full ${
                checkedColors?.includes(c)
                  ? " border-[3px] border-white outline outline-1  "
                  : ""
              }`}
              key={i}
              style={{ backgroundColor: c, outlineColor: c }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColorOptions;
