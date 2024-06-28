import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductPageDetails from "@/components/product/ProductPage/ProductPageDetails";
import React from "react";

const page = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ProductImageGallery />
        <ProductPageDetails />
      </div>
    </div>
  );
};

export default page;
