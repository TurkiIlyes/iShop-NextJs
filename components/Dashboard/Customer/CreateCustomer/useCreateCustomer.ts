"use client";
import {
  flexibleCustomerType,
  createCustomer,
} from "@/redux/slices/customersSlice";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  customHandleChange,
  customImagesChange,
  customHandleSubmit,
  customHandleAddressChange,
} from "@/utils/handlers";

const statusData = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
];

const initialCustomerState: flexibleCustomerType = {
  name: "",
  email: "",
  phone: "",
  password: "",
  image: "",
  status: "active",
  address: {
    details: "",
    governorate: "",
    city: "",
    postalCode: "",
  },
};
const useCreateCustomer = () => {
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [customerData, setCustomerData] =
    useState<flexibleCustomerType>(initialCustomerState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    customHandleChange(e, setCustomerData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customImagesChange<flexibleCustomerType>(
      e,
      setCustomerData,
      "image",
      setImageFile
    );
  };

  const handleStatusChange = (status: flexibleCustomerType["status"]) => {
    setCustomerData((prevData) => ({
      ...prevData,
      status,
    }));
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLTextAreaElement> | string,
    fieldName: string
  ) => {
    const value = typeof e === "string" ? e : e.target.value;
    customHandleAddressChange(fieldName, setCustomerData, value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    customHandleSubmit(
      e,
      { image: imageFile },
      {
        name: customerData.name,
        email: customerData.email,
        password: customerData.password,
        phone: customerData.phone,
        status: customerData.status,
        "address.details": customerData.address?.details,
        "address.governorate": customerData.address?.governorate,
        "address.city": customerData.address?.city,
        "address.postalCode": customerData.address?.postalCode,
      },
      (formData) => dispatch(createCustomer(formData)),
      handleReset
    );
  };
  const handleReset = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    setImageFile(null);
    setCustomerData(initialCustomerState);
  };

  return {
    statusData,

    customerData,

    handleChange,
    handleImageChange,
    handleStatusChange,
    handleAddressChange,

    handleSubmit,
    handleReset,
  };
};

export default useCreateCustomer;
