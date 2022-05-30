import React from "react";
import { Counter } from "../../features/counter/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Header from "../header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishList" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
