import axios from "@/utils/axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchCustomers = async (options: string = "") => {
  const response = await axios.get(`${apiBaseUrl}/users${options}`);
  return response.data.data;
};

export const fetchCustomer = async (id: string) => {
  const response = await axios.get(`${apiBaseUrl}/users/${id}`);
  return response.data.data;
};
