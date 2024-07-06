import React from "react";
import AppWidthWithContainer from "../../components/AppWidthContainer/AppWidthWithContainer";
import Title from "../../components/Title/Title";

import "./style.css";
import { HistoryTabs } from "../../components/HistoryTabs/HistoryTabs";

const Tasks = () => {
  return (
    <AppWidthWithContainer>
      <div className="tasks">
        <Title text="TASKS" />
        <div className="tasks__content">
          <HistoryTabs />
        </div>
      </div>
    </AppWidthWithContainer>
  );
};

export default Tasks;
