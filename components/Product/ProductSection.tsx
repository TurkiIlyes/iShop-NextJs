import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import SectionNavBar from "../Common/SectionNavBar";
import SectionHeader from "../Common/SectionHeader";
import PrimaryButton from "../Common/PrimaryButton";
import ProductSwiper from "../Swipers/ProductSwiper";
import { ProductType } from "@/redux/slices/productsSlice";

const ProductSection = ({
  data,
  prevEl,
  nextEl,
  left,
  right,
  buttom,
}: {
  data: ProductType[];
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
