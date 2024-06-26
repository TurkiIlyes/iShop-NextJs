import React from "react";

const FormTextInput = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name=""
      id=""
      className=" px-4 py-3.5 text-sm font-medium text-gray-900 placeholder-grayscale-700 bg-grayscale-400 rounded-md outline-none shadow-[0px_0px_2px] shadow-grayscale-700"
    />
  );
};

export default FormTextInput;
