import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import SectionNavBar from "../utils/SectionNavBar";
import SectionHeader from "../utils/SectionHeader";
import PrimaryButton from "../utils/PrimaryButton";
import ProductSwiper from "./ProductSwiper";

const AllProductsSection = ({
  data,
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
}) => {
  return (
    <div className=" container  ">
      <SectionHeader title="Categories" description="Explore Our Products" />
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((e, i) => {
          return (
            <ProductCard
              key={i}
              title={e.title}
              discount={e.discount}
              price={e.price}
              priceAfterDiscount={e.priceAfterDiscount}
              image={e.img}
              rating={e.rating}
              ratingCount={e.ratingCount}
            />
          );
        })}
      </div>
      <div className="flex justify-center py-8">
        <PrimaryButton title="View All Products" />
      </div>
    </div>
  );
};

export default AllProductsSection;
