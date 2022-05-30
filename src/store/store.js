import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import books from "../components/booksList/booksSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
