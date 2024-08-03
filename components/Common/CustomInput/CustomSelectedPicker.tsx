"use client";
import CustomComboBox from "../CustomComboBox";

const CustomSelectedPicker = ({
  label,
  data,
  quantity,
  handleChange,
  i,
  el,
}: {
  label: string;
  data: { value: string; label: string }[];
  quantity: number;
  handleChange: (data: { el: string; quantity: number }, i?: number) => void;
  i?: number;
  el: string;
}) => {
  const style =
    label === "Colors" && el ? { backgroundColor: el, outlineColor: el } : {};
  return (
    <div className=" flex flex-col gap-2 w-full">
      <CustomComboBox
        label={label}
        data={data}
        selectedValue={el}
        onChange={(s) => handleChange({ el: s, quantity }, i)}
        style={style}
      />
      <input
        type="text"
        name=""
        id=""
        value={quantity}
        onChange={(e) => handleChange({ el, quantity: +e.target.value }, i)}
        className=" py-0.5 text-center text-sm text-white font-medium bg-gradientSecondary-700 shadow-[0_0_3px] shadow-gradientSecondary-700 rounded-sm border-[3px] border-white outline outline-gradientSecondary-700 outline-1 hover:bg-gradientSecondary-600"
      />
    </div>
  );
};

export default CustomSelectedPicker;
