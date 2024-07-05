import React from "react";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import "./style.css";
import { HeaderCells } from "../../components/HeaderCells/HeaderCells";
import { TotalCount } from "../../components/TotalCount/TotalCount";
import { ShovelAnimation } from "../../components/ShovelAnimation/ShovelAnimation";

const Home = () => {
  return (
    <AppWidthWithContainer className="home">
      <div className="home__content">
        <HeaderCells />
        <div className="home__total">
          <TotalCount />
        </div>
        <div className="home__shovel">
          <ShovelAnimation />
        </div>
      </div>
    </AppWidthWithContainer>
  );
};

export default Home;
