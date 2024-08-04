"use client";
import { useAppDispatch } from "@/redux/hooks";
import { clearWishList } from "@/redux/wishList/wishListThunks";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClearWishListButton = () => {
  const dispatch = useAppDispatch();
  const [isLoading, executeClearWishList] = useApiCallWithToast({
    apiCallFunction: () => dispatch(clearWishList()),
    handleSuccess: () => {},
    messages: {
      loading: "Clearing wish list...",
      success: "Wish list cleared!",
      error: "Could not clear wish list.",
    },
  });
  return (
    <button type="button" disabled={isLoading} onClick={executeClearWishList}>
      <FontAwesomeIcon
        icon={faTrashAlt}
        size="1x"
        className=" text-grayscale-600 "
      />
    </button>
  );
};

export default ClearWishListButton;
