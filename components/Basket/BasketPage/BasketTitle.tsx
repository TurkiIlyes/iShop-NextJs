"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearBasket } from "@/redux/slices/basketSlice";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BasketTitle = () => {
  const dispatch = useAppDispatch();

  const [isLoading, executeCreateOrder] = useApiCallWithToast({
    apiCallFunction: () => dispatch(clearBasket()),
    handleSuccess: () => {},
    messages: {
      loading: "Clearing basket...",
      success: "Basket cleared!",
      error: "Could not clear basket.",
    },
  });

  const productsCount = useAppSelector(
    (state) => state.basket.basket?.items.length
  );

  return (
    <div className=" border-b-[1px] border-grayscale-600">
      <h1 className=" text-3xl text-grayscale-900 font-semibold my-4">
        Basket
      </h1>
      <div className=" flex justify-between">
        <span className=" text-sm text-grayscale-700 font-medium">
          {productsCount || 0} products in the basket
        </span>
        <button type="button" disabled={isLoading} onClick={executeCreateOrder}>
          <FontAwesomeIcon icon={faTrashCan} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default BasketTitle;
