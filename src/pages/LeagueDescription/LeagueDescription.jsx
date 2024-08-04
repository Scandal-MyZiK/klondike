import React, { useEffect } from "react";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import "./style.css";
import { LeagueSlider } from "../../components/LeagueSlider/LeagueSlider";

const LeagueDescription = () => {
  useEffect(() => {
    // Add the class when the component mounts
    const appContainer = document.querySelector(".app-container");
    if (appContainer) {
      appContainer.classList.add("app-container--league");
    }

    // Clean up the class when the component unmounts
    return () => {
      if (appContainer) {
        appContainer.classList.remove("app-container--league");
      }
    };
  }, []);

  return (
    <AppWidthWithContainer className="league-description">
      <div className="league-description__content">
        <LeagueSlider />
      </div>
    </AppWidthWithContainer>
  );
};

export default LeagueDescription;
