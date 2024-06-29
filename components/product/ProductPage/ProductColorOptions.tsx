const colors = ["purple", "green", "blue", "pink"];

const ProductColorOptions = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2 text-base font-medium text-grayscale-900 my-3">
        <span className=" ">Color :</span>
        <span className=" ">Green</span>
      </div>

      <div className=" flex gap-2">
        {colors.map((c, i) => {
          return (
            <div
              className={` w-6 h-6 shadow-[0_0_3px] shadow-grayscale-400 rounded-full ${
                i === 0 && " border-[3px] border-white outline outline-1  "
              }`}
              key={i}
              style={{ backgroundColor: c, outlineColor: c }}></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColorOptions;
