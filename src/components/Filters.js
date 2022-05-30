import React from "react";
import Categories from "./Categories";

const Filters = () => {
  return (
    <div className="filters">
      <Categories />

      <div className="booksInfo">
        <div className="booksInfo__item">
          Oбщее количество книг: <span>9</span>
        </div>
        <div className="booksInfo__item">
          Количество книг в категории "<span>Сказки</span>": <span>3</span>
        </div>
      </div>

      <div className="filters__name">
        <input type="text" placeholder="Название книги" />
      </div>

      <div className="filters__author">
        <input type="text" placeholder="Автор книги" />
      </div>
    </div>
  );
};

export default Filters;
