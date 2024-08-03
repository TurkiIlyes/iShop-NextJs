"use client";
import FilterSideBar from "@/components/SideBar/ProductsFilterSideBar/ProductsFilterSideBar";
import ProductsList from "./ProductsList";
import useProductsPage from "./useProductsPage";

const ProductsPage = () => {
  const {
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
    currentPage,
    setCurrentPage,
  } = useProductsPage();

  return (
    <div className=" bg-grayscale-400">
      <div className="container">
        <div className=" flex gap-6 py-4">
          <FilterSideBar
            handleChangeState={handleChangeState}
            handleRangeChange={handleRangeChange}
            setCheckedCategories={setCheckedCategories}
            setCheckedPrice={setCheckedPrice}
            checkedColors={checkedColors}
            setCheckedColors={setCheckedColors}
            checkedSize={checkedSize}
            setCheckedSize={setCheckedSize}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            categories={categories}
          />
          <ProductsList
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
