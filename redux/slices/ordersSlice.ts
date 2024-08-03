import axios from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AddressType } from "./usersSlice";
import { ProductType } from "./productsSlice";
// Define order item interface
export interface OrderItemType {
  _id: string;
  productId: ProductType;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

// Define order interface (matching your schema)
export interface OrderType {
  _id: string;
  userId: string;
  email: string;
  phone?: string;
  items: OrderItemType[];
  totalPrice: number;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  paymentStatus: "unpaid" | "paid";
  paymentType: "onDelivery" | "creditCard" | "paypal";
  address: AddressType;
  createdAt: Date;
  updatedAt: Date;
}

export type flexibleOrderType = Partial<OrderType>;
// Async Thunks

// user
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData: { paymentType: OrderType["paymentType"] }) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/user`,
      orderData
    );
    return response.data.data as OrderType;
  }
);
export const cancelOrder = createAsyncThunk(
  "orders/cancelOrder",
  async (orderId: string) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/user/${orderId}`
    );
    return response.data.data as OrderType;
  }
);
// user

// admin
export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ id, order }: { id: string; order: FormData }) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/admin/${id}`,
      order
    );
    return response.data.data as OrderType;
  }
);
export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/admin`
  );
  return response.data.data as OrderType[];
});

export const getOrder = createAsyncThunk(
  "orders/getOrder",
  async (orderId: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/admin/${orderId}`
    );
    return response.data.data as OrderType;
  }
);

// Define the slice state
interface OrdersState {
  orders: OrderType[] | null;
  order: OrderType | null;
  loading: boolean;
  error: string | null;
  createSuccess: boolean;
  updateSuccess: boolean;
}

// Initial state
const initialState: OrdersState = {
  orders: null,
  order: null,
  loading: false,
  error: null,
  createSuccess: false,
  updateSuccess: false,
};

// Create the slice
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrderSuccessFlags: (state) => {
      state.createSuccess = false;
      state.updateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get all orders
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getOrders.fulfilled,
        (state, action: PayloadAction<OrderType[]>) => {
          state.loading = false;
          state.orders = action.payload;
        }
      )
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })

      // Get single order
      .addCase(getOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getOrder.fulfilled,
        (state, action: PayloadAction<OrderType>) => {
          state.loading = false;
          state.order = action.payload;
        }
      )
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })

      // Create order
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        createOrder.fulfilled,
        (state, action: PayloadAction<OrderType>) => {
          state.loading = false;
          state.orders?.push(action.payload); // Add new order to the list
          state.createSuccess = true;
        }
      )
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })

      // Update order
      .addCase(updateOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        updateOrder.fulfilled,
        (state, action: PayloadAction<OrderType>) => {
          state.loading = false;
          // Update the order in the list if it exists
          const index = state.orders?.findIndex(
            (order) => order._id === action.payload._id
          );
          if (index !== undefined && index !== -1) {
            state.orders![index] = action.payload;
          }
          state.updateSuccess = true;
        }
      )
      .addCase(updateOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })

      // Cancel order
      .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        cancelOrder.fulfilled,
        (state, action: PayloadAction<OrderType>) => {
          state.loading = false;
          // Update the order status in the list
          const index = state.orders?.findIndex(
            (order) => order._id === action.payload._id
          );
          if (index !== undefined && index !== -1) {
            state.orders![index].status = action.payload.status;
          }
        }
      )
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export const { resetOrderSuccessFlags } = ordersSlice.actions;
export default ordersSlice.reducer;
