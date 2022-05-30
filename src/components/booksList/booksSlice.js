import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useRequest } from "../../hooks/request.hook";

const { request } = useRequest();

const initialState = {
  books: [
    { id: 1, name: "Argoritms", author: "Nurbolot", isFavorite: false },
    { id: 2, name: "Learn React", author: "Nurbolot", isFavorite: false },
  ],
  booksLoadingStatus: "idle",
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", () => {
  return request("books");
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookDeleted: (state, action) => {
      state.books = state.books.filter((item) => item.id !== action.payload);
    },
    bookFavoriteChanged: (state, action) => {
      state.books = state.books.map((item) =>
        item.id === action.payload
          ? { ...item, isFavorite: !item.isFavorite }
          : item
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.booksLoadingStatus = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.booksLoadingStatus = "idle";
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.booksLoadingStatus = "error";
      });
  },
});

const { actions, reducer } = booksSlice;

export default reducer;

export const { booksFetched, bookDeleted, bookFavoriteChanged } = actions;
