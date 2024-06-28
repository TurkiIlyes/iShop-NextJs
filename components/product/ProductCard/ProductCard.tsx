import ProductCardRating from "./ProductCardRating";
import ProductCardDiscount from "./ProductCardDiscount";
import ProductCardImage from "./ProductCardImage";
import ProductCardInfo from "./ProductCardInfo";

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
      <ProductCardDiscount discount={discount} />
      <ProductCardImage image={image} />

      <div className=" h-1/3 p-4 bg-grayscale-200 ">
        <ProductCardInfo
          title={title}
          price={price}
          priceAfterDiscount={priceAfterDiscount}
        />
        <ProductCardRating rating={rating} ratingCount={ratingCount} />
      </div>
    </div>
  );
};

export default ProductCard;
