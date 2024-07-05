import React from "react";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import Title from "../../components/Title/Title";
import { InformationBox } from "../../components/InformationBox/InformationBox";
import { Copylink } from "../../components/Copylink/Copylink";
import { Partners } from "../../components/Partners/Partners";
import { Levels } from "../../components/Levels/Levels";

import "./style.css";

const Team = () => {
  return (
    <AppWidthWithContainer className="teame-bg">
      <Title text="Teame"></Title>
      <InformationBox
        title="Приглашай друзей"
        text="Чем больше друзей вы и ваши друзья пригласите в игру, тем выше будет
          уровень вашего"
      />
      <Copylink text="copylink/ref/nickname" />
      <Partners text="All partners:" number="450" />
      <Levels numbers="46" desc="Level 1" text="partners" />
    </AppWidthWithContainer>
  );
};

export default Team;
