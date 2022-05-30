import React from "react";
import BookList from "../components/BookList";
import Filters from "../components/Filters";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <Filters />
          <BookList />
        </div>
      </div>
    </div>
  );
};

export default Home;
