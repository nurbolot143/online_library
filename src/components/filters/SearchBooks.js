import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cahngedSearch, changedSearchType } from "./filtersSlice";

const SearchBooks = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const onTypeChange = (e) => {
    dispatch(changedSearchType(e.target.value));
  };

  const onValueChange = (e) => {
    const newValue = e.target.value;

    setSearchValue(newValue);
    dispatch(cahngedSearch(newValue));
  };

  return (
    <div className="searchBooks">
      <h3 className="title">поиск</h3>
      <div className="searchBooks__wrapper">
        <select name="searchType" onChange={onTypeChange}>
          <option value="title">названиe</option>
          <option value="author">автор</option>
        </select>
        <input type="text" value={searchValue} onChange={onValueChange} />
      </div>
    </div>
  );
};

export default SearchBooks;
