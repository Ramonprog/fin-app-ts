import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signInUser = createAsyncThunk(
  "user/signIn",
  async (userData, thunkAPI) => {
    try {
      const { data } = await api.post("/login", userData);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Se o status for 401, as credenciais são inválidas
        alert("E-mail ou senha incorretos");
      } else {
        console.log("🚀 ~ error:", error);
        // Outro tipo de erro, como erro de rede
        alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
      }
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
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.signed = true;
      state.loading = false;
      api.defaults.headers["Authorization"] = `Bearer ${action.payload.token}`;
    },
    signOut: (state) => {
      api.defaults.headers["Authorization"] = "";
      return {
        ...state,
        name: "",
        token: "",
        id: "",
        signed: false,
        loading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.signed = true;
        state.loading = false;
        api.defaults.headers[
          "Authorization"
        ] = `Bearer ${action.payload.token}`;
        AsyncStorage.setItem("@finToken", action.payload.token);
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.signed = false;
        state.name = "";
        state.token = "";
        state.id = "";
        api.defaults.headers["Authorization"] = "";
      });
  },
});

export const { meSlice, signOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
