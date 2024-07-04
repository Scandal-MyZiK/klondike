import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function NavigationItem({ path, text, icon }) {
  return (
    <NavLink
      className="bottom-nav__link"
      exact
      to={path}
      activeClassName="active"
    >
      <img className="bottom-nav__img" src={icon} />
      <span className="bottom-nav__text">{text}</span>
    </NavLink>
  );
}

export default NavigationItem;
