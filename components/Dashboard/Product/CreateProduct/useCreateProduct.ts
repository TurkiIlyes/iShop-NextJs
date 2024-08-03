"use client";
import {
  flexibleProductType,
  createProduct,
} from "@/redux/slices/productsSlice";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  customHandleChange,
  customHandleColorChange,
  customHandleSizeChange,
  customHandleSubmit,
  customImagesChange,
} from "@/utils/handlers";
const categorysData = [
  {
    value: "66945034cc9465a33a0ee546",
    label: "Tech",
  },
];
const statusData = [
  {
    value: "InStock",
    label: "In Stock",
  },
  {
    value: "OutOfStock",
    label: "Out Of Stock",
  },
  {
    value: "Discontinued",
    label: "Discontinued",
  },
];
const colorsData = [
  { value: "#FF0000", label: "Red" },
  { value: "#0000FF", label: "Blue" },
  { value: "#008000", label: "Green" },
  { value: "#FFFF00", label: "Yellow" },
  { value: "#800080", label: "Purple" },
];

const sizesData = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const initialProductState: flexibleProductType = {
  title: "",
  description: "",
  category: "",
  price: 0,
  discount: 0,
  sku: "",
  quantity: 0,
  status: "InStock",
  imageCover: "",
  images: [],
  colors: [],
  sizes: [],
};

const useCreateProduct = () => {
  const dispatch = useAppDispatch();
  const [imageCoverFile, setImageCoverFile] = useState<File | null>(null);
  const [imagesFiles, setImagesFiles] = useState<File[]>([]);
  const [productData, setProductData] = useState(initialProductState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    customHandleChange(e, setProductData);
  };

  const handleCategoryChange = (category: flexibleProductType["category"]) => {
    setProductData((prevData) => ({
      ...prevData,
      category,
    }));
  };

  const handleStatusChange = (status: flexibleProductType["status"]) => {
    setProductData((prevData) => ({
      ...prevData,
      status,
    }));
  };
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    customImagesChange<flexibleProductType>(
      e,
      setProductData,
      "imageCover",
      setImageCoverFile,
      setImagesFiles,
      index
    );
  };

  const handleColorChange = (
    data: { el: string; quantity: number },
    i?: number
  ) => {
    customHandleColorChange(data, setProductData, i);
  };

  const handleSizeChange = (
    data: { el: string; quantity: number },
    i?: number
  ) => {
    customHandleSizeChange(data, setProductData, i);
  };

  const selectedColors = productData.colors?.map((color) => ({
    el: color.color,
    quantity: color.quantity,
  }));
  const selectedSizes = productData.sizes?.map((size) => ({
    el: size.size,
    quantity: size.quantity,
  }));

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    customHandleSubmit(
      e,
      { imageCover: imageCoverFile, images: imagesFiles },
      {
        title: productData.title,
        description: productData.description,
        category: productData.category,
        price: productData.price?.toString(),
        discount: productData.discount?.toString(),
        sku: productData.sku,
        quantity: productData.quantity?.toString(),
        status: productData.status,
        colors: JSON.stringify(productData.colors),
        sizes: JSON.stringify(productData.sizes),
      },
      (formData) => dispatch(createProduct(formData)),
      handleReset
    );
  };
  const handleReset = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    setProductData(initialProductState);
    setImageCoverFile(null);
    setImagesFiles([]);
  };
  return {
    categorysData,
    statusData,
    colorsData,
    sizesData,
    productData,

    selectedColors,
    selectedSizes,

    handleChange,
    handleCategoryChange,
    handleStatusChange,
    handleImageChange,
    handleColorChange,
    handleSizeChange,

    handleSubmit,
    handleReset,
  };
};

export default useCreateProduct;
