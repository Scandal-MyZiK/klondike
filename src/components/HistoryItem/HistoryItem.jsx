import React from "react";
import "./style.css";
import HistoryItemImageTelegram from "./assets/Telegram-img.svg";
import HistoryItemImageArrow from "./assets/arrow-img.svg";

export const HistoryItem = ({ text, price }) => {
  return (
    <div className="historyItem">
      <img
        className="historyItem__img-telegram"
        src={HistoryItemImageTelegram}
        alt=""
      />
      <div className="historyItem__block">
        <span className="historyItem__text">{text}</span>
        <span className="historyItem__price">{price}</span>
      </div>
      <button className="historyItem__btn">
        <span className="historyItem__desc">Start</span>
        <img
          className="historyItem__img-arrow"
          src={HistoryItemImageArrow}
          alt=""
        />
      </button>
    </div>
  );
};
