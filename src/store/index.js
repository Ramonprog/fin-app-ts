import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user";
import { balanceReducer } from "./slices/balance";

export const store = configureStore({
  reducer: {
    user: userReducer,
    balance: balanceReducer,
  },
});
