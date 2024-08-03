"use client";
const CustomInput = ({
  label,
  value,
  placeholder,
  name,
  onChange,
  children,
  disabled,
}: {
  label: string;
  value?: string | number;
  placeholder: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <div className=" w-full flex gap-4 items-center">
      <div className=" w-full px-4 shadow-[0px_0px_2px] shadow-customBlue-800  rounded-md">
        <span className=" text-[10px] font-semibold text-customBlue-800 opacity-70 ">
          {label}
        </span>
        <input
          type="text"
          name={name}
          id=""
          value={value ? value.toString() : ""}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className={` w-full py-2 bg-transparent  text-sm font-medium text-grayscale-900 placeholder-grayscale-700  outline-none ${
            disabled && " text-opacity-50"
          }`}
        />
      </div>
      {children}
    </div>
  );
};

export default CustomInput;
