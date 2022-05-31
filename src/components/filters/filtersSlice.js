import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  firstLetter: "",
  author: "",
  search: "",
  searchType: "title",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changedCategory: (state, action) => {
      state.category = action.payload;
    },
    searchByFristLetter: (state, action) => {
      state.firstLetter = action.payload;
    },
    searchByAuthor: (state, action) => {
      state.author = action.payload;
    },
    changedAmount: (state, action) => {
      state.activeCategoryAmount = action.payload;
    },
    changedSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    cahngedSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const {
  changedCategory,
  searchByAuthor,
  searchByFristLetter,
  changedAmount,
  changedSearchType,
  cahngedSearch,
} = actions;
