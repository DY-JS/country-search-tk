import { configureStore } from "@reduxjs/toolkit";

import countryReducer from "./slices/countrySlice";
import queryReducer from "./slices/querySlice";

export default configureStore({
  reducer: {
    countries: countryReducer,
    query: queryReducer,
  },
});
