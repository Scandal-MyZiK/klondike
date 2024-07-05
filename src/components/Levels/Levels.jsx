import React from "react";
import "./style.css";
import { LevelItem } from "../LevelItem/LevelItem";

export const Levels = () => {
  return (
    <div className="levels">
      <LevelItem numbers="46" desc="Level 1" text="partners" />
      <LevelItem numbers="119" desc="Level 2" text="partners" />
      <LevelItem numbers="285" desc="Level 3" text="partners" />
    </div>
  );
};
