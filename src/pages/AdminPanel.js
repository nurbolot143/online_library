import React from "react";

import BooksAddForm from "../components/booksAddForm/BooksAddForm";

const AdminPanel = () => {
  return (
    <div className="adminPanel">
      <div className="container">
        <BooksAddForm />
      </div>
    </div>
  );
};

export default AdminPanel;
