import axios from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "@/utils/handleError";
import toast from "react-hot-toast";

export const getLoggedUserWishList = createAsyncThunk(
  "wishList/getLoggedUserWishList",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist/me`
      );
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const addToWishList = createAsyncThunk(
  "wishList/addToWishList",
  async (productId: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist/me/${productId}`
      );
      toast.success("Product added to wishlist!");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const removeFromWishList = createAsyncThunk(
  "wishList/removeFromWishList",
  async (productId: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist/me/${productId}`
      );
      toast.success("Product removed from wishlist!");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const clearWishList = createAsyncThunk(
  "wishList/clearWishList",
  async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist/me`
      );
      toast.success("Wishlist cleared!");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
);
