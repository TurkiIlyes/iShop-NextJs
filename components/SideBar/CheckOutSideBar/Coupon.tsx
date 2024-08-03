const Coupon = () => {
  return (
    <div className=" h-10 flex items-center">
      <input
        type="text"
        name=""
        id=""
        placeholder="Coupon code"
        className=" w-2/3 h-full text-sm text-grayscale-900 font-medium border-2 border-grayscale-900 outline-none pl-2"
      />
      <button
        type="button"
        className=" w-1/3 h-full bg-grayscale-900 text-base text-white font-medium capitalize "
      >
        apply
      </button>
    </div>
  );
};

export default Coupon;
