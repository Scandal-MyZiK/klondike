import React from "react";
import "./style.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { useLocation } from "react-router-dom";

import shovel from "./assets/shovel.svg";
import tasks from "./assets/tasks.svg";
import team from "./assets/team.svg";
import map from "./assets/map.svg";
import Container from "../Container/Container";

function Navigation() {
  // Получаем текущий URL-путь
  const location = useLocation();

  // Определяем, находится ли пользователь на главной странице
  const isHome = location.pathname === "/";

  return (
    <nav className={`bottom-nav ${isHome ? "bottom-nav--dark" : ""}`}>
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
