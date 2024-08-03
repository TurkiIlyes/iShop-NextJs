import { BasketType } from "@/redux/slices/basketSlice";
import axios from "@/utils/axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchBasket = async () => {
  const response = await axios.get(`${apiBaseUrl}/basket`);
  return response.data.data as BasketType;
};
