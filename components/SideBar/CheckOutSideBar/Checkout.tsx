const Checkout = ({
  handleNext,
  currentTab,
  isLoading,
}: {
  handleNext: () => void;
  currentTab: string;
  isLoading: boolean;
}) => {
  const buttonText = currentTab === "paymentDetails" ? "Checkout" : "Next";

  return (
    <button
      disabled={isLoading}
      onClick={handleNext}
      type="button"
      className=" w-full py-3 bg-grayscale-900 text-base text-white font-medium rounded-sm"
    >
      {buttonText}
    </button>
  );
};

export default Checkout;
