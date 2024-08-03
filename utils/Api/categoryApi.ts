import axios from "@/utils/axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchCategories = async (options: string = "") => {
  const response = await axios.get(`${apiBaseUrl}/categories${options}`);
  return response.data.data;
};

export const fetchCategory = async (id: string) => {
  const response = await axios.get(`${apiBaseUrl}/categories/${id}`);
  return response.data.data;
};
