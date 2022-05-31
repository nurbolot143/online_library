import React from "react";
import { Link, NavLink } from "react-router-dom";

const navBtns = [
  { id: 0, label: "Home", to: "/" },
  { id: 1, label: "Wish List", to: "/wishList" },
  { id: 2, label: "Admin Panel", to: "/adminPanel" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <Link to="/">Online Library</Link>
          </div>

          <ul className="nav__list">
            {navBtns.map(({ id, label, to }) => {
              return (
                <li key={id} className="nav__item">
                  <NavLink
                    to={to}
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "4px solid #f3c26b" : "none",
                      color: isActive ? "#fcc349" : undefined,
                    })}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
