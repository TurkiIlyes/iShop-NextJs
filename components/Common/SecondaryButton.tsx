const SecondaryButton = ({ title }: { title: string }) => {
  return (
    <button className=" py-4 px-12 text-base rounded-sm text-white font-semibold bg-success-700">
      {title}
    </button>
  );
};

export default SecondaryButton;
