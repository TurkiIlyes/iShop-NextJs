import React from "react";
import ContactUsRoundedBox from "./ContactUsRoundedBox";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface props {
  dataOne: string;
  dataTwo?: string;
  icon: IconProp;
}
const ContactUsBox = ({ dataOne, dataTwo, icon }: props) => {
  return (
    <div className=" flex gap-2 items-center">
      <ContactUsRoundedBox icon={icon} />
      <div className=" flex flex-col gap-1 text-xs text-white text-opacity-70 font-normal ">
        <span className="">{dataOne}</span>
        {dataTwo && <span className="">{dataTwo}</span>}
      </div>
    </div>
  );
};

export default ContactUsBox;
