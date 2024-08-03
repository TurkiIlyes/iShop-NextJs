"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addItemToBasket } from "@/redux/slices/basketSlice";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const ProductPurchaseButtons = ({ id }: { id?: string }) => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (id) {
      dispatch(addItemToBasket({ productId: id, quantity: 1 }));
    }
  };

  const handleBuyNow = () => {
    if (id) {
      dispatch(addItemToBasket({ productId: id, quantity: 1 }));
    }
    router.push("/basket");
  };

  return (
    <div className=" flex flex-col gap-4 py-4">
      <button
        onClick={handleAddToCart}
        className=" w-full py-3.5 flex justify-center items-center gap-2 bg-success-900 rounded-lg text-white shadow-[0_0_3px] shadow-grayscale-600"
      >
        <FontAwesomeIcon icon={faPlus} className=" w-3.5 h-3.5" />
        <span className=" text-sm font-medium">Add to Cart</span>
      </button>
      <button
        onClick={handleBuyNow}
        className=" w-full py-3.5 flex justify-center items-center bg-white rounded-lg text-success-900 shadow-[0_0_3px] shadow-grayscale-600"
      >
        <span className=" text-sm font-medium">Buy this Item</span>
      </button>
    </div>
  );
};

export default ProductPurchaseButtons;
