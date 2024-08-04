import React from "react";
import "./style.css";
import Cross from "./assets/button-Cross.svg";
import { BigButton } from "../BigButton/BigButton";
import Wallet from "./assets/popup-img__wallet.svg";
import Twitter from "./assets/popup-img__twitter.svg";
import Discord from "./assets/popup-img__discord.svg";

export const Popup = ({ isOpen, onClose, img, text }) => {
  return (
    <div className={`popup ${isOpen ? "popup-open" : ""}`}>
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          <img className="popup__btn" src={Cross} alt="" />
        </button>
        <img className="popup__img" src={img} alt="" />
        <span className="popup__text">{text}</span>
        <div className="popup__block">
          <BigButton img={Wallet} text="connect wallet" />
          <BigButton img={Twitter} text="connect twitter" connected={true} />
          <BigButton img={Discord} text="connect discord" />
        </div>
      </div>
    </div>
  );
};
