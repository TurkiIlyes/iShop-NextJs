"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getBasket, updateBasketItem } from "@/redux/slices/basketSlice";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const QuantitySelector = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(
    (state) =>
      state.basket.basket?.items?.find((item) => item.productId._id === id)
        ?.quantity
  );

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch, quantity]);

  const handleMinus = () => {
    if (quantity) {
      dispatch(updateBasketItem({ productId: id, newQuantity: quantity - 1 }));
    }
  };

  const handlePlus = () => {
    if (quantity) {
      dispatch(updateBasketItem({ productId: id, newQuantity: quantity + 1 }));
    }
  };
  return (
    <div className=" w-fit h-5 py-3.5 px-2 flex items-center gap-2 border-2 border-grayscale-500">
      <button type="button" onClick={handleMinus}>
        <FontAwesomeIcon icon={faMinus} className="w-2 text-grayscale-600 " />
      </button>
      <input
        type="text"
        name=""
        id=""
        value={quantity}
        className="w-6 h-4 text-sm text-grayscale-900 font-semibold bg-grayscale-200 border-none rounded-sm outline-none text-center "
      />
      <button type="button" onClick={handlePlus}>
        <FontAwesomeIcon icon={faPlus} className="w-2 text-grayscale-600 " />
      </button>
    </div>
  );
};

export default QuantitySelector;
