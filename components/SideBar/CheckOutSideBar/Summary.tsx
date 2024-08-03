const Summary = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className=" text-lg text-grayscale-800 font-semibold">Total :</span>
      <span className=" text-4xl text-grayscale-900 font-semibold">
        12,99 $US
      </span>
      <span className=" line-through text-base text-grayscale-800 font-medium">
        69,99 $US
      </span>
      <span className=" text-base text-grayscale-900 font-medium">
        81 % de réduction
      </span>
    </div>
  );
};

export default Summary;
