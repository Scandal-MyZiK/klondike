import React from "react";
import "./style.css";
import NavigationItem from "../NavigationItem/NavigationItem";

import shovel from "./assets/shovel.svg";
import tasks from "./assets/tasks.svg";
import team from "./assets/team.svg";
import map from "./assets/map.svg";
import Container from "../Container/Container";

function Navigation() {
  return (
    <nav className="bottom-nav">
      <Container className="bottom-nav__container">
        <NavigationItem path={"/"} icon={shovel}></NavigationItem>
        <NavigationItem
          path={"/tasks"}
          icon={tasks}
          text={"TASKS"}
        ></NavigationItem>
        <NavigationItem
          path={"/team"}
          icon={team}
          text={"TEAM"}
        ></NavigationItem>
        <NavigationItem
          path={"/roadmap"}
          icon={map}
          text={"ROAD MAP"}
        ></NavigationItem>
      </Container>
    </nav>
  );
}

export default Navigation;
