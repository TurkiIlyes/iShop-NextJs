import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import { ProductType } from "@/redux/slices/productsSlice";

const ProductCard = ({
  product,
  quantity,
  id,
}: {
  product: ProductType;
  quantity: number;
  id: string;
}) => {
  return (
    <div className=" w-full py-2  flex items-center gap-6 border-b-2 border-grayscale-500">
      <ProductImage imageCover={product.imageCover} />
      <ProductDetails product={product} id={id} quantity={quantity} />
    </div>
  );
};
0.0;

export default ProductCard;
