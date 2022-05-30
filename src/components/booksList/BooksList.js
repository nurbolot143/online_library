import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { bookDeleted, bookFavoriteChanged, fetchBooks } from "./booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { useRequest } from "../../hooks/request.hook";

const BooksList = () => {
  const filteredBooksSelector = createSelector(
    (state) => state.books.books,

    (books) => {
      return books;
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector(filteredBooksSelector);

  const { request } = useRequest();

  // const setBook =

  const onDelete = (id) => {
    request(
      "setItem",
      "books",
      books.filter((item) => item.id !== id)
    )
      .then(dispatch(bookDeleted(id)))
      .catch((e) => console.log(e));
  };

  console.log(books);

  const onFavoriteChange = (id) => {
    request(
      "setItem",
      "books",
      books.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    )
      .then(dispatch(bookFavoriteChanged(id)))
      .catch((e) => console.log(a));
  };

  const renderBooksList = (arr) => {
    if (arr.length === 0) return;

    return arr.map((item) => {
      return (
        <li key={item.id} className="book__item">
          <div className="book__left">
            <div className="book__name">{item.name}</div>
            <div className="book__author">{item.author}</div>
          </div>
          <div className="book__right">
            <BorderColorIcon className="book__changeIcon" fontSize="large" />
            <DeleteIcon
              onClick={() => onDelete(item.id)}
              className="book__deleteIcon"
              fontSize="large"
            />
            <StarIcon
              onClick={() => onFavoriteChange(item.id)}
              className={
                item.isFavorite
                  ? "book__favIcon book__favIcon_active"
                  : "book__favIcon"
              }
              fontSize="large"
            />
          </div>
        </li>
      );
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
