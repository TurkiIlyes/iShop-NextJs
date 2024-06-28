import ProductPurchaseButtons from "./ProductPurchaseButtons";
import ProductColorOptions from "./ProductColorOptions";
import ProductSizeOptions from "./ProductSizeOptions";
import ProductInfo from "./ProductInfo";
import ProductPricing from "./ProductPricing";

const ProductPageDetails = () => {
  return (
    <div className=" py-8 sm:px-10">
      <ProductInfo />
      <ProductPricing />
      <ProductColorOptions />
      <ProductSizeOptions />
      <ProductPurchaseButtons />
    </div>
  );
};

export default ProductPageDetails;
