import React from "react";

const SearchBooks = () => {
  return (
    <div className="searchBooks">
      <h3 className="title">поиск</h3>
      <div className="searchBooks__name">
        <input type="text" placeholder="Название книги" />
      </div>

      <div className="searchBooks__author">
        <input type="text" placeholder="Автор книги" />
      </div>
    </div>
  );
};

export default SearchBooks;
