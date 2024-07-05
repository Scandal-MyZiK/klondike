import React from "react";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import Title from "../../components/Title/Title";
import "./style.css";

const Home = () => {
  return (
    <AppWidthWithContainer className="home-bg">
      <Title text="Home" />
    </AppWidthWithContainer>
  );
};

export default Home;
