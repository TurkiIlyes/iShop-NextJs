"use client";
import { useAppDispatch } from "@/redux/hooks";
import { removeItemFromBasket } from "@/redux/slices/basketSlice";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditableProductTitle = ({ title, id }: { title: string; id: string }) => {
  const dispatch = useAppDispatch();

  const [isLoading, executeCreateOrder] = useApiCallWithToast({
    apiCallFunction: () => dispatch(removeItemFromBasket(id)),
    handleSuccess: () => {},
    messages: {
      loading: "Removing item...",
      success: "Item removed from basket!",
      error: "Could not remove item.",
    },
  });

  return (
    <div className=" flex justify-between items-center">
      <span className=" text-sm text-grayscale-900 font-semibold capitalize">
        {title}
      </span>
      <div className=" flex gap-4 ">
        <button type="button">
          <FontAwesomeIcon
            icon={faHeart}
            className="w-4 h-4 text-gradientAccent-900"
          />
        </button>

        <button type="button" disabled={isLoading} onClick={executeCreateOrder}>
          <FontAwesomeIcon
            icon={faXmark}
            className="w-4 h-4 text-customRed-900"
          />
        </button>
      </div>
    </div>
  );
};

export default EditableProductTitle;
