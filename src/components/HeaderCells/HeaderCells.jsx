import React from "react";
import "./style.css";
import ShortCell from "../ShortCell/ShortCell";

import Profile from "./assets/img/profile.png";
import Cup from "./assets/img/solar_cup.svg";

export const HeaderCells = () => {
  return (
    <div className="header-cells">
      <ShortCell to="/profile" image={Profile} text="Martinteetetetet" />
      <ShortCell image={Cup} text="3987" />
    </div>
  );
};
