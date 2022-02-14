import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "counties/fetch",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Loading error");
    }
  }
);
