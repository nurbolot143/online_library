import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { bookDeleted, bookFavoriteChanged } from "../booksList/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { useRequest } from "../../hooks/request.hook";
import { fetchWishList } from "../bookWishList/wishListSlice";
import FormModal from "../formModal/FormModal";

const BookItem = ({ item, change }) => {
  const filteredBooksSelector = createSelector(
    (state) => state.books.books,

    (books) => {
      return books;
    }
  );

  const dispatch = useDispatch();

  const books = useSelector(filteredBooksSelector);

  const { request } = useRequest();

  const onDelete = (id) => {
    request(
      "SET",
      "books",
      books.filter((item) => item.id !== id)
    )
      .then(dispatch(bookDeleted(id)))
      .catch((e) => console.log(e));
  };

  const onFavoriteChange = (id) => {
    request(
      "SET",
      "books",
      books.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    )
      .then(dispatch(bookFavoriteChanged(id)))
      .catch((e) => console.log(a));
    dispatch(fetchWishList());
  };

  const image = (new Image().src = item.img || " ");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <li className="book__item">
        <div className="book__left">
          <div className="book__img">
            <img src={image} alt={item.title} />
          </div>
          <div className="book__body">
            <div className="book__name">{item.title}</div>
            <div className="book__author">{item.author}</div>
          </div>
        </div>
        <div className="book__right">
          {change ? (
            <>
              <BorderColorIcon
                className="book__changeIcon"
                fontSize="large"
                onClick={handleClickOpen}
              />
              <DeleteIcon
                onClick={() => onDelete(item.id)}
                className="book__deleteIcon"
                fontSize="large"
              />
            </>
          ) : null}
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

      <FormModal open={open} handleClose={handleClose} data={item} />
    </>
  );
};

export default BookItem;
