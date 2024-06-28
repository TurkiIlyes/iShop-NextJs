import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import SectionNavBar from "../utils/SectionNavBar";
import SectionHeader from "../utils/SectionHeader";
import PrimaryButton from "../utils/PrimaryButton";
import ProductSwiper from "./ProductSwiper";

const ProductSection = ({
  data,
  prevEl,
  nextEl,
  left,
  right,
  buttom,
}: {
  data: {
    title: string;
    discount: number;
    price: number;
    priceAfterDiscount: number;
    img: string;
    rating: number;
    ratingCount: number;
  }[];
  prevEl: string;
  nextEl: string;
  left?: React.ReactNode;
  right?: string;
  buttom?: string;
}) => {
  return (
    <div className=" container  ">
      <SectionHeader
        title="Categories"
        description="Flash Sales"
        right={right && <PrimaryButton title={right} />}
        left={left}
      />
      <SectionNavBar prevEl={prevEl} nextEl={nextEl} />
      <div className="w-full h-full ">
        <ProductSwiper data={data} prevEl={prevEl} nextEl={nextEl} />
      </div>
      {buttom && (
        <div className="flex justify-center py-8">
          <PrimaryButton title={`${buttom}`} />
        </div>
      )}
    </div>
  );
};

export default ProductSection;
