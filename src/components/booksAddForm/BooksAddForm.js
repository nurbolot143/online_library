import { createSelector } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { bookCreated } from "../booksList/booksSlice";
import { useRequest } from "../../hooks/request.hook";

const BooksAddForm = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookCategory, setBookCategory] = useState("");
  const [bookImg, setBookImg] = useState("");

  const { request } = useRequest();

  const booksSelector = createSelector(
    (state) => state.books.books,
    (books) => books
  );

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      setBookImg(base64);
    });
  };

  const dispatch = useDispatch();

  const books = useSelector(booksSelector);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
      img: bookImg,
      isFavorite: false,
    };

    request("SET", "books", [...books, newBook])
      .then(console.log("Отправка успешна"))
      .then(dispatch(bookCreated(newBook)))
      .catch((e) => console.log(e));

    setBookTitle("");
    setBookAuthor("");
    setBookCategory("");
    setBookImg("");
  };

  return (
    <div className="booksAddForm">
      <h3 className="title">добавить новую книгу</h3>

      <form onSubmit={onSubmitHandler}>
        <input
          required
          type="text"
          name="title"
          value={bookTitle}
          placeholder="Название книги"
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          required
          type="text"
          name="author"
          value={bookAuthor}
          placeholder="Автор книги"
          onChange={(e) => setBookAuthor(e.target.value)}
        />
        <select
          required
          name="catetory"
          value={bookCategory}
          id="category"
          onChange={(e) => setBookCategory(e.target.value)}
        >
          <option value="">Выбрать категорию</option>
          <option value="science">наука</option>
          <option value="literature">литература</option>
        </select>
        <label htmlFor="image">Выбрать картину</label>
        <input
          required
          type="file"
          id="image"
          name="img"
          files={bookImg}
          accept=".jpeg"
          onChange={imageUpload}
        />
        <button type="submit"> добавить</button>
      </form>
    </div>
  );
};

export default BooksAddForm;
