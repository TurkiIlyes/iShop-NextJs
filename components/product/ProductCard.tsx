import Image from "next/image";
import RatingStars from "../utils/RatingStars";

interface props {
  title: string;
  discount: number;
  price: number;
  priceAfterDiscount: number;
  image: string;
  rating: number;
  ratingCount: number;
}

const ProductCard = ({
  title,
  discount,
  price,
  priceAfterDiscount,
  image,
  rating,
  ratingCount,
}: props) => {
  return (
    <div className="w-full h-[380px] relative">
      {discount && (
        <div className="absolute top-4 left-4 py-1.5 px-3 bg-customRed-900 text-xs text-white rounded-sm">
          -{discount}%
        </div>
      )}

      <div className=" flex items-center justify-center h-2/3 bg-grayscale-400 rounded-sm">
        <div className=" relative ">
          <Image
            src={image}
            width={170}
            height={170}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <div className=" h-1/3 p-4 bg-grayscale-200 ">
        <span className=" text-base font-semibold">{title}</span>

        <div className=" my-2 text-base font-semibold">
          <span className=" text-customRed-900">${priceAfterDiscount}</span>
          <span className=" ml-2 line-through">${price}</span>
        </div>

        <div className="flex items-center gap-2">
          <RatingStars rating={rating} />

          <span className=" text-sm font-semibold">({ratingCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
