"use client";
import {
  flexibleOrderType,
  getOrder,
  updateOrder,
} from "@/redux/slices/ordersSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  customHandleAddressChange,
  customHandleChange,
  customHandleSubmit,
} from "@/utils/handlers";

const statusData = [
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

const paymentStatusData = [
  { value: "unpaid", label: "Unpaid" },
  { value: "paid", label: "Paid" },
];

const initialCategoryState: flexibleOrderType = {
  email: "",
  phone: "",
  status: "pending",
  paymentStatus: "unpaid",
  address: {
    details: "",
    governorate: "",
    city: "",
    postalCode: "",
  },
};

const useEditOrder = (id: string) => {
  const dispatch = useAppDispatch();
  const [orderData, setOrderData] =
    useState<flexibleOrderType>(initialCategoryState);

  const order = useAppSelector((state) => state.orders.order);
  const updateSuccess = useAppSelector((state) => state.orders.updateSuccess);

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getOrder(id));
    }
  }, [updateSuccess, dispatch, id]);

  useEffect(() => {
    if (order) {
      const { _id, ...rest } = order;
      setOrderData(rest);
    }
  }, [order]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    customHandleChange(e, setOrderData);
  };

  const handleStatusChange = (status: flexibleOrderType["status"]) => {
    setOrderData((prevData) => ({
      ...prevData,
      status,
    }));
  };
  const handlePaymentStatusChange = (
    paymentStatus: flexibleOrderType["paymentStatus"]
  ) => {
    setOrderData((prevData) => ({
      ...prevData,
      paymentStatus,
    }));
  };
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLTextAreaElement> | string,
    fieldName: string
  ) => {
    const value = typeof e === "string" ? e : e.target.value;
    customHandleAddressChange(fieldName, setOrderData, value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    customHandleSubmit(
      e,
      {},
      {
        email: orderData.email,
        phone: orderData.phone,
        status: orderData.status,
        paymentStatus: orderData.paymentStatus,
        "address.details": orderData.address?.details,
        "address.governorate": orderData.address?.governorate,
        "address.city": orderData.address?.city,
        "address.postalCode": orderData.address?.postalCode,
      },
      (formData) => dispatch(updateOrder({ id, order: formData })),
      handleReset
    );
  };
  const handleReset = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    setOrderData(initialCategoryState);
  };
  return {
    statusData,
    paymentStatusData,
    orderData,

    handleChange,
    handleStatusChange,
    handlePaymentStatusChange,
    handleAddressChange,

    handleSubmit,
    handleReset,
  };
};

export default useEditOrder;
