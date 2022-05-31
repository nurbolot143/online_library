import React from "react";

const BookInfo = () => {
  return (
    <div className="booksInfo">
      <div className="booksInfo__item">
        Oбщее количество книг: <span>9</span>
      </div>
      <div className="booksInfo__item">
        Количество книг в категории "<span>Сказки</span>": <span>3</span>
      </div>
    </div>
  );
};

export default BookInfo;
