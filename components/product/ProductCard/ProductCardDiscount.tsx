import React from "react";

const ProductCardDiscount = ({discount}: {discount: number}) => {
  return (
    <>
      {discount && (
        <div className="absolute top-4 left-4 py-1.5 px-3 bg-customRed-900 text-xs text-white rounded-sm">
          -{discount}%
        </div>
      )}
    </>
  );
};

export default ProductCardDiscount;
