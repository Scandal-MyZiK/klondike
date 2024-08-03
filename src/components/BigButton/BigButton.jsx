import React from "react";
import "./style.css";

export const BigButton = ({ img, text, connected, handleClick }) => {
  return (
    <button
      className={`big-button ${connected ? "connected" : ""}`}
      onClick={handleClick}
    >
      <img className="big-button__img" src={img} alt="" />
      <span className="big-button__text">{text}</span>
    </button>
  );
};
