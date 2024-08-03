import { OrderType } from "@/redux/slices/ordersSlice";
import axios from "@/utils/axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchMyOrders = async (options: string = "") => {
  const response = await axios.get(`${apiBaseUrl}/orders/user${options}`);
  return response.data.data as OrderType[];
};

export const fetchMyOrder = async (id: string) => {
  const response = await axios.get(`${apiBaseUrl}/orders/user/${id}`);
  return response.data.data as OrderType;
};

export const fetchOrders = async (options: string = "") => {
  const response = await axios.get(`${apiBaseUrl}/orders/admin${options}`);
  return response.data.data as OrderType[];
};

export const fetchOrder = async (id: string) => {
  const response = await axios.get(`${apiBaseUrl}/orders/admin/${id}`);
  return response.data.data as OrderType;
};
