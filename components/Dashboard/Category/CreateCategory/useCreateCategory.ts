"use client";
import {
  createCategory,
  flexibleCategoryType,
} from "@/redux/slices/categoriesSlice";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  customHandleChange,
  customHandleSubmit,
  customImagesChange,
} from "@/utils/handlers";
import { validateFormFields } from "@/utils/validateFormFields";
import { handleError } from "@/utils/handleError";
import { verifyCategoryValidationRules } from "@/utils/validationRules";

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

const useCreateCategory = () => {
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [categoryData, setCategoryData] =
    useState<flexibleCategoryType>(initialCategoryState);

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
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataToValidate: Record<string, string> = {
      name: categoryData.name || "",
      status: categoryData.status || "",
      image: imageFile ? imageFile.type : "",
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
      { image: imageFile },
      {
        name: categoryData.name,
        status: categoryData.status,
      },
      (formData) => dispatch(createCategory(formData)),
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

export default useCreateCategory;
