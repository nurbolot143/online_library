import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { bookChanged } from "../booksList/booksSlice";
import { createSelector } from "@reduxjs/toolkit";
import { useRequest } from "../../hooks/request.hook";

const FormModal = ({ open, handleClose, data }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const booksSelector = createSelector(
    (state) => state.books.books,
    (books) => books
  );

  const books = useSelector(booksSelector);

  const { request } = useRequest();

  useEffect(() => {
    setTitle(data.title);
    setAuthor(data.author);
    setCategory(data.category);
  }, [handleClose]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const changedBook = {
      ...data,
      title,
      author,
      category,
    };

    const newBookList = books.map((item) =>
      item.id === data.id ? { ...item, ...changedBook } : item
    );

    request("SET", "books", newBookList)
      .then(console.log(console.log("Отправка успешна")))
      .then(dispatch(bookChanged(newBookList)))
      .catch((e) => console.log(e));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form className="modalForm" onSubmit={onSubmitHandler}>
        <DialogTitle>Ввести изменения</DialogTitle>
        <DialogContent>
          <div className="modalForm__wrapper">
            <div className="modalForm__InputWrapper">
              <label htmlFor="title">Название</label>
              <input
                required
                name="title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="modalForm__InputWrapper">
              <label htmlFor="author">Автор</label>
              <input
                required
                name="author"
                type="text"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </div>
            <div className="modalForm__InputWrapper">
              <label htmlFor="category">Категория</label>
              <select
                required
                name="category"
                value={category}
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Выберите категорию</option>
                <option value="science">наука</option>
                <option value="literature">литература</option>
              </select>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button type="submit" onClick={handleClose}>
            Изменить
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormModal;
