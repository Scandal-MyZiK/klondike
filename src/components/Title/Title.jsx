import React from "react";
import "./style.css";

function Title({ text }) {
  return (
    <h2 className="title" data-title={text}>
      {text}
    </h2>
  );
}

export default Title;
