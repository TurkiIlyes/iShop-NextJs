import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaRoundedBox = ({ icon }: { icon: IconProp }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className=" w-10 h-10 p-2.5 my-4  bg-white hover:bg-customOrange-800 text-customOrange-800 hover:text-white rounded-full cursor-pointer  "
    />
  );
};

export default SocialMediaRoundedBox;
