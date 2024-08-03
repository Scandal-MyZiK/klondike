import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Arrow from "./assets/arrow.svg";

export const LeagueLink = ({ link, text, img }) => {
  return (
    <NavLink className="league-link" to={link}>
      <img className="league-link__img-shovel" src={img} alt="" />
      <span className="league-link__text">{text}</span>
      <img className="league-link__img-arrow" src={Arrow} alt="" />
    </NavLink>
  );
};
