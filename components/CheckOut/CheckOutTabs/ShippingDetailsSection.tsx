import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import ProductsList from "@/components/Basket/BasketPage/ProductsList/ProductsList";

const ShippingDetailsSection = () => {
  return (
    <div className="">
      <div className="">
        <span className=" text-sm text-grayscale-900 font-medium ">
          Home delivery{" "}
          <span className=" text-xs text-grayscale-800 font-normal ">
            (starting from 7.00 TND)
          </span>
        </span>
        <div className=" flex justify-between">
          <span className=" text-xs text-grayscale-800 font-normal">
            Delivery between{" "}
            <span className=" text-grayscale-900 font-semibold">July 27</span>{" "}
            and{" "}
            <span className=" text-grayscale-900 font-semibold">July 30</span>
          </span>
          <FontAwesomeIcon icon={faTruckFast} size="1x" />
        </div>
      </div>
      <ProductsList />
    </div>
  );
};

export default ShippingDetailsSection;
