import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ProductCard from "../ProductCard/ProductCard";
import { BasketItemType, getBasket } from "@/redux/slices/basketSlice";
import { fetchBasket } from "@/utils/Api/basketApi";
import { useEffect } from "react";

const ProductsList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);
  const basket = useAppSelector((state) => state.basket.basket);
  // const basket = await fetchBasket();

  return (
    <div className=" w-full">
      {basket?.items?.map((item: BasketItemType) => (
        <ProductCard
          key={item.productId._id}
          product={item.productId}
          quantity={item.quantity}
          id={item._id}
        />
      ))}
    </div>
  );
};

export default ProductsList;
