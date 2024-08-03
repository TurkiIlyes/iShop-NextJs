import { ProductType } from "@/redux/slices/productsSlice";
import EditableProductDetails from "../EditableProductsList/EditableProductDetails";
import EditableProductImage from "../EditableProductsList/EditableProductImage";

const EditableProductCard = ({
  product,
  quantity,
  id,
}: {
  product: ProductType;
  quantity: number;
  id: string;
}) => {
  return (
    <div className=" w-full py-1  flex items-center gap-3 border-b-2 border-grayscale-500">
      <EditableProductImage imageCover={product.imageCover} />
      <EditableProductDetails product={product} id={id} quantity={quantity} />
    </div>
  );
};
0.0;

export default EditableProductCard;
