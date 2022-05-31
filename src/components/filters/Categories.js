import { createSelector } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changedCategory } from "./filtersSlice";

const categoryBtns = [
  { id: 0, name: "all", label: "Все" },
  { id: 1, name: "science", label: "Наука" },
  { id: 2, name: "literature", label: "Литература" },
];

const Categories = () => {
  const fetchedFilters = createSelector(
    (state) => state.filters.category,
    (filters) => filters
  );

  const activeCategory = useSelector(fetchedFilters);

  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(changedCategory(e.target.name));
  };

  return (
    <div className="categories">
      <h3 className="title">категории</h3>
      <ul className="categories__list">
        {categoryBtns.map(({ id, name, label }) => {
          return (
            <li key={id} className="categories__item">
              <button
                className={
                  activeCategory === name
                    ? "categories__btn categories__btn_active"
                    : "categories__btn"
                }
                name={name}
                onClick={onClick}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
