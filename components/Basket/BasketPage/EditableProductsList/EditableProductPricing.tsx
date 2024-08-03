import QuantitySelector from "../ProductCard/QuantitySelector";

const EditableProductPricing = ({
  price,
  priceAfterDiscount,
  id,
}: {
  price: number;
  priceAfterDiscount?: number;
  id: string;
}) => {
  return (
    <div className=" mt-3 flex justify-between items-center">
      <QuantitySelector id={id} />

      <div className=" flex items-center gap-2">
        {priceAfterDiscount && (
          <span className=" text-sm text-grayscale-900 font-semibold">
            {priceAfterDiscount}
          </span>
        )}

        <span className="line-through text-xs text-grayscale-900 font-medium">
          {price}
        </span>
      </div>
    </div>
  );
};

export default EditableProductPricing;
