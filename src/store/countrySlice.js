import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "./ActionCreators";

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countryList: [],
    fixedList: [],
    selectedCountry: null,
    status: null,
    error: null,
  },

  reducers: {
    addToFixedList(state, action) {
      const fixedItem = state.countryList.find(
        (country) => country.name === action.payload
      );
      state.fixedList.push(fixedItem);
    },
    removeFromCountryList(state, action) {
      state.countryList = state.countryList.filter(
        (country) => country.name !== action.payload
      );
    },
    setSelectedCountry(state, action) {
      const selectedCountry = state.countryList.find(
        (country) => country.name === action.payload
      );
      state.selectedCountry = selectedCountry;
    },
  },

  extraReducers: {
    [fetchCountries.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.countryList = action.payload;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const {
  addToFixedList,
  removeFromCountryList,
  setSelectedCountry,
} = countrySlice.actions;

export default countrySlice.reducer;
