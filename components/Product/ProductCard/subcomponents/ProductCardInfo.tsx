import React from "react";
import ProductCardRating from "./ProductCardRating";

const ProductCardInfo = ({
  title,
  price,
  priceAfterDiscount,
  ratingsAverage,
  ratingsQuantity,
}: {
  title: string;
  price: number;
  priceAfterDiscount?: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
}) => {
  return (
    <div className=" flex flex-col gap-1 md:gap-2">
      <div>
        {priceAfterDiscount && (
          <span className=" text-sm md:text-base font-semibold text-customRed-900">
            {priceAfterDiscount} DT
          </span>
        )}

        <span className=" ml-2 text-xs md:text-sm font-medium line-through">
          {price} DT
        </span>
      </div>
      <ProductCardRating
        ratingsAverage={ratingsAverage}
        ratingsQuantity={ratingsQuantity}
      />
    </div>
  );
};

export default ProductCardInfo;
