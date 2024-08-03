"use client";
import { useAppDispatch } from "@/redux/hooks";
import { removeItemFromBasket } from "@/redux/slices/basketSlice";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductTitle = ({ title, id }: { title: string; id: string }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeItemFromBasket(id));
  };

  return (
    <div className=" flex justify-between items-center">
      <span className=" text-lg text-grayscale-900 font-semibold capitalize">
        {title}
      </span>
      <div className=" flex gap-4 ">
        <button type="button">
          <FontAwesomeIcon
            icon={faHeart}
            className="w-4 h-4 text-gradientAccent-900"
          />
        </button>

        <button type="button" onClick={handleDelete}>
          <FontAwesomeIcon
            icon={faXmark}
            className="w-4 h-4 text-customRed-900"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductTitle;
