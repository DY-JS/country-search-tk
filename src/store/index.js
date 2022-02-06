import { configureStore } from "@reduxjs/toolkit";

import countryReducer from "./countrySlice";
import queryReducer from "./querySlice";

export default configureStore({
  reducer: {
    countries: countryReducer,
    query: queryReducer,
  },
});
