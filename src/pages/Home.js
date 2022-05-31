import React from "react";
import BooksList from "../components/booksList/BooksList";
import SettingsPanel from "../components/settingsPanel/SettingsPanal";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <SettingsPanel />
          <BooksList />
        </div>
      </div>
    </div>
  );
};

export default Home;
