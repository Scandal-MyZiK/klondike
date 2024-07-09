import React from "react";

import "./style.css";

function ShortCell({ image, text }) {
  return (
    <div className="cell">
      {!!image ? <img src={image} alt="" /> : null}
      <span className="cell__text">{text}</span>
    </div>
  );
}

export default ShortCell;
