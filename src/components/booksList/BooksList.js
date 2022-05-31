import React, { useEffect } from "react";

import { fetchBooks } from "./booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import BookItem from "../bookItem/BookItem";

const BooksList = () => {
  const filteredBooksSelector = createSelector(
    (state) => state.books.books,
    (state) => state.wishList.wishList,

    (books) => books
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageBooks = localStorage.getItem("books") || [];
    localStorage.setItem("books", localStorageBooks);
    dispatch(fetchBooks());
  }, []);

  const books = useSelector(filteredBooksSelector);

  const renderBooksList = (arr) => {
    if (arr.length === 0) return;

    return arr.map((item) => {
      return <BookItem key={item.id} item={item} change={true} />;
    });
  };

  const elements = renderBooksList(books);

  return (
    <div className="book">
      <ul className="book__list">{elements}</ul>
    </div>
  );
};

export default BooksList;
