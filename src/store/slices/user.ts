import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
