import { ProductType } from "@/redux/slices/productsSlice";
import axios from "@/utils/axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchWishList = async () => {
  const response = await axios.get(`${apiBaseUrl}/wishlist/me`);
  return response.data.data as ProductType[];
};

export const addToWishList = async (productId: string) => {
  const response = await axios.post(`${apiBaseUrl}/wishlist/me/${productId}`);
  return response.data;
};

export const removeFromWishList = async (productId: string) => {
  const response = await axios.delete(`${apiBaseUrl}/wishlist/me/${productId}`);
  return response.data;
};

export const clearWishList = async () => {
  const response = await axios.delete(`${apiBaseUrl}/wishlist/me`);
  return response.data;
};
