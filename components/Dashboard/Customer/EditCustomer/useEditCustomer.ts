"use client";
import {
  flexibleCustomerType,
  getCustomer,
  updateCustomer,
} from "@/redux/slices/customersSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { urlToFile } from "@/utils/UrlToFile";
import {
  customHandleAddressChange,
  customHandleChange,
  customHandleSubmit,
  customImagesChange,
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
const useEditCustomer = (id: string) => {
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [customerData, setCustomerData] = useState(initialCustomerState);

  const customer = useAppSelector((state) => state.customers.customer);
  const updateSuccess = useAppSelector(
    (state) => state.customers.updateSuccess
  );

  useEffect(() => {
    dispatch(getCustomer(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getCustomer(id));
    }
  }, [updateSuccess, dispatch, id]);

  useEffect(() => {
    if (customer) {
      const { _id, ...rest } = customer;
      setCustomerData(rest);
    }
  }, [customer]);

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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const formImage = imageFile
      ? imageFile
      : await urlToFile(customerData.image as string, "image.png", "image/png");
    customHandleSubmit(
      e,
      {
        image: formImage,
      },
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
      (formData) => dispatch(updateCustomer({ id, customer: formData })),
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

export default useEditCustomer;
