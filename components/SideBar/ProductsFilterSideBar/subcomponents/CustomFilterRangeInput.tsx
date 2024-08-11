import FilterRangeInput from "./FilterRangeInput";

const CustomFilterRangeInput = ({
  handleRangeMinInputChange,
  handleRangeMaxInputChange,
  choosedPrices,
}: {
  handleRangeMinInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRangeMaxInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  choosedPrices?: { min: number; max: number } | null;
}) => {
  return (
    <div className=" flex items-center gap-4 mx-auto ">
      <FilterRangeInput
        name="min"
        placeholder="Min"
        value={choosedPrices?.min}
        onChange={handleRangeMinInputChange}
      />
      <span className=" text-grayscale-600 ">-</span>
      <FilterRangeInput
        name="max"
        placeholder="Max"
        value={choosedPrices?.max}
        onChange={handleRangeMaxInputChange}
      />
    </div>
  );
};

export default CustomFilterRangeInput;
