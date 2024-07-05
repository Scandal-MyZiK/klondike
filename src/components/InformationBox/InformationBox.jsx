import React from "react";
import "./style.css";
import Paragraph from "./assets/Paragraph.svg";

export const InformationBox = ({ title, text }) => {
  return (
    <div className="information-box">
      <img className="information-box__img" src={Paragraph} alt="" />
      <div className="information-box__block">
        <span className="information-box__title">{title}</span>
        <p className="information-box__text">{text}</p>
      </div>
    </div>
  );
};
