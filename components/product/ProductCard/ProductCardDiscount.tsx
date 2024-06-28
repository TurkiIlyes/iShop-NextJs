const ProductCardDiscount = ({ discount }: { discount: number }) => {
  return (
    <div className="absolute top-4 left-4 z-10 py-1.5 px-3 bg-customRed-900 text-xs text-white rounded-sm">
      -{discount}%
    </div>
  );
};

export default ProductCardDiscount;
