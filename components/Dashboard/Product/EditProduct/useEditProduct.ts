"use client";
import {
  updateProduct,
  getProduct,
  flexibleProductType,
} from "@/redux/slices/productsSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { urlToFile } from "@/utils/UrlToFile";
import {
  customHandleChange,
  customHandleColorChange,
  customHandleSizeChange,
  customHandleSubmit,
  customImagesChange,
} from "@/utils/handlers";
import { verifyProductValidationRules } from "@/utils/validationRules";
import { validateFormFields } from "@/utils/validateFormFields";
import { handleError } from "@/utils/handleError";
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

const useEditProduct = (id: string) => {
  const dispatch = useAppDispatch();

  const [imageCoverFile, setImageCoverFile] = useState<File | null>(null);
  const [imagesFiles, setImagesFiles] = useState<(File | string | null)[]>(
    Array(5).fill(null)
  );
  const [productData, setProductData] =
    useState<flexibleProductType>(initialProductState);

  const product = useAppSelector((state) => state.products.product);
  const updateSuccess = useAppSelector((state) => state.products.updateSuccess);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getProduct(id));
    }
  }, [updateSuccess, dispatch, id]);

  useEffect(() => {
    if (product) {
      const { _id, images, ...rest } = product;
      setProductData({
        ...rest,
        images,
        colors: rest.colors ?? [],
        sizes: rest.sizes ?? [],
      });

      const loadedImages = Array(5).fill(null);
      if (images !== undefined) {
        images.forEach((img: string, i: number) => {
          loadedImages[i] = img;
        });
      }
      setImagesFiles(loadedImages);
    }
  }, [product]);

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
      setImagesFiles as any,
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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const formImage = imageCoverFile
      ? imageCoverFile
      : await urlToFile(
          productData.imageCover as string,
          "image.png",
          "image/png"
        );
    let formImages: File[] = [];
    for (const image of imagesFiles) {
      if (image instanceof File) {
        formImages.push(image);
      } else if (typeof image === "string") {
        formImages.push(await urlToFile(image, `image.png`, "image/jpeg"));
      }
    }
    console.log(formImage);
    console.log(formImages);
    const dataToValidate: Record<string, string> = {
      title: productData.title || "",
      description: productData.description || "",
      category: productData.category || "",
      price: productData.price?.toString() || "",
      discount: productData.discount?.toString() || "",
      sku: productData.sku || "",
      quantity: productData.quantity?.toString() || "",
      status: productData.status || "",
      colors: JSON.stringify(productData.colors),
      sizes: JSON.stringify(productData.sizes),
      imageCover: formImage ? formImage.type : "",
      images: formImages.map((file) => file.type).join(", "),
    };
    const newErrors = validateFormFields(
      dataToValidate,
      verifyProductValidationRules
    );
    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }

    customHandleSubmit(
      e,
      { imageCover: formImage, images: formImages },
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
      (formData) => dispatch(updateProduct({ id, product: formData })),
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

export default useEditProduct;
