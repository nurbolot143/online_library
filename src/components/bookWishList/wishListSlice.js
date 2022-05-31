import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useRequest } from "../../hooks/request.hook";

const initialState = {
  wishList: [],
};

export const fetchWishList = createAsyncThunk("wishList/fetchWishList", () => {
  const { request } = useRequest();
  return request("GET", "books").then((res) =>
    res.filter((item) => item.isFavorite)
  );
});

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWishList.fulfilled, (state, action) => {
      state.wishList = action.payload;
    });
  },
});

const { actions, reducer } = wishListSlice;

export default reducer;
