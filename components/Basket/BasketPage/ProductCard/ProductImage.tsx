const ProductImage = ({ imageCover }: { imageCover: string }) => {
  return (
    <div className="relative flex items-center justify-center w-1/6 aspect-1 bg-grayscale-300 rounded-sm">
      <img src={imageCover} alt="" className="w-5/6 aspect-1" />
    </div>
  );
};

export default ProductImage;
