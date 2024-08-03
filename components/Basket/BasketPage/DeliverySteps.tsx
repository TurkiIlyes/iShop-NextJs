import {
  faDolly,
  faHouseUser,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeliverySteps = () => {
  return (
    <div className=" flex justify-between">
      <FontAwesomeIcon icon={faDolly} className="w-5 h-5 text-grayscale-800 " />
      <FontAwesomeIcon
        icon={faTruckFast}
        className="w-5 h-5 text-grayscale-800 "
      />
      <FontAwesomeIcon
        icon={faHouseUser}
        className="w-5 h-5 text-grayscale-800 "
      />
    </div>
  );
};

export default DeliverySteps;
