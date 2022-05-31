import React from "react";
// import { Counter } from "../../features/counter/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Header from "../header/Header";
import WishPage from "../../pages/WishPage";
import AdminPanel from "../../pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishList" element={<WishPage />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
