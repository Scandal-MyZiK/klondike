import React from "react";
import "./style.css";
import Title from "../Title/Title";

import CoinsIcon from "./assets/coins.png";

export const TotalCount = () => {
  return (
    <div className="total-count">
      <img src={CoinsIcon} alt="" />
      <Title text="2320" />
    </div>
  );
};
