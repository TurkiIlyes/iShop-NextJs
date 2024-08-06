import ProductCardDiscount from "./subcomponents/ProductCardDiscount";
import ProductCardImage from "./subcomponents/ProductCardImage";
import ProductCardInfo from "./subcomponents/ProductCardInfo";
import Link from "next/link";
import ProductPreview from "./subcomponents/ProductPreview/ProductPreview";
import AddToBasketButton from "./subcomponents/AddToBasketButton";

interface props {
  id: string;
  title: string;
  discount?: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  addedToWishList?: boolean;
}

const ProductCard = ({
  id,
  title,
  discount,
  price,
  priceAfterDiscount,
  imageCover,
  ratingsAverage,
  ratingsQuantity,
  addedToWishList,
}: props) => {
  return (
    <div className=" w-full relative z-0 bg-grayscale-300 border-2 border-grayscale-300 shadow-[0_0_3px] shadow-grayscale-500 rounded-md ">
      <div className=" group relative w-full overflow-hidden ">
        {discount && <ProductCardDiscount discount={discount} />}
        <ProductCardImage image={imageCover} />
        <ProductPreview id={id} addedToWishList={addedToWishList} />
        <AddToBasketButton id={id} />
      </div>

      <div className=" mx-[1px] mb-[1px] h-[110px] md:h-[130px] flex flex-col justify-between py-2.5 px-2.5 bg-grayscale-400 rounded-b-md ">
        <Link href={`products/${id}`}>
          <span className=" text-sm md:text-base font-semibold text-grayscale-900  ">
            {title}
          </span>
        </Link>
        <ProductCardInfo
          title={title}
          price={price}
          priceAfterDiscount={priceAfterDiscount}
          ratingsAverage={ratingsAverage}
          ratingsQuantity={ratingsQuantity}
        />
      </div>
    </div>
  );
};

export default ProductCard;
