import FilterBy from "./FilterBy";
import ProductColorOptions from "@/components/product/ProductPage/ProductColorOptions";
import ProductSizeOptions from "@/components/product/ProductPage/ProductSizeOptions";
import FilterButtons from "./FilterButtons";
import PriceRange from "./PriceRange";

const filterByCategoryData = [
  { title: "Food", quantity: 12 },
  { title: "Electronics", quantity: 78 },
  { title: "Clothes", quantity: 35 },
  { title: "Shoes", quantity: 91 },
  { title: "Accessories", quantity: 7 },
  { title: "Home", quantity: 88 },
];
const filterByPriceData = [
  { title: "All", quantity: 100 },
  { title: "0$ - 99$", quantity: 17 },
  { title: "100$ - 999$", quantity: 780 },
  { title: "1000$ & above", quantity: 1800 },
];
const FilterSideBar = () => {
  return (
    <div className=" flex flex-col gap-7 w-1/4 py-8 h-fit px-8 bg-grayscale-200 rounded-xl">
      <FilterBy title={"Categories"} data={filterByCategoryData} />
      <FilterBy title={"Price"} data={filterByPriceData} />
      <PriceRange />
      <ProductColorOptions />
      <ProductSizeOptions />
      <FilterButtons />
    </div>
  );
};

export default FilterSideBar;
