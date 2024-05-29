import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../slices/textSlice";

const store = configureStore({
  // reducer 안에 들어가는 객체는 rootstate
  reducer: {
    texts: textSlice,
  },
});

export default store;
