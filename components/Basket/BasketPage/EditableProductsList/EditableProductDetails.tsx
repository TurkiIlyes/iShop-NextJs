import ProductPricing from "../ProductCard/ProductPricing";
import ProductDescription from "../ProductCard/ProductDescription";
import ProductTitle from "../ProductCard/ProductTitle";
import { ProductType } from "@/redux/slices/productsSlice";
import EditableProductPricing from "./EditableProductPricing";
import EditableProductTitle from "./EditableProductTitle";

const EditableProductDetails = ({
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
      <EditableProductTitle title={product.title} id={id} />

      <ProductDescription />
      <EditableProductPricing
        price={product.price}
        priceAfterDiscount={product.priceAfterDiscount}
        id={product._id}
      />
    </div>
  );
};

export default EditableProductDetails;
