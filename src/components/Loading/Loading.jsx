import React from "react";
import "./style.css";
import AppWidth from "../AppWidthContainer/AppWidthContainer";

import LoadingImg from "./assets/loading-img.png";

const Loading = () => {
  return (
    <AppWidth className="loading-bg">
      <div className="loading-content">
        <img className="loading-img" src={LoadingImg} alt="" />
      </div>
    </AppWidth>
  );
};

export default Loading;
