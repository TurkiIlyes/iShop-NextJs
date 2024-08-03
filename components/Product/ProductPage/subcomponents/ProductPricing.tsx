import { ProductType } from "@/redux/slices/productsSlice";

const ProductPricing = ({ product }: { product?: ProductType | null }) => {
  return (
    <div className=" flex items-center gap-4 mt-8 mb-14">
      {product?.priceAfterDiscount && (
        <span className="text-4xl font-semibold text-grayscale-900">
          {product?.priceAfterDiscount}
        </span>
      )}

      <span className=" text-base font-semibold text-customRed-900 line-through">
        {product?.price}
      </span>
    </div>
  );
};

export default ProductPricing;
