import React from "react";
import "./style.css";
import CopylinkImage from "./assets/Copylink-img.svg";

export const Copylink = ({ text }) => {
  return (
    <div className="copylink">
      <span className="copylink__text">{text}</span>
      <button className="copylink__btn">
        <img className="copylink__img" src={CopylinkImage} alt="" />
      </button>
    </div>
  );
};
