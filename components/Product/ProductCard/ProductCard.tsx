import ProductCardDiscount from "./subcomponents/ProductCardDiscount";
import ProductCardImage from "./subcomponents/ProductCardImage";
import ProductCardInfo from "./subcomponents/ProductCardInfo";
import Link from "next/link";
import ProductPreview from "./subcomponents/ProductPreview";
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
}: props) => {
  return (
    <div className="w-full relative z-0">
      <div className=" group relative w-full overflow-hidden ">
        {discount && <ProductCardDiscount discount={discount} />}
        <ProductCardImage image={imageCover} />
        <ProductPreview id={id} />
        <AddToBasketButton id={id} />
      </div>

      <div className=" h-[110px] md:h-[130px] flex flex-col justify-between py-2 px-2 bg-grayscale-200 ">
        <Link href={`products/${id}`}>
          <span className=" text-sm md:text-base font-semibold  ">{title}</span>
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
