import BasketTitle from "./BasketTitle";
import DeliverySteps from "./DeliverySteps";
import CongratulationMessage from "./CongratulationMessage";
const BasketHeader = () => {
  return (
    <>
      <div className=" flex flex-col items-center gap-2">
        <div className=" relative w-full  px-10">
          <DeliverySteps />
          <hr className="w-full border-[1px] rounded-full border-grayscale-600" />
        </div>
        <CongratulationMessage />
      </div>
      <BasketTitle />
    </>
  );
};

export default BasketHeader;
