import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import authReducer from "./auth/authSlice";
import usersReducer from "./slices/usersSlice";
import basketReducer from "./slices/basketSlice";
import ordersReducer from "./slices/ordersSlice";
import customersReducer from "./slices/customersSlice";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      users: usersReducer,
      basket: basketReducer,
      orders: ordersReducer,
      customers: customersReducer,
      categories: categoriesReducer,
      products: productsReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper(makeStore);
// export default wrapper;
