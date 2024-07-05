import React from "react";
import "./style.css";
import AppWidthWithContainer from "../AppWidthContainer/AppWidthWithContainer";

import LoadingImg from "./assets/loading-img.png";

const Loading = () => {
  return (
    <AppWidthWithContainer className="loading-bg">
      <div className="loading-content">
        <img className="loading-img" src={LoadingImg} alt="" />
      </div>
    </AppWidthWithContainer>
  );
};

export default Loading;
