import React from "react";
import BookInfo from "../bookInfo/BookInfo";
import BooksAddForm from "../booksAddForm/BooksAddForm";
import Categories from "../filters/Categories";
import Filters from "../filters/SearchBooks";

const SettingsPanal = () => {
  return (
    <div className="settingsPanel">
      <Categories />
      <BookInfo />
      <Filters />
      <BooksAddForm />
    </div>
  );
};

export default SettingsPanal;
