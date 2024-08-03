import QuantitySelector from "./QuantitySelector";

const ProductPricing = ({
  price,
  priceAfterDiscount,
  quantity,
  id,
}: {
  price: number;
  priceAfterDiscount?: number;
  quantity: number;
  id: string;
}) => {
  return (
    <div className=" mt-3 flex justify-between items-center">
      <span className=" text-sm text-grayscale-800 font-semibold">
        Quantity : {quantity}
      </span>

      <div className=" flex items-center gap-2">
        {priceAfterDiscount && (
          <span className=" text-xl text-grayscale-900 font-semibold">
            {priceAfterDiscount}
          </span>
        )}

        <span className="line-through text-sm text-grayscale-900 font-medium">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProductPricing;
