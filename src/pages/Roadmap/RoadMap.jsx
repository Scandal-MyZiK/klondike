import React from "react";
import Title from "../../components/Title/Title";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import { StoryLine } from "../../components/StoryLine/StoryLine";
import "./style.css";

const RoadMap = () => {
  return (
    <AppWidthWithContainer>
      <div className="roadmap">
        <Title text="Roadmap" />
        <div className="roadmap__content">
          <StoryLine />
        </div>
      </div>
    </AppWidthWithContainer>
  );
};

export default RoadMap;
