import axios from "@/utils/axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProducts = async (options: string = "") => {
  const response = await axios.get(`${apiBaseUrl}/products${options}`);
  return response.data.data;
};

export const fetchProduct = async (id: string) => {
  const response = await axios.get(`${apiBaseUrl}/products/${id}`);
  return response.data.data;
};
