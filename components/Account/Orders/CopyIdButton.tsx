"use client";
const CopyIdButton = ({ id }: { id: string }) => {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(id)}
      className=" px-2 py-1 text-xs text-white font-medium bg-success-900 opacity-50 rounded-full "
    >
      copy
    </button>
  );
};

export default CopyIdButton;
