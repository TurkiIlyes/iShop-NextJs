import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaRoundedBox = ({ icon }: { icon: IconProp }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className=" w-5 h-5 p-2.5 my-4  bg-white hover:bg-customRed-900 text-customRed-900 hover:text-white rounded-full cursor-pointer  "
    />
  );
};

export default SocialMediaRoundedBox;
