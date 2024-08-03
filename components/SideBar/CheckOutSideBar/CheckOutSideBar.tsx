import Summary from "./Summary";
import Checkout from "./Checkout";
import Coupon from "./Coupon";

const CheckOutSideBar = ({
  handleNext,
  currentTab,
  isLoading,
}: {
  handleNext: () => void;
  currentTab: string;
  isLoading: boolean;
}) => {
  return (
    <div className=" flex flex-col gap-4 max-lg:w-4/6 w-2/6 max-lg:m-auto lg:py-14 ">
      <Summary />
      <Checkout
        handleNext={handleNext}
        currentTab={currentTab}
        isLoading={isLoading}
      />
      <hr className="w-full rounded-full mt-2 border-grayscale-600" />

      <Coupon />
    </div>
  );
};

export default CheckOutSideBar;
