import React from "react";
import BookInfo from "../components/bookInfo/BookInfo";
import BooksList from "../components/booksList/BooksList";
import FiltersPanel from "../components/filtersPanel/FiltersPanel";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <FiltersPanel />
          <BookInfo />

          <BooksList />
        </div>
      </div>
    </div>
  );
};

export default Home;
