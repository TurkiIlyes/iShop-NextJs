const FilterRangeInput = ({
  name,
  placeholder,
  value,
  onChange,
  children,
  disabled,
}: {
  name?: string;
  placeholder: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <input
      type="text"
      name={name}
      id=""
      value={value ? value.toString() : ""}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className={` w-full px-2 py-2 bg-transparent  text-sm font-medium text-grayscale-900 placeholder-grayscale-700 shadow-[0_0_2px] shadow-grayscale-600 rounded-sm outline-none ${
        disabled && " text-opacity-50"
      }`}
    />
  );
};

export default FilterRangeInput;
