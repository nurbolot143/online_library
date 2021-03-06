import React, { useEffect } from "react";

import { fetchBooks } from "./booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import BookItem from "../bookItem/BookItem";
import Message from "../message/Message";

const BooksList = () => {
  const dispatch = useDispatch();

  const searchBooks = (items, type, term) => {
    if (term.length === 0) {
      return items;
    } else if (type === "title") {
      return items.filter(
        (item) => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
      );
    }
    return items.filter(
      (item) => item.author.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  const filteredBooksSelector = createSelector(
    (state) => state.books.books,
    (state) => state.filters,

    (books, filters) => {
      const searchedBooks = searchBooks(
        books,
        filters.searchType,
        filters.search
      );

      const sortedBooks =
        searchedBooks.length === 0 ? searchedBooks : searchedBooks;

      if (filters.category === "all") {
        return sortedBooks;
      } else {
        return sortedBooks.filter((item) => item.category === filters.category);
      }
    }
  );

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

  const elements = books.length > 0 ? renderBooksList(books) : null;
  const elementsMissing = books.length > 0 ? null : <Message />;

  return (
    <div className="book">
      {elementsMissing}
      <ul className="book__list">{elements}</ul>
    </div>
  );
};

export default BooksList;
