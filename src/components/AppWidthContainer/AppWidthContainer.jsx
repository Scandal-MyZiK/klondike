import React from "react";
import "./style.css";
import Container from "../Container/Container";

const AppWidthContainer = ({ children, className = "" }) => {
  return (
    <div className={`app-width ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};

export default AppWidthContainer;
