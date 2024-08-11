"use client";
import ProductCard from "@/components/Product/ProductCard/ProductCard";
import Paginator from "@/components/Common/Paginator";

import { useAppSelector } from "@/redux/hooks";
import OrderBy from "./OrderBy";
const ProductsList = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const products = useAppSelector((state) => state.products.products);

  return (
    <div className=" w-full lg:w-3/4 h-full ">
      <div className=" flex flex-col lg:bg-grayscale-200 rounded-xl ">
        <div className=" px-6 py-4 ">
          <OrderBy />
        </div>
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:px-6 py-2 ">
          {products.map((e, i) => {
            return (
              <ProductCard
                key={i}
                id={e._id}
                title={e.title}
                discount={e.discount}
                price={e.price}
                priceAfterDiscount={e.priceAfterDiscount}
                imageCover={e.imageCover}
                ratingsAverage={e.ratingsAverage}
                ratingsQuantity={e.ratingsQuantity}
              />
            );
          })}
        </div>
        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default ProductsList;
