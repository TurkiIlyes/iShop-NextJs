"use client";

import { useAppDispatch } from "@/redux/hooks";
import { cancelOrder } from "@/redux/slices/ordersSlice";
import { useRouter } from "next/navigation";

const CancelOrderButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleCancelOrder = () => {
    dispatch(cancelOrder(id));
    router.refresh();
  };

  return (
    <button type="button" onClick={handleCancelOrder}>
      <span className=" text-xs text-gradientAccent-800 font-semibold uppercase ">
        Cancel
      </span>
    </button>
  );
};

export default CancelOrderButton;
