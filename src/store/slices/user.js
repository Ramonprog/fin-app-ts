// userSlice.ts
import {
  Action,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signInUser = createAsyncThunk(
  "user/signIn",
  async (userData, thunkAPI) => {
    try {
      const { data } = await api.post("/login", userData);
      return data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
      alert("E-mail ou senha incorretos");
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  name: "",
  signed: false,
  token: "",
  id: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    meSlice: (state, action) => {
      console.log(action, "action");
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.signed = true;
      state.loading = false;
      api.defaults.headers["Authorization"] = `Bearer ${action.payload.token}`;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, async (state, action) => {
        state.name = action.payload.name;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.signed = true;
        state.loading = false;
        api.defaults.headers[
          "Authorization"
        ] = `Bearer ${action.payload.token}`;
        await AsyncStorage.setItem("@finToken", action.payload.token);
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.signed = false;
        state.name = "";
        state.token = "";
        state.id = "";
        api.defaults.headers["Authorization"] = "";

        return state;
      });
  },
});

export const { meSlice } = userSlice.actions;
export const userReducer = userSlice.reducer;
