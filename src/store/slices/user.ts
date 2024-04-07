// userSlice.ts
import { Action, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

interface ErrorData extends Action {
  error: Error;
}
interface IUserSignUp {
  name: string;
  email: string;
  password: string;
}

const initialState = {
  email: "",
  name: "",
  loading: false,
  error: null as ErrorData | null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
