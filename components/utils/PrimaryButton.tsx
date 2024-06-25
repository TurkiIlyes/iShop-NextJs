const PrimaryButton = ({ title }: { title: string }) => {
  return (
    <button className=" py-3 px-12 text-base rounded-sm text-white font-semibold bg-customRed-900">
      {title}
    </button>
  );
};

export default PrimaryButton;
