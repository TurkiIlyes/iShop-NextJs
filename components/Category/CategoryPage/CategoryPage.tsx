"use client";
import FilterSideBar from "@/components/SideBar/ProductsFilterSideBar/ProductsFilterSideBar";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getProducts } from "@/redux/slices/productsSlice";
import ProductsList from "@/components/Product/ProductsPage/ProductsList";
import { getCategories } from "@/redux/slices/categoriesSlice";
import useCategoryPage from "./useCategoryPage";

const CategoryPage = ({ id }: { id: string }) => {
  const {
    handleChangeState,
    handleRangeChange,
    handleSubmit,
    handleReset,
    currentPage,
    setCurrentPage,
    checkedColors,
    setCheckedColors,
    checkedSize,
    setCheckedSize,
    setCheckedPrice,
    choosedPrices,
    handleRangeMinInputChange,
    handleRangeMaxInputChange,
  } = useCategoryPage(id);
  return (
    <div className=" bg-grayscale-400">
      <div className="container">
        <div className=" flex gap-6 py-4">
          <FilterSideBar
            handleChangeState={handleChangeState}
            handleRangeChange={handleRangeChange}
            handleRangeMinInputChange={handleRangeMinInputChange}
            handleRangeMaxInputChange={handleRangeMaxInputChange}
            choosedPrices={choosedPrices}
            setCheckedPrice={setCheckedPrice}
            checkedColors={checkedColors}
            setCheckedColors={setCheckedColors}
            checkedSize={checkedSize}
            setCheckedSize={setCheckedSize}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
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

export default CategoryPage;
