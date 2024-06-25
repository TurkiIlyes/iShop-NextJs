import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialMediaRoundedBox = ({ icon }: { icon: IconProp }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className=" w-4 h-4 p-3 my-4  bg-white hover:bg-customOrange-800 text-customOrange-800 hover:text-white rounded-full cursor-pointer  "
    />
  );
};

export default SocialMediaRoundedBox;
