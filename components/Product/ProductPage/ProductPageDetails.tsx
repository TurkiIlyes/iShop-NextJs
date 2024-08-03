import ProductPurchaseButtons from "./subcomponents/ProductPurchaseButtons";
import ProductColorOptions from "./subcomponents/ProductColorOptions";
import ProductSizeOptions from "./subcomponents/ProductSizeOptions";
import ProductInfo from "./subcomponents/ProductInfo";
import ProductPricing from "./subcomponents/ProductPricing";
import { ProductType } from "@/redux/slices/productsSlice";

const ProductPageDetails = ({ product }: { product?: ProductType | null }) => {
  return (
    <div className=" py-8 sm:px-10">
      <ProductInfo product={product} />
      <ProductPricing product={product} />
      <ProductColorOptions product={product} />
      <ProductSizeOptions product={product} />
      <ProductPurchaseButtons id={product?._id} />
    </div>
  );
};

export default ProductPageDetails;
