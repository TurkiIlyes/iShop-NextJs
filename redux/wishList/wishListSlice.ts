import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLoggedUserWishList,
  addToWishList,
  removeFromWishList,
  clearWishList,
} from "./wishListThunks";
import { ProductType } from "../slices/productsSlice";

interface WishListType {
  wishList: ProductType[];
  loading: boolean;
  error: string | null;
  addSuccess: boolean;
  removeSuccess: boolean;
  clearSuccess: boolean;
}

const initialState: WishListType = {
  wishList: [],
  loading: false,
  error: null,
  addSuccess: false,
  removeSuccess: false,
  clearSuccess: false,
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    resetAddSuccess: (state) => {
      state.addSuccess = false;
    },
    resetRemoveSuccess: (state) => {
      state.removeSuccess = false;
    },
    resetClearSuccess: (state) => {
      state.clearSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoggedUserWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getLoggedUserWishList.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.wishList = action.payload;
        }
      )
      .addCase(getLoggedUserWishList.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while fetching the wishlist";
      })
      .addCase(addToWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.addSuccess = false;
      })
      .addCase(addToWishList.fulfilled, (state) => {
        state.loading = false;
        state.addSuccess = true;
      })
      .addCase(addToWishList.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while adding to wishlist";
        state.addSuccess = false;
      })
      .addCase(removeFromWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.removeSuccess = false;
      })
      .addCase(removeFromWishList.fulfilled, (state) => {
        state.loading = false;
        state.removeSuccess = true;
      })
      .addCase(removeFromWishList.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while removing from wishlist";
        state.removeSuccess = false;
      })
      .addCase(clearWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.clearSuccess = false;
      })
      .addCase(clearWishList.fulfilled, (state) => {
        state.loading = false;
        state.clearSuccess = true;
        state.wishList = [];
      })
      .addCase(clearWishList.rejected, (state) => {
        state.loading = false;
        state.error = "An error occurred while clearing the wishlist";
        state.clearSuccess = false;
      });
  },
});

export default wishListSlice.reducer;

export const { resetAddSuccess, resetRemoveSuccess, resetClearSuccess } =
  wishListSlice.actions;
