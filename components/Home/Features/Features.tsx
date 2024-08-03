import {
  faHeadset,
  faShield,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import FeatureBox from "./FeatureBox";

const Features = () => {
  return (
    <div className="container">
      <div className=" grid grid-cols-1 sm:grid-cols-3 ">
        <FeatureBox
          title="FREE AND FAST DELIVERY"
          icon={faTruckFast}
          description="Free delivery for all orders over $140"
        />
        <FeatureBox
          title="24/7 CUSTOMER SERVICE"
          icon={faHeadset}
          description="Friendly 24/7 customer support"
        />
        <FeatureBox
          title="MONEY BACK GUARANTEE"
          icon={faShield}
          description="We return money within 30 days"
        />
      </div>
    </div>
  );
};

export default Features;
