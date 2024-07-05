import React from "react";
import LevelsImg from "./assets/Levels-img.svg";
import "./style.css";

export const LevelItem = ({ numbers, text, desc }) => {
  return (
    <div className="levels__block">
      <div className="levels__info">
        <img className="levels__img" src={LevelsImg} alt="" />
        <span className="levels__numbers">{numbers}</span>
      </div>
      <p className="levels__desc">{desc}</p>
      <p className="levels__text">{text}</p>
    </div>
  );
};
