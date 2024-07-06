import React from "react";
import "./style.css";
import HistoryItemImageTelegram from "./assets/Telegram-img.svg";
import HistoryItemImageArrow from "./assets/arrow-img.svg";

export const HistoryItem = ({ text, price }) => {
  return (
    <div className="history-item">
      <div className="history-item__container">
        <img
          className="history-item__img-telegram"
          src={HistoryItemImageTelegram}
          alt=""
        />
        <div className="history-item__block">
          <span className="history-item__text">{text}</span>
          <span className="history-item__price">{price}</span>
        </div>
      </div>
      <button className="history-item__btn">
        <span className="history-item__desc">Start</span>
        <img
          className="history-item__img-arrow"
          src={HistoryItemImageArrow}
          alt=""
        />
      </button>
    </div>
  );
};
