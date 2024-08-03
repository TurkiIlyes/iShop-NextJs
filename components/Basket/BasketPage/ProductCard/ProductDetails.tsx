import ProductPricing from "./ProductPricing";
import ProductDescription from "./ProductDescription";
import ProductTitle from "./ProductTitle";
import { ProductType } from "@/redux/slices/productsSlice";

const ProductDetails = ({
  product,
  quantity,
  id,
}: {
  product: ProductType;
  quantity: number;
  id: string;
}) => {
  return (
    <div className=" w-full py-2 ">
      <span className=" text-lg text-grayscale-900 font-semibold capitalize">
        {product.title}
      </span>

      <ProductDescription />
      <ProductPricing
        price={product.price}
        priceAfterDiscount={product.priceAfterDiscount}
        quantity={quantity}
        id={product._id}
      />
    </div>
  );
};

export default ProductDetails;
