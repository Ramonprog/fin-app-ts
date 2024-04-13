import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMoviments = createAsyncThunk(
  "balance/getMoviments",
  async (_, thunkAPI) => {
    const today = new Date();
    let todayFormated = format(today, "dd/MM/yyyy");
    try {
      const token = await AsyncStorage.getItem("@finToken");
      const response = await api.get("/balance", {
        params: { date: todayFormated },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("🚀 ~ data:", response.data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  saldo: 0,
  receita: 0,
  despesa: 0,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviments.fulfilled, (state, action) => {
        console.log("sucesso", action.payload);
        state.saldo = action.payload[0].saldo;
        state.receita = action.payload[1].saldo;
        state.despesa = action.payload[2].saldo;
      })
      .addCase(getMoviments.rejected, (state, action) => {
        console.log("falhou", action.payload);
      });
  },
});

export const balanceReducer = balanceSlice.reducer;
