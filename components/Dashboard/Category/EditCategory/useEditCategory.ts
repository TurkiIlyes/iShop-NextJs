"use client";
import {
  flexibleCategoryType,
  getCategory,
  updateCategory,
} from "@/redux/slices/categoriesSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { urlToFile } from "@/utils/UrlToFile";
import {
  customHandleChange,
  customHandleSubmit,
  customImagesChange,
} from "@/utils/handlers";
import { validateFormFields } from "@/utils/validateFormFields";
import { verifyCategoryValidationRules } from "@/utils/validationRules";
import { handleError } from "@/utils/handleError";

const statusData = [
  {
    value: "Active",
    label: "ACTIVE",
  },
  {
    value: "Inactive",
    label: "INACTIVE",
  },
  {
    value: "Archived",
    label: "ARCHIVED",
  },
];

const initialCategoryState: flexibleCategoryType = {
  name: "",
  image: "",
  status: "Active",
};

const useEditCategory = (id: string) => {
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [categoryData, setCategoryData] =
    useState<flexibleCategoryType>(initialCategoryState);

  const category = useAppSelector((state) => state.categories.category);
  const updateSuccess = useAppSelector(
    (state) => state.categories.updateSuccess
  );
  useEffect(() => {
    dispatch(getCategory(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getCategory(id));
    }
  }, [updateSuccess, dispatch, id]);

  useEffect(() => {
    if (category) {
      const { name, image, status } = category;
      setCategoryData({ name, image, status });
    }
  }, [category]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    customHandleChange(e, setCategoryData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customImagesChange<flexibleCategoryType>(
      e,
      setCategoryData,
      "image",
      setImageFile
    );
  };

  const handleStatusChange = (status: flexibleCategoryType["status"]) => {
    setCategoryData((prevData) => ({
      ...prevData,
      status,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const formImage = imageFile
      ? imageFile
      : await urlToFile(categoryData.image as string, "image.png", "image/png");

    const dataToValidate: Record<string, string> = {
      name: categoryData.name || "",
      status: categoryData.status || "",
      image: formImage ? formImage.type : "",
    };
    const newErrors = validateFormFields(
      dataToValidate,
      verifyCategoryValidationRules
    );
    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }
    customHandleSubmit(
      e,
      {
        image: formImage,
      },
      {
        name: categoryData.name,
        status: categoryData.status,
      },
      (formData) => dispatch(updateCategory({ id, category: formData })),
      handleReset
    );
  };
  const handleReset = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    setImageFile(null);
    setCategoryData(initialCategoryState);
  };
  return {
    statusData,
    categoryData,

    handleChange,
    handleImageChange,
    handleStatusChange,

    handleSubmit,
    handleReset,
  };
};

export default useEditCategory;
