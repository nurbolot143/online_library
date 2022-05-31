import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <h2>
        Книги отсутствуют. Перейдите в <Link to="/adminPanel">Admin Panel</Link>
        , и добавьте новые книги!
      </h2>
    </div>
  );
};

export default Message;
