"use client";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getProducts } from "@/redux/slices/productsSlice";

const useCategoryPage = (id: string) => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedPrice, setCheckedPrice] = useState<string[]>([]);
  const [rangePrice, setRangePrice] = useState<{ min: number; max: number }>({
    min: 0,
    max: 1000,
  });
  const [choosedPrices, setChoosedPrices] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const [checkedColors, setCheckedColors] = useState<string[]>([]);
  const [checkedSize, setCheckedSize] = useState<string[]>([]);

  const paginationResult = useAppSelector(
    (state) => state.products.paginationResult
  );

  useEffect(() => {
    handleSubmit();
  }, [currentPage]);

  useEffect(() => {
    let minPrice = 0;
    let maxPrice = 0;

    // Prioritize checkedPrice if it has values
    if (checkedPrice.length > 0) {
      // Assuming checkedPrice contains strings representing min/max objects
      // You might need to adjust the parsing logic based on your actual data structure
      const parsedPrices = checkedPrice.map((price) => JSON.parse(price));
      minPrice = Math.min(...parsedPrices.map((p) => p.min));
      maxPrice = Math.max(...parsedPrices.map((p) => p.max));
    } else {
      // Fallback to rangePrice if checkedPrice is empty
      minPrice = rangePrice.min;
      maxPrice = rangePrice.max;
    }

    setChoosedPrices({ min: minPrice, max: maxPrice });
  }, [checkedPrice, rangePrice]);

  const handleSubmit = () => {
    dispatch(
      getProducts(
        `?limit=20${
          currentPage !== paginationResult.currentPage
            ? `&page=${currentPage}`
            : ""
        }${`&category=${id}`}${
          choosedPrices
            ? `${
                choosedPrices.min >= 0
                  ? `&priceAfterDiscount[gte]=${choosedPrices.min}`
                  : ""
              }${
                choosedPrices.max > 0
                  ? `&priceAfterDiscount[lte]=${choosedPrices.max}`
                  : ""
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
  const handleRangeMinInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value);
    setRangePrice((prev) => ({ ...prev, min: value }));
  };
  const handleRangeMaxInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value);
    setRangePrice((prev) => ({ ...prev, max: value }));
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
  return {
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
  };
};

export default useCategoryPage;