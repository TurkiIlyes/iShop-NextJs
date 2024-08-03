"use client";
import FilterSideBar from "@/components/SideBar/ProductsFilterSideBar/ProductsFilterSideBar";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getProducts } from "@/redux/slices/productsSlice";
import ProductsList from "@/components/Product/ProductsPage/ProductsList";
import { getCategories } from "@/redux/slices/categoriesSlice";

const CategoryPage = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedPrice, setCheckedPrice] = useState<string[]>([]);
  const [rangePrice, setRangePrice] = useState<{ min: number; max: number }>({
    min: 0,
    max: 1000,
  });
  const [checkedColors, setCheckedColors] = useState<string[]>([]);
  const [checkedSize, setCheckedSize] = useState<string[]>([]);

  const paginationResult = useAppSelector(
    (state) => state.products.paginationResult
  );
  

  useEffect(() => {
    handleSubmit();
  }, [currentPage]);

  const handleSubmit = () => {
    
    let minPrice = 0;
    let maxPrice = 0;
    const choosedPrices = [...checkedPrice, JSON.stringify(rangePrice)];

    if (choosedPrices.length > 0) {
      minPrice = JSON.parse(choosedPrices[0]).min;
      maxPrice = JSON.parse(choosedPrices[0]).max;
      choosedPrices.forEach((e) => {
        if (JSON.parse(e).min < minPrice) {
          minPrice = JSON.parse(e).min;
        }
        if (JSON.parse(e).max > maxPrice) {
          maxPrice = JSON.parse(e).max;
        }
      });
    }
    dispatch(
      getProducts(
        `?limit=20${
          currentPage !== paginationResult.currentPage
            ? `&page=${currentPage}`
            : ""
        }${`&category=${id}`}${
          choosedPrices.length > 0
            ? `${minPrice >= 0 ? `&priceAfterDiscount[gte]=${minPrice}` : ""}${
                maxPrice > 0 ? `&priceAfterDiscount[lte]=${maxPrice}` : ""
              }
              `
            : ""
        }${
          checkedColors.length > 0
            ? `&colors.color=${checkedColors.join(",")}`
            : ""
        }${
          checkedSize.length > 0 ? `&sizes.size=${checkedSize.join(",")}` : ""
        }`
      )
    );
  };
  const handleReset = () => {
    setCheckedPrice([]);
    setRangePrice({ min: 0, max: 1000 });
    setCheckedColors([]);
    setCheckedSize([]);
  };

  useEffect(() => {
    if (paginationResult.currentPage) {
      setCurrentPage(paginationResult.currentPage);
    }
  }, [dispatch, paginationResult]);

  const handleRangeChange = (value: { min: number; max: number }) => {
    setRangePrice(value);
  };

  const handleChangeState = (
    value: string,
    setData: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setData((prev) => {
      
      if (prev.includes(value)) {
        return prev.filter((e) => e !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div className=" bg-grayscale-400">
      <div className="container">
        <div className=" flex gap-6 py-4">
          <FilterSideBar
            handleChangeState={handleChangeState}
            handleRangeChange={handleRangeChange}
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
