import React from "react";

const SearchBooks = () => {
  return (
    <div className="searchBooks">
      <h3 className="title">поиск</h3>
      <div className="searchBooks__wrapper">
        <select name="searchType" id="">
          <option value="title">поиск по названию</option>
          <option value="author">поиск по автору</option>
        </select>
        <input type="text" />
      </div>
    </div>
  );
};

export default SearchBooks;
