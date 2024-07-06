import React from "react";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import Title from "../../components/Title/Title";
import { Button } from "../../components/Buttons/Button";
import { HistoryItem } from "../../components/HistoryItem/HistoryItem";

import "./style.css";

const Tasks = () => {
  return (
    <AppWidthWithContainer>
      <Title text="TASKS" />
      <Button text="Active" />
      <HistoryItem
        text="Subscribe to our CEO channel (RU)"
        price="+ $ 100,000"
      />
    </AppWidthWithContainer>
  );
};

export default Tasks;
