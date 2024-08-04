import React from "react";

import "./style.css";

function ShortCell({ image, text, onClick }) {
  return (
    <button onClick={onClick} className="cell">
      {!!image ? <img src={image} alt="" /> : null}
      <span className="cell__text">{text}</span>
    </button>
  );
}

export default ShortCell;
