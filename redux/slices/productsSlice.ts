import axios from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductType {
  _id: string;
  title: string; //1
  slug?: string;
  description: string; //2
  price: number; // 4
  discount?: number; // 5
  priceAfterDiscount?: number;
  imageCover: string; // 9
  images?: string[]; // 10
  sku?: string; // 6
  quantity: number; // 7
  colors?: { color: string; quantity: number }[]; //
  sizes?: { size: string; quantity: number }[]; //
  category: string; // 3
  sold?: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  status: "InStock" | "OutOfStock" | "Discontinued"; // 8
}

export type ProductTypeWithoutId = Omit<ProductType, "_id">;

export type flexibleProductType = Partial<ProductType>;

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (filter?: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products${filter || ""}`
    );

    return {
      products: response.data.data as ProductType[],
      paginationResult: response.data.paginationResult as {
        currentPage: number;
        limit: number;
        numberOfPages: number;
      },
    };
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
    );
    return response.data.data as ProductType;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product: FormData) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
      product,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data as ProductType;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }: { id: string; product: FormData }) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`,
      product,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data as ProductType;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: string) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
    );
    return id;
  }
);

interface ProductsState {
  products: ProductType[];
  paginationResult: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
  };
  product: ProductType | null;
  loading: boolean;
  updateSuccess: boolean;
  deleteSuccess: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  paginationResult: {
    currentPage: 1,
    limit: 20,
    numberOfPages: 0,
  },
  product: null,
  loading: false,
  updateSuccess: false,
  deleteSuccess: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (
          state,
          action: PayloadAction<{
            products: ProductType[];
            paginationResult: {
              currentPage: number;
              limit: number;
              numberOfPages: number;
            };
          }>
        ) => {
          state.loading = false;
          state.products = action.payload.products;
          state.paginationResult = action.payload.paginationResult;
        }
      )
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getProduct.fulfilled,
        (state, action: PayloadAction<ProductType>) => {
          state.loading = false;
          state.product = action.payload;
        }
      )
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        createProduct.fulfilled,
        (state, action: PayloadAction<ProductType>) => {
          state.loading = false;
          state.products.push(action.payload as ProductType);
        }
      )
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.updateSuccess = false;
      })
      .addCase(
        updateProduct.fulfilled,
        (state, action: PayloadAction<ProductType>) => {
          state.loading = false;
          state.updateSuccess = true;
          const index = state.products.findIndex(
            (product) => product._id === action.payload._id
          );
          state.products[index] = action.payload;
        }
      )
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.updateSuccess = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.deleteSuccess = false;
      })
      .addCase(
        deleteProduct.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.deleteSuccess = true;
          state.products = state.products.filter(
            (product) => product._id !== action.payload
          );
        }
      )
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.deleteSuccess = false;
        state.error = action.error.message as string;
      });
  },
});

export default productsSlice.reducer;
