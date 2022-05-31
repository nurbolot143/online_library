import React from "react";
import Categories from "../filters/Categories";
import Filters from "../filters/SearchBooks";

const FiltersPanel = () => {
  return (
    <div className="filtersPanel">
      <Categories />
      <Filters />
    </div>
  );
};

export default FiltersPanel;
