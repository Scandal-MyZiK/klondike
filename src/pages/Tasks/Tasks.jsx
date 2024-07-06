import React from "react";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import Title from "../../components/Title/Title";
import { Button } from "../../components/Buttons/Button";

import "./style.css";

const Tasks = () => {
  return (
    <AppWidthWithContainer>
      <Title text="TASKS" />
      <Button text="Active" />
    </AppWidthWithContainer>
  );
};

export default Tasks;
