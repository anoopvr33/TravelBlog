import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./destSlice";

export const store = configureStore({
  reducer: {
    app: todoReducer,
  },
});
