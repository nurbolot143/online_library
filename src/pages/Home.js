import React from "react";
import BooksList from "../components/booksList/BooksList";
import Filters from "../components/filters/Filters";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <Filters />
          <BooksList />
        </div>
      </div>
    </div>
  );
};

export default Home;
