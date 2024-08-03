const CustomButtons = ({
  mainButtonOnCLick,
  secondaryButtonOnCLick,
}: {
  mainButtonOnCLick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  secondaryButtonOnCLick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className=" w-full grid grid-cols-2 gap-3">
      <button
        onClick={mainButtonOnCLick}
        className=" py-2 px-6 bg-success-900 rounded-md text-base font-medium text-white "
      >
        Create
      </button>
      <button
        onClick={secondaryButtonOnCLick}
        className=" py-2 px-6 bg-transparent rounded-md text-base font-medium text-success-900 border-[1px] border-success-900 "
      >
        Reset
      </button>
    </div>
  );
};

export default CustomButtons;
