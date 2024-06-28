import React from "react";

const ProductCardInfo = ({
  title,
  price,
  priceAfterDiscount,
}: {
  title: string;
  price: number;
  priceAfterDiscount: number;
}) => {
  return (
    <div className="">
      <span className=" text-base font-semibold">{title}</span>
      <div className=" my-2 text-base font-semibold">
        <span className=" text-customRed-900">${priceAfterDiscount}</span>
        <span className=" ml-2 line-through">${price}</span>
      </div>
    </div>
  );
};

export default ProductCardInfo;
