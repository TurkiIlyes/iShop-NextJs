import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactUsRoundedBox = ({ icon }: { icon: IconProp }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className=" w-4 h-4 p-2.5 my-4 bg-white hover:bg-primary text-primary hover:text-white rounded-full cursor-pointer  "
    />
  );
};

export default ContactUsRoundedBox;
