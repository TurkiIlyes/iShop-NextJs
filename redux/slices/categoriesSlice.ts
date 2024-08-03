import axios from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryType {
  _id: string;
  image?: string;
  name: string;
  status: "Active" | "Inactive" | "Archived";
}

export type CategoryTypeWithoutId = Omit<CategoryType, "_id">;

export type flexibleCategoryType = Partial<CategoryType>;

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`
    );

    return response.data.data as CategoryType[];
  }
);

export const getCategory = createAsyncThunk(
  "categories/getCategory",
  async (id: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${id}`
    );
    return response.data.data as CategoryType;
  }
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (category: FormData) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`,
      category,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data as CategoryType;
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, category }: { id: string; category: FormData }) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${id}`,
      category,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data as CategoryType;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id: string) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${id}`
    );
    return id;
  }
);

interface CategoriesState {
  categories: CategoryType[];
  category: CategoryType | null;
  loading: boolean;
  updateSuccess: boolean;
  deleteSuccess: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  category: null,
  loading: false,
  updateSuccess: false,
  deleteSuccess: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<CategoryType[]>) => {
          state.loading = false;
          state.categories = action.payload;
        }
      )
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCategory.fulfilled,
        (state, action: PayloadAction<CategoryType>) => {
          state.loading = false;
          state.category = action.payload;
        }
      )
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        createCategory.fulfilled,
        (state, action: PayloadAction<CategoryType>) => {
          state.loading = false;
          state.categories.push(action.payload as CategoryType);
        }
      )
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
        state.updateSuccess = false;
      })
      .addCase(
        updateCategory.fulfilled,
        (state, action: PayloadAction<CategoryType>) => {
          state.loading = false;
          state.updateSuccess = true;
          const index = state.categories.findIndex(
            (category) => category._id === action.payload._id
          );
          state.categories[index] = action.payload;
        }
      )
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.updateSuccess = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.deleteSuccess = false;
      })
      .addCase(
        deleteCategory.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.deleteSuccess = true;
          state.categories = state.categories.filter(
            (category) => category._id !== action.payload
          );
        }
      )
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.deleteSuccess = false;
        state.error = action.error.message as string;
      });
  },
});

export default categoriesSlice.reducer;
