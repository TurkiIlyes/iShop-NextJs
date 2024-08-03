"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ProductCard from "../ProductCard/ProductCard";
import { BasketItemType, getBasket } from "@/redux/slices/basketSlice";
import { useEffect } from "react";
import EditableProductCard from "../EditableProductCard/EditableProductCard";

const EditableProductsList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const basket = useAppSelector((state) => state.basket.basket);

  return (
    <div className=" w-full">
      {basket?.items?.map((item: BasketItemType) => (
        <EditableProductCard
          key={item.productId._id}
          product={item.productId}
          quantity={item.quantity}
          id={item._id}
        />
      ))}
    </div>
  );
};

export default EditableProductsList;
