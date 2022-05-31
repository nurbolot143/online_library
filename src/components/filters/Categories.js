import React from "react";

const Categories = () => {
  return (
    <div className="categories">
      <h3 className="title">категории</h3>
      <ul className="categories__list">
        <li className="categories__item">
          <button className="categories__btn categories__btn_active">
            Все
          </button>
        </li>
        <li className="categories__item">
          <button className="categories__btn">Сказки</button>
        </li>
        <li className="categories__item">
          <button className="categories__btn">Энциклопедии</button>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
