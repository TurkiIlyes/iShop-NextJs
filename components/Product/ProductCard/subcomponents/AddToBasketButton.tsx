"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addItemToBasket } from "@/redux/slices/basketSlice";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";

const AddToBasketButton = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const [isLoading, executeCreateOrder] = useApiCallWithToast({
    apiCallFunction: () =>
      dispatch(addItemToBasket({ productId: id, quantity: 1 })),
    handleSuccess: () => {},
    messages: {
      loading: "Adding to basket...",
      success: "Item added to basket!",
      error: "Could not add item to basket.",
    },
  });
  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={executeCreateOrder}
      className=" z-10 absolute right-0 -bottom-full group-hover:bottom-0 w-full py-1.5 text-center transition-all duration-500 bg-grayscale-900 text-base text-white font-medium "
    >
      Add To Basket
    </button>
  );
};

export default AddToBasketButton;
