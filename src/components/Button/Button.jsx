import React from "react";
import "./style.css";

export const Button = ({ text, active, handleClick }) => {
  return (
    <button
      className={`button ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
