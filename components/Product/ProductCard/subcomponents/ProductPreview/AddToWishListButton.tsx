"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToWishList } from "@/redux/wishList/wishListThunks";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AddToWishListButton = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [isLoading, executeAddToWishList] = useApiCallWithToast({
    apiCallFunction: () => dispatch(addToWishList(id)),
    handleSuccess: () => {},
    messages: {
      loading: "Adding to wish list...",
      success: "Item added to wish list!",
      error: "Could not add item to wish list.",
    },
  });
  return (
    <button
      disabled={isLoading}
      onClick={executeAddToWishList}
      className=" w-7 h-7 flex justify-center items-center bg-white hover:bg-grayscale-900 text-grayscale-900 hover:text-white shadow-md shadow-grayscale-500 rounded-full"
    >
      <FontAwesomeIcon icon={faHeart} size="sm" />
    </button>
  );
};

export default AddToWishListButton;
