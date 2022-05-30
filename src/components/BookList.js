import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const BookList = () => {
  return (
    <div className="book">
      <ul className="book__list">
        <li className="book__item">
          <div className="book__left">
            <div className="book__name">Lear Js</div>
            <div className="book__author">Jane Miller</div>
          </div>
          <div className="book__right">
            <BorderColorIcon className="book__changeIcon" fontSize="large" />
            <DeleteIcon className="book__deleteIcon" fontSize="large" />
            <StarIcon className="book__favIcon" fontSize="large" />
          </div>
        </li>
        <li className="book__item">
          <div className="book__left">
            <div className="book__name">Lear Js</div>
            <div className="book__author">Jane Miller</div>
          </div>
          <div className="book__right">
            <BorderColorIcon className="book__changeIcon" fontSize="large" />
            <DeleteIcon className="book__deleteIcon" fontSize="large" />
            <StarIcon className="book__favIcon" fontSize="large" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BookList;
