import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

const BookInfo = () => {
  const filtersSelector = createSelector(
    (state) => state.books.books,
    (state) => state.filters,

    (books, filters) => {
      if (filters.category === "all") {
        return [books.length];
      } else {
        return [
          books.length,
          books.filter((item) => item.category === filters.category).length,
        ];
      }
    }
  );

  const filters = useSelector(filtersSelector);

  return (
    <div className="booksInfo">
      <div className="booksInfo__item">
        Oбщее количество книг: <span>{filters[0]}</span>
      </div>
      <div className="booksInfo__item">
        {filters.length === 1 ? null : (
          <>
            Количество книг в данной категории:
            <span>{filters[1]}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default BookInfo;
