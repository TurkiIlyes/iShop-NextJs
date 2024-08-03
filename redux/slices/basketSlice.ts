import axios from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./productsSlice";

export interface BasketItemType {
  _id: string;
  productId: ProductType;
  quantity: number;
  price: number;
  total: number;
}

export interface BasketItemRequest {
  productId: string;
  quantity: number;
}

export interface BasketType {
  _id: string;
  userId: string;
  items: BasketItemType[];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export const getBasket = createAsyncThunk("basket/getBasket", async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/basket`
  );
  return response.data.data as BasketType;
});

export const addItemToBasket = createAsyncThunk(
  "basket/addItemToBasket",
  async (item: BasketItemRequest) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/basket`,
      item
    );
    return response.data.data as BasketType;
  }
);

export const updateBasketItem = createAsyncThunk(
  "basket/updateBasketItem",
  async (item: { productId: string; newQuantity: number }) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/basket`,
      item
    );
    return response.data.data as BasketType;
  }
);

export const removeItemFromBasket = createAsyncThunk(
  "basket/removeItemFromBasket",
  async (itemId: string) => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/basket/${itemId}`
    );
    return response.data.data as BasketType;
  }
);

export const clearBasket = createAsyncThunk("basket/clearBasket", async () => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/basket`
  );
  return response.data.data as BasketType;
});

interface BasketState {
  basket: BasketType | null;
  loading: boolean;
  updateSuccess: boolean;
  deleteSuccess: boolean;
  error: string | null;
}

const initialState: BasketState = {
  basket: null,
  loading: false,
  updateSuccess: false,
  deleteSuccess: false,
  error: null,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getBasket.fulfilled,
        (state, action: PayloadAction<BasketType>) => {
          state.loading = false;
          state.basket = action.payload;
        }
      )
      .addCase(getBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(addItemToBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        addItemToBasket.fulfilled,
        (state, action: PayloadAction<BasketType>) => {
          state.loading = false;
          state.basket = action.payload;
        }
      )
      .addCase(addItemToBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(updateBasketItem.pending, (state) => {
        state.loading = true;
        state.updateSuccess = false;
      })
      .addCase(
        updateBasketItem.fulfilled,
        (state, action: PayloadAction<BasketType>) => {
          state.loading = false;
          state.updateSuccess = true;
          state.basket = action.payload;
        }
      )
      .addCase(updateBasketItem.rejected, (state, action) => {
        state.loading = false;
        state.updateSuccess = false;
        state.error = action.error.message as string;
      })
      .addCase(removeItemFromBasket.pending, (state) => {
        state.loading = true;
        state.deleteSuccess = false;
      })
      .addCase(
        removeItemFromBasket.fulfilled,
        (state, action: PayloadAction<BasketType>) => {
          state.loading = false;
          state.deleteSuccess = true;
          state.basket = action.payload;
        }
      )
      .addCase(removeItemFromBasket.rejected, (state, action) => {
        state.loading = false;
        state.deleteSuccess = false;
        state.error = action.error.message as string;
      })
      .addCase(clearBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        clearBasket.fulfilled,
        (state, action: PayloadAction<BasketType>) => {
          state.loading = false;
          state.basket = action.payload;
        }
      )
      .addCase(clearBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default basketSlice.reducer;
