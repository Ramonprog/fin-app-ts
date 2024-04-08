// userSlice.ts
import {
  Action,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import api from "../../services/api";

interface IUserSignUp {
  name: string;
  email: string;
  password: string;
}

interface IUserSignIn {
  email: string;
  password: string;
}

interface UserState {
  email: string;
  name: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  email: "",
  name: "",
  loading: false,
  error: null,
};

interface UserData {
  email: string;
  password: string;
}

export const signInUser = createAsyncThunk(
  "user/signIn",
  async (userData: UserData, thunkAPI) => {
    try {
      const response = await api.post("/login", userData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

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
