import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <Link to="/">Online Library</Link>
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "4px solid #f3c26b" : "none",
                  color: isActive ? "#fcc349" : undefined,
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/wishList"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "4px solid #f3c26b" : "none",
                  color: isActive ? "#fcc349" : undefined,
                })}
              >
                Wish List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
