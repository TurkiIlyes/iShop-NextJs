"use client";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getProducts } from "@/redux/slices/productsSlice";
import { getCategories } from "@/redux/slices/categoriesSlice";
import { useSearchParams } from "next/navigation";

const useProductsPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
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
  }, [currentPage, search]);

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
        `?limit=20${search ? `&search=${search}` : ""}${
          currentPage !== paginationResult.currentPage
            ? `&page=${currentPage}`
            : ""
        }${
          checkedCategories.length > 0
            ? `&category=${checkedCategories.join(",")}`
            : ""
        }${
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
    setCheckedCategories([]);
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

  const categories = useAppSelector((state) => state.categories.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return {
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
  };
};

export default useProductsPage;
