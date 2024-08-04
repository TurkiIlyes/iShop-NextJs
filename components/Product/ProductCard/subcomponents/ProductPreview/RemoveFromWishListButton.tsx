"use client";
import { useAppDispatch } from "@/redux/hooks";
import { removeFromWishList } from "@/redux/wishList/wishListThunks";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RemoveFromWishListButton = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [isLoading, executeRemoveFromWishList] = useApiCallWithToast({
    apiCallFunction: () => dispatch(removeFromWishList(id)),
    handleSuccess: () => {},
    messages: {
      loading: "Removing from wish list...",
      success: "Item removed from wish list!",
      error: "Could not remove item from wish list.",
    },
  });
  return (
    <button
      disabled={isLoading}
      onClick={executeRemoveFromWishList}
      className=" w-7 h-7 flex justify-center items-center bg-white hover:bg-grayscale-900 text-grayscale-900 hover:text-white shadow-md shadow-grayscale-500 rounded-full"
    >
      <FontAwesomeIcon icon={faTrashAlt} size="sm" />
    </button>
  );
};

export default RemoveFromWishListButton;
