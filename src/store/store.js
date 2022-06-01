import { configureStore } from "@reduxjs/toolkit";
import books from "../components/booksList/booksSlice";
import wishList from "../components/bookWishList/wishListSlice";
import filters from "../components/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    books,
    wishList,
    filters,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
