import FilterBy from "./subcomponents/FilterBy";
import ProductSizeOptions from "@/components/Product/ProductPage/subcomponents/ProductSizeOptions";
import FilterButtons from "./subcomponents/FilterButtons";
import PriceRange from "./subcomponents/PriceRange";
import ProductColorOptions from "@/components/Product/ProductPage/subcomponents/ProductColorOptions";
import { CategoryType} from "@/redux/slices/categoriesSlice";

const filterByPriceData = [
  {
    value: JSON.stringify({ min: null, max: null }),
    title: "All",
    quantity: 100,
  },
  {
    value: JSON.stringify({ min: 0, max: 99 }),
    title: "0$ - 99$",
    quantity: 17,
  },
  {
    value: JSON.stringify({ min: 100, max: 999 }),
    title: "100$ - 999$",
    quantity: 780,
  },
  {
    value: JSON.stringify({ min: 1000, max: null }),
    title: "1000$ & above",
    quantity: 1800,
  },
];
const FilterSideBar = ({
  handleChangeState,
  handleRangeChange,
  setCheckedCategories,
  setCheckedPrice,
  checkedColors,
  setCheckedColors,
  checkedSize,
  setCheckedSize,
  handleSubmit,
  handleReset,
  categories,
}: {
  handleChangeState: (
    value: string,
    setData: React.Dispatch<React.SetStateAction<string[]>>
  ) => void;
  handleRangeChange: (value: { min: number; max: number }) => void;
  setCheckedCategories?: React.Dispatch<React.SetStateAction<string[]>>;
  setCheckedPrice: React.Dispatch<React.SetStateAction<string[]>>;
  checkedColors?: string[];
  setCheckedColors: React.Dispatch<React.SetStateAction<string[]>>;
  checkedSize?: string[];
  setCheckedSize: React.Dispatch<React.SetStateAction<string[]>>;
  handleSubmit: () => void;
  handleReset: () => void;
  categories?: CategoryType[];
}) => {
  return (
    <div className=" sticky top-2 bottom-4 w-1/4 max-h-[97vh] py-8 px-8  bg-grayscale-200 rounded-xl overflow-y-scroll filterScroll ">
      <div className=" flex flex-col gap-5 h-fit w-full ">
        {categories && setCheckedCategories && (
          <FilterBy
            title={"Categories"}
            data={categories.map((e, i) => ({
              value: e._id,
              title: e.name,
              quantity: i,
            }))}
            onClick={(value) => {
              handleChangeState(value, setCheckedCategories);
            }}
          />
        )}

        <FilterBy
          title={"Price"}
          data={filterByPriceData}
          onClick={(value) => {
            handleChangeState(value, setCheckedPrice);
          }}
        />
        <PriceRange
          onChange={(value) => {
            handleRangeChange(value);
          }}
        />
        <ProductColorOptions
          checkedColors={checkedColors}
          onClick={(value) => {
            handleChangeState(value, setCheckedColors);
          }}
        />
        <ProductSizeOptions
          checkedSizes={checkedSize}
          onClick={(value) => {
            handleChangeState(value, setCheckedSize);
          }}
        />
        <FilterButtons handleSubmit={handleSubmit} handleReset={handleReset} />
      </div>
    </div>
  );
};

export default FilterSideBar;
