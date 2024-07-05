import React from "react";
import "./style.css";
import PartnersImg from "./assets/Partners-img.svg";

export const Partners = ({ text, number }) => {
  return (
    <div className="partners">
      <img className="partners__img" src={PartnersImg} alt="" />
      <div className="partners__block">
        <span className="partners__text">{text}</span>
        <span className="partners__number">{number}</span>
      </div>
    </div>
  );
};
