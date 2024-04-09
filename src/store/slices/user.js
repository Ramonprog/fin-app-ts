// userSlice.ts
import {
  Action,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import api from "../../services/api";

export const signInUser = createAsyncThunk(
  "user/signIn",
  async (userData, thunkAPI) => {
    try {
      const { data } = await api.post("/login", userData);
      console.log("🚀 ~ data:", data);
      return data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  name: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const userReducer = userSlice.reducer;
