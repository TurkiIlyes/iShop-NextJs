const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductSizeOptions = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2 text-base font-medium text-grayscale-900 my-3">
        <span className=" ">Size :</span>
        <span className=" ">M</span>
      </div>

      <div className=" flex gap-2">
        {sizes.map((s, i) => {
          return (
            <div
              className={`w-8 h-8 flex items-center justify-center shadow-[0_0_3px] shadow-grayscale-600 rounded-sm ${
                i === 0
                  ? "bg-grayscale-900 text-white border-[3px]  border-white outline outline-1 outline-grayscale-900 shadow-grayscale-800"
                  : " bg-grayscale-400 text-grayscale-900"
              }`}
              key={i}>
              <span className=" text-xs font-medium ">{s}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSizeOptions;
