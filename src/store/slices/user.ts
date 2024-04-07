import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpSlice: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { signUpSlice } = userSlice.actions;
export const userReducer = userSlice.reducer;
