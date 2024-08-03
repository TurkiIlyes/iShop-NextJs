import React from "react";

const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className=" w-fit px-4 py-2 bg-transparent text-gradientAccent-800 text-sm font-semibold border-[1px] border-gradientAccent-800 rounded-lg shadow-[0px_0px_2px] shadow-gradientAccent-800">
      Delete Account
    </button>
  );
};

export default DeleteButton;
