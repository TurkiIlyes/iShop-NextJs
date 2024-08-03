import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactUsRoundedBox = ({ icon }: { icon: IconProp }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className=" w-4 h-4 p-2 my-4  bg-success-900 hover:bg-white text-white hover:text-gradientAccent-900 rounded-full cursor-pointer  "
    />
  );
};

export default ContactUsRoundedBox;
