import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useRequest } from "../../hooks/request.hook";

const initialState = {
  books: [],
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", () => {
  const { request } = useRequest();
  return request("GET", "books");
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    bookCreated: (state, action) => {
      state.books.push(action.payload);
    },
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
    bookChanged: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

const { actions, reducer } = booksSlice;

export default reducer;

export const {
  booksFetched,
  bookDeleted,
  bookFavoriteChanged,
  bookCreated,
  changedBooksLength,
  bookChanged,
} = actions;
