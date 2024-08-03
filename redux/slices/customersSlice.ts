import axios from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CustomerType {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  password?: string;
  provider?: string;
  providerId?: string;
  image?: string;
  address?: {
    details: string;
    governorate: string;
    city: string;
    postalCode: string;
  };
  wishList?: string[];
  basketList?: string[];
  status: "active" | "inactive";
}

export type CustomerTypeWithoutId = Omit<CustomerType, "_id">;

export type flexibleCustomerType = Partial<CustomerType>;

export const getCustomers = createAsyncThunk(
  "customers/getCustomers",
  async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`
    );

    return response.data.data as CustomerType[];
  }
);

export const getCustomer = createAsyncThunk(
  "customers/getCustomer",
  async (id: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`
    );
    return response.data.data as CustomerType;
  }
);

export const createCustomer = createAsyncThunk(
  "customers/createCustomer",
  async (customer: FormData) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
      customer,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data as CustomerType;
  }
);

export const updateCustomer = createAsyncThunk(
  "customers/updateCustomer",
  async ({ id, customer }: { id: string; customer: FormData }) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`,
      customer,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data as CustomerType;
  }
);
export const deleteCustomer = createAsyncThunk(
  "customers/deleteCustomer",
  async (id: string) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`
    );
    return id;
  }
);

interface CustomersState {
  customers: CustomerType[];
  customer: CustomerType | null;
  loading: boolean;
  updateSuccess: boolean;
  deleteSuccess: boolean;
  error: string | null;
}

const initialState: CustomersState = {
  customers: [],
  customer: null,
  loading: false,
  updateSuccess: false,
  deleteSuccess: false,
  error: null,
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCustomers.fulfilled,
        (state, action: PayloadAction<CustomerType[]>) => {
          state.loading = false;
          state.customers = action.payload;
        }
      )
      .addCase(getCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(getCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCustomer.fulfilled,
        (state, action: PayloadAction<CustomerType>) => {
          state.loading = false;
          state.customer = action.payload;
        }
      )
      .addCase(getCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        createCustomer.fulfilled,
        (state, action: PayloadAction<CustomerType>) => {
          state.loading = false;
          state.customers.push(action.payload as CustomerType);
        }
      )
      .addCase(createCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(updateCustomer.pending, (state) => {
        state.loading = true;
        state.updateSuccess = false;
      })
      .addCase(
        updateCustomer.fulfilled,
        (state, action: PayloadAction<CustomerType>) => {
          state.loading = false;
          state.updateSuccess = true;
          const index = state.customers.findIndex(
            (customer) => customer._id === action.payload._id
          );
          state.customers[index] = action.payload;
        }
      )
      .addCase(updateCustomer.rejected, (state, action) => {
        state.loading = false;
        state.updateSuccess = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteCustomer.pending, (state) => {
        state.loading = true;
        state.deleteSuccess = false;
      })
      .addCase(
        deleteCustomer.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.deleteSuccess = true;
          state.customers = state.customers.filter(
            (customer) => customer._id !== action.payload
          );
        }
      )
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.loading = false;
        state.deleteSuccess = false;
        state.error = action.error.message as string;
      });
  },
});

export default customersSlice.reducer;
