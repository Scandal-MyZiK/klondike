import React, { useState } from "react";
import "./style.css";
import ShortCell from "../ShortCell/ShortCell";
import { Popup } from "../Popup/Popup";
import Face from "../Popup/assets/popup-img_face.png";

import Profile from "./assets/img/profile.png";
import Cup from "./assets/img/solar_cup.svg";

export const HeaderCells = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="header-cells">
      <ShortCell image={Profile} text="Martinteetetetet" onClick={openPopup} />

      <ShortCell image={Cup} text="3987" />

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        img={Face}
        text="Username"
      />
    </div>
  );
};
