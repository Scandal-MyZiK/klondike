import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

function ShortCell({ to = "#", image, text }) {
  return (
    <NavLink to={to} className="cell">
      {!!image ? <img src={image} alt="" /> : null}
      <span className="cell__text">{text}</span>
    </NavLink>
  );
}

export default ShortCell;
