import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-regular-svg-icons";

const CongratulationMessage = () => {
  return (
    <div className=" flex items-center gap-2">
      <span className=" text-xs text-grayscale-700 font-medium">
        congrats! You are about to do it.
      </span>
      <FontAwesomeIcon
        icon={faHandPeace}
        className="w-4 h-4 text-grayscale-900"
      />
    </div>
  );
};

export default CongratulationMessage;
