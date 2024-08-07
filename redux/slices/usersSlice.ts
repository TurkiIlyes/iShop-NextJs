import axios from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddressType {
  details: string;
  governorate: string;
  city: string;
  postalCode: string;
}

export interface UserType {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  password?: string;
  provider?: string;
  providerId?: string;
  image?: string;
  address?: AddressType;
  wishList?: string[];
  basket: string;
  status: "active" | "inactive";
  emailProductsNotifications: boolean;
  emailSecurityNotifications: boolean;
  phoneSecurityNotifications: boolean;
}

export type UserTypeWithoutId = Omit<UserType, "_id">;

export const getUser = createAsyncThunk("users/getUser", async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`
  );
  return response.data.data as UserType;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ user }: { user: FormData }) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`,
      user,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data as UserType;
  }
);

export const updateUserPassword = createAsyncThunk(
  "users/updateUserPassword",
  async ({ user }: { user: FormData }) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/update-password`,
      user,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data as UserType;
  }
);
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ({ user }: { user: FormData }) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`,
      {
        data: { user },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
);

interface UsersState {
  user: UserType | null;
  loading: boolean;
  updateSuccess: boolean;
  deleteSuccess: boolean;
  error: string | null;
}

const initialState: UsersState = {
  user: null,
  loading: false,
  updateSuccess: false,
  deleteSuccess: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.updateSuccess = false;
      })
      .addCase(
        updateUser.fulfilled,
        (state, action: PayloadAction<UserType>) => {
          state.loading = false;
          state.updateSuccess = true;
          state.user = action.payload;
        }
      )
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.updateSuccess = false;
        state.error = action.error.message as string;
      })
      .addCase(updateUserPassword.pending, (state) => {
        state.loading = true;
        state.updateSuccess = false;
      })
      .addCase(
        updateUserPassword.fulfilled,
        (state, action: PayloadAction<UserType>) => {
          state.loading = false;
          state.updateSuccess = true;
          state.user = action.payload;
        }
      )
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.loading = false;
        state.updateSuccess = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.deleteSuccess = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteSuccess = true;
        state.user = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.deleteSuccess = false;
        state.error = action.error.message as string;
      });
  },
});

export default usersSlice.reducer;
