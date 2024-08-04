import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddToWishListButton from "./AddToWishListButton";
import Link from "next/link";
import RemoveFromWishListButton from "./RemoveFromWishListButton";

const ProductPreview = ({
  id,
  addedToWishList = false,
}: {
  id: string;
  addedToWishList?: boolean;
}) => {
  return (
    <div className=" absolute right-2 top-4 opacity-0 group-hover:opacity-100 flex transition-all duration-500 flex-col gap-2 text-grayscale-900 ">
      {addedToWishList ? (
        <RemoveFromWishListButton id={id} />
      ) : (
        <AddToWishListButton id={id} />
      )}

      <Link href={`products/${id}`}>
        <button className=" w-7 h-7 flex justify-center items-center bg-white hover:bg-grayscale-900 text-grayscale-900 hover:text-white shadow-md shadow-grayscale-500 rounded-full">
          <FontAwesomeIcon icon={faEye} size="sm" />
        </button>
      </Link>
    </div>
  );
};

export default ProductPreview;
