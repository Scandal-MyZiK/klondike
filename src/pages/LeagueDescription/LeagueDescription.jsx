import React from "react";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import "./style.css";
import { LeagueSlider } from "../../components/LeagueSlider/LeagueSlider";

const LeagueDescription = () => {
  return (
    <AppWidthWithContainer className="league-description">
      <div className="league-description__content">
        <LeagueSlider />
      </div>
    </AppWidthWithContainer>
  );
};

export default LeagueDescription;
