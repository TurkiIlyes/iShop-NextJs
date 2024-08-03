import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({
  className,
  icon,
}: {
  className: string;
  icon: string;
}) => {
  return (
    <button
      type="button"
      className={` ${className} w-10 h-10 flex justify-center items-center absolute ${
        icon === "left" ? "left-0" : "right-0"
      } top-1/2 z-10 bg-customBlue-700 shadow-[0_0_3px] shadow-customBlue-700 rounded-full `}
    >
      <FontAwesomeIcon
        icon={icon === "left" ? faArrowLeft : faArrowRight}
        size="1x"
        className=" text-grayscale-200"
      />
    </button>
  );
};

export default AuthButton;
