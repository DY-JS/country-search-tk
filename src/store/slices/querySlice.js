import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    query: "",
  },

  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    resetQuery(state, action) {
      state.query = "";
    },
  },
});

export const { setQuery, resetQuery } = querySlice.actions;

export default querySlice.reducer;
