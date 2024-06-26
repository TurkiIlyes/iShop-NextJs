import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AuthButton = ({ title }: { title: string }) => {
  return (
    <button className=" w-full flex items-center justify-center gap-20 py-2.5 relative text-white bg-customRed-900 rounded-md shadow-[0px_0px_2px] shadow-customRed-900 ">
      <span className=" text-lg font-semibold">{title}</span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className=" w-4 h-4 absolute right-4 "
      />
    </button>
  );
};

export default AuthButton;
