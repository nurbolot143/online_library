import { createSelector } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BookItem from "../bookItem/BookItem";
import { fetchWishList } from "./wishListSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const wishListSelector = createSelector(
    (state) => state.wishList.wishList,
    (state) => state.books.books,

    (wishList) => wishList
  );

  const wishList = useSelector(wishListSelector);

  useEffect(() => {
    dispatch(fetchWishList());
  }, []);

  const renderBooksList = (arr) => {
    if (arr.length === 0) return;

    return arr.map((item) => {
      return <BookItem key={item.id} item={item} change={false} />;
    });
  };

  const elements = renderBooksList(wishList);

  return (
    <div className="wishList">
      <div className="container">
        <div className="wishList__wrapper">{elements}</div>
      </div>
    </div>
  );
};

export default WishList;
