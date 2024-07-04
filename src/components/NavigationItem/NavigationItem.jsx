import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function NavigationItem({ path, text, icon }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "bottom-nav__link active" : "bottom-nav__link"
      }
      to={path}
    >
      <img className="bottom-nav__img" src={icon} alt="" />
      <span className="bottom-nav__text">{text}</span>
    </NavLink>
  );
}

export default NavigationItem;
