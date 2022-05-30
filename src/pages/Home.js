import React from "react";
import Filters from "../components/Filters";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <Filters />
          <div className="bookList"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
