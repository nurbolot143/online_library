import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import books from "../components/booksList/booksSlice";
import wishList from "../components/bookWishList/wishListSlice";
import filters from "../components/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books,
    wishList,
    filters,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
